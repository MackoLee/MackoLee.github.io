import{Q as p}from"./use-tick-aaff329c.js";import{Q as i}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-eced746c.js";import{d as f,r as d,a as c,o as a,c as s,w as o,b as u,u as l,e as x,f as r,t as C,g as S}from"./index-f9ae0e08.js";import{_ as h}from"./TestsLayout.vue_vue_type_script_setup_true_lang-bf3cc672.js";import"./QTabs-223a708c.js";const _=f("counter",()=>{const e=d(0);return{count:e,increment:()=>{e.value++},decrement:()=>{e.value--}}}),k=c({__name:"IncrementButton",setup(e){const t=_();return(n,m)=>(a(),s(i,{color:"primary",onClick:l(t).increment},{default:o(()=>[u(" Increment! ")]),_:1},8,["onClick"]))}}),B=c({__name:"DecrementButton",setup(e){const t=_();return(n,m)=>(a(),s(i,{color:"primary",onClick:l(t).decrement},{default:o(()=>[u(" Decrement! ")]),_:1},8,["onClick"]))}}),Q=S("h3",null," Pinia Store Test ",-1),$=c({__name:"index",setup(e){const t=_(),n=x(()=>t.count);return(m,g)=>(a(),s(h,null,{default:o(()=>[r(p,null,{default:o(()=>[Q,u(" counter state count: "+C(n.value)+" ",1),r(k),r(B)]),_:1})]),_:1}))}});export{$ as default};
