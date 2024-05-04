import{p as v,g as w,f as T}from"./promotions-hsTHlNrt.js";import{Z as S,m as D,j as o,u as c,a1 as E,ap as _}from"./index-S--WvUSo.js";import{r as h}from"./react-PzSkSLoa.js";import{d as q,L as A,O as L,a as N}from"./react-router-dom-aSYyayiN.js";import{A as H}from"./action-menu-olZwXQ3q.js";import{u as I,a as O,D as Q}from"./use-data-table-TeZp00wg.js";import{T as u,a as g}from"./text-cell-OtkuJsO8.js";import{P as l,g as k}from"./promotions-0QMhkDUf.js";import{S as $}from"./status-cell-9XExsAIG.js";import{c as j}from"./index-JDlOzmVl.js";import{P as z}from"./pencil-square-u3fizEAQ.js";import{T as B}from"./trash-nTjeUaCp.js";import{u as M}from"./use-prompt-wB0F2CxI.js";import{H as K}from"./heading-cSlef4Su.js";import{B as R}from"./button-Pc5Xo8ua.js";import"./react-dom-Og6--24v.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./index-1Zwdg31z.js";import"./use-date-Putn0_Ur.js";import"./format-vrL-wy9v.js";import"./date-picker-s8-9mila.js";import"./input-A29ux7yj.js";import"./minus-E5-czcFC.js";import"./x-mark-mini-aYDSd38M.js";import"./index-7dV3TD85.js";import"./index-Hm2Uj9Gg.js";import"./lodash-5s15_I2H.js";import"./label-HFq5fzpT.js";import"./command-bar-wUgfUfvQ.js";import"./placeholder-cell-O6UVTGmQ.js";import"./prompt-LzbVPZYR.js";import"./index-sF0hA49A.js";const y={limit:20,offset:0},F=()=>({queryKey:v.list(y),queryFn:async()=>D.admin.custom.get("/promotions",y)}),Qe=t=>async()=>{const e=F();return S.getQueryData(e.queryKey)??await t.fetchQuery(e)},J={widgets:[]},Z={widgets:[]},G=({code:t})=>o.jsx("div",{className:"flex h-full w-full items-center gap-x-3 overflow-hidden",children:o.jsx("span",{className:"bg-ui-tag-neutral-bg truncate rounded-md border border-neutral-200 p-1 text-xs",children:t})}),U=({text:t})=>o.jsx("div",{className:" flex h-full w-full items-center ",children:o.jsx("span",{children:t})}),V=({promotion:t})=>{const{t:e}=c(),s={[l.DISABLED]:["grey",e("statuses.disabled")],[l.ACTIVE]:["green",e("statuses.active")],[l.SCHEDULED]:["orange",e("statuses.scheduled")],[l.EXPIRED]:["red",e("statuses.expired")]},[r,a]=s[k(t)];return o.jsx($,{color:r,children:a})},d=j(),W=()=>{const{t}=c();return h.useMemo(()=>[d.display({id:"code",header:()=>o.jsx(U,{text:t("fields.code")}),cell:({row:e})=>o.jsx(G,{code:e.original.code})}),d.display({id:"campaign",header:()=>o.jsx(u,{text:t("promotions.fields.campaign")}),cell:({row:e})=>{var s;return o.jsx(g,{text:(s=e.original.campaign)==null?void 0:s.name})}}),d.display({id:"method",header:()=>o.jsx(u,{text:t("promotions.fields.method")}),cell:({row:e})=>{const s=e.original.is_automatic?"Automatic":"Promotion Code";return o.jsx(g,{text:s})}}),d.display({id:"status",header:()=>o.jsx(u,{text:t("fields.status")}),cell:({row:e})=>o.jsx(V,{promotion:e.original})})],[])},X=()=>{const{t}=c();return[{label:t("fields.createdAt"),key:"created_at",type:"date"},{label:t("fields.updatedAt"),key:"updated_at",type:"date"}]},Y=({prefix:t,pageSize:e=20})=>{const s=I(["offset","q","created_at","updated_at"],t),{offset:r,q:a,created_at:i,updated_at:n}=s;return{searchParams:{limit:e,created_at:i?JSON.parse(i):void 0,updated_at:n?JSON.parse(n):void 0,offset:r?Number(r):0,q:a},raw:s}},p=20,ee=()=>{const{t}=c(),e=q(),{searchParams:s,raw:r}=Y({pageSize:p}),{promotions:a,count:i,isLoading:n,isError:x,error:b}=w({...s},{initialData:e,placeholderData:_}),P=X(),f=se(),{table:C}=O({data:a??[],columns:f,count:i,enablePagination:!0,pageSize:p,getRowId:m=>m.id});if(x)throw b;return o.jsxs(E,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(K,{level:"h2",children:t("promotions.domain")}),o.jsx(R,{size:"small",variant:"secondary",asChild:!0,children:o.jsx(A,{to:"create",children:t("actions.create")})})]}),o.jsx(Q,{table:C,columns:f,count:i,pageSize:p,filters:P,search:!0,pagination:!0,isLoading:n,queryObject:r,navigateTo:m=>`${m.original.id}`,orderBy:["created_at","updated_at"]}),o.jsx(L,{})]})},te=({promotion:t})=>{const{t:e}=c(),s=M(),r=N(),{mutateAsync:a}=T(t.id),i=async()=>{if(await s({title:e("general.areYouSure"),description:e("promotions.deleteWarning",{code:t.code}),confirmText:e("actions.delete"),cancelText:e("actions.cancel"),verificationInstruction:e("general.typeToConfirm"),verificationText:t.code}))try{await a(void 0,{onSuccess:()=>{r("/promotions",{replace:!0})}})}catch{throw new Error(`Promotion with code ${t.code} could not be deleted`)}};return o.jsx(H,{groups:[{actions:[{icon:o.jsx(z,{}),label:e("actions.edit"),to:`/promotions/${t.id}/edit`},{icon:o.jsx(B,{}),label:e("actions.delete"),onClick:i}]}]})},oe=j(),se=()=>{const t=W();return h.useMemo(()=>[...t,oe.display({id:"actions",cell:({row:e})=>o.jsx(te,{promotion:e.original})})],[t])},ke=()=>o.jsxs("div",{className:"flex flex-col gap-y-2",children:[Z.widgets.map((t,e)=>o.jsx(t.Component,{},e)),o.jsx(ee,{}),J.widgets.map((t,e)=>o.jsx(t.Component,{},e))]});export{ke as Component,Qe as promotionsLoader};
