"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{1112:function(e,a,t){t.d(a,{Z:function(){return s}});var n="title-page_titlePage__ZBar5",r=t(184),s=function(e){var a=e.children;return(0,r.jsx)("h2",{className:n,children:a})}},2350:function(e,a,t){t.d(a,{f:function(){return d}});var n=t(9513),r=t.n(n),s=(t(8639),t(4865)),i=t(8295),c={iconSvg:"Calendar_iconSvg__yA5hg","react-datepicker__wrapper":"Calendar_react-datepicker__wrapper__R10o+","react-datepicker":"Calendar_react-datepicker__F0ziw","react-datepicker__month-container":"Calendar_react-datepicker__month-container__438Q1","react-datepicker__day-names":"Calendar_react-datepicker__day-names__iwLYn","react-datepicker__header":"Calendar_react-datepicker__header__lErB8","react-datepicker__header--has-time-select":"Calendar_react-datepicker__header--has-time-select__cdad4","react-datepicker__day":"Calendar_react-datepicker__day__phMtB","react-datepicker__day--selected":"Calendar_react-datepicker__day--selected__bPrT3","react-datepicker__current-month":"Calendar_react-datepicker__current-month__Z8UpG","react-datepicker__day-name":"Calendar_react-datepicker__day-name__yy8aH","react-datepicker__day--disabled":"Calendar_react-datepicker__day--disabled__95buc","react-datepicker__navigation":"Calendar_react-datepicker__navigation__5UZCD","react-datepicker__navigation--previous":"Calendar_react-datepicker__navigation--previous__hAf3i","react-datepicker__navigation--next":"Calendar_react-datepicker__navigation--next__Jd+1B","react-datepicker__navigation-icon":"Calendar_react-datepicker__navigation-icon__L78Dq","react-datepicker__week":"Calendar_react-datepicker__week__w2Sqq","react-datepicker__month":"Calendar_react-datepicker__month__P0A6F","react-datepicker__day--keyboard-selected":"Calendar_react-datepicker__day--keyboard-selected__cF5IU","react-datepicker__day--outside-month":"Calendar_react-datepicker__day--outside-month__NAvqK","react-datepicker__triangle":"Calendar_react-datepicker__triangle__9yloc"},l=t(184),d=function(e){var a=e.selectedDate,t=e.setSelectedDate,n=e.display;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("style",{children:"\n\n.react-datepicker__wrapper {\n    position: relative;\n    \n  }\n  .react-datepicker {\n    position: absolute;\n    left: -20px;\n    top: 50%;\n    transform: translate(-15%, 0%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;    \n    padding: 14px;\n    background-color: #ef8964;\n    font-family: 'Roboto', sans-serif;\n    border-radius: 8px;\n  }\n   .react-datepicker__month-container {\n    float: inherit;\n    box-sizing: border-box;\n  }\n    .react-datepicker__day-names {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 14px;\n    margin-bottom: 8px;\n    border-top: 1px solid rgba(239, 237, 232, 0.2);\n  }\n    .react-datepicker__header {\n    position: relative;\n    background-color: #ef8964;    \n  }\n\n   .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n    border-bottom: 0px;\n    padding: 0;\n  }\n   .react-datepicker__day\n    react-datepicker__day--018.react-datepicker__day--selected\n    react-datepicker__day--today {\n    outline: none;\n    border: none;\n    background-color: #ef8964 !important;   \n  }\n   .react-datepicker__current-month {\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: normal;\n    margin-bottom: 14px;\n  }\n    .react-datepicker__day-name {\n    margin: 0;\n    color: rgba(239, 237, 232, 0.5);\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n\n   .react-datepicker__day--disabled {\n    opacity: 25%;\n  }\n  .react-datepicker__navigation {\n    margin-top: 14px;\n    color: white;\n  }\n   .react-datepicker__navigation--previous {\n    left: 7px;\n    width: 18px;\n    height: 18px;\n  }\n   .react-datepicker__navigation--next {\n    right: 7px;\n    width: 18px;\n    height: 18px;\n  }\n   .react-datepicker__navigation-icon::before:hover:focus {\n    border-color: white;\n  }\n   .react-datepicker__week {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n  }\n   .react-datepicker__day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    margin: 0;\n    border-radius: 50%;\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    text-align: center;\n    width: 24px;\n    height: 24px;\n  }\n   .react-datepicker__month {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0;\n  }\n    .react-datepicker__day--selected {\n    background-color: #040404;\n    color:  #ef8964 ;\n    font-size: 14px;\n  }\n   .react-datepicker__day--selected:hover {\n    border-radius: 50%;\n    background-color: white;\n  }\n    .react-datepicker__day:hover {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n    .react-datepicker__day--keyboard-selected {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n    .react-datepicker__day--outside-month {\n    opacity: 50%;\n  }\n    .react-datepicker__triangle {\n    display: none;\n  }\n\n"}),(0,l.jsxs)("div",{className:i.Z.InputHi,style:{position:"relative",display:n},children:[(0,l.jsx)("svg",{className:c.iconSvg,width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(s.Z,"#icon-calendar-normal")})}),(0,l.jsx)(r(),{className:c.myDatePicker,selected:a,onChange:function(e){t(e)},customInput:(0,l.jsx)("input",{className:i.Z.inputField,style:{cursor:"pointer"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:function(e){return e.substring(0,1)}})]})]})}},8178:function(e,a){a.Z=function(e){var a=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return"".concat(n,"-").concat(t,"-").concat(a)}},9134:function(e,a,t){t.r(a),t.d(a,{default:function(){return xe}});var n=t(9439),r="Diary_diary__GRrvF",s="Diary_calendarCont__6mDiP",i="Diary_calendar__ESVay",c="Diary_sectionCont__+Xm4N",l=t(2791),d=t(4420),o=t(8178),_=t(1112),m=t(8534),u=t(9513),h=t.n(u),p="DaySwitch_body__Hyxv8",x="DaySwitch_dateButton__QLX6x",y="DaySwitch_calendarIconBody__Uc--s",f="DaySwitch_calendarIconLine__-SHwu",j="DaySwitch_arrowsBody__UmJMh",g="DaySwitch_arrowsLeft__qGPj2",b="DaySwitch_arrowsRight__ml3WP",N=(t(9414),t(2350)),v=t(184),k=function(){return(0,v.jsx)("div",{className:y,children:(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("span",{}),(0,v.jsx)("span",{})]})})},w=function(e){var a=e.handleDate,t=(0,d.v9)((function(e){return e.auth.user.createdAt})),r=(0,l.useState)(new Date),s=(0,n.Z)(r,2),i=s[0],c=s[1];(0,l.useEffect)((function(){a(i)}),[i,a]);var o=(0,l.useState)(t),_=(0,n.Z)(o,1)[0],u=(0,l.forwardRef)((function(e,a){e.value;var t=e.onClick;return(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("div",{className:x,onClick:t,ref:a,children:(0,m.WU)(i,"dd/MM/yyyy")}),(0,v.jsx)(k,{}),(0,v.jsxs)("div",{className:j,children:[(0,v.jsx)("span",{className:g,onClick:function(){i!==_&&c(new Date(new Date(i).setDate(new Date(i).getDate()-1)))}}),(0,v.jsx)("span",{className:b,onClick:function(){var e=new Date(new Date(i).setDate(new Date(i).getDate()+1));c(e)}})]})]})}));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h(),{selected:i,onChange:function(e){c(e),a(e)},customInput:(0,v.jsx)(u,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:function(e){return e.substr(0,1)},minDate:_}),(0,v.jsx)(N.f,{display:"none"})]})},C="DayDashboard_dayDashboard__h7nLm",D="DayDashboard_statisticList__qUE0W",T="DayDashboard_adviceWrap__dIlAc",I="DayDashboard_adviceIconWrap__a4Yha",S="DayDashboard_adviceText__Z-qD3",F="StatisticsItem_statisticItem__OTLqf",P="StatisticsItem_statisticItemPositive__RlkXR",E="StatisticsItem_statisticItemNegative__BW-f4",U="StatisticsItem_primaryStatisticItem__eKkjh",Z="StatisticsItem_statisticTitleWrap__OwBh-",R="StatisticsItem_statisticTitle__ve4XR",L="StatisticsItem_statisticPrimaryTitle__9TBuz",V="StatisticsItem_statisticIcon__04E7e",B="StatisticsItem_statisticValue__rm2N7",M=t(4865);var W=function(e){var a=e.className,t=e.iconId;return(0,v.jsx)("svg",{className:a,width:"98px",height:"35px",children:(0,v.jsx)("use",{href:"".concat(M.Z,"#").concat(t)})})},q=function(e){var a=e.statisticsName,t=e.statisticsIcon,n=e.statisticsValue,r=e.statisticPrimary,s=e.fulfilledNorm,i=void 0===s?"":s;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("li",{className:"".concat(F," ").concat(r&&U," ").concat(""!==i&&"positive"===i?P:""!==i&&"negative"===i?E:""),children:[(0,v.jsxs)("div",{className:Z,children:[(0,v.jsx)(W,{className:V,iconId:t}),(0,v.jsx)("p",{className:"".concat(R," ").concat(r&&L),children:a})]}),(0,v.jsx)("div",{className:B,children:n})]})})},z=t(3027),A=function(e){return e.auth.user.bmr},G=function(){var e=(0,d.I0)(),a=(0,l.useState)(null),t=(0,n.Z)(a,2),r=t[0],s=t[1],i=(0,l.useState)(null),c=(0,n.Z)(i,2),o=c[0],_=c[1],m=(0,l.useState)(null),u=(0,n.Z)(m,2),h=u[0],p=u[1],x=(0,l.useState)(null),y=(0,n.Z)(x,2),f=y[0],j=y[1],g=(0,d.v9)(z.Tw),b=(0,d.v9)(z.kb),N=(0,d.v9)(z.i_),k=(0,d.v9)(A);(0,l.useEffect)((function(){s(g?g.toFixed(2):0),_(k?k.toFixed(2):null),p(b?b.toFixed(2):0),j(N?N.toFixed(2):null)}),[g,k,b,N,e]);var w=o-r,F=r<o?"positive":"negative",P=N>0?"positive":"negative";return(0,v.jsxs)("div",{className:C,children:[(0,v.jsxs)("ul",{className:D,children:[(0,v.jsx)(q,{statisticsName:"Daily calorie intake",statisticsValue:"".concat(k),statisticsIcon:"icon-fork-filled",statisticPrimary:!0}),(0,v.jsx)(q,{statisticsName:"Daily physical activity",statisticsValue:"".concat(110," min"),statisticsIcon:"icon-dumbbell-filled",statisticPrimary:!0}),(0,v.jsx)(q,{statisticsName:"Calories consumed",statisticsValue:"".concat(r),statisticsIcon:"icon-apple-filled"}),(0,v.jsx)(q,{statisticsName:"Calories burned",statisticsValue:"".concat(h),statisticsIcon:"icon-burn-filled"}),(0,v.jsx)(q,{statisticsName:"Calories remaining",statisticsValue:"".concat(w),statisticsIcon:"icon-bubble-filled",fulfilledNorm:F}),(0,v.jsx)(q,{statisticsName:"Sports remaining",statisticsValue:"positive"===P?"+".concat(f," min"):"".concat(f," min"),statisticsIcon:"icon-running-filled"})]}),(0,v.jsxs)("div",{className:T,children:[(0,v.jsxs)("div",{className:I,children:[(0,v.jsx)("svg",{width:"24px",height:"24px",children:(0,v.jsx)("use",{href:"".concat(M.Z,"#icon-warning")})})," "]}),(0,v.jsx)("p",{className:S,children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},X="DayProducts_dayProducts__LuDKI",Y="DayProducts_dayScroll__46wb-",H="DayProducts_diaryMen__zlr12",Q="DayProducts_DiaryZag__rvcXM",J="DayProducts_Butt__NdM-k",K="DayProducts_iconStrilka__Ilypr",O={diaryItem:"ProductsTable_diaryItem__kGjga",elem:"ProductsTable_elem__B1b3i",statusCircle:"ProductsTable_statusCircle__1lpXi",cardStatus:"ProductsTable_cardStatus__d2IY4",elementCont:"ProductsTable_elementCont__-LBk0",nameCateg:"ProductsTable_nameCateg__85BEo",nameValue:"ProductsTable_nameValue__k2xLk",nameTrash:"ProductsTable_nameTrash__jBGkn",recommendCont:"ProductsTable_recommendCont__kGpWW",productRecommend:"ProductsTable_productRecommend__W3G-g",productNotRecommend:"ProductsTable_productNotRecommend__6WQMJ",trashValue:"ProductsTable_trashValue__0fzSq",iconTresh:"ProductsTable_iconTresh__beqBw",iconCentr:"ProductsTable_iconCentr__1vNWO",table:"ProductsTable_table__rfz03",bodyTable:"ProductsTable_bodyTable__FXofP",diaryList:"ProductsTable_diaryList__NSGJb"},$=t(4195),ee=function(e){var a=e.productsInDiary,t=(0,d.I0)(),n=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)};return(0,v.jsx)("ul",{className:O.diaryList,children:a.map((function(e){var a=e._id,r=e.calories,s=e.grams,i=e.allowed,c=e.productId,l=c.category,d=c.title;return(0,v.jsx)("li",{className:O.diaryItem,children:(0,v.jsxs)("table",{className:O.table,children:[(0,v.jsxs)("tbody",{className:O.bodyTable,children:[(0,v.jsxs)("tr",{className:O.elem,children:[(0,v.jsx)("th",{className:O.nameCateg,children:"Title"}),(0,v.jsx)("td",{className:O.nameValue,children:n(d)})]}),(0,v.jsxs)("tr",{className:O.elem,children:[(0,v.jsx)("th",{className:O.nameCateg,children:"Category"}),(0,v.jsx)("td",{className:O.nameValue,children:n(l)})]})]}),(0,v.jsxs)("tbody",{className:O.elementCont,children:[(0,v.jsxs)("tr",{className:O.elem,children:[(0,v.jsx)("th",{className:O.nameCateg,children:"Calories"}),(0,v.jsx)("td",{className:O.nameValue,children:r})]}),(0,v.jsxs)("tr",{className:O.elem,children:[(0,v.jsx)("th",{className:O.nameCateg,children:"Weight"}),(0,v.jsx)("td",{className:O.nameValue,children:s})]}),(0,v.jsxs)("tr",{className:O.elem,children:[(0,v.jsx)("th",{className:O.nameCateg,children:"Recommend"}),(0,v.jsx)("td",{className:O.nameValue,children:(0,v.jsxs)("div",{className:"".concat(O.recommendCont),children:[(0,v.jsx)("svg",{className:O.statusCircle,children:i?(0,v.jsx)("use",{href:"".concat(M.Z,"#icon-circle-green")}):(0,v.jsx)("use",{href:"".concat(M.Z,"#icon-circle-red")})}),(0,v.jsx)("p",{className:O.statusText,children:i?"Yes":"No"})]})})]}),(0,v.jsxs)("tr",{className:O.elem,children:[(0,v.jsx)("th",{className:"".concat(O.nameCateg," ").concat(O.nameTrash),children:"Trash"}),(0,v.jsx)("td",{className:O.iconCentr,onClick:function(e){e.target.closest("li").style.display="none",function(e){t((0,$.Wq)(e))}(a)},children:(0,v.jsx)("svg",{className:O.iconTresh,width:"20px",height:"20px",children:(0,v.jsx)("use",{href:"".concat(M.Z,"#icon-trash")})})})]})]})]})},a)}))})},ae=t(1087),te="EmList_notTextCont__27Lc8",ne="EmList_notText__EtxLu",re=function(e){var a=e.itemName;return(0,v.jsx)("div",{className:te,children:(0,v.jsxs)("p",{className:ne,children:["Not found ",a]})})},se=function(e){var a=e.selectedDate,t=(0,d.v9)(z.P3);return(0,v.jsx)("div",{className:X,children:(0,v.jsxs)("div",{className:Y,children:[(0,v.jsxs)("div",{className:H,children:[(0,v.jsx)("h3",{className:Q,children:"Products"}),(0,v.jsxs)(ae.rU,{to:"/products",className:J,state:a,children:["Add product",(0,v.jsx)("svg",{className:K,width:"16px",height:"16px",children:(0,v.jsx)("use",{href:"".concat(M.Z,"#icon-next-arrow")})})]})]}),0===t.length?(0,v.jsx)(re,{itemName:"products"}):(0,v.jsx)(ee,{productsInDiary:t})]})})},ie="DayExercises_dayExecrcises__m2SMA",ce="DayExercises_dayScroll__gcQVi",le="DayExercises_dayNav__+T+Wl",de="DayExercises_dayZag__iZ6rT",oe="DayExercises_Butt__3osLG",_e="DayExercises_iconStrilka__4vViE",me={diaryMainItem:"ExercisesTable_diaryMainItem__+QUNa",element:"ExercisesTable_element__ciKJY",elementWrap:"ExercisesTable_elementWrap__7MPXh",nameCategory:"ExercisesTable_nameCategory__5Wc+t",nameValue:"ExercisesTable_nameValue__iih7Y",nameTrash:"ExercisesTable_nameTrash__xfZsB",iconCentr:"ExercisesTable_iconCentr__ytpu6",table:"ExercisesTable_table__vvyBI",bodyTable:"ExercisesTable_bodyTable__EcdoH",diaryMainList:"ExercisesTable_diaryMainList__+2ofD"},ue=function(e){var a=e.exercises,t=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)},n=(0,d.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{className:me.diaryMainList,children:a.map((function(e){var a=e._id,r=e.burnedCalories,s=e.duration,i=e.exerciseId,c=i.equipment,l=i.name,d=i.target,o=i.bodyPart;return(0,v.jsx)("li",{className:me.diaryMainItem,children:(0,v.jsxs)("table",{className:me.table,children:[(0,v.jsxs)("tbody",{className:me.bodyTable,children:[(0,v.jsxs)("tr",{className:me.element,children:[(0,v.jsx)("th",{className:me.nameCategory,children:"Body Part"}),(0,v.jsx)("td",{className:me.nameValue,children:t(o)})]}),(0,v.jsxs)("tr",{className:me.element,children:[(0,v.jsx)("th",{className:me.nameCategory,children:"Equipment"}),(0,v.jsx)("td",{className:me.nameValue,children:t(c)})]}),(0,v.jsxs)("tr",{className:me.element,children:[(0,v.jsx)("th",{className:me.nameCategory,children:"Name"}),(0,v.jsx)("td",{className:me.nameValue,children:t(l)})]})]}),(0,v.jsxs)("tbody",{className:me.elementWrap,children:[(0,v.jsxs)("tr",{className:me.element,children:[(0,v.jsx)("th",{className:me.nameCategory,children:"Target"}),(0,v.jsx)("td",{className:me.nameValue,children:t(d)})]}),(0,v.jsxs)("tr",{className:me.element,children:[(0,v.jsx)("th",{className:me.nameCategory,children:"Burned Calories"}),(0,v.jsx)("td",{className:me.nameValue,children:r})]}),(0,v.jsxs)("tr",{className:me.element,children:[(0,v.jsx)("th",{className:me.nameCategory,children:"Time"}),(0,v.jsx)("td",{className:me.nameValue,children:s})]}),(0,v.jsxs)("tr",{className:me.element,children:[(0,v.jsx)("th",{className:"".concat(me.nameCategory," ").concat(me.nameTrash),children:"Trash"}),(0,v.jsx)("td",{className:me.iconCentr,onClick:function(e){e.target.closest("li").style.display="none",function(e){n((0,$.xm)(e))}(a)},children:(0,v.jsx)("svg",{className:me.iconTresh,width:"20px",height:"20px",children:(0,v.jsx)("use",{href:"".concat(M.Z,"#icon-trash")})})})]})]})]})},a)}))})})},he=function(e){var a=e.selectedDate,t=(0,d.v9)(z.KR);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:ie,children:(0,v.jsxs)("div",{className:ce,children:[(0,v.jsxs)("div",{className:le,children:[(0,v.jsx)("h3",{className:de,children:"Execrcises"}),(0,v.jsxs)(ae.rU,{to:"/exercises",className:oe,state:a,children:["Add exercises",(0,v.jsx)("svg",{className:_e,width:"16px",height:"16px",children:(0,v.jsx)("use",{href:"".concat(M.Z,"#icon-next-arrow")})})]})]}),0===t.length?(0,v.jsx)(re,{itemName:"exercises"}):(0,v.jsx)(ue,{exercises:t})," "]})})})},pe=t(5700);function xe(){var e=(0,d.I0)(),a=(0,l.useState)(null),t=(0,n.Z)(a,2),m=t[0],u=t[1];(0,l.useEffect)((function(){e((0,$.hw)(m))}),[m,e]);return(0,v.jsx)("div",{className:r,children:(0,v.jsxs)(pe.W,{children:[(0,v.jsxs)("div",{className:s,children:[(0,v.jsx)(_.Z,{children:"Diary"}),(0,v.jsx)("div",{className:i,children:(0,v.jsx)(w,{handleDate:function(e){var a=(0,o.Z)(e);return u(a),a},selectedDate:m})})]}),(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)(G,{}),(0,v.jsxs)("div",{children:[(0,v.jsx)(se,{selectedDate:m}),(0,v.jsx)(he,{selectedDate:m})]})]})]})})}},3027:function(e,a,t){t.d(a,{KR:function(){return r},P3:function(){return n},QN:function(){return l},Tw:function(){return i},i_:function(){return c},kb:function(){return s}});var n=function(e){return e.diary.productsInDiary},r=function(e){return e.diary.exercisesInDiary},s=function(e){return e.diary.burnedCaloriesByDate},i=function(e){return e.diary.consumedCaloriesByDate},c=function(e){return e.diary.sportsRemaining},l=function(e){return e.diary.error}},8295:function(e,a){a.Z={formContainer:"UserForm_formContainer__UR0Yw",sectionTitle:"UserForm_sectionTitle__UD9P1",wrInput:"UserForm_wrInput__vG0i4",input:"UserForm_input__krz-3",wrapperInputField:"UserForm_wrapperInputField__8+JwJ",wrapperFields:"UserForm_wrapperFields__HOEXF",inputField:"UserForm_inputField__oR+hK",label:"UserForm_label__panU-",labelForRadio:"UserForm_labelForRadio__6dtEh",forRadio:"UserForm_forRadio__XOhzt",forRadioBtn:"UserForm_forRadioBtn__1hLkM",wrapperRadio:"UserForm_wrapperRadio__vfL8d",forLevelAct:"UserForm_forLevelAct__HQ8Yk",button:"UserForm_button__v70Qd",wrapperLevel:"UserForm_wrapperLevel__OZHYS",wrappInput:"UserForm_wrappInput__1juhL",forForm:"UserForm_forForm__yylEP",calendar:"UserForm_calendar__UfVui"}}}]);
//# sourceMappingURL=134.3bf00144.chunk.js.map