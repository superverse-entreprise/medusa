import{Z as _,W as B,u as m,j as e,a1 as h,d as L,T as N}from"./index-S--WvUSo.js";import{p as W,g as E,u as K,h as M,i as Q,j as H,a as I}from"./products-_PEbH1CR.js";import{J as O}from"./json-view-section-Dui2O31i.js";import{A as x}from"./action-menu-olZwXQ3q.js";import{S as d}from"./section-row-f0fE6sMo.js";import{a as Y}from"./addresses-d8YOe6mI.js";import{P as p}from"./pencil-square-u3fizEAQ.js";import{H as j}from"./heading-cSlef4Su.js";import{a as F,L as w,d as R,c as G,O as J}from"./react-router-dom-aSYyayiN.js";import{T as D}from"./trash-nTjeUaCp.js";import{u as S}from"./use-prompt-wB0F2CxI.js";import{S as Z}from"./status-badge-sML89E1A.js";import{r as z}from"./react-PzSkSLoa.js";import{T as U}from"./thumbnail-badge-s2hOPhlu.js";import{C as X}from"./checkbox-8MlXzZCx.js";import{T as V}from"./tooltip-Ixyw9oT8.js";import{C as y}from"./command-bar-wUgfUfvQ.js";import{P as $}from"./plus-U36vXkkF.js";import{B as f}from"./badge-99FyByJO.js";import{u as ee}from"./sales-channels--fho5-f4.js";import{C as se}from"./channels-RGu91Z80.js";import{T as te}from"./Trans-9IhttDMi.js";import{a as ie,D as ae}from"./use-data-table-TeZp00wg.js";import{P as A}from"./placeholder-cell-O6UVTGmQ.js";import{c as le}from"./index-JDlOzmVl.js";import{u as ne,a as re}from"./use-variant-table-filters-UuBTNphG.js";import"./react-dom-Og6--24v.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./x-mark-mini-aYDSd38M.js";import"./countries-QR_y0WJ_.js";import"./prompt-LzbVPZYR.js";import"./button-Pc5Xo8ua.js";import"./input-A29ux7yj.js";import"./label-HFq5fzpT.js";import"./index-Hm2Uj9Gg.js";import"./index-1Zwdg31z.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./use-date-Putn0_Ur.js";import"./format-vrL-wy9v.js";import"./date-picker-s8-9mila.js";import"./minus-E5-czcFC.js";import"./index-7dV3TD85.js";import"./lodash-5s15_I2H.js";const ce=t=>({queryKey:W.detail(t),queryFn:async()=>B.products.retrieve(t)}),js=async({params:t})=>{const s=t.id,a=ce(s);return _.getQueryData(a.queryKey)??await _.fetchQuery(a)},oe=({product:t})=>{const{t:s}=m();return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:s("products.attributes")}),e.jsx(x,{groups:[{actions:[{label:s("actions.edit"),to:"attributes",icon:e.jsx(p,{})}]}]})]}),e.jsx(d,{title:s("fields.height"),value:t.height}),e.jsx(d,{title:s("fields.width"),value:t.width}),e.jsx(d,{title:s("fields.length"),value:t.length}),e.jsx(d,{title:s("fields.weight"),value:t.weight}),e.jsx(d,{title:s("fields.midCode"),value:t.mid_code}),e.jsx(d,{title:s("fields.hsCode"),value:t.hs_code}),e.jsx(d,{title:s("fields.countryOfOrigin"),value:Y(t.origin_country)})]})},de=t=>{switch(t){case"draft":return"grey";case"proposed":return"orange";case"published":return"green";case"rejected":return"red";default:return"grey"}},ue=({product:t})=>{const{t:s}=m(),a=S(),i=F(),{mutateAsync:l}=E(t.id),n=async()=>{await a({title:s("general.areYouSure"),description:s("products.deleteWarning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await l(void 0,{onSuccess:()=>{i("..")}})};return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{children:t.title}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx(Z,{color:de(t.status),children:s(`products.productStatus.${t.status}`)}),e.jsx(x,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:e.jsx(p,{})}]},{actions:[{label:s("actions.delete"),onClick:n,icon:e.jsx(D,{})}]}]})]})]}),e.jsx(d,{title:s("fields.description"),value:t.description}),e.jsx(d,{title:s("fields.subtitle"),value:t.subtitle}),e.jsx(d,{title:s("fields.handle"),value:`/${t.handle}`}),e.jsx(d,{title:s("fields.discountable"),value:t.discountable?s("fields.true"):s("fields.false")})]})},me=({product:t})=>{const{t:s}=m(),a=S(),[i,l]=z.useState({}),n=xe(t),c=o=>{l(u=>{if(u[o]){const{[o]:g,...v}=u;return v}else return{...u,[o]:!0}})},{mutateAsync:r}=K(t.id),T=async()=>{const o=Object.keys(i),u=o.some(b=>{var k;return(k=n.find(q=>q.id===b))==null?void 0:k.isThumbnail});if(!await a({title:s("general.areYouSure"),description:u?s("products.media.deleteWarningWithThumbnail",{count:o.length}):s("products.media.deleteWarning",{count:o.length}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")}))return;const v=t.images.filter(b=>!o.includes(b.id)).map(b=>b.url);await r({images:v,thumbnail:u?"":void 0},{onSuccess:()=>{l({})}})};return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:s("products.media.label")}),e.jsx(x,{groups:[{actions:[{label:s("actions.edit"),to:"media?view=edit",icon:e.jsx(p,{})}]}]})]}),n&&e.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-4 px-6 py-4",children:n.map((o,u)=>{const g=i[o.id];return e.jsxs("div",{className:"shadow-elevation-card-rest hover:shadow-elevation-card-hover transition-fg group relative aspect-square size-full cursor-pointer overflow-hidden rounded-[8px]",children:[e.jsx("div",{className:L("transition-fg invisible absolute right-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100",{"visible opacity-100":g}),children:e.jsx(X,{checked:i[o.id]||!1,onCheckedChange:()=>c(o.id)})}),o.isThumbnail&&e.jsx("div",{className:"absolute left-2 top-2",children:e.jsx(V,{content:s("fields.thumbnail"),children:e.jsx(U,{})})}),e.jsx(w,{to:"media",state:{curr:u},children:e.jsx("img",{src:o.url,alt:`${t.title} image`,className:"size-full object-cover"})})]},o.id)})}),e.jsx(y,{open:!!Object.keys(i).length,children:e.jsxs(y.Bar,{children:[e.jsx(y.Value,{children:s("general.countSelected",{count:Object.keys(i).length})}),e.jsx(y.Seperator,{}),e.jsx(y.Command,{action:T,label:s("actions.delete"),shortcut:"d"})]})})]})},xe=t=>{const{images:s=[],thumbnail:a}=t,i=s.map(l=>({id:l.id,url:l.url,isThumbnail:l.url===a}));return a&&!i.some(l=>l.url===a)&&i.unshift({id:"img_thumbnail",url:a,isThumbnail:!0}),i},pe=({product:t,option:s})=>{const{t:a}=m(),{mutateAsync:i}=M(t.id,s.id),l=S(),n=async()=>{await l({title:a("general.areYouSure"),description:a("products.deleteWarning",{title:t.title}),confirmText:a("actions.delete"),cancelText:a("actions.cancel")})&&await i()};return e.jsx(x,{groups:[{actions:[{label:a("actions.edit"),to:`options/${s.id}/edit`,icon:e.jsx(p,{})}]},{actions:[{label:a("actions.delete"),onClick:n,icon:e.jsx(D,{})}]}]})},he=({product:t})=>{const{t:s}=m();return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:s("products.options.header")}),e.jsx(x,{groups:[{actions:[{label:s("actions.create"),to:"options/create",icon:e.jsx($,{})}]}]})]}),t.options.map(a=>e.jsx(d,{title:a.title,value:a.values.map(i=>e.jsx(f,{size:"2xsmall",className:"flex min-w-[20px] items-center justify-center",children:i.value},i.value)),actions:e.jsx(pe,{product:t,option:a})},a.id))]})},je=({product:t})=>{var c;const{count:s}=ee(),{t:a}=m(),i=((c=t.sales_channels)==null?void 0:c.map(r=>({id:r.id,name:r.name})))??[],l=i.slice(0,3),n=i.slice(3);return e.jsxs(h,{className:"flex flex-col gap-y-4 px-6 py-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(j,{level:"h2",children:a("fields.sales_channels")}),e.jsx(x,{groups:[{actions:[{label:a("actions.edit"),to:"sales-channels",icon:e.jsx(p,{})}]}]})]}),e.jsxs("div",{className:"grid grid-cols-[28px_1fr] items-center gap-x-3",children:[e.jsx("div",{className:"bg-ui-bg-base shadow-borders-base flex size-7 items-center justify-center rounded-md",children:e.jsx("div",{className:"bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]",children:e.jsx(se,{className:"text-ui-fg-subtle"})})}),i.length>0?e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(N,{size:"small",leading:"compact",children:l.map(r=>r.name).join(", ")}),n.length>0&&e.jsx(V,{content:e.jsx("ul",{children:n.map(r=>e.jsx("li",{children:r.name},r.id))}),children:e.jsx(N,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:`+${n.length}`})})]}):e.jsx(N,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:a("products.noSalesChannels")})]}),e.jsx("div",{children:e.jsx(N,{className:"text-ui-fg-subtle",size:"small",leading:"compact",children:e.jsx(te,{i18nKey:"sales_channels.availableIn",values:{x:i.length,y:s??0},components:[e.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus"},"x"),e.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus"},"y")]})})})]})},fe=({variant:t,product:s})=>{const{mutateAsync:a}=Q(s.id,t.id),{t:i}=m(),l=S(),n=async()=>{await l({title:i("general.areYouSure"),description:i("products.deleteVariantWarning",{title:t.title}),confirmText:i("actions.delete"),cancelText:i("actions.cancel")})&&await a()};return e.jsx(x,{groups:[{actions:[{label:i("actions.edit"),to:`variants/${t.id}/edit`,icon:e.jsx(p,{})}]},{actions:[{label:i("actions.delete"),onClick:n,icon:e.jsx(D,{})}]}]})},C=le(),ge=t=>{const{t:s}=m(),a=z.useMemo(()=>{var i;return t?(i=t.options)==null?void 0:i.map(l=>C.display({id:l.id,header:()=>e.jsx("div",{className:"flex h-full w-full items-center",children:e.jsx("span",{className:"truncate",children:l.title})}),cell:({row:n})=>{const c=n.original.options.find(r=>r.option_id===l.id);return c?e.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:e.jsx(f,{size:"2xsmall",className:"flex min-w-[20px] items-center justify-center",children:c.value})}):e.jsx(A,{})}})):[]},[t]);return z.useMemo(()=>[C.accessor("title",{header:()=>e.jsx("div",{className:"flex h-full w-full items-center",children:e.jsx("span",{className:"truncate",children:s("fields.title")})}),cell:({getValue:i})=>e.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:i()})})}),C.accessor("sku",{header:()=>e.jsx("div",{className:"flex h-full w-full items-center",children:e.jsx("span",{className:"truncate",children:s("fields.sku")})}),cell:({getValue:i})=>{const l=i();return l?e.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:l})}):e.jsx(A,{})}}),...a,C.display({id:"actions",cell:({row:i,table:l})=>{const{product:n}=l.options.meta;return e.jsx(fe,{variant:i.original,product:n})}})],[s,a])},P=10,ve=({product:t})=>{const{t:s}=m(),{searchParams:a,raw:i}=ne({pageSize:P}),{variants:l,count:n,isLoading:c,isError:r,error:T}=H(t.id,{...a},{keepPreviousData:!0}),o=re(),u=ge(t),{table:g}=ie({data:l??[],columns:u,count:n,enablePagination:!0,getRowId:v=>v.id,pageSize:P,meta:{product:t}});if(r)throw T;return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:s("products.variants")}),e.jsx(x,{groups:[{actions:[{label:s("actions.create"),to:"variants/create",icon:e.jsx($,{})},{label:s("products.editPrices"),to:"prices",icon:e.jsx(p,{})}]}]})]}),e.jsx(ae,{table:g,columns:u,filters:o,count:n,pageSize:P,isLoading:c,orderBy:["title","created_at","updated_at"],pagination:!0,search:!0,queryObject:i})]})},be={widgets:[]},ye={widgets:[]},we={widgets:[]},Ne={widgets:[]},Ce=({product:t})=>{var a;const{t:s}=m();return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:s("products.organization")}),e.jsx(x,{groups:[{actions:[{label:s("actions.edit"),to:"organization",icon:e.jsx(p,{})}]}]})]}),e.jsx(d,{title:s("fields.tags"),value:t.tags.length>0?t.tags.map(i=>e.jsx(f,{className:"w-fit",size:"2xsmall",asChild:!0,children:e.jsx(w,{to:`/products?tags=${i.id}`,children:i.value})},i.id)):void 0}),e.jsx(d,{title:s("fields.type"),value:t.type?e.jsx(f,{size:"2xsmall",className:"w-fit",asChild:!0,children:e.jsx(w,{to:`/products?type_id=${t.type_id}`,children:t.type.value})}):void 0}),e.jsx(d,{title:s("fields.collection"),value:t.collection?e.jsx(f,{size:"2xsmall",color:"blue",className:"w-fit",asChild:!0,children:e.jsx(w,{to:`/collections/${t.collection.id}`,children:t.collection.title})}):void 0}),e.jsx(d,{title:s("fields.categories"),value:((a=t.categories)==null?void 0:a.length)>0?t.categories.map(i=>e.jsx(f,{className:"w-fit",color:"purple",size:"2xsmall",asChild:!0,children:e.jsx(w,{to:`/categories/${i.id}`,children:i.name})},i.id)):void 0})]})},fs=()=>{const t=R(),{id:s}=G(),{product:a,isLoading:i,isError:l,error:n}=I(s,void 0,{initialData:t});if(i||!a)return e.jsx("div",{children:"Loading..."});if(l)throw n;return e.jsxs("div",{className:"flex flex-col gap-y-2",children:[ye.widgets.map((c,r)=>e.jsx("div",{children:e.jsx(c.Component,{})},r)),e.jsxs("div",{className:"flex flex-col gap-x-4 lg:flex-row lg:items-start",children:[e.jsxs("div",{className:"w-full flex flex-col gap-y-2",children:[e.jsx(ue,{product:a}),e.jsx(me,{product:a}),e.jsx(he,{product:a}),e.jsx(ve,{product:a}),be.widgets.map((c,r)=>e.jsx("div",{children:e.jsx(c.Component,{})},r)),e.jsx("div",{className:"hidden lg:block",children:e.jsx(O,{data:a,root:"product"})})]}),e.jsxs("div",{className:"w-full lg:max-w-[400px] max-w-[100%] mt-2 lg:mt-0 flex flex-col gap-y-2",children:[Ne.widgets.map((c,r)=>e.jsx("div",{children:e.jsx(c.Component,{})},r)),e.jsx(je,{product:a}),e.jsx(Ce,{product:a}),e.jsx(oe,{product:a}),we.widgets.map((c,r)=>e.jsx("div",{children:e.jsx(c.Component,{})},r)),e.jsx("div",{className:"lg:hidden",children:e.jsx(O,{data:a,root:"product"})})]})]}),e.jsx(J,{})]})};export{fs as Component,js as loader};
