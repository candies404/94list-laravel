import{d as V,r as t,l as T,s as D,a as j,o as I,c as U,b as f,u as g,F as x,e as G,f as v,_}from"./index-42a788ad.js";import{d as M,a as N,b as z,c as B}from"./user-3d7773df.js";import{E as r}from"./request-fdc4c150.js";const q=V("UserPannel",()=>{const d=t({announce:"",announceSwitch:!1,debug:!1,haveAccount:!1,havePassword:!1,haveLogin:!1,userAgent:"",ishttps:document.location.protocol==="https",pending:!1}),m=async()=>{d.value.pending=!0;const e=await M()??"failed";d.value.pending=!1,e.toString()!=="failed"&&(Object.assign(d.value,{...e.data,announce:e.data.announce.replace(/\[NextLine\]/g,"<br>")}),D(e.data.haveLogin?"1":"0"))},a=t({url:"",pwd:"",password:"",dir:"/",bd_user_id:null,pending:!1}),p=t(null),l=t([]),o=t({randsk:"",shareid:0,uk:0,sign:"",timestamp:0}),u=t([]),w=t(null),F=async(e,s)=>{a.value.dir=e,await h(s)},k=()=>{const e=a.value.dir.split("/");e.pop();const s=e.join("/");return s===""?"/":s},h=async(e="0",s=!1)=>{const i=await N({url:a.value.url,pwd:a.value.pwd,dir:a.value.dir,password:a.value.password})??"failed";if(i.toString()==="failed")return;const{message:c,data:n}=i;return r.success(c),Object.assign(o.value,{randsk:n.randsk,shareid:n.shareid,uk:n.uk}),l.value=n.list,a.value.dir!==null&&a.value.dir!==""&&a.value.dir!=="/"?l.value=[{isdir:"1",path:k(),server_filename:"..",size:"0",server_mtime:s?l.value[0].server_mtime:e},...n.list]:l.value=n.list,"success"},L=async()=>{const e=await z({uk:o.value.uk,shareid:o.value.shareid,password:a.value.password})??"failed";if(e.toString()==="failed")return;const{message:s,data:i}=e;r.success(s),Object.assign(o.value,i)},b=async e=>{const s=await B({fs_ids:Array.isArray(e)?e:[e],...o.value,password:a.value.password,bd_user_id:a.value.bd_user_id}).catch(async c=>{const{message:n}=c;n.includes("当前签名已过期")?(r.error(n),r.info("自动重新获取中..."),await P(p.value)):n.includes("您没有权限指定下载的用户")&&(D("0"),r.error("登陆已过期,请重新登陆"),location.reload())})??"failed";if(!s||s==="failed")return;const{data:i}=s;r.success("解析成功"),y.value=i,S.value=!0},P=async e=>{e&&await e.validate(()=>{})&&(a.value.pending=!0,await h("0",!0),await L(),a.value.pending=!1)},E=async()=>{a.value.pending=!0;let e=!1;if(u.value=u.value.filter(i=>{var n;if(e)return!1;const c=i.isdir=="1";return c&&(e=!0,r.error("暂不支持下载文件夹"),(n=w.value)==null||n.clearSelection()),!c}),e){a.value.pending=!1;return}const s=u.value.map(i=>i.fs_id);await b(s),a.value.pending=!1},y=t([]),S=t(!1),O=t([]),A=t(!1),C=t(T()),R=t(null);return{getConfig:m,getDir:F,getFileList:h,getFileSign:L,freshFileList:P,downloadFile:b,downloadFiles:E,clientConfig:d,getFileListForm:a,getFileListFormRef:p,filelist:l,requestParams:o,selectedRows:u,fileListTableRef:w,dlinkList:y,downloadDialogVisible:S,selectDownloadFiles:O,aria2ConfigForm:C,aria2ConfigDialogVisible:A,aria2ConfigFormRef:R,saveAria2Config:async e=>{e&&await e.validate(()=>{})&&(localStorage.setItem("aria2_config",JSON.stringify(C.value)),r.success("保存成功"),A.value=!1)}}}),J=j({__name:"UserPannel",setup(d){const m=v(()=>_(()=>import("./announceDialog-5cf8a0f5.js"),["assets/js/announceDialog-5cf8a0f5.js","assets/js/base-228d64a5.js","assets/js/request-fdc4c150.js","assets/js/index-42a788ad.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-overlay-f3b67021.js","assets/js/vnode-cdc7eacd.js","assets/js/focus-trap-b46ba44e.js","assets/js/isNil-c75b1b34.js","assets/js/scroll-5e7bdf7f.js","assets/js/index-7c55feb4.js","assets/css/el-overlay-49152403.css","assets/js/user-3d7773df.js"])),a=v(()=>_(()=>import("./getFileListForm-ebecf203.js"),["assets/js/getFileListForm-ebecf203.js","assets/js/base-228d64a5.js","assets/js/request-fdc4c150.js","assets/js/index-42a788ad.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-loading-0dc4cfe0.js","assets/css/el-loading-d0f2d079.css","assets/js/el-card-18fddc5f.js","assets/css/el-card-208b2445.css","assets/js/el-form-item-e045bac0.js","assets/js/use-form-item-6eb8476f.js","assets/js/_initCloneObject-93a1e332.js","assets/css/el-form-item-7d5af5e1.css","assets/js/el-button-71aeade6.js","assets/js/index-7c55feb4.js","assets/css/el-button-2cb60ae5.css","assets/js/el-input-95f19ce8.js","assets/js/isNil-c75b1b34.js","assets/css/el-input-45b6b5ba.css","assets/js/copy-485e2393.js","assets/js/_commonjsHelpers-725317a4.js","assets/js/user-3d7773df.js","assets/css/getFileListForm-5d45f733.css"])),p=v(()=>_(()=>import("./showFileList-068b723a.js"),["assets/js/showFileList-068b723a.js","assets/js/base-228d64a5.js","assets/js/request-fdc4c150.js","assets/js/index-42a788ad.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-loading-0dc4cfe0.js","assets/css/el-loading-d0f2d079.css","assets/js/el-card-18fddc5f.js","assets/css/el-card-208b2445.css","assets/js/el-table-column-d00bf6d8.js","assets/js/el-popper-a3b50ee9.js","assets/js/_initCloneObject-93a1e332.js","assets/js/isNil-c75b1b34.js","assets/js/use-form-item-6eb8476f.js","assets/js/focus-trap-b46ba44e.js","assets/css/el-popper-9e0bc416.css","assets/js/_commonjsHelpers-725317a4.js","assets/css/el-table-column-838a2945.css","assets/js/el-space-cf5a7f74.js","assets/js/vnode-cdc7eacd.js","assets/css/el-space-417b6673.css","assets/js/user-3d7773df.js"])),l=v(()=>_(()=>import("./downloadDialog-0ecd1921.js"),["assets/js/downloadDialog-0ecd1921.js","assets/js/base-228d64a5.js","assets/js/request-fdc4c150.js","assets/js/index-42a788ad.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-overlay-f3b67021.js","assets/js/vnode-cdc7eacd.js","assets/js/focus-trap-b46ba44e.js","assets/js/isNil-c75b1b34.js","assets/js/scroll-5e7bdf7f.js","assets/js/index-7c55feb4.js","assets/css/el-overlay-49152403.css","assets/js/el-table-column-d00bf6d8.js","assets/js/el-popper-a3b50ee9.js","assets/js/_initCloneObject-93a1e332.js","assets/js/use-form-item-6eb8476f.js","assets/css/el-popper-9e0bc416.css","assets/js/_commonjsHelpers-725317a4.js","assets/css/el-table-column-838a2945.css","assets/js/el-space-cf5a7f74.js","assets/css/el-space-417b6673.css","assets/js/el-button-71aeade6.js","assets/css/el-button-2cb60ae5.css","assets/js/el-text-d45bd844.js","assets/css/el-text-557ef0ff.css","assets/js/copy-485e2393.js","assets/js/user-3d7773df.js","assets/css/downloadDialog-abec4f6c.css"])),o=v(()=>_(()=>import("./aria2ConfigDialog-669011da.js"),["assets/js/aria2ConfigDialog-669011da.js","assets/js/base-228d64a5.js","assets/js/request-fdc4c150.js","assets/js/index-42a788ad.js","assets/css/index-e5387e95.css","assets/css/base-34dba8e3.css","assets/js/el-overlay-f3b67021.js","assets/js/vnode-cdc7eacd.js","assets/js/focus-trap-b46ba44e.js","assets/js/isNil-c75b1b34.js","assets/js/scroll-5e7bdf7f.js","assets/js/index-7c55feb4.js","assets/css/el-overlay-49152403.css","assets/js/el-form-item-e045bac0.js","assets/js/use-form-item-6eb8476f.js","assets/js/_initCloneObject-93a1e332.js","assets/css/el-form-item-7d5af5e1.css","assets/js/el-button-71aeade6.js","assets/css/el-button-2cb60ae5.css","assets/js/el-input-95f19ce8.js","assets/css/el-input-45b6b5ba.css","assets/js/user-3d7773df.js"])),u=q();return I(u.getConfig),(w,F)=>(G(),U(x,null,[f(g(m)),f(g(a)),f(g(p)),f(g(l)),f(g(o))],64))}});const X=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{X as U,q as u};