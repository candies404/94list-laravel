import{i as R,n as Q,r as $,t as _,a as W,b as L,c as C,d as T}from"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import{w}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import{r as m}from"./@vue_reactivity@3.4.32-DksAu7zd.js";function v(e){var n;const r=$(e);return(n=r==null?void 0:r.$el)!=null?n:r}const y=C?window:void 0,x=C?window.document:void 0;function b(...e){let n,r,t,u;if(R(e[0])||Array.isArray(e[0])?([r,t,u]=e,n=y):[n,r,t,u]=e,!n)return Q;Array.isArray(r)||(r=[r]),Array.isArray(t)||(t=[t]);const p=[],a=()=>{p.forEach(i=>i()),p.length=0},l=(i,c,s,o)=>(i.addEventListener(c,s,o),()=>i.removeEventListener(c,s,o)),f=w(()=>[v(n),$(u)],([i,c])=>{a(),i&&p.push(...r.flatMap(s=>t.map(o=>l(i,s,o,c))))},{immediate:!0,flush:"post"}),O=()=>{f(),a()};return _(O),O}let h=!1;function Y(e,n,r={}){const{window:t=y,ignore:u=[],capture:p=!0,detectIframe:a=!1}=r;if(!t)return;T&&!h&&(h=!0,Array.from(t.document.body.children).forEach(s=>s.addEventListener("click",Q)));let l=!0;const f=s=>u.some(o=>{if(typeof o=="string")return Array.from(t.document.querySelectorAll(o)).some(d=>d===s.target||s.composedPath().includes(d));{const d=v(o);return d&&(s.target===d||s.composedPath().includes(d))}}),i=[b(t,"click",s=>{const o=v(e);if(!(!o||o===s.target||s.composedPath().includes(o))){if(s.detail===0&&(l=!f(s)),!l){l=!0;return}n(s)}},{passive:!0,capture:p}),b(t,"pointerdown",s=>{const o=v(e);o&&(l=!s.composedPath().includes(o)&&!f(s))},{passive:!0}),a&&b(t,"blur",s=>{var o;const d=v(e);((o=t.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(d!=null&&d.contains(t.document.activeElement))&&n(s)})].filter(Boolean);return()=>i.forEach(s=>s())}function N(e,n=!1){const r=m(),t=()=>r.value=!!e();return t(),W(t,n),r}const I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E="__vueuse_ssr_handlers__";I[E]=I[E]||{};function Z({document:e=x}={}){if(!e)return m("visible");const n=m(e.visibilityState);return b(e,"visibilitychange",()=>{n.value=e.visibilityState}),n}var g=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,B=(e,n)=>{var r={};for(var t in e)M.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&g)for(var t of g(e))n.indexOf(t)<0&&k.call(e,t)&&(r[t]=e[t]);return r};function ee(e,n,r={}){const t=r,{window:u=y}=t,p=B(t,["window"]);let a;const l=N(()=>u&&"ResizeObserver"in u),f=()=>{a&&(a.disconnect(),a=void 0)},O=w(()=>v(e),c=>{f(),l.value&&u&&c&&(a=new ResizeObserver(n),a.observe(c,p))},{immediate:!0,flush:"post"}),i=()=>{f(),O()};return _(i),{isSupported:l,stop:i}}var P=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,U=(e,n)=>{var r={};for(var t in e)F.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&P)for(var t of P(e))n.indexOf(t)<0&&z.call(e,t)&&(r[t]=e[t]);return r};function te(e,n,r={}){const t=r,{window:u=y}=t,p=U(t,["window"]);let a;const l=N(()=>u&&"MutationObserver"in u),f=()=>{a&&(a.disconnect(),a=void 0)},O=w(()=>v(e),c=>{f(),l.value&&u&&c&&(a=new MutationObserver(n),a.observe(c,p))},{immediate:!0}),i=()=>{f(),O()};return _(i),{isSupported:l,stop:i}}var S;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(S||(S={}));var D=Object.defineProperty,j=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,A=(e,n,r)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,V=(e,n)=>{for(var r in n||(n={}))G.call(n,r)&&A(e,r,n[r]);if(j)for(var r of j(n))H.call(n,r)&&A(e,r,n[r]);return e};const q={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};V({linear:L},q);function ne({window:e=y}={}){if(!e)return m(!1);const n=m(e.document.hasFocus());return b(e,"blur",()=>{n.value=!1}),b(e,"focus",()=>{n.value=!0}),n}export{ee as a,v as b,te as c,Z as d,ne as e,Y as o,b as u};