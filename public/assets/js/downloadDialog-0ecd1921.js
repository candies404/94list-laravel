import"./base-228d64a5.js";import{E as N}from"./el-overlay-f3b67021.js";import{E as z,a as R}from"./el-table-column-d00bf6d8.js";import"./el-popper-a3b50ee9.js";import{E as j}from"./el-space-cf5a7f74.js";import{E as I}from"./el-button-71aeade6.js";import{E as M}from"./el-text-d45bd844.js";import{a as w,g as q,e as _,c as $,R as v,w as t,a5 as K,u as a,i as b,n as D,h as A,m as x,b as o,q as p,z as G,a1 as H,A as J}from"./index-42a788ad.js";import{u as O}from"./UserPannel-1c9bfe95.js";import{c as S}from"./copy-485e2393.js";import{b as Q,t as W,u as X,f as Y,_ as Z,w as ee,i as oe,E as y}from"./request-fdc4c150.js";import"./vnode-cdc7eacd.js";import"./focus-trap-b46ba44e.js";import"./isNil-c75b1b34.js";import"./scroll-5e7bdf7f.js";import"./index-7c55feb4.js";import"./_commonjsHelpers-725317a4.js";import"./_initCloneObject-93a1e332.js";import"./use-form-item-6eb8476f.js";import"./user-3d7773df.js";const te=Q({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:W}}),ae={click:r=>r instanceof MouseEvent},ne=["href"],le=w({name:"ElLink"}),se=w({...le,props:te,emits:ae,setup(r,{emit:d}){const n=r,l=X("link"),m=q(()=>[l.b(),l.m(n.type),l.is("disabled",n.disabled),l.is("underline",n.underline&&!n.disabled)]);function u(e){n.disabled||d("click",e)}return(e,h)=>(_(),$("a",{class:D(a(m)),href:e.disabled||!e.href?void 0:e.href,onClick:u},[e.icon?(_(),v(a(Y),{key:0},{default:t(()=>[(_(),v(K(e.icon)))]),_:1})):b("v-if",!0),e.$slots.default?(_(),$("span",{key:1,class:D(a(l).e("inner"))},[A(e.$slots,"default")],2)):b("v-if",!0),e.$slots.icon?A(e.$slots,"icon",{key:2}):b("v-if",!0)],10,ne))}});var ie=Z(se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const re=ee(ie);const ce=r=>new Promise(d=>setTimeout(d,r)),Te=w({__name:"downloadDialog",setup(r){const d=O(),{clientConfig:n,dlinkList:l,downloadDialogVisible:m,selectDownloadFiles:u,aria2ConfigForm:e,aria2ConfigDialogVisible:h}=x(d),C=async(s,i)=>{let f;try{f=await oe.post(`${e.value.host}:${e.value.port}/jsonrpc`,{jsonrpc:"2.0",id:J(),method:"aria2.addUri",params:[`token:${e.value.secret}`,[s],{out:i,header:[`User-Agent: ${n.value.userAgent}`]}]})}catch{y.error("发送失败，请检查控制台输出"),f="failed"}f.toString()!=="failed"&&y.success(`已把${i}任务发送给下载器`)},V=s=>u.value=s,T=()=>h.value=!0,B=async()=>{y.error("请确保最大同时下载文件数在5及以下,否则可能出现下载失败!"),await ce(3e3),y.success("开始下载"),u.value.forEach(s=>C(s.dlink,s.server_filename))};return(s,i)=>{const f=M,E=re,k=I,P=j,g=z,U=R,F=N;return _(),v(F,{modelValue:a(m),"onUpdate:modelValue":i[1]||(i[1]=c=>H(m)?m.value=c:null),title:"解析任务列表",width:"80%"},{default:t(()=>[o(P,null,{default:t(()=>[o(f,{class:"mx-1"},{default:t(()=>[p("当前的UA :")]),_:1}),o(E,{type:"danger",onClick:i[0]||(i[0]=c=>a(S)(a(n).userAgent,"已复制UA"))},{default:t(()=>[p(G(a(n).userAgent),1)]),_:1}),o(k,{type:"primary",disabled:a(u).length<=0,onClick:B},{default:t(()=>[p(" 批量下载 ")]),_:1},8,["disabled"]),o(k,{type:"primary",onClick:T},{default:t(()=>[p("下载配置")]),_:1})]),_:1}),o(U,{border:"","show-overflow-tooltip":"",class:"table",data:a(l),onSelectionChange:V},{default:t(()=>[o(g,{type:"selection",width:"40"}),o(g,{prop:"server_filename",label:"文件名"}),o(g,{prop:"dlink",label:"下载链接"}),o(g,{label:"操作",width:"190"},{default:t(c=>[o(k,{type:"primary",size:"small",onClick:L=>a(S)(c.row.dlink,"已将链接复制到粘贴板内")},{default:t(()=>[p(" 复制链接 ")]),_:2},1032,["onClick"]),o(k,{type:"primary",size:"small",onClick:L=>C(c.row.dlink,c.row.server_filename)},{default:t(()=>[p(" 发送Aria2 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"])}}});export{Te as default};