import{e as $,u as _,f as D,h as M,j as P}from"./index-uahPAMSt.js";import{d as j,r as l,E as r}from"./.pnpm-CdrKUIM1.js";const q=j("fileListStore",()=>{const i=l(!1),t=l({surl:"",url:"",pwd:"",dir:"/",password:"",token:""}),d=l(null),x=()=>{const s=t.value.dir.split("/");s.pop();const v=s.join("/");return v===""?"/":v},z=async()=>{if(!(!d.value||!await d.value.validate())){if(t.value.surl==="")return r.error("获取链接surl失败");try{u.value=[],i.value=!0;const s=await $(t.value);n.value=s.data,t.value.dir!=="/"&&n.value.list.unshift({category:-1,fs_id:0,isdir:1,local_ctime:0,local_mtime:0,server_ctime:0,server_mtime:0,size:0,md5:"",path:x(),server_filename:"..",dlink:""}),r.success("获取文件列表成功")}finally{i.value=!1}}},o=l({hit_captcha:!1,vcode_str:"",vcode_img:"",vcode_input:""}),n=l({uk:0,shareid:0,randsk:"",list:[]}),u=l([]),p=l([]),S=async(s,v=!1)=>{var k,L;if(i.value){r.info("请勿重复点击~");return}const w=_().config.min_single_file;let c=[];if(s){const e=n.value.list.find(a=>a.fs_id===s);if(!e)r.error("获取文件信息失败");else if(e.size<w){r.error("文件过小不会被解析!");return}c=[s]}else{let e=u.value.filter(a=>a.isdir!==1);e.length!==u.value.length&&r.error("文件夹不会被解析!"),e=e.filter(a=>a.size>w),e.length!==u.value.length&&r.error("文件过小不会被解析!"),c=e.map(a=>a.fs_id)}if(c.length>(((L=(k=_())==null?void 0:k.config)==null?void 0:L.max_once)??20)){r.error(`一次最多解析${_().config.max_once}个文件`);return}if(c.length===0){r.error("满足要求的文件数量为0");return}let m;try{i.value=!0;const e={uk:n.value.uk,shareid:n.value.shareid,randsk:n.value.randsk,fs_ids:c,password:t.value.password,token:t.value.token,url:t.value.url,surl:t.value.surl,dir:t.value.dir,pwd:t.value.pwd};if(o.value.hit_captcha){if(!o.value.vcode_str||!o.value.vcode_input){r.error("请先输入验证码");return}e.vcode_str=o.value.vcode_str,e.vcode_input=o.value.vcode_input}if(m=await D(e),r.success("解析成功,下载链接请下滑"),o.value={hit_captcha:!1,vcode_str:"",vcode_img:"",vcode_input:""},v)return i.value=!1,await g(),m.data.map(a=>({...a,index:0}));p.value=m.data.map(a=>({...a,index:0}))}catch(e){const{code:a,message:y}=e;if(a&&y&&y.includes("验证码")){const F=await M({password:t.value.password});o.value={hit_captcha:!0,vcode_str:F.data.vcode,vcode_img:F.data.img,vcode_input:""}}}finally{i.value=!1,await g()}},h=l({group_name:"",count:0,size:0}),f=l(""),g=async()=>{try{i.value=!0;const s=await P({token:t.value.token});h.value=s.data,f.value=""}catch(s){f.value=s.message}finally{i.value=!1}};return{pending:i,fileList:n,getFileList:z,getFileListForm:t,getFileListFormRef:d,selectedRows:u,downloadLinks:p,getDownloadLinks:S,limitForm:h,getLimit:g,limitMessage:f,vcode:o}});export{q as u};
