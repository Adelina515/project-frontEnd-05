"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[468],{1112:function(e,t,s){s.d(t,{Z:function(){return r}});var a="title-page_titlePage__ZBar5",n=s(184),r=function(e){var t=e.children;return(0,n.jsx)("h2",{className:a,children:t})}},8178:function(e,t){t.Z=function(e){var t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return"".concat(a,"-").concat(s,"-").concat(t)}},8181:function(e,t,s){s.d(t,{m:function(){return l}});var a=s(4865),n="BasicModalWindow_backdrop__S-RX6",r="BasicModalWindow_modal__bxnFf",i="BasicModalWindow_modalCloseBtn__PzRfu",c="BasicModalWindow_svgclose__hfpF1",o=s(184),l=function(e){var t=e.isOpen,s=e.onClose,l=e.children;if(!t)return null;t&&document.addEventListener("keydown",(function e(t){if("Escape"===t.code)return console.log("Escape"),s(),document.removeEventListener("keydown",e)}));var d=function(e){"backdrop"!==e.target.dataset.type&&"close-modal"!==e.target.dataset.type||s()};return(0,o.jsx)("div",{className:n,onClick:d,"data-type":"backdrop",children:(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("button",{className:i,type:"button",onClick:d,"data-type":"close-modal",children:(0,o.jsx)("svg",{className:c,children:(0,o.jsx)("use",{href:"".concat(a.Z,"#icon-close-modal")})})}),l]})})}},3468:function(e,t,s){s.r(t),s.d(t,{default:function(){return Z}});var a=s(9439),n=s(2791),r=s(1112),i={exerciseCategoryContainer:"Exercises_exerciseCategoryContainer__cXTxL",activeCat:"Exercises_activeCat__C0nC+",cat:"Exercises_cat__15D9M",arrCont:"Exercises_arrCont__gAKAe",arrElCont:"Exercises_arrElCont__YWwZx"},c=s(184);var o=function(e){var t=e.exCat,s=e.setExCat,a=function(e){s(e.target.innerText.trim())};return(0,c.jsxs)("div",{children:[(0,c.jsx)(r.Z,{children:"Exercises"}),(0,c.jsxs)("div",{className:i.exerciseCategoryContainer,children:[(0,c.jsx)("div",{onClick:a,className:"Body parts"===t?i.activeCat:i.cat,children:"Body parts"}),(0,c.jsx)("div",{onClick:a,className:"Muscles"===t?i.activeCat:i.cat,children:"Muscles"}),(0,c.jsx)("div",{onClick:a,className:"Equipment"===t?i.activeCat:i.cat,children:"Equipment"})]})]})},l=s(322),d=s(7520);var u=function(e){var t=e.item,s=e.setSpec;return(0,c.jsxs)("div",{className:i.arrElCont,onClick:function(e){s(t)},children:[(0,c.jsx)("img",{src:t.imgURL,alt:"exercise_image"}),(0,c.jsxs)("div",{className:i.arrElContText,children:[(0,c.jsx)("h2",{children:t.name.toUpperCase()[0]+t.name.substring(1)}),(0,c.jsx)("br",{}),(0,c.jsx)("p",{children:t.filter})]})]})};var x=function(e){var t=e.arr,s=e.setSpec;try{return(0,c.jsx)("div",{className:i.arrCont,children:t.map((function(e){return(0,c.jsx)(u,{item:e,setSpec:s},(0,d.x0)())}))})}catch(a){return(0,c.jsx)(c.Fragment,{})}},m=s(4865),_={exerciseListContainer:"ExerciseList_exerciseListContainer__FqpZ6",exerciseItemContainer:"ExerciseList_exerciseItemContainer__UUNG7",startBtn:"ExerciseList_startBtn__lc1HN",exerciseStatsContainer:"ExerciseList_exerciseStatsContainer__-H-FZ"};var h=function(e){var t=e.exercise,s=e.setSelected,a=function(e){return e?e[0].toUpperCase()+e.slice(1):""};return(0,c.jsxs)("div",{className:_.exerciseItemContainer,children:[(0,c.jsxs)("h3",{children:[(0,c.jsx)("svg",{className:_.svgTitle,children:(0,c.jsx)("use",{href:"".concat(m.Z,"#icon-runningMan")})}),a(t.name)]}),(0,c.jsxs)("div",{className:_.exerciseStatsContainer,children:[(0,c.jsxs)("p",{children:["Burned calories ",(0,c.jsx)("span",{children:t.burnedCalories})]}),(0,c.jsxs)("p",{children:["Body part ",(0,c.jsx)("span",{children:a(t.bodyPart)})]}),(0,c.jsxs)("p",{children:["Target ",(0,c.jsx)("span",{children:a(t.target)})]})]}),(0,c.jsxs)("button",{className:_.startBtn,onClick:function(){return s(t)},children:["Start",(0,c.jsx)("svg",{children:(0,c.jsx)("use",{href:"".concat(m.Z,"#icon-next-arrow")})})]})]})};var j=function(e){var t=e.name,s=e.filter,r=e.setSelected,i=(0,n.useState)([]),o=(0,a.Z)(i,2),u=o[0],x=o[1];return(0,n.useEffect)((function(){s&&t&&l.ZP.get("exercises/filter?category=".concat(s,"&specific=").concat(t,"&page=1$perPage=8")).then((function(e){x(e.data.result)}))}),[x,t,s]),(0,c.jsx)("div",{className:_.exerciseListContainer,children:u.map((function(e){return(0,c.jsx)(h,{exercise:e,setSelected:r},(0,d.x0)())}))})},f={modalContainer:"style_modalContainer__yQozi",modalAnimation:"style_modalAnimation__VL0eW",modalTime:"style_modalTime__seuca",time:"style_time__5dkMr",pauseSvg:"style_pauseSvg__tsFB1",pauseBtn:"style_pauseBtn__URUfM",progressBar:"style_progressBar__H8dZJ",dotContainer:"style_dotContainer__BFghM",spin:"style_spin__-qfD6",dot:"style_dot__eKUiR",exerciseChars:"style_exerciseChars__0hZob",modalStat:"style_modalStat__Ochir",focus:"style_focus__K8-BB",addBtn:"style_addBtn__1eZzl",thumb:"style_thumb__O-z-Q",finalStats:"style_finalStats__NvXFl",toDiary:"style_toDiary__BunZ2"};var v=function(e){var t=e.name,s=e.val;return(0,c.jsxs)("div",{className:f.modalStat,children:[t,(0,c.jsx)("p",{children:s.toUpperCase()[0]+s.slice(1)})]})},p=s(4420),C=s(4195),g=s(8178),N=s(8181),y=s(1087);var S=function(e){var t=e.ex,s=e.setEx,r=(0,n.useState)(0),i=(0,a.Z)(r,2),o=i[0],l=i[1],d=(0,n.useState)(!1),u=(0,a.Z)(d,2),x=u[0],_=u[1],h=(0,n.useState)(!1),j=(0,a.Z)(h,2),S=j[0],Z=j[1],B=(0,n.useState)(!1),E=(0,a.Z)(B,2),b=E[0],k=E[1],P=(0,p.I0)(),A=100*(1-o/(60*t.time)),M=(t.burnedCalories*A/100).toFixed(2);(0,n.useEffect)((function(){t&&(Z(!0),l(60*t.time),k(!1))}),[t]);var w=function(){if(b)Z(!1),s(void 0);else{var e={exerciseId:t._id,duration:(o/60).toFixed(2),burnedCalories:M,date:(0,g.Z)(new Date)};P((0,C.ec)(e)),k(!0)}};return(0,n.useEffect)((function(){!x&&!b&&o>0&&setTimeout((function(){1===o?(k(!0),l(0)):l(o-1)}),1e3)}),[o,x,b]),b?(0,c.jsx)(N.m,{isOpen:S,onClose:w,children:(0,c.jsxs)("div",{className:f.modalContainer,children:[(0,c.jsx)("div",{className:f.thumbContainer,children:(0,c.jsx)("img",{className:f.thumb,src:"https://s3-alpha-sig.figma.com/img/59d5/2b65/a6a2c8aec4a3496c837c9b0a87d5c044?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWANRVCWxA5doH3IckHWRjdihxZuoDiPb8gjXjgqC1af~NIWaZ5B62XnAWJMy9EOtTNQQ1-U5K2RT2u5lrO6pX79GxkJdX3vR0PfwNb~tvIJlL4V2z4WJOojCtrZdyP8piYXvDrFAzZ~HOv9oze~1t9CQ9TkQGjxr4DmmkA4j5MI9p2Whqbch-tAaZMNc~RTRPrIMR9wGNtWu7p8tNLOjvbfPX-5hXqt-lr~AqNSd7Uo~o5I7mM0Pa7HFxI~e0yIwZuVUK5NxMWqe162kV8z31b0ZA~sraruDDCslFBhg6sdESXDNN6-9VoAI-H9UAxVCP1rxIGK75rSxwlOBG5etA__",alt:"arm"})}),(0,c.jsx)("h1",{children:"Well done"}),(0,c.jsxs)("div",{className:f.finalStats,children:[(0,c.jsxs)("p",{children:["Your time:"," ",(0,c.jsxs)("span",{className:f.focus,children:[(o/60).toFixed(2)," minutes"]})]}),(0,c.jsxs)("p",{children:["Burned calories:"," ",(0,c.jsx)("span",{className:f.focus,children:M})]})]}),(0,c.jsx)("button",{onClick:function(){Z(!1)},children:"To next product"}),(0,c.jsx)("br",{}),(0,c.jsx)(y.OL,{to:"/diary",onClick:w,className:f.toDiary,children:"To the diary"})]})}):(0,c.jsx)(N.m,{isOpen:S,onClose:w,children:(0,c.jsxs)("div",{className:f.modalContainer,children:[(0,c.jsx)("img",{className:f.modalAnimation,alt:"exercise tutorial",src:t.gifUrl}),(0,c.jsxs)("div",{className:f.modalTime,children:[(0,c.jsx)("p",{children:"Time"}),(0,c.jsxs)("div",{className:f.progressBar,style:{background:"radial-gradient(closest-side, #10100f 90%, transparent 90% 100%), conic-gradient(var( --decorate-color) ".concat(A,"%, transparent ").concat(A,"%)")},children:[(0,c.jsx)("div",{className:f.dotContainer,style:{animationPlayState:x?"paused":"running"},children:(0,c.jsx)("div",{className:f.dot})}),(0,c.jsx)("div",{className:f.time,children:function(e){var t=Math.floor(e/60);return(e%=60)<10&&(e="0"+e),t<10?"0"+t+":"+e:t+":"+e}(o)})]}),(0,c.jsx)("button",{className:f.pauseBtn,onClick:function(){return _(!x)},children:(0,c.jsx)("svg",{className:f.pauseSvg,children:x?(0,c.jsx)("use",{href:"".concat(m.Z,"#icon-play-square")}):(0,c.jsx)("use",{href:"".concat(m.Z,"#icon-pause-square")})})}),(0,c.jsxs)("p",{children:["Burned calories:"," ",(0,c.jsx)("span",{className:f.focus,children:M})]}),(0,c.jsxs)("div",{className:f.exerciseChars,children:[(0,c.jsx)(v,{name:"Name",val:t.name}),(0,c.jsx)(v,{name:"Target",val:t.target}),(0,c.jsx)(v,{name:"Body Part",val:t.bodyPart}),(0,c.jsx)(v,{name:"Equipment",val:t.equipment})]})]}),(0,c.jsx)("button",{className:f.addBtn,onClick:function(){k(!0)},children:"Add to diary"})]})})};var Z=function(e){var t=(0,n.useState)("Body parts"),s=(0,a.Z)(t,2),r=s[0],i=s[1],d=(0,n.useState)({totalPages:1,currentPage:1,result:[]}),u=(0,a.Z)(d,2),m=u[0],_=u[1],h=(0,n.useState)(!1),f=(0,a.Z)(h,2),v=f[0],p=f[1],C=(0,n.useState)(void 0),g=(0,a.Z)(C,2),N=g[0],y=g[1],Z=(0,n.useState)({name:void 0,filter:void 0}),B=(0,a.Z)(Z,2),E=B[0],b=B[1];return(0,n.useEffect)((function(){console.log("skskks"),_([]),p(!0),l.ZP.get("exercises?filter="+r).then((function(e){_(e.data)})).finally((function(){return p(!1)})),b({}),y(void 0)}),[_,r]),E.name&&E.filter?(0,c.jsxs)("div",{children:[(0,c.jsx)(o,{exCat:r,setExCat:i}),(0,c.jsx)(j,{name:E.name,filter:E.filter,setSelected:y}),N?(0,c.jsx)(S,{ex:N,setEx:y}):(0,c.jsx)(c.Fragment,{})]}):(0,c.jsxs)("div",{children:[(0,c.jsx)(o,{exCat:r,setExCat:i}),v?(0,c.jsx)("div",{children:"Loading..."}):(0,c.jsx)(x,{arr:m.result,setSpec:b})]})}}}]);
//# sourceMappingURL=468.845b36c2.chunk.js.map