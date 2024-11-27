import{a as W,g as N,s as R,z as be,A as y,m as M,D as Y,E as A,r as v,u as D,j as s,d as Q,e as F,c as z,P as H,b as _,F as ee,G as te,H as ye,I as Ce,J as K,K as X,M as Se,N as oe,O as je,Q as ke,R as Re,U as we,V as Ee,W as Pe,i as Ie,t as Ae,C as Me,S as E,v as ze,w as q,f as P,T as I,q as Oe,h as re,X as Be,B as J,l as Le}from"./index-fyPGCoNP.js";import{P as $e,B as Te}from"./hero-banner1-C-MgDs2u.js";import{A as He}from"./arrow-BICq-ljU.js";import{o as r,R as We,C as T}from"./data-D3dMEzAC.js";function Ne(e){return W("MuiAlert",e)}const se=N("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);function De(e){return W("MuiIconButton",e)}const Fe=N("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Ue=e=>{const{classes:t,disabled:n,color:o,edge:i,size:c}=e,a={root:["root",n&&"disabled",o!=="default"&&`color${y(o)}`,i&&`edge${y(i)}`,`size${y(c)}`]};return F(a,De,t)},Ge=R(be,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${y(n.color)}`],n.edge&&t[`edge${y(n.edge)}`],t[`size${y(n.size)}`]]}})(M(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:t=>!t.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Y(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),M(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(A()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette).filter(A()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Y((e.vars||e).palette[t].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${Fe.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}}))),Ve=v.forwardRef(function(t,n){const o=D({props:t,name:"MuiIconButton"}),{edge:i=!1,children:c,className:a,color:d="default",disabled:h=!1,disableFocusRipple:x=!1,size:b="medium",...g}=o,j={...o,edge:i,color:d,disabled:h,disableFocusRipple:x,size:b},C=Ue(j);return s.jsx(Ge,{className:Q(C.root,a),centerRipple:!0,focusRipple:!x,disabled:h,ref:n,...g,ownerState:j,children:c})}),Xe=z(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),qe=z(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Je=z(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Ke=z(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Qe=z(s.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Ze=e=>{const{variant:t,color:n,severity:o,classes:i}=e,c={root:["root",`color${y(n||o)}`,`${t}${y(n||o)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return F(c,Ne,i)},Ye=R(H,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${y(n.color||n.severity)}`]]}})(M(({theme:e})=>{const t=e.palette.mode==="light"?ee:te,n=e.palette.mode==="light"?te:ee;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(A(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:t(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:n(e.palette[o].light,.9),[`& .${se.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}})),...Object.entries(e.palette).filter(A(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:t(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${se.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}})),...Object.entries(e.palette).filter(A(["dark"])).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText(e.palette[o].main)}}}))]}})),_e=R("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),et=R("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),ne=R("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),ae={success:s.jsx(Xe,{fontSize:"inherit"}),warning:s.jsx(qe,{fontSize:"inherit"}),error:s.jsx(Je,{fontSize:"inherit"}),info:s.jsx(Ke,{fontSize:"inherit"})},tt=v.forwardRef(function(t,n){const o=D({props:t,name:"MuiAlert"}),{action:i,children:c,className:a,closeText:d="Close",color:h,components:x={},componentsProps:b={},icon:g,iconMapping:j=ae,onClose:C,role:p="alert",severity:f="success",slotProps:S={},slots:l={},variant:u="standard",...m}=o,k={...o,color:h,severity:f,variant:u,colorSeverity:h||f},w=Ze(k),U={slots:{closeButton:x.CloseButton,closeIcon:x.CloseIcon,...l},slotProps:{...b,...S}},[O,B]=_("closeButton",{elementType:Ve,externalForwardedProps:U,ownerState:k}),[L,$]=_("closeIcon",{elementType:Qe,externalForwardedProps:U,ownerState:k});return s.jsxs(Ye,{role:p,elevation:0,ownerState:k,className:Q(w.root,a),ref:n,...m,children:[g!==!1?s.jsx(_e,{ownerState:k,className:w.icon,children:g||j[f]||ae[f]}):null,s.jsx(et,{ownerState:k,className:w.message,children:c}),i!=null?s.jsx(ne,{ownerState:k,className:w.action,children:i}):null,i==null&&C?s.jsx(ne,{ownerState:k,className:w.action,children:s.jsx(O,{size:"small","aria-label":d,title:d,color:"inherit",onClick:C,...B,children:s.jsx(L,{fontSize:"small",...$})})}):null]})});function ie(e){return e.substring(2).toLowerCase()}function ot(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function rt(e){const{children:t,disableReactTree:n=!1,mouseEvent:o="onClick",onClickAway:i,touchEvent:c="onTouchEnd"}=e,a=v.useRef(!1),d=v.useRef(null),h=v.useRef(!1),x=v.useRef(!1);v.useEffect(()=>(setTimeout(()=>{h.current=!0},0),()=>{h.current=!1}),[]);const b=ye(Ce(t),d),g=K(p=>{const f=x.current;x.current=!1;const S=X(d.current);if(!h.current||!d.current||"clientX"in p&&ot(p,S))return;if(a.current){a.current=!1;return}let l;p.composedPath?l=p.composedPath().includes(d.current):l=!S.documentElement.contains(p.target)||d.current.contains(p.target),!l&&(n||!f)&&i(p)}),j=p=>f=>{x.current=!0;const S=t.props[p];S&&S(f)},C={ref:b};return c!==!1&&(C[c]=j(c)),v.useEffect(()=>{if(c!==!1){const p=ie(c),f=X(d.current),S=()=>{a.current=!0};return f.addEventListener(p,g),f.addEventListener("touchmove",S),()=>{f.removeEventListener(p,g),f.removeEventListener("touchmove",S)}}},[g,c]),o!==!1&&(C[o]=j(o)),v.useEffect(()=>{if(o!==!1){const p=ie(o),f=X(d.current);return f.addEventListener(p,g),()=>{f.removeEventListener(p,g)}}},[g,o]),s.jsx(v.Fragment,{children:v.cloneElement(t,C)})}function st(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:o,open:i,resumeHideDuration:c}=e,a=Se();v.useEffect(()=>{if(!i)return;function l(u){u.defaultPrevented||u.key==="Escape"&&(o==null||o(u,"escapeKeyDown"))}return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[i,o]);const d=K((l,u)=>{o==null||o(l,u)}),h=K(l=>{!o||l==null||a.start(l,()=>{d(null,"timeout")})});v.useEffect(()=>(i&&h(t),a.clear),[i,t,h,a]);const x=l=>{o==null||o(l,"clickaway")},b=a.clear,g=v.useCallback(()=>{t!=null&&h(c??t*.5)},[t,c,h]),j=l=>u=>{const m=l.onBlur;m==null||m(u),g()},C=l=>u=>{const m=l.onFocus;m==null||m(u),b()},p=l=>u=>{const m=l.onMouseEnter;m==null||m(u),b()},f=l=>u=>{const m=l.onMouseLeave;m==null||m(u),g()};return v.useEffect(()=>{if(!n&&i)return window.addEventListener("focus",g),window.addEventListener("blur",b),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",b)}},[n,i,g,b]),{getRootProps:(l={})=>{const u={...oe(e),...oe(l)};return{role:"presentation",...l,...u,onBlur:j(u),onFocus:C(u),onMouseEnter:p(u),onMouseLeave:f(u)}},onClickAway:x}}function nt(e){return W("MuiSnackbarContent",e)}N("MuiSnackbarContent",["root","message","action"]);const at=e=>{const{classes:t}=e;return F({root:["root"],action:["action"],message:["message"]},nt,t)},it=R(H,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(M(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,n=je(e.palette.background.default,t);return{...e.typography.body2,color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),lt=R("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),ct=R("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),dt=v.forwardRef(function(t,n){const o=D({props:t,name:"MuiSnackbarContent"}),{action:i,className:c,message:a,role:d="alert",...h}=o,x=o,b=at(x);return s.jsxs(it,{role:d,square:!0,elevation:6,className:Q(b.root,c),ownerState:x,ref:n,...h,children:[s.jsx(lt,{className:b.message,ownerState:x,children:a}),i?s.jsx(ct,{className:b.action,ownerState:x,children:i}):null]})});function ut(e){return W("MuiSnackbar",e)}N("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const pt=e=>{const{classes:t,anchorOrigin:n}=e,o={root:["root",`anchorOrigin${y(n.vertical)}${y(n.horizontal)}`]};return F(o,ut,t)},le=R("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`anchorOrigin${y(n.anchorOrigin.vertical)}${y(n.anchorOrigin.horizontal)}`]]}})(M(({theme:e})=>({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[e.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[e.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[e.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[e.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[e.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),ft=v.forwardRef(function(t,n){const o=D({props:t,name:"MuiSnackbar"}),i=ke(),c={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:a,anchorOrigin:{vertical:d,horizontal:h}={vertical:"bottom",horizontal:"left"},autoHideDuration:x=null,children:b,className:g,ClickAwayListenerProps:j,ContentProps:C,disableWindowBlurListener:p=!1,message:f,onBlur:S,onClose:l,onFocus:u,onMouseEnter:m,onMouseLeave:k,open:w,resumeHideDuration:U,TransitionComponent:O=we,transitionDuration:B=c,TransitionProps:{onEnter:L,onExited:$,...ce}={},...de}=o,G={...o,anchorOrigin:{vertical:d,horizontal:h},autoHideDuration:x,disableWindowBlurListener:p,TransitionComponent:O,transitionDuration:B},ue=pt(G),{getRootProps:pe,onClickAway:fe}=st({...G}),[ge,Z]=v.useState(!0),he=Re({elementType:le,getSlotProps:pe,externalForwardedProps:de,ownerState:G,additionalProps:{ref:n},className:[ue.root,g]}),xe=V=>{Z(!0),$&&$(V)},me=(V,ve)=>{Z(!1),L&&L(V,ve)};return!w&&ge?null:s.jsx(rt,{onClickAway:fe,...j,children:s.jsx(le,{...he,children:s.jsx(O,{appear:!0,in:w,timeout:B,direction:d==="top"?"down":"up",onEnter:me,onExited:xe,...ce,children:b||s.jsx(dt,{message:f,action:a,...C})})})})}),vt=()=>{let{id:e}=Ee(),t={};r.products.foods.map(a=>{a.id==e&&(t=a)}),r.products.cookis.map(a=>{a.id==e&&(t=a)}),r.products.juices.map(a=>{a.id==e&&(t=a)});const n=()=>{let a=JSON.parse(localStorage.getItem("cartProducts"))||[];a.push({product:t,count:1}),localStorage.setItem("cartProducts",JSON.stringify(a)),c(!0)},o=(a,d)=>{if(d==="clickaway"){console.log(d);return}c(!1)},[i,c]=Pe.useState(!1);return window.scrollTo(0,700),s.jsxs(Ie,{theme:Ae,children:[s.jsx(ft,{open:i,autoHideDuration:6e3,onClose:o,children:s.jsx(tt,{onClose:o,severity:"success",variant:"filled",sx:{width:"100%"},children:"Succesfully added to Cart"})}),s.jsx($e,{bgImage:Te,title:"Shop Single",mbottom:"133px"}),s.jsxs(Me,{children:[s.jsxs(E,{width:"100%",mb:"90px",direction:"row",alignItems:"center",justifyContent:"space-evenly",children:[s.jsxs(H,{sx:{width:"591px",height:"563px",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px",backgroundColor:ze,boxShadow:"none"},children:[s.jsx(H,{sx:{padding:"5px 12px",display:"inline-block",color:q,fontSize:"15px",borderRadius:"8px",backgroundColor:P,position:"absolute",left:"35px",top:"38px"},children:t.status}),s.jsx("img",{style:{filter:"brightness(0.9) contrast(1.5) saturate(1.2)",mixBlendMode:"multiply"},src:t.image[Object.keys(t.image)],alt:""})]}),s.jsxs(E,{width:"658px",children:[s.jsx(I,{mb:"13px",color:P,fontWeight:600,fontSize:40,lineHeight:"46px",children:t.name}),s.jsx(We,{sx:{mb:"9px"},name:"read-only",value:t.rate,readOnly:!0}),s.jsxs(E,{mb:"27px",direction:"row",gap:"6px",children:[s.jsxs(I,{sx:{textDecoration:"line-through"},color:Oe,fontSize:"20px",lineHeight:"27px",children:["$",t.originalPrice]}),s.jsxs(I,{color:P,fontWeight:700,fontSize:"25px",lineHeight:"34px",children:["$",t.sellPrice]})]}),s.jsx(I,{mb:"35px",width:"658px",color:re,fontSize:"18px",lineHeight:"29px",children:t.describtion}),s.jsxs(E,{direction:"row",alignItems:"center",gap:"21px",children:[s.jsx(I,{color:P,fontWeight:700,fontSize:"25px",lineHeight:"34px",children:"Quantity:"}),s.jsx(Be,{sx:{width:"134px"},id:"outlined-basic",type:"number",required:!0,defaultValue:1,variant:"outlined"}),s.jsx(J,{onClick:n,endIcon:s.jsx(He,{}),sx:{p:"20px 49px",color:q,borderRadius:"16px",backgroundColor:P},disableElevation:!0,variant:"contained",children:"Add To Cart"})]})]})]}),s.jsxs(E,{mb:"140px",children:[s.jsxs(E,{mb:"27px",direction:"row",alignItems:"center",justifyContent:"center",gap:"20px",children:[s.jsx(J,{sx:{p:"20px 49px",color:q,borderRadius:"16px",backgroundColor:P},disableElevation:!0,variant:"contained",children:"Product Description"}),s.jsx(J,{sx:{p:"20px 49px",color:P,borderRadius:"16px",backgroundColor:Le},disableElevation:!0,variant:"contained",children:"Additional Info"})]}),s.jsx(I,{variant:"body1",width:"1137px",color:re,textAlign:"center",margin:"0 auto",children:"Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw."})]}),s.jsxs(E,{mb:"140px",children:[s.jsx(I,{m:"0 auto",mb:"40px",fontWeight:"800",fontSize:"50px",lineHeight:"58px",color:P,children:"Related Products"}),s.jsxs(E,{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",justifyContent:"space-between",children:[s.jsx(T,{id:r.products.foods[r.products.foods.length-1].id,image:r.products.foods[r.products.foods.length-1].image,status:r.products.foods[r.products.foods.length-1].status,name:r.products.foods[r.products.foods.length-1].name,originalPrice:r.products.foods[r.products.foods.length-1].originalPrice,sellPrice:r.products.foods[r.products.foods.length-1].sellPrice,rate:r.products.foods[r.products.foods.length-1].rate}),s.jsx(T,{id:r.products.foods[r.products.foods.length-2].id,image:r.products.foods[r.products.foods.length-2].image,status:r.products.foods[r.products.foods.length-2].status,name:r.products.foods[r.products.foods.length-2].name,originalPrice:r.products.foods[r.products.foods.length-2].originalPrice,sellPrice:r.products.foods[r.products.foods.length-2].sellPrice,rate:r.products.foods[r.products.foods.length-2].rate}),s.jsx(T,{id:r.products.foods[r.products.foods.length-3].id,image:r.products.foods[r.products.foods.length-3].image,status:r.products.foods[r.products.foods.length-3].status,name:r.products.foods[r.products.foods.length-3].name,originalPrice:r.products.foods[r.products.foods.length-3].originalPrice,sellPrice:r.products.foods[r.products.foods.length-3].sellPrice,rate:r.products.foods[r.products.foods.length-3].rate}),s.jsx(T,{id:r.products.foods[r.products.foods.length-4].id,image:r.products.foods[r.products.foods.length-4].image,status:r.products.foods[r.products.foods.length-4].status,name:r.products.foods[r.products.foods.length-4].name,originalPrice:r.products.foods[r.products.foods.length-4].originalPrice,sellPrice:r.products.foods[r.products.foods.length-4].sellPrice,rate:r.products.foods[r.products.foods.length-4].rate})]})]})]})]})};export{vt as default};
