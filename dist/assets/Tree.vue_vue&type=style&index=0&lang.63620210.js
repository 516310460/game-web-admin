var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,r=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&c(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&c(e,l,t[l]);return e},o=(e,a)=>t(e,l(a)),d=(e,t,l)=>new Promise(((a,n)=>{var s=e=>{try{r(l.next(e))}catch(t){n(t)}},c=e=>{try{r(l.throw(e))}catch(t){n(t)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,c);r((l=l.apply(e,t)).next())}));import{a2 as i,k as u,av as y,aw as h,ae as p,f,G as k,l as v,n as K,L as b,o as L,q as A,S as C,Y as g,Z as x,x as _,s as S,at as m,W as E,ai as T,y as N,u as I,an as D,B as w,r as M,t as j,aM as B,a6 as O,J as P,F as U,bn as R,w as H,v as Y,bW as X,O as $,ah as F,bo as W}from"./vendor.c2cc062a.js";import{j as q,n as z,am as G,p as J,d as Z,aR as Q,c as V,i as ee,aC as te,N as le,aS as ae,ac as ne,A as se}from"./index.9345068b.js";import{u as ce}from"./useContextMenu.9ea7694e.js";import{u as re}from"./useExpose.9766eb76.js";const oe=({icon:e})=>e?q(e)?i(z,{icon:e,class:"mr-1"}):z:null;var de,ie;(ie=de||(de={}))[ie.SELECT_ALL=0]="SELECT_ALL",ie[ie.UN_SELECT_ALL=1]="UN_SELECT_ALL",ie[ie.EXPAND_ALL=2]="EXPAND_ALL",ie[ie.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",ie[ie.CHECK_STRICTLY=4]="CHECK_STRICTLY",ie[ie.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY";var ue=u({name:"BasicTreeHeader",components:{BasicTitle:G,Icon:z,Dropdown:y,Menu:h,MenuItem:h.Item,MenuDivider:h.Divider,InputSearch:p.Search},props:{helpMessage:{type:[String,Array],default:""},title:J.string,toolbar:J.bool,checkable:J.bool,search:J.bool,checkAll:J.func,expandAll:J.func},emits:["strictly-change","search"],setup(e,{emit:t}){const{t:l}=Z(),a=f((()=>{const{checkable:t}=e,a=[{label:l("component.tree.expandAll"),value:de.EXPAND_ALL},{label:l("component.tree.unExpandAll"),value:de.UN_EXPAND_ALL,divider:t}];return t?[{label:l("component.tree.selectAll"),value:de.SELECT_ALL},{label:l("component.tree.unSelectAll"),value:de.UN_SELECT_ALL,divider:t},...a,{label:l("component.tree.checkStrictly"),value:de.CHECK_STRICTLY},{label:l("component.tree.checkUnStrictly"),value:de.CHECK_UN_STRICTLY}]:a}));const n=k((function(e){t("search",e)}),200);return{t:l,toolbarList:a,handleMenuClick:function(l){var a,n,s,c;const{key:r}=l;switch(r){case de.SELECT_ALL:null==(a=e.checkAll)||a.call(e,!0);break;case de.UN_SELECT_ALL:null==(n=e.checkAll)||n.call(e,!1);break;case de.EXPAND_ALL:null==(s=e.expandAll)||s.call(e,!0);break;case de.UN_EXPAND_ALL:null==(c=e.expandAll)||c.call(e,!1);break;case de.CHECK_STRICTLY:t("strictly-change",!1);break;case de.CHECK_UN_STRICTLY:t("strictly-change",!0)}},handleSearch:function(e){n(e.target.value)}}}});const ye=N();v("data-v-db20e602");const he={class:"flex px-2 py-1.5 items-center basic-tree-header"},pe={key:2,class:"flex flex-1 justify-end items-center cursor-pointer"},fe={key:0,class:"mr-1 w-2/3"};K();const ke=ye(((e,t,l,a,n,s)=>{const c=b("BasicTitle"),r=b("InputSearch"),o=b("Icon"),d=b("MenuItem"),i=b("MenuDivider"),u=b("Menu"),y=b("Dropdown");return L(),A("div",he,[e.$slots.headerTitle?C(e.$slots,"headerTitle",{key:0},void 0,!0):g("",!0),!e.$slots.headerTitle&&e.title?(L(),A(c,{key:1,helpMessage:e.helpMessage},{default:ye((()=>[x(_(e.title),1)])),_:1},8,["helpMessage"])):g("",!0),e.search||e.toolbar?(L(),A("div",pe,[e.search?(L(),A("div",fe,[S(r,{placeholder:e.t("common.searchText"),size:"small",allowClear:"",onChange:e.handleSearch},null,8,["placeholder","onChange"])])):g("",!0),e.toolbar?(L(),A(y,{key:1,onClick:t[1]||(t[1]=m((()=>{}),["prevent"]))},{overlay:ye((()=>[S(u,{onClick:e.handleMenuClick},{default:ye((()=>[(L(!0),A(E,null,T(e.toolbarList,(e=>(L(),A(E,{key:e.value},[S(d,{key:e.value},{default:ye((()=>[x(_(e.label),1)])),_:2},1040),e.divider?(L(),A(i,{key:0})):g("",!0)],64)))),128))])),_:1},8,["onClick"])])),default:ye((()=>[S(o,{icon:"ion:ellipsis-vertical"})])),_:1})):g("",!0)])):g("",!0)])}));ue.render=ke,ue.__scopeId="data-v-db20e602";var ve=u({name:"BasicTree",inheritAttrs:!1,props:{value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:J.string,toolbar:J.bool,search:J.bool,checkStrictly:J.bool,clickRowToExpand:J.bool.def(!0),checkable:J.bool.def(!1),defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:J.bool.def(!1),replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array}},emits:["update:expandedKeys","update:selectedKeys","update:value","change","check"],setup(e,{attrs:t,slots:l,emit:a}){const n=w({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),s=w({startSearch:!1,searchData:[]}),c=M([]),[i]=ce(),{prefixCls:u}=V("basic-tree"),y=f((()=>{const{replaceFields:t}=e;return r({children:"children",title:"title",key:"key"},t)})),h=f((()=>{let l=o(r(r({blockNode:!0},t),e),{expandedKeys:n.expandedKeys,selectedKeys:n.selectedKeys,checkedKeys:n.checkedKeys,checkStrictly:n.checkStrictly,replaceFields:I(y),"onUpdate:expandedKeys":e=>{n.expandedKeys=e,a("update:expandedKeys",e)},"onUpdate:selectedKeys":e=>{n.selectedKeys=e,a("update:selectedKeys",e)},onCheck:(e,t)=>{n.checkedKeys=e;const l=j(e);a("update:value",l),a("check",l,t)},onRightClick:C});return l=B(l,"treeData","class"),l})),p=f((()=>s.startSearch?s.searchData:I(c))),k=f((()=>{var e;return s.startSearch&&0===(null==(e=s.searchData)?void 0:e.length)})),{deleteNodeByKey:v,insertNodeByKey:K,filterByLevel:b,updateNodeByKey:L,getAllKeys:A}=function(e,t){return{deleteNodeByKey:function l(a,n){if(!a)return;const s=n||I(e),{key:c,children:r}=I(t);if(r&&c)for(let e=0;e<s.length;e++){const t=s[e],n=t[r];if(t[c]===a){s.splice(e,1);break}n&&n.length&&l(a,t[r])}},insertNodeByKey:function({parentKey:l=null,node:a,push:n="push"}){const s=D(I(e));if(!l)return s[n](a),void(e.value=s);const{key:c,children:r}=I(t);r&&c&&(Q(s,(e=>{e[c]===l&&(e[r]=e[r]||[],e[r][n](a))})),e.value=s)},filterByLevel:function l(a=1,n,s=1){if(!a)return[];const c=[],r=n||I(e)||[];for(let e=0;e<r.length;e++){const n=r[e],{key:o,children:d}=I(t),i=o?n[o]:"",u=d?n[d]:[];c.push(i),u&&u.length&&s<a&&(s+=1,c.push(...l(a,u,s)))}return c},updateNodeByKey:function l(a,n,s){if(!a)return;const c=s||I(e),{key:o,children:d}=I(t);if(d&&o)for(let e=0;e<c.length;e++){const t=c[e],s=t[d];if(t[o]===a){c[e]=r(r({},c[e]),n);break}s&&s.length&&l(a,n,t[d])}},getAllKeys:function l(a){const n=[],s=a||I(e),{key:c,children:r}=I(t);if(!r||!c)return n;for(let e=0;e<s.length;e++){const t=s[e];n.push(t[c]);const a=t[r];a&&a.length&&n.push(...l(a))}return n}}}(c,y);function C(t){return d(this,arguments,(function*({event:t,node:l}){var a;const{rightMenuList:n=[],beforeRightClick:s}=e;let c={event:t,items:[]};if(s&&ee(s)){let e=yield s(l,t);Array.isArray(e)?c.items=e:Object.assign(c,e)}else c.items=n;(null==(a=c.items)?void 0:a.length)&&i(c)}))}function g(e){n.expandedKeys=e}function x(e){n.checkedKeys=e?A():[]}function _(e){n.expandedKeys=e?A():[]}function m(e){n.checkStrictly=e}function T(e){if(!e)return void(s.startSearch=!1);s.startSearch=!0;const{title:t}=I(y);s.searchData=ae(I(c),(l=>{var a,n;return null!=(n=null==(a=l[t])?void 0:a.includes(e))&&n}),I(y))}function N(t,l){if(e.clickRowToExpand&&l&&0!==l.length)if(n.expandedKeys.includes(t)){const e=[...n.expandedKeys],l=e.findIndex((e=>e===t));-1!==l&&e.splice(l,1),g(e)}else g([...n.expandedKeys,t])}O((()=>{c.value=e.treeData})),P((()=>{const t=parseInt(e.defaultExpandLevel);t>0?n.expandedKeys=b(t):e.defaultExpandAll&&_(!0)})),O((()=>{n.expandedKeys=e.expandedKeys})),O((()=>{n.selectedKeys=e.selectedKeys})),O((()=>{n.checkedKeys=e.checkedKeys})),U((()=>e.value),(()=>{n.checkedKeys=j(e.value||[])})),U((()=>n.checkedKeys),(()=>{const e=j(n.checkedKeys);a("update:value",e),a("change",e)})),O((()=>{n.checkStrictly=e.checkStrictly}));function q(t){const{actionList:l}=e;if(l&&0!==l.length)return l.map(((e,l)=>{var a;let n=!0;return ee(e.show)?n=null==(a=e.show)?void 0:a.call(e,t):se(e.show)&&(n=e.show),n?S("span",{key:l,class:`${u}__action`},[e.render(t)]):null}))}function z({data:t,level:a}){return t?t.map((t=>{const{title:n,key:s,children:c}=I(y),d=B(t,"title"),i=function(t,l){return!l&&e.renderIcon&&ee(e.renderIcon)?e.renderIcon(t):l}(o(r({},t),{level:a}),t.icon),p=W(t,c)||[];return S(X.TreeNode,$(d,{node:j(t),key:W(t,s)}),{title:()=>{var e;return S("span",{class:`${u}-title pl-2`,onClick:N.bind(null,t[s],t[c])},[(null==l?void 0:l.title)?ne(l,"title",t):S(E,null,[i&&S(oe,{icon:i},null),S("span",{class:(null==(e=I(h))?void 0:e.blockNode)?`${u}__content`:""},[W(t,n)]),S("span",{class:`${u}__actions`},[q(o(r({},t),{level:a}))])])])},default:()=>z({data:p,level:a+1})})})):null}return re({setExpandedKeys:g,getExpandedKeys:function(){return n.expandedKeys},setSelectedKeys:function(e){n.selectedKeys=e},getSelectedKeys:function(){return n.selectedKeys},setCheckedKeys:function(e){n.checkedKeys=e},getCheckedKeys:function(){return n.checkedKeys},insertNodeByKey:K,deleteNodeByKey:v,updateNodeByKey:L,checkAll:x,expandAll:_,filterByLevel:e=>{n.expandedKeys=b(e)}}),()=>{let a;const{title:n,helpMessage:s,toolbar:c,search:o,checkable:d}=e,i=n||c||o||l.headerTitle;return S("div",{class:[u,"h-full",t.class]},[i&&S(ue,{checkable:d,checkAll:x,expandAll:_,title:n,search:o,toolbar:c,helpMessage:s,onStrictlyChange:m,onSearch:T},(y=a=te(l),"function"==typeof y||"[object Object]"===Object.prototype.toString.call(y)&&!R(y)?a:{default:()=>[a]})),H(S(le,{style:{height:"calc(100% - 38px)"}},{default:()=>[S(X,$(I(h),{showIcon:!1}),r({default:()=>z({data:I(p),level:1})},te(l)))]}),[[Y,!I(k)]]),H(S(F,{class:"!mt-4"},null),[[Y,I(k)]])]);var y}}});export{ve as _};