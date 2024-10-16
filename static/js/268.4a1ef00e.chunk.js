"use strict";(self.webpackChunkregional_water=self.webpackChunkregional_water||[]).push([[268],{7666:function(e,r,l){l.d(r,{Z:function(){return Z}});var n=l(1413),a=l(8993),i=l(9439),d=l(5696),s=l(5285),t=(l(9554),l(2791)),o=l(177),u=l(7309),c=l(2166),m=l(184),x=function(e){var r=new Date(e),l=new Intl.DateTimeFormat("fa-IR").format(r).split("/");return"".concat(s.Z.numberConverter(l[0]),"/").concat(s.Z.numberConverter(l[1]),"/").concat(s.Z.numberConverter(l[2]))},h=function(e){var r=e.placeholder,l=e.popupTargetId,a=e.value,h=e.onRemove,Z=e.onChange,p=e.endTime,j=e.disabled,v=e.readOnly,f=(0,t.useRef)(null),b=(0,t.useState)((function(){return a?x(a):""})),g=(0,i.Z)(b,2),y=g[0],q=g[1],O=function(){var e;return null===(e=f.current)||void 0===e?void 0:e.focus()};return(0,t.useEffect)((function(){if("undefined"!==typeof a){var e=x(a);(null==a&&null!==y||null===y&&null!==a||e!==y)&&q(e)}}),[a]),(0,m.jsx)(d.p,{showSidebar:!1,inputControl:function(e){return(0,m.jsx)(o.Z,(0,n.Z)({ref:f,readOnly:v,suffix:h&&a?(0,m.jsxs)(u.Z,{type:"link",onClick:function(){return h()},children:[(0,m.jsx)(c.Z,{size:16,name:"IoCloseOutline"})," "]}):(0,m.jsx)(u.Z,{type:"link",onClick:O,children:(0,m.jsx)(c.Z,{size:16,name:"IoCalendarClearOutline"})}),disabled:j,placeholder:r},e))},popupTargetId:l,onChange:function(e){if(e){var r,l=e.split("/"),n=(0,i.Z)(l,3),a=n[0],d=n[1],t=n[2],o=s.Z.convertToDate(parseInt(a),parseInt(d),parseInt(t)),u=p?new Date(o[0],o[1]-1,o[2],23,59,59,0):new Date(o[0],o[1]-1,o[2],0,0,0,0);null===Z||void 0===Z||Z(null!==(r=u.toISOString())&&void 0!==r?r:null)}else null===Z||void 0===Z||Z(null)},value:y})},Z=function(e){var r=e.form||a.Z;return(0,m.jsx)(r.Item,{className:"date-picker-form-item",name:e.name,rules:e.rules,label:e.label,children:(0,m.jsx)(h,(0,n.Z)({},e))})}},2509:function(e,r,l){var n=l(1413),a=l(4925),i=l(8993),d=l(7097),s=l(184),t=["form","name","rules","label","stringMode","id","className","placeholder","readOnly","disabled"];r.Z=function(e){var r=e.form,l=e.name,o=e.rules,u=e.label,c=e.stringMode,m=e.id,x=e.className,h=e.placeholder,Z=e.readOnly,p=e.disabled,j=(0,a.Z)(e,t),v=r||i.Z;return(0,s.jsx)(v.Item,(0,n.Z)((0,n.Z)({className:x,name:l,rules:o,label:u,id:m},j),{},{children:(0,s.jsx)(d.Z,{stringMode:null!==c&&void 0!==c&&c,formatter:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},placeholder:h,className:"ltr-elm placeholder-r w-100 ".concat(x),controls:!1,readOnly:Z,disabled:p})}))}},5097:function(e,r,l){var n=l(1413),a=l(9439),i=l(8993),d=l(6106),s=l(914),t=l(2964),o=l(177),u=l(6388),c=l(7309),m=l(543),x=l(2791),h=l(2020),Z=l(184);r.Z=function(e){var r,l=(0,h.$)().t,p=i.Z.useForm(),j=(0,a.Z)(p,1)[0],v=(0,x.useState)(0),f=(0,a.Z)(v,2),b=f[0],g=f[1],y=(0,x.useState)([]),q=(0,a.Z)(y,2),O=q[0],w=q[1],C=(0,m.Z)({onSuccess:function(r){var l;null===(l=e.onSuccess)||void 0===l||l.call(e,r,!1),g((function(e){return e+1}))}}),P=(0,a.Z)(C,2),I=P[0],N=P[1],k=(0,m.Z)({autoCallUrl:e.data?e.findUrl(e.data.id):void 0,onSuccess:function(e){var r=e;r&&j.setFieldsValue(r)}}),U=(0,a.Z)(k,2),S=(U[0],U[1]),T=function(){g((function(e){return e-1}))},L=function(e){e.stopPropagation(),e.preventDefault(),g((function(e){return e+1})),w([]),document.getElementsByClassName("ant-modal-wrap")[0].scrollTop=0};return(0,Z.jsx)(i.Z,{id:e.frmName,form:j,layout:"vertical",initialValues:e.data,onFinish:function(r){var l=r;e.data?I.put(e.updateUrl,l):I.post(e.addUrl,l)},onFinishFailed:function(e){w(e.errorFields.map((function(e){return'"'.concat(l(e.name[e.name.length-1].replace("Id","")),'" ').concat(e.errors[0])})))},autoComplete:"off",disabled:S,children:(0,Z.jsxs)(d.Z,{gutter:[0,20],children:[S&&(0,Z.jsx)(s.Z,{xs:24,sm:24,children:(0,Z.jsx)(t.Z,{type:"info",message:"".concat(l("loading"),"...")})}),e.data&&(0,Z.jsx)(Z.Fragment,{children:null===(r=e.hiddenInputs)||void 0===r?void 0:r.map((function(e){return(0,Z.jsx)(i.Z.Item,{noStyle:!0,name:e,children:(0,Z.jsx)(o.Z,{type:"hidden"})},e)}))}),(0,Z.jsx)(s.Z,{xs:24,sm:24,children:(0,Z.jsx)(u.Z,{responsive:!1,size:"small",current:b,items:e.steps.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{id:"".concat(e.id,"-step")})}))})}),!!O.length&&(0,Z.jsx)(s.Z,{xs:24,sm:24,children:(0,Z.jsx)(t.Z,{type:"error",message:O.map((function(e,r){return(0,Z.jsx)("p",{children:e},r)}))})}),(0,Z.jsx)(s.Z,{xs:24,sm:24,children:e.steps.map((function(r,l){return r.destroyOnHide&&b!==l?null:(0,Z.jsx)("div",{className:"step-content",id:r.id,style:{display:b===l?"block":"none",position:"relative"},children:(0,Z.jsx)(d.Z,{gutter:10,children:(0,Z.jsx)(r.content,{data:e.data,entryFrm:j,readOnly:e.readOnly})})},r.id)}))}),(0,Z.jsx)(s.Z,{xs:24,sm:24,children:(0,Z.jsx)("div",{className:"actions",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:function(){switch(b){case e.steps.length-1:return(0,Z.jsxs)(Z.Fragment,{children:[e.readOnly?(0,Z.jsx)(c.Z,{loading:!!e.data&&S,onClick:T,children:l("prev")}):(0,Z.jsx)("span",{}),(0,Z.jsx)(c.Z,{htmlType:"button",type:"primary",danger:!0,onClick:e.onCancel,children:l("close")})]});case e.steps.length-2:return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(c.Z,{loading:!!e.data&&S,onClick:T,children:l("prev")}),(0,Z.jsx)(c.Z,{htmlType:e.readOnly?"button":"submit",type:"primary",disabled:S||N,loading:N,onClick:e.readOnly?L:void 0,children:l(e.readOnly?"next":"submit")})]});default:return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(c.Z,{disabled:0===b,loading:!!e.data&&S,onClick:T,children:l("prev")}),(0,Z.jsx)(c.Z,{htmlType:"button",type:"primary",onClick:L,disabled:S,children:l("next")})]})}}()})})]})},e.frmName)}},8708:function(e,r,l){l.r(r),l.d(r,{default:function(){return B}});var n,a,i=l(9439),d=l(7309),s=l(6106),t=l(914),o=l(8993),u=l(177),c=l(4021),m=l(5485),x=l(9530),h=l(2020),Z=l(2166),p=l(6129),j=l(2791),v=l(184),f=function(){var e=(0,h.$)().t;return(0,j.useMemo)((function(){return[{title:"".concat(e("fullName")," ").concat(e("permitOwner")),dataIndex:"fullName",key:"fullName",fixed:"left",render:function(e,r,l){return(0,v.jsx)("span",{children:"".concat(r.waterUserProfile.firstName," ").concat(r.waterUserProfile.lastName)})}},{title:"".concat(e("nationalCode")," ").concat(e("permitOwner")),dataIndex:"nationalCode",key:"nationalCode",render:function(e,r,l){return(0,v.jsx)("span",{children:r.waterUserProfile.nationalCode})}},{title:"".concat(e("postalCode")," ").concat(e("permitOwner")),dataIndex:"postalCode",key:"postalCode",render:function(e,r,l){return(0,v.jsx)("span",{children:r.waterUserProfile.postalCode})}},{title:"".concat(e("phoneNumber")," ").concat(e("permitOwner")),dataIndex:"phoneNumber",key:"phoneNumber",render:function(e,r,l){return(0,v.jsx)("span",{children:r.waterUserProfile.phoneNumber})}},{title:e("totalLandArea"),dataIndex:"totalArea",key:"totalArea",render:function(e){return(0,v.jsx)(p.Z,{value:e})}},{title:e("areaOfAgriculturalLands"),dataIndex:"areaOfDrinkingLands",key:"areaOfDrinkingLands",render:function(e){return(0,v.jsx)(p.Z,{value:e})}}]}),[])},b=l(5097),g=l(7128),y=l(2509),q=function(e){var r,l,n,a,i,d,s,c,m,x,Z,p,j,f,b,q,O,w,C,P,I,N=e.readOnly,k=(0,h.$)().t;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:k("certificateInfo")})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"certificateNumber",label:null!==(r=k("certificateNumber"))&&void 0!==r?r:"",rules:[{required:!0,message:null!==(l=k("required"))&&void 0!==l?l:""}],placeholder:null!==(n=k("certificateNumber"))&&void 0!==n?n:"",readOnly:N,disabled:N})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"documentNumber",label:null!==(a=k("documentNumber"))&&void 0!==a?a:"",rules:[{required:!0,message:null!==(i=k("required"))&&void 0!==i?i:""}],placeholder:null!==(d=k("documentNumber"))&&void 0!==d?d:"",disabled:N,readOnly:N})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"subscriptionCode",label:null!==(s=k("subscriptionCode"))&&void 0!==s?s:"",rules:[{required:!0,message:null!==(c=k("required"))&&void 0!==c?c:""}],placeholder:null!==(m=k("subscriptionCode"))&&void 0!==m?m:"",disabled:N,readOnly:N})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"dossierCode",label:k("dossierCode"),rules:[{required:!0,message:null!==(x=k("required"))&&void 0!==x?x:""}],children:(0,v.jsx)(u.Z,{disabled:N,readOnly:N,placeholder:null!==(Z=k("dossierCode"))&&void 0!==Z?Z:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"studyArea",label:k("studyArea"),rules:[{required:!0,message:null!==(p=k("required"))&&void 0!==p?p:""}],children:(0,v.jsx)(u.Z,{disabled:N,readOnly:N,placeholder:null!==(j=k("studyArea"))&&void 0!==j?j:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"studyAreaCode",label:k("studyAreaCode"),rules:[{required:!0,message:null!==(f=k("required"))&&void 0!==f?f:""}],children:(0,v.jsx)(u.Z,{disabled:N,readOnly:N,placeholder:null!==(b=k("studyAreaCode"))&&void 0!==b?b:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"electricSubscription",label:null!==(q=k("electricSubscription"))&&void 0!==q?q:"",rules:[{required:!0,message:null!==(O=k("required"))&&void 0!==O?O:""}],placeholder:null!==(w=k("electricSubscription"))&&void 0!==w?w:"",disabled:N,readOnly:N})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"electricPropfileCode",label:null!==(C=k("electricPropfileCode"))&&void 0!==C?C:"",rules:[{required:!0,message:null!==(P=k("required"))&&void 0!==P?P:""}],placeholder:null!==(I=k("electricPropfileCode"))&&void 0!==I?I:"",disabled:N,readOnly:N})})]})},O=l(7666),w=l(3447),C=function(e){var r,l,n,a,i,d,s,c,m,x,Z,p,j,f,b,y,q,C,P,I,N,k,U,S,T,L,A,F,M=e.readOnly,W=(0,h.$)().t;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:W("permitOwnerInformation")})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","firstName"],label:W("firstName"),rules:[{required:!0,message:null!==(r=W("required"))&&void 0!==r?r:""}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(l=W("firstName"))&&void 0!==l?l:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","lastName"],label:W("lastName"),rules:[{required:!0,message:null!==(n=W("required"))&&void 0!==n?n:""}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(a=W("lastName"))&&void 0!==a?a:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","fatherName"],label:W("fatherName"),rules:[{required:!0,message:null!==(i=W("required"))&&void 0!==i?i:""}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(d=W("fatherName"))&&void 0!==d?d:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,style:{position:"static"},children:(0,v.jsx)(O.Z,{name:["waterUserProfile","birthdate"],label:null!==(s=W("birthdate"))&&void 0!==s?s:"",placeholder:null!==(c=W("birthdate"))&&void 0!==c?c:"",popupTargetId:"permit-owner",readOnly:M,disabled:M,rules:[{required:!0,message:null!==(m=W("required"))&&void 0!==m?m:""}]})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","nationalCode"],label:W("nationalCode"),rules:[{required:!0,message:null!==(x=W("required"))&&void 0!==x?x:""},{pattern:w.Z.nationalCode,message:null!==(Z=W("wrongFormat"))&&void 0!==Z?Z:""}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(p=W("nationalCode"))&&void 0!==p?p:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","birthCertificateNumber"],label:W("birthCertificateNumber"),rules:[{required:!0,message:null!==(j=W("required"))&&void 0!==j?j:""}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(f=W("birthCertificateNumber"))&&void 0!==f?f:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","certificateCity"],label:W("certificateCity"),rules:[{required:!0,message:null!==(b=W("required"))&&void 0!==b?b:""}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(y=W("certificateCity"))&&void 0!==y?y:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","companyName"],label:W("companyName"),children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(q=W("companyName"))&&void 0!==q?q:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","companyRegistrationNumber"],label:W("companyRegistrationNumber"),children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(C=W("companyRegistrationNumber"))&&void 0!==C?C:""})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","companyNationalCode"],label:W("companyNationalCode"),children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(P=W("companyNationalCode"))&&void 0!==P?P:""})})}),(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:W("permitOwnerAddress")})}),(0,v.jsx)(t.Z,{xs:8,sm:12,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","phoneNumber"],label:W("phoneNumber"),rules:[{required:!0,message:null!==(I=W("required"))&&void 0!==I?I:""},{pattern:w.Z.phone,message:null!==(N=W("wrongFormat"))&&void 0!==N?N:""}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(k=W("phoneNumber"))&&void 0!==k?k:""})})}),(0,v.jsx)(t.Z,{xs:8,sm:12,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","cellPhone"],label:W("mobileNumber"),rules:[{required:!0,message:null!==(U=W("required"))&&void 0!==U?U:""},{pattern:w.Z.mobile}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(S=W("mobileNumber"))&&void 0!==S?S:""})})}),(0,v.jsx)(t.Z,{xs:8,sm:12,md:6,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","postalCode"],label:W("postalCode"),rules:[{required:!0,message:null!==(T=W("required"))&&void 0!==T?T:""},{pattern:w.Z.postalCode}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(L=W("postalCode"))&&void 0!==L?L:""})})}),(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(o.Z.Item,{name:["waterUserProfile","address"],label:W("address"),rules:[{required:!0,message:null!==(A=W("required"))&&void 0!==A?A:""}],children:(0,v.jsx)(u.Z,{disabled:M,readOnly:M,placeholder:null!==(F=W("address"))&&void 0!==F?F:""})})})]})},P=l(458),I=l(2730),N=l(8467);!function(e){e[e.agriculture=0]="agriculture",e[e.drinking=1]="drinking",e[e.industry=2]="industry",e[e.other=3]="other"}(n||(n={})),function(e){e[e.hardBuild=0]="hardBuild",e[e.alluvium=1]="alluvium",e[e.hardBuildWithAlluvium=2]="hardBuildWithAlluvium"}(a||(a={}));var k=function(e){var r,l,n,i,d,s,c,m,x,Z,p,j,f,b,q,O,w,C,k,U,S,T,L,A,F,M,W,D,R,$,z,E,B,V,H,Y,_,X,G,J,K,Q,ee,re,le,ne=e.entryFrm,ae=e.data,ie=e.readOnly,de=(0,h.$)().t;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:de("waterSourceLocation")})}),(0,v.jsx)(I.Z,{data:null===ae||void 0===ae?void 0:ae.sourceLocation,entryFrm:ne,namePrefix:"sourceLocation",readOnly:ie}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:["sourceLocation","plaque"],label:null!==(r=de("plaque"))&&void 0!==r?r:"",rules:[{required:!0,message:null!==(l=de("required"))&&void 0!==l?l:""}],placeholder:null!==(n=de("plaque"))&&void 0!==n?n:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:["sourceLocation","studyArea"],label:null!==(i=de("studyArea"))&&void 0!==i?i:"",rules:[{required:!0,message:null!==(d=de("required"))&&void 0!==d?d:""}],placeholder:null!==(s=de("studyArea"))&&void 0!==s?s:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:["sourceLocation","drainageBasin"],label:null!==(c=de("drainageBasin"))&&void 0!==c?c:"",rules:[{required:!0,message:null!==(m=de("required"))&&void 0!==m?m:""}],placeholder:null!==(x=de("drainageBasin"))&&void 0!==x?x:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:de("waterSourceCoordinate")})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"zone",label:null!==(Z=de("zone"))&&void 0!==Z?Z:"",rules:[{required:!0,message:null!==(p=de("required"))&&void 0!==p?p:""}],placeholder:null!==(j=de("zone"))&&void 0!==j?j:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"lat",label:null!==(f=de("utmx"))&&void 0!==f?f:"",rules:[{required:!0,message:null!==(b=de("required"))&&void 0!==b?b:""}],placeholder:null!==(q=de("utmx"))&&void 0!==q?q:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"long",label:null!==(O=de("utmy"))&&void 0!==O?O:"",rules:[{required:!0,message:null!==(w=de("required"))&&void 0!==w?w:""}],placeholder:null!==(C=de("utmy"))&&void 0!==C?C:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"distance",label:null!==(k=de("distanceFromWell"))&&void 0!==k?k:"",rules:[{required:!0,message:null!==(U=de("required"))&&void 0!==U?U:""}],placeholder:null!==(S=de("distanceFromWell"))&&void 0!==S?S:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"belongTo",label:de("belongTo"),rules:[{required:!0,message:null!==(T=de("required"))&&void 0!==T?T:""}],children:(0,v.jsx)(u.Z,{className:"w-100 ltr-elm placeholder-r",placeholder:null!==(L=de("belongTo"))&&void 0!==L?L:"",readOnly:ie,disabled:ie})})}),(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:de("informaion")})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"aquiferType",label:de("aquiferType"),rules:[{required:!0,message:null!==(A=de("required"))&&void 0!==A?A:""}],children:(0,v.jsx)(P.Z,{allowClear:!0,placeholder:de("aquiferType"),options:N.Z.convrtEnumToOptions(a),disabled:ie})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"depth",label:null!==(F=de("depth"))&&void 0!==F?F:"",rules:[{required:!0,message:null!==(M=de("required"))&&void 0!==M?M:""}],placeholder:null!==(W=de("depth"))&&void 0!==W?W:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"pipeDiameter",label:null!==(D=de("pipeDiameter"))&&void 0!==D?D:"",rules:[{required:!0,message:null!==(R=de("required"))&&void 0!==R?R:""}],placeholder:null!==($=de("pipeDiameter"))&&void 0!==$?$:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"outputWaterDiameter",label:null!==(z=de("outputWaterDiameter"))&&void 0!==z?z:"",rules:[{required:!0,message:null!==(E=de("required"))&&void 0!==E?E:""}],placeholder:null!==(B=de("outputWaterDiameter"))&&void 0!==B?B:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"excitingForce",label:null!==(V=de("excitingForce"))&&void 0!==V?V:"",rules:[{required:!0,message:null!==(H=de("required"))&&void 0!==H?H:""}],placeholder:null!==(Y=de("excitingForce"))&&void 0!==Y?Y:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"enginePowerLimit",label:null!==(_=de("enginePowerLimit"))&&void 0!==_?_:"",rules:[{required:!0,message:null!==(X=de("required"))&&void 0!==X?X:""}],placeholder:null!==(G=de("enginePowerLimit"))&&void 0!==G?G:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"enginePowerLimit",label:null!==(J=de("enginePowerLimit"))&&void 0!==J?J:"",rules:[{required:!0,message:null!==(K=de("required"))&&void 0!==K?K:""}],placeholder:null!==(Q=de("enginePowerLimit"))&&void 0!==Q?Q:"",readOnly:ie,disabled:ie})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"enginePowerRate",label:null!==(ee=de("enginePowerRate"))&&void 0!==ee?ee:"",rules:[{required:!0,message:null!==(re=de("required"))&&void 0!==re?re:""}],placeholder:null!==(le=de("enginePowerRate"))&&void 0!==le?le:"",readOnly:ie,disabled:ie})})]})},U=l(1413),S=l(4925),T=l(3099),L=["key","name"],A=function(e){var r,l,n,a,i,s,c,m,x,p,j,f,b,q,O,w,C,P,I,N,k,A,F,M,W,D,R=e.readOnly,$=(0,h.$)().t;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:$("waterUsageLocationSpecification")})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"fromNorthTo",label:$("fromNorthTo"),rules:[{required:!0,message:null!==(r=$("required"))&&void 0!==r?r:""}],children:(0,v.jsx)(u.Z,{className:"w-100 ltr-elm placeholder-r",placeholder:null!==(l=$("fromNorthTo"))&&void 0!==l?l:"",disabled:R,readOnly:R})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"fromSouthTo",label:$("fromSouthTo"),rules:[{required:!0,message:null!==(n=$("required"))&&void 0!==n?n:""}],children:(0,v.jsx)(u.Z,{className:"w-100 ltr-elm placeholder-r",placeholder:null!==(a=$("fromSouthTo"))&&void 0!==a?a:"",disabled:R,readOnly:R})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"fromEastTo",label:$("fromEastTo"),rules:[{required:!0,message:null!==(i=$("required"))&&void 0!==i?i:""}],children:(0,v.jsx)(u.Z,{className:"w-100 ltr-elm placeholder-r",placeholder:null!==(s=$("fromEastTo"))&&void 0!==s?s:"",disabled:R,readOnly:R})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(o.Z.Item,{name:"fromWestTo",label:$("fromWestTo"),rules:[{required:!0,message:null!==(c=$("required"))&&void 0!==c?c:""}],children:(0,v.jsx)(u.Z,{className:"w-100 ltr-elm placeholder-r",placeholder:null!==(m=$("fromWestTo"))&&void 0!==m?m:"",disabled:R,readOnly:R})})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"areaOfDrinkingLands",label:null!==(x=$("areaOfAgriculturalLands"))&&void 0!==x?x:"",rules:[{required:!0,message:null!==(p=$("required"))&&void 0!==p?p:""}],placeholder:null!==(j=$("areaOfAgriculturalLands"))&&void 0!==j?j:"",disabled:R,readOnly:R})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"totalArea",label:null!==(f=$("totalLandArea"))&&void 0!==f?f:"",rules:[{required:!0,message:null!==(b=$("required"))&&void 0!==b?b:""}],placeholder:null!==(q=$("totalLandArea"))&&void 0!==q?q:"",disabled:R,readOnly:R})}),(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(o.Z.List,{name:"cropsUnderCultivationPercentage",children:function(e,r){var l=r.add,n=r.remove;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.Z.Item,{children:(0,v.jsx)(d.Z,{type:"dashed",onClick:function(){return l()},block:!0,icon:(0,v.jsx)(Z.Z,{name:"IoAddOutline"}),disabled:R,children:$("cropsUnderCultivationPercentage")})}),e.map((function(e,r){var l,a,i,s,t,c=e.key,m=e.name,x=(0,S.Z)(e,L);return(0,v.jsxs)(T.Z,{style:{display:"flex",marginBottom:8},align:"baseline",children:[(0,v.jsx)(o.Z.Item,(0,U.Z)((0,U.Z)({},x),{},{name:[m,"id"],noStyle:!0,children:(0,v.jsx)(u.Z,{type:"hidden"})})),(0,v.jsx)(o.Z.Item,(0,U.Z)((0,U.Z)({},x),{},{label:0===r?$("name"):void 0,name:[m,"name"],rules:[{required:!0,message:null!==(l=$("required"))&&void 0!==l?l:""}],children:(0,v.jsx)(u.Z,{disabled:R,placeholder:null!==(a=$("name"))&&void 0!==a?a:""})})),(0,v.jsx)(y.Z,(0,U.Z)((0,U.Z)({},x),{},{form:o.Z,name:[m,"percentage"],label:0===r?null!==(i=$("percentage"))&&void 0!==i?i:"":void 0,rules:[{required:!0,message:null!==(s=$("required"))&&void 0!==s?s:""}],placeholder:null!==(t=$("percentage"))&&void 0!==t?t:"",disabled:R})),!R&&(0,v.jsx)(d.Z,{type:"text",onClick:function(){return n(m)},style:{marginTop:0===r?30:0},children:(0,v.jsx)(Z.Z,{name:"IoCloseOutline"})})]},c)}))]})}})}),(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:$("amountOfExploitaionToMaxCapacity")})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{form:o.Z,name:"usageVolumeLimitPerSecond",label:null!==(O=$("litersPerSecond"))&&void 0!==O?O:"",rules:[{required:!0,message:null!==(w=$("required"))&&void 0!==w?w:""}],placeholder:null!==(C=$("litersPerSecond"))&&void 0!==C?C:"",disabled:R,readOnly:R})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"usageVolumeLimitPerDay",label:null!==(P=$("cubicMetersPerDay"))&&void 0!==P?P:"",rules:[{required:!0,message:null!==(I=$("required"))&&void 0!==I?I:""}],placeholder:null!==(N=$("cubicMetersPerDay"))&&void 0!==N?N:"",disabled:R,readOnly:R})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"usageVolumeLimitPerYear",label:null!==(k=$("cubicMetersPerYear"))&&void 0!==k?k:"",rules:[{required:!0,message:null!==(A=$("required"))&&void 0!==A?A:""}],placeholder:null!==(F=$("cubicMetersPerYear"))&&void 0!==F?F:"",disabled:R,readOnly:R})}),(0,v.jsx)(t.Z,{xs:12,sm:8,md:6,children:(0,v.jsx)(y.Z,{name:"usageVolumeLimitHouresPerYear",label:null!==(M=$("meterHoursPerYearInstallation"))&&void 0!==M?M:"",rules:[{required:!0,message:null!==(W=$("required"))&&void 0!==W?W:""}],placeholder:null!==(D=$("meterHoursPerYearInstallation"))&&void 0!==D?D:"",disabled:R,readOnly:R})})]})},F=l(4525),M=l(543),W=l(9975),D=function(e){var r=e.data,l=(0,M.Z)({autoCallUrl:x.Z.wellWaterPermit.similar(r.waterUserProfile)}),n=(0,i.Z)(l,3),a=(n[0],n[1]),d=n[2],o=(0,h.$)().t,u=(0,W.Z)();return(0,v.jsxs)(s.Z,{children:[(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(g.Z,{orientation:"left",children:o("similarRecords")})}),(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(F.Z,{style:{width:"100%"},pagination:!1,dataSource:null!==d&&void 0!==d?d:[],columns:u,loading:a})})]})},R=l(4489),$=["key","name"],z=function(e){var r=e.readOnly,l=(0,h.$)().t;return(0,v.jsx)(t.Z,{xs:24,sm:24,children:(0,v.jsx)(o.Z.List,{name:"wellUsageVolume",children:function(e,a){var i=a.add,c=a.remove;return(0,v.jsxs)(v.Fragment,{children:[!r&&(0,v.jsx)(o.Z.Item,{children:(0,v.jsx)(d.Z,{type:"dashed",onClick:function(){return i()},block:!0,icon:(0,v.jsx)(Z.Z,{name:"IoAddOutline"}),children:l("waterAmount")})}),e.map((function(e,a){e.key;var i,m,x,h,p,j,f,b,g,q,O,w,C,I,k,T=e.name,L=(0,S.Z)(e,$);return(0,v.jsxs)(s.Z,{gutter:[10,10],children:[(0,v.jsx)(o.Z.Item,(0,U.Z)((0,U.Z)({},L),{},{name:[T,"id"],noStyle:!0,children:(0,v.jsx)(u.Z,{disabled:r,type:"hidden"})})),(0,v.jsx)(t.Z,{xs:24,sm:7,children:(0,v.jsx)(o.Z.Item,(0,U.Z)((0,U.Z)({},L),{},{label:0===a?l("name"):void 0,name:[T,"name"],rules:[{required:!0,message:null!==(i=l("required"))&&void 0!==i?i:""}],children:(0,v.jsx)(u.Z,{disabled:r,placeholder:null!==(m=l("name"))&&void 0!==m?m:""})}))}),(0,v.jsx)(t.Z,{xs:12,sm:3,children:(0,v.jsx)(y.Z,(0,U.Z)((0,U.Z)({},L),{},{label:0===a?null!==(x=l("workHours"))&&void 0!==x?x:"":void 0,name:[T,"workHours"],rules:[{required:!0,message:null!==(h=l("required"))&&void 0!==h?h:""}],placeholder:null!==(p=l("workHours"))&&void 0!==p?p:"",readOnly:r,disabled:r}))}),(0,v.jsx)(t.Z,{xs:12,sm:3,children:(0,v.jsx)(y.Z,{form:o.Z,name:[T,"cubicMeters"],label:0===a?null!==(j=l("cubicMeters"))&&void 0!==j?j:"":void 0,rules:[{required:!0,message:null!==(f=l("required"))&&void 0!==f?f:""}],placeholder:null!==(b=l("cubicMeters"))&&void 0!==b?b:"",readOnly:r,disabled:r})}),(0,v.jsx)(t.Z,{xs:12,sm:3,children:(0,v.jsx)(o.Z.Item,(0,U.Z)((0,U.Z)({},L),{},{label:0===a?l("month"):void 0,name:[T,"month"],rules:[{required:!0,message:null!==(g=l("required"))&&void 0!==g?g:""}],children:(0,v.jsx)(P.Z,{placeholder:null!==(q=l("month"))&&void 0!==q?q:"",options:N.Z.convrtEnumToOptions(R.z),disabled:r})}))}),(0,v.jsx)(t.Z,{xs:12,sm:3,children:(0,v.jsx)(y.Z,(0,U.Z)((0,U.Z)({form:o.Z},L),{},{label:0===a?null!==(O=l("debi"))&&void 0!==O?O:"":void 0,name:[T,"waterFlow"],rules:[{required:!0,message:null!==(w=l("required"))&&void 0!==w?w:""}],placeholder:null!==(C=l("debi"))&&void 0!==C?C:"",readOnly:r,disabled:r}))}),(0,v.jsx)(t.Z,{xs:20,sm:4,children:(0,v.jsx)(o.Z.Item,{name:[T,"wellUsageVolumeType"],label:0===a?null!==(I=l("usageType"))&&void 0!==I?I:"":void 0,rules:[{required:!0,message:null!==(k=l("required"))&&void 0!==k?k:""}],children:(0,v.jsx)(P.Z,{allowClear:!0,placeholder:l("usageType"),options:N.Z.convrtEnumToOptions(n),disabled:r})})}),!r&&(0,v.jsx)(t.Z,{xs:4,sm:1,children:(0,v.jsx)(d.Z,{type:"text",onClick:function(){return c(T)},style:{marginTop:0===a?30:0},children:(0,v.jsx)(Z.Z,{name:"IoCloseOutline"})})})]})}))]})}})})},E=function(e){var r=e.data,l=e.onSuccess,n=e.onCancel,a=e.readOnly,i=(0,h.$)().t;return(0,v.jsx)(b.Z,{frmName:"well-water-form",data:r,onCancel:n,onSuccess:l,readOnly:a,addUrl:x.Z.wellWaterPermit.add,updateUrl:x.Z.wellWaterPermit.update,findUrl:x.Z.wellWaterPermit.find,hiddenInputs:["id"],steps:[{id:"certificate-info",title:i("certificateInfo"),content:q},{id:"permit-owner",title:i("permitOwner"),content:C},{id:"water-source",title:i("waterSource"),content:k},{id:"usage",title:i("usage"),content:A},{id:"water-amount",title:i("waterAmount"),content:z},{id:"similar-records",title:i("similarRecords"),destroyOnHide:!0,content:function(e){var r=e.entryFrm;return(0,v.jsx)(D,{data:r.getFieldsValue(["waterUserProfile"])})}}]})},B=function(){var e,r=(0,h.$)().t,l=f(),n=(0,j.useState)(null),a=(0,i.Z)(n,2),p=a[0],b=a[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.Z,{title:r("surfaceWaterPermitManagement"),id:"surfaceWater",idProp:"id",EntryForm:E,filterUrl:x.Z.wellWaterPermit.list,handleSubmit:!1,columns:l,scrollX:1250,addUrl:x.Z.wellWaterPermit.add,editAction:{url:x.Z.wellWaterPermit.update},entryModalWidth:1200,customActions:[{renderer:function(e,l,n){var a;return(0,v.jsx)(d.Z,{className:"btn-dark",type:"primary",shape:"circle",title:null!==(a=r("details"))&&void 0!==a?a:"",icon:(0,v.jsx)(Z.Z,{name:"IoEyeOutline"}),onClick:function(){return b(l)}})}}],children:(0,v.jsx)(s.Z,{gutter:[20,20],children:(0,v.jsx)(t.Z,{xs:24,sm:12,children:(0,v.jsx)(o.Z.Item,{name:"search",rules:[],children:(0,v.jsx)(u.Z,{placeholder:null!==(e=r("search"))&&void 0!==e?e:""})})})})}),p&&(0,v.jsx)(c.Z,{width:1e3,title:r("details"),open:!0,footer:!1,onCancel:function(){return b(null)},children:(0,v.jsx)(E,{data:p,onCancel:function(){return b(null)},readOnly:!0})})]})}},9975:function(e,r,l){var n=l(6129),a=l(2791),i=l(2020),d=l(184);r.Z=function(){var e=(0,i.$)().t;return(0,a.useMemo)((function(){return[{title:"".concat(e("fullName")," ").concat(e("permitOwner")),dataIndex:"fullName",key:"fullName",fixed:"left",render:function(e,r,l){return(0,d.jsx)("span",{children:"".concat(r.waterUserProfile.firstName," ").concat(r.waterUserProfile.lastName)})}},{title:"".concat(e("nationalCode")," ").concat(e("permitOwner")),dataIndex:"nationalCode",key:"nationalCode",render:function(e,r,l){return(0,d.jsx)("span",{children:r.waterUserProfile.nationalCode})}},{title:"".concat(e("postalCode")," ").concat(e("permitOwner")),dataIndex:"postalCode",key:"postalCode",render:function(e,r,l){return(0,d.jsx)("span",{children:r.waterUserProfile.postalCode})}},{title:"".concat(e("phoneNumber")," ").concat(e("permitOwner")),dataIndex:"phoneNumber",key:"phoneNumber",render:function(e,r,l){return(0,d.jsx)("span",{children:r.waterUserProfile.phoneNumber})}},{title:e("totalLandArea"),dataIndex:"totalLandArea",key:"totalLandArea",render:function(e){return(0,d.jsx)(n.Z,{value:e})}},{title:e("areaOfAgriculturalLands"),dataIndex:"areaOfAgriculturalLands",key:"areaOfAgriculturalLands",render:function(e){return(0,d.jsx)(n.Z,{value:e})}}]}),[])}},4489:function(e,r,l){var n,a;l.d(r,{I:function(){return n},z:function(){return a}}),function(e){e.SettingManager="SettingManager",e.UserManager="UserManager",e.RoleManager="RoleManager",e.OrganizationLevelManager="OrganizationLevelManager",e.PondPermitManager="PondPermitManager",e.SurfaceWaterPermitManager="SurfaceWaterPermitManager",e.SpringPermitManager="SpringPermitManager",e.WellPermitManager="WellPermitManager",e.DeveloperSupport="DeveloperSupport"}(n||(n={})),function(e){e.farvardin="0",e.ordibehesht="1",e.khordad="2",e.tir="3",e.mordad="4",e.shahrivar="5",e.mehr="6",e.aban="7",e.azar="8",e.dey="9",e.bahman="10",e.esfand="11"}(a||(a={}))}}]);
//# sourceMappingURL=268.4a1ef00e.chunk.js.map