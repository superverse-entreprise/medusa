import{u,j as s,a1 as d}from"./index-S--WvUSo.js";import{A as x}from"./action-menu-olZwXQ3q.js";import{S as e}from"./section-row-f0fE6sMo.js";import{P as j}from"./pencil-square-u3fizEAQ.js";import{H as p}from"./heading-cSlef4Su.js";const A=({inventoryItem:a})=>{var r,o,n;const{t}=u(),i=(a.variant?Array.isArray(a.variant)?a.variant:[a.variant]:[]).map(c=>c.title);return s.jsxs(d,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(p,{children:a.title??a.sku}),s.jsx(x,{groups:[{actions:[{icon:s.jsx(j,{}),label:t("actions.edit"),to:"edit"}]}]})]}),s.jsx(e,{title:t("fields.sku"),value:a.sku??"-"}),s.jsx(e,{title:t("inventory.associatedVariants"),value:i!=null&&i.length?i.join(", "):"-"}),s.jsx(e,{title:t("fields.inStock"),value:l(a.stocked_quantity,(r=a.location_levels)==null?void 0:r.length)}),s.jsx(e,{title:t("inventory.reserved"),value:l(a.reserved_quantity,(o=a.location_levels)==null?void 0:o.length)}),s.jsx(e,{title:t("inventory.available"),value:l(a.stocked_quantity-a.reserved_quantity,(n=a.location_levels)==null?void 0:n.length)})]})},l=(a,t)=>`${a??"-"}
   ${a?`across ${t} locations`:""}`;export{A as I};
