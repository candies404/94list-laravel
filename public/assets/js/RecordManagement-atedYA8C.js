import{b as T,r as c,o as U,f as B,k as N,l as e,n as o,x as s,t as u,e as w,w as A,c as F,F as G,E as D,A as O,G as X,X as Y,Y as j,N as q,P as H,a1 as J,v as K}from"./.pnpm-CR973naf.js";import{i as g}from"./index-Bj8Fs600.js";import{f as C}from"./format-DaCfCw6f.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const W=d=>g.get(`/admin/record?page=${d.page}&size=${d.size}&orderBy=${d.orderBy}`),Z=()=>g.get("/admin/record/count"),ee=d=>g.delete("/admin/record",{data:{record_ids:[d.id]}}),ae=d=>g.delete("/admin/record",{data:{record_ids:d}}),te=T({__name:"RecordManagement",setup(d){const r=c(!1),v=c(15),f=c(1),m=c("id"),_=c(),y=c([]),p=c({today:{count:0,size:0},total:{count:0,size:0}}),i=async()=>{try{r.value=!0;const n=await W({page:f.value,size:v.value,orderBy:m.value});_.value=n.data}finally{r.value=!1,await S()}},S=async()=>{try{r.value=!0;const n=await Z();p.value=n.data}finally{r.value=!1}},$=async n=>{try{r.value=!0,await ee(n),D.success("删除记录成功")}finally{r.value=!1,await i()}},I=async()=>{try{r.value=!0;const n=y.value.map(l=>l.id);await ae(n),D.success("删除记录成功")}finally{r.value=!1,await i()}},P=n=>y.value=n;return U(i),(n,l)=>{var R,k,E;const b=O,z=X,x=Y,V=j,t=q,h=H,L=J,M=K;return B(),N(G,null,[e(b,{type:"primary",onClick:l[0]||(l[0]=a=>i())},{default:o(()=>[s("刷新列表")]),_:1}),e(b,{type:"danger",disabled:y.value.length<=0,onClick:l[1]||(l[1]=a=>I())},{default:o(()=>[s(" 批量删除 ")]),_:1},8,["disabled"]),e(z,{style:{"margin-left":"20px"}},{default:o(()=>[s(" 累计解析: "+u(p.value.total.count)+" ("+u(w(C)(p.value.total.size))+") ",1)]),_:1}),e(z,null,{default:o(()=>[s(" 今日解析: "+u(p.value.today.count)+" ("+u(w(C)(p.value.today.size))+") ",1)]),_:1}),e(z,{style:{"margin-left":"20px"}},{default:o(()=>[s(" 按照 "),e(V,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=a=>m.value=a),onChange:i,style:{width:"100px"}},{default:o(()=>[e(x,{key:"id",label:"时间",value:"id"}),e(x,{key:"size",label:"文件大小",value:"size"})]),_:1},8,["modelValue"]),s(" 排序 ")]),_:1}),A((B(),F(h,{data:((R=_.value)==null?void 0:R.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:P},{default:o(()=>[e(t,{type:"selection",width:"40"}),e(t,{prop:"id",label:"ID"}),e(t,{prop:"ip",label:"IP"}),e(t,{prop:"fs_id",label:"文件ID"}),e(t,{prop:"filename",label:"文件名"}),e(t,{prop:"size",label:"文件大小"},{default:o(({row:a})=>[s(u(w(C)(a.size)),1)]),_:1}),e(t,{prop:"url",label:"下载链接"}),e(t,{prop:"ua",label:"UA"}),e(t,{prop:"user_id",label:"用户ID"}),e(t,{prop:"normal_account_id",label:"dlink账号ID"}),e(t,{prop:"account_id",label:"reallink账号ID"}),e(t,{prop:"created_at",label:"创建时间"},{default:o(({row:a})=>[s(u(new Date(a.created_at).toLocaleString()),1)]),_:1}),e(t,{prop:"updated_at",label:"更新时间"},{default:o(({row:a})=>[s(u(new Date(a.updated_at).toLocaleString()),1)]),_:1}),e(t,{width:"150",label:"操作",fixed:"right"},{default:o(({row:a})=>[e(b,{size:"small",type:"danger",onClick:le=>$(a)},{default:o(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[M,r.value]]),e(L,{"current-page":f.value,"onUpdate:currentPage":l[3]||(l[3]=a=>f.value=a),"page-size":v.value,"onUpdate:pageSize":l[4]||(l[4]=a=>v.value=a),"page-sizes":[15,50,100,500,((k=_.value)==null?void 0:k.total)??100],total:((E=_.value)==null?void 0:E.total)??100,layout:"sizes, prev, pager, next",onSizeChange:i,onCurrentChange:i},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),de=Q(te,[["__scopeId","data-v-4e52336a"]]);export{de as default};