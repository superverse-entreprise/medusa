import{u as c,y as u,j as r,e as f}from"./index-S--WvUSo.js";import{u as p,R as o}from"./route-focus-modal-MMx5Xnk0.js";import{t as x}from"./zod-jt04JUtm.js";import{u as h}from"./form-0PHaH8g8.js";import{E as j}from"./email-form-AWz7b6cr.js";import{E as y}from"./schemas-d4mcifo0.js";import{B as n}from"./button-Pc5Xo8ua.js";import{c as E}from"./react-router-dom-aSYyayiN.js";import{H as v}from"./heading-cSlef4Su.js";import"./react-PzSkSLoa.js";import"./react-dom-Og6--24v.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./prompt-LzbVPZYR.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./tooltip-Ixyw9oT8.js";import"./input-A29ux7yj.js";import"./index-JzuMwgWW.js";const R=({draftOrder:e})=>{const{t}=c(),{handleSuccess:i}=p(),s=h({defaultValues:{email:e.cart.email},resolver:x(y)}),{mutateAsync:a,isLoading:m}=u(e.id),l=s.handleSubmit(async d=>{a(d,{onSuccess:()=>{i()}})});return r.jsx(o.Form,{form:s,children:r.jsxs("form",{onSubmit:l,className:"flex size-full flex-col overflow-hidden",children:[r.jsx(o.Body,{className:"size-full flex-1 overflow-auto",children:r.jsx(j,{control:s.control,layout:"stack"})}),r.jsx(o.Footer,{children:r.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[r.jsx(o.Close,{asChild:!0,children:r.jsx(n,{variant:"secondary",size:"small",children:t("actions.cancel")})}),r.jsx(n,{type:"submit",isLoading:m,size:"small",children:t("actions.save")})]})})]})})},_=()=>{const{id:e}=E(),{t}=c(),{draft_order:i,isLoading:s,isError:a,error:m}=f(e),l=!s&&i;if(a)throw m;return r.jsxs(o,{children:[r.jsx(o.Header,{children:r.jsx(v,{children:t("email.editHeader")})}),l&&r.jsx(R,{draftOrder:i})]})};export{_ as Component};
