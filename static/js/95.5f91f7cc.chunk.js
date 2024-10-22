"use strict";(self.webpackChunkregional_water=self.webpackChunkregional_water||[]).push([[95],{1095:function(n,e,i){i.r(e),i.d(e,{default:function(){return h}});var t=i(6106),l=i(914),r=i(8993),o=i(177),u=i(5485),a=i(9530),d=i(2020),s=i(1413),c=i(9439),f=i(458),v=i(543),Z=i(184),m=function(n){n.data,n.form;var e,i,u,m=(0,d.$)().t,h=(0,v.Z)({autoCallUrl:a.Z.organizationLevel.tree,cachingLifeTimeInSeconds:60,mapper:function(n){var e=[];return n&&function n(i){e.push(i),i.nodes&&i.nodes.length&&i.nodes.forEach((function(e){return n((0,s.Z)((0,s.Z)({},e),{},{name:"".concat(i.name,"/").concat(e.name)}))}))}(n),e}}),p=(0,c.Z)(h,3),g=p[1],x=p[2];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(r.Z.Item,{noStyle:!0,name:"id",children:(0,Z.jsx)(o.Z,{type:"hidden"})}),(0,Z.jsxs)(t.Z,{gutter:16,children:[(0,Z.jsx)(l.Z,{xs:24,sm:24,md:24,children:(0,Z.jsx)(r.Z.Item,{name:"name",label:m("name"),rules:[{required:!0,message:null!==(e=m("required"))&&void 0!==e?e:""}],children:(0,Z.jsx)(o.Z,{placeholder:null!==(i=m("name"))&&void 0!==i?i:""})})}),(0,Z.jsx)(l.Z,{xs:24,sm:24,md:24,children:(0,Z.jsx)(r.Z.Item,{name:"parentId",label:m("parent"),rules:[{required:!0,message:null!==(u=m("required"))&&void 0!==u?u:""}],children:(0,Z.jsx)(f.Z,{allowClear:!0,placeholder:m("parent"),options:null===x||void 0===x?void 0:x.map((function(n){return{label:n.name,value:n.id}})),loading:g})})})]})]})},h=function(){var n,e=(0,d.$)().t;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(u.Z,{title:e("organizationLevel"),id:"organizationLevel",idProp:"id",EntryForm:m,filterUrl:a.Z.organizationLevel.list,findUrl:function(n){return a.Z.organizationLevel.find(n.id)},columns:[{title:e("name"),dataIndex:"name",key:"name"}],scrollX:300,deleteAction:{url:function(n){return a.Z.organizationLevel.delete(n.id)}},addUrl:a.Z.organizationLevel.add,editAction:{url:a.Z.organizationLevel.update},children:(0,Z.jsx)(t.Z,{gutter:[20,20],children:(0,Z.jsx)(l.Z,{xs:24,sm:12,children:(0,Z.jsx)(r.Z.Item,{name:"search",rules:[],children:(0,Z.jsx)(o.Z,{placeholder:null!==(n=e("search"))&&void 0!==n?n:""})})})})})})}},5485:function(n,e,i){i.d(e,{Z:function(){return M}});var t=i(4942),l=i(3433),r=i(1413),o=i(9439),u=i(4916),a=i(8993),d=i(7309),s=i(294),c=i(3099),f=i(4525),v=i(4021),Z=i(2166),m=i(5486),h=i(8467),p=i(2791),g=(0,p.createContext)({}),x=i(543),j=i(2020),y=i(502),b=i(5761),C=i(184),k=function(n){var e=(0,j.$)().t,i=(0,x.Z)({onSuccess:function(e){n.afterSelect(e)}}),t=(0,o.Z)(i,2),l=t[0],r=t[1];return(0,C.jsx)(d.Z,{loading:r,type:n.isMobile?"ghost":"primary",shape:n.isMobile?"default":"circle",icon:n.isMobile?void 0:(0,C.jsx)(Z.Z,{size:n.isMobile?20:10,name:"IoPencilOutline"}),onClick:function(){if(n.findUrl){var e="string"===typeof n.findUrl?"".concat(n.findUrl,"?").concat(n.idProp,"=").concat(n.record[n.idProp]):n.findUrl(n.record);l.get(e)}else n.afterSelect(n.record)},children:n.isMobile?e("edit"):null})},S=function(n){var e=a.Z.useForm(),i=(0,o.Z)(e,1)[0];return(0,C.jsx)(v.Z,{destroyOnClose:!0,open:!0,onCancel:n.onCancel,title:n.title,onOk:function(){i.submit()},okButtonProps:{loading:n.loading},width:n.entryModalWidth,children:(0,C.jsx)(a.Z,{id:"entry-form",layout:"vertical",form:i,initialValues:n.initialValues,onFinish:n.onEntrySubmit,autoComplete:"off",children:(0,C.jsx)(n.EntryForm,{form:i,data:n.initialValues})})})},w=function(n){var e=(0,j.$)().t;return(0,C.jsx)(d.Z,{danger:!0,type:n.isMobile?"ghost":"primary",shape:n.isMobile?"default":"circle",icon:n.isMobile?void 0:(0,C.jsx)(Z.Z,{size:n.isMobile?20:10,name:"IoTrashOutline"}),onClick:n.onClick,children:n.isMobile?e("delete"):null})},z=u.Z.Panel,M=function(n){var e,i=n.id,M=n.title,P=n.columns,E=n.idProp,F=n.filterUrl,I=n.findUrl,U=n.addUrl,L=n.initialValues,O=n.disablePaging,V=n.EntryForm,N=n.children,A=n.deleteAction,W=n.editAction,$=n.pageSize,q=void 0===$?15:$,B=n.handleSubmit,T=void 0===B||B,D=n.customActions,K=n.buttons,R=n.scrollX,X=void 0===R?"1500px":R,Y=n.filtersHeight,_=n.scrollY,H=n.entryModalWidth,Q=n.enableRowNumber,G=void 0===Q||Q,J=(0,j.$)().t,nn=a.Z.useForm(),en=(0,o.Z)(nn,1)[0],tn=(0,p.useState)(!1),ln=(0,o.Z)(tn,2),rn=ln[0],on=ln[1],un=(0,p.useState)(!0),an=(0,o.Z)(un,2),dn=an[0],sn=an[1],cn=(0,p.useState)(null),fn=(0,o.Z)(cn,2),vn=fn[0],Zn=fn[1],mn=(0,p.useState)(null),hn=(0,o.Z)(mn,2),pn=hn[0],gn=hn[1],xn=(0,p.useState)(P),jn=(0,o.Z)(xn,2),yn=jn[0],bn=jn[1],Cn=(0,p.useState)({page:1,pageSize:q}),kn=(0,o.Z)(Cn,2),Sn=kn[0],wn=kn[1],zn=(0,p.useRef)(1),Mn=(0,x.Z)({initLoading:!0}),Pn=(0,o.Z)(Mn,4),En=Pn[0],Fn=Pn[1],In=Pn[2],Un=Pn[3],Ln=(0,x.Z)({onSuccess:function(n,e){Xn(e)}}),On=(0,o.Z)(Ln,2),Vn=On[0],Nn=On[1],An=(0,x.Z)({onSuccess:function(n,e){Yn(e?(0,r.Z)((0,r.Z)({},e),n):n)}}),Wn=(0,o.Z)(An,2),$n=Wn[0],qn=Wn[1],Bn=(0,x.Z)({onSuccess:function(n,e){var i=E,t=null===e||void 0===e?void 0:e[i];t&&Un((function(n){var e;return(0,r.Z)((0,r.Z)({},n),{},{totalEntitiesCount:null!==(e=null===n||void 0===n?void 0:n.totalEntitiesCount)&&void 0!==e?e:0,results:null===n||void 0===n?void 0:n.results.filter((function(n){return n[i]!==t}))})})),gn(null)}}),Tn=(0,o.Z)(Bn,2),Dn=Tn[0],Kn=Tn[1],Rn=(0,p.useMemo)((function(){return window.outerWidth<m.Z.breakpoints.xl}),[]),Xn=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=E,t=null===n||void 0===n?void 0:n[i];t&&Un((function(e){return(0,r.Z)((0,r.Z)({},e),{},{results:null===e||void 0===e?void 0:e.results.map((function(e){return e[i]===t?(0,r.Z)((0,r.Z)({},e),n):e}))})})),e&&on(!1)},Yn=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=E,t=null===n||void 0===n?void 0:n[i];t&&Un((function(e){var i,t;return(0,r.Z)((0,r.Z)({},e),{},{totalEntitiesCount:null!==(i=null===e||void 0===e?void 0:e.totalEntitiesCount)&&void 0!==i?i:1,results:[n].concat((0,l.Z)(null!==(t=null===e||void 0===e?void 0:e.results)&&void 0!==t?t:[]))})})),e&&on(!1)},_n=function(n){Zn(n),on(!0)},Hn=function(n){gn(n)},Qn=(0,p.useMemo)((function(){var n;if((!D||!D.length)&&!W&&!A)return null;var e=(null!==(n=null===D||void 0===D?void 0:D.length)&&void 0!==n?n:0)+(W?1:0)+(A?1:0);return{title:(0,C.jsx)(Z.Z,{name:"IoBuildOutline"}),align:"center",key:"actions",fixed:"right",width:Rn?30:25*e+8*(e-1)+40,dataIndex:"actions",render:function(n,e,i){if(Rn){var t=[];return W&&t.push({key:"edit",label:(0,C.jsx)(k,{findUrl:I,afterSelect:_n,idProp:E,record:e,isMobile:!0})}),A&&t.push({key:"delete",label:(0,C.jsx)(w,{isMobile:!0,onClick:function(){return Hn(e)}})}),null!==D&&void 0!==D&&D.length&&(t=t.concat(D.map((function(i,t){var l;return{key:"action-"+t,label:i.renderer?i.renderer(n,e,Un,Rn):(0,C.jsx)(d.Z,{type:Rn?"ghost":"primary",shape:Rn?"default":"circle",icon:(0,C.jsx)(Z.Z,{size:Rn?20:10,name:null!==(l=i.icon)&&void 0!==l?l:"BsDash"}),onClick:function(){var n;return null===(n=i.action)||void 0===n?void 0:n.call(i,e,Un)}},t)}})))),(0,C.jsx)(s.Z,{menu:{items:t},children:(0,C.jsx)("a",{onClick:function(n){return n.preventDefault()},children:(0,C.jsx)(Z.Z,{name:"FaEllipsisV"})})})}return(0,C.jsxs)(c.Z,{className:"actions",children:[!!W&&(0,C.jsx)(k,{findUrl:I,afterSelect:_n,idProp:E,record:e}),!!A&&(0,C.jsx)(w,{onClick:function(){return Hn(e)}}),!!D&&D.map((function(i,t){var l;return i.renderer?i.renderer(n,e,Un):(0,C.jsx)(d.Z,{type:"primary",shape:"circle",icon:(0,C.jsx)(Z.Z,{size:10,name:null!==(l=i.icon)&&void 0!==l?l:"BsDash"}),onClick:function(){var n;return null===(n=i.action)||void 0===n?void 0:n.call(i,e,Un)}},t)}))]})}}}),[D]),Gn=function(n){En.get("".concat(F,"?").concat(h.Z.convertToQueryString((0,r.Z)((0,r.Z)({},Sn),n)).toString()))},Jn=function(){Zn(null),on(!1)};(0,p.useEffect)((function(){Gn(en.getFieldsValue())}),[]);var ne=(0,p.useMemo)((function(){var n=Qn?[].concat((0,l.Z)(yn.filter((function(n){return"rowNumber"!==n.key})).map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{fixed:window.outerWidth<m.Z.breakpoints.lg?void 0:n.fixed})}))),[Qn]):yn.filter((function(n){return"rowNumber"!==n.key}));return G&&n.unshift({key:"rowNumber",title:"#",width:80,fixed:window.outerWidth<m.Z.breakpoints.lg?void 0:"left",render:function(n,e,i){return(0,C.jsx)("span",{children:(zn.current-1)*Sn.pageSize+i+1})}}),n}),[yn]);return(0,C.jsx)(g.Provider,{value:{form:en},children:(0,C.jsxs)(b.Z,{id:i,title:M,className:"admin",children:[(0,C.jsx)(u.Z,{defaultActiveKey:["filters"],onChange:function(){return sn((function(n){return!n}))},children:(0,C.jsx)(z,{header:J("filters"),extra:U?(0,C.jsx)(d.Z,{icon:(0,C.jsx)(Z.Z,{name:"IoAdd"}),onClick:function(n){n.stopPropagation(),Zn(null),on(!0)},type:"primary",size:"small",title:null!==(e=J("add"))&&void 0!==e?e:"",children:(0,C.jsx)("small",{children:J("add")})}):null,children:(0,C.jsxs)(a.Z,{name:"filters",form:en,initialValues:L,onFinish:function(n){wn((function(n){return(0,r.Z)((0,r.Z)({},n),{},{page:1})})),zn.current=1,(P.length!==yn.length||P.some((function(n){return!yn.map((function(n){return n.key})).includes(n.key)})))&&bn(P),Gn((0,r.Z)((0,r.Z)({},n),{},{page:1}))},autoComplete:"off",children:[N,(0,C.jsxs)(a.Z.Item,{className:"flex-row-end btns",children:[null===K||void 0===K?void 0:K.map((function(n){var e;return(0,C.jsx)(d.Z,{type:null!==(e="primary")?e:n.type,htmlType:"button",style:n.style,className:n.className,onClick:function(e){return n.onClick(e,en.getFieldsValue())},children:n.children})})),(0,C.jsx)(d.Z,{type:"primary",htmlType:"submit",children:J("filter")})]})]})},"filters")}),(0,C.jsx)(f.Z,{loading:Fn,direction:"rtl",rowKey:E,columns:ne,dataSource:null===In?void 0:(0,l.Z)(In.results),onChange:function(n,e,i){var t,l,o,u;wn({page:null!==(t=n.current)&&void 0!==t?t:1,pageSize:null!==(l=n.pageSize)&&void 0!==l?l:15}),zn.current=null!==(o=n.current)&&void 0!==o?o:1,Gn((0,r.Z)((0,r.Z)({},en.getFieldsValue()),{},{page:null!==(u=n.current)&&void 0!==u?u:1}))},scroll:{x:X,y:_?_+(dn?0:null!==Y&&void 0!==Y?Y:0):_},pagination:O?void 0:{pageSize:Sn.pageSize,current:Sn.page,total:null===In||void 0===In?void 0:In.totalEntitiesCount}},"table-".concat(E)),!!V&&(T?rn?(0,C.jsx)(S,{EntryForm:V,onCancel:Jn,onEntrySubmit:function(n){W&&vn?Vn.put(W.url,n):U&&!vn&&$n.post(U,n)},entryModalWidth:H,title:J(vn?"edit":"add"),initialValues:null!==vn&&void 0!==vn?vn:void 0,loading:qn||Nn}):null:rn?(0,C.jsx)(v.Z,{destroyOnClose:!0,open:!0,onCancel:Jn,title:J(vn?"edit":"add"),footer:null,width:H,children:(0,C.jsx)(V,{onCancel:function(){return on(!1)},data:vn,onSuccess:vn?Xn:Yn})}):null),(0,C.jsx)(y.Z,{open:!!pn,loading:Kn,onOk:function(){if(pn&&A){var n,e;if("string"!==typeof(null===A||void 0===A?void 0:A.url)&&~(null===A||void 0===A?void 0:A.url(pn).indexOf("?")))throw new Error("delete url cannot have query strings");var i="string"===typeof(null===A||void 0===A?void 0:A.url)?"".concat(A.url):null===A||void 0===A?void 0:A.url(pn);Dn.delete(i,(0,t.Z)({},null!==(n=null===A||void 0===A?void 0:A.sendingProp)&&void 0!==n?n:E,pn[null!==(e=null===A||void 0===A?void 0:A.sendingProp)&&void 0!==e?e:E]))}},onCancel:function(){return gn(null)}})]})})}},502:function(n,e,i){var t=i(3655),l=i(4021),r=i(2020),o=i(184),u=t.Z.Paragraph;e.Z=function(n){var e=n.open,i=n.onOk,t=n.loading,a=n.onCancel,d=n.title,s=n.message,c=(0,r.$)().t;return(0,o.jsx)(l.Z,{title:null!==d&&void 0!==d?d:c("delete"),open:e,onOk:i,onCancel:a,okButtonProps:{danger:!0,loading:t},children:(0,o.jsx)(u,{children:s||c("areYouSure")})})}}}]);
//# sourceMappingURL=95.5f91f7cc.chunk.js.map