(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1907],{yXPU:e=>{function t(e,t,n,r,a,i,o){try{var u=e[i](o),d=u.value}catch(e){return void n(e)}u.done?t(d):Promise.resolve(d).then(r,a)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(a,i){var o=e.apply(n,r);function u(e){t(o,a,i,u,d,"next",e)}function d(e){t(o,a,i,u,d,"throw",e)}u(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},"6rry":(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r,a=n("RlfA"),i=n("q1tI"),o=n("TRpf"),u=n("17x9"),d=n.n(u),s=n("vOnD"),l=n("lXQd"),c=n("j399"),f=n("HMsx"),p=n("T9qK"),g=n("P62M"),v=n("Mifg"),h=function(e,t,n){return[{key:v.O6.SIGNIN,src:"",activePages:[],title:n.LOGIN_TITLE||v.O6.SIGNIN,fnOnClick:e},{key:v.O6.SIGNUP,src:"",activePages:[],title:n.SIGNUP_TITLE||v.O6.SIGNUP,fnOnClick:t}]},m=function(e,t){return[{key:v.O6.ADDRESTAURANT,src:"",activePages:[],title:e||v.O6.ADDRESTAURANT,fnOnClick:t}]},b=function(e){var t=e.handleSignin,n=e.handleSignup,r=e.locale,a=e.currentPageSubType,o=e.breadcrumbs,u=e.transparentPages,d=e.showZomatoLogo,s=e.showAddRestaurant,l=e.addRestaurantText,c=e.handleAddRestaurantClick,f=function(e,t){var n="restaurant"===t?2:3,r=e[e.length-n]||{},a=r.url,i=void 0===a?"":a,o=r.title;return{text:void 0===o?"":o,link:i}}(o,a);return i.createElement(y,null,i.createElement(p.Z,{transparentPages:u,navbarLinks:h(t,n,r),addRestaurantNavLink:m(l,c),showAddRestaurant:s,backToSearchPageDetails:f,showZomatoLogo:d}))},y=s.default.div(r||(r=(0,a.Z)(["\n  box-shadow: inset 0px -0.5px 0px ",";\n"])),f.default.z200);b.propTypes={handleSignin:d().func,handleSignup:d().func,locale:d().objectOf(d().string),breadcrumbs:d().arrayOf(d().object),currentPageSubType:d().string,transparentPages:d().arrayOf(d().string),showZomatoLogo:d().bool,showAddRestaurant:d().bool,addRestaurantText:d().string,handleAddRestaurantClick:d().func},b.defaultProps={handleSignin:c.default,handleSignup:c.default,locale:{},breadcrumbs:[],currentPageSubType:"",transparentPages:[],showZomatoLogo:!0,showAddRestaurant:!1,addRestaurantText:"",handleAddRestaurantClick:c.default};const w=(0,o.$j)((function(e){var t=(0,l.default)(e,"pages.current.resId",0);return{breadcrumbs:(0,l.default)(e,"pages.restaurant.".concat(t,".sections.SECTION_BREADCRUMBS"),[]),currentPageSubType:(0,l.default)(e,"pages.current.subType",""),locale:(0,l.default)(e,"langKeys",{})}}),null)((0,i.memo)(b,g.Uh))},kdDk:(e,t,n)=>{"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("2qDD")).default;t.default=a},cjht:(e,t,n)=>{"use strict";var r=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("pVnL")),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),u=r(n("17x9")),d=r(n("vOnD")),s=r(n("j399"));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}var c=function e(t){var n=(0,o.useRef)(),r=t.handleClickOutside,a=t.removeHandler;return(0,o.useEffect)((function(){if("function"==typeof r&&!a){var e=function(e){n.current&&n.current.contains(e.target)||r(e)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}return s.default}),[r,a]),o.default.createElement(e.Wrapper,(0,i.default)({},t,{ref:n}),t.children)};c.Wrapper=d.default.div.withConfig({componentId:"sc-18n4g8v-0"})(["width:",";"],(function(e){return e.width?e.width:"max-content"})),c.propTypes={width:u.default.string,children:u.default.node,handleClickOutside:u.default.func.isRequired,removeHandler:u.default.bool},c.defaultProps={removeHandler:!1};var f=c;t.default=f},PQmA:(e,t,n)=>{"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("pVnL")),i=r(n("q1tI")),o=r(n("w/pp")),u=r(n("6jlT")),d=function(e){var t=(0,u.default)();return i.default.createElement(o.default,(0,a.default)({uniqueId:t},e),i.default.createElement("title",null,"chevron-down"),i.default.createElement("path",{d:"M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"}))};t.default=d},"30GX":(e,t,n)=>{"use strict";var r=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("o0o1")),o=r(n("yXPU")),u=r(n("J4zp")),d=v(n("q1tI")),s=v(n("vOnD")),l=r(n("17x9")),c=r(n("HMsx")),f=r(n("LSsp")),p=r(n("j399"));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var h=function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t()},r.src=e}))},m=function e(t){var r=t.src,a=void 0===r?"":r,s=t.base64,l=void 0===s?"":s,c=t.ratio,f=void 0===c?0:c,g=t.container,v=void 0===g?null:g,m=t.alt,y=void 0===m?"image":m,w=t.fit,k=void 0===w?"cover":w,O=t.doPreload,P=void 0!==O&&O,T=t.height,_=void 0===T?"100%":T,I=t.width,L=void 0===I?"100%":I,S=t.className,C=void 0===S?"":S,R=t.onClick,j=void 0===R?p.default:R,D=(t.srcSet,t.fallBack),E=void 0===D?"https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70":D,x=t.isBackground,A=void 0!==x&&x,M=(t.bgGradient,t.customZimageComponent),N=void 0===M?null:M,q=t.loadingComponent,z=void 0===q?null:q,G=t.blurred,H=void 0===G?"":G,U=t.noTransform,W=void 0!==U&&U,B=t.clickable,Z=void 0!==B&&B,K=(0,d.useRef)(),X=(0,d.useState)(""),Q=(0,u.default)(X,2),V=Q[0],F=Q[1],J=(0,d.useState)(!1),$=(0,u.default)(J,2),Y=$[0],ee=$[1],te=(0,d.useState)(!1),ne=(0,u.default)(te,2),re=(ne[0],ne[1]),ae=function(){H&&oe(),ee(!0)},ie=function(){re(!0),V&&V!==E&&F(E)};(0,d.useEffect)((function(){if(A&&V){var e=new Image;e.onload=ae,e.onerror=ie,e.src=V}Y&&ee(!1)}),[V]),(0,d.useEffect)((function(){var e,t;if(!P&&"IntersectionObserver"in n.g){e=new IntersectionObserver((function(e){var t=(0,u.default)(e,1)[0].isIntersecting;void 0!==t&&t&&V!==a&&F(a)}),{root:v,threshold:f}),(t=K.current)&&e.observe(t)}else F(a);return function(){void 0!==e&&e.unobserve&&t&&e.unobserve(t)}}),[a]);var oe=function(){var e=(0,o.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(V);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=A?N||e.BgDiv:e.img,de=l?e.base64:z||e.Shimmer;return d.default.createElement(e.Container,{ref:K,height:_,width:L,className:C,onClick:j},H?d.default.createElement(b,{imgHeight:_,imgWidth:L,url:H,fit:k}):d.default.createElement(de,{isLoaded:!!V&&Y,src:l}),d.default.createElement(ue,{alt:y,src:V,isLoaded:!!V&&Y,onLoad:ae,loading:P?"auto":"lazy",fit:k,onError:ie,noTransform:W||!!H,blurred:!!H,clickable:!!Z}))};m.propTypes={src:l.default.string,base64:l.default.string,ratio:l.default.number,container:l.default.node,alt:l.default.string.isRequired,fit:l.default.oneOf(["cover","contain","fill","inherit","initial","none","scale-down","unset"]),doPreload:l.default.bool,height:l.default.string,width:l.default.string,maxHeight:l.default.string,className:l.default.string,onClick:l.default.func,fallBack:l.default.string,isBackground:l.default.bool,bgGradient:l.default.string,customZimageComponent:l.default.oneOfType([l.default.string,l.default.func]),loadingComponent:l.default.oneOfType([l.default.string,l.default.func]),noTransform:l.default.bool,blurred:l.default.string};var b=s.default.div.withConfig({componentId:"sc-s1isp7-0"})(["position:absolute;top:0;background-image:url(",");width:",";height:",";background-size:",";filter:blur(10px);"],(function(e){return e.url}),(function(e){return e.imgWidth}),(function(e){return e.imgHeight}),(function(e){return"none"===e.fit?"".concat(e.imgWidth," ").concat(e.imgHeight||"auto"):e.fit}));m.Container=s.default.div.withConfig({componentId:"sc-s1isp7-1"})(["position:relative;max-width:100%;width:",";height:",";overflow:hidden;"],(function(e){return e.width}),(function(e){return e.height?e.height:"auto"}));var y=(0,s.keyframes)(["0%{background-position:-80vw 0;}100%{background-position:80vw 0;}"]);m.base64=s.default.img.withConfig({componentId:"sc-s1isp7-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;opacity:",";will-change:transform,opacity;border-radius:inherit;transition:opacity 0.25s ease-in;"],(function(e){return e.isLoaded?0:1})),m.Shimmer=s.default.div.withConfig({componentId:"sc-s1isp7-3"})(["width:100%;position:absolute;top:0;left:0;height:100%;background:",";background-image:linear-gradient( to right,"," 0%,"," 10%,"," 40%,"," 100% );background-repeat:no-repeat;opacity:",";transition:opacity 0.25s ease-out;will-change:opacity;border-radius:inherit;animation:"," 1.5s infinite linear forwards;"],c.default.z95,c.default.z95,f.default,c.default.z95,c.default.z95,(function(e){return e.isLoaded?0:1}),y),m.BgDiv=s.default.div.withConfig({componentId:"sc-s1isp7-4"})(["width:100%;height:100%;transform:",";opacity:",";will-change:transform,opacity;border-radius:inherit;transition:opacity 0.25s ease,transform 0.25s ease;background-size:",";background-position:center center;background-repeat:no-repeat;background-image:",";"],(function(e){return e.isLoaded||e.noTransform?"none":"scale(0.9)"}),(function(e){return e.isLoaded?1:0}),(function(e){return e.fit||"cover"}),(function(e){return e.url&&(e.bgGradient?"".concat(e.bgGradient,",url(").concat(e.url,")"):"url(".concat(e.url,")"))}));m.img=s.default.img.withConfig({componentId:"sc-s1isp7-5"})(["width:100%;height:100%;object-fit:",";transform:",";opacity:",";will-change:transform,opacity;border-radius:inherit;filter:",";transition:",";:hover{transform:",";filter:",";}img:not([src]):not([srcset]){visibility:hidden;}@-moz-document url-prefix(){img:-moz-loading{visibility:hidden;}}"],(function(e){return e.fit}),(function(e){return e.isLoaded||e.noTransform?"none":"scale(0.9)"}),(function(e){return e.isLoaded?1:0}),(function(e){return e.clickable?"brightness(0.95)":"unset"}),(function(e){var t=e.clickable,n=e.blurred;return t&&n?"transform 0.4s ease-in-out, opacity 1.63s ease, filter 0.4s ease":t?"transform 0.4s ease-in-out, filter 0.4s ease, opacity 0.25s ease":n?"opacity 1.63s ease, transform 0.25s ease":"opacity 0.25s ease, transform 0.25s ease"}),(function(e){return e.clickable?"scale(1.05)":""}),(function(e){return e.clickable?"brightness(1.05)":""}));var w=m;t.default=w},lFeK:(e,t,n)=>{"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("30GX")).default;t.default=a}}]);