"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[594],{1112:function(e,t,r){r.d(t,{Z:function(){return a}});var n="title-page_titlePage__ZBar5",s=r(184),a=function(e){var t=e.children;return(0,s.jsx)("h2",{className:n,children:t})}},8178:function(e,t){t.Z=function(e){var t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return"".concat(n,"-").concat(r,"-").concat(t)}},6594:function(e,t,r){r.r(t),r.d(t,{default:function(){return be}});var n=r(9439),s="products_wrapper__dIgK4",a="products_productsPage__NqW3z",o=r(1112),c=r(5861),i=r(4942),l=r(1413),d=r(7757),u=r.n(d),_="ProductsFilters_filters__z4dz4",m="ProductsFilters_text__ZAjtR",h="ProductsFilters_search__woo7r",p="ProductsFilters_input__fjAQm",f="ProductsFilters_svgSearchClose__1z2l4",v="ProductsFilters_svgSearch__1owZG",g="ProductsFilters_arrowCat__4HYoZ",x="ProductsFilters_arrowRec__C3G7R",j="ProductsFilters_categories__S10h+",N="ProductsFilters_filterListWrapper__KZ0fq",y="ProductsFilters_filterList__WzNBS",w="ProductsFilters_recommended__ckk4J",C="ProductsFilters_recommendedList__sflg6",P="ProductsFilters_filterLabel__hiLwC",b="ProductsFilters_filterItem__kbeJy",I=r(4865),Z=r(2791),k=r(1617),F=r(4420),S=function(e){return e.products.products.items},W=function(e){return e.products.products.error},A=function(e){return e.products.filter},M=r(6080),R=r(184),V={category:!1,allowed:!1},B=function(){var e=(0,F.I0)(),t=(0,Z.useState)(null),r=(0,n.Z)(t,2),s=r[0],a=r[1],o=(0,Z.useState)(""),d=(0,n.Z)(o,2),S=d[0],W=d[1],B=(0,Z.useState)(V),E=(0,n.Z)(B,2),O=E[0],T=E[1],L=(0,F.v9)(A),z=function(e){var t=e.currentTarget.dataset.type;T((function(e){return(0,l.Z)((0,l.Z)({},V),{},(0,i.Z)({},t,!e[t]))}))},G=function(t){if("LI"===t.target.nodeName){var r,n=t.currentTarget.dataset.type;r="Recommended"===t.target.textContent?"yes":"Not recommended"===t.target.textContent?"no":t.target.textContent;var s=(0,l.Z)((0,l.Z)({},L),{},(0,i.Z)({},n,r));e((0,M.K)(s)),e((0,k.t)(s)),T(V)}};return(0,Z.useEffect)((function(){var e=function(){var e=(0,c.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.p)();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,R.jsxs)("div",{className:_,children:[(0,R.jsx)("p",{className:m,children:"Filters"}),(0,R.jsxs)("div",{className:h,children:[(0,R.jsx)("svg",{className:v,children:(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-search")})}),(0,R.jsx)("input",{className:p,type:"text",placeholder:"Search",id:"productsSearch",onChange:function(t){console.log(t.target.value),W(t.target.value);var r=(0,l.Z)((0,l.Z)({},L),{},{searchQuery:t.target.value});e((0,M.K)(r)),e((0,k.t)(r))},value:S}),(0,R.jsx)("svg",{className:f,onClick:function(){W("")},children:(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-close-in-search")})})]}),(0,R.jsxs)("div",{className:j,children:[(0,R.jsx)("p",{className:P,onClick:z,"data-type":"category",children:""===L.category?"Categories":L.category}),(0,R.jsx)("svg",{className:"".concat(v," ").concat(O.category?g:""),children:(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-arrow-down")})}),O.category&&(0,R.jsx)("div",{className:N,children:(0,R.jsx)("ul",{className:y,onClick:G,"data-type":"category",children:s.map((function(e,t){return(0,R.jsx)("li",{className:b,children:e},t)}))})})]}),(0,R.jsxs)("div",{className:w,children:[(0,R.jsxs)("p",{className:P,onClick:z,"data-type":"allowed",children:["All"===L.allowed&&"All","yes"===L.allowed&&"Recommended","no"===L.allowed&&"Not recommended"]}),(0,R.jsx)("svg",{className:"".concat(v," ").concat(O.allowed?x:""),children:(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-arrow-down")})}),O.allowed&&(0,R.jsxs)("ul",{className:C,onClick:G,"data-type":"allowed",children:[(0,R.jsx)("li",{className:b,children:"All"}),(0,R.jsx)("li",{className:b,children:"Recommended"}),(0,R.jsx)("li",{className:b,children:"Not recommended"})]})]})]})},E="ProductsList_productsList__3HQgi",O={card:"ProductsItem_card__gjyRG",upperContent:"ProductsItem_upperContent__l27qW",dietWrapper:"ProductsItem_dietWrapper__Xyk2v",diet:"ProductsItem_diet__W066o",cardStatus:"ProductsItem_cardStatus__P-act",statusCircle:"ProductsItem_statusCircle__hjnsp",statusText:"ProductsItem_statusText__i1toM",statusBtn:"ProductsItem_statusBtn__MrhqO",svgBtn:"ProductsItem_svgBtn__KFoGl",titleWrapper:"ProductsItem_titleWrapper__IFVpr",title:"ProductsItem_title__1gcfl",svgWrapper:"ProductsItem_svgWrapper__kCnB1",lowerConten:"ProductsItem_lowerConten__M0k+d",svgTitle:"ProductsItem_svgTitle__GGUz7",cardInfo:"ProductsItem_cardInfo__7qxc7",infoContent:"ProductsItem_infoContent__RQ2VM",amount:"ProductsItem_amount__oBuGW"},T=r(4925),L=r(5671),z=r(3144),G=r(7326),Y=r(136),q=r(3668),K=["as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"],D=Object.defineProperty,Q=function(e,t,r){return function(e,t,r){t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r}(e,"symbol"!==typeof t?t+"":t,r),r},U=new Map,J=new WeakMap,X=0,H=void 0;function $(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(r=e.root)?(J.has(r)||(X+=1,J.set(r,X.toString())),J.get(r)):"0":e[t]);var r})).toString()}function ee(e){var t=$(e),r=U.get(t);if(!r){var n,s=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var r,a=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(r=s.get(t.target))||r.forEach((function(e){e(a,t)}))}))}),e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:s},U.set(t,r)}return r}function te(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:H;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){var s=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),function(){}}var a=ee(r),o=a.id,c=a.observer,i=a.elements,l=i.get(e)||[];return i.has(e)||i.set(e,l),l.push(t),c.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(i.delete(e),c.unobserve(e)),0===i.size&&(c.disconnect(),U.delete(o))}}Z.Component;var re=function(e){var t=e.data,r=e.openModal,s=(0,F.v9)((function(e){return e.profile.blood})),a=t.calories,o=t.category,c=t.title,i=t.weight,l=t.groupBloodNotAllowed,d=c[0].toUpperCase()+c.slice(1).toLowerCase(),u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.threshold,s=t.delay,a=t.trackVisibility,o=t.rootMargin,c=t.root,i=t.triggerOnce,l=t.skip,d=t.initialInView,u=t.fallbackInView,_=t.onChange,m=Z.useState(null),h=(0,n.Z)(m,2),p=h[0],f=h[1],v=Z.useRef(),g=Z.useState({inView:!!d,entry:void 0}),x=(0,n.Z)(g,2),j=x[0],N=x[1];v.current=_,Z.useEffect((function(){var e;if(!l&&p)return e=te(p,(function(t,r){N({inView:t,entry:r}),v.current&&v.current(t,r),r.isIntersecting&&i&&e&&(e(),e=void 0)}),{root:c,rootMargin:o,threshold:r,trackVisibility:a,delay:s},u),function(){e&&e()}}),[Array.isArray(r)?r.toString():r,p,c,o,i,l,a,u,s]);var y=null==(e=j.entry)?void 0:e.target,w=Z.useRef();p||!y||i||l||w.current===y||(w.current=y,N({inView:!!d,entry:void 0}));var C=[f,j.inView,j.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}({threshold:.5,triggerOnce:!0}),_=u.ref,m=u.inView;return(0,R.jsx)("li",{className:O.card,ref:_,children:m&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{className:O.upperContent,children:[(0,R.jsx)("div",{className:O.dietWrapper,children:(0,R.jsx)("p",{className:O.diet,children:"diet"})}),(0,R.jsxs)("div",{className:O.cardStatus,children:[(0,R.jsx)("svg",{className:O.statusCircle,children:l[s]?(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-circle-green")}):(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-circle-red")})}),(0,R.jsx)("p",{className:O.statusText,children:l[s]?"Recommended":"Not recommended"}),(0,R.jsxs)("button",{type:"button",className:O.statusBtn,onClick:function(){return r(t)},children:["Add",(0,R.jsx)("svg",{className:O.svgBtn,children:(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-next-arrow")})})]})]})]}),(0,R.jsxs)("div",{className:O.lowerContent,children:[(0,R.jsxs)("div",{className:O.titleWrapper,children:[(0,R.jsx)("div",{className:O.svgWrapper,children:(0,R.jsx)("svg",{className:O.svgTitle,children:(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-runningMan")})})}),(0,R.jsx)("h3",{className:O.title,children:d})]}),(0,R.jsxs)("div",{className:O.cardInfo,children:[(0,R.jsxs)("div",{className:O.infoContent,children:["Calories: ",(0,R.jsx)("span",{className:O.amount,children:a})]}),(0,R.jsxs)("div",{className:O.infoContent,children:["Category: ",(0,R.jsx)("span",{className:O.amount,children:o})]}),(0,R.jsxs)("div",{className:O.infoContent,children:["Weight: ",(0,R.jsx)("span",{className:O.amount,children:i})]})]})]})]})})},ne="ProduxError_errorWrapper__pgxZp",se="ProduxError_errorText__jdsbz",ae="ProduxError_textAccent__fjY4Z",oe=function(){return(0,R.jsxs)("div",{className:ne,children:[(0,R.jsxs)("p",{className:se,children:[(0,R.jsx)("span",{className:ae,children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),(0,R.jsx)("p",{className:"".concat(se," ").concat(ae),children:"Try changing the search parameters."})]})},ce=function(e){var t=e.openModal,r=(0,F.I0)(),n=(0,F.v9)(S),s=(0,F.v9)(W);return(0,Z.useEffect)((function(){r((0,k.t)())}),[r]),(0,R.jsx)(R.Fragment,{children:s?(0,R.jsx)(oe,{}):(0,R.jsx)("ul",{className:E,children:n&&n.map((function(e){return(0,R.jsx)(re,{data:e,openModal:t},e._id)}))})})},ie="Container_mainContainer__5G8IR",le=function(e){var t=e.children;return(0,R.jsx)("div",{className:ie,children:t})},de="AddProductForm_form__fgIYO",ue="AddProductForm_input__2UVf4",_e="AddProductForm_inputWrapper__oYjIF",me="AddProductForm_grams__vl4F6",he="AddProductForm_count__3dYxF",pe="AddProductForm_calories__Z5sww",fe="AddProductForm_btnWrapper__P5TXq",ve="AddProductForm_btnAdd__aEYNT",ge="AddProductForm_btnCansel__JEaU9",xe=r(8178),je=function(e){var t=e.data,r=(0,Z.useState)(0),s=(0,n.Z)(r,2),a=s[0],o=s[1],c=t.calories,i=t.title,l=t._id,d=a*c/100;return(0,R.jsxs)("form",{className:de,onSubmit:function(e){e.preventDefault();var t=new Date,r=(0,xe.Z)(t),n={productID:l,date:r,grams:Number(e.target.elements.amount.value),calories:d};console.log(n)},children:[(0,R.jsx)("input",{type:"text",className:ue,value:i,name:"title",disabled:!0}),(0,R.jsxs)("div",{className:_e,children:[(0,R.jsx)("input",{type:"number",className:"".concat(ue," ").concat(he),onChange:function(e){o(e.target.value)},name:"amount",required:!0}),(0,R.jsx)("p",{className:me,children:"grams"})]}),(0,R.jsxs)("p",{className:pe,children:["Calories: ",(0,R.jsx)("span",{className:he,children:Math.floor(d)})]}),(0,R.jsxs)("div",{className:fe,children:[(0,R.jsx)("button",{type:"submit",className:ve,children:"Add to diary"}),(0,R.jsx)("button",{type:"button",className:ge,children:"Cancel"})]})]})},Ne="BasicModalWindow_backdrop__S-RX6",ye="BasicModalWindow_modal__bxnFf",we="BasicModalWindow_modalCloseBtn__PzRfu",Ce="BasicModalWindow_svgclose__hfpF1",Pe=function(e){var t=e.isOpen,r=e.onClose,n=e.children;if(!t)return null;t&&document.addEventListener("keydown",(function e(t){if("Escape"===t.code)return console.log("Escape"),r(),document.removeEventListener("keydown",e)}));var s=function(e){"backdrop"!==e.target.dataset.type&&"close-modal"!==e.target.dataset.type||r()};return(0,R.jsx)("div",{className:Ne,onClick:s,"data-type":"backdrop",children:(0,R.jsxs)("div",{className:ye,children:[(0,R.jsx)("button",{className:we,type:"button",onClick:s,"data-type":"close-modal",children:(0,R.jsx)("svg",{className:Ce,children:(0,R.jsx)("use",{href:"".concat(I.Z,"#icon-close-modal")})})}),n]})})},be=function(){var e=(0,Z.useState)(!1),t=(0,n.Z)(e,2),r=t[0],c=t[1],i=(0,Z.useState)(null),l=(0,n.Z)(i,2),d=l[0],u=l[1];return(0,R.jsxs)("div",{className:a,children:[(0,R.jsx)(le,{children:(0,R.jsxs)("div",{className:s,children:[(0,R.jsx)(o.Z,{children:"Products",className:s}),(0,R.jsx)(B,{}),(0,R.jsx)(ce,{openModal:function(e){c(!0),u(e)}})]})}),(0,R.jsx)(Pe,{isOpen:r,onClose:function(e){c(!1)},data:d,children:(0,R.jsx)(je,{data:d})})]})}}}]);
//# sourceMappingURL=594.7c940129.chunk.js.map