import{u,as as p,j as s,au as j}from"./index-S--WvUSo.js";import{u as h,R as t}from"./route-focus-modal-MMx5Xnk0.js";import{t as g}from"./zod-jt04JUtm.js";import{u as y,F as e}from"./form-0PHaH8g8.js";import{o as F,s as c}from"./index-JzuMwgWW.js";import{I as d}from"./input-A29ux7yj.js";import{B as x}from"./button-Pc5Xo8ua.js";import{c as _}from"./react-router-dom-aSYyayiN.js";import{H as b}from"./heading-cSlef4Su.js";import"./react-PzSkSLoa.js";import"./react-dom-Og6--24v.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./prompt-LzbVPZYR.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./tooltip-Ixyw9oT8.js";const E=F({first_name:c().optional(),last_name:c().optional()}),U=({user:n})=>{const{t:r}=u(),{handleSuccess:i}=h(),o=y({defaultValues:{first_name:n.first_name||"",last_name:n.last_name||""},resolver:g(E)}),{mutateAsync:l,isPending:m}=p(n.id),f=o.handleSubmit(async a=>{await l(a,{onSuccess:()=>{i()}})});return s.jsx(t.Form,{form:o,children:s.jsxs("form",{onSubmit:f,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsxs(t.Body,{className:"flex max-w-full flex-1 flex-col gap-y-8 overflow-y-auto",children:[s.jsx(e.Field,{control:o.control,name:"first_name",render:({field:a})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("fields.firstName")}),s.jsx(e.Control,{children:s.jsx(d,{...a})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"last_name",render:({field:a})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("fields.lastName")}),s.jsx(e.Control,{children:s.jsx(d,{...a})}),s.jsx(e.ErrorMessage,{})]})})]}),s.jsx(t.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(t.Close,{asChild:!0,children:s.jsx(x,{size:"small",variant:"secondary",children:r("actions.cancel")})}),s.jsx(x,{size:"small",type:"submit",isLoading:m,children:r("actions.save")})]})})]})})},$=()=>{const{t:n}=u(),{id:r}=_(),{user:i,isPending:o,isError:l,error:m}=j(r);if(l)throw m;return s.jsxs(t,{children:[s.jsx(t.Header,{children:s.jsx(b,{children:n("users.editUser")})}),!o&&i&&s.jsx(U,{user:i})]})};export{$ as Component};
