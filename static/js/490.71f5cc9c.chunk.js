"use strict";(self.webpackChunkregional_water=self.webpackChunkregional_water||[]).push([[490],{2730:function(e,n,t){var a=t(3433),l=t(914),i=t(8993),r=t(458),o=t(7137),d=t(2020),s=t(184);n.Z=function(e){var n,t,c,u,m,v=e.entryFrm,f=e.data,p=e.namePrefix,g=e.readOnly,h=(0,d.$)().t,Z=(0,o.Z)({entryFrm:v,location:f,namePrefix:p}),I=Z.loadingCounties,x=Z.counties,y=Z.onCountyChanged,j=Z.loadingDistricts,C=Z.districts,b=Z.onDistrictChanged,w=Z.loadingCities,D=Z.cities,S=Z.loadingRuralDistricts,F=Z.ruralDistricts,O=Z.onRuralDistrictsChanged,k=Z.loadingVillages,N=Z.villages;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{xs:12,sm:8,md:6,children:(0,s.jsx)(i.Z.Item,{name:p?[p,"countyId"]:"countyId",label:h("county"),children:(0,s.jsx)(r.Z,{allowClear:!0,showSearch:!0,placeholder:h("county"),loading:I,onChange:y,disabled:g,options:[{label:h("selcet"),value:""}].concat((0,a.Z)(null!==(n=null===x||void 0===x?void 0:x.map((function(e){return{label:e.name,value:e.id}})))&&void 0!==n?n:[]))})})}),(0,s.jsx)(l.Z,{xs:12,sm:8,md:6,children:(0,s.jsx)(i.Z.Item,{name:p?[p,"districtId"]:"districtId",label:h("district"),children:(0,s.jsx)(r.Z,{allowClear:!0,showSearch:!0,placeholder:h("district"),loading:j,onChange:b,disabled:g,options:[{label:h("selcet"),value:""}].concat((0,a.Z)(null!==(t=null===C||void 0===C?void 0:C.map((function(e){return{label:e.name,value:e.id}})))&&void 0!==t?t:[]))})})}),(0,s.jsx)(l.Z,{xs:12,sm:8,md:6,children:(0,s.jsx)(i.Z.Item,{name:p?[p,"cityId"]:"cityId",label:h("city"),children:(0,s.jsx)(r.Z,{allowClear:!0,showSearch:!0,placeholder:h("city"),loading:w,disabled:g,options:[{label:h("selcet"),value:""}].concat((0,a.Z)(null!==(c=null===D||void 0===D?void 0:D.map((function(e){return{label:e.name,value:e.id}})))&&void 0!==c?c:[]))})})}),(0,s.jsx)(l.Z,{xs:12,sm:8,md:6,children:(0,s.jsx)(i.Z.Item,{name:p?[p,"ruralDistrictId"]:"ruralDistrictId",label:h("rural"),children:(0,s.jsx)(r.Z,{allowClear:!0,showSearch:!0,placeholder:h("rural"),loading:S,onChange:O,disabled:g,options:[{label:h("selcet"),value:""}].concat((0,a.Z)(null!==(u=null===F||void 0===F?void 0:F.map((function(e){return{label:e.name,value:e.id}})))&&void 0!==u?u:[]))})})}),(0,s.jsx)(l.Z,{xs:12,sm:8,md:6,children:(0,s.jsx)(i.Z.Item,{name:p?[p,"villageId"]:"villageId",label:h("village"),children:(0,s.jsx)(r.Z,{allowClear:!0,showSearch:!0,placeholder:h("village"),loading:k,disabled:g,options:[{label:h("selcet"),value:""}].concat((0,a.Z)(null!==(m=null===N||void 0===N?void 0:N.map((function(e){return{label:e.name,value:e.id}})))&&void 0!==m?m:[]))})})})]})}},7666:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(1413),l=t(8993),i=t(9439),r=t(5696),o=t(5285),d=(t(9554),t(2791)),s=t(177),c=t(7309),u=t(7564),m=t(184),v=function(e){var n=new Date(e),t=new Intl.DateTimeFormat("fa-IR").format(n).split("/");return"".concat(o.Z.numberConverter(t[0]),"/").concat(o.Z.numberConverter(t[1]),"/").concat(o.Z.numberConverter(t[2]))},f=function(e){var n=e.placeholder,t=e.popupTargetId,l=e.value,f=e.onRemove,p=e.onChange,g=e.endTime,h=e.disabled,Z=e.readOnly,I=(0,d.useRef)(null),x=(0,d.useState)((function(){return l?v(l):""})),y=(0,i.Z)(x,2),j=y[0],C=y[1],b=function(){var e;return null===(e=I.current)||void 0===e?void 0:e.focus()};return(0,d.useEffect)((function(){if("undefined"!==typeof l){var e=v(l);(null==l&&null!==j||null===j&&null!==l||e!==j)&&C(e)}}),[l]),(0,m.jsx)(r.p,{showSidebar:!1,inputControl:function(e){return(0,m.jsx)(s.Z,(0,a.Z)({ref:I,readOnly:Z,suffix:f&&l?(0,m.jsxs)(c.Z,{type:"link",onClick:function(){return f()},children:[(0,m.jsx)(u.Z,{size:16,name:"IoCloseOutline"})," "]}):(0,m.jsx)(c.Z,{type:"link",onClick:b,children:(0,m.jsx)(u.Z,{size:16,name:"IoCalendarClearOutline"})}),disabled:h,placeholder:n},e))},popupTargetId:t,onChange:function(e){if(e){var n,t=e.split("/"),a=(0,i.Z)(t,3),l=a[0],r=a[1],d=a[2],s=o.Z.convertToDate(parseInt(l),parseInt(r),parseInt(d)),c=g?new Date(s[0],s[1]-1,s[2],23,59,59,0):new Date(s[0],s[1]-1,s[2],0,0,0,0);null===p||void 0===p||p(null!==(n=c.toISOString())&&void 0!==n?n:null)}else null===p||void 0===p||p(null)},value:j})},p=function(e){var n=e.form||l.Z;return(0,m.jsx)(n.Item,{className:"date-picker-form-item",name:e.name,rules:e.rules,label:e.label,children:(0,m.jsx)(f,(0,a.Z)({},e))})}},2509:function(e,n,t){var a=t(1413),l=t(4925),i=t(8993),r=t(7097),o=t(184),d=["form","name","rules","label","stringMode","id","className","placeholder","readOnly","disabled"];n.Z=function(e){var n=e.form,t=e.name,s=e.rules,c=e.label,u=e.stringMode,m=e.id,v=e.className,f=e.placeholder,p=e.readOnly,g=e.disabled,h=(0,l.Z)(e,d),Z=n||i.Z;return(0,o.jsx)(Z.Item,(0,a.Z)((0,a.Z)({className:v,name:t,rules:s,label:c,id:m},h),{},{children:(0,o.jsx)(r.Z,{stringMode:null!==u&&void 0!==u&&u,formatter:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},placeholder:f,className:"ltr-elm placeholder-r w-100 ".concat(v),controls:!1,readOnly:p,disabled:g})}))}},5097:function(e,n,t){var a=t(1413),l=t(9439),i=t(8993),r=t(6106),o=t(914),d=t(2964),s=t(177),c=t(6388),u=t(7309),m=t(6810),v=t(2791),f=t(2020),p=t(184);n.Z=function(e){var n,t=(0,f.$)().t,g=i.Z.useForm(),h=(0,l.Z)(g,1)[0],Z=(0,v.useState)(0),I=(0,l.Z)(Z,2),x=I[0],y=I[1],j=(0,v.useState)([]),C=(0,l.Z)(j,2),b=C[0],w=C[1],D=(0,m.Z)({onSuccess:function(n){var t;null===(t=e.onSuccess)||void 0===t||t.call(e,n,!1),y((function(e){return e+1}))}}),S=(0,l.Z)(D,2),F=S[0],O=S[1],k=(0,m.Z)({autoCallUrl:e.data?e.findUrl(e.data.id):void 0,onSuccess:function(e){var n=e;n&&h.setFieldsValue(n)}}),N=(0,l.Z)(k,2),T=(N[0],N[1]),U=function(){y((function(e){return e-1}))},M=function(e){e.stopPropagation(),e.preventDefault(),y((function(e){return e+1})),w([]),document.getElementsByClassName("ant-modal-wrap")[0].scrollTop=0};return(0,p.jsx)(i.Z,{id:e.frmName,form:h,layout:"vertical",initialValues:e.data,onFinish:function(n){var t=n;e.data?F.put(e.updateUrl,t):F.post(e.addUrl,t)},onFinishFailed:function(e){w(e.errorFields.map((function(e){return'"'.concat(t(e.name[e.name.length-1].replace("Id","")),'" ').concat(e.errors[0])})))},autoComplete:"off",disabled:T,children:(0,p.jsxs)(r.Z,{gutter:[0,20],children:[T&&(0,p.jsx)(o.Z,{xs:24,sm:24,children:(0,p.jsx)(d.Z,{type:"info",message:"".concat(t("loading"),"...")})}),e.data&&(0,p.jsx)(p.Fragment,{children:null===(n=e.hiddenInputs)||void 0===n?void 0:n.map((function(e){return(0,p.jsx)(i.Z.Item,{noStyle:!0,name:e,children:(0,p.jsx)(s.Z,{type:"hidden"})},e)}))}),(0,p.jsx)(o.Z,{xs:24,sm:24,children:(0,p.jsx)(c.Z,{responsive:!1,size:"small",current:x,items:e.steps.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:"".concat(e.id,"-step")})}))})}),!!b.length&&(0,p.jsx)(o.Z,{xs:24,sm:24,children:(0,p.jsx)(d.Z,{type:"error",message:b.map((function(e,n){return(0,p.jsx)("p",{children:e},n)}))})}),(0,p.jsx)(o.Z,{xs:24,sm:24,children:e.steps.map((function(n,t){return n.destroyOnHide&&x!==t?null:(0,p.jsx)("div",{className:"step-content",id:n.id,style:{display:x===t?"block":"none",position:"relative"},children:(0,p.jsx)(r.Z,{gutter:10,children:(0,p.jsx)(n.content,{data:e.data,entryFrm:h,readOnly:e.readOnly})})},n.id)}))}),(0,p.jsx)(o.Z,{xs:24,sm:24,children:(0,p.jsx)("div",{className:"actions",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:function(){switch(x){case e.steps.length-1:return(0,p.jsxs)(p.Fragment,{children:[e.readOnly?(0,p.jsx)(u.Z,{loading:!!e.data&&T,onClick:U,children:t("prev")}):(0,p.jsx)("span",{}),(0,p.jsx)(u.Z,{htmlType:"button",type:"primary",danger:!0,onClick:e.onCancel,children:t("close")})]});case e.steps.length-2:return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.Z,{loading:!!e.data&&T,onClick:U,children:t("prev")}),(0,p.jsx)(u.Z,{htmlType:e.readOnly?"button":"submit",type:"primary",disabled:T||O,loading:O,onClick:e.readOnly?M:void 0,children:t(e.readOnly?"next":"submit")})]});default:return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.Z,{disabled:0===x,loading:!!e.data&&T,onClick:U,children:t("prev")}),(0,p.jsx)(u.Z,{htmlType:"button",type:"primary",onClick:M,disabled:T,children:t("next")})]})}}()})})]})},e.frmName)}},6129:function(e,n,t){var a=t(8467),l=t(184);n.Z=function(e){var n=e.value,t=e.enabelCopy,i=void 0===t||t;return(0,l.jsx)("span",{onClick:i?function(){return a.Z.copyToClipboard(n)}:void 0,title:n,children:a.Z.commaThousondSeperator("string"===typeof n?parseFloat(n):n)})}},3447:function(e,n){n.Z={nationalCode:/\d{10}/,personelId:/\d{4}/,email:/\S+@\S+\.\S+/,mobile:/09[0-9]{2}(-| )?[0-9]{3}(-| )?[0-9]{4}/,phone:/0\d{10}/,ip:/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/,postalCode:/\d{10}/,url:/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/}},7137:function(e,n,t){var a=t(9439),l=t(9530),i=t(6810);n.Z=function(e){var n=e.location,t=e.entryFrm,r=e.namePrefix,o=(0,i.Z)({autoCallUrl:l.Z.locations.counties,cachingLifeTimeInSeconds:60}),d=(0,a.Z)(o,3),s=(d[0],d[1]),c=d[2],u=(0,i.Z)({cachingLifeTimeInSeconds:60,autoCallUrl:null!==n&&void 0!==n&&n.countyId?l.Z.locations.districs(null===n||void 0===n?void 0:n.countyId.toString()):void 0}),m=(0,a.Z)(u,3),v=m[0],f=m[1],p=m[2],g=(0,i.Z)({cachingLifeTimeInSeconds:60,autoCallUrl:null!==n&&void 0!==n&&n.districtId?l.Z.locations.cities(null===n||void 0===n?void 0:n.districtId.toString()):void 0}),h=(0,a.Z)(g,3),Z=h[0],I=h[1],x=h[2],y=(0,i.Z)({cachingLifeTimeInSeconds:60,autoCallUrl:null!==n&&void 0!==n&&n.districtId?l.Z.locations.ruralDistricts(null===n||void 0===n?void 0:n.districtId.toString()):void 0}),j=(0,a.Z)(y,3),C=j[0],b=j[1],w=j[2],D=(0,i.Z)({cachingLifeTimeInSeconds:60,autoCallUrl:null!==n&&void 0!==n&&n.ruralDistrictId?l.Z.locations.villages(null===n||void 0===n?void 0:n.ruralDistrictId.toString()):void 0}),S=(0,a.Z)(D,3),F=S[0],O=S[1],k=S[2];return{loadingCounties:s,counties:c,onCountyChanged:function(e){t.resetFields([r?[r,"districtId"]:"districtId",r?[r,"cityId"]:"cityId",r?[r,"ruralDistrictId"]:"ruralDistrictId",r?[r,"villageId"]:"villageId"]);t.getFieldInstance(r?[r,"districtId"]:"districtId");t.setFieldValue(r?[r,"districtId"]:"districtId",""),t.setFieldValue(r?[r,"cityId"]:"cityId",""),t.setFieldValue(r?[r,"ruralDistrictId"]:"ruralDistrictId",""),t.setFieldValue(r?[r,"villageId"]:"villageId",""),""!==e&&v.get(l.Z.locations.districs(e))},loadingDistricts:f,districts:p,onDistrictChanged:function(e){t.resetFields([r?[r,"cityId"]:"cityId",r?[r,"ruralDistrictId"]:"ruralDistrictId",r?[r,"villageId"]:"villageId"]),t.setFieldValue(r?[r,"cityId"]:"cityId",""),t.setFieldValue(r?[r,"ruralDistrictId"]:"ruralDistrictId",""),t.setFieldValue(r?[r,"villageId"]:"villageId",""),""!==e&&(Z.get(l.Z.locations.cities(e)),C.get(l.Z.locations.ruralDistricts(e)))},loadingCities:I,cities:x,getRuralDistricts:C,loadingRuralDistricts:b,ruralDistricts:w,onRuralDistrictsChanged:function(e){t.resetFields([r?[r,"villageId"]:"villageId"]),t.setFieldValue(r?[r,"villageId"]:"villageId",""),""!==e&&F.get(l.Z.locations.villages(e))},loadingVillages:O,villages:k}}},9975:function(e,n,t){var a=t(6129),l=t(2791),i=t(2020),r=t(184);n.Z=function(){var e=(0,i.$)().t;return(0,l.useMemo)((function(){return[{title:"".concat(e("fullName")," ").concat(e("permitOwner")),dataIndex:"fullName",key:"fullName",fixed:"left",render:function(e,n,t){return(0,r.jsx)("span",{children:"".concat(n.waterUserProfile.firstName," ").concat(n.waterUserProfile.lastName)})}},{title:"".concat(e("nationalCode")," ").concat(e("permitOwner")),dataIndex:"nationalCode",key:"nationalCode",render:function(e,n,t){return(0,r.jsx)("span",{children:n.waterUserProfile.nationalCode})}},{title:"".concat(e("postalCode")," ").concat(e("permitOwner")),dataIndex:"postalCode",key:"postalCode",render:function(e,n,t){return(0,r.jsx)("span",{children:n.waterUserProfile.postalCode})}},{title:"".concat(e("phoneNumber")," ").concat(e("permitOwner")),dataIndex:"phoneNumber",key:"phoneNumber",render:function(e,n,t){return(0,r.jsx)("span",{children:n.waterUserProfile.phoneNumber})}},{title:e("totalLandArea"),dataIndex:"totalLandArea",key:"totalLandArea",render:function(e){return(0,r.jsx)(a.Z,{value:e})}},{title:e("areaOfAgriculturalLands"),dataIndex:"areaOfAgriculturalLands",key:"areaOfAgriculturalLands",render:function(e){return(0,r.jsx)(a.Z,{value:e})}}]}),[])}},4489:function(e,n,t){var a,l;t.d(n,{I:function(){return a},z:function(){return l}}),function(e){e.SettingManager="SettingManager",e.UserManager="UserManager",e.RoleManager="RoleManager",e.OrganizationLevelManager="OrganizationLevelManager",e.WaterPermitManager="WaterPermitManager"}(a||(a={})),function(e){e.farvardin="0",e.ordibehesht="1",e.khordad="2",e.tir="3",e.mordad="4",e.shahrivar="5",e.mehr="6",e.aban="7",e.azar="8",e.dey="9",e.bahman="10",e.esfand="11"}(l||(l={}))}}]);
//# sourceMappingURL=490.71f5cc9c.chunk.js.map