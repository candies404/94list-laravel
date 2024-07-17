import{i as r}from"./index-BrFEbl1v.js";import{f as S}from"./format-DaCfCw6f.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css              */const F=o=>r.post("/admin/account",o),L=o=>r.get(`/admin/account?page=${o.page}&size=${o.size}`),I=o=>r.patch(`/admin/account/${o.id}`,o),R=o=>r.patch("/admin/account/info",{account_ids:[o.id]}),j=o=>r.patch("/admin/account/info",{account_ids:o}),q=o=>r.delete("/admin/account",{data:{account_ids:[o.id]}}),G=o=>r.delete("/admin/account",{data:{account_ids:o}}),$=o=>r.patch("/admin/account/switch",{account_ids:[o.account.id],switch:o.switch}),z=o=>r.patch("/admin/account/switch",o),H=Vue.defineComponent({__name:"AddAccount",props:{modelValue:{},modelModifiers:{}},emits:Vue.mergeModels(["getAccounts"],["update:modelValue"]),setup(o,{emit:l}){const v=l,p=Vue.useModel(o,"modelValue"),V=Vue.ref(!1),c=Vue.ref({cookie:""}),u=Vue.ref(null),g={cookie:[{required:!0,message:"请输入Cookie",trigger:"blur"}]},k=async m=>{if(!(!m||!await m.validate()))try{V.value=!0,(await F({cookie:c.value.cookie.split(`
`)})).data.have_repeat&&ElementPlus.ElMessage.info("存在重复的cookie,已自动过滤"),ElementPlus.ElMessage.success("添加成功")}finally{V.value=!1}},w=m=>{v("getAccounts"),m()},x=()=>{p.value=!1,v("getAccounts")};return(m,i)=>{const N=Vue.resolveComponent("el-text"),_=Vue.resolveComponent("el-form-item"),h=Vue.resolveComponent("el-input"),f=Vue.resolveComponent("el-form"),y=Vue.resolveComponent("el-button"),C=Vue.resolveComponent("el-dialog"),a=Vue.resolveDirective("loading");return Vue.openBlock(),Vue.createBlock(C,{title:"添加账号",width:"60%",modelValue:p.value,"onUpdate:modelValue":i[3]||(i[3]=t=>p.value=t),"before-close":w},{footer:Vue.withCtx(()=>[Vue.createVNode(y,{type:"info",onClick:i[1]||(i[1]=t=>x())},{default:Vue.withCtx(()=>[Vue.createTextVNode("取消")]),_:1}),Vue.createVNode(y,{type:"primary",onClick:i[2]||(i[2]=t=>k(u.value))},{default:Vue.withCtx(()=>[Vue.createTextVNode("添加")]),_:1})]),default:Vue.withCtx(()=>[Vue.withDirectives((Vue.openBlock(),Vue.createBlock(f,{ref_key:"addAccountFormRef",ref:u,model:c.value,rules:g,"label-width":"auto"},{default:Vue.withCtx(()=>[Vue.createVNode(_,{label:"提示"},{default:Vue.withCtx(()=>[Vue.createVNode(N,null,{default:Vue.withCtx(()=>[Vue.createTextVNode("可以使用换行来分割多个账号")]),_:1})]),_:1}),Vue.createVNode(_,{label:"Cookie",prop:"cookie"},{default:Vue.withCtx(()=>[Vue.createVNode(h,{type:"textarea",modelValue:c.value.cookie,"onUpdate:modelValue":i[0]||(i[0]=t=>c.value.cookie=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[a,V.value]])]),_:1},8,["modelValue"])}}}),J={key:0},K=Vue.defineComponent({__name:"AccountManagement",setup(o){const l=Vue.ref(!1),v=Vue.ref(15),p=Vue.ref(1),V=Vue.ref(),c=Vue.ref([]),u=async()=>{try{l.value=!0;const a=await L({page:p.value,size:v.value});V.value=a.data}finally{l.value=!1}},g=async a=>{try{l.value=!0,await R(a),ElementPlus.ElMessage.success("更新账户信息成功")}finally{l.value=!1,await u()}},k=async()=>{try{l.value=!0;const a=c.value.map(t=>t.id);await j(a),ElementPlus.ElMessage.success("批量更新账户成功")}finally{l.value=!1,await u()}},w=async a=>{try{l.value=!0,await q(a),ElementPlus.ElMessage.success("删除账户成功")}finally{l.value=!1,await u()}},x=async()=>{try{l.value=!0;const a=c.value.map(t=>t.id);await G(a),ElementPlus.ElMessage.success("批量删除账户成功")}finally{l.value=!1,await u()}},m=async a=>{try{l.value=!0,await $({account:a,switch:1}),ElementPlus.ElMessage.success("启用账户成功")}finally{l.value=!1,await u()}},i=async a=>{try{l.value=!0,await $({account:a,switch:0}),ElementPlus.ElMessage.success("禁用账户成功")}finally{l.value=!1,await u()}},N=async()=>{try{l.value=!0;const a=c.value.map(t=>t.id);await z({account_ids:a,switch:1}),ElementPlus.ElMessage.success("批量启用账户成功")}finally{l.value=!1,await u()}},_=async()=>{try{l.value=!0;const a=c.value.map(t=>t.id);await z({account_ids:a,switch:0}),ElementPlus.ElMessage.success("批量禁用账户成功")}finally{l.value=!1,await u()}},h=a=>c.value=a;Vue.onMounted(u);const f=Vue.ref(!1),y=()=>f.value=!f.value,C=async a=>{if(a.edit=!a.edit,a.edit===!1)try{l.value=!0,await I(a),ElementPlus.ElMessage.success("修改賬號成功")}finally{l.value=!1,await u()}};return(a,t)=>{var A,E,B;const s=Vue.resolveComponent("el-button"),n=Vue.resolveComponent("el-table-column"),b=Vue.resolveComponent("el-option"),T=Vue.resolveComponent("el-select"),D=Vue.resolveComponent("el-table"),M=Vue.resolveComponent("el-pagination"),P=Vue.resolveDirective("loading");return Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createVNode(H,{onGetAccounts:u,modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value=e)},null,8,["modelValue"]),Vue.createVNode(s,{type:"primary",onClick:t[1]||(t[1]=e=>u())},{default:Vue.withCtx(()=>[Vue.createTextVNode("刷新列表")]),_:1}),Vue.createVNode(s,{type:"primary",onClick:t[2]||(t[2]=e=>y())},{default:Vue.withCtx(()=>[Vue.createTextVNode("添加账号")]),_:1}),Vue.createVNode(s,{type:"primary",disabled:c.value.length<=0,onClick:t[3]||(t[3]=e=>k())},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 批量更新信息 ")]),_:1},8,["disabled"]),Vue.createVNode(s,{type:"primary",disabled:c.value.length<=0,onClick:t[4]||(t[4]=e=>N())},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 批量启用 ")]),_:1},8,["disabled"]),Vue.createVNode(s,{type:"primary",disabled:c.value.length<=0,onClick:t[5]||(t[5]=e=>_())},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 批量禁用 ")]),_:1},8,["disabled"]),Vue.createVNode(s,{type:"danger",disabled:c.value.length<=0,onClick:t[6]||(t[6]=e=>x())},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 批量删除 ")]),_:1},8,["disabled"]),Vue.withDirectives((Vue.openBlock(),Vue.createBlock(D,{data:((A=V.value)==null?void 0:A.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:h},{default:Vue.withCtx(()=>[Vue.createVNode(n,{type:"selection",width:"40"}),Vue.createVNode(n,{prop:"id",label:"ID"}),Vue.createVNode(n,{prop:"baidu_name",label:"百度用户名"}),Vue.createVNode(n,{prop:"today_size",label:"今日解析"},{default:Vue.withCtx(({row:e})=>[Vue.createElementVNode("span",null,Vue.toDisplayString(e.today_count)+" ("+Vue.toDisplayString(Vue.unref(S)(e.today_size??0))+")",1)]),_:1}),Vue.createVNode(n,{prop:"today_size",label:"縂共解析"},{default:Vue.withCtx(({row:e})=>[Vue.createElementVNode("span",null,Vue.toDisplayString(e.total_count)+" ("+Vue.toDisplayString(Vue.unref(S)(e.total_size??0))+")",1)]),_:1}),Vue.createVNode(n,{prop:"cookie",label:"Cookie"}),Vue.createVNode(n,{prop:"vip_type",label:"会员类型"}),Vue.createVNode(n,{prop:"switch",label:"状态"},{default:Vue.withCtx(({row:e})=>[Vue.createElementVNode("span",null,Vue.toDisplayString(e.switch?"启用":"禁用"),1)]),_:1}),Vue.createVNode(n,{prop:"prov",label:"省份"},{default:Vue.withCtx(({row:e})=>[e.edit?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("span",J,Vue.toDisplayString(e.prov??"未使用"),1)),e.edit?(Vue.openBlock(),Vue.createBlock(T,{key:1,modelValue:e.prov,"onUpdate:modelValue":d=>e.prov=d},{default:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createBlock(b,{key:null,value:null},{default:Vue.withCtx(()=>[Vue.createTextVNode("未使用")]),_:1})),(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(["北京市","天津市","上海市","重庆市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区","澳门特别行政区","台湾省"],d=>Vue.createVNode(b,{key:d,label:d,value:d},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"])):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(n,{prop:"reason",label:"禁用原因"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(e.reason??"未禁用"),1)]),_:1}),Vue.createVNode(n,{prop:"svip_end_at",label:"超级会员结束时间"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(new Date(e.svip_end_at).toLocaleString()),1)]),_:1}),Vue.createVNode(n,{prop:"last_use_at",label:"上次使用时间"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(new Date(e.last_use_at).toLocaleString()),1)]),_:1}),Vue.createVNode(n,{prop:"created_at",label:"创建时间"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(new Date(e.created_at).toLocaleString()),1)]),_:1}),Vue.createVNode(n,{prop:"updated_at",label:"更新时间"},{default:Vue.withCtx(({row:e})=>[Vue.createTextVNode(Vue.toDisplayString(new Date(e.updated_at).toLocaleString()),1)]),_:1}),Vue.createVNode(n,{width:"300",label:"操作",fixed:"right"},{default:Vue.withCtx(({row:e})=>[Vue.createVNode(s,{size:"small",type:"primary",onClick:d=>g(e)},{default:Vue.withCtx(()=>[Vue.createTextVNode("更新信息")]),_:2},1032,["onClick"]),e.switch===0?(Vue.openBlock(),Vue.createBlock(s,{key:0,size:"small",type:"primary",onClick:d=>m(e)},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 启用 ")]),_:2},1032,["onClick"])):(Vue.openBlock(),Vue.createBlock(s,{key:1,size:"small",type:"primary",onClick:d=>i(e)},{default:Vue.withCtx(()=>[Vue.createTextVNode("禁用")]),_:2},1032,["onClick"])),e.edit?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createBlock(s,{key:2,size:"small",type:"primary",onClick:d=>C(e)},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 編輯 ")]),_:2},1032,["onClick"])),e.edit?(Vue.openBlock(),Vue.createBlock(s,{key:3,size:"small",type:"primary",onClick:d=>C(e)},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 完成 ")]),_:2},1032,["onClick"])):Vue.createCommentVNode("",!0),Vue.createVNode(s,{size:"small",type:"danger",onClick:d=>w(e)},{default:Vue.withCtx(()=>[Vue.createTextVNode("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[P,l.value]]),Vue.createVNode(M,{"current-page":p.value,"onUpdate:currentPage":t[7]||(t[7]=e=>p.value=e),"page-size":v.value,"onUpdate:pageSize":t[8]||(t[8]=e=>v.value=e),"page-sizes":[15,50,100,500,((E=V.value)==null?void 0:E.total)??100],total:((B=V.value)==null?void 0:B.total)??100,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),Y=U(K,[["__scopeId","data-v-0ecc5cdc"]]);export{Y as default};