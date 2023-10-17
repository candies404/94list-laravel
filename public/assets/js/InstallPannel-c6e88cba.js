import{b as F,d as U,u as h,_ as C,w as $,f as R,g as N,j as z}from"./request-3b809520.js";import{E as B,a as D}from"./el-form-item-711f284c.js";import{E as T}from"./el-input-d306da18.js";import"./el-tag-6014d333.js";import{E as j,a as A}from"./el-select-ec9a7519.js";import{e as H}from"./user-5b250f9d.js";import{d as y,c as J,o as _,i as m,n as w,f as l,j as K,h as v,H as O,y as G,r as I,I as W,A as X,l as t,w as r,e as b,k as g,F as Y,J as Z,K as ee}from"./index-e0a4a1cf.js";import{f as le}from"./favicon-de9023fc.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import"./focus-trap-56a67a6b.js";import"./strings-3744b750.js";import"./validator-f818617e.js";const ae=F({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:U(String),default:"solid"}}),oe=y({name:"ElDivider"}),re=y({...oe,props:ae,setup(s){const p=s,i=h("divider"),e=J(()=>i.cssVar({"border-style":p.borderStyle}));return(d,V)=>(_(),m("div",{class:w([l(i).b(),l(i).m(d.direction)]),style:O(l(e)),role:"separator"},[d.$slots.default&&d.direction!=="vertical"?(_(),m("div",{key:0,class:w([l(i).e("text"),l(i).is(d.contentPosition)])},[K(d.$slots,"default")],2)):v("v-if",!0)],6))}});var ne=C(re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const se=$(ne);const de=G("InstallPannel",()=>{const s=I({db_connection:"",db_host:"localhost",db_port:"3306",db_database:"94list",db_username:"94list",db_password:"",app_name:"94list-laravel",app_url:"",admin_route_prefix:"/admin",pending:!1,installed:!1}),p=I(null);return{installForm:s,installFormRef:p}}),E=s=>(Z("data-v-fd43252b"),s=s(),ee(),s),ue={class:"container"},ie=["src"],pe=E(()=>b("h2",null,"就是加速",-1)),_e={key:0},me=E(()=>b("p",null,"您的后台登录账号密码均为:admin,请及时登录修改!",-1)),be=y({__name:"InstallPannel",setup(s){const p=W(),i=de(),{installForm:e,installFormRef:d}=X(i),V={db_connection:[{required:!0,message:"请选择安装方式",trigger:"change"}],db_host:[{required:!0,message:"请输入MySQL 数据库地址",trigger:"blur"}],db_port:[{required:!0,message:"请输入MySQL 端口",trigger:"blur"}],db_database:[{required:!0,message:"请输入MySQL 数据库名",trigger:"blur"}],db_username:[{required:!0,message:"请输入MySQL 用户名",trigger:"blur"}],db_password:[{required:!0,message:"请输入MySQL 密码",trigger:"blur"}],app_name:[{required:!0,message:"请输入网站名称",trigger:"blur"}],app_url:[{required:!0,message:"请输入网站url",trigger:"blur"}],admin_route_prefix:[{required:!0,message:"请输入后台登录路径",trigger:"blur"}]},k=async f=>{if(!f||!await f.validate(()=>{}))return;e.value.pending=!0;const a=await H({db_connection:e.value.db_connection,db_host:e.value.db_host,db_port:e.value.db_port,db_database:e.value.db_database,db_username:e.value.db_username,db_password:e.value.db_password,app_name:e.value.app_name,app_url:e.value.app_url,admin_route_prefix:e.value.admin_route_prefix})??"failed";e.value.pending=!1,a.toString()!=="failed"&&(N.success("安装成功!"),e.value.installed=!0)},q=()=>p.push("/"),L=()=>p.push("/login");return(f,a)=>{const c=z,S=j,M=A,n=B,u=T,Q=se,x=D,P=R;return _(),m("div",ue,[t(P,null,{default:r(()=>[b("h1",null,[b("img",{src:l(le),alt:"logo"},null,8,ie)]),pe,l(e).installed?(_(),m("h3",_e,[me,t(c,{type:"danger",onClick:a[0]||(a[0]=o=>q())},{default:r(()=>[g("访问首页")]),_:1}),t(c,{type:"success",onClick:a[1]||(a[1]=o=>L())},{default:r(()=>[g("访问后台")]),_:1})])):v("",!0),t(x,{ref_key:"installFormRef",ref:d,model:l(e),rules:V,disabled:l(e).installed,"label-width":"auto"},{default:r(()=>[t(n,{label:"数据库驱动",prop:"db_connection"},{default:r(()=>[t(M,{modelValue:l(e).db_connection,"onUpdate:modelValue":a[2]||(a[2]=o=>l(e).db_connection=o),placeholder:"请选择数据库驱动"},{default:r(()=>[t(S,{label:"MySQL",value:"mysql"}),t(S,{label:"SQLite",value:"sqlite"})]),_:1},8,["modelValue"])]),_:1}),l(e).db_connection==="mysql"?(_(),m(Y,{key:0},[t(n,{label:"MySQL 数据库地址",prop:"db_host"},{default:r(()=>[t(u,{modelValue:l(e).db_host,"onUpdate:modelValue":a[3]||(a[3]=o=>l(e).db_host=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"MySQL 端口",prop:"db_port"},{default:r(()=>[t(u,{modelValue:l(e).db_port,"onUpdate:modelValue":a[4]||(a[4]=o=>l(e).db_port=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"MySQL 数据库名",prop:"db_database"},{default:r(()=>[t(u,{modelValue:l(e).db_database,"onUpdate:modelValue":a[5]||(a[5]=o=>l(e).db_database=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"MySQL 用户名",prop:"db_username"},{default:r(()=>[t(u,{modelValue:l(e).db_username,"onUpdate:modelValue":a[6]||(a[6]=o=>l(e).db_username=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"MySQL 密码",prop:"db_password"},{default:r(()=>[t(u,{modelValue:l(e).db_password,"onUpdate:modelValue":a[7]||(a[7]=o=>l(e).db_password=o)},null,8,["modelValue"])]),_:1})],64)):v("",!0),t(Q),t(n,{label:"网站名称",prop:"app_name"},{default:r(()=>[t(u,{modelValue:l(e).app_name,"onUpdate:modelValue":a[8]||(a[8]=o=>l(e).app_name=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"网站url",prop:"app_url"},{default:r(()=>[t(u,{modelValue:l(e).app_url,"onUpdate:modelValue":a[9]||(a[9]=o=>l(e).app_url=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"后台登录路径",prop:"admin_route_prefix"},{default:r(()=>[t(u,{modelValue:l(e).admin_route_prefix,"onUpdate:modelValue":a[10]||(a[10]=o=>l(e).admin_route_prefix=o)},null,8,["modelValue"])]),_:1}),t(n,{class:"center"},{default:r(()=>[t(c,{type:"primary",onClick:a[11]||(a[11]=o=>k(l(d))),loading:l(e).pending},{default:r(()=>[g(" 安装 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","disabled"])]),_:1})])}}});const Le=te(be,[["__scopeId","data-v-fd43252b"]]);export{Le as default};
