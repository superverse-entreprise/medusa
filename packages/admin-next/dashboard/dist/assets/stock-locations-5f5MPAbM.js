import{V as i,W as y,X as v,Y as d,Z as l}from"./index-S--WvUSo.js";const K="stock_locations",t=v(K),Q=(c,e,a)=>{const{data:u,...r}=i({queryFn:()=>y.stockLocations.retrieve(c,e),queryKey:t.detail(c,e),...a});return{...u,...r}},k=(c,e)=>{const{data:a,...u}=i({queryFn:()=>y.stockLocations.list(c),queryKey:t.list(c),...e});return{...a,...u}},L=c=>d({mutationFn:e=>y.stockLocations.create(e),onSuccess:(e,a,u)=>{var r;l.invalidateQueries({queryKey:t.lists()}),(r=c==null?void 0:c.onSuccess)==null||r.call(c,e,a,u)},...c}),F=(c,e)=>d({mutationFn:a=>y.stockLocations.update(c,a),onSuccess:(a,u,r)=>{var s;l.invalidateQueries({queryKey:t.details()}),l.invalidateQueries({queryKey:t.lists()}),(s=e==null?void 0:e.onSuccess)==null||s.call(e,a,u,r)},...e}),m=(c,e)=>d({mutationFn:a=>y.stockLocations.updateSalesChannels(c,a),onSuccess:(a,u,r)=>{var s;l.invalidateQueries({queryKey:t.details()}),l.invalidateQueries({queryKey:t.lists()}),(s=e==null?void 0:e.onSuccess)==null||s.call(e,a,u,r)},...e}),C=(c,e)=>d({mutationFn:()=>y.stockLocations.delete(c),onSuccess:(a,u,r)=>{var s;l.invalidateQueries({queryKey:t.lists()}),l.invalidateQueries({queryKey:t.detail(c)}),(s=e==null?void 0:e.onSuccess)==null||s.call(e,a,u,r)},...e}),Z=(c,e)=>d({mutationFn:a=>y.stockLocations.createFulfillmentSet(c,a),onSuccess:(a,u,r)=>{var s;l.invalidateQueries({queryKey:t.lists()}),l.invalidateQueries({queryKey:t.details()}),(s=e==null?void 0:e.onSuccess)==null||s.call(e,a,u,r)},...e}),f=(c,e,a)=>d({mutationFn:u=>y.stockLocations.createServiceZone(e,u),onSuccess:(u,r,s)=>{var n;l.invalidateQueries({queryKey:t.details()}),l.invalidateQueries({queryKey:t.lists()}),(n=a==null?void 0:a.onSuccess)==null||n.call(a,u,r,s)},...a}),U=(c,e,a,u)=>d({mutationFn:r=>y.stockLocations.updateServiceZone(c,e,r),onSuccess:(r,s,n)=>{var S;l.invalidateQueries({queryKey:t.details()}),l.invalidateQueries({queryKey:t.lists()}),(S=u==null?void 0:u.onSuccess)==null||S.call(u,r,s,n)},...u}),_=(c,e)=>d({mutationFn:()=>y.stockLocations.deleteFulfillmentSet(c),onSuccess:(a,u,r)=>{var s;l.invalidateQueries({queryKey:t.lists()}),l.invalidateQueries({queryKey:t.details()}),(s=e==null?void 0:e.onSuccess)==null||s.call(e,a,u,r)},...e}),h=(c,e,a)=>d({mutationFn:()=>y.stockLocations.deleteServiceZone(c,e),onSuccess:(u,r,s)=>{var n;l.invalidateQueries({queryKey:t.lists()}),l.invalidateQueries({queryKey:t.details()}),(n=a==null?void 0:a.onSuccess)==null||n.call(a,u,r,s)},...a});export{Q as a,L as b,F as c,m as d,U as e,f,C as g,Z as h,_ as i,h as j,t as s,k as u};
