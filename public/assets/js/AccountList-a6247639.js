import{b as V,i as G,F as W,E as ne,_ as R,d as se,m as oe,e as ie,u as J,ac as ce,ad as ee,ae as pe,c as U,p as de,q as ge,M as fe,w as me,g as H,j as be}from"./request-40fd0d0c.js";import{E as ve,a as _e,v as Ce}from"./el-table-column-4aad63f2.js";import{E as he}from"./el-input-b13a7281.js";import{i as Pe}from"./el-tag-a1b60e84.js";import{E as ye,a as ke}from"./el-select-f9657549.js";import{d as z,c as w,o as d,i as P,t as q,a as M,w as N,g as le,f as a,P as ze,r as T,Q as X,l as b,F as Y,an as re,n as x,e as ae,p as Se,h as Q,af as we,S as Ne,V as xe,m as F,A as Ee,C as $e,k as K,b as Ae}from"./index-33ed1e89.js";import{u as Te}from"./AccountManagement-db8fb63f.js";import{h as Me,i as Be,j as Ie}from"./admin-758ddfa7.js";import{_ as Le}from"./_plugin-vue_export-helper-c27b6911.js";import"./focus-trap-a70a58ba.js";import"./strings-12550c6c.js";import"./validator-616e0292.js";const ue=Symbol("elPaginationKey"),qe=V({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:G}}),je={click:e=>e instanceof MouseEvent},Fe=["disabled","aria-label","aria-disabled"],De={key:0},Ke=z({name:"ElPaginationPrev"}),Ue=z({...Ke,props:qe,emits:je,setup(e){const l=e,{t:n}=W(),g=w(()=>l.disabled||l.currentPage<=1);return(r,c)=>(d(),P("button",{type:"button",class:"btn-prev",disabled:a(g),"aria-label":r.prevText||a(n)("el.pagination.prev"),"aria-disabled":a(g),onClick:c[0]||(c[0]=m=>r.$emit("click",m))},[r.prevText?(d(),P("span",De,q(r.prevText),1)):(d(),M(a(ne),{key:1},{default:N(()=>[(d(),M(le(r.prevIcon)))]),_:1}))],8,Fe))}});var Ve=R(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);const We=V({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:G}}),Oe=["disabled","aria-label","aria-disabled"],Je={key:0},Re=z({name:"ElPaginationNext"}),He=z({...Re,props:We,emits:["click"],setup(e){const l=e,{t:n}=W(),g=w(()=>l.disabled||l.currentPage===l.pageCount||l.pageCount===0);return(r,c)=>(d(),P("button",{type:"button",class:"btn-next",disabled:a(g),"aria-label":r.nextText||a(n)("el.pagination.next"),"aria-disabled":a(g),onClick:c[0]||(c[0]=m=>r.$emit("click",m))},[r.nextText?(d(),P("span",Je,q(r.nextText),1)):(d(),M(a(ne),{key:1},{default:N(()=>[(d(),M(le(r.nextIcon)))]),_:1}))],8,Oe))}});var Qe=R(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);const Z=()=>ze(ue,{}),Ge=V({pageSize:{type:Number,required:!0},pageSizes:{type:se(Array),default:()=>oe([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,teleported:Boolean,size:{type:String,values:ie}}),Xe=z({name:"ElPaginationSizes"}),Ye=z({...Xe,props:Ge,emits:["page-size-change"],setup(e,{emit:l}){const n=e,{t:g}=W(),r=J("pagination"),c=Z(),m=T(n.pageSize);X(()=>n.pageSizes,(f,C)=>{if(!Pe(f,C)&&Array.isArray(f)){const p=f.includes(n.pageSize)?n.pageSize:n.pageSizes[0];l("page-size-change",p)}}),X(()=>n.pageSize,f=>{m.value=f});const _=w(()=>n.pageSizes);function E(f){var C;f!==m.value&&(m.value=f,(C=c.handleSizeChange)==null||C.call(c,Number(f)))}return(f,C)=>(d(),P("span",{class:x(a(r).e("sizes"))},[b(a(ke),{"model-value":m.value,disabled:f.disabled,"popper-class":f.popperClass,size:f.size,teleported:f.teleported,"validate-event":!1,onChange:E},{default:N(()=>[(d(!0),P(Y,null,re(a(_),p=>(d(),M(a(ye),{key:p,value:p,label:p+a(g)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size","teleported"])],2))}});var Ze=R(Ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);const ea=V({size:{type:String,values:ie}}),aa=["disabled"],ta=z({name:"ElPaginationJumper"}),na=z({...ta,props:ea,setup(e){const{t:l}=W(),n=J("pagination"),{pageCount:g,disabled:r,currentPage:c,changeEvent:m}=Z(),_=T(),E=w(()=>{var p;return(p=_.value)!=null?p:c==null?void 0:c.value});function f(p){_.value=p?+p:""}function C(p){p=Math.trunc(+p),m==null||m(p),_.value=void 0}return(p,S)=>(d(),P("span",{class:x(a(n).e("jump")),disabled:a(r)},[ae("span",{class:x([a(n).e("goto")])},q(a(l)("el.pagination.goto")),3),b(a(he),{size:p.size,class:x([a(n).e("editor"),a(n).is("in-pagination")]),min:1,max:a(g),disabled:a(r),"model-value":a(E),"validate-event":!1,label:a(l)("el.pagination.page"),type:"number","onUpdate:modelValue":f,onChange:C},null,8,["size","class","max","disabled","model-value","label"]),ae("span",{class:x([a(n).e("classifier")])},q(a(l)("el.pagination.pageClassifier")),3)],10,aa))}});var sa=R(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);const oa=V({total:{type:Number,default:1e3}}),ia=["disabled"],la=z({name:"ElPaginationTotal"}),ra=z({...la,props:oa,setup(e){const{t:l}=W(),n=J("pagination"),{disabled:g}=Z();return(r,c)=>(d(),P("span",{class:x(a(n).e("total")),disabled:a(g)},q(a(l)("el.pagination.total",{total:r.total})),11,ia))}});var ua=R(ra,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);const ca=V({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),pa=["onKeyup"],da=["aria-current","aria-label","tabindex"],ga=["tabindex","aria-label"],fa=["aria-current","aria-label","tabindex"],ma=["tabindex","aria-label"],ba=["aria-current","aria-label","tabindex"],va=z({name:"ElPaginationPager"}),_a=z({...va,props:ca,emits:["change"],setup(e,{emit:l}){const n=e,g=J("pager"),r=J("icon"),{t:c}=W(),m=T(!1),_=T(!1),E=T(!1),f=T(!1),C=T(!1),p=T(!1),S=w(()=>{const t=n.pagerCount,s=(t-1)/2,o=Number(n.currentPage),A=Number(n.pageCount);let $=!1,I=!1;A>t&&(o>t-s&&($=!0),o<A-s&&(I=!0));const L=[];if($&&!I){const v=A-(t-2);for(let D=v;D<A;D++)L.push(D)}else if(!$&&I)for(let v=2;v<t;v++)L.push(v);else if($&&I){const v=Math.floor(t/2)-1;for(let D=o-v;D<=o+v;D++)L.push(D)}else for(let v=2;v<A;v++)L.push(v);return L}),i=w(()=>["more","btn-quickprev",r.b(),g.is("disabled",n.disabled)]),B=w(()=>["more","btn-quicknext",r.b(),g.is("disabled",n.disabled)]),y=w(()=>n.disabled?-1:0);Se(()=>{const t=(n.pagerCount-1)/2;m.value=!1,_.value=!1,n.pageCount>n.pagerCount&&(n.currentPage>n.pagerCount-t&&(m.value=!0),n.currentPage<n.pageCount-t&&(_.value=!0))});function h(t=!1){n.disabled||(t?E.value=!0:f.value=!0)}function O(t=!1){t?C.value=!0:p.value=!0}function j(t){const s=t.target;if(s.tagName.toLowerCase()==="li"&&Array.from(s.classList).includes("number")){const o=Number(s.textContent);o!==n.currentPage&&l("change",o)}else s.tagName.toLowerCase()==="li"&&Array.from(s.classList).includes("more")&&u(t)}function u(t){const s=t.target;if(s.tagName.toLowerCase()==="ul"||n.disabled)return;let o=Number(s.textContent);const A=n.pageCount,$=n.currentPage,I=n.pagerCount-2;s.className.includes("more")&&(s.className.includes("quickprev")?o=$-I:s.className.includes("quicknext")&&(o=$+I)),Number.isNaN(+o)||(o<1&&(o=1),o>A&&(o=A)),o!==$&&l("change",o)}return(t,s)=>(d(),P("ul",{class:x(a(g).b()),onClick:u,onKeyup:we(j,["enter"])},[t.pageCount>0?(d(),P("li",{key:0,class:x([[a(g).is("active",t.currentPage===1),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===1,"aria-label":a(c)("el.pagination.currentPage",{pager:1}),tabindex:a(y)}," 1 ",10,da)):Q("v-if",!0),m.value?(d(),P("li",{key:1,class:x(a(i)),tabindex:a(y),"aria-label":a(c)("el.pagination.prevPages",{pager:t.pagerCount-2}),onMouseenter:s[0]||(s[0]=o=>h(!0)),onMouseleave:s[1]||(s[1]=o=>E.value=!1),onFocus:s[2]||(s[2]=o=>O(!0)),onBlur:s[3]||(s[3]=o=>C.value=!1)},[(E.value||C.value)&&!t.disabled?(d(),M(a(ce),{key:0})):(d(),M(a(ee),{key:1}))],42,ga)):Q("v-if",!0),(d(!0),P(Y,null,re(a(S),o=>(d(),P("li",{key:o,class:x([[a(g).is("active",t.currentPage===o),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===o,"aria-label":a(c)("el.pagination.currentPage",{pager:o}),tabindex:a(y)},q(o),11,fa))),128)),_.value?(d(),P("li",{key:2,class:x(a(B)),tabindex:a(y),"aria-label":a(c)("el.pagination.nextPages",{pager:t.pagerCount-2}),onMouseenter:s[4]||(s[4]=o=>h()),onMouseleave:s[5]||(s[5]=o=>f.value=!1),onFocus:s[6]||(s[6]=o=>O()),onBlur:s[7]||(s[7]=o=>p.value=!1)},[(f.value||p.value)&&!t.disabled?(d(),M(a(pe),{key:0})):(d(),M(a(ee),{key:1}))],42,ma)):Q("v-if",!0),t.pageCount>1?(d(),P("li",{key:3,class:x([[a(g).is("active",t.currentPage===t.pageCount),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===t.pageCount,"aria-label":a(c)("el.pagination.currentPage",{pager:t.pageCount}),tabindex:a(y)},q(t.pageCount),11,ba)):Q("v-if",!0)],42,pa))}});var Ca=R(_a,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);const k=e=>typeof e!="number",ha=V({pageSize:Number,defaultPageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>U(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},currentPage:Number,defaultCurrentPage:Number,layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:se(Array),default:()=>oe([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:G,default:()=>de},nextText:{type:String,default:""},nextIcon:{type:G,default:()=>ge},teleported:{type:Boolean,default:!0},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),Pa={"update:current-page":e=>U(e),"update:page-size":e=>U(e),"size-change":e=>U(e),"current-change":e=>U(e),"prev-click":e=>U(e),"next-click":e=>U(e)},te="ElPagination";var ya=z({name:te,props:ha,emits:Pa,setup(e,{emit:l,slots:n}){const{t:g}=W(),r=J("pagination"),c=Ne().vnode.props||{},m="onUpdate:currentPage"in c||"onUpdate:current-page"in c||"onCurrentChange"in c,_="onUpdate:pageSize"in c||"onUpdate:page-size"in c||"onSizeChange"in c,E=w(()=>{if(k(e.total)&&k(e.pageCount)||!k(e.currentPage)&&!m)return!1;if(e.layout.includes("sizes")){if(k(e.pageCount)){if(!k(e.total)&&!k(e.pageSize)&&!_)return!1}else if(!_)return!1}return!0}),f=T(k(e.defaultPageSize)?10:e.defaultPageSize),C=T(k(e.defaultCurrentPage)?1:e.defaultCurrentPage),p=w({get(){return k(e.pageSize)?f.value:e.pageSize},set(u){k(e.pageSize)&&(f.value=u),_&&(l("update:page-size",u),l("size-change",u))}}),S=w(()=>{let u=0;return k(e.pageCount)?k(e.total)||(u=Math.max(1,Math.ceil(e.total/p.value))):u=e.pageCount,u}),i=w({get(){return k(e.currentPage)?C.value:e.currentPage},set(u){let t=u;u<1?t=1:u>S.value&&(t=S.value),k(e.currentPage)&&(C.value=t),m&&(l("update:current-page",t),l("current-change",t))}});X(S,u=>{i.value>u&&(i.value=u)});function B(u){i.value=u}function y(u){p.value=u;const t=S.value;i.value>t&&(i.value=t)}function h(){e.disabled||(i.value-=1,l("prev-click",i.value))}function O(){e.disabled||(i.value+=1,l("next-click",i.value))}function j(u,t){u&&(u.props||(u.props={}),u.props.class=[u.props.class,t].join(" "))}return xe(ue,{pageCount:S,disabled:w(()=>e.disabled),currentPage:i,changeEvent:B,handleSizeChange:y}),()=>{var u,t;if(!E.value)return fe(te,g("el.pagination.deprecationWarning")),null;if(!e.layout||e.hideOnSinglePage&&S.value<=1)return null;const s=[],o=[],A=F("div",{class:r.e("rightwrapper")},o),$={prev:F(Ve,{disabled:e.disabled,currentPage:i.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:h}),jumper:F(sa,{size:e.small?"small":"default"}),pager:F(Ca,{currentPage:i.value,pageCount:S.value,pagerCount:e.pagerCount,onChange:B,disabled:e.disabled}),next:F(Qe,{disabled:e.disabled,currentPage:i.value,pageCount:S.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:O}),sizes:F(Ze,{pageSize:p.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,teleported:e.teleported,size:e.small?"small":"default"}),slot:(t=(u=n==null?void 0:n.default)==null?void 0:u.call(n))!=null?t:null,total:F(ua,{total:k(e.total)?0:e.total})},I=e.layout.split(",").map(v=>v.trim());let L=!1;return I.forEach(v=>{if(v==="->"){L=!0;return}L?o.push($[v]):s.push($[v])}),j(s[0],r.is("first")),j(s[s.length-1],r.is("last")),L&&o.length>0&&(j(o[0],r.is("first")),j(o[o.length-1],r.is("last")),s.push(A)),F("div",{class:[r.b(),r.is("background",e.background),{[r.m("small")]:e.small}]},s)}}});const ka=me(ya);const za=z({__name:"AccountList",setup(e){const l=Te(),{currentPage:n,pageSize:g,accountList:r,accountLoading:c,selectAccounts:m}=Ee(l),_=async(i,B)=>{(await Me({account_id:i})??"failed").toString()!=="failed"&&(H.success(`成功${B===0?"启用":"禁用"}`),await l.getAccounts())},E=async i=>{(await Be({account_id:i})??"failed").toString()!=="failed"&&(H.success("更新账户信息成功"),await l.getAccounts())},f=async i=>{(await Ie({account_id:i})??"failed").toString()!=="failed"&&(H.success("删除账户成功"),await l.getAccounts())},C=i=>m.value=i,p=()=>{m.value.forEach(i=>{if(i.switch===1)return H.info(`编号:${i.id},已经启用了`);_(i.id,i.switch)})},S=()=>{m.value.forEach(i=>{if(i.switch===0)return H.info(`编号:${i.id},已经禁用了`);_(i.id,i.switch)})};return $e(l.getAccounts),(i,B)=>{const y=be,h=ve,O=_e,j=ka,u=Ce;return d(),P(Y,null,[b(y,{type:"primary",onClick:a(l).openAddDialog},{default:N(()=>[K("添加代理账号")]),_:1},8,["onClick"]),b(y,{type:"primary",disabled:a(m).length<=0,onClick:p},{default:N(()=>[K(" 批量启用 ")]),_:1},8,["disabled"]),b(y,{type:"primary",disabled:a(m).length<=0,onClick:S},{default:N(()=>[K(" 批量禁用 ")]),_:1},8,["disabled"]),Ae((d(),M(O,{data:a(r).data,border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:C},{default:N(()=>[b(h,{type:"selection",width:"40"}),b(h,{prop:"id",label:"编号"}),b(h,{prop:"baidu_name",label:"百度用户名"}),b(h,{prop:"netdisk_name",label:"网盘用户名"}),b(h,{prop:"state",label:"状态"}),b(h,{prop:"add_time",label:"添加时间"}),b(h,{prop:"use",label:"最后一次有效时间"}),b(h,{prop:"vip_type",label:"会员类型"}),b(h,{prop:"cookie",label:"cookie值"}),b(h,{prop:"switch",label:"是否启用"},{default:N(t=>[K(q(t.row.switch===0?"禁用":"启用"),1)]),_:1}),b(h,{label:"操作",width:"220"},{default:N(t=>[b(y,{size:"small",type:"primary",onClick:s=>E(t.row.id)},{default:N(()=>[K(" 更新信息 ")]),_:2},1032,["onClick"]),b(y,{size:"small",type:t.row.switch===0?"success":"info",onClick:s=>_(t.row.id,t.row.switch)},{default:N(()=>[K(q(t.row.switch===0?"启用":"禁用"),1)]),_:2},1032,["type","onClick"]),b(y,{size:"small",type:"danger",onClick:s=>f(t.row.id)},{default:N(()=>[K(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[u,a(c)]]),b(j,{"current-page":a(n),"page-size":a(g),total:a(r).total,"hide-on-single-page":"",onCurrentChange:a(l).getAccounts},null,8,["current-page","page-size","total","onCurrentChange"])],64)}}});const qa=Le(za,[["__scopeId","data-v-87e8172c"]]);export{qa as default};
