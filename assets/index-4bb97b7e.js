import{c as x,e as C,_ as S}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-26bec8f8.js";import{i as b,x as v,y as o,z as I,A as k,e as y,h as Q,_ as r,o as _,B as d,C as u,a as g,r as f,D as B,E as F,c as P,w as l,f as c}from"./index-e11eb6df.js";const z=x({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:a}){const{proxy:{$q:n}}=b(),e=v(I,o);if(e===o)return console.error("QPage needs to be a deep child of QLayout"),o;if(v(k,o)===o)return console.error("QPage needs to be child of QPageContainer"),o;const i=y(()=>{const s=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const $=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(s,$)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-s+"px":n.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":n.screen.height-s+"px"}}),p=y(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>Q("introduction",{class:p.value,style:i.value},C(a.default))}});const D={},E={class:"introduction-space"};function M(t,a){return _(),d("div",E,[u(t.$slots,"default",{},void 0,!0)])}const N=r(D,[["render",M],["__scopeId","data-v-3a4be467"]]);const q={},H={class:"sky-space"};function w(t,a){return _(),d("div",H,[u(t.$slots,"default",{},void 0,!0)])}const K=r(q,[["render",w],["__scopeId","data-v-89cd5a37"]]),L=g({__name:"DefaultCloud",props:{top:{type:Number,default:0},left:{type:Number,default:0},rotate:{type:Number,default:0}},setup(t){const a=t,n=f(a.top+Math.random()*10),e=f(a.left+Math.random()*100);f(a.rotate);const h=Math.random()*1+1,i=()=>{e.value+=h,e.value>1e3&&(e.value=-100)};return B(()=>{setInterval(()=>{i()},100)}),(p,s)=>(_(),d("div",{class:"default-cloud",style:F({top:n.value+"px",left:e.value+"px",transform:`rotate(${t.rotate}deg)`})},[u(p.$slots,"default",{},void 0,!0)],4))}});const m=r(L,[["__scopeId","data-v-27866fc8"]]);const R={},j={class:"sea-space"};function A(t,a){return _(),d("div",j,[u(t.$slots,"default",{},void 0,!0)])}const T=r(R,[["render",A],["__scopeId","data-v-333613ba"]]),V=g({__name:"index",setup(t){return(a,n)=>(_(),P(S,null,{default:l(()=>[c(z,null,{default:l(()=>[c(N,null,{default:l(()=>[c(K,null,{default:l(()=>[c(m),c(m)]),_:1}),c(T)]),_:1})]),_:1})]),_:1}))}});const O=r(V,[["__scopeId","data-v-30d6c282"]]);export{O as default};
