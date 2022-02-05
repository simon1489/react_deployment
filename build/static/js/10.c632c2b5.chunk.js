(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[10],{588:function(e,t,n){"use strict";var c=n(7),a=Object(c.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=a},589:function(e,t,n){"use strict";var c=n(4),a=n(91),r=n(564),i=n(124),s=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,o);return Object(s.jsx)(i.a,Object(c.a)(Object(c.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(r.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},590:function(e,t,n){"use strict";var c=n(0);t.a=function(){var e=Object(c.useRef)(!0);return Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),e}},591:function(e,t,n){"use strict";var c=n(542),a=n(123),r=n(781),i=n(1);t.a=function(){return Object(i.jsx)(c.a,{direction:"row",justifyContent:"space-between",children:Object(i.jsx)(a.a,{variant:"subtitle2",component:r.a,target:"_blank",underline:"hover",children:"\xa9 TipTipTop"})})}},597:function(e,t,n){"use strict";n.p},610:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return l}));var c=n(54),a=n.n(c),r=n(75),i=function(e,t){return fetch("http://52.90.192.153/api/orders",{method:"POST",headers:{Accept:"application/json","x-access-token":t},body:e}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},s=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://52.90.192.153/api/braintree/processPayment",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("Response Process Payment:::::",e),e.json()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(r.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://52.90.192.153/api/orders/".concat(t,"/status"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return console.log("Response Update Order:::::",e),e.json()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(e,t){return fetch("http://52.90.192.153/api/products",{method:"POST",headers:{Accept:"application/json","x-access-token":e},body:t}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},621:function(e,t,n){"use strict";var c=n(4),a=n(54),r=n.n(a),i=n(75),s=n(13),o=n(91),l=n(0),u=n(31),d=n(29),j=n(538),b=n(556),p=n(574),h=n(554),m=n(557),O=n(575),x=n(566),f=n(579),g=n(542),v=n(623),y=n(622),w=n(564),k=n(570),S=n(593),C=n(592),T=n(74),P=n(590),B=n(200),N=n(598),I=n.n(N),A=n(599),E=n.n(A),F=(n(597),n(1)),W=["loginProp"];t.a=function(e){e.loginProp;var t=Object(o.a)(e,W),n=Object(d.a)(),a=Object(P.a)(),N=(Object(j.a)(n.breakpoints.down("md")),Object(u.c)((function(e){return e.customization})),Object(l.useState)(!0)),A=Object(s.a)(N,2),_=A[0],q=A[1],D=Object(T.a)(),H=D.firebaseEmailPasswordSignIn,J=(D.firebaseGoogleSignIn,Object(l.useState)(!1)),z=Object(s.a)(J,2),M=z[0],R=z[1],U=function(){R(!M)},G=function(e){e.preventDefault()};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(b.a,{container:!0,direction:"column",justifyContent:"center",spacing:2}),Object(F.jsx)(C.a,{initialValues:{email:"",password:"",submit:null},validationSchema:S.a().shape({email:S.b().email("Must be a valid email").max(255).required("Email is required"),password:S.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(i.a)(r.a.mark((function e(t,n){var c,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.setErrors,i=n.setStatus,s=n.setSubmitting,e.prev=1,e.next=4,H(t.email,t.password).then((function(){}),(function(e){a.current&&(i({success:!1}),c({submit:e.message}),s(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),a.current&&(i({success:!1}),c({submit:e.t0.message}),s(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,r=e.handleBlur,i=e.handleChange,s=e.handleSubmit,o=e.isSubmitting,l=e.touched,u=e.values;return Object(F.jsxs)("form",Object(c.a)(Object(c.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(F.jsxs)(p.a,{fullWidth:!0,error:Boolean(l.email&&a.email),sx:Object(c.a)({},n.typography.customInput),children:[Object(F.jsx)(h.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(F.jsx)(m.a,{id:"outlined-adornment-email-login",type:"email",value:u.email,name:"email",onBlur:r,onChange:i,label:"Email Address / Username",inputProps:{}}),l.email&&a.email&&Object(F.jsx)(O.a,{error:!0,id:"standard-weight-helper-text-email-login",children:a.email})]}),Object(F.jsxs)(p.a,{fullWidth:!0,error:Boolean(l.password&&a.password),sx:Object(c.a)({},n.typography.customInput),children:[Object(F.jsx)(h.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(F.jsx)(m.a,{id:"outlined-adornment-password-login",type:M?"text":"password",value:u.password,name:"password",onBlur:r,onChange:i,endAdornment:Object(F.jsx)(x.a,{position:"end",children:Object(F.jsx)(f.a,{"aria-label":"toggle password visibility",onClick:U,onMouseDown:G,edge:"end",size:"large",children:M?Object(F.jsx)(I.a,{}):Object(F.jsx)(E.a,{})})}),label:"Password",inputProps:{}}),l.password&&a.password&&Object(F.jsx)(O.a,{error:!0,id:"standard-weight-helper-text-password-login",children:a.password})]}),Object(F.jsx)(g.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:Object(F.jsx)(v.a,{control:Object(F.jsx)(y.a,{checked:_,onChange:function(e){return q(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"})}),a.submit&&Object(F.jsx)(w.a,{sx:{mt:3},children:Object(F.jsx)(O.a,{error:!0,children:a.submit})}),Object(F.jsx)(w.a,{sx:{mt:2},children:Object(F.jsx)(B.a,{children:Object(F.jsx)(k.a,{disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})}},797:function(e,t,n){"use strict";n.r(t);var c=n(54),a=n.n(c),r=n(4),i=n(75),s=n(13),o=n(0),l=n(41),u=n(777),d=n.n(u),j=n(29),b=n(538),p=n(556),h=n(549),m=n(570),O=n(123),x=n(485),f=n(610),g=n(588),v=n(589),y=(n(621),n(201)),w=n(591),k=n(74),S=n(105),C=n.n(S),T=n(1);t.default=function(){var e=Object(j.a)(),t=(Object(k.a)().isLoggedIn,Object(b.a)(e.breakpoints.down("md")),Object(o.useState)(!1)),n=Object(s.a)(t,2),c=n[0],u=n[1],S=Object(o.useState)(""),P=Object(s.a)(S,2),B=P[0],N=P[1],I=Object(o.useState)(""),A=Object(s.a)(I,2),E=(A[0],A[1]),F=Object(o.useState)(""),W=Object(s.a)(F,2),_=(W[0],W[1]),q=Object(o.useState)(""),D=Object(s.a)(q,2),H=D[0],J=D[1],z=Object(o.useState)(0),M=Object(s.a)(z,2),R=M[0],U=M[1],G=Object(o.useState)(0),L=Object(s.a)(G,2),V=(L[0],L[1],Object(o.useState)(10)),Y=Object(s.a)(V,2),$=Y[0],K=Y[1],Q=Object(o.useState)(0),X=Object(s.a)(Q,2),Z=X[0],ee=X[1],te=Object(o.useState)({loading:!1,success:!1,clientToken:null,error:"",instance:{},address:""}),ne=Object(s.a)(te,2),ce=ne[0],ae=ne[1];Object(o.useEffect)((function(){C.a.get("http://52.90.192.153/api/braintree/getToken").then((function(e){N(e.data.clientToken),ae({clientToken:ce.clientToken}),console.log("token::::",e.data.clientToken)})).catch((function(e){console.log(e)}))}),[]),Object(o.useEffect)((function(){var e=function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var c=t[n].split("=");if(c[0]==e)return c[1]}return!1}("worker");C.a.get("http://52.90.192.153/api/products/".concat(e)).then((function(t){console.log("response CurrentWorker:::",t.data),_(e),J(t.data)})).catch((function(e){alert("fail get current worker"),console.log(e)}))}),[]);var re=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FormData).append("price",Number(Z)),t.append("term",Number(1)),t.append("trFee",Number(1)),t.append("dish",Number(1)),t.append("atmosphere",Number(1)),t.append("tasty",Number(1)),t.append("goodService",Number(1)),t.append("porcent",Number($)),t.append("valueStar",Number(4)),t.append("product_id","61bebaa007211555408b72a0"),t.append("product",JSON.stringify(H)),console.log("formData::",t),Object(f.a)(t,B).then((function(e){var t;console.log("datacreate",e),setTimeout((function(){E(e._id)}),1500),console.log("DATA INSTANCE:",ce),ce.instance.requestPaymentMethod().then((function(n){t=n.nonce,console.log("send nonce and total to process: ",t),console.log("price",Z);var c={paymentMethodNonce:t,orderId:e._id};Object(f.c)(c).then((function(t){if(console.log("response payment process:",t),!0===t.success){alert("Payment successful");Object(f.d)(e._id,{status:"Open",is_paid:"true"}).then((function(e){console.log("response update orfder status",e)}))}})).catch((function(e){console.log(e),ae({loading:!1})}))})).catch((function(e){ae(Object(r.a)(Object(r.a)({},ce),{},{error:e.message}))}))}));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c?Object(T.jsx)(g.a,{children:Object(T.jsxs)(p.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(T.jsx)(p.a,{item:!0,xs:12,children:Object(T.jsx)(p.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(T.jsx)(p.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(T.jsxs)(v.a,{children:[Object(T.jsx)(p.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:Object(T.jsx)(p.a,{item:!0,sx:{mb:3},children:Object(T.jsx)(l.b,{to:"#",children:Object(T.jsx)(y.a,{})})})}),Object(T.jsx)("div",{onBlur:function(){return ae(Object(r.a)(Object(r.a)({},ce),{},{error:""}))},children:Object(T.jsx)(d.a,{options:{authorization:B},onInstance:function(e){console.log("INSTANCE ONLY:::",e),ae(Object(r.a)(Object(r.a)({},ce),{},{instance:e}))}})}),Object(T.jsx)(p.a,{container:!0,xs:12,justifyContent:"center",children:Object(T.jsx)(m.a,{style:{background:"#8B0B35"},onClick:function(){return re()},variant:"contained",children:"Pay"})})]})})})}),Object(T.jsx)(p.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(T.jsx)(w.a,{})})]})}):Object(T.jsx)(g.a,{children:Object(T.jsxs)(p.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(T.jsx)(p.a,{item:!0,xs:12,children:Object(T.jsx)(p.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(T.jsx)(p.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(T.jsx)(v.a,{children:Object(T.jsxs)(p.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(T.jsx)(p.a,{item:!0,sx:{mb:3},children:Object(T.jsx)(l.b,{to:"#",children:Object(T.jsx)(y.a,{})})}),Object(T.jsx)(p.a,{item:!0,xs:12,children:Object(T.jsx)(h.a,{id:"outlined-basic",label:"Bill Amount",value:R,variant:"outlined",fullWidth:!0,onChange:function(e){U(e.target.value),10===$&&ee((.1*e.target.value).toFixed(2)),15===$&&ee((.15*e.target.value).toFixed(2)),20===$&&ee((.2*e.target.value).toFixed(2))}})}),Object(T.jsxs)(p.a,{container:!0,style:{marginTop:12},children:[Object(T.jsx)(p.a,{item:!0,xs:2}),Object(T.jsx)(p.a,{item:!0,xs:1,children:Object(T.jsx)(m.a,{style:{background:"#8B0B35"},variant:"contained",onClick:function(){K(10),ee((.1*R).toFixed(2))},children:"10%"})}),Object(T.jsx)(p.a,{item:!0,xs:2}),Object(T.jsx)(p.a,{item:!0,xs:1,children:Object(T.jsx)(m.a,{style:{background:"#8B0B35"},variant:"contained",onClick:function(){K(15),ee((.15*R).toFixed(2))},children:"15%"})}),Object(T.jsx)(p.a,{item:!0,xs:2}),Object(T.jsx)(p.a,{item:!0,xs:1,children:Object(T.jsx)(m.a,{style:{background:"#8B0B35"},onClick:function(){K(20),ee((.2*R).toFixed(2))},variant:"contained",children:"20%"})})]}),Object(T.jsx)(p.a,{item:!0,xs:12,children:Object(T.jsx)(O.a,{children:"Tips   $".concat(Z)})}),Object(T.jsx)(p.a,{item:!0,xs:12,children:Object(T.jsx)(x.a,{})}),Object(T.jsx)(p.a,{item:!0,xs:12,justifyContent:"center",children:Object(T.jsx)(m.a,{style:{background:"#8B0B35"},onClick:function(){return u(!0)},variant:"contained",children:"Proceed to Payment"})})]})})})})}),Object(T.jsx)(p.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(T.jsx)(w.a,{})})]})})}}}]);
//# sourceMappingURL=10.c632c2b5.chunk.js.map