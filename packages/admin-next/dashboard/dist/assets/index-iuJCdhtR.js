import{u as l,y as d,j as r,e as u}from"./index-S--WvUSo.js";import{u as f,R as o}from"./route-focus-modal-MMx5Xnk0.js";import{t as h}from"./zod-jt04JUtm.js";import{u as x}from"./form-0PHaH8g8.js";import{T as j}from"./transfer-ownership-form-XwmB6bl_.js";import{T as w}from"./schemas-d4mcifo0.js";import{B as c}from"./button-Pc5Xo8ua.js";import{c as y}from"./react-router-dom-aSYyayiN.js";import{H as _}from"./heading-cSlef4Su.js";import"./react-PzSkSLoa.js";import"./react-dom-Og6--24v.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./prompt-LzbVPZYR.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./tooltip-Ixyw9oT8.js";import"./useInfiniteQuery-20kl54mv.js";import"./lodash-5s15_I2H.js";import"./money-amount-helpers--myf8Rla.js";import"./currencies-bd3ADI6s.js";import"./order-helpers-hEGvMzl3.js";import"./combobox-DjjFlb75.js";import"./x-mark-mini-aYDSd38M.js";import"./triangles-mini-HukRlWGp.js";import"./plus-mini-IRJECoWI.js";import"./select-Z4sV_-wF.js";import"./index-Hm2Uj9Gg.js";import"./format-vrL-wy9v.js";import"./index-JzuMwgWW.js";const S=({draftOrder:s})=>{const{t}=l(),{handleSuccess:i}=f(),e=x({defaultValues:{current_owner_id:s.cart.customer_id,new_owner_id:""},resolver:h(w)}),{mutateAsync:n,isLoading:m}=d(s.id),a=e.handleSubmit(async p=>{n({customer_id:p.new_owner_id},{onSuccess:()=>{i()}})});return r.jsx(o.Form,{form:e,children:r.jsxs("form",{onSubmit:a,className:"flex size-full flex-col overflow-hidden",children:[r.jsx(o.Body,{className:"size-full flex-1 overflow-auto",children:r.jsx(j,{order:s,control:e.control})}),r.jsx(o.Footer,{children:r.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[r.jsx(o.Close,{asChild:!0,children:r.jsx(c,{variant:"secondary",size:"small",children:t("actions.cancel")})}),r.jsx(c,{type:"submit",isLoading:m,size:"small",children:t("actions.save")})]})})]})})},Y=()=>{const{id:s}=y(),{t}=l(),{draft_order:i,isLoading:e,isError:n,error:m}=u(s),a=!e&&i;if(n)throw m;return r.jsxs(o,{children:[r.jsx(o.Header,{children:r.jsx(_,{children:t("transferOwnership.header")})}),a&&r.jsx(S,{draftOrder:i})]})};export{Y as Component};
