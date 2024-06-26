const __vite__fileDeps=["assets/js/UserView-DV2h-Da5.js","assets/js/.pnpm-CR973naf.js","assets/css/.pnpm-CZlI6AXK.css","assets/css/UserView-V0M9nBA1.css","assets/js/LoginView-BTURJUm-.js","assets/js/favicon-BrYC5Vmz.js","assets/js/_plugin-vue_export-helper-DlAUqK2U.js","assets/css/LoginView-kFAD-Fzo.css","assets/js/RegisterView-B6jWOjSj.js","assets/css/RegisterView-BnKfmdM9.css","assets/js/AdminView-Bsk0ajaA.js","assets/js/NotFoundView-BKXzBk9S.js","assets/css/NotFoundView-B8o8jygP.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as S,E as m,d as w,r as A,u as b,b as R,o as I,c as P,e as O,f as T,R as k,g as V,h as C,i as D,j as $}from"./.pnpm-CR973naf.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const q="modulepreload",x=function(e){return"/"+e},f={},d=function(n,t,u){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(t.map(i=>{if(i=x(i),i in f)return;f[i]=!0;const p=i.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${v}`))return;const c=document.createElement("link");if(c.rel=p?"stylesheet":q,p||(c.as="script",c.crossOrigin=""),c.href=i,r&&c.setAttribute("nonce",r),document.head.appendChild(c),p)return new Promise((E,L)=>{c.addEventListener("load",E),c.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>n()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},J=()=>localStorage.getItem("login_state")??"0",g=e=>localStorage.setItem("login_state",e),W=()=>localStorage.getItem("login_role")??"user",h=e=>localStorage.setItem("login_role",e),N=()=>localStorage.getItem("announce")??"",H=e=>localStorage.setItem("announce",e),K=async()=>(await d(async()=>{const{default:e}=await import("./package-BWhjHFgw.js");return{default:e}},[])).default.version,j=()=>{var e;return((e=document.querySelector("meta[name='app_name']"))==null?void 0:e.getAttribute("content"))??"94list-laravel"},G=()=>{const e=localStorage.getItem("aria2_config");return e?JSON.parse(e):{host:"http://localhost",port:6800,token:""}},Q=e=>localStorage.setItem("aria2_config",JSON.stringify(e)),a=S.create({baseURL:"/api/v1",timeout:1/0,headers:{Accept:"application/json","Content-Type":"application/json"}});a.interceptors.response.use(e=>e.data,e=>{var t;const n=(t=e.response.data)==null?void 0:t.message;return n?n==="用户未登陆"?(m.error("登陆已过期, 请重新登陆!"),g("0"),setTimeout(()=>location.href="/login",1e3)):n==="Too Many Attempts."?m.error("请求量过大! 请等待10分钟后重试!"):n==="用户权限不足"?(m.error("用户权限不足, 请联系管理员!"),h("user"),setTimeout(()=>location.href="/user",1e3)):m.error(n):m.error("服务器异常, 请稍后再试"),Promise.reject(e.response.data)});const l=e=>typeof e=="string"?parseInt(e):e,M=()=>a.get("/parse/config"),X=async e=>{const n=await a.post("/parse/get_file_list",e);return n.data.list=n.data.list.map(t=>(t.category=l(t.category),t.fs_id=l(t.fs_id),t.isdir=l(t.isdir),t.local_ctime=l(t.local_ctime),t.local_mtime=l(t.local_mtime),t.server_ctime=l(t.local_mtime),t.server_mtime=l(t.local_mtime),t.size=l(t.size),t)),n},Y=e=>a.post("/parse/get_vcode",e),Z=e=>a.post("/parse/get_download_links",e),ee=()=>a.get("/parse/limit"),te=e=>a.post("/user/login",e),oe=e=>a.post("/user/register",e),U=()=>a.delete("/user"),B=w("mainStore",()=>{const e=A({show_announce:!1,announce:"",user_agent:"",debug:!1,max_once:0,have_account:!1,have_login:!1,need_inv_code:!1,need_password:!1,is_https:!1,show_copyright:!1,custom_copyright:"本项目半开源, 项目地址: https://github.com/huankong233/94list-laravel",min_single_file:0}),n=b();return{config:e,logout:async()=>{try{await U()}finally{g("0"),h("user"),n.push("/"),m.success("退出登陆成功~")}}}}),F=R({__name:"App",setup(e){const n=B();return I(async()=>{const t=window.matchMedia("(prefers-color-scheme: dark)");u(t),t.addEventListener("change",u);function u(r){r.matches?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")}const o=(await M()).data;o.announce=o.announce.replaceAll("[NextLine]","<br>"),o.announce===N()&&(o.show_announce=!1),n.config={...o,is_https:document.location.protocol==="https:"},g(o.have_login?"1":"0")}),(t,u)=>(T(),P(O(k)))}}),y=V({history:C("/"),routes:[{path:"/",name:"index",redirect:"/user"},{path:"/user",name:"user",meta:{title:"前台解析中心"},component:()=>d(()=>import("./UserView-DV2h-Da5.js"),__vite__mapDeps([0,1,2,3]))},{path:"/login",name:"login",meta:{title:"登陆"},component:()=>d(()=>import("./LoginView-BTURJUm-.js"),__vite__mapDeps([4,1,2,5,6,7]))},{path:"/register",name:"register",meta:{title:"注册"},component:()=>d(()=>import("./RegisterView-B6jWOjSj.js"),__vite__mapDeps([8,1,2,5,6,9]))},{path:"/admin",name:"admin",meta:{title:"后台控制中心"},component:()=>d(()=>import("./AdminView-Bsk0ajaA.js"),__vite__mapDeps([10,1,2]))},{path:"/404",name:"404",meta:{title:"404页面不存在"},component:()=>d(()=>import("./NotFoundView-BKXzBk9S.js"),__vite__mapDeps([11,1,2,12]))},{path:"/:pathMatch(.*)",redirect:"/404"}]});y.beforeEach((e,n,t)=>{document.title=`${e.meta.title} | ${j()}`,t()});const _=D(F);_.use($());_.use(y);_.mount("#app");export{d as _,j as a,h as b,W as c,H as d,X as e,Z as f,J as g,Y as h,a as i,ee as j,G as k,te as l,Q as m,K as n,oe as r,g as s,B as u};
