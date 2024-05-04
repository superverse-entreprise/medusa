export default class ProcessManager {
    intervals = [];
    static MAX_RETRIES = 3;
    constructor() {
        this.onTerminated(() => {
            this.intervals.forEach((interval) => {
                clearInterval(interval);
            });
        });
    }
    onTerminated(fn) {
        process.on("SIGTERM", () => fn());
        process.on("SIGINT", () => fn());
    }
    addInterval(interval) {
        this.intervals.push(interval);
    }
    // when running commands with npx or npm sometimes they
    // terminate with EAGAIN error unexpectedly
    // this utility function allows retrying the process if
    // EAGAIN occurs, or otherwise throw the error that occurs
    async runProcess({ process, ignoreERESOLVE }) {
        let processError = false;
        let retries = 0;
        do {
            ++retries;
            try {
                await process();
            }
            catch (error) {
                if (typeof error === "object" &&
                    error !== null &&
                    "code" in error &&
                    error?.code === "EAGAIN") {
                    processError = true;
                }
                else if (ignoreERESOLVE &&
                    typeof error === "object" &&
                    error !== null &&
                    "code" in error &&
                    error?.code === "ERESOLVE") {
                    // ignore error
                }
                else {
                    throw error;
                }
            }
        } while (processError && retries <= ProcessManager.MAX_RETRIES);
    }
}
