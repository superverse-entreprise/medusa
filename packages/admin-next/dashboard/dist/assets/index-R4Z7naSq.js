import{Z as k,az as se,m as te,u as m,bB as ae,j as e,I as E,bC as ie,T as r,d as le,a6 as re,ao as ne,a7 as ce,bD as de,bE as q,S as H,a1 as h,aY as oe,bF as me,bG as xe,aP as ue,bH as pe,b2 as fe,l as he}from"./index-S--WvUSo.js";import{o as V}from"./constants-_5zevAUU.js";import{J as je}from"./json-view-section-Dui2O31i.js";import{t as ge}from"./zod-jt04JUtm.js";import{r as f}from"./react-PzSkSLoa.js";import{u as ve,F as b}from"./form-0PHaH8g8.js";import{z as B}from"./index-JzuMwgWW.js";import{L as U,d as ye,c as be,O as _e}from"./react-router-dom-aSYyayiN.js";import{u as Ne}from"./use-date-Putn0_Ur.js";import{g as _,c as p}from"./money-amount-helpers--myf8Rla.js";import{X as we}from"./x-mark-mini-aYDSd38M.js";import{u as T}from"./use-prompt-wB0F2CxI.js";import{T as L}from"./tooltip-Ixyw9oT8.js";import{H as j}from"./heading-cSlef4Su.js";import{A as g}from"./action-menu-olZwXQ3q.js";import{C as N,F as ze,E as Ce}from"./customer-info-JjeQDtDl.js";import{A as Oe}from"./arrow-path-LhKlAL5K.js";import{T as X}from"./thumbnail-gerN888-.js";import{f as Se}from"./format-provider-yygkXOZ0.js";import{S as y}from"./status-badge-sML89E1A.js";import{X as A}from"./x-circle-onUe-B-F.js";import{f as S}from"./format-vrL-wy9v.js";import{C as I}from"./copy-jbaNBJoS.js";import{g as Pe,a as $e}from"./order-helpers-hEGvMzl3.js";import{B as Te}from"./badge-99FyByJO.js";import{B as Le}from"./button-Pc5Xo8ua.js";import{P as Ae}from"./pencil-square-u3fizEAQ.js";import"./react-dom-Og6--24v.js";import"./drawer-H3TI1lDZ.js";import"./index-sF0hA49A.js";import"./information-circle-solid-rXH6vJ5W.js";import"./label-HFq5fzpT.js";import"./currencies-bd3ADI6s.js";import"./prompt-LzbVPZYR.js";import"./input-A29ux7yj.js";import"./addresses-d8YOe6mI.js";import"./countries-QR_y0WJ_.js";import"./check-circle-solid-7j4QonPK.js";var Ie=Object.defineProperty,C=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,D=(s,t,a)=>t in s?Ie(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,ke=(s,t)=>{for(var a in t||(t={}))W.call(t,a)&&D(s,a,t[a]);if(C)for(var a of C(t))Y.call(t,a)&&D(s,a,t[a]);return s},Be=(s,t)=>{var a={};for(var i in s)W.call(s,i)&&t.indexOf(i)<0&&(a[i]=s[i]);if(s!=null&&C)for(var i of C(s))t.indexOf(i)<0&&Y.call(s,i)&&(a[i]=s[i]);return a};const P=f.forwardRef((s,t)=>{var a=s,{color:i="currentColor"}=a,n=Be(a,["color"]);return f.createElement("svg",ke({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",ref:t},n),f.createElement("path",{stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 8.667 15.333 12m0 0L12 15.333M15.333 12h-8a2.667 2.667 0 0 1-2.666-2.667V4.667"}))});P.displayName="ArrowDownRightMini";var De=Object.defineProperty,O=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,M=(s,t,a)=>t in s?De(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,Me=(s,t)=>{for(var a in t||(t={}))Q.call(t,a)&&M(s,a,t[a]);if(O)for(var a of O(t))Z.call(t,a)&&M(s,a,t[a]);return s},Fe=(s,t)=>{var a={};for(var i in s)Q.call(s,i)&&t.indexOf(i)<0&&(a[i]=s[i]);if(s!=null&&O)for(var i of O(s))t.indexOf(i)<0&&Z.call(s,i)&&(a[i]=s[i]);return a};const G=f.forwardRef((s,t)=>{var a=s,{color:i="currentColor"}=a,n=Fe(a,["color"]);return f.createElement("svg",Me({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",ref:t},n),f.createElement("path",{fill:i,fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm-.75-4.75a.75.75 0 1 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 0 0 1.1 1.02l1.95-2.1v4.59Z",clipRule:"evenodd"}))});G.displayName="ArrowUpCircleSolid";const Re=s=>({queryKey:se.detail(s),queryFn:async()=>te.admin.orders.retrieve(s,{expand:V})}),Ks=async({params:s})=>{const t=s.id,a=Re(t);return k.getQueryData(a.queryKey)??await k.fetchQuery(a)},Ee=B.object({value:B.string().min(1)}),qe=({order:s})=>{const{t}=m(),a=f.useRef(null),i=ve({defaultValues:{value:""},resolver:ge(Ee)}),{mutateAsync:n,isLoading:l}=ae(),c=i.handleSubmit(async d=>{n({resource_id:s.id,resource_type:"order",value:d.value},{onSuccess:()=>{i.reset(),x()}})}),o=()=>{const d=a.current;d&&(d.style.height="auto",d.style.height=d.scrollHeight+"px")},x=()=>{const d=a.current;d&&(d.style.height="auto")};return e.jsx("div",{children:e.jsx(b,{...i,children:e.jsx("form",{onSubmit:c,children:e.jsxs("div",{className:"bg-ui-bg-field shadow-borders-base flex flex-col gap-y-2 rounded-md px-2 py-1.5",children:[e.jsx(b.Field,{control:i.control,name:"value",render:({field:d})=>e.jsxs(b.Item,{children:[e.jsx(b.Label,{hidden:!0,children:t("orders.activity.comment.label")}),e.jsx(b.Control,{children:e.jsx("textarea",{...d,ref:a,onInput:o,className:"txt-small text-ui-fg-base placeholder:text-ui-fg-muted resize-none overflow-hidden bg-transparent outline-none",placeholder:t("orders.activity.comment.placeholder"),rows:1})})]})}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsxs(E,{type:"submit",isLoading:l,variant:"transparent",size:"small",className:"text-ui-fg-muted hover:text-ui-fg-subtle active:text-ui-fg-subtle",children:[e.jsx("span",{className:"sr-only",children:t("orders.activity.comment.addButtonText")}),e.jsx(G,{})]})})]})})})})},He=9999,Ve=({order:s})=>{const t=Ue(s);if(t.length<=3)return e.jsx("div",{className:"flex flex-col gap-y-0.5",children:t.map((l,c)=>e.jsx(z,{title:l.title,timestamp:l.timestamp,isFirst:c===t.length-1,children:l.children},c))});const a=t.slice(0,2),i=t.slice(2,t.length-1),n=t[t.length-1];return e.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[a.map((l,c)=>e.jsx(z,{title:l.title,timestamp:l.timestamp,children:l.children},c)),e.jsx(Xe,{activities:i}),e.jsx(z,{title:n.title,timestamp:n.timestamp,isFirst:!0,children:n.children})]})},Ue=s=>{const{t}=m(),{notes:a,isLoading:i,isError:n,error:l}=ie({resource_id:s.id,limit:He,offset:0},{keepPreviousData:!0});if(n)throw l;return f.useMemo(()=>{if(i)return[];const c=[];for(const d of s.payments)c.push({title:t("orders.activity.events.payment.awaiting"),timestamp:d.created_at,children:e.jsx(r,{size:"small",className:"text-ui-fg-subtle",children:_(d.amount,d.currency_code)})}),d.canceled_at&&c.push({title:t("orders.activity.events.payment.canceled"),timestamp:d.canceled_at,children:e.jsx(r,{size:"small",className:"text-ui-fg-subtle",children:_(d.amount,d.currency_code)})}),d.captured_at&&c.push({title:t("orders.activity.events.payment.captured"),timestamp:d.captured_at,children:e.jsx(r,{size:"small",className:"text-ui-fg-subtle",children:_(d.amount,d.currency_code)})});for(const d of s.fulfillments)c.push({title:t("orders.activity.events.fulfillment.created"),timestamp:d.created_at,children:e.jsx(Ye,{fulfillment:d})}),d.shipped_at&&c.push({title:t("orders.activity.events.fulfillment.shipped"),timestamp:d.shipped_at});for(const d of s.returns)c.push({title:t("orders.activity.events.return.created"),timestamp:d.created_at});for(const d of a||[])c.push({title:t("orders.activity.events.note.comment"),timestamp:d.created_at,children:e.jsx(We,{note:d})});s.canceled_at&&c.push({title:t("orders.activity.events.canceled.title"),timestamp:s.canceled_at});const o=c.sort((d,v)=>new Date(v.timestamp).getTime()-new Date(d.timestamp).getTime()),x={title:t("orders.activity.events.placed.title"),timestamp:s.created_at,children:e.jsx(r,{size:"small",className:"text-ui-fg-subtle",children:t("orders.activity.events.placed.fromSalesChannel",{salesChannel:s.sales_channel.name})})};return[...o,x]},[s,a,i,t])},z=({title:s,timestamp:t,isFirst:a=!1,children:i})=>{const{getFullDate:n,getRelativeDate:l}=Ne();return e.jsxs("div",{className:"grid grid-cols-[20px_1fr] items-start gap-2",children:[e.jsxs("div",{className:"flex size-full flex-col items-center gap-y-0.5",children:[e.jsx("div",{className:"flex size-5 items-center justify-center",children:e.jsx("div",{className:"bg-ui-bg-base shadow-borders-base flex size-2.5 items-center justify-center rounded-full",children:e.jsx("div",{className:"bg-ui-tag-neutral-icon size-1.5 rounded-full"})})}),!a&&e.jsx("div",{className:"bg-ui-border-base w-px flex-1"})]}),e.jsxs("div",{className:le({"pb-4":!a}),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:s}),e.jsx(L,{content:n({date:t,includeTime:!0}),children:e.jsx(r,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:l(t)})})]}),e.jsx("div",{children:i})]})]})},Xe=({activities:s})=>{const[t,a]=f.useState(!1),{t:i}=m();return s.length?e.jsxs(re,{open:t,onOpenChange:a,children:[!t&&e.jsxs("div",{className:"grid grid-cols-[20px_1fr] items-start gap-2",children:[e.jsx("div",{className:"flex size-full flex-col items-center",children:e.jsx("div",{className:"border-ui-border-strong w-px flex-1 bg-[linear-gradient(var(--border-strong)_33%,rgba(255,255,255,0)_0%)] bg-[length:1px_3px] bg-right bg-repeat-y"})}),e.jsx("div",{className:"pb-4",children:e.jsx(ne,{className:"text-left",children:e.jsx(r,{size:"small",leading:"compact",weight:"plus",className:"text-ui-fg-muted",children:i("orders.activity.showMoreActivities",{count:s.length})})})})]}),e.jsx(ce,{children:e.jsx("div",{className:"flex flex-col gap-y-0.5",children:s.map((n,l)=>e.jsx(z,{title:n.title,timestamp:n.timestamp,children:n.children},l))})})]}):null},We=({note:s})=>{const{t}=m(),a=T(),{first_name:i,last_name:n,email:l}=s.author||{},c=[i,n].filter(Boolean).join(" "),o=t("orders.activity.events.note.byLine",{author:c||l}),{mutateAsync:x}=de(s.id),d=async()=>{await a({title:t("general.areYouSure"),description:"This action cannot be undone",confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await x()};return e.jsxs("div",{className:"flex flex-col gap-y-2 pt-2",children:[e.jsxs("div",{className:"bg-ui-bg-component shadow-borders-base group grid grid-cols-[1fr_20px] items-start gap-x-2 text-pretty rounded-r-2xl rounded-bl-md rounded-tl-xl px-3 py-1.5",children:[e.jsx("div",{className:"flex h-full min-h-7 items-center",children:e.jsx(r,{size:"xsmall",className:"text-ui-fg-subtle",children:s.value})}),e.jsxs(E,{size:"small",variant:"transparent",className:"transition-fg invisible opacity-0 group-hover:visible group-hover:opacity-100",type:"button",onClick:d,children:[e.jsx("span",{className:"sr-only",children:t("orders.activity.comment.deleteButtonText")}),e.jsx(we,{className:"text-ui-fg-muted"})]})]}),e.jsx(U,{to:`/settings/users/${s.author_id}`,className:"text-ui-fg-subtle hover:text-ui-fg-base transition-fg w-fit",children:e.jsx(r,{size:"small",children:o})})]})},Ye=({fulfillment:s})=>{const{t}=m(),{stock_location:a,isLoading:i,isError:n,error:l}=q(s.location_id,{enabled:!!s.location_id}),c=s.items.reduce((x,d)=>x+d.quantity,0),o=a?t("orders.activity.events.fulfillment.itemsFulfilledFrom",{count:c,location:a.name}):t("orders.activity.events.fulfillment.itemsFulfilled",{count:c});if(n)throw l;return e.jsx("div",{children:i?e.jsx(H,{className:"h-7 w-full"}):e.jsx(r,{size:"small",className:"text-ui-fg-subtle",children:o})})},F=({order:s})=>{const{t}=m();return e.jsxs(h,{className:"flex flex-col gap-y-8 px-6 py-4",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(j,{level:"h2",children:t("orders.activity.header")})}),e.jsx(qe,{order:s})]}),e.jsx(Ve,{order:s})]})},R=({order:s})=>e.jsxs(h,{className:"divide-y p-0",children:[e.jsx(Qe,{}),e.jsx(N.ID,{data:s}),e.jsx(N.Contact,{data:s}),e.jsx(N.Company,{data:s}),e.jsx(N.Addresses,{data:s})]}),Qe=()=>{const{t:s}=m();return e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:s("fields.customer")}),e.jsx(g,{groups:[{actions:[{label:s("transferOwnership.label"),to:"transfer-ownership",icon:e.jsx(Oe,{})}]},{actions:[{label:s("addresses.shippingAddress.editLabel"),to:"shipping-address",icon:e.jsx(ze,{})},{label:s("addresses.billingAddress.editLabel"),to:"billing-address",icon:e.jsx(oe,{})}]},{actions:[{label:s("email.editLabel"),to:"email",icon:e.jsx(Ce,{})}]}]})]})},Ze=({order:s})=>{const t=s.fulfillments||[];return e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(Je,{order:s}),t.map((a,i)=>e.jsx(Ke,{index:i,order:s,fulfillment:a},a.id))]})},Ge=({item:s,currencyCode:t})=>e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsxs("div",{className:"flex items-start gap-x-4",children:[e.jsx(X,{src:s.thumbnail}),e.jsxs("div",{children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",className:"text-ui-fg-base",children:s.title}),s.variant.sku&&e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(r,{size:"small",children:s.variant.sku}),e.jsx(I,{content:s.variant.sku,className:"text-ui-fg-muted"})]}),e.jsx(r,{size:"small",children:s.variant.options.map(a=>a.value).join(" · ")})]})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-x-4",children:[e.jsx("div",{className:"flex items-center justify-end",children:e.jsx(r,{size:"small",children:p(s.unit_price,t)})}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsxs(r,{children:[e.jsx("span",{className:"tabular-nums",children:s.quantity}),"x"]})}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx(r,{size:"small",children:p(s.subtotal||0,t)})})]})]},s.id),Je=({order:s})=>{var n;const{t}=m(),a=(n=s.fulfillments)==null?void 0:n.map(l=>l.items.map(c=>({id:c.item_id,quantity:c.quantity}))),i=s.items.filter(l=>!(a!=null&&a.some(c=>c.some(o=>o.id===l.id&&o.quantity===l.quantity))));return i.length?e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:t("orders.fulfillment.unfulfilledItems")}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx(y,{color:"red",className:"text-nowrap",children:t("orders.fulfillment.awaitingFullfillmentBadge")}),e.jsx(g,{groups:[]})]})]}),e.jsx("div",{children:i.map(l=>e.jsx(Ge,{item:l,currencyCode:s.currency_code},l.id))})]}):null},Ke=({fulfillment:s,order:t,index:a})=>{const{t:i}=m(),n=T(),l=!!s.location_id,{stock_location:c,isError:o,error:x}=q(s.location_id,{enabled:l});let d="Fulfilled",v="orange",$=s.created_at;s.canceled_at?(d="Canceled",v="red",$=s.canceled_at):s.shipped_at&&(d="Shipped",v="green",$=s.shipped_at);const{mutateAsync:K}=me(t.id),ee=async()=>{if(s.shipped_at)return;await n({title:i("general.areYouSure"),description:i("orders.fulfillment.cancelWarning"),confirmText:i("actions.continue"),cancelText:i("actions.cancel")})&&await K(s.id)};if(o)throw x;return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:i("orders.fulfillment.number",{number:a+1})}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx(L,{content:S(new Date($),"dd MMM, yyyy, HH:mm:ss"),children:e.jsx(y,{color:v,className:"text-nowrap",children:d})}),e.jsx(g,{groups:[{actions:[{label:i("actions.cancel"),icon:e.jsx(A,{}),onClick:ee}]}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:i("orders.fulfillment.itemsLabel")}),e.jsx("ul",{children:s.items.map(u=>e.jsx("li",{children:e.jsxs(r,{size:"small",leading:"compact",children:[u.item.quantity,"x ",u.item.title]})},u.item_id))})]}),l&&e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:i("orders.fulfillment.shippingFromLabel")}),c?e.jsx(U,{to:`/settings/locations/${c.id}`,className:"text-ui-fg-interactive hover:text-ui-fg-interactive-hover transition-fg",children:e.jsx(r,{size:"small",leading:"compact",children:c.name})}):e.jsx(H,{className:"w-16"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:i("fields.provider")}),e.jsx(r,{size:"small",leading:"compact",children:Se(s.provider_id)})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:i("orders.fulfillment.trackingLabel")}),e.jsx("div",{children:s.tracking_links&&s.tracking_links.length>0?e.jsx("ul",{children:s.tracking_links.map(u=>u.url&&u.url.length>0?e.jsx("li",{children:e.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"text-ui-fg-interactive hover:text-ui-fg-interactive-hover transition-fg",children:e.jsx(r,{size:"small",leading:"compact",children:u.tracking_number})})},u.tracking_number):e.jsx("li",{children:e.jsx(r,{size:"small",leading:"compact",children:u.tracking_number})},u.tracking_number))}):e.jsx(r,{size:"small",leading:"compact",children:"-"})})]})]})},es=({order:s})=>{const{t}=m(),a=T(),{mutateAsync:i}=xe(s.id),n=async()=>{await a({title:t("general.areYouSure"),description:t("orders.cancelWarning",{id:`#${s.display_id}`}),confirmText:t("actions.continue"),cancelText:t("actions.cancel")})&&await i(void 0)};return e.jsxs(h,{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsxs(j,{children:["#",s.display_id]}),e.jsx(I,{content:`#${s.display_id}`,className:"text-ui-fg-muted"})]}),e.jsx(r,{size:"small",className:"text-ui-fg-subtle",children:t("orders.onDateFromSalesChannel",{date:S(new Date(s.created_at),"dd MMM, yyyy, HH:mm:ss"),salesChannel:s.sales_channel.name})})]}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx(ts,{order:s}),e.jsx(ss,{order:s})]}),e.jsx(g,{groups:[{actions:[{label:t("actions.cancel"),onClick:n,icon:e.jsx(A,{})}]}]})]})]})},ss=({order:s})=>{const{t}=m(),{label:a,color:i}=Pe(t,s.fulfillment_status);return e.jsx(y,{color:i,className:"text-nowrap",children:a})},ts=({order:s})=>{const{t}=m(),{label:a,color:i}=$e(t,s.payment_status);return e.jsx(y,{color:i,className:"text-nowrap",children:a})},as=({order:s})=>e.jsxs(h,{className:"divide-y divide-dashed p-0",children:[e.jsx(is,{order:s}),e.jsx(rs,{payments:s.payments,refunds:s.refunds,currencyCode:s.currency_code}),e.jsx(ns,{payments:s.payments,currencyCode:s.currency_code})]}),is=({order:s})=>{const{t}=m(),a=s.payments.some(i=>!!i.captured_at);return e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:t("orders.payment.title")}),e.jsx(g,{groups:[{actions:[{label:t("orders.payment.refund"),icon:e.jsx(P,{}),to:`/orders/${s.id}/refund`,disabled:!a}]}]})]})},J=({refund:s,currencyCode:t})=>{const{t:a}=m(),i=s.payment_id!==null,n=e.jsx(Te,{size:"2xsmall",className:"cursor-default select-none capitalize",children:s.reason}),l=s.note?e.jsx(L,{content:s.note,children:n}):n;return e.jsxs("div",{className:"bg-ui-bg-subtle text-ui-fg-subtle grid grid-cols-[1fr_1fr_1fr_1fr_20px] items-center gap-x-4 px-6 py-4",children:[e.jsxs("div",{children:[i&&e.jsx(P,{className:"text-ui-fg-muted"}),e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:a("orders.payment.refund")})]}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx(r,{size:"small",leading:"compact",children:S(new Date(s.created_at),"dd MMM, yyyy, HH:mm:ss")})}),e.jsx("div",{className:"flex items-center justify-end",children:l}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsxs(r,{size:"small",leading:"compact",children:["- ",p(s.amount,t)]})})]})},ls=({payment:s,refunds:t,currencyCode:a})=>{const{t:i}=m(),[n,l]=s.captured_at?["Captured","green"]:["Pending","orange"],c=s.id.replace("pay_",""),o=s.captured_at===null&&s.canceled_at===null;return e.jsxs("div",{className:"divide-y divide-dashed",children:[e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-[1fr_1fr_1fr_1fr_20px] items-center gap-x-4 px-6 py-4",children:[e.jsxs("div",{className:"w-full overflow-hidden",children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",className:"truncate",children:c}),e.jsx(r,{size:"small",leading:"compact",children:S(new Date(s.created_at),"dd MMM, yyyy, HH:mm:ss")})]}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx(r,{size:"small",leading:"compact",className:"capitalize",children:s.provider_id})}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx(y,{color:l,className:"text-nowrap",children:n})}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx(r,{size:"small",leading:"compact",children:p(s.amount,s.currency_code)})}),e.jsx(g,{groups:[{actions:[{label:i("orders.payment.refund"),icon:e.jsx(A,{}),to:`/orders/${s.order_id}/refund?paymentId=${s.id}`,disabled:!s.captured_at}]}]})]}),o&&e.jsxs("div",{className:"bg-ui-bg-subtle flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(P,{className:"text-ui-fg-muted"}),e.jsx(r,{size:"small",leading:"compact",children:i("orders.payment.isReadyToBeCaptured",{id:c})})]}),e.jsx(Le,{size:"small",variant:"secondary",children:i("orders.payment.capture")})]}),t.map(x=>e.jsx(J,{refund:x,currencyCode:a},x.id))]})},rs=({payments:s,refunds:t,currencyCode:a})=>{const n=[...t.filter(l=>l.payment_id===null),...s].sort((l,c)=>new Date(l.created_at).getTime()-new Date(c.created_at).getTime()).map(l=>({event:l,type:l.id.startsWith("pay_")?"payment":"refund"}));return e.jsx("div",{className:"flex flex-col divide-y divide-dashed",children:n.map(({type:l,event:c})=>{switch(l){case"payment":return e.jsx(ls,{payment:c,refunds:t.filter(o=>o.payment_id===c.id),currencyCode:a},c.id);case"refund":return e.jsx(J,{refund:c,currencyCode:a},c.id)}})})},ns=({payments:s,currencyCode:t})=>{const{t:a}=m(),i=s.reduce((c,o)=>c+o.amount,0),n=s.reduce((c,o)=>c+(o.amount_refunded||0),0),l=i-n;return e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(r,{size:"small",weight:"plus",leading:"compact",children:a("orders.payment.totalPaidByCustomer")}),e.jsx(r,{size:"small",weight:"plus",leading:"compact",children:_(l,t)})]})},cs=({order:s})=>e.jsxs(h,{className:"divide-y divide-dashed p-0",children:[e.jsx(ds,{order:s}),e.jsx(ms,{order:s}),e.jsx(xs,{order:s}),e.jsx(us,{order:s})]}),ds=({order:s})=>{const{t}=m();return e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:t("fields.summary")}),e.jsx(g,{groups:[{actions:[{label:t("orders.summary.editItems"),to:`/orders/${s.id}/edit`,icon:e.jsx(Ae,{})},{label:t("orders.summary.allocateItems"),to:"#",icon:e.jsx(ue,{})},{label:t("orders.summary.requestReturn"),to:`/orders/${s.id}/returns`,icon:e.jsx(pe,{})}]}]})]})},os=({item:s,currencyCode:t,reservation:a})=>{const{t:i}=m();return e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start gap-x-4 px-6 py-4",children:[e.jsxs("div",{className:"flex items-start gap-x-4",children:[e.jsx(X,{src:s.thumbnail}),e.jsxs("div",{children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",className:"text-ui-fg-base",children:s.title}),s.variant.sku&&e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(r,{size:"small",children:s.variant.sku}),e.jsx(I,{content:s.variant.sku,className:"text-ui-fg-muted"})]}),e.jsx(r,{size:"small",children:s.variant.options.map(n=>n.value).join(" · ")})]})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-x-4",children:[e.jsx("div",{className:"flex items-center justify-end gap-x-4",children:e.jsx(r,{size:"small",children:p(s.unit_price,t)})}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx("div",{className:"w-fit min-w-[27px]",children:e.jsxs(r,{children:[e.jsx("span",{className:"tabular-nums",children:s.quantity}),"x"]})}),e.jsx("div",{className:"overflow-visible",children:e.jsx(y,{color:a?"green":"orange",className:"text-nowrap",children:i(a?"orders.reservations.allocatedLabel":"orders.reservations.notAllocatedLabel")})})]}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx(r,{size:"small",children:p(s.subtotal||0,t)})})]})]},s.id)},ms=({order:s})=>{const{reservations:t,isError:a,error:i}=fe({line_item_id:s.items.map(n=>n.id)});if(a)throw i;return e.jsx("div",{children:s.items.map(n=>{const l=t?t.find(c=>c.line_item_id===n.id):null;return e.jsx(os,{item:n,currencyCode:s.currency_code,reservation:l},n.id)})})},w=({label:s,value:t,secondaryValue:a})=>e.jsxs("div",{className:"grid grid-cols-3 items-center",children:[e.jsx(r,{size:"small",leading:"compact",children:s}),e.jsx("div",{className:"text-right",children:e.jsx(r,{size:"small",leading:"compact",children:a})}),e.jsx("div",{className:"text-right",children:e.jsx(r,{size:"small",leading:"compact",children:t})})]}),xs=({order:s})=>{const{t}=m();return e.jsxs("div",{className:"text-ui-fg-subtle flex flex-col gap-y-2 px-6 py-4",children:[e.jsx(w,{label:t("fields.subtotal"),secondaryValue:t("general.items",{count:s.items.length}),value:p(s.subtotal,s.currency_code)}),e.jsx(w,{label:t("fields.discount"),secondaryValue:s.discounts.length>0?s.discounts.map(a=>a.code).join(", "):"-",value:s.discount_total>0?`- ${p(s.discount_total,s.currency_code)}`:"-"}),e.jsx(w,{label:t("fields.shipping"),secondaryValue:s.shipping_methods.map(a=>a.shipping_option.name).join(", "),value:p(s.shipping_total,s.currency_code)}),e.jsx(w,{label:t("fields.tax"),secondaryValue:`${s.tax_rate||0}%`,value:s.tax_total?p(s.tax_total,s.currency_code):"-"})]})},us=({order:s})=>{const{t}=m();return e.jsxs("div",{className:"text-ui-fg-base flex items-center justify-between px-6 py-4",children:[e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:t("fields.total")}),e.jsx(r,{size:"small",leading:"compact",weight:"plus",children:_(s.total,s.currency_code)})]})},et=()=>{const s=ye(),{id:t}=be(),{order:a,isLoading:i,isError:n,error:l}=he(t,{expand:V},{initialData:s});if(i||!a)return e.jsx("div",{children:"Loading..."});if(n)throw l;return e.jsxs("div",{className:"flex flex-col gap-x-4 xl:flex-row xl:items-start",children:[e.jsxs("div",{className:"flex w-full flex-col gap-y-2",children:[e.jsx(es,{order:a}),e.jsx(cs,{order:a}),e.jsx(as,{order:a}),e.jsx(Ze,{order:a}),e.jsxs("div",{className:"flex flex-col gap-y-2 xl:hidden",children:[e.jsx(R,{order:a}),e.jsx(F,{order:a})]}),e.jsx(je,{data:a})]}),e.jsxs("div",{className:"hidden w-full max-w-[400px] flex-col gap-y-2 xl:flex",children:[e.jsx(R,{order:a}),e.jsx(F,{order:a})]}),e.jsx(_e,{})]})};export{et as Component,Ks as loader};
