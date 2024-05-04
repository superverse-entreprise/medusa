import{u,j as s,T as v,a1 as _,ap as T}from"./index-S--WvUSo.js";import{p as x,b as A,a as S,g as M}from"./utils-OYSiQzYS.js";import{L as C,u as K,O as w}from"./react-router-dom-aSYyayiN.js";import{u as P,a as N,D as L}from"./use-data-table-TeZp00wg.js";import{d as D,e as z,h as q}from"./api-keys-HCNnizij.js";import{r as E}from"./react-PzSkSLoa.js";import{D as b}from"./date-cell-G_vX9su2.js";import{S as O}from"./status-cell-9XExsAIG.js";import{a as H}from"./text-cell-OtkuJsO8.js";import{A as R}from"./action-menu-olZwXQ3q.js";import{P as B}from"./pencil-square-u3fizEAQ.js";import{S as F,C as J}from"./copy-jbaNBJoS.js";import{X as I}from"./x-circle-onUe-B-F.js";import{T as Q}from"./trash-nTjeUaCp.js";import{t as p}from"./toast-4oQfF9Sm.js";import{u as X}from"./use-prompt-wB0F2CxI.js";import{B as h}from"./badge-99FyByJO.js";import{c as Y}from"./index-JDlOzmVl.js";import{H as G}from"./heading-cSlef4Su.js";import{B as U}from"./button-Pc5Xo8ua.js";import"./react-dom-Og6--24v.js";import"./empty-table-content-i72rBIA2.js";import"./plus-mini-IRJECoWI.js";import"./index-1Zwdg31z.js";import"./use-date-Putn0_Ur.js";import"./format-vrL-wy9v.js";import"./date-picker-s8-9mila.js";import"./input-A29ux7yj.js";import"./minus-E5-czcFC.js";import"./x-mark-mini-aYDSd38M.js";import"./index-7dV3TD85.js";import"./index-Hm2Uj9Gg.js";import"./lodash-5s15_I2H.js";import"./label-HFq5fzpT.js";import"./command-bar-wUgfUfvQ.js";import"./sales-channels--fho5-f4.js";import"./products-_PEbH1CR.js";import"./placeholder-cell-O6UVTGmQ.js";import"./tooltip-Ixyw9oT8.js";import"./check-circle-solid-7j4QonPK.js";import"./information-circle-solid-rXH6vJ5W.js";import"./x-circle-solid-rnqhxvfk.js";import"./prompt-LzbVPZYR.js";import"./index-sF0hA49A.js";const Z=({apiKey:t})=>{const{mutateAsync:a}=D(t.id),{mutateAsync:r}=z(t.id),{t:e}=u(),i=X(),n=async()=>{await i({title:e("general.areYouSure"),description:e("apiKeyManagement.delete.warning",{title:t.title}),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await r(void 0,{onSuccess:()=>{p.success(e("general.success"),{description:e("apiKeyManagement.delete.successToast",{title:t.title}),dismissLabel:e("general.close")})},onError:l=>{p.error(e("general.error"),{description:l.message,dismissLabel:e("general.close")})}})},o=async()=>{await i({title:e("general.areYouSure"),description:e("apiKeyManagement.revoke.warning",{title:t.title}),confirmText:e("apiKeyManagement.actions.revoke"),cancelText:e("actions.cancel")})&&await a(void 0,{onSuccess:()=>{p.success(e("general.success"),{description:e("apiKeyManagement.revoke.successToast",{title:t.title}),dismissLabel:e("general.close")})},onError:l=>{p.error(e("general.error"),{description:l.message,dismissLabel:e("general.close")})}})},d=()=>{navigator.clipboard.writeText(t.token),p.success(e("general.success"),{description:e("apiKeyManagement.actions.copySuccessToast"),dismissLabel:e("general.close")})};return s.jsx(R,{groups:[{actions:[{icon:s.jsx(B,{}),label:e("actions.edit"),to:`${t.id}/edit`},...t.type!=="secret"?[{label:e("apiKeyManagement.actions.copy"),onClick:d,icon:s.jsx(F,{})}]:[]]},{actions:[{icon:s.jsx(I,{}),label:e("apiKeyManagement.actions.revoke"),onClick:o},{icon:s.jsx(Q,{}),label:e("actions.delete"),onClick:n}]}]})},c=Y(),$=()=>{const{t}=u();return E.useMemo(()=>[c.accessor("title",{header:t("fields.title"),cell:({getValue:a})=>s.jsx("div",{className:"flex size-full items-center",children:s.jsx("span",{className:"truncate",children:a()})})}),c.accessor("redacted",{header:"Token",cell:({getValue:a,row:r})=>{const e=a();if(r.original.type==="secret")return s.jsx(h,{size:"2xsmall",children:x(e)});const n=o=>o.stopPropagation();return s.jsx(h,{size:"2xsmall",className:"max-w-40",onClick:n,children:s.jsx(J,{content:r.original.token,className:"text-ui-fg-subtle",asChild:!0,children:s.jsx(v,{size:"xsmall",leading:"compact",className:"truncate",children:x(e)})})})}}),c.accessor("type",{header:t("fields.type"),cell:({getValue:a})=>{const{label:r}=A(a(),t);return s.jsx(H,{text:r})}}),c.accessor("revoked_at",{header:t("fields.status"),cell:({getValue:a})=>{const{color:r,label:e}=S(a(),t);return s.jsx(O,{color:r,children:e})}}),c.accessor("last_used_at",{header:t("apiKeyManagement.table.lastUsedAtHeader"),cell:({getValue:a})=>{const r=a();return s.jsx(b,{date:r})}}),c.accessor("created_at",{header:t("fields.created"),cell:({getValue:a})=>{const r=a();return s.jsx(b,{date:r})}}),c.display({id:"actions",cell:({row:a})=>s.jsx(Z,{apiKey:a.original})})],[t])},V=()=>{const{t}=u();let a=[];const r=[{label:t("fields.createdAt"),key:"created_at",type:"date"},{label:t("fields.updatedAt"),key:"updated_at",type:"date"},{label:t("fields.revokedAt"),key:"revoked_at",type:"date"}];return a=[...a,...r],a},W=({prefix:t,pageSize:a=20})=>{const r=P(["offset","q","created_at","updated_at","revoked_at","order"],t),{offset:e,created_at:i,updated_at:n,revoked_at:o,q:d,order:m}=r;return{searchParams:{limit:a,offset:e?Number(e):0,created_at:i?JSON.parse(i):void 0,updated_at:n?JSON.parse(n):void 0,revoked_at:o?JSON.parse(o):void 0,order:m,q:d},raw:r}},g=20,ee=({keyType:t})=>{const{t:a}=u(),{searchParams:r,raw:e}=W({pageSize:g}),i={...r,type:t,fields:"id,title,redacted,token,type,created_at,updated_at,revoked_at,last_used_at,created_by,revoked_by"},{api_keys:n,count:o,isLoading:d,isError:m,error:l}=q(i,{placeholderData:T}),k=V(),f=$(),{table:j}=N({data:n||[],columns:f,count:o,enablePagination:!0,getRowId:y=>y.id,pageSize:g});if(m)throw l;return s.jsxs(_,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(G,{level:"h2",children:a(t==="publishable"?"apiKeyManagement.domain.publishable":"apiKeyManagement.domain.secret")}),s.jsx(C,{to:"create",children:s.jsx(U,{variant:"secondary",size:"small",children:a("actions.create")})})]}),s.jsx(L,{table:j,filters:k,columns:f,count:o,pageSize:g,orderBy:["title","created_at","updated_at","revoked_at"],navigateTo:y=>y.id,pagination:!0,search:!0,queryObject:e,isLoading:d})]})},Qe=()=>{const{pathname:t}=K(),a=M(t);return s.jsxs("div",{className:"flex flex-col gap-y-2",children:[s.jsx(ee,{keyType:a}),s.jsx(w,{})]})};export{Qe as Component};
