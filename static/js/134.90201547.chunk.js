"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{1112:function(e,a,t){t.d(a,{Z:function(){return s}});var n="title-page_titlePage__ZBar5",r=t(184),s=function(e){var a=e.children;return(0,r.jsx)("h2",{className:n,children:a})}},2350:function(e,a,t){t.d(a,{f:function(){return o}});var n=t(9513),r=t.n(n),s=(t(8639),t(4865)),c=t(8295),i={iconSvg:"Calendar_iconSvg__yA5hg","react-datepicker__wrapper":"Calendar_react-datepicker__wrapper__R10o+","react-datepicker":"Calendar_react-datepicker__F0ziw","react-datepicker__month-container":"Calendar_react-datepicker__month-container__438Q1","react-datepicker__day-names":"Calendar_react-datepicker__day-names__iwLYn","react-datepicker__header":"Calendar_react-datepicker__header__lErB8","react-datepicker__header--has-time-select":"Calendar_react-datepicker__header--has-time-select__cdad4","react-datepicker__day":"Calendar_react-datepicker__day__phMtB","react-datepicker__day--selected":"Calendar_react-datepicker__day--selected__bPrT3","react-datepicker__current-month":"Calendar_react-datepicker__current-month__Z8UpG","react-datepicker__day-name":"Calendar_react-datepicker__day-name__yy8aH","react-datepicker__day--disabled":"Calendar_react-datepicker__day--disabled__95buc","react-datepicker__navigation":"Calendar_react-datepicker__navigation__5UZCD","react-datepicker__navigation--previous":"Calendar_react-datepicker__navigation--previous__hAf3i","react-datepicker__navigation--next":"Calendar_react-datepicker__navigation--next__Jd+1B","react-datepicker__navigation-icon":"Calendar_react-datepicker__navigation-icon__L78Dq","react-datepicker__week":"Calendar_react-datepicker__week__w2Sqq","react-datepicker__month":"Calendar_react-datepicker__month__P0A6F","react-datepicker__day--keyboard-selected":"Calendar_react-datepicker__day--keyboard-selected__cF5IU","react-datepicker__day--outside-month":"Calendar_react-datepicker__day--outside-month__NAvqK","react-datepicker__triangle":"Calendar_react-datepicker__triangle__9yloc"},l=t(184),o=function(e){var a=e.selectedDate,t=e.setSelectedDate,n=e.display;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("style",{children:"\n\n.react-datepicker__wrapper {\n    position: relative;\n    \n  }\n  .react-datepicker {\n    position: absolute;\n    left: -20px;\n    top: 50%;\n    transform: translate(-15%, 0%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;    \n    padding: 14px;\n    background-color: #ef8964;\n    font-family: 'Roboto', sans-serif;\n    border-radius: 8px;\n  }\n   .react-datepicker__month-container {\n    float: inherit;\n    box-sizing: border-box;\n  }\n    .react-datepicker__day-names {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 14px;\n    margin-bottom: 8px;\n    border-top: 1px solid rgba(239, 237, 232, 0.2);\n  }\n    .react-datepicker__header {\n    position: relative;\n    background-color: #ef8964;    \n  }\n\n   .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n    border-bottom: 0px;\n    padding: 0;\n  }\n   .react-datepicker__day\n    react-datepicker__day--018.react-datepicker__day--selected\n    react-datepicker__day--today {\n    outline: none;\n    border: none;\n    background-color: #ef8964 !important;   \n  }\n   .react-datepicker__current-month {\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: normal;\n    margin-bottom: 14px;\n  }\n    .react-datepicker__day-name {\n    margin: 0;\n    color: rgba(239, 237, 232, 0.5);\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n\n   .react-datepicker__day--disabled {\n    opacity: 25%;\n  }\n  .react-datepicker__navigation {\n    margin-top: 14px;\n    color: white;\n  }\n   .react-datepicker__navigation--previous {\n    left: 7px;\n    width: 18px;\n    height: 18px;\n  }\n   .react-datepicker__navigation--next {\n    right: 7px;\n    width: 18px;\n    height: 18px;\n  }\n   .react-datepicker__navigation-icon::before:hover:focus {\n    border-color: white;\n  }\n   .react-datepicker__week {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n  }\n   .react-datepicker__day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    margin: 0;\n    border-radius: 50%;\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    text-align: center;\n    width: 24px;\n    height: 24px;\n  }\n   .react-datepicker__month {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0;\n  }\n    .react-datepicker__day--selected {\n    background-color: #040404;\n    color:  #ef8964 ;\n    font-size: 14px;\n  }\n   .react-datepicker__day--selected:hover {\n    border-radius: 50%;\n    background-color: white;\n  }\n    .react-datepicker__day:hover {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n    .react-datepicker__day--keyboard-selected {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n    .react-datepicker__day--outside-month {\n    opacity: 50%;\n  }\n    .react-datepicker__triangle {\n    display: none;\n  }\n\n"}),(0,l.jsxs)("div",{className:c.Z.InputHi,style:{position:"relative",display:n},children:[(0,l.jsx)("svg",{className:i.iconSvg,width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(s.Z,"#icon-calendar-normal")})}),(0,l.jsx)(r(),{className:i.myDatePicker,selected:a,onChange:function(e){t(e)},customInput:(0,l.jsx)("input",{className:c.Z.inputField,style:{cursor:"pointer"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:function(e){return e.substring(0,1)}})]})]})}},8178:function(e,a){a.Z=function(e){var a=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return"".concat(n,"-").concat(t,"-").concat(a)}},9134:function(e,a,t){t.r(a),t.d(a,{default:function(){return ye}});var n=t(9439),r="Diary_diary__GRrvF",s="Diary_calendarCont__6mDiP",c="Diary_calendar__ESVay",i="Diary_sectionCont__+Xm4N",l=t(2791),o=t(4420),d=t(8178),_=t(1112),m=t(8534),u=t(9513),h=t.n(u),p="DaySwitch_body__Hyxv8",x="DaySwitch_dateButton__QLX6x",y="DaySwitch_calendarIconBody__Uc--s",f="DaySwitch_calendarIconLine__-SHwu",j="DaySwitch_arrowsBody__UmJMh",g="DaySwitch_arrowsLeft__qGPj2",b="DaySwitch_arrowsRight__ml3WP",v=(t(9414),t(2350)),N=t(184),k=function(){return(0,N.jsx)("div",{className:y,children:(0,N.jsxs)("div",{className:f,children:[(0,N.jsx)("span",{}),(0,N.jsx)("span",{})]})})},D=function(e){var a=e.handleDate,t=(0,l.useState)(new Date),r=(0,n.Z)(t,2),s=r[0],c=r[1];(0,l.useEffect)((function(){a(s)}),[s,a]);var i=(0,l.useState)(new Date(s).setDate(new Date(s).getDate()-1)),o=(0,n.Z)(i,1)[0],d=(0,l.forwardRef)((function(e,a){e.value;var t=e.onClick;return(0,N.jsxs)("div",{className:p,children:[(0,N.jsx)("div",{className:x,onClick:t,ref:a,children:(0,m.WU)(s,"dd/MM/yyyy")}),(0,N.jsx)(k,{}),(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("span",{className:g,onClick:function(){s!==o&&c(new Date(new Date(s).setDate(new Date(s).getDate()-1)))}}),(0,N.jsx)("span",{className:b,onClick:function(){var e=new Date(new Date(s).setDate(new Date(s).getDate()+1));c(e)}})]})]})}));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(h(),{selected:s,onChange:function(e){c(e),a(e)},customInput:(0,N.jsx)(d,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:function(e){return e.substr(0,1)},minDate:o}),(0,N.jsx)(v.f,{display:"none"})]})},w="DayDashboard_dayDashboard__h7nLm",C="DayDashboard_statisticList__qUE0W",T="DayDashboard_adviceWrap__dIlAc",I="DayDashboard_adviceIconWrap__a4Yha",S="DayDashboard_adviceText__Z-qD3",P="StatisticsItem_statisticItem__OTLqf",F="StatisticsItem_statisticItemPositive__RlkXR",E="StatisticsItem_statisticItemNegative__BW-f4",U="StatisticsItem_primaryStatisticItem__eKkjh",R="StatisticsItem_statisticTitleWrap__OwBh-",Z="StatisticsItem_statisticTitle__ve4XR",L="StatisticsItem_statisticPrimaryTitle__9TBuz",V="StatisticsItem_statisticIcon__04E7e",B="StatisticsItem_statisticValue__rm2N7",M=t(4865);var W=function(e){var a=e.className,t=e.iconId;return(0,N.jsx)("svg",{className:a,width:"98px",height:"35px",children:(0,N.jsx)("use",{href:"".concat(M.Z,"#").concat(t)})})},q=function(e){var a=e.statisticsName,t=e.statisticsIcon,n=e.statisticsValue,r=e.statisticPrimary,s=e.fulfilledNorm,c=void 0===s?"":s;return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("li",{className:"".concat(P," ").concat(r&&U," ").concat(""!==c&&"positive"===c?F:""!==c&&"negative"===c?E:""),children:[(0,N.jsxs)("div",{className:R,children:[(0,N.jsx)(W,{className:V,iconId:t}),(0,N.jsx)("p",{className:"".concat(Z," ").concat(r&&L),children:a})]}),(0,N.jsx)("div",{className:B,children:n})]})})},z=t(3027),A=function(e){return e.auth.user.bmr},G=function(){var e=(0,o.I0)(),a=(0,l.useState)(null),t=(0,n.Z)(a,2),r=t[0],s=t[1],c=(0,l.useState)(null),i=(0,n.Z)(c,2),d=i[0],_=i[1],m=(0,l.useState)(null),u=(0,n.Z)(m,2),h=u[0],p=u[1],x=(0,o.v9)(z.Tw),y=(0,o.v9)(z.kb),f=(0,o.v9)(z.i_),j=(0,o.v9)(A);(0,l.useEffect)((function(){s(x),_(j),p(y)}),[x,j,y,e]);var g=d-r,b=r<d?"positive":"negative",v=f>0?"positive":"negative";return(0,N.jsxs)("div",{className:w,children:[(0,N.jsxs)("ul",{className:C,children:[(0,N.jsx)(q,{statisticsName:"Daily calorie intake",statisticsValue:"".concat(j),statisticsIcon:"icon-fork-filled",statisticPrimary:!0}),(0,N.jsx)(q,{statisticsName:"Daily physical activity",statisticsValue:"".concat(110," min"),statisticsIcon:"icon-dumbbell-filled",statisticPrimary:!0}),(0,N.jsx)(q,{statisticsName:"Calories consumed",statisticsValue:"".concat(r),statisticsIcon:"icon-apple-filled"}),(0,N.jsx)(q,{statisticsName:"Calories burned",statisticsValue:"".concat(h),statisticsIcon:"icon-burn-filled"}),(0,N.jsx)(q,{statisticsName:"Calories remaining",statisticsValue:"".concat(g),statisticsIcon:"icon-bubble-filled",fulfilledNorm:b}),(0,N.jsx)(q,{statisticsName:"Sports remaining",statisticsValue:"positive"===v?"+".concat(f," min"):"".concat(f," min"),statisticsIcon:"icon-running-filled"})]}),(0,N.jsxs)("div",{className:T,children:[(0,N.jsxs)("div",{className:I,children:[(0,N.jsx)("svg",{width:"24px",height:"24px",children:(0,N.jsx)("use",{href:"".concat(M.Z,"#icon-warning")})})," "]}),(0,N.jsx)("p",{className:S,children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},X="DayProducts_dayProducts__LuDKI",Y="DayProducts_dayScroll__46wb-",H="DayProducts_diaryMen__zlr12",Q="DayProducts_DiaryZag__rvcXM",J="DayProducts_Butt__NdM-k",K="DayProducts_iconStrilka__Ilypr",O={diaryItem:"ProductsTable_diaryItem__kGjga",elem:"ProductsTable_elem__B1b3i",statusCircle:"ProductsTable_statusCircle__1lpXi",cardStatus:"ProductsTable_cardStatus__d2IY4",elementCont:"ProductsTable_elementCont__-LBk0",nameCateg:"ProductsTable_nameCateg__85BEo",nameValue:"ProductsTable_nameValue__k2xLk",nameTrash:"ProductsTable_nameTrash__jBGkn",recommendCont:"ProductsTable_recommendCont__kGpWW",productRecommend:"ProductsTable_productRecommend__W3G-g",productNotRecommend:"ProductsTable_productNotRecommend__6WQMJ",trashValue:"ProductsTable_trashValue__0fzSq",iconTresh:"ProductsTable_iconTresh__beqBw",iconCentr:"ProductsTable_iconCentr__1vNWO",table:"ProductsTable_table__rfz03",bodyTable:"ProductsTable_bodyTable__FXofP",diaryList:"ProductsTable_diaryList__NSGJb"},$=t(4195),ee=t(2745),ae=function(e){var a=e.productsInDiary,t=(0,o.I0)(),n=(0,o.v9)(ee.nR);console.log("products >>",n);var r=(0,o.v9)((function(e){return e.auth.user.blood})),s=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)};return(0,N.jsx)("ul",{className:O.diaryList,children:a.map((function(e){var a=e._id,n=e.calories,c=e.grams,i=e.productId,l=i.category,o=i.title;return(0,N.jsx)("li",{className:O.diaryItem,children:(0,N.jsxs)("table",{className:O.table,children:[(0,N.jsxs)("tbody",{className:O.bodyTable,children:[(0,N.jsxs)("tr",{className:O.elem,children:[(0,N.jsx)("th",{className:O.nameCateg,children:"Title"}),(0,N.jsx)("td",{className:O.nameValue,children:s(o)})]}),(0,N.jsxs)("tr",{className:O.elem,children:[(0,N.jsx)("th",{className:O.nameCateg,children:"Category"}),(0,N.jsx)("td",{className:O.nameValue,children:s(l)})]})]}),(0,N.jsxs)("tbody",{className:O.elementCont,children:[(0,N.jsxs)("tr",{className:O.elem,children:[(0,N.jsx)("th",{className:O.nameCateg,children:"Calories"}),(0,N.jsx)("td",{className:O.nameValue,children:n})]}),(0,N.jsxs)("tr",{className:O.elem,children:[(0,N.jsx)("th",{className:O.nameCateg,children:"Weight"}),(0,N.jsx)("td",{className:O.nameValue,children:c})]}),(0,N.jsxs)("tr",{className:O.elem,children:[(0,N.jsx)("th",{className:O.nameCateg,children:"Recommend"}),(0,N.jsx)("td",{className:O.nameValue,children:(0,N.jsxs)("div",{className:"".concat(O.recommendCont),children:[(0,N.jsx)("svg",{className:O.statusCircle,children:1[r]?(0,N.jsx)("use",{href:"".concat(M.Z,"#icon-circle-green")}):(0,N.jsx)("use",{href:"".concat(M.Z,"#icon-circle-red")})}),(0,N.jsx)("p",{className:O.statusText,children:1[r]?"Yes":"No"})]})})]}),(0,N.jsxs)("tr",{className:O.elem,children:[(0,N.jsx)("th",{className:"".concat(O.nameCateg," ").concat(O.nameTrash),children:"Trash"}),(0,N.jsx)("td",{className:O.iconCentr,onClick:function(e){e.target.closest("li").style.display="none",function(e){console.log("_id >>",e),t((0,$.Wq)(e))}(a)},children:(0,N.jsx)("svg",{className:O.iconTresh,width:"20px",height:"20px",children:(0,N.jsx)("use",{href:"".concat(M.Z,"#icon-trash")})})})]})]})]})},a)}))})},te=t(1087),ne="EmList_notTextCont__27Lc8",re="EmList_notText__EtxLu",se=function(e){var a=e.itemName;return(0,N.jsx)("div",{className:ne,children:(0,N.jsxs)("p",{className:re,children:["Not found ",a]})})},ce=function(e){var a=e.selectedDate,t=(0,o.v9)(z.P3);return(0,N.jsx)("div",{className:X,children:(0,N.jsxs)("div",{className:Y,children:[(0,N.jsxs)("div",{className:H,children:[(0,N.jsx)("h3",{className:Q,children:"Products"}),(0,N.jsxs)(te.rU,{to:"/products",className:J,state:a,children:["Add product",(0,N.jsx)("svg",{className:K,width:"16px",height:"16px",children:(0,N.jsx)("use",{href:"".concat(M.Z,"#icon-next-arrow")})})]})]}),0===t.length?(0,N.jsx)(se,{itemName:"products"}):(0,N.jsx)(ae,{productsInDiary:t})]})})},ie="DayExercises_dayExecrcises__m2SMA",le="DayExercises_dayScroll__gcQVi",oe="DayExercises_dayNav__+T+Wl",de="DayExercises_dayZag__iZ6rT",_e="DayExercises_Butt__3osLG",me="DayExercises_iconStrilka__4vViE",ue={diaryMainItem:"ExercisesTable_diaryMainItem__+QUNa",element:"ExercisesTable_element__ciKJY",elementWrap:"ExercisesTable_elementWrap__7MPXh",nameCategory:"ExercisesTable_nameCategory__5Wc+t",nameValue:"ExercisesTable_nameValue__iih7Y",nameTrash:"ExercisesTable_nameTrash__xfZsB",iconCentr:"ExercisesTable_iconCentr__ytpu6",table:"ExercisesTable_table__vvyBI",bodyTable:"ExercisesTable_bodyTable__EcdoH",diaryMainList:"ExercisesTable_diaryMainList__+2ofD"},he=function(e){var a=e.exercises,t=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)},n=(0,o.I0)(),r=(0,o.v9)((function(e){return e.diary}));return console.log(r),(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("ul",{className:ue.diaryMainList,children:a.map((function(e){var a=e._id,r=e.burnedCalories,s=e.duration,c=e.exerciseId,i=c.equipment,l=c.name,o=c.target,d=c.bodyPart;return(0,N.jsx)("li",{className:ue.diaryMainItem,children:(0,N.jsxs)("table",{className:ue.table,children:[(0,N.jsxs)("tbody",{className:ue.bodyTable,children:[(0,N.jsxs)("tr",{className:ue.element,children:[(0,N.jsx)("th",{className:ue.nameCategory,children:"Body Part"}),(0,N.jsx)("td",{className:ue.nameValue,children:t(d)})]}),(0,N.jsxs)("tr",{className:ue.element,children:[(0,N.jsx)("th",{className:ue.nameCategory,children:"Equipment"}),(0,N.jsx)("td",{className:ue.nameValue,children:t(i)})]}),(0,N.jsxs)("tr",{className:ue.element,children:[(0,N.jsx)("th",{className:ue.nameCategory,children:"Name"}),(0,N.jsx)("td",{className:ue.nameValue,children:t(l)})]})]}),(0,N.jsxs)("tbody",{className:ue.elementWrap,children:[(0,N.jsxs)("tr",{className:ue.element,children:[(0,N.jsx)("th",{className:ue.nameCategory,children:"Target"}),(0,N.jsx)("td",{className:ue.nameValue,children:t(o)})]}),(0,N.jsxs)("tr",{className:ue.element,children:[(0,N.jsx)("th",{className:ue.nameCategory,children:"Burned Calories"}),(0,N.jsx)("td",{className:ue.nameValue,children:r})]}),(0,N.jsxs)("tr",{className:ue.element,children:[(0,N.jsx)("th",{className:ue.nameCategory,children:"Time"}),(0,N.jsx)("td",{className:ue.nameValue,children:s})]}),(0,N.jsxs)("tr",{className:ue.element,children:[(0,N.jsx)("th",{className:"".concat(ue.nameCategory," ").concat(ue.nameTrash),children:"Trash"}),(0,N.jsx)("td",{className:ue.iconCentr,onClick:function(e){e.target.closest("li").style.display="none",function(e){n((0,$.xm)(e))}(a)},children:(0,N.jsx)("svg",{className:ue.iconTresh,width:"20px",height:"20px",children:(0,N.jsx)("use",{href:"".concat(M.Z,"#icon-trash")})})})]})]})]})},a)}))})})},pe=function(e){var a=e.selectedDate,t=(0,o.v9)(z.KR);return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{className:ie,children:(0,N.jsxs)("div",{className:le,children:[(0,N.jsxs)("div",{className:oe,children:[(0,N.jsx)("h3",{className:de,children:"Execrcises"}),(0,N.jsxs)(te.rU,{to:"/exercises",className:_e,state:a,children:["Add exercises",(0,N.jsx)("svg",{className:me,width:"16px",height:"16px",children:(0,N.jsx)("use",{href:"".concat(M.Z,"#icon-next-arrow")})})]})]}),0===t.length?(0,N.jsx)(se,{itemName:"exercises"}):(0,N.jsx)(he,{exercises:t})," "]})})})},xe=t(5700);function ye(){var e=(0,o.I0)(),a=(0,l.useState)(null),t=(0,n.Z)(a,2),m=t[0],u=t[1];(0,l.useEffect)((function(){console.log(m),e((0,$.hw)(m))}),[m,e]);return console.log("dateExport >>",m),(0,N.jsx)("div",{className:r,children:(0,N.jsxs)(xe.W,{children:[(0,N.jsxs)("div",{className:s,children:[(0,N.jsx)(_.Z,{children:"Diary"}),(0,N.jsx)("div",{className:c,children:(0,N.jsx)(D,{handleDate:function(e){var a=(0,d.Z)(e);return u(a),a},selectedDate:m})})]}),(0,N.jsxs)("div",{className:i,children:[(0,N.jsx)(G,{}),(0,N.jsxs)("div",{children:[(0,N.jsx)(ce,{selectedDate:m}),(0,N.jsx)(pe,{selectedDate:m})]})]})]})})}},3027:function(e,a,t){t.d(a,{KR:function(){return r},P3:function(){return n},QN:function(){return l},Tw:function(){return c},i_:function(){return i},kb:function(){return s}});var n=function(e){return e.diary.productsInDiary},r=function(e){return e.diary.exercisesInDiary},s=function(e){return e.diary.burnedCaloriesByDate},c=function(e){return e.diary.consumedCaloriesByDate},i=function(e){return e.diary.sportsRemaining},l=function(e){return e.diary.error}},2745:function(e,a,t){t.d(a,{AD:function(){return s},mU:function(){return c},nR:function(){return n},zh:function(){return r}});var n=function(e){return e.products.products.items},r=function(e){return e.products.products.error},s=function(e){return e.products.filter},c=function(e){return e.products.products.success}},8295:function(e,a){a.Z={formContainer:"UserForm_formContainer__UR0Yw",sectionTitle:"UserForm_sectionTitle__UD9P1",wrInput:"UserForm_wrInput__vG0i4",input:"UserForm_input__krz-3",wrapperInputField:"UserForm_wrapperInputField__8+JwJ",wrapperFields:"UserForm_wrapperFields__HOEXF",inputField:"UserForm_inputField__oR+hK",label:"UserForm_label__panU-",labelForRadio:"UserForm_labelForRadio__6dtEh",forRadio:"UserForm_forRadio__XOhzt",forRadioBtn:"UserForm_forRadioBtn__1hLkM",wrapperRadio:"UserForm_wrapperRadio__vfL8d",forLevelAct:"UserForm_forLevelAct__HQ8Yk",button:"UserForm_button__v70Qd",wrapperLevel:"UserForm_wrapperLevel__OZHYS",wrappInput:"UserForm_wrappInput__1juhL",forForm:"UserForm_forForm__yylEP",calendar:"UserForm_calendar__UfVui"}}}]);
//# sourceMappingURL=134.90201547.chunk.js.map