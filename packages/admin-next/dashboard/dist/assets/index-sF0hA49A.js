import{k as I,w as D,t as p,_ as l,z as u,A as E,C as M,D as F,$ as N,F as T,G as w,J as y,L as k,q as L,N as _,O as G}from"./index-S--WvUSo.js";import{r as t}from"./react-PzSkSLoa.js";const m="Dialog",[R,ne]=I(m),[S,i]=R(m),W=e=>{const{__scopeDialog:a,children:n,open:r,defaultOpen:c,onOpenChange:o,modal:s=!0}=e,d=t.useRef(null),$=t.useRef(null),[b=!1,g]=L({prop:r,defaultProp:c,onChange:o});return t.createElement(S,{scope:a,triggerRef:d,contentRef:$,contentId:_(),titleId:_(),descriptionId:_(),open:b,onOpenChange:g,onOpenToggle:t.useCallback(()=>g(h=>!h),[g]),modal:s},n)},j="DialogTrigger",q=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(j,n),o=D(a,c.triggerRef);return t.createElement(p.button,l({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":v(c.open)},r,{ref:o,onClick:u(e.onClick,c.onOpenToggle)}))}),C="DialogPortal",[z,O]=R(C,{forceMount:void 0}),J=e=>{const{__scopeDialog:a,forceMount:n,children:r,container:c}=e,o=i(C,a);return t.createElement(z,{scope:a,forceMount:n},t.Children.map(r,s=>t.createElement(E,{present:n||o.open},t.createElement(M,{asChild:!0,container:c},s))))},x="DialogOverlay",K=t.forwardRef((e,a)=>{const n=O(x,e.__scopeDialog),{forceMount:r=n.forceMount,...c}=e,o=i(x,e.__scopeDialog);return o.modal?t.createElement(E,{present:r||o.open},t.createElement(U,l({},c,{ref:a}))):null}),U=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(x,n);return t.createElement(F,{as:N,allowPinchZoom:!0,shards:[c.contentRef]},t.createElement(p.div,l({"data-state":v(c.open)},r,{ref:a,style:{pointerEvents:"auto",...r.style}})))}),f="DialogContent",V=t.forwardRef((e,a)=>{const n=O(f,e.__scopeDialog),{forceMount:r=n.forceMount,...c}=e,o=i(f,e.__scopeDialog);return t.createElement(E,{present:r||o.open},o.modal?t.createElement(Y,l({},c,{ref:a})):t.createElement(Z,l({},c,{ref:a})))}),Y=t.forwardRef((e,a)=>{const n=i(f,e.__scopeDialog),r=t.useRef(null),c=D(a,n.contentRef,r);return t.useEffect(()=>{const o=r.current;if(o)return T(o)},[]),t.createElement(A,l({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:u(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:u(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,d=s.button===0&&s.ctrlKey===!0;(s.button===2||d)&&o.preventDefault()}),onFocusOutside:u(e.onFocusOutside,o=>o.preventDefault())}))}),Z=t.forwardRef((e,a)=>{const n=i(f,e.__scopeDialog),r=t.useRef(!1),c=t.useRef(!1);return t.createElement(A,l({},e,{ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,o),!o.defaultPrevented){var d;r.current||(d=n.triggerRef.current)===null||d===void 0||d.focus(),o.preventDefault()}r.current=!1,c.current=!1},onInteractOutside:o=>{var s,d;(s=e.onInteractOutside)===null||s===void 0||s.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const $=o.target;((d=n.triggerRef.current)===null||d===void 0?void 0:d.contains($))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&c.current&&o.preventDefault()}}))}),A=t.forwardRef((e,a)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:c,onCloseAutoFocus:o,...s}=e,d=i(f,n),$=t.useRef(null),b=D(a,$);return w(),t.createElement(t.Fragment,null,t.createElement(y,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:c,onUnmountAutoFocus:o},t.createElement(k,l({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":v(d.open)},s,{ref:b,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),P="DialogTitle",B=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(P,n);return t.createElement(p.h2,l({id:c.titleId},r,{ref:a}))}),H="DialogDescription",Q=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(H,n);return t.createElement(p.p,l({id:c.descriptionId},r,{ref:a}))}),X="DialogClose",ee=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=i(X,n);return t.createElement(p.button,l({type:"button"},r,{ref:a,onClick:u(e.onClick,()=>c.onOpenChange(!1))}))});function v(e){return e?"open":"closed"}const te="DialogTitleWarning",[re,ae]=G(te,{contentName:f,titleName:P,docsSlug:"dialog"}),se=W,de=q,le=J,ie=K,$e=V,fe=B,ue=Q,pe=ee;export{de as $,pe as a,ie as b,$e as c,fe as d,ue as e,se as f,J as g,ne as h,le as i,re as j};
