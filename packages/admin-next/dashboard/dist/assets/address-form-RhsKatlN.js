import{u as h,d as f,j as e}from"./index-S--WvUSo.js";import{F as s}from"./form-0PHaH8g8.js";import{C as p}from"./country-select-m4Xtwmuu.js";import{S as i}from"./select-Z4sV_-wF.js";import{H as m}from"./heading-cSlef4Su.js";import{I as n}from"./input-A29ux7yj.js";const b=({control:d,countries:x,layout:j})=>{const{t:l}=h(),t=f("gap-4",{"flex flex-col":j==="stack","grid grid-cols-2":j==="grid"});return e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(m,{level:"h2",children:l("addresses.contactHeading")}),e.jsxs("fieldset",{className:t,children:[e.jsx(s.Field,{control:d,name:"first_name",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.firstName")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:d,name:"last_name",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.lastName")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:d,name:"company",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.company")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:d,name:"phone",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.phone")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})})]})]}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(m,{level:"h2",children:l("addresses.locationHeading")}),e.jsxs("fieldset",{className:t,children:[e.jsx(s.Field,{control:d,name:"address_1",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.address")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:d,name:"address_2",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.address2")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:d,name:"city",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.city")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:d,name:"postal_code",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.postalCode")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:d,name:"province",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.province")}),e.jsx(s.Control,{children:e.jsx(n,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:d,name:"country_code",render:({field:{ref:r,onChange:c,...o}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.country")}),e.jsx(s.Control,{children:x?e.jsxs(i,{...o,onValueChange:c,children:[e.jsx(i.Trigger,{ref:r,children:e.jsx(i.Value,{})}),e.jsx(i.Content,{children:x.map(a=>e.jsx(i.Item,{value:a.iso_2,children:a.display_name},a.iso_2))})]}):e.jsx(p,{...o,ref:r,onChange:c})}),e.jsx(s.ErrorMessage,{})]})})]})]})]})};export{b as A};
