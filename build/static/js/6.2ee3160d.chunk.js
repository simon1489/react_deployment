(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[6],{583:function(e,t,a){"use strict";var n=a(13),c=a(6),r=a(2),o=a(0),i=(a(12),a(8)),s=a(153),l=a(9),d=a(7),b=a(124),u=a(61),j=a(490),m=a(121),p=a(154);function h(e){return Object(m.a)("PrivateSwitchBase",e)}Object(p.a)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var O=a(1),f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=Object(d.a)(j.a,{skipSx:!0})((function(e){var t=e.ownerState;return Object(r.a)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),v=Object(d.a)("input",{skipSx:!0})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),g=o.forwardRef((function(e,t){var a=e.autoFocus,o=e.checked,d=e.checkedIcon,j=e.className,m=e.defaultChecked,p=e.disabled,g=e.disableFocusRipple,w=void 0!==g&&g,y=e.edge,k=void 0!==y&&y,C=e.icon,P=e.id,S=e.inputProps,z=e.inputRef,I=e.name,R=e.onBlur,B=e.onChange,F=e.onFocus,M=e.readOnly,E=e.required,L=e.tabIndex,H=e.type,D=e.value,N=Object(c.a)(e,f),V=Object(b.a)({controlled:o,default:Boolean(m),name:"SwitchBase",state:"checked"}),q=Object(n.a)(V,2),T=q[0],W=q[1],_=Object(u.a)(),A=p;_&&"undefined"===typeof A&&(A=_.disabled);var G="checkbox"===H||"radio"===H,J=Object(r.a)({},e,{checked:T,disabled:A,disableFocusRipple:w,edge:k}),U=function(e){var t=e.classes,a=e.checked,n=e.disabled,c=e.edge,r={root:["root",a&&"checked",n&&"disabled",c&&"edge".concat(Object(l.a)(c))],input:["input"]};return Object(s.a)(r,h,t)}(J);return Object(O.jsxs)(x,Object(r.a)({component:"span",className:Object(i.a)(U.root,j),centerRipple:!0,focusRipple:!w,disabled:A,tabIndex:null,role:void 0,onFocus:function(e){F&&F(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){R&&R(e),_&&_.onBlur&&_.onBlur(e)},ownerState:J,ref:t},N,{children:[Object(O.jsx)(v,Object(r.a)({autoFocus:a,checked:o,defaultChecked:m,className:U.input,disabled:A,id:G&&P,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;W(t),B&&B(e,t)}},readOnly:M,ref:z,required:E,ownerState:J,tabIndex:L,type:H},"checkbox"===H&&void 0===D?{}:{value:D},S)),T?d:C]}))}));t.a=g},587:function(e,t,a){"use strict";var n=a(7),c=Object(n.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=c},588:function(e,t,a){"use strict";var n=a(4),c=a(90),r=a(564),o=a(123),i=a(1),s=["children"];t.a=function(e){var t=e.children,a=Object(c.a)(e,s);return Object(i.jsx)(o.a,Object(n.a)(Object(n.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},a),{},{children:Object(i.jsx)(r.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},589:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},590:function(e,t,a){"use strict";var n=a(542),c=a(122),r=a(781),o=a(1);t.a=function(){return Object(o.jsx)(n.a,{direction:"row",justifyContent:"space-between",children:Object(o.jsx)(c.a,{variant:"subtitle2",component:r.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 TipTipTop"})})}},596:function(e,t,a){"use strict";a.p},597:function(e,t,a){"use strict";var n=a(82);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(104)),r=a(1),o=(0,c.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=o},598:function(e,t,a){"use strict";var n=a(82);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(104)),r=a(1),o=(0,c.default)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=o},619:function(e,t,a){"use strict";var n=a(4),c=a(55),r=a.n(c),o=a(74),i=a(13),s=a(90),l=a(0),d=a(31),b=a(41),u=a(29),j=a(538),m=a(556),p=a(574),h=a(554),O=a(557),f=a(575),x=a(566),v=a(579),g=a(542),w=a(621),y=a(620),k=a(122),C=a(564),P=a(570),S=a(592),z=a(591),I=a(91),R=a(589),B=a(200),F=a(597),M=a.n(F),E=a(598),L=a.n(E),H=(a(596),a(1)),D=["loginProp"];t.a=function(e){var t=e.loginProp,a=Object(s.a)(e,D),c=Object(u.a)(),F=Object(R.a)(),E=(Object(j.a)(c.breakpoints.down("md")),Object(d.c)((function(e){return e.customization})),Object(l.useState)(!0)),N=Object(i.a)(E,2),V=N[0],q=N[1],T=Object(I.a)(),W=T.firebaseEmailPasswordSignIn,_=(T.firebaseGoogleSignIn,Object(l.useState)(!1)),A=Object(i.a)(_,2),G=A[0],J=A[1],U=function(){J(!G)},K=function(e){e.preventDefault()};return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(m.a,{container:!0,direction:"column",justifyContent:"center",spacing:2}),Object(H.jsx)(z.a,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:S.a().shape({email:S.b().email("Must be a valid email").max(255).required("Email is required"),password:S.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setErrors,c=a.setStatus,o=a.setSubmitting,e.prev=1,e.next=4,W(t.email,t.password).then((function(){}),(function(e){F.current&&(c({success:!1}),n({submit:e.message}),o(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),F.current&&(c({success:!1}),n({submit:e.t0.message}),o(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,o=e.handleBlur,i=e.handleChange,s=e.handleSubmit,l=e.isSubmitting,d=e.touched,u=e.values;return Object(H.jsxs)("form",Object(n.a)(Object(n.a)({noValidate:!0,onSubmit:s},a),{},{children:[Object(H.jsxs)(p.a,{fullWidth:!0,error:Boolean(d.email&&r.email),sx:Object(n.a)({},c.typography.customInput),children:[Object(H.jsx)(h.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(H.jsx)(O.a,{id:"outlined-adornment-email-login",type:"email",value:u.email,name:"email",onBlur:o,onChange:i,label:"Email Address / Username",inputProps:{}}),d.email&&r.email&&Object(H.jsx)(f.a,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email})]}),Object(H.jsxs)(p.a,{fullWidth:!0,error:Boolean(d.password&&r.password),sx:Object(n.a)({},c.typography.customInput),children:[Object(H.jsx)(h.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(H.jsx)(O.a,{id:"outlined-adornment-password-login",type:G?"text":"password",value:u.password,name:"password",onBlur:o,onChange:i,endAdornment:Object(H.jsx)(x.a,{position:"end",children:Object(H.jsx)(v.a,{"aria-label":"toggle password visibility",onClick:U,onMouseDown:K,edge:"end",size:"large",children:G?Object(H.jsx)(M.a,{}):Object(H.jsx)(L.a,{})})}),label:"Password",inputProps:{}}),d.password&&r.password&&Object(H.jsx)(f.a,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),Object(H.jsxs)(g.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(H.jsx)(w.a,{control:Object(H.jsx)(y.a,{checked:V,onChange:function(e){return q(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(H.jsx)(k.a,{variant:"subtitle1",component:b.b,to:t?"/pages/forgot-password/forgot-password".concat(t):"/forgot",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})]}),r.submit&&Object(H.jsx)(C.a,{sx:{mt:3},children:Object(H.jsx)(f.a,{error:!0,children:r.submit})}),Object(H.jsx)(C.a,{sx:{mt:2},children:Object(H.jsx)(B.a,{children:Object(H.jsx)(P.a,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})}},620:function(e,t,a){"use strict";var n=a(5),c=a(6),r=a(2),o=a(0),i=(a(12),a(153)),s=a(120),l=a(583),d=a(37),b=a(1),u=Object(d.a)(Object(b.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(9),h=a(10),O=a(7),f=a(121),x=a(154);function v(e){return Object(f.a)("MuiCheckbox",e)}var g=Object(x.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=Object(O.a)(l.a,{shouldForwardProp:function(e){return Object(O.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat(Object(p.a)(a.color))]]}})((function(e){var t,a=e.theme,c=e.ownerState;return Object(r.a)({color:a.palette.text.secondary},!c.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===c.color?a.palette.action.active:a.palette[c.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==c.color&&(t={},Object(n.a)(t,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:a.palette[c.color].main}),Object(n.a)(t,"&.".concat(g.disabled),{color:a.palette.action.disabled}),t))})),k=Object(b.jsx)(j,{}),C=Object(b.jsx)(u,{}),P=Object(b.jsx)(m,{}),S=o.forwardRef((function(e,t){var a,n,s=Object(h.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?k:l,u=s.color,j=void 0===u?"primary":u,m=s.icon,O=void 0===m?C:m,f=s.indeterminate,x=void 0!==f&&f,g=s.indeterminateIcon,S=void 0===g?P:g,z=s.inputProps,I=s.size,R=void 0===I?"medium":I,B=Object(c.a)(s,w),F=x?S:O,M=x?S:d,E=Object(r.a)({},s,{color:j,indeterminate:x,size:R}),L=function(e){var t=e.classes,a=e.indeterminate,n=e.color,c={root:["root",a&&"indeterminate","color".concat(Object(p.a)(n))]},o=Object(i.a)(c,v,t);return Object(r.a)({},t,o)}(E);return Object(b.jsx)(y,Object(r.a)({type:"checkbox",inputProps:Object(r.a)({"data-indeterminate":x},z),icon:o.cloneElement(F,{fontSize:null!=(a=F.props.fontSize)?a:R}),checkedIcon:o.cloneElement(M,{fontSize:null!=(n=M.props.fontSize)?n:R}),ownerState:E,ref:t},B,{classes:L}))}));t.a=S},621:function(e,t,a){"use strict";var n=a(5),c=a(6),r=a(2),o=a(0),i=(a(12),a(8)),s=a(153),l=a(61),d=a(122),b=a(9),u=a(7),j=a(10),m=a(121),p=a(154);function h(e){return Object(m.a)("MuiFormControlLabel",e)}var O=Object(p.a)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]),f=a(1),x=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],v=Object(u.a)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(n.a)({},"& .".concat(O.label),t.label),t.root,t["labelPlacement".concat(Object(b.a)(a.labelPlacement))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)(Object(n.a)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(O.disabled),{cursor:"default"}),"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},Object(n.a)({},"& .".concat(O.label),Object(n.a)({},"&.".concat(O.disabled),{color:t.palette.text.disabled})))})),g=o.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiFormControlLabel"}),n=a.className,u=a.componentsProps,m=void 0===u?{}:u,p=a.control,O=a.disabled,g=a.disableTypography,w=a.label,y=a.labelPlacement,k=void 0===y?"end":y,C=Object(c.a)(a,x),P=Object(l.a)(),S=O;"undefined"===typeof S&&"undefined"!==typeof p.props.disabled&&(S=p.props.disabled),"undefined"===typeof S&&P&&(S=P.disabled);var z={disabled:S};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof p.props[e]&&"undefined"!==typeof a[e]&&(z[e]=a[e])}));var I=Object(r.a)({},a,{disabled:S,label:w,labelPlacement:k}),R=function(e){var t=e.classes,a=e.disabled,n=e.labelPlacement,c={root:["root",a&&"disabled","labelPlacement".concat(Object(b.a)(n))],label:["label",a&&"disabled"]};return Object(s.a)(c,h,t)}(I);return Object(f.jsxs)(v,Object(r.a)({className:Object(i.a)(R.root,n),ownerState:I,ref:t},C,{children:[o.cloneElement(p,z),w.type===d.a||g?w:Object(f.jsx)(d.a,Object(r.a)({component:"span",className:R.label},m.typography,{children:w}))]}))}));t.a=g},791:function(e,t,a){"use strict";a.r(t);var n=a(41),c=a(29),r=a(538),o=a(556),i=a(542),s=a(122),l=a(485),d=a(587),b=a(588),u=a(619),j=a(201),m=a(590),p=a(91),h=a(1);t.default=function(){var e=Object(c.a)(),t=Object(p.a)().isLoggedIn,a=Object(r.a)(e.breakpoints.down("md"));return Object(h.jsx)(d.a,{children:Object(h.jsxs)(o.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(o.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(h.jsx)(o.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(o.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(h.jsx)(o.a,{item:!0,sx:{mb:3},children:Object(h.jsx)(n.b,{to:"#",children:Object(h.jsx)(j.a,{})})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(o.a,{container:!0,direction:a?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(h.jsx)(o.a,{item:!0,children:Object(h.jsx)(i.a,{alignItems:"center",justifyContent:"center",spacing:1,children:Object(h.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:a?"h3":"h2",children:"Hi, Welcome Back"})})})})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(u.a,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(l.a,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(o.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(h.jsx)(s.a,{component:n.b,to:t?"/pages/register/register3":"/register",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),Object(h.jsx)(o.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(h.jsx)(m.a,{})})]})})}}}]);
//# sourceMappingURL=6.2ee3160d.chunk.js.map