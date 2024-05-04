import{j as e,aA as R,T as o,u as j,a1 as L,au as E,S as v,ap as q,av as I,aZ as H,aw as Q,Z as w,W as U}from"./index-S--WvUSo.js";import{J as F}from"./json-view-section-Dui2O31i.js";import{d as O,e as Y,f as _,b as $,g as G}from"./api-keys-HCNnizij.js";import{a as J,b as Z,p as k,A as V}from"./utils-OYSiQzYS.js";import{A as b}from"./action-menu-olZwXQ3q.js";import{L as X,a as W,d as ee,c as se,O as te}from"./react-router-dom-aSYyayiN.js";import{u as ae}from"./use-date-Putn0_Ur.js";import{T as P}from"./trash-nTjeUaCp.js";import{X as ie}from"./x-circle-onUe-B-F.js";import{P as z}from"./pencil-square-u3fizEAQ.js";import{t as c}from"./toast-4oQfF9Sm.js";import{u as S}from"./use-prompt-wB0F2CxI.js";import{H as K}from"./heading-cSlef4Su.js";import{S as ne}from"./status-badge-sML89E1A.js";import{B as C}from"./badge-99FyByJO.js";import{C as re}from"./copy-jbaNBJoS.js";import{r as M}from"./react-PzSkSLoa.js";import{a as oe,D as le}from"./use-data-table-TeZp00wg.js";import{u as ce}from"./sales-channels--fho5-f4.js";import{u as me,a as de}from"./use-sales-channel-table-query-O9OBIAwF.js";import{u as ue}from"./use-sales-channel-table-filters-MNsQPVv0.js";import{P as pe}from"./plus-U36vXkkF.js";import{C as A}from"./checkbox-8MlXzZCx.js";import{c as ge}from"./index-JDlOzmVl.js";import"./react-dom-Og6--24v.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./x-mark-mini-aYDSd38M.js";import"./format-vrL-wy9v.js";import"./information-circle-solid-rXH6vJ5W.js";import"./x-circle-solid-rnqhxvfk.js";import"./check-circle-solid-7j4QonPK.js";import"./prompt-LzbVPZYR.js";import"./button-Pc5Xo8ua.js";import"./input-A29ux7yj.js";import"./label-HFq5fzpT.js";import"./tooltip-Ixyw9oT8.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./index-1Zwdg31z.js";import"./date-picker-s8-9mila.js";import"./minus-E5-czcFC.js";import"./index-7dV3TD85.js";import"./index-Hm2Uj9Gg.js";import"./lodash-5s15_I2H.js";import"./command-bar-wUgfUfvQ.js";import"./products-_PEbH1CR.js";import"./status-cell-9XExsAIG.js";import"./text-cell-OtkuJsO8.js";import"./placeholder-cell-O6UVTGmQ.js";const xe=({id:t,first_name:s,last_name:a,email:i,type:n="user"})=>{const r=[s,a].filter(Boolean).join(" "),l=r?r.slice(0,1):i.slice(0,1),m=n==="user"?`/settings/users/${t}`:`/customers/${t}`;return e.jsxs(X,{to:m,className:"flex items-center gap-x-2 w-fit transition-fg hover:text-ui-fg-subtle outline-none focus-visible:shadow-borders-focus rounded-md",children:[e.jsx(R,{size:"2xsmall",fallback:l.toUpperCase()}),e.jsx(o,{size:"small",leading:"compact",weight:"regular",children:r||i})]})},he=({apiKey:t})=>{const{t:s}=j(),a=W(),i=S(),{getFullDate:n}=ae(),{mutateAsync:r}=O(t.id),{mutateAsync:l}=Y(t.id),m=async()=>{await i({title:s("general.areYouSure"),description:s("apiKeyManagement.delete.warning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await l(void 0,{onSuccess:()=>{c.success(s("general.success"),{description:s("apiKeyManagement.delete.successToast",{title:t.title}),dismissLabel:s("general.close")}),a("..",{replace:!0})},onError:p=>{c.error(s("general.error"),{description:p.message,dismissLabel:s("general.close")})}})},g=async()=>{await i({title:s("general.areYouSure"),description:s("apiKeyManagement.revoke.warning",{title:t.title}),confirmText:s("apiKeyManagement.actions.revoke"),cancelText:s("actions.cancel")})&&await r(void 0,{onSuccess:()=>{c.success(s("general.success"),{description:s("apiKeyManagement.revoke.successToast",{title:t.title}),dismissLabel:s("general.close")})},onError:p=>{c.error(s("general.error"),{description:p.message,dismissLabel:s("general.close")})}})},x=[{icon:e.jsx(P,{}),label:s("actions.delete"),onClick:m}];t.revoked_at||x.unshift({icon:e.jsx(ie,{}),label:s("apiKeyManagement.actions.revoke"),onClick:g});const u=J(t.revoked_at,s),h=Z(t.type,s);return e.jsxs(L,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(K,{children:t.title}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx("div",{className:"flex items-center gap-x-2",children:e.jsx(ne,{color:u.color,children:u.label})}),e.jsx(b,{groups:[{actions:[{label:s("actions.edit"),icon:e.jsx(z,{}),to:"edit"}]},{actions:x}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(o,{size:"small",leading:"compact",weight:"plus",children:s("fields.key")}),t.type==="secret"?e.jsx(C,{size:"2xsmall",className:"w-fit",children:k(t.redacted)}):e.jsx(re,{asChild:!0,content:t.token,children:e.jsx(C,{size:"2xsmall",className:"w-fit max-w-40 cursor-pointer",children:e.jsx(o,{size:"xsmall",leading:"compact",className:"truncate",children:k(t.redacted)})})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(o,{size:"small",leading:"compact",weight:"plus",children:s("fields.type")}),e.jsx(o,{size:"small",leading:"compact",children:h.label})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(o,{size:"small",leading:"compact",weight:"plus",children:s("apiKeyManagement.fields.lastUsedAtLabel")}),e.jsx(o,{size:"small",leading:"compact",children:t.last_used_at?n({date:t.last_used_at,includeTime:!0}):"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(o,{size:"small",leading:"compact",weight:"plus",children:s("apiKeyManagement.fields.createdByLabel")}),e.jsx(T,{userId:t.created_by})]}),t.revoked_at&&e.jsxs("div",{className:"grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(o,{size:"small",leading:"compact",weight:"plus",children:s("apiKeyManagement.fields.revokedByLabel")}),e.jsx(T,{userId:t.revoked_by})]})]})},T=({userId:t})=>{const{user:s,isLoading:a,isError:i,error:n}=E(t,void 0,{enabled:!!t});if(!t)return e.jsx(o,{size:"small",className:"text-ui-fg-subtle",children:"-"});if(i)throw n;return a?e.jsxs("div",{className:"grid grid-cols-[20px_1fr]",children:[e.jsx(v,{className:"h-5 w-5 rounded-full"}),e.jsx(v,{className:"w-full max-w-[220px]"})]}):s?e.jsx(xe,{...s}):e.jsx(o,{size:"small",className:"text-ui-fg-subtle",children:"-"})},y=10,fe=({apiKey:t})=>{const[s,a]=M.useState({}),{t:i}=j(),n=S(),{raw:r,searchParams:l}=me({pageSize:y}),{sales_channels:m,count:g,isLoading:x}=ce({...l,publishable_key_id:t.id},{placeholderData:q}),u=je(),h=ue(),{table:f}=oe({data:m??[],columns:u,count:g,enablePagination:!0,enableRowSelection:!0,getRowId:d=>d.id,pageSize:y,rowSelection:{state:s,updater:a},meta:{apiKey:t.id}}),{mutateAsync:p}=_(t.id),D=async()=>{const d=Object.keys(s);await n({title:i("general.areYouSure"),description:i("apiKeyManagement.removeSalesChannel.warningBatch",{count:d.length}),confirmText:i("actions.continue"),cancelText:i("actions.cancel")})&&await p({sales_channel_ids:d},{onSuccess:()=>{c.success(i("general.success"),{description:i("apiKeyManagement.removeSalesChannel.successToastBatch",{count:d.length}),dismissLabel:i("general.close")}),a({})},onError:B=>{c.error(i("general.error"),{description:B.message,dismissLabel:i("general.close")})}})};return e.jsxs(L,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(K,{level:"h2",children:i("salesChannels.domain")}),e.jsx(b,{groups:[{actions:[{icon:e.jsx(pe,{}),label:i("actions.add"),to:"sales-channels"}]}]})]}),e.jsx(le,{table:f,columns:u,filters:h,count:g,isLoading:x,queryObject:r,navigateTo:d=>`/settings/sales-channels/${d.id}`,orderBy:["name","created_at","updated_at"],commands:[{action:D,label:i("actions.remove"),shortcut:"r"}],pageSize:y,pagination:!0,search:!0})]})},ye=({salesChannel:t,apiKey:s})=>{const{t:a}=j(),i=S(),{mutateAsync:n}=_(s),r=async()=>{await i({title:a("general.areYouSure"),description:a("apiKeyManagement.removeSalesChannel.warning",{name:t.name}),confirmText:a("actions.delete"),cancelText:a("actions.cancel")})&&await n({sales_channel_ids:[t.id]},{onSuccess:()=>{c.success(a("general.success"),{description:a("apiKeyManagement.removeSalesChannel.successToast",{count:1}),dismissLabel:a("general.close")})},onError:m=>{c.error(a("general.error"),{description:m.message,dismissLabel:a("general.close")})}})};return e.jsx(b,{groups:[{actions:[{icon:e.jsx(z,{}),label:a("actions.edit"),to:`/settings/sales-channels/${t.id}/edit`}]},{actions:[{icon:e.jsx(P,{}),label:a("actions.delete"),onClick:r}]}]})},N=ge(),je=()=>{const t=de();return M.useMemo(()=>[N.display({id:"select",header:({table:s})=>e.jsx(A,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a)}),cell:({row:s})=>e.jsx(A,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}),...t,N.display({id:"actions",cell:({row:s,table:a})=>{const{apiKey:i}=a.options.meta;return e.jsx(ye,{salesChannel:s.original,apiKey:i})}})],[t])},ys=()=>{const t=ee(),{id:s}=se(),{api_key:a,isLoading:i,isError:n,error:r}=$(s,void 0,{initialData:t});if(i||!a)return e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(I,{rowCount:4}),e.jsx(H,{}),e.jsx(Q,{})]});const l=(a==null?void 0:a.type)===V.PUBLISHABLE;if(n)throw r;return e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(he,{apiKey:a}),l&&e.jsx(fe,{apiKey:a}),e.jsx(F,{data:a}),e.jsx(te,{})]})},be=t=>({queryKey:G.detail(t),queryFn:async()=>U.apiKeys.retrieve(t)}),js=async({params:t})=>{const s=t.id,a=be(s);return w.getQueryData(a.queryKey)??await w.fetchQuery(a)};export{ys as Component,js as loader};
