import{c as m}from"./countries-QR_y0WJ_.js";const y=(s,e)=>!s||!e?!1:s.first_name===e.first_name&&s.last_name===e.last_name&&s.address_1===e.address_1&&s.address_2===e.address_2&&s.city===e.city&&s.postal_code===e.postal_code&&s.province===e.province&&s.country_code===e.country_code,h=({address:s})=>{if(!s)return[];const{first_name:e,last_name:r,company:o,address_1:n,address_2:i,city:p,postal_code:f,province:u,country:a,country_code:c}=s,d=[e,r].filter(Boolean).join(" "),t=[];d&&t.push(d),o&&t.push(o),n&&t.push(n),i&&t.push(i);const _=[p,u,f].filter(Boolean).join(" ");return _&&t.push(_),a?t.push(a.display_name):c&&t.push(c.toUpperCase()),t},v=s=>{if(!s)return"";const e=m.find(r=>r.iso_2===s);return e?e.display_name:s};export{v as a,h as g,y as i};
