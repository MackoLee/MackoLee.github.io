import{c as B,u as z,a as M,b as T,d as R,e as j,h as p,f as D,_ as te}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-602e5d7e.js";import{r as A,e as u,h as t,i as Q,j as m,s as $,a as N,o as F,c as K,w as oe,g as I,t as S,f as ue}from"./index-631e4ae9.js";function P(e,o){const l=A(null),i=u(()=>e.disable===!0?null:t("span",{ref:l,class:"no-outline",tabindex:-1}));function c(s){const d=o.value;s!==void 0&&s.type.indexOf("key")===0?d!==null&&document.activeElement!==d&&d.contains(document.activeElement)===!0&&d.focus():l.value!==null&&(s===void 0||d!==null&&d.contains(s.target)===!0)&&l.value.focus()}return{refocusTargetEl:i,refocusTarget:c}}const U={name:String};function G(e={}){return(o,l,i)=>{o[l](t("input",{class:"hidden"+(i||""),...e.value}))}}const H={xs:30,sm:35,md:40,lg:50,xl:60},re=t("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[t("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),t("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]),ie=B({name:"QRadio",props:{...z,...M,...U,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:o,emit:l}){const{proxy:i}=Q(),c=T(e,i.$q),s=R(e,H),d=A(null),{refocusTargetEl:k,refocusTarget:h}=P(e,d),v=u(()=>m(e.modelValue)===m(e.val)),a=u(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(c.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),_=u(()=>{const r=e.color!==void 0&&(e.keepColor===!0||v.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${v.value===!0?"truthy":"falsy"}${r}`}),f=u(()=>(v.value===!0?e.checkedIcon:e.uncheckedIcon)||null),x=u(()=>e.disable===!0?-1:e.tabindex||0),b=u(()=>{const r={type:"radio"};return e.name!==void 0&&Object.assign(r,{".checked":v.value===!0,"^checked":v.value===!0?"checked":void 0,name:e.name,value:e.val}),r}),y=G(b);function q(r){r!==void 0&&($(r),h(r)),e.disable!==!0&&v.value!==!0&&l("update:modelValue",e.val,r)}function w(r){(r.keyCode===13||r.keyCode===32)&&$(r)}function O(r){(r.keyCode===13||r.keyCode===32)&&q(r)}return Object.assign(i,{set:q}),()=>{const r=f.value!==null?[t("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[t(j,{class:"q-radio__icon",name:f.value})])]:[re];e.disable!==!0&&y(r,"unshift"," q-radio__native q-ma-none q-pa-none");const V=[t("div",{class:_.value,style:s.value,"aria-hidden":"true"},r)];k.value!==null&&V.push(k.value);const C=e.label!==void 0?p(o.default,[e.label]):D(o.default);return C!==void 0&&V.push(t("div",{class:"q-radio__label q-anchor--skip"},C)),t("div",{ref:d,class:a.value,tabindex:x.value,role:"radio","aria-label":e.label,"aria-checked":v.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:w,onKeyup:O},V)}}}),J={...z,...M,...U,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(e,o){const{props:l,slots:i,emit:c,proxy:s}=Q(),{$q:d}=s,k=T(l,d),h=A(null),{refocusTargetEl:v,refocusTarget:a}=P(l,h),_=R(l,H),f=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),x=u(()=>{const n=m(l.val);return f.value===!0?l.modelValue.findIndex(g=>m(g)===n):-1}),b=u(()=>f.value===!0?x.value>-1:m(l.modelValue)===m(l.trueValue)),y=u(()=>f.value===!0?x.value===-1:m(l.modelValue)===m(l.falseValue)),q=u(()=>b.value===!1&&y.value===!1),w=u(()=>l.disable===!0?-1:l.tabindex||0),O=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(k.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),r=u(()=>{const n=b.value===!0?"truthy":y.value===!0?"falsy":"indet",g=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?b.value===!0:y.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${n}${g}`}),V=u(()=>{const n={type:"checkbox"};return l.name!==void 0&&Object.assign(n,{".checked":b.value,"^checked":b.value===!0?"checked":void 0,name:l.name,value:f.value===!0?l.val:l.trueValue}),n}),C=G(V),Z=u(()=>{const n={tabindex:w.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":q.value===!0?"mixed":b.value===!0?"true":"false"};return l.disable===!0&&(n["aria-disabled"]="true"),n});function L(n){n!==void 0&&($(n),a(n)),l.disable!==!0&&c("update:modelValue",ee(),n)}function ee(){if(f.value===!0){if(b.value===!0){const n=l.modelValue.slice();return n.splice(x.value,1),n}return l.modelValue.concat([l.val])}if(b.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(y.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function le(n){(n.keyCode===13||n.keyCode===32)&&$(n)}function ae(n){(n.keyCode===13||n.keyCode===32)&&L(n)}const ne=o(b,q);return Object.assign(s,{toggle:L}),()=>{const n=ne();l.disable!==!0&&C(n,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const g=[t("div",{class:r.value,style:_.value,"aria-hidden":"true"},n)];v.value!==null&&g.push(v.value);const E=l.label!==void 0?p(i.default,[l.label]):D(i.default);return E!==void 0&&g.push(t("div",{class:`q-${e}__label q-anchor--skip`},E)),t("div",{ref:h,class:O.value,...Z.value,onClick:L,onKeydown:le,onKeyup:ae},g)}}const ce=t("div",{key:"svg",class:"q-checkbox__bg absolute"},[t("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[t("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),t("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),se=B({name:"QCheckbox",props:J,emits:W,setup(e){function o(l,i){const c=u(()=>(l.value===!0?e.checkedIcon:i.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>c.value!==null?[t("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[t(j,{class:"q-checkbox__icon",name:c.value})])]:[ce]}return X("checkbox",o)}}),de=B({name:"QToggle",props:{...J,icon:String,iconColor:String},emits:W,setup(e){function o(l,i){const c=u(()=>(l.value===!0?e.checkedIcon:i.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),s=u(()=>l.value===!0?e.iconColor:null);return()=>[t("div",{class:"q-toggle__track"}),t("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},c.value!==void 0?[t(j,{name:c.value,color:s.value})]:void 0)]}return X("toggle",o)}}),Y={radio:ie,checkbox:se,toggle:de},ve=Object.keys(Y),fe=B({name:"QOptionGroup",props:{...z,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(o=>"value"in o&&"label"in o)},name:String,type:{default:"radio",validator:e=>ve.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:o,slots:l}){const{proxy:{$q:i}}=Q(),c=Array.isArray(e.modelValue);e.type==="radio"?c===!0&&console.error("q-option-group: model should not be array"):c===!1&&console.error("q-option-group: model should be array in your case");const s=T(e,i),d=u(()=>Y[e.type]),k=u(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),h=u(()=>{const a={role:"group"};return e.type==="radio"&&(a.role="radiogroup",e.disable===!0&&(a["aria-disabled"]="true")),a});function v(a){o("update:modelValue",a)}return()=>t("div",{class:k.value,...h.value},e.options.map((a,_)=>{const f=l["label-"+_]!==void 0?()=>l["label-"+_](a):l.label!==void 0?()=>l.label(a):void 0;return t("div",[t(d.value,{modelValue:e.modelValue,val:a.value,name:a.name===void 0?e.name:a.name,disable:e.disable||a.disable,label:f===void 0?a.label:null,leftLabel:a.leftLabel===void 0?e.leftLabel:a.leftLabel,color:a.color===void 0?e.color:a.color,checkedIcon:a.checkedIcon,uncheckedIcon:a.uncheckedIcon,dark:a.dark||s.value,size:a.size===void 0?e.size:a.size,dense:e.dense,keepColor:a.keepColor===void 0?e.keepColor:a.keepColor,"onUpdate:modelValue":v},f)])}))}}),be=N({__name:"_LocaleSelect",setup(e){const o=[{label:"English",value:"en"},{label:"Korean",value:"ko"}];return(l,i)=>(F(),K(fe,{modelValue:l.$i18n.locale,"onUpdate:modelValue":i[0]||(i[0]=c=>l.$i18n.locale=c),type:"radio",options:o,label:"Select a locale"},null,8,["modelValue"]))}}),ke=N({__name:"index",setup(e){return(o,l)=>(F(),K(te,null,{default:oe(()=>[I("h3",null," Locale: "+S(o.$i18n.locale)+" "+S(o.$t("message.hello")),1),I("h4",null,[ue(be)]),I("div",null,S(o.$tc("message.n_apples",1)),1),I("div",null,S(o.$tc("message.n_apples",2)),1)]),_:1}))}});export{ke as default};