"use strict";(self.webpackChunkregional_water=self.webpackChunkregional_water||[]).push([[262],{3262:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t,a=r(1413),i=r(9439),o=r(2791),l=r(3655),s=r(8993),u=r(3099),c=r(177),d=r(7309),m=r(9530),v=r(127),f=r(6810),p=r(2020),g=r(7689),h=r(7564),Z=r(8007),w=r(5486),P=r(9630),x=r(8467),b=r(3845);!function(e){e.Permission="Permission",e.FullName="FullName",e.NationalCode="NationalCode",e.PhoneNumber="PhoneNumber"}(t||(t={}));var k=r(3447),S=r(184),y=l.Z.Text,j=function(){var e,n,r,l,j=s.Z.useForm(),C=(0,i.Z)(j,1)[0],N=(0,p.$)().t,L=(0,g.s0)(),E=(0,o.useState)(!1),F=(0,i.Z)(E,2),T=F[0],R=F[1],z=(0,o.useRef)(null),I=(0,o.useState)(""),U=(0,i.Z)(I,2),W=U[0],D=U[1],M=(0,o.useContext)(P.Z),q=M.setUser,A=M.setMenues,O=(0,f.Z)({onSuccess:function(e){var n,r=null===e||void 0===e?void 0:e.claims.find((function(e){return e.type===t.FullName})),a=null===e||void 0===e?void 0:e.claims.find((function(e){return e.type===t.NationalCode})),i=null===e||void 0===e?void 0:e.claims.find((function(e){return e.type===t.PhoneNumber})),o=null!==(n=null===e||void 0===e?void 0:e.claims.filter((function(e){return e.type===t.Permission})).map((function(e){return e.value})))&&void 0!==n?n:[],l={fullName:r.value,nationalCode:a.value,phoneNumber:i.value};x.Z.storedData(b.Z.token,null===e||void 0===e?void 0:e.accessToken),x.Z.storedData(b.Z.menus,o),x.Z.storedData(b.Z.user,l),x.Z.storedData(b.Z.refreshToken,null===e||void 0===e?void 0:e.refreshToken),D(null===e||void 0===e?void 0:e.accessToken),A(o),q(l)}}),_=(0,i.Z)(O,2),V=_[0],H=_[1],Q=function(){R(!0)};return(0,S.jsxs)("div",{id:"login",className:"inner",children:[(0,S.jsxs)("h1",{className:"title",children:[N("login"),(0,S.jsx)(y,{type:"secondary",children:N("loginToAccount")})]}),(0,S.jsx)(s.Z,{form:C,name:"login-form",layout:"vertical",onFinish:function(e){console.warn("TODO:// Remove line below after tests"),localStorage.setItem("server",e.server),V.post(m.Z.account.login,(0,a.Z)((0,a.Z)({},e),{},{captcha:W}))},onFinishFailed:function(){},autoComplete:"off",size:"large",initialValues:{},children:(0,S.jsxs)(u.Z,{direction:"vertical",size:1,className:"w-100",children:[(0,S.jsx)(s.Z.Item,{name:"server",label:"\u0622\u062f\u0631\u0633 \u0628\u06a9 \u0627\u0646\u062f(\u0645\u0648\u0642\u062a)",rules:[{required:!0,message:null!==(e=N("required"))&&void 0!==e?e:""}],children:(0,S.jsx)(c.Z,{className:"ltr-elm"})}),(0,S.jsx)(s.Z.Item,{name:"nationalCode",label:N("nationalCode"),rules:[{required:!0,message:null!==(n=N("required"))&&void 0!==n?n:""},{message:null!==(r=N("wrongFormat"))&&void 0!==r?r:"",pattern:k.Z.nationalCode}],children:(0,S.jsx)(c.Z,{autoFocus:!0,className:"ltr-elm",suffix:(0,S.jsx)(h.Z,{size:16,name:"IoCardOutline"})})}),(0,S.jsx)(s.Z.Item,{className:"mb-0",name:"password",label:N("password"),rules:[{required:!0,message:null!==(l=N("required"))&&void 0!==l?l:""}],children:(0,S.jsx)(c.Z.Password,{className:"ltr-elm"})}),!T&&(0,S.jsx)(s.Z.Item,{children:(0,S.jsx)(Z.Z,{ref:z,sitekey:w.Z.siteKey,onChange:function(e){return D(null!==e&&void 0!==e?e:"")},hl:"fa",onErrored:Q,onError:Q})}),(0,S.jsx)(s.Z.Item,{children:(0,S.jsxs)("div",{className:"action",children:[(0,S.jsx)(d.Z,{type:"link",onClick:function(){var e=C.getFieldValue("username");L("".concat(v.T.recoverPassword).concat(e?"?mobileNumber="+e:""))},children:N("forgotPassword")}),(0,S.jsx)(d.Z,{loading:H,type:"primary",htmlType:"submit",disabled:!W&&!T&&!0,children:N("login")})]})})]})})]})}},7564:function(e,n,r){var t=r(1413),a=r(4925),i=r(71),o=r(9126),l=r(6355),s=r(6856),u=r(184),c=["name","className","size"];n.Z=function(e){var n=e.name,r=e.className,d=e.size,m=void 0===d?16:d,v=(0,a.Z)(e,c),f=i[n]||o[n]||l[n]||s[n];return f?(0,u.jsx)(f,(0,t.Z)({size:m,className:"custom-icon".concat(r?" "+r:"")},v)):null}},9530:function(e,n){var r={account:{login:"/Account/Login"},organizationLevel:{list:"/organizationlevel",add:"/organizationlevel",update:"/organizationlevel",find:function(e){return"/organizationlevel/".concat(e)},delete:function(e){return"/organizationlevel/delete/".concat(e)}},roleManager:{list:"/rolemanager/listroles",add:"/rolemanager/addrole",update:"/rolemanager/editrole",find:function(e){return"/rolemanager/detailrole?id=".concat(e)},delete:function(e){return"/rolemanager/deleterole?id=".concat(e)}},userManager:{list:"/usermanager/listusers",add:"/userManager",update:"/userManager",roles:"/userManager/getRoles",find:function(e){return"/userManager/".concat(e)},changeStatus:function(e,n){return"/userManager/changeStatus?id=".concat(e,"&isEnabled=").concat(n)},delete:function(e){return"/userManager/".concat(e)}},surfacewaterpermit:{list:"/surfaceWaterPermit/listSurafceWaterPermits",add:"/surfaceWaterPermit",update:"/surfaceWaterPermit",similar:function(e){return"/surfaceWaterPermit/getSimilarRecords?".concat(new URLSearchParams(e).toString())},find:function(e){return"/surfaceWaterPermit/".concat(e)}},springWaterPermit:{list:"/springPermit/ListSpringPermits",add:"/springPermit",update:"/springPermit",similar:function(e){return"/springPermit/getSimilarRecords?".concat(new URLSearchParams(e).toString())},find:function(e){return"/springPermit/".concat(e)}},pondWaterPermit:{list:"/pondPermit/ListPondPermits",add:"/pondPermit",update:"/pondPermit",similar:function(e){return"/pondPermit/getSimilarRecords?".concat(new URLSearchParams(e).toString())},find:function(e){return"/pondPermit/".concat(e)}},wellWaterPermit:{list:"/wellPermit/listWellPermits",add:"/wellPermit",update:"/wellPermit",similar:function(e){return"/wellPermit/getSimilarRecords?".concat(new URLSearchParams(e).toString())},find:function(e){return"/wellPermit/".concat(e)}},locations:{counties:"/Locations/GetCounties",districs:function(e){return"/Locations/counties/".concat(e,"/districs")},cities:function(e){return"/Locations/counties/".concat(e,"/cities")},ruralDistricts:function(e){return"/Locations/districts/".concat(e,"/rural-districts")},villages:function(e){return"/Locations/".concat(e,"/villages")}}};n.Z=r},3447:function(e,n){n.Z={nationalCode:/\d{10}/,personelId:/\d{4}/,email:/\S+@\S+\.\S+/,mobile:/09[0-9]{2}(-| )?[0-9]{3}(-| )?[0-9]{4}/,phone:/0\d{10}/,ip:/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/,postalCode:/\d{10}/,url:/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/}},6810:function(e,n,r){r.d(n,{Z:function(){return Z}});var t,a=r(4165),i=r(5861),o=r(9439),l=r(7027),s=r(2388),u=r(5486),c=r(3845),d=r(8467),m=s.Z.create({baseURL:null!==(t=localStorage.getItem("server"))&&void 0!==t?t:"",withCredentials:!1,timeout:u.Z.requestTimeout,headers:{Accept:"application/json","Content-Type":"application/json","ngrok-skip-browser-warning":"skip-browser-warning"}}),v=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.config,e.abrupt("return",Promise.reject(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();m.interceptors.request.use((function(e){console.warn("TODO:// Remove line below after tests"),e.url="".concat(localStorage.getItem("server")).concat(e.url);var n=d.Z.getStoredData(c.Z.token);return n&&e.headers&&(e.headers.Authorization="Bearer ".concat(n)),e}),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){return e}),v);var f=m,p=r(2791),g=r(2020),h=r(2488),Z=function(e){var n,r,t=(0,p.useState)(null!==(n=null===e||void 0===e?void 0:e.initLoading)&&void 0!==n&&n),s=(0,o.Z)(t,2),u=s[0],c=s[1],m=(0,p.useState)(null!==(r=null===e||void 0===e?void 0:e.initialValue)&&void 0!==r?r:null),v=(0,o.Z)(m,2),Z=v[0],w=v[1],P=(0,g.$)().t,x=(0,h.Z)(),b=(0,p.useTransition)(),k=(0,o.Z)(b,2),S=k[0],y=k[1],j=function(n,r){y((function(){var t,a=null!==e&&void 0!==e&&e.filter?null===e||void 0===e?void 0:e.filter(n):n,i=null!==e&&void 0!==e&&e.mapper?null===e||void 0===e?void 0:e.mapper(a):a;w(i),null===e||void 0===e||null===(t=e.onSuccess)||void 0===t||t.call(e,i,r)}))},C=function(n,r,t){null!==e&&void 0!==e&&e.customErrorHandler?null===e||void 0===e||e.customErrorHandler(n):(console.log("api error is",n),l.ZP.error(null===n||void 0===n?void 0:n.message)),401===r&&(d.Z.clearStorage(),window.location.href="/")},N={get:function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r){var t,i,o,l,s,u,d,m;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c(!0),n.prev=1,null===e||void 0===e||!e.cachingLifeTimeInSeconds){n.next=10;break}return n.next=5,x.get(r);case 5:if(!(t=n.sent)){n.next=10;break}return j(t,{url:r}),c(!1),n.abrupt("return");case 10:return n.next=12,f.get(r);case 12:(i=n.sent).data.succeeded?(null!==e&&void 0!==e&&e.cachingLifeTimeInSeconds&&x.add(r,i.data.result,e.cachingLifeTimeInSeconds),j(i.data.result)):(l=new Error(i.data.messages[0]||P("unknownError")),C(l),null===e||void 0===e||null===(o=e.onFailed)||void 0===o||o.call(e,l)),n.next=22;break;case 16:n.prev=16,n.t0=n.catch(1),d=n.t0,m=new Error(d.message),C(m,null===(s=d.response)||void 0===s?void 0:s.status),null===e||void 0===e||null===(u=e.onFailed)||void 0===u||u.call(e,m);case 22:return n.prev=22,c(!1),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[1,16,22,25]])})));return function(e){return n.apply(this,arguments)}}(),post:function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,t,i){var o,l,s,u,d,m,v,p,g;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c(!0),n.prev=1,o=null,i)for(l in o=new FormData,t)o.append(l,t[l]);return n.next=6,f.post(r,i?o:t,{headers:{"Content-Type":i?"multipart/form-data":"application/Json"}});case 6:(s=n.sent).data.succeeded?j(s.data.result,t):(d=new Error(s.data.messages[0]||P("unknownError")),C(d),null===e||void 0===e||null===(u=e.onFailed)||void 0===u||u.call(e,d)),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(1),p=n.t0,g=new Error(p.message),C(g,null===(m=p.response)||void 0===m?void 0:m.status),null===e||void 0===e||null===(v=e.onFailed)||void 0===v||v.call(e,g);case 16:return n.prev=16,c(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[1,10,16,19]])})));return function(e,r,t){return n.apply(this,arguments)}}(),put:function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,t){var i,o,l,s,u,d,m;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,f.put(r,t);case 4:(i=n.sent).data.succeeded?j(i.data.result,t):(l=new Error(i.data.messages[0]||P("unknownError")),C(l),null===e||void 0===e||null===(o=e.onFailed)||void 0===o||o.call(e,l)),n.next=14;break;case 8:n.prev=8,n.t0=n.catch(1),d=n.t0,m=new Error(d.message),C(m,null===(s=d.response)||void 0===s?void 0:s.status),null===e||void 0===e||null===(u=e.onFailed)||void 0===u||u.call(e,m);case 14:return n.prev=14,c(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,8,14,17]])})));return function(e,r){return n.apply(this,arguments)}}(),delete:function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,t){var i,o,l,s,u,m,v;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,f.delete("".concat(r,"?").concat(d.Z.convertToQueryString(t)));case 4:(i=n.sent).data.succeeded?j(i.data.result,t):(l=new Error(i.data.messages[0]||P("unknownError")),C(l),null===e||void 0===e||null===(o=e.onFailed)||void 0===o||o.call(e,l)),n.next=14;break;case 8:n.prev=8,n.t0=n.catch(1),m=n.t0,v=new Error(m.message),C(v,null===(s=m.response)||void 0===s?void 0:s.status),null===e||void 0===e||null===(u=e.onFailed)||void 0===u||u.call(e,v);case 14:return n.prev=14,c(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,8,14,17]])})));return function(e,r){return n.apply(this,arguments)}}(),download:function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,t,i){var o,l,s,u,m,v,p,g,h,Z;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,f.get("".concat(r,"?").concat(d.Z.convertToQueryString(t)),{responseType:"blob"});case 4:l=n.sent,s=URL.createObjectURL(l.data),(u=document.createElement("a")).href=s,i||(v=l.headers["content-disposition"],console.log("dis",v,l.headers),i=v&&(null===(m=v.match(/filename="(.+)"/))||void 0===m?void 0:m[1])),u.setAttribute("download",null!==(o=i)&&void 0!==o?o:"file.txt"),document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(s),n.next=22;break;case 16:n.prev=16,n.t0=n.catch(1),h=n.t0,Z=new Error(h.message),C(Z,null===(p=h.response)||void 0===p?void 0:p.status),null===e||void 0===e||null===(g=e.onFailed)||void 0===g||g.call(e,Z);case 22:return n.prev=22,c(!1),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[1,16,22,25]])})));return function(e,r,t){return n.apply(this,arguments)}}()};return(0,p.useEffect)((function(){null!==e&&void 0!==e&&e.autoCallUrl&&N.get(null===e||void 0===e?void 0:e.autoCallUrl)}),[]),[N,S||u,Z,w]}}}]);
//# sourceMappingURL=262.78d0b8e0.chunk.js.map