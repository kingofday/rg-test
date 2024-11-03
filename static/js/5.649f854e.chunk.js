"use strict";(self.webpackChunkregional_water=self.webpackChunkregional_water||[]).push([[5],{2580:function(i,e,n){n.d(e,{Z:function(){return Z}});var l=n(3433),t=n(9439),o=n(914),r=n(8993),a=n(458),d=n(9530),s=n(543),c=function(i){var e=i.location,n=i.entryFrm,l=i.namePrefix,o=(0,s.Z)({autoCallUrl:d.Z.locations.counties,cachingLifeTimeInSeconds:60}),r=(0,t.Z)(o,3),a=(r[0],r[1]),c=r[2],u=(0,s.Z)({cachingLifeTimeInSeconds:60,autoCallUrl:null!==e&&void 0!==e&&e.countyId?d.Z.locations.districs(null===e||void 0===e?void 0:e.countyId.toString()):void 0}),v=(0,t.Z)(u,3),f=v[0],Z=v[1],g=v[2],h=(0,s.Z)({cachingLifeTimeInSeconds:60,autoCallUrl:null!==e&&void 0!==e&&e.districtId?d.Z.locations.cities(null===e||void 0===e?void 0:e.districtId.toString()):void 0}),m=(0,t.Z)(h,3),p=m[0],x=m[1],y=m[2],I=(0,s.Z)({cachingLifeTimeInSeconds:60,autoCallUrl:null!==e&&void 0!==e&&e.districtId?d.Z.locations.ruralDistricts(null===e||void 0===e?void 0:e.districtId.toString()):void 0}),C=(0,t.Z)(I,3),j=C[0],b=C[1],S=C[2],k=(0,s.Z)({cachingLifeTimeInSeconds:60,autoCallUrl:null!==e&&void 0!==e&&e.ruralDistrictId?d.Z.locations.villages(null===e||void 0===e?void 0:e.ruralDistrictId.toString()):void 0}),w=(0,t.Z)(k,3),F=w[0],D=w[1],V=w[2];return{loadingCounties:a,counties:c,onCountyChanged:function(i){n.resetFields([l?[l,"districtId"]:"districtId",l?[l,"cityId"]:"cityId",l?[l,"ruralDistrictId"]:"ruralDistrictId",l?[l,"villageId"]:"villageId"]);n.getFieldInstance(l?[l,"districtId"]:"districtId");n.setFieldValue(l?[l,"districtId"]:"districtId",""),n.setFieldValue(l?[l,"cityId"]:"cityId",""),n.setFieldValue(l?[l,"ruralDistrictId"]:"ruralDistrictId",""),n.setFieldValue(l?[l,"villageId"]:"villageId",""),""!==i&&f.get(d.Z.locations.districs(i))},loadingDistricts:Z,districts:g,onDistrictChanged:function(i){n.resetFields([l?[l,"cityId"]:"cityId",l?[l,"ruralDistrictId"]:"ruralDistrictId",l?[l,"villageId"]:"villageId"]),n.setFieldValue(l?[l,"cityId"]:"cityId",""),n.setFieldValue(l?[l,"ruralDistrictId"]:"ruralDistrictId",""),n.setFieldValue(l?[l,"villageId"]:"villageId",""),""!==i&&(p.get(d.Z.locations.cities(i)),j.get(d.Z.locations.ruralDistricts(i)))},loadingCities:x,cities:y,getRuralDistricts:j,loadingRuralDistricts:b,ruralDistricts:S,onRuralDistrictsChanged:function(i){n.resetFields([l?[l,"villageId"]:"villageId"]),n.setFieldValue(l?[l,"villageId"]:"villageId",""),""!==i&&F.get(d.Z.locations.villages(i))},loadingVillages:D,villages:V}},u=n(2791),v=n(2020),f=n(184),Z=function(i){var e,n,d,s,Z,g=i.entryFrm,h=i.data,m=i.namePrefix,p=i.readOnly,x=i.hideIfCityIdSelected,y=(0,v.$)().t,I=c({entryFrm:g,location:h,namePrefix:m}),C=I.loadingCounties,j=I.counties,b=I.onCountyChanged,S=I.loadingDistricts,k=I.districts,w=I.onDistrictChanged,F=I.loadingCities,D=I.cities,V=I.loadingRuralDistricts,M=I.ruralDistricts,P=I.onRuralDistrictsChanged,z=I.loadingVillages,U=I.villages,E=(0,u.useState)(null===h||void 0===h?void 0:h.cityId),O=(0,t.Z)(E,2),T=O[0],A=O[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z,{xs:12,sm:8,md:6,children:(0,f.jsx)(r.Z.Item,{name:m?[m,"countyId"]:"countyId",label:y("county"),children:(0,f.jsx)(a.Z,{allowClear:!0,showSearch:!0,placeholder:y("county"),loading:C,onChange:b,disabled:p,options:[{label:y("selcet"),value:""}].concat((0,l.Z)(null!==(e=null===j||void 0===j?void 0:j.map((function(i){return{label:i.name,value:i.id}})))&&void 0!==e?e:[]))})})}),(0,f.jsx)(o.Z,{xs:12,sm:8,md:6,children:(0,f.jsx)(r.Z.Item,{name:m?[m,"districtId"]:"districtId",label:y("district"),children:(0,f.jsx)(a.Z,{allowClear:!0,showSearch:!0,placeholder:y("district"),loading:S,onChange:w,disabled:p,options:[{label:y("selcet"),value:""}].concat((0,l.Z)(null!==(n=null===k||void 0===k?void 0:k.map((function(i){return{label:i.name,value:i.id}})))&&void 0!==n?n:[]))})})}),(0,f.jsx)(o.Z,{xs:12,sm:8,md:6,children:(0,f.jsx)(r.Z.Item,{name:m?[m,"cityId"]:"cityId",label:y("city"),children:(0,f.jsx)(a.Z,{allowClear:!0,showSearch:!0,placeholder:y("city"),loading:F,disabled:p,onChange:A,options:[{label:y("selcet"),value:""}].concat((0,l.Z)(null!==(d=null===D||void 0===D?void 0:D.map((function(i){return{label:i.name,value:i.id}})))&&void 0!==d?d:[]))})})}),T&&x?null:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z,{xs:12,sm:8,md:6,children:(0,f.jsx)(r.Z.Item,{name:m?[m,"ruralDistrictId"]:"ruralDistrictId",label:y("rural"),children:(0,f.jsx)(a.Z,{allowClear:!0,showSearch:!0,placeholder:y("rural"),loading:V,onChange:P,disabled:p,options:[{label:y("selcet"),value:""}].concat((0,l.Z)(null!==(s=null===M||void 0===M?void 0:M.map((function(i){return{label:i.name,value:i.id}})))&&void 0!==s?s:[]))})})}),(0,f.jsx)(o.Z,{xs:12,sm:8,md:6,children:(0,f.jsx)(r.Z.Item,{name:m?[m,"villageId"]:"villageId",label:y("village"),children:(0,f.jsx)(a.Z,{allowClear:!0,showSearch:!0,placeholder:y("village"),loading:z,disabled:p,options:[{label:y("selcet"),value:""}].concat((0,l.Z)(null!==(Z=null===U||void 0===U?void 0:U.map((function(i){return{label:i.name,value:i.id}})))&&void 0!==Z?Z:[]))})})})]})]})}},5485:function(i,e,n){n.d(e,{Z:function(){return F}});var l=n(4942),t=n(3433),o=n(1413),r=n(9439),a=n(4916),d=n(8993),s=n(7309),c=n(294),u=n(3099),v=n(4525),f=n(4021),Z=n(4661),g=n(5486),h=n(8467),m=n(2791),p=(0,m.createContext)({}),x=n(543),y=n(2020),I=n(502),C=n(5761),j=n(184),b=function(i){var e,n=(0,y.$)().t,l=(0,x.Z)({onSuccess:function(e){i.afterSelect(e)}}),t=(0,r.Z)(l,2),o=t[0],a=t[1];return(0,j.jsx)(s.Z,{loading:a,type:i.isMobile?"ghost":"primary",shape:i.isMobile?"default":"circle",icon:i.isMobile?void 0:(0,j.jsx)(Z.Z,{size:i.isMobile?20:10,name:"IoPencilOutline"}),onClick:function(){if(i.findUrl){var e="string"===typeof i.findUrl?"".concat(i.findUrl,"?").concat(i.idProp,"=").concat(i.record[i.idProp]):i.findUrl(i.record);o.get(e)}else i.afterSelect(i.record)},title:null!==(e=n("edit"))&&void 0!==e?e:"",children:i.isMobile?n("edit"):null})},S=function(i){var e=d.Z.useForm(),n=(0,r.Z)(e,1)[0];return(0,j.jsx)(f.Z,{destroyOnClose:!0,open:!0,onCancel:i.onCancel,title:i.title,onOk:function(){n.submit()},okButtonProps:{loading:i.loading},width:i.entryModalWidth,children:(0,j.jsx)(d.Z,{id:"entry-form",layout:"vertical",form:n,initialValues:i.data||i.initialValues,onFinish:i.onEntrySubmit,autoComplete:"off",children:(0,j.jsx)(i.EntryForm,{form:n,initialValues:i.initialValues,data:i.data})})})},k=function(i){var e,n=(0,y.$)().t;return(0,j.jsx)(s.Z,{danger:!0,type:i.isMobile?"ghost":"primary",shape:i.isMobile?"default":"circle",icon:i.isMobile?void 0:(0,j.jsx)(Z.Z,{size:i.isMobile?20:10,name:"IoTrashOutline"}),onClick:i.onClick,title:null!==(e=n("delete"))&&void 0!==e?e:"",children:i.isMobile?n("delete"):null})},w=a.Z.Panel,F=function(i){var e,n,F=i.id,D=i.title,V=i.columns,M=i.idProp,P=i.filterUrl,z=i.findUrl,U=i.addUrl,E=i.initialValues,O=i.disablePaging,T=i.EntryForm,A=i.children,N=i.deleteAction,R=i.editAction,L=i.pageSize,W=void 0===L?15:L,B=i.handleSubmit,$=void 0===B||B,_=i.customActions,K=i.buttons,Y=i.scrollX,q=void 0===Y?"1500px":Y,H=i.filtersHeight,Q=i.scrollY,X=i.entryModalWidth,G=i.enableRowNumber,J=void 0===G||G,ii=(0,y.$)().t,ei=d.Z.useForm(),ni=(0,r.Z)(ei,1)[0],li=(0,m.useState)(!1),ti=(0,r.Z)(li,2),oi=ti[0],ri=ti[1],ai=(0,m.useState)(!0),di=(0,r.Z)(ai,2),si=di[0],ci=di[1],ui=(0,m.useState)(null),vi=(0,r.Z)(ui,2),fi=vi[0],Zi=vi[1],gi=(0,m.useState)(null),hi=(0,r.Z)(gi,2),mi=hi[0],pi=hi[1],xi=(0,m.useState)(V),yi=(0,r.Z)(xi,2),Ii=yi[0],Ci=yi[1],ji=(0,m.useState)({page:1,pageSize:W}),bi=(0,r.Z)(ji,2),Si=bi[0],ki=bi[1],wi=(0,m.useRef)(1),Fi=(0,x.Z)({initLoading:!0}),Di=(0,r.Z)(Fi,4),Vi=Di[0],Mi=Di[1],Pi=Di[2],zi=Di[3],Ui=(0,x.Z)({onSuccess:function(i,e){Yi(e)}}),Ei=(0,r.Z)(Ui,2),Oi=Ei[0],Ti=Ei[1],Ai=(0,x.Z)({onSuccess:function(i,e){qi(e?(0,o.Z)((0,o.Z)({},e),i):i)}}),Ni=(0,r.Z)(Ai,2),Ri=Ni[0],Li=Ni[1],Wi=(0,x.Z)({onSuccess:function(i,e){var n=M,l=null===e||void 0===e?void 0:e[n];l&&zi((function(i){var e;return(0,o.Z)((0,o.Z)({},i),{},{totalEntitiesCount:null!==(e=null===i||void 0===i?void 0:i.totalEntitiesCount)&&void 0!==e?e:0,results:null===i||void 0===i?void 0:i.results.filter((function(i){return i[n]!==l}))})})),pi(null)}}),Bi=(0,r.Z)(Wi,2),$i=Bi[0],_i=Bi[1],Ki=(0,m.useMemo)((function(){return window.outerWidth<g.Z.breakpoints.xl}),[]),Yi=function(i){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=M,l=null===i||void 0===i?void 0:i[n];l&&zi((function(e){return(0,o.Z)((0,o.Z)({},e),{},{results:null===e||void 0===e?void 0:e.results.map((function(e){return e[n]===l?(0,o.Z)((0,o.Z)({},e),i):e}))})})),e&&ri(!1)},qi=function(i){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=M,l=null===i||void 0===i?void 0:i[n];l&&zi((function(e){var n,l;return(0,o.Z)((0,o.Z)({},e),{},{totalEntitiesCount:null!==(n=null===e||void 0===e?void 0:e.totalEntitiesCount)&&void 0!==n?n:1,results:[i].concat((0,t.Z)(null!==(l=null===e||void 0===e?void 0:e.results)&&void 0!==l?l:[]))})})),e&&ri(!1)},Hi=function(i){Zi(i),ri(!0)},Qi=function(i){pi(i)},Xi=(0,m.useMemo)((function(){var i;if((!_||!_.length)&&!R&&!N)return null;var e=(null!==(i=null===_||void 0===_?void 0:_.length)&&void 0!==i?i:0)+(R?1:0)+(N?1:0);return{title:(0,j.jsx)(Z.Z,{name:"IoBuildOutline"}),align:"center",key:"actions",fixed:"right",width:Ki?30:25*e+8*(e-1)+40,dataIndex:"actions",render:function(i,e,n){if(Ki){var l=[];return R&&l.push({key:"edit",label:(0,j.jsx)(b,{findUrl:z,afterSelect:Hi,idProp:M,record:e,isMobile:!0})}),N&&l.push({key:"delete",label:(0,j.jsx)(k,{isMobile:!0,onClick:function(){return Qi(e)}})}),null!==_&&void 0!==_&&_.length&&(l=l.concat(_.map((function(n,l){var t;return{key:"action-"+l,label:n.renderer?n.renderer(i,e,zi,Ki):(0,j.jsx)(s.Z,{type:Ki?"ghost":"primary",shape:Ki?"default":"circle",icon:(0,j.jsx)(Z.Z,{size:Ki?20:10,name:null!==(t=n.icon)&&void 0!==t?t:"BsDash"}),onClick:function(){var i;return null===(i=n.action)||void 0===i?void 0:i.call(n,e,zi)}},l)}})))),(0,j.jsx)(c.Z,{menu:{items:l},children:(0,j.jsx)("a",{onClick:function(i){return i.preventDefault()},children:(0,j.jsx)(Z.Z,{name:"FaEllipsisV"})})})}return(0,j.jsxs)(u.Z,{className:"actions",children:[!!R&&(0,j.jsx)(b,{findUrl:z,afterSelect:Hi,idProp:M,record:e}),!!N&&(0,j.jsx)(k,{onClick:function(){return Qi(e)}}),!!_&&_.map((function(n,l){var t;return n.renderer?n.renderer(i,e,zi):(0,j.jsx)(s.Z,{type:"primary",shape:"circle",icon:(0,j.jsx)(Z.Z,{size:10,name:null!==(t=n.icon)&&void 0!==t?t:"BsDash"}),onClick:function(){var i;return null===(i=n.action)||void 0===i?void 0:i.call(n,e,zi)}},l)}))]})}}}),[_]),Gi=function(i){i.stopPropagation(),Zi(null),ri(!0)},Ji=function(i){Vi.get("".concat(P,"?").concat(h.Z.convertToQueryString((0,o.Z)((0,o.Z)({},Si),i)).toString()))},ie=function(){Zi(null),ri(!1)};(0,m.useEffect)((function(){Ji(ni.getFieldsValue())}),[]);var ee=(0,m.useMemo)((function(){var i=Xi?[].concat((0,t.Z)(Ii.filter((function(i){return"rowNumber"!==i.key})).map((function(i){return(0,o.Z)((0,o.Z)({},i),{},{fixed:window.outerWidth<g.Z.breakpoints.lg?void 0:i.fixed})}))),[Xi]):Ii.filter((function(i){return"rowNumber"!==i.key}));return J&&i.unshift({key:"rowNumber",title:"#",width:80,fixed:window.outerWidth<g.Z.breakpoints.lg?void 0:"left",render:function(i,e,n){return(0,j.jsx)("span",{children:(wi.current-1)*Si.pageSize+n+1})}}),i}),[Ii]);return(0,j.jsx)(p.Provider,{value:{form:ni},children:(0,j.jsxs)(C.Z,{id:F,title:D,className:"admin",children:[!Ki&&!!U&&(0,j.jsx)("div",{children:(0,j.jsx)(s.Z,{icon:(0,j.jsx)(Z.Z,{name:"IoAdd"}),onClick:Gi,type:"primary",size:"small",title:null!==(e=ii("add"))&&void 0!==e?e:"",children:(0,j.jsx)("small",{children:ii("add")})})}),(0,j.jsx)(a.Z,{defaultActiveKey:["filters"],onChange:function(){return ci((function(i){return!i}))},children:(0,j.jsx)(w,{header:ii("filters"),extra:U&&Ki?(0,j.jsx)(s.Z,{icon:(0,j.jsx)(Z.Z,{name:"IoAdd"}),onClick:Gi,type:"primary",size:"small",title:null!==(n=ii("add"))&&void 0!==n?n:"",children:(0,j.jsx)("small",{children:ii("add")})}):null,children:(0,j.jsx)(d.Z,{name:"filters",form:ni,initialValues:E,onFinish:function(i){ki((function(i){return(0,o.Z)((0,o.Z)({},i),{},{page:1})})),wi.current=1,(V.length!==Ii.length||V.some((function(i){return!Ii.map((function(i){return i.key})).includes(i.key)})))&&Ci(V),Ji((0,o.Z)((0,o.Z)({},i),{},{page:1}))},autoComplete:"off",children:(0,j.jsxs)(u.Z,{direction:"horizontal",children:[A,(0,j.jsxs)(d.Z.Item,{className:"flex-row-end btns",children:[null===K||void 0===K?void 0:K.map((function(i){return(0,j.jsx)(s.Z,{type:"primary",htmlType:"button",style:i.style,className:i.className,onClick:function(e){return i.onClick(e,ni.getFieldsValue())},children:i.children})})),(0,j.jsx)(s.Z,{type:"primary",htmlType:"submit",children:ii("search")})]})]})})},"filters")}),(0,j.jsx)(v.Z,{loading:Mi,direction:"rtl",rowKey:M,columns:ee,dataSource:null===Pi?void 0:(0,t.Z)(Pi.results),onChange:function(i,e,n){var l,t,r,a;ki({page:null!==(l=i.current)&&void 0!==l?l:1,pageSize:null!==(t=i.pageSize)&&void 0!==t?t:15}),wi.current=null!==(r=i.current)&&void 0!==r?r:1,Ji((0,o.Z)((0,o.Z)({},ni.getFieldsValue()),{},{page:null!==(a=i.current)&&void 0!==a?a:1}))},scroll:{x:q,y:Q?Q+(si?0:null!==H&&void 0!==H?H:0):Q},pagination:O?void 0:{pageSize:Si.pageSize,current:Si.page,total:null===Pi||void 0===Pi?void 0:Pi.totalEntitiesCount}},"table-".concat(M)),!!T&&($?oi?(0,j.jsx)(S,{EntryForm:T,onCancel:ie,onEntrySubmit:function(i){R&&fi?Oi.put(R.url,i):U&&!fi&&Ri.post(U,i)},entryModalWidth:X,title:ii(fi?"edit":"add"),data:null!==fi&&void 0!==fi?fi:void 0,initialValues:null!==E&&void 0!==E?E:void 0,loading:Li||Ti}):null:oi?(0,j.jsx)(f.Z,{destroyOnClose:!0,open:!0,onCancel:ie,title:ii(fi?"edit":"add"),footer:null,width:X,children:(0,j.jsx)(T,{onCancel:function(){return ri(!1)},data:fi,onSuccess:fi?Yi:qi})}):null),(0,j.jsx)(I.Z,{open:!!mi,loading:_i,onOk:function(){if(mi&&N){var i,e;if("string"!==typeof(null===N||void 0===N?void 0:N.url)&&~(null===N||void 0===N?void 0:N.url(mi).indexOf("?")))throw new Error("delete url cannot have query strings");var n="string"===typeof(null===N||void 0===N?void 0:N.url)?"".concat(N.url):null===N||void 0===N?void 0:N.url(mi);$i.delete(n,(0,l.Z)({},null!==(i=null===N||void 0===N?void 0:N.sendingProp)&&void 0!==i?i:M,mi[null!==(e=null===N||void 0===N?void 0:N.sendingProp)&&void 0!==e?e:M]))}},onCancel:function(){return pi(null)}})]})})}},502:function(i,e,n){var l=n(3655),t=n(4021),o=n(2020),r=n(184),a=l.Z.Paragraph;e.Z=function(i){var e=i.open,n=i.onOk,l=i.loading,d=i.onCancel,s=i.title,c=i.message,u=(0,o.$)().t;return(0,r.jsx)(t.Z,{title:null!==s&&void 0!==s?s:u("delete"),open:e,onOk:n,onCancel:d,okButtonProps:{danger:!0,loading:l},children:(0,r.jsx)(a,{children:c||u("areYouSure")})})}},6129:function(i,e,n){var l=n(8467),t=n(184);e.Z=function(i){var e=i.value,n=i.enabelCopy,o=void 0===n||n;return(0,t.jsx)("span",{onClick:o?function(){return l.Z.copyToClipboard(e)}:void 0,title:e,children:l.Z.commaThousondSeperator("string"===typeof e?parseFloat(e):e)})}},3447:function(i,e){e.Z={nationalCode:/\d{10}/,personelId:/\d{4}/,email:/\S+@\S+\.\S+/,mobile:/09[0-9]{2}(-| )?[0-9]{3}(-| )?[0-9]{4}/,phone:/0\d{10}/,ip:/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/,postalCode:/\d{10}/,url:/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/}}}]);
//# sourceMappingURL=5.649f854e.chunk.js.map