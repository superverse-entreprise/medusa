import{u as l,j as s,a1 as C,T as g,Z as f,aH as E,m as I}from"./index-S--WvUSo.js";import{J as N}from"./json-view-section-Dui2O31i.js";import{e as v,a as z,c as H}from"./customer-groups-G4KCvF3b.js";import{r as w}from"./react-PzSkSLoa.js";import{L as O,a as Q,d as $,c as B,O as F}from"./react-router-dom-aSYyayiN.js";import{A as S}from"./action-menu-olZwXQ3q.js";import{a as J,D as K}from"./use-data-table-TeZp00wg.js";import{u as M}from"./customers--tqEK1Bz.js";import{u as Z,a as V,b as U}from"./use-customer-table-query-AiiD47-k.js";import{P as b}from"./pencil-square-u3fizEAQ.js";import{T as G}from"./trash-nTjeUaCp.js";import{u as d}from"./use-prompt-wB0F2CxI.js";import{H as T}from"./heading-cSlef4Su.js";import{B as W}from"./button-Pc5Xo8ua.js";import{C as h}from"./checkbox-8MlXzZCx.js";import{c as X}from"./index-JDlOzmVl.js";import{t as y}from"./toast-4oQfF9Sm.js";import"./react-dom-Og6--24v.js";import"./badge-99FyByJO.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./x-mark-mini-aYDSd38M.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./index-1Zwdg31z.js";import"./use-date-Putn0_Ur.js";import"./format-vrL-wy9v.js";import"./date-picker-s8-9mila.js";import"./input-A29ux7yj.js";import"./minus-E5-czcFC.js";import"./index-7dV3TD85.js";import"./index-Hm2Uj9Gg.js";import"./lodash-5s15_I2H.js";import"./label-HFq5fzpT.js";import"./command-bar-wUgfUfvQ.js";import"./placeholder-cell-O6UVTGmQ.js";import"./status-cell-9XExsAIG.js";import"./date-cell-G_vX9su2.js";import"./tooltip-Ixyw9oT8.js";import"./prompt-LzbVPZYR.js";import"./information-circle-solid-rXH6vJ5W.js";import"./x-circle-solid-rnqhxvfk.js";import"./check-circle-solid-7j4QonPK.js";const u=10,Y=({group:o})=>{const[e,t]=w.useState({}),{t:r}=l(),i=d(),{searchParams:a,raw:n}=Z({pageSize:u}),{customers:p,count:m,isLoading:k,isError:P,error:D}=M({...a,groups:o.id}),x=te(),R=V(["groups"]),{table:A}=J({data:p??[],columns:x,count:m,getRowId:c=>c.id,enablePagination:!0,enableRowSelection:!0,pageSize:u,rowSelection:{state:e,updater:t},meta:{customerGroupId:o.id}});if(P)throw D;const{mutateAsync:L}=v(o.id),_=async()=>{const c=Object.keys(e);await i({title:r("customerGroups.customers.remove.title",{count:c.length}),description:r("customerGroups.customers.remove.description",{count:c.length}),confirmText:r("actions.continue"),cancelText:r("actions.cancel")})&&await L({customer_ids:c.map(q=>({id:q}))},{onSuccess:()=>{t({})}})};return s.jsxs(C,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(T,{level:"h2",children:r("customers.domain")}),s.jsx(O,{to:`/customer-groups/${o.id}/add-customers`,children:s.jsx(W,{variant:"secondary",size:"small",children:r("general.add")})})]}),s.jsx(K,{table:A,columns:x,pageSize:u,isLoading:k,count:m,navigateTo:c=>`/customers/${c.id}`,filters:R,search:!0,pagination:!0,orderBy:["email","first_name","last_name","has_account","created_at","updated_at"],queryObject:n,commands:[{action:_,label:r("actions.remove"),shortcut:"r"}]})]})},ee=({customer:o,customerGroupId:e})=>{const{t}=l(),{mutateAsync:r}=v(e),i=d(),a=async()=>{await i({title:t("customerGroups.customers.remove.title",{count:1}),description:t("customerGroups.customers.remove.description",{count:1}),confirmText:t("actions.continue"),cancelText:t("actions.cancel")})&&await r({customer_ids:[{id:o.id}]})};return s.jsx(S,{groups:[{actions:[{icon:s.jsx(b,{}),label:t("actions.edit"),to:`/customers/${o.id}/edit`}]},{actions:[{icon:s.jsx(G,{}),label:t("actions.remove"),onClick:a}]}]})},j=X(),te=()=>{const o=U();return w.useMemo(()=>[j.display({id:"select",header:({table:e})=>s.jsx(h,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t)}),cell:({row:e})=>s.jsx(h,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}),...o,j.display({id:"actions",cell:({row:e,table:t})=>{const{customerGroupId:r}=t.options.meta;return s.jsx(ee,{customer:e.original,customerGroupId:r})}})],[o])},se=({group:o})=>{var n;const{t:e}=l(),t=d(),r=Q(),{mutateAsync:i}=z(o.id),a=async()=>{await t({title:e("customerGroups.delete.title"),description:e("customerGroups.delete.description",{name:o.name}),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await i(void 0,{onSuccess:()=>{y.success(e("general.success"),{description:e("customerGroups.delete.successToast",{name:o.name}),dismissLabel:e("actions.close")}),r("/customer-groups",{replace:!0})},onError:m=>{y.error(e("general.error"),{description:m.message,dismissLabel:e("actions.close")})}})};return s.jsxs(C,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(T,{children:o.name}),s.jsx(S,{groups:[{actions:[{icon:s.jsx(b,{}),label:e("actions.edit"),to:`/customer-groups/${o.id}/edit`}]},{actions:[{icon:s.jsx(G,{}),label:e("actions.delete"),onClick:a}]}]})]}),s.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[s.jsx(g,{size:"small",leading:"compact",weight:"plus",children:e("customers.domain")}),s.jsx(g,{size:"small",leading:"compact",children:((n=o.customers)==null?void 0:n.length)||"-"})]})]})},Ze=()=>{const o=$(),{id:e}=B(),{customer_group:t,isLoading:r,isError:i,error:a}=H(e,{fields:"+customers.id"},{initialData:o});if(r||!t)return s.jsx("div",{children:"Loading..."});if(i)throw a;return s.jsxs("div",{className:"flex flex-col gap-y-2",children:[s.jsx(se,{group:t}),s.jsx(Y,{group:t}),s.jsx(N,{data:t}),s.jsx(F,{})]})},oe=o=>({queryKey:E.detail(o),queryFn:async()=>I.admin.customerGroups.retrieve(o,{fields:"+customers.id"})}),Ve=async({params:o})=>{const e=o.id,t=oe(e);return f.getQueryData(t.queryKey)??await f.fetchQuery(t)};export{Ze as Component,Ve as loader};
