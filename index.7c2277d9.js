import{r as O,f as I,g as j,h as N,i as A,j as W,k as V,l as x,m as q,n as K,q as J,_ as Y,o as D,c as L,s as Q,v as M,x as X,y as Z,b as tt}from"./entry.906b53e0.js";import{s as et,o as rt,i as $,k as st,a as T,b as nt,c as at,d as it,e as ot,f as ct,g as ut}from"./_arrayFilter.3acdb710.js";import{u as lt}from"./useGoogleApiStore.7c9f2c64.js";const ft=()=>null;function ht(...s){const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[r,t,e={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??ft,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=V(),o=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],u=()=>o()!==void 0;(!a._asyncData[r]||!e.immediate)&&(a._asyncData[r]={data:O(o()??e.default()),pending:O(!u()),error:I(a.payload._errors,r),status:O("idle")});const i={...a._asyncData[r]};i.refresh=i.execute=(c={})=>{if(a._asyncDataPromises[r]){if(c.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if((c._initial||a.isHydrating&&c._initial!==!1)&&u())return o();i.pending.value=!0,i.status.value="pending";const y=new Promise((f,d)=>{try{f(t(a))}catch(b){d(b)}}).then(f=>{if(y.cancelled)return a._asyncDataPromises[r];let d=f;e.transform&&(d=e.transform(f)),e.pick&&(d=pt(d,e.pick)),i.data.value=d,i.error.value=null,i.status.value="success"}).catch(f=>{if(y.cancelled)return a._asyncDataPromises[r];i.error.value=f,i.data.value=x(e.default()),i.status.value="error"}).finally(()=>{y.cancelled||(i.pending.value=!1,a.payload.data[r]=i.data.value,i.error.value&&(a.payload._errors[r]=q(i.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=y,a._asyncDataPromises[r]};const l=()=>i.refresh({_initial:!0}),h=e.server!==!1&&a.payload.serverRendered;{const c=j();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const f=c._nuxtOnBeforeMountCbs;c&&(N(()=>{f.forEach(d=>{d()}),f.splice(0,f.length)}),A(()=>f.splice(0,f.length)))}h&&a.isHydrating&&u()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):c&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?c._nuxtOnBeforeMountCbs.push(l):e.immediate&&l(),e.watch&&W(e.watch,()=>i.refresh());const y=a.hook("app:data:refresh",f=>{if(!f||f.includes(r))return i.refresh()});c&&A(y)}const p=Promise.resolve(a._asyncDataPromises[r]).then(()=>i);return Object.assign(p,i),p}function pt(s,n){const r={};for(const t of n)r[t]=s[t];return r}const E=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function dt(s,n){n?n={...E,...n}:n=E;const r=U(n);return r.dispatch(s),r.toString()}const yt=Object.freeze(["prototype","__proto__","constructor"]);function U(s){let n="",r=new Map;const t=e=>{n+=e};return{toString(){return n},getContext(){return r},dispatch(e){return s.replacer&&(e=s.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const a=Object.prototype.toString.call(e);let o="";const u=a.length;u<10?o="unknown:["+a+"]":o=a.slice(8,u-1),o=o.toLowerCase();let i=null;if((i=r.get(e))===void 0)r.set(e,r.size);else return this.dispatch("[CIRCULAR:"+i+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](e):s.ignoreUnknown||this.unkown(e,o);else{let l=Object.keys(e);s.unorderedObjects&&(l=l.sort());let h=[];s.respectType!==!1&&!P(e)&&(h=yt),s.excludeKeys&&(l=l.filter(c=>!s.excludeKeys(c)),h=h.filter(c=>!s.excludeKeys(c))),t("object:"+(l.length+h.length)+":");const p=c=>{this.dispatch(c),t(":"),s.excludeValues||this.dispatch(e[c]),t(",")};for(const c of l)p(c);for(const c of h)p(c)}},array(e,a){if(a=a===void 0?s.unorderedArrays!==!1:a,t("array:"+e.length+":"),!a||e.length<=1){for(const i of e)this.dispatch(i);return}const o=new Map,u=e.map(i=>{const l=U(s);l.dispatch(i);for(const[h,p]of l.getContext())o.set(h,p);return l.toString()});return r=o,u.sort(),this.array(u,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),P(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const a=[...e];return this.array(a,s.unorderedSets!==!1)},set(e){t("set:");const a=[...e];return this.array(a,s.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const G="[native code] }",gt=G.length;function P(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-gt)===G}class m{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||_t).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new m([...this.words])}}const _t={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;n.push((t>>>4).toString(16),(t&15).toString(16))}return n.join("")}},mt={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,a=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,u=e<<16|a<<8|o;for(let i=0;i<4&&t*8+i*6<s.sigBytes*8;i++)r.push(n.charAt(u>>>6*(3-i)&63))}return r.join("")}},wt={parse(s){const n=s.length,r=[];for(let t=0;t<n;t++)r[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new m(r,n)}},bt={parse(s){return wt.parse(unescape(encodeURIComponent(s)))}};class vt{constructor(){this._data=new m,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new m,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=bt.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,t=this._data.sigBytes/(this.blockSize*4);n?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,e),this._data.sigBytes-=a}return new m(r,a)}}class xt extends vt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const C=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Bt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],w=[];class St extends xt{constructor(){super(...arguments),this._hash=new m([...C])}reset(){super.reset(),this._hash=new m([...C])}_doProcessBlock(n,r){const t=this._hash.words;let e=t[0],a=t[1],o=t[2],u=t[3],i=t[4],l=t[5],h=t[6],p=t[7];for(let c=0;c<64;c++){if(c<16)w[c]=n[r+c]|0;else{const v=w[c-15],S=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,g=w[c-2],k=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;w[c]=S+w[c-7]+k+w[c-16]}const y=i&l^~i&h,f=e&a^e&o^a&o,d=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),b=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),B=p+b+y+Bt[c]+w[c],_=d+f;p=h,h=l,l=i,i=u+B|0,u=o,o=a,a=e,e=B+_|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+o|0,t[3]=t[3]+u|0,t[4]=t[4]+i|0,t[5]=t[5]+l|0,t[6]=t[6]+h|0,t[7]=t[7]+p|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function kt(s){return new St().finalize(s).toString(mt)}function Ot(s,n={}){const r=typeof s=="string"?s:dt(s,n);return kt(r).slice(0,10)}function z(s,n,r){var S;const[t={},e]=typeof n=="string"?[{},n]:[n,r],a=K(()=>{let g=s;return typeof g=="function"&&(g=g()),x(g)}),o=t.key||Ot([e,((S=x(t.method))==null?void 0:S.toUpperCase())||"GET",x(t.baseURL),typeof a.value=="string"?a.value:"",x(t.params||t.query)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const u=o===e?"$f"+o:o;if(!t.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:l,default:h,transform:p,pick:c,watch:y,immediate:f,...d}=t,b=J({...d,cache:typeof t.cache=="boolean"?void 0:t.cache}),B={server:i,lazy:l,default:h,transform:p,pick:c,immediate:f,watch:y===!1?[]:[b,a,...y||[]]};let _;return ht(u,()=>{var k;return(k=_==null?void 0:_.abort)==null||k.call(_),_=typeof AbortController<"u"?new AbortController:{},typeof a.value=="string"&&a.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(a.value,{signal:_.signal,...b})},B)}const Dt={},At={class:"mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"};function Et(s,n){return D(),L("div",At," hi ")}const Pt=Y(Dt,[["render",Et]]);function Ct(s,n){return et(rt(s,n,$),s+"")}function zt(s){return function(n){return n==null?void 0:n[s]}}function Rt(s){return function(n,r,t){for(var e=-1,a=Object(n),o=t(n),u=o.length;u--;){var i=o[s?u:++e];if(r(a[i],i,a)===!1)break}return n}}var Ft=Rt();const Ht=Ft;function Kt(s,n){return s&&Ht(s,n,st)}function Lt(s,n){return function(r,t){if(r==null)return r;if(!T(r))return s(r,t);for(var e=r.length,a=n?e:-1,o=Object(r);(n?a--:++a<e)&&t(o[a],a,o)!==!1;);return r}}var Mt=Lt(Kt);const $t=Mt;function Tt(s){return nt(s)&&T(s)}function Ut(s){return typeof s=="function"?s:$}function Gt(s,n){var r=at(s)?it:$t;return r(s,Ut(n))}var It=Math.max;function jt(s){if(!(s&&s.length))return[];var n=0;return s=ot(s,function(r){if(Tt(r))return n=It(r.length,n),!0}),ct(n,function(r){return ut(s,zt(r))})}var Nt=Ct(jt);const Wt=Nt,Vt="Sheet1!A1:C2",R="Sheet1!A3:C3",F=()=>{const s="1s4Qkqh2CkWGOsK0LCSJ4p_Hwks1ePFpQrrvXKRmAJNw",n=Q().public.GOOGLE_API_KEY;return{SPREAD_SHEET_ID:s,GOOGLE_API_KEY:n}};function H(){async function s(){const{SPREAD_SHEET_ID:r,GOOGLE_API_KEY:t}=F(),e=`https://sheets.googleapis.com/v4/spreadsheets/${r}/values/${Vt}?key=${t}`,a=await z(e,"$VEB0pl2WoO"),o={};return a.data&&Gt(Wt(a.data.value.values[0],a.data.value.values[1]),([u,i])=>{o[u]=i}),o}async function n(){const{SPREAD_SHEET_ID:r,GOOGLE_API_KEY:t}=F(),e={majorDimension:"ROWS",range:R,values:[["이름","생년월일","간단 자기소개"]]},a=`https://sheets.googleapis.com/v4/spreadsheets/${r}/values/${R}?key=${t}`,o=await z(a,{method:"PUT",body:e},"$zMt166YpBZ");console.log(o)}return{loadRows:s,updateRow:n}}function qt(s="googleSheet"){return s=="googleSheet",H()}const Jt=M({__name:"HomePage",setup(s){const{loadRows:n}=qt("googleSheet"),r=lt();return K({get:()=>r.apiKey,set:t=>r.setGoogleApiKey(t)}),X(()=>{n().then(t=>{console.log(t)}),r.loadGoogleApiKey()}),(t,e)=>{const a=Pt;return D(),Z(a)}}}),Zt=M({__name:"index",setup(s){return(n,r)=>{const t=Jt;return D(),L("div",null,[tt(t)])}}});export{Zt as default};