import{c as s}from"./currencies-bd3ADI6s.js";const e=r=>{var t;return((t=s[r.toUpperCase()])==null?void 0:t.decimal_digits)??0},i=(r,t)=>{const o=e(t);if(o===void 0)throw new Error("Currency has no decimal digits");return r/10**o},u=(r,t)=>{const o=e(t);if(o===void 0)throw new Error("Currency has no decimal digits");return r*10**o},g=(r,t)=>new Intl.NumberFormat(void 0,{style:"currency",currencyDisplay:"narrowSymbol",currency:t}).format(i(r,t)),c=r=>new Intl.NumberFormat(void 0,{style:"currency",currency:r,currencyDisplay:"narrowSymbol"}).format(0).replace(/\d/g,"").replace(/[.,]/g,"").trim(),d=(r,t)=>{const o=c(t),n=e(t),a=i(r,t).toLocaleString(void 0,{minimumFractionDigits:n,maximumFractionDigits:n});return`${o} ${a} ${t.toUpperCase()}`};export{u as a,i as b,g as c,d as g};
