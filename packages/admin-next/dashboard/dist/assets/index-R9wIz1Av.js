import{u as f,j as r}from"./index-S--WvUSo.js";import{b as h,a as j}from"./products-_PEbH1CR.js";import{t as y}from"./zod-jt04JUtm.js";import{u as v}from"./form-0PHaH8g8.js";import{o as l,a as g,r as P,s as p}from"./index-JzuMwgWW.js";import{u as b,a as i}from"./route-focus-modal-MMx5Xnk0.js";import{n as S,V}from"./utils-yS_UVlXG.js";import{B as d}from"./button-Pc5Xo8ua.js";import{c as T}from"./react-router-dom-aSYyayiN.js";import"./react-PzSkSLoa.js";import"./react-dom-Og6--24v.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./tooltip-Ixyw9oT8.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./heading-cSlef4Su.js";import"./prompt-LzbVPZYR.js";import"./currency-cell-td0Z0cRW.js";import"./index-JDlOzmVl.js";import"./minus-E5-czcFC.js";import"./readonly-cell-mOmG3VSA.js";import"./currencies--m0OMbks.js";const F=l({variants:g(l({prices:P(p(),p()).optional()}))}),w=({product:s})=>{const{t}=f(),{handleSuccess:n}=b(),a=v({defaultValues:{variants:s.variants.map(o=>({prices:o.prices.reduce((e,c)=>(e[c.currency_code]=c.amount,e),{})}))},resolver:y(F,{})}),{mutateAsync:m,isPending:u}=h(s.id,""),x=a.handleSubmit(async o=>{const e={variants:S(o.variants)};await m(e,{onSuccess:()=>{n(`../${s.id}`)}})},o=>{console.log(o)});return r.jsx(i.Form,{form:a,children:r.jsxs("form",{onSubmit:x,className:"flex h-full flex-col",children:[r.jsx(i.Header,{children:r.jsx("div",{className:"flex w-full items-center justify-end gap-x-2",children:r.jsxs("div",{className:"flex items-center gap-x-4",children:[r.jsx(i.Close,{asChild:!0,children:r.jsx(d,{variant:"secondary",size:"small",children:t("actions.cancel")})}),r.jsx(d,{type:"submit",variant:"primary",size:"small",isLoading:u,children:t("actions.save")})]})})}),r.jsx(i.Body,{children:r.jsx(V,{form:a})})]})})},X=()=>{const{id:s}=T(),{product:t,isLoading:n,isError:a,error:m}=j(s);if(a)throw m;return r.jsx(i,{children:!n&&t&&r.jsx(w,{product:t})})};export{X as Component};
