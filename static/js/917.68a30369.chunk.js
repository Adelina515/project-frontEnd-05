"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[917],{1112:function(e,s,t){t.d(s,{Z:function(){return a}});var r="title-page_titlePage__ZBar5",c=t(184),a=function(e){var s=e.children;return(0,c.jsx)("h2",{className:r,children:s})}},5917:function(e,s,t){t.r(s),t.d(s,{default:function(){return L}});var r=t(9439),c="products_container__k8-Qx",a="products_wrapper__dIgK4",n=t(1112),l=t(4942),o=t(1413),d="ProductsFilters_filters__z4dz4",i="ProductsFilters_search__woo7r",u="ProductsFilters_input__fjAQm",_="ProductsFilters_svgSearchClose__1z2l4",m="ProductsFilters_svgSearch__1owZG",h="ProductsFilters_arrowCat__4HYoZ",p="ProductsFilters_arrowRec__C3G7R",x="ProductsFilters_categories__S10h+",j="ProductsFilters_filterListWrapper__KZ0fq",v="ProductsFilters_filterList__WzNBS",g="ProductsFilters_recommended__ckk4J",N="ProductsFilters_recommendedList__sflg6",f="ProductsFilters_filterLabel__hiLwC",C="ProductsFilters_filterItem__kbeJy",P=t(4865),k=t(2791),I=t(184),Z=["alcoholic drinks","berries","cereals","dairy","dried fruits","eggs","fish","flour","fruits","meat","mushrooms","nuts","oils and fats","poppy","sausage","seeds","sesame","soft drinks","vegetables and herbs"],y={search:"",category:"",recommended:""},w={category:!1,recommended:!1},F=function(){var e=(0,k.useState)(""),s=(0,r.Z)(e,2),t=s[0],c=s[1],a=(0,k.useState)(y),n=(0,r.Z)(a,2),F=n[0],W=n[1],b=(0,k.useState)(w),B=(0,r.Z)(b,2),S=B[0],M=B[1],T=function(e){var s=e.currentTarget.dataset.type;M((function(e){return(0,o.Z)((0,o.Z)({},w),{},(0,l.Z)({},s,!e[s]))}))},L=function(e){if("LI"===e.target.nodeName){var s=e.currentTarget.dataset.type;W((0,o.Z)((0,o.Z)({},F),{},(0,l.Z)({},s,e.target.textContent))),M(w)}};return(0,I.jsxs)("div",{className:d,children:[(0,I.jsxs)("div",{className:i,children:[(0,I.jsx)("svg",{className:m,children:(0,I.jsx)("use",{href:"".concat(P.Z,"#icon-search")})}),(0,I.jsx)("input",{className:u,type:"text",placeholder:"Search",id:"productsSearch",onChange:function(e){console.log(e.target.value),c(e.target.value)},value:t}),(0,I.jsx)("svg",{className:_,onClick:function(){c("")},children:(0,I.jsx)("use",{href:"".concat(P.Z,"#icon-close-in-search")})})]}),(0,I.jsxs)("div",{className:x,children:[(0,I.jsx)("p",{className:f,onClick:T,"data-type":"category",children:""===F.category?"Categories":F.category}),(0,I.jsx)("svg",{className:"".concat(m," ").concat(S.category?h:""),children:(0,I.jsx)("use",{href:"".concat(P.Z,"#icon-arrow-down")})}),S.category&&(0,I.jsx)("div",{className:j,children:(0,I.jsx)("ul",{className:v,onClick:L,"data-type":"category",children:Z.map((function(e,s){return(0,I.jsx)("li",{className:C,children:e},s)}))})})]}),(0,I.jsxs)("div",{className:g,children:[(0,I.jsx)("p",{className:f,onClick:T,"data-type":"recommended",children:""===F.recommended?"All":F.recommended}),(0,I.jsx)("svg",{className:"".concat(m," ").concat(S.recommended?p:""),children:(0,I.jsx)("use",{href:"".concat(P.Z,"#icon-arrow-down")})}),S.recommended&&(0,I.jsxs)("ul",{className:N,onClick:L,"data-type":"recommended",children:[(0,I.jsx)("li",{className:C,children:"All"}),(0,I.jsx)("li",{className:C,children:"Recommended"}),(0,I.jsx)("li",{className:C,children:"Not recommended"})]})]})]})},W="ProductsList_productsList__3HQgi",b={card:"ProductsItem_card__gjyRG",upperContent:"ProductsItem_upperContent__l27qW",dietWrapper:"ProductsItem_dietWrapper__Xyk2v",diet:"ProductsItem_diet__W066o",cardStatus:"ProductsItem_cardStatus__P-act",statusCircle:"ProductsItem_statusCircle__hjnsp",statusText:"ProductsItem_statusText__i1toM",statusBtn:"ProductsItem_statusBtn__MrhqO",svgBtn:"ProductsItem_svgBtn__KFoGl",titleWrapper:"ProductsItem_titleWrapper__IFVpr",title:"ProductsItem_title__1gcfl",svgWrapper:"ProductsItem_svgWrapper__kCnB1",lowerConten:"ProductsItem_lowerConten__M0k+d",svgTitle:"ProductsItem_svgTitle__GGUz7",cardInfo:"ProductsItem_cardInfo__7qxc7",amount:"ProductsItem_amount__oBuGW"},B=function(e){var s=e.openModal;return(0,I.jsxs)("li",{className:b.card,children:[(0,I.jsxs)("div",{className:b.upperContent,children:[(0,I.jsx)("div",{className:b.dietWrapper,children:(0,I.jsx)("p",{className:b.diet,children:"diet"})}),(0,I.jsxs)("div",{className:b.cardStatus,children:[(0,I.jsx)("svg",{className:b.statusCircle,children:(0,I.jsx)("use",{href:"".concat(P.Z,"#icon-circle-green")})}),(0,I.jsx)("p",{className:b.statusText,children:"Recommended"}),(0,I.jsxs)("button",{type:"button",className:b.statusBtn,onClick:s,children:["Add",(0,I.jsx)("svg",{className:b.svgBtn,children:(0,I.jsx)("use",{href:"".concat(P.Z,"#icon-next-arrow")})})]})]})]}),(0,I.jsxs)("div",{className:b.lowerContent,children:[(0,I.jsxs)("div",{className:b.titleWrapper,children:[(0,I.jsx)("div",{className:b.svgWrapper,children:(0,I.jsx)("svg",{className:b.svgTitle,children:(0,I.jsx)("use",{href:"".concat(P.Z,"#icon-runningMan")})})}),(0,I.jsx)("h3",{className:b.title,children:"Title Title Title Title"})]}),(0,I.jsxs)("div",{className:b.cardInfo,children:[(0,I.jsxs)("div",{children:["Calories: ",(0,I.jsx)("span",{className:b.amount,children:"81"})]}),(0,I.jsxs)("div",{children:["Category: ",(0,I.jsx)("span",{className:b.amount,children:"Cereals"})]}),(0,I.jsxs)("div",{children:["Weight: ",(0,I.jsx)("span",{className:b.amount,children:"100"})]})]})]})]})},S=function(e){var s=e.openModal;return(0,I.jsx)("ul",{className:W,children:(0,I.jsx)(B,{openModal:s})})},M={backdrop:"productsModal_backdrop__FIz48",modal:"productsModal_modal__iUaw8",modalCloseBtn:"productsModal_modalCloseBtn__rEEQj",svgclose:"productsModal_svgclose__3rN-o"},T=function(e){var s=e.isOpen,t=e.onClose;return s?(0,I.jsx)("div",{className:M.backdrop,children:(0,I.jsxs)("div",{className:M.modal,children:[(0,I.jsx)("button",{className:M.modalCloseBtn,type:"button",onClick:t,children:(0,I.jsx)("svg",{className:M.svgclose,children:(0,I.jsx)("use",{href:"".concat(P.Z,"#icon-close-modal")})})}),(0,I.jsx)("p",{className:M.text,children:"modal is under construction"})]})}):null},L=function(){var e=(0,k.useState)(!1),s=(0,r.Z)(e,2),t=s[0],l=s[1];return(0,I.jsxs)("div",{className:c,children:[(0,I.jsxs)("div",{className:a,children:[(0,I.jsx)(n.Z,{children:"Products",className:a}),(0,I.jsx)(F,{}),(0,I.jsx)(S,{openModal:function(){l(!0)}})]}),(0,I.jsx)(T,{isOpen:t,onClose:function(){l(!1)}})]})}}}]);
//# sourceMappingURL=917.68a30369.chunk.js.map