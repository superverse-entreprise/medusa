import{u as y,aq as p,as as N,j as e,ar as F}from"./index-S--WvUSo.js";import{u as I,R as o}from"./route-focus-modal-MMx5Xnk0.js";import{t as E}from"./zod-jt04JUtm.js";import{u as S,F as s}from"./form-0PHaH8g8.js";import{o as w,s as g,b as H}from"./index-JzuMwgWW.js";import{t as j}from"./toast-4oQfF9Sm.js";import{T}from"./Trans-9IhttDMi.js";import{I as f}from"./input-A29ux7yj.js";import{S as c}from"./select-Z4sV_-wF.js";import{S as M}from"./switch-VR1xZXYU.js";import{B as u}from"./button-Pc5Xo8ua.js";import{H as P}from"./heading-cSlef4Su.js";import"./react-PzSkSLoa.js";import"./react-dom-Og6--24v.js";import"./react-router-dom-aSYyayiN.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./prompt-LzbVPZYR.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./tooltip-Ixyw9oT8.js";import"./x-circle-solid-rnqhxvfk.js";import"./check-circle-solid-7j4QonPK.js";import"./index-Hm2Uj9Gg.js";import"./triangles-mini-HukRlWGp.js";const k=w({first_name:g().optional(),last_name:g().optional(),language:g(),usage_insights:H()}),R=({user:n,usageInsights:h})=>{const{t:r,i18n:d}=y(),{handleSuccess:x}=I(),t=S({defaultValues:{first_name:n.first_name??"",last_name:n.last_name??"",language:d.language,usage_insights:h},resolver:E(k)}),_=async a=>{await d.changeLanguage(a)},b=p.sort((a,i)=>a.display_name.localeCompare(i.display_name)),{mutateAsync:v,isPending:C}=N(n.id),L=t.handleSubmit(async a=>{try{await v({first_name:a.first_name,last_name:a.last_name}),await _(a.language),x(),j.success(r("general.success"),{description:r("profile.toast.edit"),dismissLabel:r("actions.close")})}catch(i){j.error(r("general.error"),{description:i.message,dismissLabel:r("actions.close")})}});return e.jsx(o.Form,{form:t,children:e.jsxs("form",{onSubmit:L,className:"flex flex-1 flex-col",children:[e.jsx(o.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(s.Field,{control:t.control,name:"first_name",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.firstName")}),e.jsx(s.Control,{children:e.jsx(f,{...a})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"last_name",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.lastName")}),e.jsx(s.Control,{children:e.jsx(f,{...a})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(s.Field,{control:t.control,name:"language",render:({field:{ref:a,...i}})=>{var m;return e.jsxs(s.Item,{className:"gap-y-4",children:[e.jsxs("div",{children:[e.jsx(s.Label,{children:r("profile.fields.languageLabel")}),e.jsx(s.Hint,{children:r("profile.edit.languageHint")})]}),e.jsxs("div",{children:[e.jsx(s.Control,{children:e.jsxs(c,{...i,onValueChange:i.onChange,children:[e.jsx(c.Trigger,{ref:a,className:"py-1 text-[13px]",children:e.jsx(c.Value,{placeholder:r("profile.edit.languagePlaceholder"),children:(m=b.find(l=>l.code===i.value))==null?void 0:m.display_name})}),e.jsx(c.Content,{children:p.map(l=>e.jsx(c.Item,{value:l.code,children:l.display_name},l.code))})]})}),e.jsx(s.ErrorMessage,{})]})]})}}),e.jsx(s.Field,{control:t.control,name:"usage_insights",render:({field:{value:a,onChange:i,...m}})=>e.jsxs(s.Item,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(s.Label,{children:r("profile.fields.usageInsightsLabel")}),e.jsx(s.Control,{children:e.jsx(M,{...m,checked:a,onCheckedChange:i})})]}),e.jsx(s.Hint,{children:e.jsx("span",{children:e.jsx(T,{i18nKey:"profile.edit.usageInsightsHint",components:[e.jsx("a",{className:"text-ui-fg-interactive hover:text-ui-fg-interactive-hover transition-fg underline",href:"https://docs.medusajs.com/usage#admin-analytics",target:"_blank",rel:"noopener noreferrer"},"hint-link")]})})}),e.jsx(s.ErrorMessage,{})]})})]})}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(o.Close,{asChild:!0,children:e.jsx(u,{size:"small",variant:"secondary",children:r("actions.cancel")})}),e.jsx(u,{size:"small",type:"submit",isLoading:C,children:r("actions.save")})]})})]})})},le=()=>{const{user:n,isPending:h,isError:r,error:d}=F(),{t:x}=y();if(r)throw d;return e.jsxs(o,{children:[e.jsx(o.Header,{className:"capitalize",children:e.jsx(P,{children:x("profile.edit.header")})}),!h&&n&&e.jsx(R,{user:n,usageInsights:!1})]})};export{le as Component};
