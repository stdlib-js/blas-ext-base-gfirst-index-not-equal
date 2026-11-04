"use strict";var y=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var g=y(function(B,d){
function k(a,r,e,u,t,v,f){var o,s,n,c,i,x,q;for(o=r.data,s=t.data,n=r.accessors[0],c=t.accessors[0],i=u,x=f,q=0;q<a;q++){if(n(o,i)!==c(s,x))return q;i+=e,x+=v}return-1}d.exports=k
});var l=y(function(C,b){
var p=require('@stdlib/array-base-arraylike2object/dist'),m=g();function O(a,r,e,u,t,v,f){var o,s,n,c,i;if(a<=0)return-1;if(n=p(r),c=p(t),n.accessorProtocol||c.accessorProtocol)return m(a,n,e,u,c,v,f);for(o=u,s=f,i=0;i<a;i++){if(r[o]!==t[s])return i;o+=e,s+=v}return-1}b.exports=O
});var P=y(function(D,I){
var E=require('@stdlib/strided-base-stride2offset/dist'),R=l();function h(a,r,e,u,t){return R(a,r,e,E(a,e),u,t,E(a,t))}I.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=P(),z=l();w(j,"ndarray",z);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
