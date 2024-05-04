import{u as b,j as e,T as y,an as C}from"./index-S--WvUSo.js";import{u as E,R as a}from"./route-focus-modal-MMx5Xnk0.js";import{u as R,F as r}from"./form-0PHaH8g8.js";import{o as L,s as g,a as P}from"./index-JzuMwgWW.js";import{C as S}from"./combobox-DjjFlb75.js";import{a as F,b as T}from"./regions-en8xSoIX.js";import{f as w}from"./format-provider-yygkXOZ0.js";import{t as v}from"./toast-4oQfF9Sm.js";import{I}from"./input-A29ux7yj.js";import{S as d}from"./select-Z4sV_-wF.js";import{B as _}from"./button-Pc5Xo8ua.js";import{c as N}from"./currencies-bd3ADI6s.js";import{u as z}from"./payments-6lBoSQZk.js";import{c as H}from"./react-router-dom-aSYyayiN.js";import{H as M}from"./heading-cSlef4Su.js";import"./react-PzSkSLoa.js";import"./react-dom-Og6--24v.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./prompt-LzbVPZYR.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./tooltip-Ixyw9oT8.js";import"./x-mark-mini-aYDSd38M.js";import"./triangles-mini-HukRlWGp.js";import"./plus-mini-IRJECoWI.js";import"./x-circle-solid-rnqhxvfk.js";import"./check-circle-solid-7j4QonPK.js";import"./index-Hm2Uj9Gg.js";L({name:g().min(1),currency_code:g(),payment_providers:P(g())});const U=({region:t,currencies:x,paymentProviders:l})=>{var p;const{t:s}=b(),{handleSuccess:u}=E(),n=R({defaultValues:{name:t.name,currency_code:t.currency_code.toUpperCase(),payment_providers:((p=t.payment_providers)==null?void 0:p.map(o=>o.id))||[]}}),{mutateAsync:c,isPending:j}=F(t.id),f=n.handleSubmit(async o=>{await c({name:o.name,currency_code:o.currency_code.toLowerCase(),payment_providers:o.payment_providers},{onSuccess:()=>{v.success(s("general.success"),{description:s("regions.toast.edit"),dismissLabel:s("actions.close")}),u()},onError:i=>{v.error(s("general.error"),{description:i.message,dismissLabel:s("actions.close")})}})});return e.jsx(a.Form,{form:n,children:e.jsxs("form",{onSubmit:f,className:"flex flex-1 flex-col",children:[e.jsx(a.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(r.Field,{control:n.control,name:"name",render:({field:o})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:s("fields.name")}),e.jsx(r.Control,{children:e.jsx(I,{...o})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:n.control,name:"currency_code",render:({field:{onChange:o,ref:i,...h}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:s("fields.currency")}),e.jsx(r.Control,{children:e.jsxs(d,{onValueChange:o,...h,children:[e.jsx(d.Trigger,{ref:i,children:e.jsx(d.Value,{})}),e.jsx(d.Content,{children:x.map(m=>e.jsx(d.Item,{value:m.code,children:m.code.toUpperCase()},m.code))})]})}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{children:[e.jsx(y,{size:"small",leading:"compact",weight:"plus",children:"Providers"}),e.jsx(y,{size:"small",className:"text-ui-fg-subtle",children:s("regions.providersHint")})]}),e.jsx(r.Field,{control:n.control,name:"payment_providers",render:({field:o})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:s("fields.paymentProviders")}),e.jsx(r.Control,{children:e.jsx(S,{options:l.map(i=>({label:w(i.id),value:i.id})),...o})}),e.jsx(r.ErrorMessage,{})]})})]})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(_,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(_,{size:"small",type:"submit",isLoading:j,children:s("actions.save")})]})})]})})},xe=()=>{const{t}=b(),{id:x}=H(),{region:l,isPending:s,isError:u,error:n}=T(x,{fields:"*payment_providers"}),{store:c,isPending:j,isError:f,error:p}=C(),o=s||j,i=((c==null?void 0:c.supported_currency_codes)??[]).map(m=>N[m.toUpperCase()]),{payment_providers:h=[]}=z({limit:999});if(u)throw n;if(f)throw p;return e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(M,{children:t("regions.editRegion")})}),!o&&l&&e.jsx(U,{region:l,currencies:i,paymentProviders:h})]})};export{xe as Component};
