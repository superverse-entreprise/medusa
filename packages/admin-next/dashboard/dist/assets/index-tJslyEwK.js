import{u as m,j as t,a1 as f,ap as j}from"./index-S--WvUSo.js";import{r as b}from"./react-PzSkSLoa.js";import{L as g,O as C}from"./react-router-dom-aSYyayiN.js";import{A as h}from"./action-menu-olZwXQ3q.js";import{a as y,D as T}from"./use-data-table-TeZp00wg.js";import{u as v}from"./customers--tqEK1Bz.js";import{u as P,a as _,b as D}from"./use-customer-table-query-AiiD47-k.js";import{P as E}from"./pencil-square-u3fizEAQ.js";import{H as L}from"./heading-cSlef4Su.js";import{B as S}from"./button-Pc5Xo8ua.js";import{c as w}from"./index-JDlOzmVl.js";import"./react-dom-Og6--24v.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./index-1Zwdg31z.js";import"./use-date-Putn0_Ur.js";import"./format-vrL-wy9v.js";import"./date-picker-s8-9mila.js";import"./input-A29ux7yj.js";import"./minus-E5-czcFC.js";import"./x-mark-mini-aYDSd38M.js";import"./index-7dV3TD85.js";import"./index-Hm2Uj9Gg.js";import"./lodash-5s15_I2H.js";import"./label-HFq5fzpT.js";import"./command-bar-wUgfUfvQ.js";import"./placeholder-cell-O6UVTGmQ.js";import"./status-cell-9XExsAIG.js";import"./date-cell-G_vX9su2.js";import"./tooltip-Ixyw9oT8.js";import"./customer-groups-G4KCvF3b.js";const e=20,z=()=>{const{t:s}=m(),{searchParams:o,raw:n}=P({pageSize:e}),{customers:c,count:a,isLoading:p,isError:u,error:l}=v({...o},{placeholderData:j}),d=_(),i=B(),{table:x}=y({data:c??[],columns:i,count:a,enablePagination:!0,getRowId:r=>r.id,pageSize:e});if(u)throw l;return t.jsxs(f,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(L,{children:s("customers.domain")}),t.jsx(g,{to:"/customers/create",children:t.jsx(S,{size:"small",variant:"secondary",children:s("actions.create")})})]}),t.jsx(T,{table:x,columns:i,pageSize:e,count:a,filters:d,orderBy:["email","first_name","last_name","has_account","created_at","updated_at"],isLoading:p,navigateTo:r=>r.original.id,search:!0,queryObject:n})]})},A=({customer:s})=>{const{t:o}=m();return t.jsx(h,{groups:[{actions:[{icon:t.jsx(E,{}),label:o("actions.edit"),to:`/customers/${s.id}/edit`}]}]})},H=w(),B=()=>{const s=D();return b.useMemo(()=>[...s,H.display({id:"actions",cell:({row:o})=>t.jsx(A,{customer:o.original})})],[s])},lt=()=>t.jsxs("div",{className:"flex flex-col gap-y-2",children:[t.jsx(z,{}),t.jsx(C,{})]});export{lt as Component};
