import{p as I,d as O,a as Q}from"./price-lists---tSXD3D.js";import{Z as b,W as F,u as d,j as e,a1 as j,T as r,ap as H}from"./index-S--WvUSo.js";import{J as L}from"./json-view-section-Dui2O31i.js";import{A as p}from"./action-menu-olZwXQ3q.js";import{u as $}from"./use-date-Putn0_Ur.js";import{P as y}from"./pencil-square-u3fizEAQ.js";import{H as P}from"./heading-cSlef4Su.js";import{g as K}from"./utils-UWq8IC3A.js";import{a as D,c as B,O as G}from"./react-router-dom-aSYyayiN.js";import{T}from"./trash-nTjeUaCp.js";import{u as z}from"./use-prompt-wB0F2CxI.js";import{S as J}from"./status-badge-sML89E1A.js";import{r as k}from"./react-PzSkSLoa.js";import{a as M,D as W}from"./use-data-table-TeZp00wg.js";import{f as Y}from"./products-_PEbH1CR.js";import{u as Z,a as V,b as X}from"./use-product-table-columns-k99B-kCF.js";import{P as U}from"./plus-U36vXkkF.js";import{C as S}from"./checkbox-8MlXzZCx.js";import{c as ee}from"./index-JDlOzmVl.js";import"./react-dom-Og6--24v.js";import"./badge-99FyByJO.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./x-mark-mini-aYDSd38M.js";import"./format-vrL-wy9v.js";import"./constants-oWLT51HC.js";import"./prompt-LzbVPZYR.js";import"./button-Pc5Xo8ua.js";import"./input-A29ux7yj.js";import"./label-HFq5fzpT.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./index-1Zwdg31z.js";import"./date-picker-s8-9mila.js";import"./minus-E5-czcFC.js";import"./index-7dV3TD85.js";import"./index-Hm2Uj9Gg.js";import"./lodash-5s15_I2H.js";import"./command-bar-wUgfUfvQ.js";import"./product-types-gZDu6wo-.js";import"./sales-channels--fho5-f4.js";import"./placeholder-cell-O6UVTGmQ.js";import"./product-cell-gRltbXZC.js";import"./thumbnail-gerN888-.js";import"./status-cell-9XExsAIG.js";import"./tooltip-Ixyw9oT8.js";const te=s=>({queryKey:I.detail(s),queryFn:async()=>F.priceLists.retrieve(s)}),Xe=async({params:s})=>{const t=s.id,i=te(t);return b.getQueryData(i.queryKey)??await b.fetchQuery(i)},N=({priceList:s})=>{const{t}=d(),{getFullDate:i}=$();return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(P,{level:"h2",children:t("pricing.configuration.header")}),e.jsx(p,{groups:[{actions:[{label:t("actions.edit"),to:"configuration",icon:e.jsx(y,{})}]}]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(r,{leading:"compact",size:"small",weight:"plus",children:t("fields.startDate")}),e.jsx(r,{size:"small",className:"text-pretty",children:s.starts_at?i({date:s.starts_at}):"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(r,{leading:"compact",size:"small",weight:"plus",children:t("fields.endDate")}),e.jsx(r,{size:"small",className:"text-pretty",children:s.ends_at?i({date:s.ends_at}):"-"})]})]})},se=({priceList:s})=>{var l;const{t}=d(),i=D(),c=z(),{mutateAsync:o}=O(s.id),m=((l=s.prices)==null?void 0:l.length)||0,{color:u,text:x}=K(t,s),g=async()=>{await c({title:t("general.areYouSure"),description:t("pricing.warnings.delete",{name:s.title}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await o(void 0,{onSuccess:()=>{i("..",{replace:!0})}})},n=s.type==="sale"?t("pricing.type.sale"):t("pricing.type.override");return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(P,{children:s.title}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx(J,{color:u,children:x}),e.jsx(p,{groups:[{actions:[{label:t("actions.edit"),to:"edit",icon:e.jsx(y,{})}]},{actions:[{label:t("actions.delete"),onClick:g,icon:e.jsx(T,{})}]}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(r,{leading:"compact",size:"small",weight:"plus",children:t("fields.type")}),e.jsx(r,{size:"small",className:"text-pretty",children:n})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(r,{leading:"compact",size:"small",weight:"plus",children:t("fields.description")}),e.jsx(r,{size:"small",className:"text-pretty",children:s.description})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(r,{leading:"compact",size:"small",weight:"plus",children:t("pricing.fields.priceOverridesLabel")}),e.jsx(r,{size:"small",className:"text-pretty",children:m||"-"})]})]})},f=10,h="p",ie=({priceList:s})=>{const{t}=d(),i=D(),c=z(),[o,m]=k.useState({}),{searchParams:u,raw:x}=Z({pageSize:f,prefix:h}),{products:g,count:n,isLoading:l,isError:v,error:R}=Y({...u,price_list_id:[s.id]},{placeholderData:H}),_=V(),w=oe(),{table:E}=M({data:g||[],count:n,columns:w,enablePagination:!0,enableRowSelection:!0,pageSize:f,getRowId:a=>a.id,rowSelection:{state:o,updater:m},prefix:h}),q=async()=>{await c({title:t("general.areYouSure"),description:t("pricing.products.deleteProductsPricesWarning",{count:Object.keys(o).length}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&console.log("Not implemented yet.")},A=async()=>{const a=Object.keys(o).join(",");i(`/pricing/${s.id}/products/edit?ids[]=${a}`)};if(v)throw R;return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(P,{children:t("products.domain")}),e.jsx(p,{groups:[{actions:[{label:t("pricing.prices.addPrices"),to:"products/add",icon:e.jsx(U,{})},{label:t("pricing.prices.editPrices"),to:"products/edit",icon:e.jsx(y,{})}]}]})]}),e.jsx(W,{table:E,filters:_,columns:w,count:n,pageSize:f,isLoading:l,navigateTo:a=>`/products/${a.original.id}`,orderBy:["title","created_at","updated_at"],commands:[{action:A,label:t("actions.edit"),shortcut:"e"},{action:q,label:t("actions.delete"),shortcut:"d"}],pagination:!0,search:!0,prefix:h,queryObject:x})]})},re=({product:s})=>{const{t}=d();return e.jsx(p,{groups:[{actions:[{icon:e.jsx(T,{}),label:t("actions.remove"),onClick:()=>{console.log(`Removing prices for ${s.id}. Not implemented yet.`)}}]}]})},C=ee(),oe=()=>{const s=X();return k.useMemo(()=>[C.display({id:"select",header:({table:t})=>e.jsx(S,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:i=>t.toggleAllPageRowsSelected(!!i)}),cell:({row:t})=>e.jsx(S,{checked:t.getIsSelected(),onCheckedChange:i=>t.toggleSelected(!!i),onClick:i=>{i.stopPropagation()}})}),...s,C.display({id:"actions",cell:({row:t})=>e.jsx(re,{product:t.original})})],[s])},Ue=()=>{const{id:s}=B(),{price_list:t,isLoading:i,isError:c,error:o}=Q(s);if(i||!t)return e.jsx("div",{children:"Loading..."});if(c)throw o;return e.jsxs("div",{className:"flex flex-col gap-x-4 xl:flex-row xl:items-start",children:[e.jsxs("div",{className:"flex w-full flex-col gap-y-2",children:[e.jsx(se,{priceList:t}),e.jsx(ie,{priceList:t}),e.jsx("div",{className:"flex w-full flex-col gap-y-2 xl:hidden",children:e.jsx(N,{priceList:t})}),e.jsx(L,{data:t})]}),e.jsx("div",{className:"hidden w-full max-w-[400px] flex-col gap-y-2 xl:flex",children:e.jsx(N,{priceList:t})}),e.jsx(G,{})]})};export{Ue as Component,Xe as loader};
