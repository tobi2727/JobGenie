(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1041)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,a=r(2648).Z,s=r(1598).Z,n=r(7273).Z,o=s(r(7294)),l=a(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=a(r(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,a,s,n,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&n(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;a.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(e)}})}let x=o.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:s,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:m,placeholder:p,loading:g,srcString:x,config:b,unoptimized:y,loader:v,onLoadRef:w,onLoadingCompleteRef:j,setBlurComplete:E,setShowAltText:k,onLoad:N,onError:_}=e,S=n(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},S,r,{width:s,height:a,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:g,style:i({},d,u),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&h(e,x,p,w,j,E,y))},[x,p,w,j,E,_,y,t]),onLoad:e=>{let t=e.currentTarget;h(t,x,p,w,j,E,y)},onError:e=>{k(!0),"blur"===p&&E(!0),_&&_(e)}})))}),b=o.forwardRef((e,t)=>{let r,a;var s,{src:h,sizes:b,unoptimized:y=!1,priority:v=!1,loading:w,className:j,quality:E,width:k,height:N,fill:_,style:S,onLoad:C,onLoadingComplete:z,placeholder:O="empty",blurDataURL:I,layout:P,objectFit:R,objectPosition:A,lazyBoundary:T,lazyRoot:$}=e,D=n(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=o.useContext(u.ImageConfigContext),L=o.useMemo(()=>{let e=m||B||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[B]),M=D,F=M.loader||f.default;delete M.loader;let H="__next_img_default"in F;if(H){if("custom"===L.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=F;F=e=>{let{config:t}=e,r=n(e,["config"]);return W(r)}}if(P){"fill"===P&&(_=!0);let U={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];U&&(S=i({},S,U));let Z={responsive:"100vw",fill:"100vw"}[P];Z&&!b&&(b=Z)}let q="",G=g(k),V=g(N);if("object"==typeof(s=h)&&(p(s)||void 0!==s.src)){let J=p(h)?h.default:h;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,a=J.blurHeight,I=I||J.blurDataURL,q=J.src,!_){if(G||V){if(G&&!V){let K=G/J.width;V=Math.round(J.height*K)}else if(!G&&V){let X=V/J.height;G=Math.round(J.width*X)}}else G=J.width,V=J.height}}let Y=!v&&("lazy"===w||void 0===w);((h="string"==typeof h?h:q).startsWith("data:")||h.startsWith("blob:"))&&(y=!0,Y=!1),L.unoptimized&&(y=!0),H&&h.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(y=!0);let[Q,ee]=o.useState(!1),[et,er]=o.useState(!1),ei=g(E),ea=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:A}:{},et?{}:{color:"transparent"},S),es="blur"===O&&I&&!Q?{backgroundSize:ea.objectFit||"cover",backgroundPosition:ea.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:V,blurWidth:r,blurHeight:a,blurDataURL:I}),'")')}:{},en=function(e){let{config:t,src:r,unoptimized:i,width:a,quality:s,sizes:n,loader:o}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:a}=e;if(r){let s=/(^|\s)(1?\d?\d)vw/g,n=[];for(let o;o=s.exec(r);o)n.push(parseInt(o[2]));if(n.length){let l=.01*Math.min(...n);return{widths:a.filter(e=>e>=i[0]*l),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:c,kind:"x"}}(t,a,n),d=l.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:l.map((e,i)=>"".concat(o({config:t,src:r,quality:s,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:o({config:t,src:r,quality:s,width:l[d]})}}({config:L,src:h,unoptimized:y,width:G,quality:ei,sizes:b,loader:F}),eo=h,el={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:M.crossOrigin},ec=o.useRef(C);o.useEffect(()=>{ec.current=C},[C]);let ed=o.useRef(z);o.useEffect(()=>{ed.current=z},[z]);let eu=i({isLazy:Y,imgAttributes:en,heightInt:V,widthInt:G,qualityInt:ei,className:j,imgStyle:ea,blurStyle:es,loading:w,config:L,fill:_,unoptimized:y,placeholder:O,loader:F,srcString:eo,onLoadRef:ec,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:er},M);return o.default.createElement(o.default.Fragment,null,o.default.createElement(x,Object.assign({},eu,{ref:t})),v?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},el))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:a,blurDataURL:s}=e,n=i||t,o=a||r,l=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return n&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(n," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&a?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},1041:function(e,t,r){"use strict";let i,a;r.r(t),r.d(t,{default:function(){return eh}});var s,n=r(5893),o=r(9008),l=r.n(o),c=r(7294);let d={data:""},u=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||d,f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,m=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,g=(e,t)=>{let r="",i="",a="";for(let s in e){let n=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+n+";":i+="f"==s[1]?g(n,s):s+"{"+g(n,"k"==s[1]?"":t)+"}":"object"==typeof n?i+=g(n,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=n&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=g.p?g.p(s,n):s+":"+n+";")}return r+(t&&a?t+"{"+a+"}":a)+i},h={},x=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+x(e[r]);return t}return e},b=(e,t,r,i,a)=>{var s,n;let o=x(e),l=h[o]||(h[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!h[l]){let c=o!==e?e:(e=>{let t,r,i=[{}];for(;t=f.exec(e.replace(m,""));)t[4]?i.shift():t[3]?(r=t[3].replace(p," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(p," ").trim();return i[0]})(e);h[l]=g(a?{["@keyframes "+l]:c}:c,r?"":"."+l)}let d=r&&h.g?h.g:null;return r&&(h.g=h[l]),s=h[l],n=t,d?n.data=n.data.replace(d,s):-1===n.data.indexOf(s)&&(n.data=i?s+n.data:n.data+s),l},y=(e,t,r)=>e.reduce((e,i,a)=>{let s=t[a];if(s&&s.call){let n=s(r),o=n&&n.props&&n.props.className||/^go/.test(n)&&n;s=o?"."+o:n&&"object"==typeof n?n.props?"":g(n,""):!1===n?"":n}return e+i+(null==s?"":s)},"");function v(e){let t=this||{},r=e.call?e(t.p):e;return b(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,u(t.target),t.g,t.o,t.k)}v.bind({g:1});let w,j,E,k=v.bind({k:1});function N(e,t){let r=this||{};return function(){let i=arguments;function a(s,n){let o=Object.assign({},s),l=o.className||a.className;r.p=Object.assign({theme:j&&j()},o),r.o=/ *go\d+/.test(l),o.className=v.apply(r,i)+(l?" "+l:""),t&&(o.ref=n);let c=e;return e[0]&&(c=o.as||e,delete o.as),E&&c[0]&&E(o),w(c,o)}return t?t(a):a}}var _=e=>"function"==typeof e,S=(e,t)=>_(e)?e(t):e,C=(i=0,()=>(++i).toString()),z=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},O=new Map,I=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),$({type:4,toastId:e})},1e3);O.set(e,t)},P=e=>{let t=O.get(e);t&&clearTimeout(t)},R=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?R(e,{type:1,toast:r}):R(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?I(i):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},A=[],T={toasts:[],pausedAt:void 0},$=e=>{T=R(T,e),A.forEach(e=>{e(T)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},B=(e={})=>{let[t,r]=(0,c.useState)(T);(0,c.useEffect)(()=>(A.push(r),()=>{let e=A.indexOf(r);e>-1&&A.splice(e,1)}),[t]);let i=t.toasts.map(t=>{var r,i;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...t,toasts:i}},L=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),M=e=>(t,r)=>{let i=L(t,e,r);return $({type:2,toast:i}),i.id},F=(e,t)=>M("blank")(e,t);F.error=M("error"),F.success=M("success"),F.loading=M("loading"),F.custom=M("custom"),F.dismiss=e=>{$({type:3,toastId:e})},F.remove=e=>$({type:4,toastId:e}),F.promise=(e,t,r)=>{let i=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(F.success(S(t.success,e),{id:i,...r,...null==r?void 0:r.success}),e)).catch(e=>{F.error(S(t.error,e),{id:i,...r,...null==r?void 0:r.error})}),e};var H=(e,t)=>{$({type:1,toast:{id:e,height:t}})},W=()=>{$({type:5,time:Date.now()})},U=e=>{let{toasts:t,pausedAt:r}=B(e);(0,c.useEffect)(()=>{if(r)return;let e=Date.now(),i=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[t,r]);let i=(0,c.useCallback)(()=>{r&&$({type:6,time:Date.now()})},[r]),a=(0,c.useCallback)((e,r)=>{let{reverseOrder:i=!1,gutter:a=8,defaultPosition:s}=r||{},n=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),o=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<o&&e.visible).length;return n.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:W,endPause:i,calculateOffset:a}}},Z=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,G=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${k`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=N("div")`
  position: absolute;
`,J=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?c.createElement(K,null,t):t:"blank"===r?null:c.createElement(J,null,c.createElement(q,{...i}),"loading"!==r&&c.createElement(V,null,"error"===r?c.createElement(Z,{...i}):c.createElement(G,{...i})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ee=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,et=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,er=(e,t)=>{let r=e.includes("top")?1:-1,[i,a]=z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),Q(r)];return{animation:t?`${k(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=c.memo(({toast:e,position:t,style:r,children:i})=>{let a=e.height?er(e.position||t||"top-center",e.visible):{opacity:0},s=c.createElement(X,{toast:e}),n=c.createElement(et,{...e.ariaProps},S(e.message,e));return c.createElement(ee,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof i?i({icon:s,message:n}):c.createElement(c.Fragment,null,s,n))});s=c.createElement,g.p=void 0,w=s,j=void 0,E=void 0;var ea=({id:e,className:t,style:r,onHeightUpdate:i,children:a})=>{let s=c.useCallback(t=>{if(t){let r=()=>{i(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return c.createElement("div",{ref:s,className:t,style:r},a)},es=(e,t)=>{let r=e.includes("top"),i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...i}},en=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:a,containerStyle:s,containerClassName:n})=>{let{toasts:o,handlers:l}=U(r);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(r=>{let s=r.position||t,n=es(s,l.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}));return c.createElement(ea,{id:r.id,key:r.id,onHeightUpdate:l.updateHeight,className:r.visible?en:"",style:n},"custom"===r.type?S(r.message,r):a?a(r):c.createElement(ei,{toast:r,position:s}))}))};function el(){return(0,n.jsx)("footer",{className:"text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3",children:(0,n.jsxs)("div",{className:"w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between",children:[(0,n.jsxs)("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400",children:["\xa9 2024 ",(0,n.jsx)("a",{href:"https://hiredrive.de/",className:"hover:underline",children:"Hiredrive"}),". All Rights Reserved."]}),(0,n.jsxs)("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0",children:[(0,n.jsx)("li",{style:{marginRight:"15px"},children:(0,n.jsx)("a",{href:"www.hiredrive.de/impressum",className:"hover:underline me-4 md:me-6",children:"Impressum"})}),(0,n.jsx)("li",{style:{marginRight:"15px"},children:(0,n.jsx)("a",{href:"#",className:"hover:underline me-4 md:me-6",children:"Datenschutzerkl\xe4rung"})}),(0,n.jsx)("li",{style:{marginRight:"15px"},children:(0,n.jsx)("a",{href:"#",className:"hover:underline me-4 md:me-6",children:"Cookie-Richtlinie"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"mailto:hallo@hiredrive.de",className:"hover:underline",children:"Kontakt"})})]})]})})}var ec=r(5675),ed=r.n(ec);function eu(){return(0,n.jsx)("header",{className:"flex justify-center items-center w-full m:px-4 px-2",style:{marginTop:"100px"},children:(0,n.jsx)(ed(),{alt:"Stellenbeschreibungen mit K.I. erstellen",src:"/hiredrive.png",width:250,height:250})})}var ef=r(2437),em=r.n(ef);let ep=e=>{let{color:t="#000",style:r="small"}=e;return(0,n.jsxs)("span",{className:"small"==r?em().loading2:em().loading,children:[(0,n.jsx)("span",{style:{backgroundColor:t}}),(0,n.jsx)("span",{style:{backgroundColor:t}}),(0,n.jsx)("span",{style:{backgroundColor:t}})]})};ep.defaultProps={style:"small"};let eg=()=>{let[e,t]=(0,c.useState)(!1),[r,i]=(0,c.useState)(""),[a,s]=(0,c.useState)(""),o=(0,c.useRef)(null),d=()=>{null!==o.current&&o.current.scrollIntoView({behavior:"smooth"})},u="Erstelle eine Stellenbeschreibung f\xfcr eine Stellenanzeige mit circa 200 W\xf6rtern, f\xfcr eine vakante Stelle als ".concat(r),f=async e=>{e.preventDefault(),s(""),t(!0);let r=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:u})});if(!r.ok)throw Error(r.statusText);let i=r.body;if(!i)return;let a=i.getReader(),n=new TextDecoder,o=!1;for(;!o;){let{value:l,done:c}=await a.read();o=c;let f=n.decode(l);s(e=>e+f)}d(),t(!1)};return(0,n.jsxs)("div",{className:"flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen",children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Stellenbeschreibungen mit K.I. erzeugen"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(eu,{}),(0,n.jsxs)("main",{className:"flex flex-1 w-full flex-col align-top items-center text-center p-4",children:[(0,n.jsxs)("div",{className:"max-w-xl w-full",children:[(0,n.jsx)("div",{className:"flex mt-10 items-center space-x-3",children:(0,n.jsxs)("p",{className:"text-center font-bold",children:["F\xfcr welchen Beruf in welcher Branche m\xf6chten Sie eine Stellenbeschreibung erzeugen?"," ",(0,n.jsxs)("span",{className:"text-slate-400",children:[(0,n.jsx)("br",{}),"(Geben Sie eine Berufsbezeichnung und Branche/T\xe4tigkeitsfeld ein)"]})]})}),(0,n.jsx)("textarea",{value:r,onChange:e=>i(e.target.value),rows:4,className:"w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5",placeholder:"z.B. Feinwerkmechanikerin in der Uhrenherstellung, Testingenieur in der Automobilindustrie, ..."}),!e&&(0,n.jsx)("button",{className:"bg-rose-900 rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-rose-900/60 w-full",onClick:e=>f(e),children:"Stellenbeschreibung generieren →"}),e&&(0,n.jsx)("button",{className:"bg-rose-900 rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-rose-900/60 w-full",disabled:!0,children:(0,n.jsx)(ep,{color:"white",style:"large"})})]}),(0,n.jsx)(eo,{position:"top-center",reverseOrder:!1,toastOptions:{duration:2e3}}),(0,n.jsx)("hr",{className:"h-px bg-gray-700 border-1 dark:bg-gray-700"}),(0,n.jsx)("div",{className:"space-y-10 my-10",children:a&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"whitespace-pre-wrap space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto",children:a.substring(19).split("").map(e=>(0,n.jsx)("div",{className:"bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border",onClick:()=>{navigator.clipboard.writeText(e),F("In Zwischenablage kopiert",{icon:"✂️"})},children:e.trim()},e))})})})]}),(0,n.jsx)(el,{})]})};var eh=eg},2437:function(e){e.exports={loading:"loading-dots_loading__LomzL",spacer:"loading-dots_spacer__nBBvk",blink:"loading-dots_blink__yy72w",loading2:"loading-dots_loading2___zCAu"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);