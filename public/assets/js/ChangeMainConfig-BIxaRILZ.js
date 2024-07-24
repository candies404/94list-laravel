import{b as $,r as y,N as G,o as N,w as R,e as f,c as k,m as t,j as U,F as C,k as a,u as n,C as b,x as M,E as v,y as I,z as D,X as J,Y as T,I as W,J as j,A as L,B as Y,v as O}from"./.pnpm-fc_Lr1wI.js";import{i as x,n as X}from"./index-CtYSmbnK.js";import{u as H}from"./changeConfigForm-DIO7pT37.js";const K=()=>x.get("/admin/config/main"),Q=m=>x.patch("/admin/config/main",m),Z=m=>x.post("/admin/config/main/testAuth",m),le=$({__name:"ChangeMainConfig",props:["Mode"],setup(m){const p=y(!1),B=H(),{changeConfigForm:l}=G(B),g=y(null),q={name:[{required:!0,message:"请输入站点名称",trigger:"blur"}],sleep:[{required:!0,message:"请输入批量解析时休眠时间",trigger:"blur"}],max_once:[{required:!0,message:"请输入批量解析时单次最大解析数量",trigger:"blur"}],max_filesize:[{required:!0,message:"请输入单日单个账号最大解析大小",trigger:"blur"}],min_single_filesize:[{required:!0,message:"请输入可解析文件最小需要大小",trigger:"blur"}],max_single_filesize:[{required:!0,message:"请输入可解析文件最大可是大小",trigger:"blur"}],user_agent:[{required:!0,message:"请输入User_Agent",trigger:"blur"}]},V=async()=>{try{p.value=!0;const e=(await K()).data;l.value={...e,max_filesize:e.max_filesize/1024**3,min_single_filesize:e.min_single_filesize/1024**3,max_single_filesize:e.max_single_filesize/1024**3,front_end_version:await X(),announce:e.announce.replaceAll("[NextLine]",`
`)}}finally{p.value=!1}},A=async d=>{if(!(!d||!await d.validate()))try{p.value=!0,await Q({...l.value,max_filesize:l.value.max_filesize*1024**3,min_single_filesize:l.value.min_single_filesize*1024**3,max_single_filesize:l.value.max_single_filesize*1024**3}),v.success("保存成功")}finally{p.value=!1,await V()}},E=async d=>{if(!(!d||!await d.validate()))try{p.value=!0;const e=await Z({...l.value,max_filesize:l.value.max_filesize*1024**3,min_single_filesize:l.value.min_single_filesize*1024**3,max_single_filesize:l.value.max_single_filesize*1024**3});"ip"in e.data?v.error(`未知授权码,当前ip为: ${e.data.ip}`):v.success(`测试通过,有效期至: ${e.data.expired_at}`)}finally{p.value=!1,await V()}};N(V);const z=()=>{let d="";switch(l.value.parse_mode){case 5:d="pan.baidu.com";break;case 1:case 8:d="netdisk;P2SP;3.0.10.22";break;case 6:case 7:d="netdisk;P2SP;3.0.10.22;netdisk;4.32.1;PC;PC-Windows;10.0.19045;UniBaiduYunGuanJia";break;case 2:case 9:d="netdisk;12.11.9;23049RAD8C;android-android;13;JSbridge4.4.0;jointBridge;1.1.0;";break;case 10:d="Mozilla/5.0 (94list-laravel;netdisk;svip)";break;default:d="netdisk;P2SP;3.0.10.22";break}l.value.user_agent=d};return(d,e)=>{const u=I,i=D,s=J,_=T,r=W,F=j,w=L,P=Y,S=O;return R((f(),k(P,{ref_key:"changeConfigFormRef",ref:g,model:n(l),rules:q,"label-width":"auto"},{default:t(()=>[m.Mode==="main"?(f(),U(C,{key:0},[a(i,{label:"前端版本号",prop:"front_end_version"},{default:t(()=>[a(u,{disabled:"",modelValue:n(l).front_end_version,"onUpdate:modelValue":e[0]||(e[0]=o=>n(l).front_end_version=o)},null,8,["modelValue"])]),_:1}),a(i,{label:"后端版本号",prop:"version"},{default:t(()=>[a(u,{disabled:"",modelValue:n(l).version,"onUpdate:modelValue":e[1]||(e[1]=o=>n(l).version=o)},null,8,["modelValue"])]),_:1}),a(i,{label:"站点名称",prop:"name"},{default:t(()=>[a(u,{modelValue:n(l).name,"onUpdate:modelValue":e[2]||(e[2]=o=>n(l).name=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(i,{label:"公告内容",prop:"announce"},{default:t(()=>[a(u,{type:"textarea",modelValue:n(l).announce,"onUpdate:modelValue":e[3]||(e[3]=o=>n(l).announce=o)},null,8,["modelValue"])]),_:1}),a(i,{label:"DEBUG模式开关",prop:"debug"},{default:t(()=>[a(s,{modelValue:n(l).debug,"onUpdate:modelValue":e[4]||(e[4]=o=>n(l).debug=o),size:"large"},null,8,["modelValue"])]),_:1}),a(i,{label:"邀请码开关",prop:"need_inv_code"},{default:t(()=>[a(s,{modelValue:n(l).need_inv_code,"onUpdate:modelValue":e[5]||(e[5]=o=>n(l).need_inv_code=o),size:"large"},null,8,["modelValue"])]),_:1}),a(i,{label:"白名单模式开关",prop:"whitelist_mode"},{default:t(()=>[a(s,{modelValue:n(l).whitelist_mode,"onUpdate:modelValue":e[6]||(e[6]=o=>n(l).whitelist_mode=o),size:"large"},null,8,["modelValue"])]),_:1}),a(i,{label:"展示版权信息",prop:"show_copyright"},{default:t(()=>[a(s,{modelValue:n(l).show_copyright,"onUpdate:modelValue":e[7]||(e[7]=o=>n(l).show_copyright=o),size:"large"},null,8,["modelValue"])]),_:1}),a(i,{label:"自定义版权",prop:"custom_copyright"},{default:t(()=>[a(u,{modelValue:n(l).custom_copyright,"onUpdate:modelValue":e[8]||(e[8]=o=>n(l).custom_copyright=o)},null,8,["modelValue"])]),_:1}),a(i,{label:"卡密模式开关",prop:"token_mode"},{default:t(()=>[a(s,{modelValue:n(l).token_mode,"onUpdate:modelValue":e[9]||(e[9]=o=>n(l).token_mode=o),size:"large"},null,8,["modelValue"])]),_:1}),a(i,{label:"卡网跳转链接",prop:"button_link"},{default:t(()=>[a(u,{modelValue:n(l).button_link,"onUpdate:modelValue":e[10]||(e[10]=o=>n(l).button_link=o)},null,8,["modelValue"])]),_:1}),a(i,{label:"显示登陆按钮",prop:"show_login_button"},{default:t(()=>[a(s,{modelValue:n(l).show_login_button,"onUpdate:modelValue":e[11]||(e[11]=o=>n(l).show_login_button=o),size:"large"},null,8,["modelValue"])]),_:1})],64)):b("",!0),m.Mode==="parse"?(f(),U(C,{key:1},[a(i,{label:"下载使用的 User_Agent",prop:"user_agent"},{default:t(()=>[a(u,{modelValue:n(l).user_agent,"onUpdate:modelValue":e[12]||(e[12]=o=>n(l).user_agent=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(i,{label:"批量解析时休眠时间（秒）",prop:"sleep"},{default:t(()=>[a(_,{modelValue:n(l).sleep,"onUpdate:modelValue":e[13]||(e[13]=o=>n(l).sleep=o)},null,8,["modelValue"])]),_:1}),a(i,{label:"批量解析时单次最大解析数量（个）",prop:"max_once"},{default:t(()=>[a(_,{modelValue:n(l).max_once,"onUpdate:modelValue":e[14]||(e[14]=o=>n(l).max_once=o)},null,8,["modelValue"])]),_:1}),a(i,{label:"单日单个账号最大解析大小（GB）",prop:"max_filesize"},{default:t(()=>[a(_,{modelValue:n(l).max_filesize,"onUpdate:modelValue":e[15]||(e[15]=o=>n(l).max_filesize=o),style:{width:"300px"}},null,8,["modelValue"])]),_:1}),a(i,{label:"可解析文件最小需要大小（GB）",prop:"min_single_filesize"},{default:t(()=>[a(_,{modelValue:n(l).min_single_filesize,"onUpdate:modelValue":e[16]||(e[16]=o=>n(l).min_single_filesize=o),style:{width:"300px"}},null,8,["modelValue"])]),_:1}),a(i,{label:"可解析文件最大可是大小（GB）",prop:"max_single_filesize"},{default:t(()=>[a(_,{modelValue:n(l).max_single_filesize,"onUpdate:modelValue":e[17]||(e[17]=o=>n(l).max_single_filesize=o),style:{width:"300px"}},null,8,["modelValue"])]),_:1}),a(i,{label:"解析密码",prop:"password"},{default:t(()=>[a(u,{modelValue:n(l).password,"onUpdate:modelValue":e[18]||(e[18]=o=>n(l).password=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(i,{label:"购买授权联系TG:"},{default:t(()=>[a(u,{disabled:"",value:"t.me/huan_kong"})]),_:1}),a(i,{label:"授权服务器",prop:"main_server"},{default:t(()=>[a(u,{modelValue:n(l).main_server,"onUpdate:modelValue":e[19]||(e[19]=o=>n(l).main_server=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(i,{label:"授权码",prop:"code"},{default:t(()=>[a(u,{modelValue:n(l).code,"onUpdate:modelValue":e[20]||(e[20]=o=>n(l).code=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(i,{label:"代理下载服务器",prop:"proxy_server"},{default:t(()=>[a(u,{modelValue:n(l).proxy_server,"onUpdate:modelValue":e[21]||(e[21]=o=>n(l).proxy_server=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(i,{label:"代理下载服务器密码",prop:"proxy_password"},{default:t(()=>[a(u,{modelValue:n(l).proxy_password,"onUpdate:modelValue":e[22]||(e[22]=o=>n(l).proxy_password=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(i,{label:"解析模式",prop:"parse_mode"},{default:t(()=>[a(F,{modelValue:n(l).parse_mode,"onUpdate:modelValue":e[23]||(e[23]=o=>n(l).parse_mode=o),onBlur:z,onChange:z},{default:t(()=>[a(r,{value:5,label:"V5盘内(开放平台接口)"}),a(r,{value:10,label:"V10盘内(开放平台接口)"}),a(r,{value:1,label:"V1盘内(原版V1,qdall下载可能失败,Windows)"}),a(r,{value:6,label:"V6盘内(改版V1,一定程度防风控)"}),a(r,{value:8,label:"V8盘内(改版V1,qdall下载可能失败,Android)"}),a(r,{value:2,label:"V2盘外(原版V2,qdall下载可能失败,Android)"}),a(r,{value:7,label:"V7盘外(改版V2,一定程度防风控)"}),a(r,{value:9,label:"V9盘外(改版V2,qdall下载可能失败,Windows)"})]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"省份模式开关",prop:"limit_prov"},{default:t(()=>[a(s,{modelValue:n(l).limit_prov,"onUpdate:modelValue":e[24]||(e[24]=o=>n(l).limit_prov=o),size:"large"},null,8,["modelValue"])]),_:1}),a(i,{label:"仅限中国用户使用",prop:"limit_cn"},{default:t(()=>[a(s,{modelValue:n(l).limit_cn,"onUpdate:modelValue":e[25]||(e[25]=o=>n(l).limit_cn=o),size:"large"},null,8,["modelValue"])]),_:1}),a(i,{label:"卡密绑定ip",prop:"token_bind_ip"},{default:t(()=>[a(s,{modelValue:n(l).token_bind_ip,"onUpdate:modelValue":e[26]||(e[26]=o=>n(l).token_bind_ip=o),size:"large"},null,8,["modelValue"])]),_:1})],64)):b("",!0),a(i,{label:" "},{default:t(()=>[a(w,{type:"primary",onClick:e[27]||(e[27]=o=>A(g.value))},{default:t(()=>[M("保存")]),_:1}),m.Mode==="parse"?(f(),k(w,{key:0,type:"primary",onClick:e[28]||(e[28]=o=>E(g.value))},{default:t(()=>[M(" 测试授权 ")]),_:1})):b("",!0)]),_:1})]),_:1},8,["model"])),[[S,p.value]])}}});export{le as default};
