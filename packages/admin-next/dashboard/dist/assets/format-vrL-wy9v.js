import{bx as B}from"./index-S--WvUSo.js";function h(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}let X={};function M(){return X}function Y(e,t){var u,f,g,d;const n=M(),r=(t==null?void 0:t.weekStartsOn)??((f=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??n.weekStartsOn??((d=(g=n.locale)==null?void 0:g.options)==null?void 0:d.weekStartsOn)??0,a=h(e),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function y(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const G=6048e5,I=864e5,lt=43200,mt=1440;function T(e){return Y(e,{weekStartsOn:1})}function Q(e){const t=h(e),n=t.getFullYear(),r=y(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=T(r),i=y(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=T(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function N(e){const t=h(e);return t.setHours(0,0,0,0),t}function q(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function R(e,t){const n=N(e),r=N(t),a=n.getTime()-q(n),i=r.getTime()-q(r);return Math.round((a-i)/I)}function j(e){const t=Q(e),n=y(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),T(n)}function $(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function p(e){if(!$(e)&&typeof e!="number")return!1;const t=h(e);return!isNaN(Number(t))}function U(e){const t=h(e),n=y(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}function V(e){const t=h(e);return R(t,U(t))+1}function A(e){const t=h(e),n=T(t).getTime()-j(t).getTime();return Math.round(n/G)+1}function L(e,t){var d,b,D,x;const n=h(e),r=n.getFullYear(),a=M(),i=(t==null?void 0:t.firstWeekContainsDate)??((b=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:b.firstWeekContainsDate)??a.firstWeekContainsDate??((x=(D=a.locale)==null?void 0:D.options)==null?void 0:x.firstWeekContainsDate)??1,o=y(e,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const u=Y(o,t),f=y(e,0);f.setFullYear(r,0,i),f.setHours(0,0,0,0);const g=Y(f,t);return n.getTime()>=u.getTime()?r+1:n.getTime()>=g.getTime()?r:r-1}function J(e,t){var u,f,g,d;const n=M(),r=(t==null?void 0:t.firstWeekContainsDate)??((f=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(g=n.locale)==null?void 0:g.options)==null?void 0:d.firstWeekContainsDate)??1,a=L(e,t),i=y(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Y(i,t)}function K(e,t){const n=h(e),r=Y(n,t).getTime()-J(n,t).getTime();return Math.round(r/G)+1}function s(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const m={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return s(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):s(n+1,2)},d(e,t){return s(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return s(e.getHours()%12||12,t.length)},H(e,t){return s(e.getHours(),t.length)},m(e,t){return s(e.getMinutes(),t.length)},s(e,t){return s(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.floor(r*Math.pow(10,n-3));return s(a,t.length)}},O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Z={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return m.y(e,t)},Y:function(e,t,n,r){const a=L(e,r),i=a>0?a:1-a;if(t==="YY"){const o=i%100;return s(o,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(e,t){const n=Q(e);return s(n,t.length)},u:function(e,t){const n=e.getFullYear();return s(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return s(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return m.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=K(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):s(a,t.length)},I:function(e,t,n){const r=A(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):s(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):m.d(e,t)},D:function(e,t,n){const r=V(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):s(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return s(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=O.noon:r===0?a=O.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=O.evening:r>=12?a=O.afternoon:r>=4?a=O.morning:a=O.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return m.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):m.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):m.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):m.s(e,t)},S:function(e,t){return m.S(e,t)},X:function(e,t,n,r){const i=(r._originalDate||e).getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return C(i);case"XXXX":case"XX":return w(i);case"XXXXX":case"XXX":default:return w(i,":")}},x:function(e,t,n,r){const i=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return C(i);case"xxxx":case"xx":return w(i);case"xxxxx":case"xxx":default:return w(i,":")}},O:function(e,t,n,r){const i=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+F(i,":");case"OOOO":default:return"GMT"+w(i,":")}},z:function(e,t,n,r){const i=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+F(i,":");case"zzzz":default:return"GMT"+w(i,":")}},t:function(e,t,n,r){const a=r._originalDate||e,i=Math.floor(a.getTime()/1e3);return s(i,t.length)},T:function(e,t,n,r){const i=(r._originalDate||e).getTime();return s(i,t.length)}};function F(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+s(i,2)}function C(e,t){return e%60===0?(e>0?"-":"+")+s(Math.abs(e)/60,2):w(e,t)}function w(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=s(Math.floor(r/60),2),i=s(r%60,2);return n+a+t+i}const H=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},v=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},z=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return H(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",H(r,t)).replace("{{time}}",v(a,t))},tt={p:v,P:z},et=/^D+$/,nt=/^Y+$/,rt=["D","DD","YY","YYYY"];function at(e){return et.test(e)}function it(e){return nt.test(e)}function _(e,t,n){const r=st(e,t,n);if(console.warn(r),rt.includes(e))throw new RangeError(r)}function st(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ct=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ut=/^'([^]*?)'?$/,ft=/''/g,dt=/[a-zA-Z]/;function wt(e,t,n){var d,b,D,x,P,S,W,E;const r=M(),a=(n==null?void 0:n.locale)??r.locale??B,i=(n==null?void 0:n.firstWeekContainsDate)??((b=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:b.firstWeekContainsDate)??r.firstWeekContainsDate??((x=(D=r.locale)==null?void 0:D.options)==null?void 0:x.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((S=(P=n==null?void 0:n.locale)==null?void 0:P.options)==null?void 0:S.weekStartsOn)??r.weekStartsOn??((E=(W=r.locale)==null?void 0:W.options)==null?void 0:E.weekStartsOn)??0,u=h(e);if(!p(u))throw new RangeError("Invalid time value");const f={firstWeekContainsDate:i,weekStartsOn:o,locale:a,_originalDate:u};return t.match(ot).map(function(c){const l=c[0];if(l==="p"||l==="P"){const k=tt[l];return k(c,a.formatLong)}return c}).join("").match(ct).map(function(c){if(c==="''")return"'";const l=c[0];if(l==="'")return ht(c);const k=Z[l];if(k)return!(n!=null&&n.useAdditionalWeekYearTokens)&&it(c)&&_(c,t,String(e)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&at(c)&&_(c,t,String(e)),k(u,c,a.localize,f);if(l.match(dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+l+"`");return c}).join("")}function ht(e){const t=e.match(ut);return t?t[1].replace(ft,"'"):e}export{q as a,lt as b,y as c,wt as f,M as g,mt as m,h as t};
