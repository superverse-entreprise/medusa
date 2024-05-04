import{a4 as E,u as M,a5 as $,j as e,T as h,a6 as H,a7 as L}from"./index-S--WvUSo.js";import{u as k,a as c}from"./route-focus-modal-MMx5Xnk0.js";import{t as G}from"./zod-jt04JUtm.js";import{r as R}from"./react-PzSkSLoa.js";import{u as V,a as z,F as s}from"./form-0PHaH8g8.js";import{o as B,s as x,b as A,d as P}from"./index-JzuMwgWW.js";import{c as U}from"./currencies-bd3ADI6s.js";import{a as O}from"./money-amount-helpers--myf8Rla.js";import{B as g}from"./button-Pc5Xo8ua.js";import{H as W}from"./heading-cSlef4Su.js";import{S as d}from"./select-Z4sV_-wF.js";import{T as q}from"./tooltip-Ixyw9oT8.js";import{I as C}from"./input-A29ux7yj.js";import{C as J}from"./currency-input-k1bgGOuE.js";import{S as b}from"./switch-VR1xZXYU.js";import{D as K}from"./date-picker-s8-9mila.js";import{T as Q}from"./textarea-D4fuXHvE.js";import"./react-dom-Og6--24v.js";import"./react-router-dom-aSYyayiN.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./prompt-LzbVPZYR.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./index-Hm2Uj9Gg.js";import"./triangles-mini-HukRlWGp.js";import"./index-1Zwdg31z.js";import"./minus-E5-czcFC.js";const X=B({region_id:x(),value:x(),is_enabled:A(),ends_at:P().nullable(),email:x().email(),personal_message:x().optional()}),Y=()=>{var j,p;const[f,y]=R.useState(!1),{regions:i}=E({limit:1e3,fields:"id,name,currency_code"}),{t:l}=M(),{handleSuccess:_}=k(),a=V({defaultValues:{region_id:((j=i==null?void 0:i[0])==null?void 0:j.id)??"",value:"",is_enabled:!0,ends_at:null,email:"",personal_message:""},resolver:G(X)}),{setValue:v,setError:F}=a,N=z({control:a.control,name:"region_id"}),n=(p=i==null?void 0:i.find(r=>r.id===N))==null?void 0:p.currency_code,u=n?U[n.toUpperCase()].symbol_native:void 0,{mutateAsync:S,isLoading:w}=$(),T=r=>{r||v("ends_at",null,{shouldDirty:!0}),y(r)},I=a.handleSubmit(async r=>{if(!n){F("region_id",{type:"manual",message:l("giftCards.selectRegionFirst")});return}await S({region_id:r.region_id,value:O(parseFloat(r.value),n),is_disabled:!r.is_enabled,ends_at:r.ends_at??void 0,metadata:{email:r.email,personal_message:r.personal_message}},{onSuccess:({gift_card:t})=>{_(`../${t.id}`)}})});return e.jsx(c.Form,{form:a,children:e.jsxs("form",{className:"flex h-full flex-col overflow-hidden",onSubmit:I,children:[e.jsx(c.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(c.Close,{asChild:!0,children:e.jsx(g,{size:"small",variant:"secondary",children:l("actions.cancel")})}),e.jsx(g,{size:"small",type:"submit",isLoading:w,children:l("actions.save")})]})}),e.jsx(c.Body,{className:"flex h-full w-full flex-col items-center overflow-y-auto py-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(W,{children:l("giftCards.createGiftCard")}),e.jsx(h,{size:"small",className:"text-ui-fg-subtle",children:l("giftCards.createGiftCardHint")})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(s.Field,{control:a.control,name:"region_id",render:({field:{onChange:r,ref:t,...m}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.region")}),e.jsx(s.Control,{children:e.jsxs(d,{...m,onValueChange:r,children:[e.jsx(d.Trigger,{ref:t,children:e.jsx(d.Value,{})}),e.jsx(d.Content,{children:i==null?void 0:i.map(o=>e.jsx(d.Item,{value:o.id,children:o.name},o.id))})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"value",render:({field:{onChange:r,...t}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("giftCards.balance")}),e.jsx(s.Control,{children:!n||!u?e.jsx(q,{content:l("giftCards.selectRegionFirst"),children:e.jsx(C,{disabled:!0})}):e.jsx(J,{code:n.toUpperCase(),symbol:u,min:0,onValueChange:r,...t})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(s.Field,{control:a.control,name:"is_enabled",render:({field:{value:r,onChange:t,...m}})=>e.jsxs(s.Item,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(s.Label,{children:l("general.enabled")}),e.jsx(s.Control,{children:e.jsx(b,{checked:r,onCheckedChange:t,...m})})]}),e.jsx(s.Hint,{className:"!mt-1",children:l("giftCards.enabledHint")}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"ends_at",render:({field:{value:r,onChange:t,ref:m,...o}})=>e.jsx(s.Item,{children:e.jsxs(H,{open:f,children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(s.Label,{optional:!0,children:l("fields.expiryDate")}),e.jsx(b,{checked:f,onCheckedChange:T})]}),e.jsx(h,{size:"small",className:"text-ui-fg-subtle max-w-[85%] text-pretty",children:l("giftCards.expiryDateHint")})]}),e.jsx(L,{children:e.jsx("div",{className:"grid grid-cols-2 pt-4",children:e.jsx(s.Control,{children:e.jsx(K,{value:r??void 0,onChange:D=>{t(D??null)},...o})})})})]})})}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx("div",{className:"grid grid-cols-2",children:e.jsx(s.Field,{control:a.control,name:"email",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.email")}),e.jsx(s.Control,{children:e.jsx(C,{type:"email",autoComplete:"off",...r})}),e.jsx(s.ErrorMessage,{})]})})}),e.jsx(s.Field,{control:a.control,name:"personal_message",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("giftCards.personalMessage")}),e.jsx(s.Control,{children:e.jsx(Q,{...r})}),e.jsx(s.ErrorMessage,{})]})})]})]})})]})})},we=()=>e.jsx(c,{children:e.jsx(Y,{})});export{we as Component};
