var U=typeof global=="object"&&global&&global.Object===Object&&global;const P=U;var C=typeof self=="object"&&self&&self.Object===Object&&self,R=P||C||Function("return this")();const y=R;var G=y.Symbol;const p=G;var w=Object.prototype,D=w.hasOwnProperty,K=w.toString,f=p?p.toStringTag:void 0;function L(r){var t=D.call(r,f),e=r[f];try{r[f]=void 0;var o=!0}catch{}var a=K.call(r);return o&&(t?r[f]=e:delete r[f]),a}var k=Object.prototype,q=k.toString;function H(r){return q.call(r)}var V="[object Null]",J="[object Undefined]",T=p?p.toStringTag:void 0;function d(r){return r==null?r===void 0?J:V:T&&T in Object(r)?L(r):H(r)}function j(r){return r!=null&&typeof r=="object"}function It(r,t){for(var e=-1,o=r==null?0:r.length,a=Array(o);++e<o;)a[e]=t(r[e],e,r);return a}var X=Array.isArray;const W=X;function I(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}function z(r){return r}var Q="[object AsyncFunction]",Y="[object Function]",Z="[object GeneratorFunction]",rr="[object Proxy]";function E(r){if(!I(r))return!1;var t=d(r);return t==Y||t==Z||t==Q||t==rr}var tr=y["__core-js_shared__"];const b=tr;var v=function(){var r=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function er(r){return!!v&&v in r}var nr=Function.prototype,or=nr.toString;function ar(r){if(r!=null){try{return or.call(r)}catch{}try{return r+""}catch{}}return""}var ir=/[\\^$.*+?()[\]{}|]/g,cr=/^\[object .+?Constructor\]$/,sr=Function.prototype,ur=Object.prototype,fr=sr.toString,lr=ur.hasOwnProperty,pr=RegExp("^"+fr.call(lr).replace(ir,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function br(r){if(!I(r)||er(r))return!1;var t=E(r)?pr:cr;return t.test(ar(r))}function gr(r,t){return r==null?void 0:r[t]}function yr(r,t){var e=gr(r,t);return br(e)?e:void 0}function dr(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var jr=800,Tr=16,vr=Date.now;function hr(r){var t=0,e=0;return function(){var o=vr(),a=Tr-(o-e);if(e=o,a>0){if(++t>=jr)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}function mr(r){return function(){return r}}var $r=function(){try{var r=yr(Object,"defineProperty");return r({},"",{}),r}catch{}}();const h=$r;var Or=h?function(r,t){return h(r,"toString",{configurable:!0,enumerable:!1,value:mr(t),writable:!0})}:z;const Ar=Or;var Sr=hr(Ar);const Et=Sr;function Ft(r,t){for(var e=-1,o=r==null?0:r.length;++e<o&&t(r[e],e,r)!==!1;);return r}var xr=9007199254740991,Pr=/^(?:0|[1-9]\d*)$/;function wr(r,t){var e=typeof r;return t=t??xr,!!t&&(e=="number"||e!="symbol"&&Pr.test(r))&&r>-1&&r%1==0&&r<t}var m=Math.max;function _t(r,t,e){return t=m(t===void 0?r.length-1:t,0),function(){for(var o=arguments,a=-1,i=m(o.length-t,0),s=Array(i);++a<i;)s[a]=o[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=o[a];return u[t]=e(s),dr(r,this,u)}}var Ir=9007199254740991;function F(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Ir}function Er(r){return r!=null&&F(r.length)&&!E(r)}var Fr=Object.prototype;function _r(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||Fr;return r===e}function Mr(r,t){for(var e=-1,o=Array(r);++e<r;)o[e]=t(e);return o}var Br="[object Arguments]";function $(r){return j(r)&&d(r)==Br}var _=Object.prototype,Nr=_.hasOwnProperty,Ur=_.propertyIsEnumerable,Cr=$(function(){return arguments}())?$:function(r){return j(r)&&Nr.call(r,"callee")&&!Ur.call(r,"callee")};const Rr=Cr;function Gr(){return!1}var M=typeof exports=="object"&&exports&&!exports.nodeType&&exports,O=M&&typeof module=="object"&&module&&!module.nodeType&&module,Dr=O&&O.exports===M,A=Dr?y.Buffer:void 0,Kr=A?A.isBuffer:void 0,Lr=Kr||Gr;const kr=Lr;var qr="[object Arguments]",Hr="[object Array]",Vr="[object Boolean]",Jr="[object Date]",Xr="[object Error]",Wr="[object Function]",zr="[object Map]",Qr="[object Number]",Yr="[object Object]",Zr="[object RegExp]",rt="[object Set]",tt="[object String]",et="[object WeakMap]",nt="[object ArrayBuffer]",ot="[object DataView]",at="[object Float32Array]",it="[object Float64Array]",ct="[object Int8Array]",st="[object Int16Array]",ut="[object Int32Array]",ft="[object Uint8Array]",lt="[object Uint8ClampedArray]",pt="[object Uint16Array]",bt="[object Uint32Array]",n={};n[at]=n[it]=n[ct]=n[st]=n[ut]=n[ft]=n[lt]=n[pt]=n[bt]=!0;n[qr]=n[Hr]=n[nt]=n[Vr]=n[ot]=n[Jr]=n[Xr]=n[Wr]=n[zr]=n[Qr]=n[Yr]=n[Zr]=n[rt]=n[tt]=n[et]=!1;function gt(r){return j(r)&&F(r.length)&&!!n[d(r)]}function yt(r){return function(t){return r(t)}}var B=typeof exports=="object"&&exports&&!exports.nodeType&&exports,l=B&&typeof module=="object"&&module&&!module.nodeType&&module,dt=l&&l.exports===B,g=dt&&P.process,jt=function(){try{var r=l&&l.require&&l.require("util").types;return r||g&&g.binding&&g.binding("util")}catch{}}();const S=jt;var x=S&&S.isTypedArray,Tt=x?yt(x):gt;const vt=Tt;var ht=Object.prototype,mt=ht.hasOwnProperty;function $t(r,t){var e=W(r),o=!e&&Rr(r),a=!e&&!o&&kr(r),i=!e&&!o&&!a&&vt(r),s=e||o||a||i,u=s?Mr(r.length,String):[],N=u.length;for(var c in r)(t||mt.call(r,c))&&!(s&&(c=="length"||a&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||wr(c,N)))&&u.push(c);return u}function Ot(r,t){return function(e){return r(t(e))}}var At=Ot(Object.keys,Object);const St=At;var xt=Object.prototype,Pt=xt.hasOwnProperty;function wt(r){if(!_r(r))return St(r);var t=[];for(var e in Object(r))Pt.call(r,e)&&e!="constructor"&&t.push(e);return t}function Mt(r){return Er(r)?$t(r):wt(r)}function Bt(r,t){for(var e=-1,o=r==null?0:r.length,a=0,i=[];++e<o;){var s=r[e];t(s,e,r)&&(i[a++]=s)}return i}export{p as S,Er as a,j as b,W as c,Ft as d,Bt as e,Mr as f,It as g,d as h,z as i,yr as j,Mt as k,I as l,h as m,_r as n,_t as o,$t as p,Rr as q,y as r,Et as s,Ot as t,ar as u,S as v,yt as w,kr as x,vt as y};