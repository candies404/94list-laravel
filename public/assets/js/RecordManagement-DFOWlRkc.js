import"./base-DzfnSdGl.js";import{v as x}from"./el-loading-Dqc-yn7H.js";import{E as I}from"./el-pagination-DwvF7Wex.js";import"./el-input-BEQYXOrs.js";import"./el-tag-CUh0AjBU.js";import"./el-select-CZZ_1tAL.js";import{E as $,a as h}from"./el-table-column-BcnOE-AB.js";import{E as B}from"./el-button-DtYNY52B.js";import{aa as f,d as L,r as p,O as M,o as y,c as P,a as e,f as s,k as d,w as T,e as U,t as w,F,E as z}from"./index-niWMSR8p.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bbp7VP7R.js";import"./use-form-item-DsYTp4Yb.js";import"./focus-trap-CVuM4905.js";import"./AdminView-Cgf6NGdE.js";import"./el-card-D0AZMfBh.js";import"./user-Cd5hS_vJ.js";import"./vnode-CSQD_1u2.js";import"./scroll-DGkImYz_.js";const V=r=>f.get(`/admin/record?page=${r.page}&size=${r.size}`),A=r=>f.delete("/admin/record",{data:{record_ids:[r.id]}}),O=r=>f.delete("/admin/record",{data:{record_ids:r}}),j=L({__name:"RecordManagement",setup(r){const n=p(!1),c=p(15),u=p(1),m=p(),_=p([]),i=async()=>{try{n.value=!0;const l=await V({page:u.value,size:c.value});m.value=l.data}finally{n.value=!1}},C=async l=>{try{n.value=!0,await A(l),z.success("删除记录成功")}finally{n.value=!1,await i()}},R=async()=>{try{n.value=!0;const l=_.value.map(o=>o.id);await O(l),z.success("删除记录成功")}finally{n.value=!1,await i()}},k=l=>_.value=l;return M(i),(l,o)=>{var v,b;const g=B,a=$,E=h,D=I,S=x;return y(),P(F,null,[e(g,{type:"primary",onClick:o[0]||(o[0]=t=>i())},{default:s(()=>[d("刷新列表")]),_:1}),e(g,{type:"danger",disabled:_.value.length<=0,onClick:o[1]||(o[1]=t=>R())},{default:s(()=>[d(" 批量删除 ")]),_:1},8,["disabled"]),T((y(),U(E,{data:((v=m.value)==null?void 0:v.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:k},{default:s(()=>[e(a,{type:"selection",width:"40"}),e(a,{prop:"id",label:"ID"}),e(a,{prop:"ip",label:"IP"}),e(a,{prop:"fs_id",label:"文件ID"}),e(a,{prop:"filename",label:"文件名"}),e(a,{prop:"size",label:"文件大小"}),e(a,{prop:"url",label:"下载链接"}),e(a,{prop:"ua",label:"UA"}),e(a,{prop:"user_id",label:"用户ID"}),e(a,{prop:"normal_account_id",label:"dlink账号ID"}),e(a,{prop:"account_id",label:"reallink账号ID"}),e(a,{prop:"created_at",label:"创建时间"},{default:s(({row:t})=>[d(w(new Date(t.created_at).toLocaleString()),1)]),_:1}),e(a,{prop:"updated_at",label:"更新时间"},{default:s(({row:t})=>[d(w(new Date(t.updated_at).toLocaleString()),1)]),_:1}),e(a,{width:"150",label:"操作",fixed:"right"},{default:s(({row:t})=>[e(g,{size:"small",type:"danger",onClick:q=>C(t)},{default:s(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[S,n.value]]),e(D,{"current-page":u.value,"onUpdate:currentPage":o[2]||(o[2]=t=>u.value=t),"page-size":c.value,"onUpdate:pageSize":o[3]||(o[3]=t=>c.value=t),"page-sizes":[15,30,50,100],total:((b=m.value)==null?void 0:b.total)??100,layout:"sizes, prev, pager, next",onSizeChange:i,onCurrentChange:i},null,8,["current-page","page-size","total"])],64)}}}),pe=N(j,[["__scopeId","data-v-5e2bbb46"]]);export{pe as default};
