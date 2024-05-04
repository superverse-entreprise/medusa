import{j as e,u as A,a as U,T as O}from"./index-S--WvUSo.js";import{u as H,R as P}from"./route-focus-modal-MMx5Xnk0.js";import{c as G,e as X,a as Y,h as T,i as W,j as J,u as K,k as Z}from"./promotions-hsTHlNrt.js";import{t as Q}from"./zod-jt04JUtm.js";import{r as R}from"./react-PzSkSLoa.js";import{u as ee,c as se,F as m}from"./form-0PHaH8g8.js";import{o as L,a as B,s as F,u as re,n as te,b as ae}from"./index-JzuMwgWW.js";import{C as ie}from"./combobox-DjjFlb75.js";import{X as oe}from"./x-mark-mini-aYDSd38M.js";import{B as k}from"./button-Pc5Xo8ua.js";import{H as z}from"./heading-cSlef4Su.js";import{S as _}from"./select-Z4sV_-wF.js";import{B as ne}from"./badge-99FyByJO.js";import{I as M}from"./input-A29ux7yj.js";import{c as le}from"./react-router-dom-aSYyayiN.js";const de=({promotion:r,rules:p,ruleType:t})=>{const{handleSuccess:a}=H(),{attributes:i,isError:c,error:n}=G(t),{operators:o,isError:f,error:b}=X();if(c||f)throw n||b;const g=(i==null?void 0:i.filter(j=>j.required))||[],l=D(r,g,t)||[],{mutateAsync:u}=Y(r.id),{mutateAsync:d}=T(r.id,t),{mutateAsync:h}=W(r.id,t),{mutateAsync:S,isPending:q}=J(r.id,t),C=j=>async function(x){const v={},{rules:y=[]}=x,V=y.filter(s=>l.map(w=>w.id).includes(s.id));for(const s of V)v[s.id]=parseInt(s.values);const E=y.filter(s=>!l.map(w=>w.id).includes(s.id)),$=E.filter(s=>!("id"in s)),N=E.filter(s=>typeof s.id=="string");Object.keys(v).length&&await u({application_method:v}),$.length&&await d({rules:$.map(s=>({attribute:s.attribute,operator:s.operator,values:s.values}))}),j!=null&&j.length&&await h({rule_ids:j.map(s=>s.id)}),N.length&&await S({rules:N.map(s=>({id:s.id,attribute:s.attribute,operator:s.operator,values:s.values}))}),a()};if(i&&o)return e.jsx(xe,{promotion:r,rules:p,ruleType:t,attributes:i,operators:o,handleSubmit:C,isSubmitting:q})};var I=(r=>(r.RULES="rules",r.BUY_RULES="buy-rules",r.TARGET_RULES="target-rules",r))(I||{});const ce=()=>{var g,l;const r=le();if(!["rules","buy-rules","target-rules"].includes(r.ruleType))throw"invalid page";const{t}=A(),a=r.ruleType,i=r.id,c=[],{promotion:n,isPending:o,isError:f,error:b}=K(i);if(n&&(a==="rules"?c.push(...n.rules||[]):a==="target-rules"?c.push(...((g=n==null?void 0:n.application_method)==null?void 0:g.target_rules)||[]):a==="buy-rules"&&c.push(...((l=n.application_method)==null?void 0:l.buy_rules)||[])),f)throw b;return e.jsxs(P,{children:[e.jsx(P.Header,{children:e.jsx(z,{children:t(`promotions.edit.${a}.title`)})}),!o&&n&&e.jsx(de,{promotion:n,rules:c,ruleType:a})]})};function D(r,p,t){var c,n;if(t===I.RULES&&!(p!=null&&p.length))return[];const a=p.find(o=>o.id==="apply_to_quantity"),i=p.find(o=>o.id==="buy_rules_min_quantity");if(t===I.TARGET_RULES)return[{id:"apply_to_quantity",attribute:"apply_to_quantity",operator:"eq",required:a==null?void 0:a.required,field_type:a==null?void 0:a.field_type,values:[{value:(c=r==null?void 0:r.application_method)==null?void 0:c.apply_to_quantity}]}];if(t===I.BUY_RULES)return[{id:"buy_rules_min_quantity",attribute:"buy_rules_min_quantity",operator:"eq",required:i==null?void 0:i.required,field_type:i==null?void 0:i.field_type,values:[{value:(n=r==null?void 0:r.application_method)==null?void 0:n.buy_rules_min_quantity}]}]}const ue=L({rules:B(L({id:F().optional(),attribute:F().min(1,{message:U.t("promotions.form.required")}),operator:F().min(1,{message:U.t("promotions.form.required")}),values:re([te().min(1,{message:U.t("promotions.form.required")}),F().min(1,{message:U.t("promotions.form.required")}),B(F()).min(1,{message:U.t("promotions.form.required")})]),required:ae().optional(),field_type:F().optional()}))}),me=({identifier:r,scope:p,valuesFields:t,valuesRef:a,fieldRule:i,attributes:c,ruleType:n})=>{const o=c==null?void 0:c.find(b=>b.value===i.attribute),{values:f=[]}=Z(n,o==null?void 0:o.id,{enabled:!!(o!=null&&o.id)&&!o.disguised});return e.jsx(m.Field,{...t,render:({field:{onChange:b,ref:g,...l}})=>i.field_type==="number"?e.jsxs(m.Item,{className:"basis-1/2",children:[e.jsx(m.Control,{children:e.jsx(M,{...l,type:"number",onChange:b,className:"bg-ui-bg-base",ref:a,min:1})}),e.jsx(m.ErrorMessage,{})]}):i.field_type==="text"?e.jsxs(m.Item,{className:"basis-1/2",children:[e.jsx(m.Control,{children:e.jsx(M,{...l,onChange:b,className:"bg-ui-bg-base"})}),e.jsx(m.ErrorMessage,{})]}):e.jsxs(m.Item,{className:"basis-1/2",children:[e.jsx(m.Control,{children:e.jsx(ie,{...l,placeholder:"Select Values",options:f,onChange:b,className:"bg-ui-bg-base"})}),e.jsx(m.ErrorMessage,{})]})},`${r}.${p}.${t.name}-${i.attribute}`)},pe=({form:r,ruleType:p,fields:t,attributes:a,operators:i,removeRule:c,updateRule:n,appendRule:o,setRulesToRemove:f,rulesToRemove:b,scope:g="rules"})=>{const{t:l}=A();return e.jsxs("div",{className:"flex flex-col",children:[e.jsx(z,{level:"h2",className:"mb-2",children:l(`promotions.fields.conditions.${p}.title`)}),e.jsx(O,{className:"text-ui-fg-subtle txt-small mb-10",children:l(`promotions.fields.conditions.${p}.description`)}),t.map((u,d)=>{const h=u.id,{ref:S,...q}=r.register(`${g}.${d}.attribute`),{ref:C,...j}=r.register(`${g}.${d}.operator`),{ref:x,...v}=r.register(`${g}.${d}.values`);return e.jsxs(R.Fragment,{children:[e.jsxs("div",{className:"bg-ui-bg-subtle border-ui-border-base flex flex-row gap-2 rounded-xl border px-2 py-2",children:[e.jsxs("div",{className:"grow",children:[e.jsx(m.Field,{...q,render:({field:{onChange:y,ref:V,...E}})=>{const $=(t==null?void 0:t.map(s=>s.attribute))||[],N=(a==null?void 0:a.filter(s=>s.value===u.attribute?!0:!$.includes(s.value)))||[];return e.jsxs(m.Item,{className:"mb-2",children:[u.required&&e.jsx("p",{className:"text text-ui-fg-muted txt-small",children:l("promotions.form.required")}),e.jsx(m.Control,{children:e.jsxs(_,{...E,onValueChange:s=>{n(d,{...u,values:[]}),y(s)},disabled:u.required,children:[e.jsx(_.Trigger,{ref:S,className:"bg-ui-bg-base",children:e.jsx(_.Value,{placeholder:l("promotions.form.selectAttribute")})}),e.jsx(_.Content,{children:N==null?void 0:N.map((s,w)=>e.jsx(_.Item,{value:s.value,children:e.jsx("span",{className:"text-ui-fg-subtle",children:s.label})},`${h}-attribute-option-${w}`))})]})}),e.jsx(m.ErrorMessage,{})]})}},`${h}.${g}.${q.name}`),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(m.Field,{...j,render:({field:{onChange:y,ref:V,...E}})=>e.jsxs(m.Item,{className:"basis-1/2",children:[e.jsx(m.Control,{children:e.jsxs(_,{...E,onValueChange:y,disabled:u.required,children:[e.jsx(_.Trigger,{ref:C,className:"bg-ui-bg-base",children:e.jsx(_.Value,{placeholder:"Select Operator"})}),e.jsx(_.Content,{children:i==null?void 0:i.map(($,N)=>e.jsx(_.Item,{value:$.value,children:e.jsx("span",{className:"text-ui-fg-subtle",children:$.label})},`${h}-operator-option-${N}`))})]})}),e.jsx(m.ErrorMessage,{})]})},`${h}.${g}.${j.name}`),e.jsx(me,{identifier:h,scope:g,valuesFields:v,valuesRef:x,fieldRule:u,attributes:a,ruleType:p})]})]}),e.jsx("div",{className:"flex-none self-center px-1",children:e.jsx(oe,{className:`text-ui-fg-muted cursor-pointer ${u.required?"invisible":"visible"}`,onClick:()=>{u.required||(u.id&&f&&f([...b,u]),c(d))}})})]}),d<t.length-1&&e.jsxs("div",{className:"relative px-6 py-3",children:[e.jsx("div",{className:"border-ui-border-strong absolute bottom-0 left-[40px] top-0 z-[-1] w-px bg-[linear-gradient(var(--border-strong)_33%,rgba(255,255,255,0)_0%)] bg-[length:1px_3px] bg-repeat-y"}),e.jsx(ne,{size:"2xsmall",className:" text-xs",children:l("promotions.form.and")})]})]},`${u.id}.${d}`)}),e.jsxs("div",{className:"mt-8",children:[e.jsx(k,{type:"button",variant:"secondary",className:"inline-block",onClick:()=>{o({attribute:"",operator:"",values:[],required:!1})},children:l("promotions.fields.addCondition")}),e.jsx(k,{type:"button",variant:"transparent",className:"text-ui-fg-muted hover:text-ui-fg-subtle ml-2 inline-block",onClick:()=>{const u=t.map((d,h)=>d.required?null:h).filter(d=>d!==null);f&&f(t.filter(d=>!d.required)),c(u)},children:l("promotions.fields.clearAll")})]})]})},xe=({promotion:r,rules:p,ruleType:t,attributes:a,operators:i,handleSubmit:c,isSubmitting:n})=>{const{t:o}=A(),f=(a==null?void 0:a.filter(x=>x.required))||[],b=f==null?void 0:f.map(x=>x.value),g=D(r,f,t)||[],[l,u]=R.useState([]),d=ee({defaultValues:{rules:[...g,...p].map(x=>{var v;return{id:x.id,required:b.includes(x.attribute),field_type:x.field_type,attribute:x.attribute,operator:x.operator,values:(v=x==null?void 0:x.values)==null?void 0:v.map(y=>y.value)}})},resolver:Q(ue)}),{fields:h,append:S,remove:q,update:C}=se({control:d.control,name:"rules",keyName:"rules_id"}),j=d.handleSubmit(c(l));return e.jsx(P.Form,{form:d,children:e.jsxs("form",{onSubmit:j,className:"flex h-full flex-col",children:[e.jsx(P.Body,{children:e.jsx(pe,{form:d,ruleType:t,attributes:a,operators:i,fields:h,setRulesToRemove:u,rulesToRemove:l,appendRule:S,removeRule:q,updateRule:C})}),e.jsx(P.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(P.Close,{asChild:!0,children:e.jsx(k,{size:"small",variant:"secondary",disabled:n,children:o("actions.cancel")})}),e.jsx(k,{size:"small",type:"submit",isLoading:n,children:o("actions.save")})]})})]})})},Ce=Object.freeze(Object.defineProperty({__proto__:null,Component:ce},Symbol.toStringTag,{value:"Module"}));export{pe as R,Ce as i};
