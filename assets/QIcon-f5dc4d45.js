import{b as m,j as z,i}from"./index-d5b9780b.js";import{c as B,a as _,h as a}from"./render-b595107f.js";const j={xs:18,sm:24,md:32,lg:38,xl:46},M={size:String};function k(e,r=j){return m(()=>e.size!==void 0?{fontSize:e.size in r?`${r[e.size]}px`:e.size}:null)}const g="0 0 24 24",v=e=>e,f=e=>`ionicons ${e}`,b={"mdi-":e=>`mdi ${e}`,"icon-":v,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":f,"ion-ios":f,"ion-logo":f,"iconfont ":v,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},x={o_:"-outlined",r_:"-round",s_:"-sharp"},y={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},F=new RegExp("^("+Object.keys(b).join("|")+")"),I=new RegExp("^("+Object.keys(x).join("|")+")"),h=new RegExp("^("+Object.keys(y).join("|")+")"),O=/^[Mm]\s?[-+]?\.?\d/,Q=/^img:/,q=/^svguse:/,C=/^ion-/,D=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,V=B({name:"QIcon",props:{...M,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:r}){const{proxy:{$q:u}}=z(),p=k(e),E=m(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=m(()=>{let s,t=e.name;if(t==="none"||!t)return{none:!0};if(u.iconMapFn!==null){const n=u.iconMapFn(t);if(n!==void 0)if(n.icon!==void 0){if(t=n.icon,t==="none"||!t)return{none:!0}}else return{cls:n.cls,content:n.content!==void 0?n.content:" "}}if(O.test(t)===!0){const[n,c=g]=t.split("|");return{svg:!0,viewBox:c,nodes:n.split("&&").map(R=>{const[S,$,w]=R.split("@@");return i("path",{style:$,d:S,transform:w})})}}if(Q.test(t)===!0)return{img:!0,src:t.substring(4)};if(q.test(t)===!0){const[n,c=g]=t.split("|");return{svguse:!0,src:n.substring(7),viewBox:c}}let l=" ";const d=t.match(F);if(d!==null)s=b[d[1]](t);else if(D.test(t)===!0)s=t;else if(C.test(t)===!0)s=`ionicons ion-${u.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(h.test(t)===!0){s="notranslate material-symbols";const n=t.match(h);n!==null&&(t=t.substring(6),s+=y[n[1]]),l=t}else{s="notranslate material-icons";const n=t.match(I);n!==null&&(t=t.substring(2),s+=x[n[1]]),l=t}return{cls:s,content:l}});return()=>{const s={class:E.value,style:p.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?i(e.tag,s,_(r.default)):o.value.img===!0?i("span",s,a(r.default,[i("img",{src:o.value.src})])):o.value.svg===!0?i("span",s,a(r.default,[i("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?i("span",s,a(r.default,[i("svg",{viewBox:o.value.viewBox},[i("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),i(e.tag,s,a(r.default,[o.value.content])))}}});export{V as Q,k as a,j as b,M as u};
