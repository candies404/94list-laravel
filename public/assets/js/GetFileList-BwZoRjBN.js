import{E as $,l as ee,b as te,c as le,d as oe,e as se,a as ae,v as re}from"./element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-4orX1JGZ.js";import{u as ne}from"./fileListStore-QWP7EPbu.js";import{u as ie,a as ue,c as D,g as T}from"./index-Bqq37ZMk.js";import{c as de}from"./copy-By2guqEs.js";import{f as N}from"./format-CyW-QbYa.js";import{i as pe}from"./isMobile-BD0f7XPI.js";import{s as Z}from"./pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js";import{u as me}from"./vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js";import{d as ce,m as fe,n as ge,I as _e,o as r,G as d,H as a,a as _,K as c,c as V,L as k,i as n,F as C}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import{r as S,u as t}from"./@vue_reactivity@3.4.32-DksAu7zd.js";import{L as v}from"./@vue_shared@3.4.32-CaCWPAm8.js";import{_ as ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./@vue_runtime-dom@3.4.32-DNdjNMzo.js";import"./lodash-es@4.17.21-BB-zMWwC.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js";import"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import"./dayjs@1.11.11-Ct2Knyoi.js";import"./@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./axios@1.7.2-B4uVmeYG.js";import"./vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js";const ve={key:0},ye={key:1},we=["src"],be=ce({__name:"GetFileList",setup(Ve){const M=S("right");pe()&&(M.value="top");const y=ne(),{pending:G,getFileListForm:l,getFileListFormRef:U,selectedRows:P,limitForm:g,limitMessage:E,vcode:w,downloadLinks:B,dialogVisible:q}=Z(y),x=ie(),{config:f}=Z(x),H=(o,e,i)=>e===""?i(new Error("请先输入需要解析的链接")):A(e)?i():i(new Error("请输入合法的链接")),K=()=>{l.value.dir="/",l.value.surl="";const o=A(l.value.url);o&&(o.id&&(o.surl?(l.value.url=`https://pan.baidu.com/share/init?surl=${o.id}`,l.value.surl=`1${o.id}`):(l.value.url=`https://pan.baidu.com/s/${o.id}`,l.value.surl=o.id)),o.pwd&&(l.value.pwd=o.pwd,$.success("已自动填写密码")))},A=o=>{const e=o.match(/s\/([a-zA-Z0-9_-]+)/),i=o.match(/surl=([a-zA-Z0-9_-]+)/),p=o.match(/\?pwd=([a-zA-Z0-9_-]+)/),u=o.match(/&pwd=([a-zA-Z0-9_-]+)/),m=o.match(/提取码[:：]\s?([a-zA-Z0-9_-]+)/);let b;if(i)b=i[1];else if(e)b=e[1];else return!1;const L=p?p[1]:u?u[1]:m?m[1]:null;return i?{surl:!0,id:b,pwd:L}:{id:b,pwd:L}},j={url:[{required:!0,validator:H,trigger:"blur"}]},J=async o=>{if(!o||!await o.validate())return;const e=new URLSearchParams;e.set("url",l.value.url),e.set("surl",l.value.surl),e.set("pwd",l.value.pwd),e.set("dir",l.value.dir),de(`${location.host}/?${e.toString()}`,"复制成功")};fe(()=>{ge(()=>{const o=localStorage.getItem("token");o&&o!==""&&($.success("已自动填充 token"),l.value.token=o);const e=new URLSearchParams(location.search);if(e.size<4)return;const i=e.get("url"),p=e.get("pwd"),u=e.get("dir"),m=e.get("surl");!i||!p||!u||!m||(l.value={url:i,pwd:p,dir:u,surl:m},$.success("已读取到参数,正在加载"),setTimeout(y.getFileList,500))}),y.getLimit(),I()});const R=me(),O=()=>R.push("/login"),Q=()=>R.push("/admin"),W=o=>window.open(o),z=S(0),I=()=>z.value=Date.now(),h=()=>B.value=[],F=S(!1),X=()=>{l.value.token!==""?(F.value=!0,localStorage.setItem("token",l.value.token??"")):(F.value=!1,localStorage.removeItem("token")),y.getLimit()};return(o,e)=>{const i=ee,p=te,u=le,m=oe,b=se,L=ae,Y=re;return _e((r(),d(L,null,{default:a(()=>[_("h2",null,"前台解析中心 | "+v(t(ue)()),1),t(f).show_copyright?(r(),d(i,{key:0,"show-icon":"",type:"warning",closable:!1,title:t(f).custom_copyright},null,8,["title"])):c("",!0),t(f).have_account?(r(),d(i,{key:1,closable:!1,class:"alert",title:"当前中转账号充足",type:"success"})):(r(),d(i,{key:2,closable:!1,class:"alert",title:"当前中转账号不足",type:"error"})),t(f).debug?(r(),d(i,{key:3,class:"alert",title:"当前网站开启了DEBUG模式,非调试请关闭!!!!",type:"error",closable:!1})):c("",!0),t(f).is_https?c("",!0):(r(),d(i,{key:4,class:"alert",title:"当前网站未开启SSL,可能出现无法请求Aria2服务器的问题",type:"error",closable:!1})),t(E)===""?(r(),d(i,{key:5,class:"alert",type:"success",closable:!1},{default:a(()=>[F.value?(r(),V("span",ve,[_("span",null,"当前卡密: "+v(t(g).group_name),1),_("span",null,"剩余可解析文件数: "+v(t(g).count),1),_("span",null,"剩余可解析大小: "+v(t(N)(t(g).size)),1),_("span",null," 到期时间: "+v(t(g).expired_at==="未使用"?t(g).expired_at:new Date(t(g).expired_at??0).toLocaleString()),1)])):(r(),V("span",ye,[_("span",null,"当前用户组: "+v(t(g).group_name),1),_("span",null,"剩余可解析文件数: "+v(t(g).count),1),_("span",null,"剩余可解析大小: "+v(t(N)(t(g).size)),1)]))]),_:1})):(r(),d(i,{key:6,class:"alert",type:"error",closable:!1},{default:a(()=>[k(v(t(E)??"未知错误"),1)]),_:1})),n(b,{ref_key:"getFileListFormRef",ref:U,model:t(l),rules:j,"label-width":"auto",class:"form","label-position":M.value},{default:a(()=>[n(u,{label:"链接",prop:"url"},{default:a(()=>[n(p,{modelValue:t(l).url,"onUpdate:modelValue":e[0]||(e[0]=s=>t(l).url=s),modelModifiers:{trim:!0},onChange:e[1]||(e[1]=s=>h()),onBlur:e[2]||(e[2]=s=>K())},null,8,["modelValue"])]),_:1}),n(u,{label:"密码",prop:"pwd"},{default:a(()=>[n(p,{modelValue:t(l).pwd,"onUpdate:modelValue":e[3]||(e[3]=s=>t(l).pwd=s),modelModifiers:{trim:!0},onChange:e[4]||(e[4]=s=>h())},null,8,["modelValue"])]),_:1}),t(f).need_password?(r(),d(u,{key:0,label:"解析密码",prop:"password"},{default:a(()=>[n(p,{modelValue:t(l).password,"onUpdate:modelValue":e[5]||(e[5]=s=>t(l).password=s),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1})):c("",!0),t(f).token_mode?(r(),d(u,{key:1,label:"卡密(不用留空即可)",prop:"token"},{default:a(()=>[n(p,{modelValue:t(l).token,"onUpdate:modelValue":e[6]||(e[6]=s=>t(l).token=s),modelModifiers:{trim:!0},onBlur:X},null,8,["modelValue"])]),_:1})):c("",!0),n(u,{label:"当前路径",prop:"dir"},{default:a(()=>[n(p,{modelValue:t(l).dir,"onUpdate:modelValue":e[7]||(e[7]=s=>t(l).dir=s),disabled:""},null,8,["modelValue"])]),_:1}),t(w).hit_captcha?(r(),V(C,{key:2},[n(u,{label:"验证码编号",prop:"vcode_str"},{default:a(()=>[n(p,{modelValue:t(w).vcode_str,"onUpdate:modelValue":e[8]||(e[8]=s=>t(w).vcode_str=s),disabled:""},null,8,["modelValue"])]),_:1}),n(u,{label:"验证码图片",prop:"vcode_img"},{default:a(()=>[_("img",{src:`${t(w).vcode_img}&t=${z.value}`,alt:"验证码图片",onClick:I},null,8,we)]),_:1}),n(u,{label:"验证码字符",prop:"vcode_input"},{default:a(()=>[n(p,{modelValue:t(w).vcode_input,"onUpdate:modelValue":e[9]||(e[9]=s=>t(w).vcode_input=s)},null,8,["modelValue"])]),_:1})],64)):c("",!0),t(D)()==="admin"?(r(),d(u,{key:3,label:"解析账号id,多个使用,分割",prop:"account_ids"},{default:a(()=>[n(p,{modelValue:t(l).account_ids,"onUpdate:modelValue":e[10]||(e[10]=s=>t(l).account_ids=s)},null,8,["modelValue"])]),_:1})):c("",!0),n(u,{label:" ",class:"buttons"},{default:a(()=>[n(m,{type:"primary",onClick:e[11]||(e[11]=s=>t(y).getFileList())},{default:a(()=>[k("获取/刷新列表")]),_:1}),n(m,{type:"primary",disabled:t(P).length<=0,onClick:e[12]||(e[12]=s=>t(y).getDownloadLinks())},{default:a(()=>[k(" 批量解析 ")]),_:1},8,["disabled"]),n(m,{type:"primary",onClick:e[13]||(e[13]=s=>J(t(U)))},{default:a(()=>[k("复制当前地址")]),_:1}),t(B).length!==0?(r(),d(m,{key:0,type:"primary",onClick:e[14]||(e[14]=s=>q.value=!0)},{default:a(()=>[k(" 重新显示下载链接 ")]),_:1})):c("",!0),t(f).button_link!==""?(r(),d(m,{key:1,type:"primary",onClick:e[15]||(e[15]=s=>W(t(f).button_link))},{default:a(()=>[k(" 前往购买卡密 ")]),_:1})):c("",!0),t(f).show_login_button?(r(),V(C,{key:2},[t(T)()==="0"?(r(),d(m,{key:0,type:"primary",onClick:e[16]||(e[16]=s=>O())},{default:a(()=>[k("登陆")]),_:1})):c("",!0),t(T)()==="1"?(r(),V(C,{key:1},[t(D)()==="admin"?(r(),d(m,{key:0,type:"primary",onClick:e[17]||(e[17]=s=>Q())},{default:a(()=>[k(" 进入后台 ")]),_:1})):c("",!0),n(m,{type:"danger",onClick:e[18]||(e[18]=s=>t(x).logout())},{default:a(()=>[k(" 注销 ")]),_:1})],64)):c("",!0)],64)):c("",!0)]),_:1})]),_:1},8,["model","label-position"])]),_:1})),[[Y,t(G)]])}}}),je=ke(be,[["__scopeId","data-v-eaf991a9"]]);export{je as default};
