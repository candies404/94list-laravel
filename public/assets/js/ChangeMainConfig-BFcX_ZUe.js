import{i as p,n as x}from"./index-CQGKQ7TU.js";/* empty css              */const C=()=>p.get("/admin/config/main"),k=d=>p.patch("/admin/config/main",d),y=d=>p.post("/admin/config/main/testAuth",d),h=Vue.defineComponent({__name:"ChangeMainConfig",props:["Mode"],setup(d){const r=Vue.ref(!1),l=Vue.ref({version:"",front_end_version:"",sleep:0,max_once:0,password:"",announce:"",user_agent:"",need_inv_code:!1,whitelist_mode:!1,show_copyright:!1,custom_copyright:"",main_server:"",code:"",parse_mode:0,max_filesize:0,min_single_file:0,token_mode:!1,button_link:"",limit_cn:!1,limit_prov:!1,debug:!1,name:"",show_login_button:!1,token_bind_ip:!1}),m=Vue.ref(null),f={name:[{required:!0,message:"请输入站点名称",trigger:"blur"}],sleep:[{required:!0,message:"请输入批量解析时休眠时间",trigger:"blur"}],max_once:[{required:!0,message:"请输入批量解析时单次最大解析数量",trigger:"blur"}],max_filesize:[{required:!0,message:"请输入单日单个账号最大解析大小",trigger:"blur"}],user_agent:[{required:!0,message:"请输入User_Agent",trigger:"blur"}]},s=async()=>{try{r.value=!0;const e=(await C()).data;l.value={...e,max_filesize:e.max_filesize/1024**3,min_single_file:e.min_single_file/1024**3,front_end_version:await x(),announce:e.announce.replaceAll("[NextLine]",`
`)}}finally{r.value=!1}},g=async u=>{if(!(!u||!await u.validate()))try{r.value=!0,await k({...l.value,max_filesize:l.value.max_filesize*1024**3,min_single_file:l.value.min_single_file*1024**3}),ElementPlus.ElMessage.success("保存成功")}finally{r.value=!1,await s()}},c=async u=>{if(!(!u||!await u.validate()||!_(l.value.parse_mode)))try{r.value=!0;const a=await y({...l.value,max_filesize:l.value.max_filesize*1024**3,min_single_file:l.value.min_single_file*1024**3});"ip"in a.data?ElementPlus.ElMessage.error(`未知授权码,当前ip为: ${a.data.ip}`):ElementPlus.ElMessage.success(`测试通过,有效期至: ${a.data.expired_at}`)}finally{r.value=!1,await s()}};Vue.onMounted(s);const _=u=>{let e=!0;return u===4&&ElementPlus.ElMessageBox.confirm("使用V3推荐使用安卓手機APP抓取的COOKIE以及固定UA!!!","Warning",{title:"注意:",type:"warning"}).then(()=>{l.value.parse_mode=4,l.value.user_agent="netdisk;P2SP;3.0.20.9"}).catch(()=>{l.value.parse_mode=3,e=!1}),e};return(u,e)=>{const a=Vue.resolveComponent("el-input"),o=Vue.resolveComponent("el-form-item"),n=Vue.resolveComponent("el-switch"),i=Vue.resolveComponent("el-input-number"),V=Vue.resolveComponent("el-option"),N=Vue.resolveComponent("el-select"),v=Vue.resolveComponent("el-button"),w=Vue.resolveComponent("el-form"),b=Vue.resolveDirective("loading");return Vue.withDirectives((Vue.openBlock(),Vue.createBlock(w,{ref_key:"changeConfigFormRef",ref:m,model:l.value,rules:f,"label-width":"auto"},{default:Vue.withCtx(()=>[d.Mode==="main"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:0},[Vue.createVNode(o,{label:"前端版本号",prop:"front_end_version"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{disabled:"",modelValue:l.value.front_end_version,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value.front_end_version=t)},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"后端版本号",prop:"version"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{disabled:"",modelValue:l.value.version,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value.version=t)},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"站点名称",prop:"name"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:l.value.name,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value.name=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"公告内容",prop:"announce"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{type:"textarea",modelValue:l.value.announce,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value.announce=t)},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"DEBUG模式开关",prop:"debug"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.debug,"onUpdate:modelValue":e[4]||(e[4]=t=>l.value.debug=t),size:"large"},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"邀请码开关",prop:"need_inv_code"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.need_inv_code,"onUpdate:modelValue":e[5]||(e[5]=t=>l.value.need_inv_code=t),size:"large"},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"白名单模式开关",prop:"whitelist_mode"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.whitelist_mode,"onUpdate:modelValue":e[6]||(e[6]=t=>l.value.whitelist_mode=t),size:"large"},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"展示版权信息",prop:"show_copyright"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.show_copyright,"onUpdate:modelValue":e[7]||(e[7]=t=>l.value.show_copyright=t),size:"large"},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"自定义版权",prop:"custom_copyright"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:l.value.custom_copyright,"onUpdate:modelValue":e[8]||(e[8]=t=>l.value.custom_copyright=t)},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"卡密模式开关",prop:"token_mode"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.token_mode,"onUpdate:modelValue":e[9]||(e[9]=t=>l.value.token_mode=t),size:"large"},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"卡网跳转链接",prop:"button_link"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:l.value.button_link,"onUpdate:modelValue":e[10]||(e[10]=t=>l.value.button_link=t)},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"显示登陆按钮",prop:"show_login_button"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.show_login_button,"onUpdate:modelValue":e[11]||(e[11]=t=>l.value.show_login_button=t),size:"large"},null,8,["modelValue"])]),_:1})],64)):Vue.createCommentVNode("",!0),d.Mode==="parse"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:1},[Vue.createVNode(o,{label:"下载使用的 User_Agent",prop:"user_agent"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:l.value.user_agent,"onUpdate:modelValue":e[12]||(e[12]=t=>l.value.user_agent=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"批量解析时休眠时间（秒）",prop:"sleep"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:l.value.sleep,"onUpdate:modelValue":e[13]||(e[13]=t=>l.value.sleep=t)},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"批量解析时单次最大解析数量（个）",prop:"max_once"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:l.value.max_once,"onUpdate:modelValue":e[14]||(e[14]=t=>l.value.max_once=t)},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"单日单个账号最大解析大小（GB）",prop:"max_filesize"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:l.value.max_filesize,"onUpdate:modelValue":e[15]||(e[15]=t=>l.value.max_filesize=t),style:{width:"300px"}},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"可解析文件最小需要大小（GB）",prop:"max_filesize"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:l.value.min_single_file,"onUpdate:modelValue":e[16]||(e[16]=t=>l.value.min_single_file=t),style:{width:"300px"}},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"解析密码",prop:"password"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:l.value.password,"onUpdate:modelValue":e[17]||(e[17]=t=>l.value.password=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"购买授权联系TG:"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{disabled:"",value:"t.me/huan_kong"})]),_:1}),Vue.createVNode(o,{label:"授权服务器",prop:"main_server"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:l.value.main_server,"onUpdate:modelValue":e[18]||(e[18]=t=>l.value.main_server=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"授权码",prop:"code"},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:l.value.code,"onUpdate:modelValue":e[19]||(e[19]=t=>l.value.code=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"解析模式",prop:"parse_mode"},{default:Vue.withCtx(()=>[Vue.createVNode(N,{modelValue:l.value.parse_mode,"onUpdate:modelValue":e[20]||(e[20]=t=>l.value.parse_mode=t),onChange:_},{default:Vue.withCtx(()=>[Vue.createVNode(V,{value:1,label:"V1盘内(废弃)",disabled:""}),Vue.createVNode(V,{value:2,label:"V2盘外"}),Vue.createVNode(V,{value:3,label:"V3盘外"}),Vue.createVNode(V,{value:4,label:"V4盘外"})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"省份模式开关",prop:"limit_prov"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.limit_prov,"onUpdate:modelValue":e[21]||(e[21]=t=>l.value.limit_prov=t),size:"large"},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"仅限中国用户使用",prop:"limit_cn"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.limit_cn,"onUpdate:modelValue":e[22]||(e[22]=t=>l.value.limit_cn=t),size:"large"},null,8,["modelValue"])]),_:1}),Vue.createVNode(o,{label:"卡密绑定ip",prop:"token_bind_ip"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:l.value.token_bind_ip,"onUpdate:modelValue":e[23]||(e[23]=t=>l.value.token_bind_ip=t),size:"large"},null,8,["modelValue"])]),_:1})],64)):Vue.createCommentVNode("",!0),Vue.createVNode(o,{label:" "},{default:Vue.withCtx(()=>[Vue.createVNode(v,{type:"primary",onClick:e[24]||(e[24]=t=>g(m.value))},{default:Vue.withCtx(()=>[Vue.createTextVNode("保存")]),_:1}),d.Mode==="parse"?(Vue.openBlock(),Vue.createBlock(v,{key:0,type:"primary",onClick:e[25]||(e[25]=t=>c(m.value))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 测试授权 ")]),_:1})):Vue.createCommentVNode("",!0)]),_:1})]),_:1},8,["model"])),[[b,r.value]])}}});export{h as default};
