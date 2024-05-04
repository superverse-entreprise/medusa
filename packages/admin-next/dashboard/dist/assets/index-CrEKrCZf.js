import{u as h,j as e,T as u}from"./index-S--WvUSo.js";import{u as j,a as o}from"./route-focus-modal-MMx5Xnk0.js";import{t as g}from"./zod-jt04JUtm.js";import{u as y,F as r}from"./form-0PHaH8g8.js";import{o as b,s as a}from"./index-JzuMwgWW.js";import{a as v}from"./shipping-profiles-CJfLxZ-F.js";import{t as l}from"./toast-4oQfF9Sm.js";import{B as c}from"./button-Pc5Xo8ua.js";import{H as S}from"./heading-cSlef4Su.js";import{I as m}from"./input-A29ux7yj.js";import"./react-PzSkSLoa.js";import"./react-dom-Og6--24v.js";import"./react-router-dom-aSYyayiN.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./prompt-LzbVPZYR.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./tooltip-Ixyw9oT8.js";import"./x-circle-solid-rnqhxvfk.js";import"./check-circle-solid-7j4QonPK.js";const C=b({name:a().min(1),type:a().min(1)});function F(){const{t:s}=h(),{handleSuccess:p}=j(),t=y({defaultValues:{name:"",type:""},resolver:g(C)}),{mutateAsync:d,isPending:x}=v(),f=t.handleSubmit(async i=>{await d({name:i.name,type:i.type},{onSuccess:({shipping_profile:n})=>{l.success(s("general.success"),{description:s("shippingProfile.create.successToast",{name:n.name}),dismissLabel:s("actions.close")}),p(`/settings/shipping-profiles/${n.id}`)},onError:n=>{l.error(s("general.error"),{description:n.message,dismissLabel:s("actions.close")})}})});return e.jsx(o.Form,{form:t,children:e.jsxs("form",{onSubmit:f,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(o.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(o.Close,{asChild:!0,children:e.jsx(c,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(c,{type:"submit",size:"small",isLoading:x,children:s("actions.save")})]})}),e.jsx(o.Body,{className:"flex flex-1 flex-col overflow-hidden",children:e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"mx-auto flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(S,{className:"capitalize",children:s("shippingProfile.create.header")}),e.jsx(u,{size:"small",className:"text-ui-fg-subtle",children:s("shippingProfile.create.hint")})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(r.Field,{control:t.control,name:"name",render:({field:i})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:s("fields.name")}),e.jsx(r.Control,{children:e.jsx(m,{...i})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"type",render:({field:i})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{tooltip:s("shippingProfile.tooltip.type"),children:s("fields.type")}),e.jsx(r.Control,{children:e.jsx(m,{...i})}),e.jsx(r.ErrorMessage,{})]})})]})]})})})]})})}function K(){return e.jsx(o,{children:e.jsx(F,{})})}export{K as Component};
