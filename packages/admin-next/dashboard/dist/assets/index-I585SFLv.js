import{u as n,j as s,bI as b,a1 as v,by as D,Z as w,a0 as _,m as C}from"./index-S--WvUSo.js";import{r as j}from"./react-PzSkSLoa.js";import{d as S,L as N,O as P}from"./react-router-dom-aSYyayiN.js";import{A as T}from"./action-menu-olZwXQ3q.js";import{u as E,a as H,D as q}from"./use-data-table-TeZp00wg.js";import{M as A}from"./money-amount-cell-qk7EOos5.js";import{S as L}from"./status-cell-9XExsAIG.js";import{P as p,g as k}from"./discounts-t0ZvwkYf.js";import{c as y}from"./index-JDlOzmVl.js";import{P as F}from"./pencil-square-u3fizEAQ.js";import{T as R}from"./trash-nTjeUaCp.js";import{u as I}from"./use-prompt-wB0F2CxI.js";import{H as O}from"./heading-cSlef4Su.js";import{B as M}from"./button-Pc5Xo8ua.js";import"./react-dom-Og6--24v.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./index-1Zwdg31z.js";import"./use-date-Putn0_Ur.js";import"./format-vrL-wy9v.js";import"./date-picker-s8-9mila.js";import"./input-A29ux7yj.js";import"./minus-E5-czcFC.js";import"./x-mark-mini-aYDSd38M.js";import"./index-7dV3TD85.js";import"./index-Hm2Uj9Gg.js";import"./lodash-5s15_I2H.js";import"./label-HFq5fzpT.js";import"./command-bar-wUgfUfvQ.js";import"./money-amount-helpers--myf8Rla.js";import"./currencies-bd3ADI6s.js";import"./placeholder-cell-O6UVTGmQ.js";import"./index-zCI1L4vn.js";import"./prompt-LzbVPZYR.js";import"./index-sF0hA49A.js";const Q={widgets:[]},z={widgets:[]},B=()=>{const{t:e}=n();let t=[{label:e("fields.createdAt"),key:"created_at"},{label:e("fields.updatedAt"),key:"updated_at"}].map(r=>({key:r.key,label:r.label,type:"date"}));const i={key:"is_disabled",label:e("fields.disabled"),type:"select",options:[{label:e("fields.true"),value:"true"},{label:e("fields.false"),value:"false"}]},a={key:"is_dynamic",label:e("fields.type"),type:"select",options:[{label:e("fields.dynamic"),value:"true"},{label:e("fields.normal"),value:"false"}]};return t=[...t,i,a],t},$=({discount:e})=>s.jsx("div",{className:"flex h-full w-full items-center gap-x-3 overflow-hidden",children:s.jsx("span",{className:"bg-ui-tag-neutral-bg truncate rounded-md border border-neutral-200 p-1 text-xs",children:e.code})}),V=()=>{const{t:e}=n();return s.jsx("div",{className:" flex h-full w-full items-center ",children:s.jsx("span",{children:e("fields.code")})})},Z=({discount:e})=>s.jsx("div",{className:"flex h-full w-full items-center gap-x-3 overflow-hidden",children:s.jsx("span",{className:"truncate",children:e.rule.description})}),J=()=>{const{t:e}=n();return s.jsx("div",{className:" flex h-full w-full items-center ",children:s.jsx("span",{children:e("fields.description")})})},K=({currencyCode:e,rule:t})=>{const i=t.type==="fixed",a=t.type==="percentage",r=t.type==="free_shipping";return s.jsxs("div",{className:"flex h-full w-full items-center gap-x-3 overflow-hidden",children:[r&&s.jsx("span",{children:"Free shipping"}),a&&s.jsxs("span",{className:"",children:[t.value,"%"]}),i&&s.jsx(A,{currencyCode:e,amount:t.value})]})},G=()=>{const{t:e}=n();return s.jsx("div",{className:" flex h-full w-full items-center ",children:s.jsx("span",{children:e("fields.value")})})},U=({redemptions:e})=>s.jsx("div",{className:"flex h-full w-full items-center justify-end gap-x-3 text-right",children:s.jsx("span",{children:e})}),W=()=>{const{t:e}=n();return s.jsx("div",{className:"flex h-full w-full items-center justify-end text-right",children:s.jsx("span",{className:"truncate",children:e("fields.totalRedemptions")})})},X=({discount:e})=>{const{t}=n(),[i,a]={[p.DISABLED]:["grey",t("discounts.discountStatus.disabled")],[p.ACTIVE]:["green",t("discounts.discountStatus.active")],[p.SCHEDULED]:["orange",t("discounts.discountStatus.scheduled")],[p.EXPIRED]:["red",t("discounts.discountStatus.expired")]}[k(e)];return s.jsx(L,{color:i,children:a})},Y=()=>{const{t:e}=n();return s.jsx("div",{className:" flex h-full w-full items-center ",children:s.jsx("span",{children:e("fields.status")})})},l=y(),ee=()=>j.useMemo(()=>[l.display({id:"discount",header:()=>s.jsx(V,{}),cell:({row:e})=>s.jsx($,{discount:e.original})}),l.accessor("rule.description",{header:()=>s.jsx(J,{}),cell:({row:e})=>s.jsx(Z,{discount:e.original})}),l.accessor("rule.value",{header:()=>s.jsx(G,{}),cell:({row:e})=>{var t;return s.jsx(K,{rule:e.original.rule,currencyCode:(t=e.original.regions[0])==null?void 0:t.currency_code})}}),l.display({id:"status",header:()=>s.jsx(Y,{}),cell:({row:e})=>s.jsx(X,{discount:e.original})}),l.accessor("usage_count",{header:()=>s.jsx(W,{}),cell:({row:e})=>s.jsx(U,{redemptions:e.original.usage_count})})],[]),se=({prefix:e,pageSize:t=20})=>{const i=E(["offset","order","q","is_dynamic","is_disabled","created_at","updated_at"],e),{offset:a,order:r,q:o,is_dynamic:c,is_disabled:d,created_at:u,updated_at:m}=i;return{searchParams:{limit:t,is_disabled:d?d==="true":void 0,is_dynamic:c?c==="true":void 0,created_at:u?JSON.parse(u):void 0,updated_at:m?JSON.parse(m):void 0,offset:a?Number(a):0,order:r,q:o},raw:i}},h=20,te=()=>{const{t:e}=n(),t=S(),{searchParams:i,raw:a}=se({pageSize:h}),{discounts:r,count:o,isLoading:c,isError:d,error:u}=b({...i},{initialData:t,keepPreviousData:!0}),m=B(),f=re(),{table:g}=H({data:r??[],columns:f,count:o,enablePagination:!0,pageSize:h,getRowId:x=>x.id});if(d)throw u;return s.jsxs(v,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(O,{level:"h2",children:e("discounts.domain")}),s.jsx(M,{size:"small",variant:"secondary",asChild:!0,children:s.jsx(N,{to:"create",children:e("actions.create")})})]}),s.jsx(q,{table:g,columns:f,count:o,pageSize:h,filters:m,search:!0,pagination:!0,isLoading:c,queryObject:a,navigateTo:x=>`${x.original.id}`,orderBy:["code","created_at","updated_at"]}),s.jsx(P,{})]})},ie=({discount:e})=>{const{t}=n(),i=I(),{mutateAsync:a}=D(e.id),r=async()=>{await i({title:t("general.areYouSure"),description:t("discounts.deleteWarning",{code:e.code}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await a()};return s.jsx(T,{groups:[{actions:[{icon:s.jsx(F,{}),label:t("actions.edit"),to:`/discounts/${e.id}/edit`}]},{actions:[{icon:s.jsx(R,{}),label:t("actions.delete"),onClick:r}]}]})},ae=y(),re=()=>{const e=ee();return j.useMemo(()=>[...e,ae.display({id:"actions",cell:({row:t})=>s.jsx(ie,{discount:t.original})})],[e])},ze=()=>s.jsxs("div",{className:"flex flex-col gap-y-2",children:[z.widgets.map((e,t)=>s.jsx(e.Component,{},t)),s.jsx(te,{}),Q.widgets.map((e,t)=>s.jsx(e.Component,{},t))]}),ne=()=>({queryKey:_.list({limit:20,offset:0}),queryFn:async()=>C.admin.discounts.list({limit:20,offset:0})}),Be=e=>async()=>{const t=ne();return w.getQueryData(t.queryKey)??await e.fetchQuery(t)};export{ze as Component,Be as discountsLoader};
