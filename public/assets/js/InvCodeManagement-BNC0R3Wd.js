import{b as T,_ as j,$ as H,r as v,f as g,c as I,n as l,l as a,x as _,w as m,k as w,F as K,X as J,E as M,Y as Q,Z as h,z as ee,W as G,y as W,B as ae,A as X,K as le,v as Y,o as te,q as x,t as E,a0 as C,C as O,N as ne,P as oe,a1 as de}from"./.pnpm-CM6hScpc.js";import{i as z}from"./index-waDZgT28.js";import{r as ue}from"./registerkeyDown-BdEXfbVb.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ie=s=>z.post("/admin/inv_code",s),pe=s=>z.post("/admin/inv_code/generate",s),re=s=>z.get(`/admin/inv_code?page=${s.page}&size=${s.size}`),ce=s=>z.patch(`/admin/inv_code/${s.id}`,s),me=s=>z.delete("/admin/inv_code",{data:{inv_code_ids:[s.id]}}),_e=s=>z.delete("/admin/inv_code",{data:{inv_code_ids:s}}),ve=T({__name:"AddInvCode",props:{modelValue:{},modelModifiers:{}},emits:j(["getInvCodes"],["update:modelValue"]),setup(s,{emit:p}){const k=p,V=H(s,"modelValue"),f=v(!1),t=v({type:"single",group_id:0,name:"",can_count:10}),i=v(null),F={group_id:[{required:!0,message:"请输入邀请码用户组ID",trigger:"blur"}],name:[{required:!0,message:"请输入邀请码名称",trigger:"blur"}],can_count:[{required:!0,message:"请输入可注册次数",trigger:"blur"}],count:[{required:!0,message:"请输入邀请码个数",trigger:"blur"}]},S=async b=>{if(!(!b||!await b.validate()))try{f.value=!0,t.value.type==="single"?await ie({type:"single",name:t.value.name,can_count:t.value.can_count,group_id:t.value.group_id}):await pe({type:"random",count:t.value.count,can_count:t.value.can_count,group_id:t.value.group_id}),M.success("添加成功")}finally{f.value=!1}},B=b=>{k("getInvCodes"),b()},N=()=>{V.value=!1,k("getInvCodes")};return ue("Enter",()=>S(i.value)),(b,d)=>{const U=Q,q=h,n=ee,u=G,y=W,r=ae,D=X,$=le,A=Y;return g(),I($,{title:"添加邀请码",width:"60%",modelValue:V.value,"onUpdate:modelValue":d[7]||(d[7]=o=>V.value=o),"before-close":B},{footer:l(()=>[a(D,{type:"info",onClick:d[5]||(d[5]=o=>N())},{default:l(()=>[_("取消")]),_:1}),a(D,{type:"primary",onClick:d[6]||(d[6]=o=>S(i.value))},{default:l(()=>[_("添加")]),_:1})]),default:l(()=>[m((g(),I(r,{ref_key:"addInvCodeFormRef",ref:i,model:t.value,rules:F,"label-width":"auto"},{default:l(()=>[a(n,{label:"创建方式",prop:"type"},{default:l(()=>[a(q,{modelValue:t.value.type,"onUpdate:modelValue":d[0]||(d[0]=o=>t.value.type=o)},{default:l(()=>[(g(),w(K,null,J(["single","random"],o=>a(U,{key:o,label:o,value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"可用次数",prop:"can_count"},{default:l(()=>[a(u,{modelValue:t.value.can_count,"onUpdate:modelValue":d[1]||(d[1]=o=>t.value.can_count=o)},null,8,["modelValue"])]),_:1}),a(n,{label:"用户组ID",prop:"group_id"},{default:l(()=>[a(u,{modelValue:t.value.group_id,"onUpdate:modelValue":d[2]||(d[2]=o=>t.value.group_id=o)},null,8,["modelValue"])]),_:1}),t.value.type==="single"?(g(),I(n,{key:0,label:"邀请码名称",prop:"name"},{default:l(()=>[a(y,{modelValue:t.value.name,"onUpdate:modelValue":d[3]||(d[3]=o=>t.value.name=o)},null,8,["modelValue"])]),_:1})):(g(),I(n,{key:1,label:"邀请码个数",prop:"count"},{default:l(()=>[a(u,{modelValue:t.value.count,"onUpdate:modelValue":d[4]||(d[4]=o=>t.value.count=o)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])),[[A,f.value]])]),_:1},8,["modelValue"])}}}),ge=T({__name:"InvCodeManagement",setup(s){const p=v(!1),k=v(15),V=v(1),f=v(),t=v([]),i=async()=>{try{p.value=!0;const n=await re({page:V.value,size:k.value});f.value=n.data}finally{p.value=!1}},F=async n=>{n.edit=!(n.edit??!1)},S=async n=>{n.edit=!(n.edit??!0),await B(n)},B=async n=>{try{p.value=!0,await ce(n),M.success("修改邀请码成功")}finally{p.value=!1,await i()}},N=async n=>{try{p.value=!0,await me(n),M.success("删除邀请码成功")}finally{p.value=!1,await i()}},b=async()=>{try{p.value=!0;const n=t.value.map(u=>u.id);await _e(n),M.success("删除邀请码成功")}finally{p.value=!1,await i()}},d=n=>t.value=n;te(i);const U=v(!1),q=()=>U.value=!U.value;return(n,u)=>{var L,P,R;const y=X,r=ne,D=W,$=G,A=oe,o=de,Z=Y;return g(),w(K,null,[a(ve,{onGetInvCodes:i,modelValue:U.value,"onUpdate:modelValue":u[0]||(u[0]=e=>U.value=e)},null,8,["modelValue"]),a(y,{type:"primary",onClick:u[1]||(u[1]=e=>i())},{default:l(()=>[_("刷新列表")]),_:1}),a(y,{type:"primary",onClick:u[2]||(u[2]=e=>q())},{default:l(()=>[_("添加邀请码")]),_:1}),a(y,{type:"danger",disabled:t.value.length<=0,onClick:u[3]||(u[3]=e=>b())},{default:l(()=>[_(" 批量删除 ")]),_:1},8,["disabled"]),m((g(),I(A,{data:((L=f.value)==null?void 0:L.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:d},{default:l(()=>[a(r,{type:"selection",width:"40"}),a(r,{prop:"id",label:"ID"}),a(r,{prop:"name",label:"邀请码名称"},{default:l(({row:e})=>[m(x("span",null,E(e.name),513),[[C,!e.edit]]),m(a(D,{modelValue:e.name,"onUpdate:modelValue":c=>e.name=c},null,8,["modelValue","onUpdate:modelValue"]),[[C,e.edit]])]),_:1}),a(r,{prop:"group_id",label:"用户组ID"},{default:l(({row:e})=>[m(x("span",null,E(e.group_id),513),[[C,!e.edit]]),m(a($,{modelValue:e.group_id,"onUpdate:modelValue":c=>e.group_id=c},null,8,["modelValue","onUpdate:modelValue"]),[[C,e.edit]])]),_:1}),a(r,{prop:"can_count",label:"可用次数"},{default:l(({row:e})=>[m(x("span",null,E(e.can_count),513),[[C,!e.edit]]),m(a($,{modelValue:e.can_count,"onUpdate:modelValue":c=>e.can_count=c},null,8,["modelValue","onUpdate:modelValue"]),[[C,e.edit]])]),_:1}),a(r,{prop:"use_count",label:"已使用次数"},{default:l(({row:e})=>[m(x("span",null,E(e.use_count),513),[[C,!e.edit]]),m(a($,{modelValue:e.use_count,"onUpdate:modelValue":c=>e.use_count=c},null,8,["modelValue","onUpdate:modelValue"]),[[C,e.edit]])]),_:1}),a(r,{prop:"created_at",label:"创建时间"},{default:l(({row:e})=>[_(E(new Date(e.created_at).toLocaleString()),1)]),_:1}),a(r,{prop:"updated_at",label:"更新时间"},{default:l(({row:e})=>[_(E(new Date(e.updated_at).toLocaleString()),1)]),_:1}),a(r,{width:"150",label:"操作",fixed:"right"},{default:l(({row:e})=>[e.edit?O("",!0):(g(),I(y,{key:0,size:"small",type:"primary",onClick:c=>F(e)},{default:l(()=>[_(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(g(),I(y,{key:1,size:"small",type:"primary",onClick:c=>S(e)},{default:l(()=>[_(" 保存 ")]),_:2},1032,["onClick"])):O("",!0),a(y,{size:"small",type:"danger",onClick:c=>N(e)},{default:l(()=>[_("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Z,p.value]]),a(o,{"current-page":V.value,"onUpdate:currentPage":u[4]||(u[4]=e=>V.value=e),"page-size":k.value,"onUpdate:pageSize":u[5]||(u[5]=e=>k.value=e),"page-sizes":[15,50,100,500,((P=f.value)==null?void 0:P.total)??100],total:((R=f.value)==null?void 0:R.total)??100,layout:"sizes, prev, pager, next",onSizeChange:i,onCurrentChange:i},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),be=se(ge,[["__scopeId","data-v-0175cb76"]]);export{be as default};
