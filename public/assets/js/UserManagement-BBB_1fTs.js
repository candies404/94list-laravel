import{b as T,_ as W,$ as h,r as v,f as y,c as w,n as a,l,x as _,w as c,k as L,F as N,X as K,E as M,y as G,z as ee,Y as X,Z as Y,B as le,A as Z,K as ae,v as j,o as te,q as x,t as z,a0 as V,C as R,N as se,P as oe,a1 as ne}from"./.pnpm-CM6hScpc.js";import{i as D}from"./index-waDZgT28.js";import{r as ue}from"./registerkeyDown-BdEXfbVb.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";const re=u=>D.post("/admin/user",u),ie=u=>D.get(`/admin/user?page=${u.page}&size=${u.size}`),pe=u=>D.patch(`/admin/user/${u.id}`,u),me=u=>D.delete("/admin/user",{data:{user_ids:[u.id]}}),ce=u=>D.delete("/admin/user/switch",{data:{user_ids:u}}),_e=T({__name:"AddUser",props:{modelValue:{},modelModifiers:{}},emits:W(["getUsers"],["update:modelValue"]),setup(u,{emit:m}){const k=m,b=h(u,"modelValue"),f=v(!1),d=v({username:"",password:"",role:"user",group_id:void 0}),p=v(null),F={username:[{required:!0,message:"请输入账户用户名",trigger:"blur"}],password:[{required:!0,message:"请输入账户密码",trigger:"blur"}]},S=async C=>{if(!(!C||!await C.validate()))try{f.value=!0,await re(d.value),M.success("添加成功")}finally{f.value=!1}},I=C=>{k("getUsers"),C()},B=()=>{b.value=!1,k("getUsers")};return ue("Enter",()=>S(p.value)),(C,o)=>{const g=G,$=ee,t=X,n=Y,U=le,i=Z,E=ae,A=j;return y(),w(E,{title:"添加用户",width:"60%",modelValue:b.value,"onUpdate:modelValue":o[6]||(o[6]=s=>b.value=s),"before-close":I},{footer:a(()=>[l(i,{type:"info",onClick:o[4]||(o[4]=s=>B())},{default:a(()=>[_("取消")]),_:1}),l(i,{type:"primary",onClick:o[5]||(o[5]=s=>S(p.value))},{default:a(()=>[_("添加")]),_:1})]),default:a(()=>[c((y(),w(U,{ref_key:"addUserFormRef",ref:p,model:d.value,rules:F,"label-width":"auto"},{default:a(()=>[l($,{label:"用户名",prop:"username"},{default:a(()=>[l(g,{modelValue:d.value.username,"onUpdate:modelValue":o[0]||(o[0]=s=>d.value.username=s)},null,8,["modelValue"])]),_:1}),l($,{label:"密码",prop:"password"},{default:a(()=>[l(g,{modelValue:d.value.password,"onUpdate:modelValue":o[1]||(o[1]=s=>d.value.password=s)},null,8,["modelValue"])]),_:1}),l($,{label:"权限",prop:"role"},{default:a(()=>[l(n,{modelValue:d.value.role,"onUpdate:modelValue":o[2]||(o[2]=s=>d.value.role=s)},{default:a(()=>[(y(),L(N,null,K(["user","admin"],s=>l(t,{key:s,label:s,value:s},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l($,{label:"用户组ID",prop:"group_id"},{default:a(()=>[l(g,{modelValue:d.value.group_id,"onUpdate:modelValue":o[3]||(o[3]=s=>d.value.group_id=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[A,f.value]])]),_:1},8,["modelValue"])}}}),ve=T({__name:"UserManagement",setup(u){const m=v(!1),k=v(15),b=v(1),f=v(),d=v([]),p=async()=>{try{m.value=!0;const t=await ie({page:b.value,size:k.value});f.value=t.data}finally{m.value=!1}},F=async t=>{t.edit=!(t.edit??!1)},S=async t=>{t.edit=!(t.edit??!0),await I(t)},I=async t=>{try{m.value=!0,await pe(t),M.success("修改用户成功")}finally{m.value=!1,await p()}},B=async t=>{try{m.value=!0,await me(t),M.success("删除用户成功")}finally{m.value=!1,await p()}},C=async()=>{try{m.value=!0;const t=d.value.map(n=>n.id);await ce(t),M.success("批量删除用户成功")}finally{m.value=!1,await p()}},o=t=>d.value=t;te(p);const g=v(!1),$=()=>g.value=!g.value;return(t,n)=>{var P,q,O;const U=Z,i=se,E=G,A=X,s=Y,H=oe,J=ne,Q=j;return y(),L(N,null,[l(_e,{onGetUsers:p,modelValue:g.value,"onUpdate:modelValue":n[0]||(n[0]=e=>g.value=e)},null,8,["modelValue"]),l(U,{type:"primary",onClick:n[1]||(n[1]=e=>p())},{default:a(()=>[_("刷新列表")]),_:1}),l(U,{type:"primary",onClick:n[2]||(n[2]=e=>$())},{default:a(()=>[_("添加用户")]),_:1}),l(U,{type:"danger",disabled:d.value.length<=0,onClick:n[3]||(n[3]=e=>C())},{default:a(()=>[_(" 批量删除 ")]),_:1},8,["disabled"]),c((y(),w(H,{data:((P=f.value)==null?void 0:P.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:o},{default:a(()=>[l(i,{type:"selection",width:"40"}),l(i,{prop:"id",label:"ID"}),l(i,{prop:"group_id",label:"用户组ID"},{default:a(({row:e})=>[c(x("span",null,z(e.group_id),513),[[V,!e.edit]]),c(l(E,{modelValue:e.group_id,"onUpdate:modelValue":r=>e.group_id=r},null,8,["modelValue","onUpdate:modelValue"]),[[V,e.edit]])]),_:1}),l(i,{prop:"inv_code_id",label:"邀请码ID"}),l(i,{prop:"username",label:"用户名"},{default:a(({row:e})=>[c(x("span",null,z(e.username),513),[[V,!e.edit]]),c(l(E,{modelValue:e.username,"onUpdate:modelValue":r=>e.username=r},null,8,["modelValue","onUpdate:modelValue"]),[[V,e.edit]])]),_:1}),l(i,{prop:"password",label:"密码"},{default:a(({row:e})=>[c(x("span",null,z(e.password),513),[[V,!e.edit]]),c(l(E,{modelValue:e.password,"onUpdate:modelValue":r=>e.password=r},null,8,["modelValue","onUpdate:modelValue"]),[[V,e.edit]])]),_:1}),l(i,{prop:"role",label:"权限"},{default:a(({row:e})=>[c(x("span",null,z(e.role),513),[[V,!e.edit]]),c(l(s,{modelValue:e.role,"onUpdate:modelValue":r=>e.role=r},{default:a(()=>[(y(),L(N,null,K(["user","admin"],r=>l(A,{key:r,label:r,value:r},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),[[V,e.edit]])]),_:1}),l(i,{prop:"created_at",label:"创建时间"},{default:a(({row:e})=>[_(z(new Date(e.created_at).toLocaleString()),1)]),_:1}),l(i,{prop:"updated_at",label:"更新时间"},{default:a(({row:e})=>[_(z(new Date(e.updated_at).toLocaleString()),1)]),_:1}),l(i,{width:"150",label:"操作",fixed:"right"},{default:a(({row:e})=>[e.edit?R("",!0):(y(),w(U,{key:0,size:"small",type:"primary",onClick:r=>F(e)},{default:a(()=>[_(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(y(),w(U,{key:1,size:"small",type:"primary",onClick:r=>S(e)},{default:a(()=>[_(" 保存 ")]),_:2},1032,["onClick"])):R("",!0),l(U,{size:"small",type:"danger",onClick:r=>B(e)},{default:a(()=>[_("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Q,m.value]]),l(J,{"current-page":b.value,"onUpdate:currentPage":n[4]||(n[4]=e=>b.value=e),"page-size":k.value,"onUpdate:pageSize":n[5]||(n[5]=e=>k.value=e),"page-sizes":[15,50,100,500,((q=f.value)==null?void 0:q.total)??100],total:((O=f.value)==null?void 0:O.total)??100,layout:"sizes, prev, pager, next",onSizeChange:p,onCurrentChange:p},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),ye=de(ve,[["__scopeId","data-v-8e830990"]]);export{ye as default};
