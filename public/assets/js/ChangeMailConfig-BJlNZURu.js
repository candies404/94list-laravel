import{E as _,q,c as P,b as U,i as E,j as F,d as k,e as x,v as B}from"./element-plus@2.7.7_vue@3.4.32_typescript@5.5.3_-4orX1JGZ.js";import{i as p}from"./index-B22sOAcu.js";import{d as R,m as I,I as L,o as v,G as $,H as t,i as o,c as N,F as j,R as z,L as V}from"./@vue_runtime-core@3.4.32-BofAHbgu.js";import{r as i}from"./@vue_reactivity@3.4.32-DksAu7zd.js";import"./@vue_runtime-dom@3.4.32-DNdjNMzo.js";import"./@vue_shared@3.4.32-CaCWPAm8.js";import"./lodash-es@4.17.21-BB-zMWwC.js";import"./async-validator@4.2.5-DKvM95Vc.js";import"./@vueuse_core@9.13.0_vue@3.4.32_typescript@5.5.3_-DkVRVfGD.js";import"./@vueuse_shared@9.13.0_vue@3.4.32_typescript@5.5.3_-BbpdFR9m.js";import"./dayjs@1.11.11-Ct2Knyoi.js";import"./@element-plus_icons-vue@2.3.1_vue@3.4.32_typescript@5.5.3_-x2o2c_8n.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./pinia@2.1.7_typescript@5.5.3_vue@3.4.32_typescript@5.5.3_-BSzeUtha.js";import"./vue-demi@0.14.8_vue@3.4.32_typescript@5.5.3_-Dq6ymT-8.js";import"./axios@1.7.2-B4uVmeYG.js";import"./vue-router@4.4.0_vue@3.4.32_typescript@5.5.3_-ByijA4Eg.js";const D=()=>p.get("/admin/config/mail"),G=m=>p.patch("/admin/config/mail",m),H=m=>p.post("/admin/config/mail",m),me=R({__name:"ChangeMailConfig",setup(m){const s=i(!1),l=i({switch:!1,host:"",port:"",username:"",password:"",encryption:"tls",from_address:"",from_name:"",to_address:"",to_name:""}),d=i(null),c={host:[{required:!0,message:"请输入SMTP服务器地址",trigger:"blur"}],port:[{required:!0,message:"请输入SMTP服务器端口",trigger:"blur"}],username:[{required:!0,message:"请输入SMTP服务器账户",trigger:"blur"}],password:[{required:!0,message:"请输入SMTP服务器密码",trigger:"blur"}],encryption:[{required:!0,message:"请选择SMTP服务器加密方式",trigger:"blur"}],from_address:[{required:!0,message:"请输入发件人地址",trigger:"blur"}],from_name:[{required:!0,message:"请输入发件人名称",trigger:"blur"}],to_address:[{required:!0,message:"请输入收件人地址",trigger:"blur"}],to_name:[{required:!0,message:"请输入收件人名称",trigger:"blur"}]},f=async()=>{try{s.value=!0;const u=await D();l.value=u.data}finally{s.value=!1}},b=async u=>{if(!(!u||!await u.validate()))try{s.value=!0,await G(l.value),_.success("保存成功")}finally{s.value=!1,await f()}},w=async u=>{if(!(!u||!await u.validate()))try{s.value=!0,await H(l.value),_.success("发送成功,请检查邮箱是否收到")}finally{s.value=!1}};return I(f),(u,a)=>{const y=q,r=P,n=U,M=E,C=F,g=k,T=x,S=B;return L((v(),$(T,{ref_key:"changeMailConfigFormRef",ref:d,model:l.value,rules:c,"label-width":"auto"},{default:t(()=>[o(r,{label:"是否开启",prop:"switch"},{default:t(()=>[o(y,{modelValue:l.value.switch,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.switch=e),size:"large"},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器地址",prop:"host"},{default:t(()=>[o(n,{modelValue:l.value.host,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.host=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器加密方式",prop:"encryption"},{default:t(()=>[o(C,{modelValue:l.value.encryption,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.encryption=e),placeholder:"选择加密方式"},{default:t(()=>[(v(),N(j,null,z(["tls","ssl"],e=>o(M,{key:e,label:e,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器端口",prop:"port"},{default:t(()=>[o(n,{modelValue:l.value.port,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.port=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器用户名",prop:"username"},{default:t(()=>[o(n,{modelValue:l.value.username,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.username=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"SMTP服务器密码",prop:"password"},{default:t(()=>[o(n,{modelValue:l.value.password,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value.password=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"发件人地址",prop:"from_address"},{default:t(()=>[o(n,{modelValue:l.value.from_address,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value.from_address=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"发件人名称",prop:"from_name"},{default:t(()=>[o(n,{modelValue:l.value.from_name,"onUpdate:modelValue":a[7]||(a[7]=e=>l.value.from_name=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"收件人名称",prop:"to_name"},{default:t(()=>[o(n,{modelValue:l.value.to_name,"onUpdate:modelValue":a[8]||(a[8]=e=>l.value.to_name=e)},null,8,["modelValue"])]),_:1}),o(r,{label:"收件人地址",prop:"to_address"},{default:t(()=>[o(n,{modelValue:l.value.to_address,"onUpdate:modelValue":a[9]||(a[9]=e=>l.value.to_address=e)},null,8,["modelValue"])]),_:1}),o(r,{label:" "},{default:t(()=>[o(g,{type:"primary",onClick:a[10]||(a[10]=e=>b(d.value))},{default:t(()=>[V("保存")]),_:1}),o(g,{type:"primary",onClick:a[11]||(a[11]=e=>w(d.value))},{default:t(()=>[V(" 发送测试邮件 ")]),_:1})]),_:1})]),_:1},8,["model"])),[[S,s.value]])}}});export{me as default};
