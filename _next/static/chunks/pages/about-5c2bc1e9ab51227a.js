(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(843)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=i(8754),n=i(1757),s=n._(i(7294)),o=r._(i(2636)),a=i(7757),l=i(3735),c=i(3341);i(4210);let d=r._(i(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function f(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,i,r,n,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function m(e){let[t,i]=s.version.split("."),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,s.forwardRef)((e,t)=>{let{imgAttributes:i,heightInt:r,widthInt:n,qualityInt:o,className:a,imgStyle:l,blurStyle:c,isLazy:d,fetchPriority:u,fill:h,placeholder:f,loading:p,srcString:x,config:v,unoptimized:b,loader:w,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:N,onLoad:E,onError:k,...C}=e;return p=d?"lazy":p,s.default.createElement("img",{...C,...m(u),loading:p,width:n,height:r,decoding:"async","data-nimg":h?"fill":"1",className:a,style:{...l,...c},...i,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&g(e,x,f,y,j,_,b))},[x,f,y,j,_,k,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,x,f,y,j,_,b)},onError:e=>{N(!0),"blur"===f&&_(!0),k&&k(e)}})}),x=(0,s.forwardRef)((e,t)=>{var i;let r,n,{src:g,sizes:x,unoptimized:v=!1,priority:b=!1,loading:w,className:y,quality:j,width:_,height:N,fill:E,style:k,onLoad:C,onLoadingComplete:S,placeholder:z="empty",blurDataURL:I,fetchPriority:P,layout:M,objectFit:O,objectPosition:R,lazyBoundary:F,lazyRoot:A,...B}=e,W=(0,s.useContext)(c.ImageConfigContext),$=(0,s.useMemo)(()=>{let e=u||W||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[W]),D=B.loader||d.default;delete B.loader;let T="__next_img_default"in D;if(T){if("custom"===$.loader)throw Error('Image with src "'+g+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:i,...r}=t;return e(r)}}if(M){"fill"===M&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(k={...k,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!x&&(x=t)}let J="",G=f(_),q=f(N);if("object"==typeof(i=g)&&(h(i)||void 0!==i.src)){let e=h(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,n=e.blurHeight,I=I||e.blurDataURL,J=e.src,!E){if(G||q){if(G&&!q){let t=G/e.width;q=Math.round(e.height*t)}else if(!G&&q){let t=q/e.height;G=Math.round(e.width*t)}}else G=e.width,q=e.height}}let V=!b&&("lazy"===w||void 0===w);(!(g="string"==typeof g?g:J)||g.startsWith("data:")||g.startsWith("blob:"))&&(v=!0,V=!1),$.unoptimized&&(v=!0),T&&g.endsWith(".svg")&&!$.dangerouslyAllowSVG&&(v=!0),b&&(P="high");let[H,L]=(0,s.useState)(!1),[U,X]=(0,s.useState)(!1),Y=f(j),Z=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:R}:{},U?{}:{color:"transparent"},k),K="blur"===z&&I&&!H?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:G,heightInt:q,blurWidth:r,blurHeight:n,blurDataURL:I,objectFit:Z.objectFit})+'")'}:{},Q=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:s,sizes:o,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:s,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:i,quality:s,width:l[d]})}}({config:$,src:g,unoptimized:v,width:G,quality:Y,sizes:x,loader:D}),ee=g,et=(0,s.useRef)(C);(0,s.useEffect)(()=>{et.current=C},[C]);let ei=(0,s.useRef)(S);(0,s.useEffect)(()=>{ei.current=S},[S]);let er={isLazy:V,imgAttributes:Q,heightInt:q,widthInt:G,qualityInt:Y,className:y,imgStyle:Z,blurStyle:K,loading:w,config:$,fetchPriority:P,fill:E,unoptimized:v,placeholder:z,loader:D,srcString:ee,onLoadRef:et,onLoadingCompleteRef:ei,setBlurComplete:L,setShowAltText:X,...B};return s.default.createElement(s.default.Fragment,null,s.default.createElement(p,{...er,ref:t}),b?s.default.createElement(o.default,null,s.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:B.crossOrigin,...m(P)})):null)}),v=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=r||t,l=n||i,c=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&n?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+s+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},971:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var r=i(5893),n=i(1664),s=i.n(n);function o(){return(0,r.jsx)("div",{className:" font-poppins bg-black py-4",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,r.jsx)("div",{className:"flex-shrink-0",children:(0,r.jsx)(s(),{className:"text-white font-bold text-xl",legacyBehavior:!0,href:"/",children:(0,r.jsx)("a",{className:"text-white font-bold text-xl",children:"Jack Meltzer"})})}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[(0,r.jsx)(s(),{legacyBehavior:!0,href:"/production",children:(0,r.jsx)("a",{className:" text-white hover:text-white px-3 py-2 rounded-xl text-sm bg-[$color-text] hover:bg-[url(https://cldup.com/gn3s3Fg75t.gif)] text-[$color-text]",children:"Work"})}),(0,r.jsx)(s(),{legacyBehavior:!0,href:"/directing",children:(0,r.jsx)("a",{className:"  text-white hover:text-white px-3 py-2 rounded-xl text-sm bg-[$color-text] hover:bg-[url(https://cldup.com/gn3s3Fg75t.gif)] text-[$color-text]",children:"Personal"})}),(0,r.jsx)(s(),{legacyBehavior:!0,href:"/about",children:(0,r.jsx)("a",{className:"rounded-xl text-white hover:text-white px-3 py-2 text-sm bg-[$color-text] hover:bg-[url(https://cldup.com/gn3s3Fg75t.gif)] text-[$color-text]",children:"About"})}),(0,r.jsx)(s(),{legacyBehavior:!0,href:"/contact",children:(0,r.jsx)("a",{className:" text-white hover:text-white px-3 py-2 rounded-xl text-sm bg-[$color-text] hover:bg-[url(https://cldup.com/gn3s3Fg75t.gif)] text-[$color-text]",children:"Contact"})})]})})]})})})}},843:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var r=i(5893),n=i(971),s=i(5675),o=i.n(s);function a(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{}),(0,r.jsxs)("div",{className:"bg-black h-screen flex flex-col items-center",children:[(0,r.jsx)(o(),{src:"/jack.jpeg",width:400,height:400,alt:"Picture of Jack Meltzer",className:"rounded-lg mb-4"}),(0,r.jsxs)("div",{className:"text-center text-white border border-white p-4 rounded-md",children:[(0,r.jsx)("h1",{className:"text-3xl mb-6",children:"About Me"}),(0,r.jsxs)("div",{className:"p-10",children:[(0,r.jsx)("p",{className:"text-sm mb-4",children:"Hello, I'm Jack Meltzer, a passionate and creative production designer with a keen eye for detail and a love for storytelling through visual elements. Over the years, I have had the privilege of contributing my skills to a diverse range of projects, bringing visions to life through art direction, set design, and prop styling."}),(0,r.jsx)("p",{className:"text-sm mb-4",children:"My journey in the world of production design began with a fascination for creating immersive environments that enhance the narrative of a film or a production. From meticulously crafting period-specific sets to conceptualizing futuristic designs, I thrive on the challenge of transforming ideas into visually stunning realities."}),(0,r.jsx)("p",{className:"text-sm mb-4",children:"With a background in fine arts and a deep understanding of cinematic aesthetics, I bring a unique blend of creativity and technical expertise to every project. Collaborating closely with directors, cinematographers, and the entire production team, I ensure that the visual elements seamlessly align with the overall storytelling goals."}),(0,r.jsx)("p",{className:"text-sm mb-4",children:"Whether it's creating the atmosphere of a historical drama, the futuristic landscapes of a sci-fi epic, or the cozy interiors of a character's home, I approach each project with dedication and a commitment to delivering visuals that captivate audiences and elevate the overall production value."}),(0,r.jsx)("p",{className:"text-sm",children:"When I'm not immersed in the world of production design, you can find me exploring art galleries, seeking inspiration from different cultures, and staying updated on the latest trends in design and cinematography. I look forward to bringing my passion and expertise to future projects and continuing to contribute to the magic of storytelling through the art of production design."})]})]})]})]})}},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=512)}),_N_E=e.O()}]);