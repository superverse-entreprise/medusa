import{u as l,j as e,aW as x,a1 as j,ap as g}from"./index-S--WvUSo.js";import{L as h,O as y}from"./react-router-dom-aSYyayiN.js";import{u as b,a as P,D as v}from"./use-data-table-TeZp00wg.js";import{r as T}from"./react-PzSkSLoa.js";import{A as U}from"./action-menu-olZwXQ3q.js";import{P as w}from"./pencil-square-u3fizEAQ.js";import{c as C}from"./index-JDlOzmVl.js";import{H as D}from"./heading-cSlef4Su.js";import{B as E}from"./button-Pc5Xo8ua.js";import"./react-dom-Og6--24v.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./index-1Zwdg31z.js";import"./use-date-Putn0_Ur.js";import"./format-vrL-wy9v.js";import"./date-picker-s8-9mila.js";import"./input-A29ux7yj.js";import"./minus-E5-czcFC.js";import"./x-mark-mini-aYDSd38M.js";import"./index-7dV3TD85.js";import"./index-Hm2Uj9Gg.js";import"./lodash-5s15_I2H.js";import"./label-HFq5fzpT.js";import"./command-bar-wUgfUfvQ.js";const L=({user:r})=>{const{t:s}=l();return e.jsx(U,{groups:[{actions:[{icon:e.jsx(w,{}),label:s("actions.edit"),to:`${r.id}/edit`}]}]})},n=C(),S=()=>{const{t:r}=l();return T.useMemo(()=>[n.accessor("email",{header:r("fields.email"),cell:({row:s})=>s.original.email}),n.display({id:"name",header:r("fields.name"),cell:({row:s})=>{const a=[s.original.first_name,s.original.last_name].filter(Boolean).join(" ");return a||e.jsx("span",{className:"text-ui-fg-muted",children:"-"})}}),n.display({id:"actions",cell:({row:s})=>e.jsx(L,{user:s.original})})],[r])},_=({pageSize:r=20,prefix:s})=>{const a=b(["q","order","offset"],s),{offset:t,...i}=a;return{searchParams:{limit:r,offset:t?parseInt(t):0,...i},raw:a}},m=20,z=()=>{const{raw:r,searchParams:s}=_({pageSize:m}),{users:a,count:t,isPending:i,isError:c,error:d}=x(s,{placeholderData:g}),p=S(),{table:f}=P({data:a??[],columns:p,count:t,enablePagination:!0,getRowId:o=>o.id,pageSize:m}),{t:u}=l();if(c)throw d;return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(D,{level:"h2",children:u("users.domain")}),e.jsx(E,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(h,{to:"invite",children:u("users.invite")})})]}),e.jsx(v,{table:f,columns:p,count:t,pageSize:m,isLoading:i,orderBy:["email","first_name","last_name"],navigateTo:o=>`${o.id}`,search:!0,pagination:!0,queryObject:r})]})},ae=()=>e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(z,{}),e.jsx(y,{})]});export{ae as Component};
