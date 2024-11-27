import{c as le,j as n,g as je,a as Re,s as q,A as ce,m as de,Y as ke,r as P,u as Ce,Z as ue,_ as Pe,$ as Le,H as Ve,d as U,e as He,a0 as Me,a1 as ie,n as me,L as Ae,P as ze,v as Ee,S as J,w as Ie,f as Z,T as Q,q as Be,a2 as Ne}from"./index-fyPGCoNP.js";const De={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Oe=le(n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Te=le(n.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function $e(e){return Re("MuiRating",e)}const I=je("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function We(e){const t=e.toString().split(".")[1];return t?t.length:0}function ee(e,t){if(e==null)return e;const s=Math.round(e/t)*t;return Number(s.toFixed(We(t)))}const Ge=e=>{const{classes:t,size:s,readOnly:d,disabled:g,emptyValueFocused:x,focusVisible:y}=e,u={root:["root",`size${ce(s)}`,g&&"disabled",y&&"focusVisible",d&&"readOnly"],label:["label","pristine"],labelEmptyValue:[x&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return He(u,$e,t)},Ye=q("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${I.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${ce(s.size)}`],s.readOnly&&t.readOnly]}})(de(({theme:e})=>({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${I.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${I.focusVisible} .${I.iconActive}`]:{outline:"1px solid #999"},[`& .${I.visuallyHidden}`]:De,variants:[{props:{size:"small"},style:{fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:e.typography.pxToRem(30)}},{props:({ownerState:t})=>t.readOnly,style:{pointerEvents:"none"}}]}))),pe=q("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:e})=>e.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),Je=q("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.icon,s.iconEmpty&&t.iconEmpty,s.iconFilled&&t.iconFilled,s.iconHover&&t.iconHover,s.iconFocus&&t.iconFocus,s.iconActive&&t.iconActive]}})(de(({theme:e})=>({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:t})=>t.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:t})=>t.iconEmpty,style:{color:(e.vars||e).palette.action.disabled}}]}))),Ue=q("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>ke(e)&&e!=="iconActive",overridesResolver:(e,t)=>{const{iconActive:s}=e;return[t.decimal,s&&t.iconActive]}})({position:"relative",variants:[{props:({iconActive:e})=>e,style:{transform:"scale(1.2)"}}]});function qe(e){const{value:t,...s}=e;return n.jsx("span",{...s})}function oe(e){const{classes:t,disabled:s,emptyIcon:d,focus:g,getLabelText:x,highlightSelectedOnly:y,hover:u,icon:B,IconContainerComponent:N,isActive:b,itemValue:c,labelProps:L,name:V,onBlur:w,onChange:_,onClick:S,onFocus:F,readOnly:D,ownerState:H,ratingValue:r,ratingValueRounded:h}=e,j=y?c===r:c<=r,O=c<=u,T=c<=g,M=c===h,$=`${V}-${ue()}`,A=n.jsx(Je,{as:N,value:c,className:U(t.icon,j?t.iconFilled:t.iconEmpty,O&&t.iconHover,T&&t.iconFocus,b&&t.iconActive),ownerState:{...H,iconEmpty:!j,iconFilled:j,iconHover:O,iconFocus:T,iconActive:b},children:d&&!j?d:B});return D?n.jsx("span",{...L,children:A}):n.jsxs(P.Fragment,{children:[n.jsxs(pe,{ownerState:{...H,emptyValueFocused:void 0},htmlFor:$,...L,children:[A,n.jsx("span",{className:t.visuallyHidden,children:x(c)})]}),n.jsx("input",{className:t.visuallyHidden,onFocus:F,onBlur:w,onChange:_,onClick:S,disabled:s,value:c,id:$,type:"radio",name:V,checked:M})]})}const _e=n.jsx(Oe,{fontSize:"inherit"}),Ke=n.jsx(Te,{fontSize:"inherit"});function Xe(e){return`${e||"0"} Star${e!==1?"s":""}`}const Ze=P.forwardRef(function(t,s){const d=Ce({name:"MuiRating",props:t}),{component:g="span",className:x,defaultValue:y=null,disabled:u=!1,emptyIcon:B=Ke,emptyLabelText:N="Empty",getLabelText:b=Xe,highlightSelectedOnly:c=!1,icon:L=_e,IconContainerComponent:V=qe,max:w=5,name:_,onChange:S,onChangeActive:F,onMouseLeave:D,onMouseMove:H,precision:r=1,readOnly:h=!1,size:j="medium",value:O,...T}=d,M=ue(_),[$,A]=Pe({controlled:O,default:y,name:"Rating"}),W=ee($,r),ye=Le(),[{hover:m,focus:G},z]=P.useState({hover:-1,focus:-1});let R=W;m!==-1&&(R=m),G!==-1&&(R=G);const[he,K]=P.useState(!1),te=P.useRef(),fe=Ve(te,s),xe=i=>{H&&H(i);const o=te.current,{right:l,left:Y,width:k}=o.getBoundingClientRect();let C;ye?C=(l-i.clientX)/k:C=(i.clientX-Y)/k;let p=ee(w*C+r/2,r);p=Me(p,r,w),z(v=>v.hover===p&&v.focus===p?v:{hover:p,focus:p}),K(!1),F&&m!==p&&F(i,p)},ve=i=>{D&&D(i);const o=-1;z({hover:o,focus:o}),F&&m!==o&&F(i,o)},ne=i=>{let o=i.target.value===""?null:parseFloat(i.target.value);m!==-1&&(o=m),A(o),S&&S(i,o)},be=i=>{i.clientX===0&&i.clientY===0||(z({hover:-1,focus:-1}),A(null),S&&parseFloat(i.target.value)===W&&S(i,null))},we=i=>{ie(i.target)&&K(!0);const o=parseFloat(i.target.value);z(l=>({hover:l.hover,focus:o}))},Se=i=>{if(m!==-1)return;ie(i.target)||K(!1);const o=-1;z(l=>({hover:l.hover,focus:o}))},[Fe,se]=P.useState(!1),E={...d,component:g,defaultValue:y,disabled:u,emptyIcon:B,emptyLabelText:N,emptyValueFocused:Fe,focusVisible:he,getLabelText:b,icon:L,IconContainerComponent:V,max:w,precision:r,readOnly:h,size:j},f=Ge(E);return n.jsxs(Ye,{as:g,ref:fe,onMouseMove:xe,onMouseLeave:ve,className:U(f.root,x,h&&"MuiRating-readOnly"),ownerState:E,role:h?"img":null,"aria-label":h?b(R):null,...T,children:[Array.from(new Array(w)).map((i,o)=>{const l=o+1,Y={classes:f,disabled:u,emptyIcon:B,focus:G,getLabelText:b,highlightSelectedOnly:c,hover:m,icon:L,IconContainerComponent:V,name:M,onBlur:Se,onChange:ne,onClick:be,onFocus:we,ratingValue:R,ratingValueRounded:W,readOnly:h,ownerState:E},k=l===Math.ceil(R)&&(m!==-1||G!==-1);if(r<1){const C=Array.from(new Array(1/r));return n.jsx(Ue,{className:U(f.decimal,k&&f.iconActive),ownerState:E,iconActive:k,children:C.map((p,v)=>{const X=ee(l-1+(v+1)*r,r);return n.jsx(oe,{...Y,isActive:!1,itemValue:X,labelProps:{style:C.length-1===v?{}:{width:X===R?`${(v+1)*r*100}%`:"0%",overflow:"hidden",position:"absolute"}}},X)})},l)}return n.jsx(oe,{...Y,isActive:k,itemValue:l},l)}),!h&&!u&&n.jsxs(pe,{className:U(f.label,f.labelEmptyValue),ownerState:E,children:[n.jsx("input",{className:f.visuallyHidden,value:"",id:`${M}-empty`,type:"radio",name:M,checked:W==null,onFocus:()=>se(!0),onBlur:()=>se(!1),onChange:ne}),n.jsx("span",{className:f.visuallyHidden,children:N})]})]})}),Qe=me.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`,et=me.img`
    width: 275px;
    height: 300px;
    filter: brightness(0.9) contrast(1.5) saturate(1.2);
    mix-blend-mode: multiply;
    /* oq foni bor ekan shuni ochirish uchun filter ishlattim */
`,Rt=({image:e,id:t,status:s,name:d,originalPrice:g,sellPrice:x,rate:y})=>{let u=e[Object.keys(e)[0]];return n.jsx(Ae,{style:{textDecoration:"none"},to:"/shop/"+t,children:n.jsxs(ze,{sx:{width:"335px",padding:"30px 0 16px 0",borderRadius:"30px",backgroundColor:Ee,transition:"all .2s linear",cursor:"pointer",":hover":{transform:"translateY(-10px)"}},children:[n.jsx(J,{sx:{mb:"14px",padding:"5px 12px",display:"inline-block",color:Ie,fontSize:"15px",borderRadius:"8px",backgroundColor:Z},ml:"30px",children:s}),n.jsx(Qe,{children:n.jsx(et,{style:{marginBottom:"16px"},src:u,alt:"image"})}),n.jsxs(J,{sx:{padding:"0 30px"},children:[n.jsx(Q,{mb:"13px",color:Z,fontWeight:600,fontSize:20,lineHeight:"23px",children:d}),n.jsxs(J,{sx:{borderTop:"1px solid #DEDDDD"},pt:"6px",direction:"row",alignItems:"center",justifyContent:"space-between",children:[n.jsxs(J,{direction:"row",alignItems:"center",gap:"8px",children:[n.jsxs(Q,{sx:{textDecoration:"line-through"},color:Be,fontSize:"15px",lineHeight:"20px",children:["$",g]}),n.jsxs(Q,{color:Z,fontWeight:700,fontSize:"18px",lineHeight:"24px",children:["$",x]})]}),n.jsx(Ze,{name:"read-only",value:y,readOnly:!0})]})]})]})})},tt="/assets/product1-YCHe_rWk.png",nt="/assets/product2-CCBTc9q1.png",st="/assets/product3-a4AfMCYO.png",it="/assets/product4-BLHV4_zw.png",ot="/assets/product5-B4VHWxad.png",at="/assets/product6-Dcz8_byD.png",rt="/assets/product7-DfaPSAzJ.png",lt="/assets/product8-CtwcWy5q.png",ct="/assets/product9-UkEm9MGh.png",dt="/assets/product10-J6IrPdmr.png",ut="/assets/product11-CbJGGwI7.png",mt="/assets/product12-BtBaDV-N.jpg",pt="/assets/user-photo1-BwhlVtQw.jpg",gt="/assets/user-photo2-CKqnUPPi.jpg",yt="/assets/category-banner1-C-GEsoE6.jpg",ht="/assets/category-banner2-K4lNH5w8.jpg",ft="/assets/category-banner3-DvjdadRB.jpg",xt="/assets/news1-tkn5Ogy2.jpg",vt="/assets/news2-DKo8YadN.jpg";var ae="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",ge=function(e){e==null&&(e=10);for(var t="",s=0;s<e;++s)t+=ae[Math.floor(Math.random()*ae.length)];return t};ge.verify=function(e){return typeof e=="string"&&/^[a-zA-Z0-9]+$/.test(e)};var bt=ge;const a=Ne(bt),re={categories:[{text:"Juice",img:yt},{text:"Food",img:ht},{text:"Cookis",img:ft}],experts:[{name:"Giovani Bacardo",job:"Farmer",image:"",socials:{instagram:"",facebook:"username",twitter:"username"}},{name:"Marianne Loreno",job:"Designer",image:"",socials:{instagram:"username",facebook:"username",twitter:"username"}},{name:"Riga Pelore",job:"Farmer",image:"",socials:{instagram:"username",facebook:"username",twitter:"username"}}],products:{juices:[],foods:[{id:a(),name:"Calabrese Broccoli",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"13.00",rate:5,status:"Vegetable",image:{product12:mt}},{id:a(),name:"Fresh Banana Fruites",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"14.00",rate:5,status:"Fresh",image:{product11:ut}},{id:a(),name:"White Nuts",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"15.00",rate:5,status:"Millets",image:{product10:dt}},{id:a(),name:"Vegan Red Tomato",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"17.00",rate:5,status:"Vegetable",image:{product9:ct}},{id:a(),name:"Zelco Suji Elaichi Rusk",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"11.00",rate:5,status:"Health",image:{product8:lt}},{id:a(),name:"Eggs",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"12.00",rate:5,status:"Nuts",image:{product7:rt}},{id:a(),name:"Brown Hazelnut",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"17.00",rate:5,status:"Fresh",image:{product6:at}},{id:a(),name:"Mung Bean",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"15.00",rate:5,status:"Fresh",image:{product5:ot}},{id:a(),name:"Vegan Red Tomato",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"11.00",rate:5,status:"Health",image:{product4:it}},{id:a(),name:"White Nuts",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"12.00",rate:5,status:"Nuts",image:{product3:st}},{id:a(),name:"Fresh Banana Fruites",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"17.00",rate:5,status:"Fresh",image:{product2:nt}},{id:a(),name:"Calabrese Broccoli",describtion:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",originalPrice:"20.00",sellPrice:"15.00",rate:5,status:"Fresh",image:{product1:tt}}],cookis:[]},comments:[{id:a(),userPhoto:{userPhoto1:pt},userRate:5,userComment:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",userName:"Sara Taylor",userJob:"Consumer"},{id:a(),userPhoto:{userPhoto2:gt},userRate:4,userComment:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",userName:"John Smith",userJob:"Consumer"}],news:[{image:{new2:vt},dateNum:"24",dateMonth:"Oct",adminName:"Rachi Card",title:"Our Favourite Summertime Tommeto",text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum 2",id:a()},{image:{new1:xt},dateNum:"25",dateMonth:"Nov",adminName:"Rachi Card",title:"The Benefits of Vitamin D & How to Get It",text:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum 1",id:a()}]};let wt=0,St=0;Object.keys(re.products).map(e=>{wt+=re.products[e].length});let Ft=new Date;St=Ft.getFullYear()-1999;export{Rt as C,Ze as R,St as f,re as o,wt as p};
