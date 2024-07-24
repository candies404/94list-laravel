import{b as N,r as g,o as j,e as E,j as J,k as e,m as l,x as r,t as d,u as x,w as O,c as q,q as G,F as H,E as w,A as K,G as Q,I as W,J as X,S as Y,U as Z,a1 as ee,v as te}from"./.pnpm-fc_Lr1wI.js";import{i as v}from"./index-CtYSmbnK.js";import{f as k}from"./format-DaCfCw6f.js";import{u as ae}from"./changeConfigForm-DIO7pT37.js";import{c as oe}from"./copy-08SGvsTk.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ne=c=>v.get(`/admin/record?page=${c.page}&size=${c.size}&orderBy=${c.orderBy}`),re=()=>v.get("/admin/record/count"),se=c=>v.delete("/admin/record",{data:{record_ids:[c.id]}}),ie=c=>v.delete("/admin/record",{data:{record_ids:c}}),de=N({__name:"RecordManagement",setup(c){const s=g(!1),y=g(15),b=g(1),C=g("id"),m=g(),z=g([]),f=g({today:{count:0,size:0},total:{count:0,size:0}}),u=async()=>{try{s.value=!0;const o=await ne({page:b.value,size:y.value,orderBy:C.value});m.value=o.data}finally{s.value=!1,await B()}},B=async()=>{try{s.value=!0;const o=await re();f.value=o.data}finally{s.value=!1}},D=async o=>{try{s.value=!0,await se(o),w.success("删除记录成功")}finally{s.value=!1,await u()}},$=async()=>{try{s.value=!0;const o=z.value.map(t=>t.id);await ie(o),w.success("删除记录成功")}finally{s.value=!1,await u()}},I=o=>z.value=o;j(u);function F(o){return o.map(t=>t.toString(16).padStart(2,"0")).join("")}function L(o,t){const i=t.length,_=[];for(let p=0;p<o.length;p++)_.push(o.charCodeAt(p)^t.charCodeAt(p%i));return F(_)}const V=o=>{const t=ae(),i=t.changeConfigForm.proxy_server;if(!i)return w.warning("未配置代理服务器");oe(i+"?data="+L(JSON.stringify({url:o.url,ua:o.ua}),t.changeConfigForm.proxy_password))};return(o,t)=>{var h,S,R;const i=K,_=Q,p=W,P=X,n=Y,T=Z,U=ee,A=te;return E(),J(H,null,[e(i,{type:"primary",onClick:t[0]||(t[0]=a=>u())},{default:l(()=>[r("刷新列表")]),_:1}),e(i,{type:"danger",disabled:z.value.length<=0,onClick:t[1]||(t[1]=a=>$())},{default:l(()=>[r(" 批量删除 ")]),_:1},8,["disabled"]),e(_,{style:{"margin-left":"20px"}},{default:l(()=>[r(" 累计解析: "+d(f.value.total.count)+" ("+d(x(k)(f.value.total.size??0))+") ",1)]),_:1}),e(_,null,{default:l(()=>[r(" 今日解析: "+d(f.value.today.count)+" ("+d(x(k)(f.value.today.size??0))+") ",1)]),_:1}),e(_,{style:{"margin-left":"20px"}},{default:l(()=>[r(" 按照 "),e(P,{modelValue:C.value,"onUpdate:modelValue":t[2]||(t[2]=a=>C.value=a),onChange:u,style:{width:"100px"}},{default:l(()=>[e(p,{key:"id",label:"时间",value:"id"}),e(p,{key:"size",label:"文件大小",value:"size"})]),_:1},8,["modelValue"]),r(" 排序 ")]),_:1}),O((E(),q(T,{data:((h=m.value)==null?void 0:h.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:I},{default:l(()=>[e(n,{type:"selection",width:"40"}),e(n,{prop:"id",label:"ID"}),e(n,{prop:"ip",label:"IP"}),e(n,{prop:"fs_id",label:"文件ID"}),e(n,{prop:"file.filename",label:"文件名"}),e(n,{prop:"fs_id",label:"文件大小"},{default:l(({row:a})=>[G("span",null,d(x(k)(a.file.size)),1)]),_:1}),e(n,{prop:"url",label:"下载链接"}),e(n,{prop:"ua",label:"UA"}),e(n,{prop:"user_id",label:"用户ID"},{default:l(({row:a})=>[r(d(a.user_id??"非用戶解析"),1)]),_:1}),e(n,{prop:"token_id",label:"卡密ID"},{default:l(({row:a})=>[r(d(a.token_id??"非卡密解析"),1)]),_:1}),e(n,{prop:"account_id",label:"解析账号ID"}),e(n,{prop:"created_at",label:"创建时间"},{default:l(({row:a})=>[r(d(new Date(a.created_at).toLocaleString()),1)]),_:1}),e(n,{prop:"updated_at",label:"更新时间"},{default:l(({row:a})=>[r(d(new Date(a.updated_at).toLocaleString()),1)]),_:1}),e(n,{width:"220",label:"操作",fixed:"right"},{default:l(({row:a})=>[e(i,{size:"small",type:"primary",onClick:M=>V(a)},{default:l(()=>[r(" 获取代理服务器链接 ")]),_:2},1032,["onClick"]),e(i,{size:"small",type:"danger",onClick:M=>D(a)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[A,s.value]]),e(U,{"current-page":b.value,"onUpdate:currentPage":t[3]||(t[3]=a=>b.value=a),"page-size":y.value,"onUpdate:pageSize":t[4]||(t[4]=a=>y.value=a),"page-sizes":[15,50,100,500,((S=m.value)==null?void 0:S.total)??100],total:((R=m.value)==null?void 0:R.total)??100,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),me=le(de,[["__scopeId","data-v-f57bd9b1"]]);export{me as default};
