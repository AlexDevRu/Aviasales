(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],{33:function(t,e,c){},34:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){},37:function(t,e,c){},63:function(t,e,c){},64:function(t,e,c){},65:function(t,e,c){},66:function(t,e,c){},67:function(t,e,c){},68:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),i=c.n(a),s=c(6),r=c.n(s),o=(c(33),c(34),c(2)),d=c(7),l=c(8),u=c(27),j=c(25),b=(c(35),c(36),c(37),function(t){var e=Math.floor(t/60/24),c=Math.floor(t/60%24),n=t%60;return"".concat(e>0?e+"\u0434 ":"").concat(c,"\u0447 ").concat(n,"\u043c")}),h=function(t){return-1===t?"\u0412\u0441\u0435":0===t?"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":"".concat(t," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a").concat(1===t?"\u0430":"\u0438")},f=c(11),O=c.n(f),p=function(t){return Object(n.jsxs)("div",{className:"ticket__data",children:[Object(n.jsxs)("div",{className:"ticket__item",children:[Object(n.jsx)("div",{className:"ticket__top",children:"".concat(t.origin,"-").concat(t.destination)}),Object(n.jsxs)("div",{className:"ticket__bottom",children:[Object(n.jsx)(O.a,{date:t.date,format:"hh:mm"}),"\xa0-\xa0",Object(n.jsx)(O.a,{date:t.date,add:{minutes:t.duration},format:"hh:mm"})]})]}),Object(n.jsxs)("div",{className:"ticket__item",children:[Object(n.jsx)("div",{className:"ticket__top",children:"\u0432 \u043f\u0443\u0442\u0438"}),Object(n.jsx)("div",{className:"ticket__bottom length",children:b(t.duration)})]}),Object(n.jsxs)("div",{className:"ticket__item",children:[Object(n.jsx)("div",{className:"ticket__top",children:h(t.stops.length)}),Object(n.jsx)("div",{className:"ticket__bottom",children:t.stops.join(", ")})]})]})},m=function(t){var e=t.price.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1 ");return Object(n.jsxs)("div",{className:"ticket",children:[Object(n.jsxs)("div",{className:"ticket__header",children:[Object(n.jsx)("div",{className:"ticket__price",children:"".concat(e," \u20bd")}),Object(n.jsx)("div",{className:"ticket__logo",children:Object(n.jsx)("img",{src:"//pics.avs.io/99/36/".concat(t.carrier,".png"),alt:""})})]}),t.segments.map((function(t,e){return Object(n.jsx)(p,Object(o.a)({},t),e)}))]})},k=c(12),x=k.create({baseURL:"https://front-test.beta.aviasales.ru/"}),v=function(){function t(){Object(d.a)(this,t)}return Object(l.a)(t,null,[{key:"getTickets",value:function(){return k.get("https://front-test.beta.aviasales.ru/search").then((function(t){return x.get("tickets?searchId=".concat(t.data.searchId))}))}}]),t}(),g=function(t){return{type:"SET_LOADING",data:t}},_=function(t){return{type:"SET_SORT",data:t}},T=c(4),N=(c(63),function(t){var e=function(e){t.setSort(e.target.dataset.id)};return Object(n.jsx)("div",{className:"tabs",children:t.sort.map((function(t,c){return Object(n.jsx)("div",{className:"tab ".concat(t.checked?"active":null),"data-id":t.id,onClick:e,children:t.label},c)}))})}),y=(c(64),function(){return Object(n.jsxs)("svg",{className:"loader",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",version:"1.1",viewBox:"0 0 100 100",xmlSpace:"preserve",children:[Object(n.jsx)("path",{fill:"#2196F3",d:"M31.6 3.5C5.9 13.6-6.6 42.7 3.5 68.4c10.1 25.7 39.2 38.3 64.9 28.1l-3.1-7.9C44 97 19.9 86.6 11.5 65.3c-8.4-21.3 2-45.4 23.3-53.8l-3.2-8z",children:Object(n.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"2s",from:"0 50 50",repeatCount:"indefinite",to:"360 50 50",type:"rotate"})}),Object(n.jsx)("path",{fill:"#2196F3",d:"M42.3 39.6c5.7-4.3 13.9-3.1 18.1 2.7 4.3 5.7 3.1 13.9-2.7 18.1l4.1 5.5c8.8-6.5 10.6-19 4.1-27.7-6.5-8.8-19-10.6-27.7-4.1l4.1 5.5z",children:Object(n.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"1s",from:"0 50 50",repeatCount:"indefinite",to:"-360 50 50",type:"rotate"})}),Object(n.jsx)("path",{fill:"#2196F3",d:"M82 35.7C74.1 18 53.4 10.1 35.7 18S10.1 46.6 18 64.3l7.6-3.4c-6-13.5 0-29.3 13.5-35.3s29.3 0 35.3 13.5l7.6-3.4z",children:Object(n.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"2s",from:"0 50 50",repeatCount:"indefinite",to:"360 50 50",type:"rotate"})})]})}),S=function(t){Object(u.a)(c,t);var e=Object(j.a)(c);function c(){return Object(d.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"componentDidMount",value:function(){this.props.getTickets()}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"content__area",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(N,{setSort:this.props.setSort,sort:this.props.sort}),this.props.isLoading?Object(n.jsx)(y,{}):0===this.props.tickets.length?Object(n.jsx)("p",{className:"empty-list",children:"No tickets"}):this.props.tickets.map((function(t,e){return Object(n.jsx)(m,Object(o.a)({},t),e)}))]})})}}]),c}(i.a.Component),C=Object(T.b)((function(t){return{sort:t.sort,tickets:t.displayTickets,isLoading:t.isLoading}}),{setSort:_,getTickets:function(){return function(t){t(g(!0)),v.getTickets().then((function(e){t({type:"SET_TICKETS",data:e.data.tickets.slice(0,5)}),t(g(!1)),t({type:"SET_STOP",data:e.data.stop}),t(_(1))}))}}})(S),L=(c(65),c(66),function(t){return Object(n.jsxs)("label",{className:"control control--checkbox",children:[h(t.count),Object(n.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(e){t.changeFilter(t.id,e.target.checked),t.setSort(t.sortId)}}),Object(n.jsx)("div",{className:"control__indicator"})]})}),E=Object(T.b)((function(t){return{filters:t.filters,sortId:t.sort.find((function(t){return t.checked})).id}}),{changeFilter:function(t,e){return{type:"CHANGE_FILTER",data:{id:t,value:e}}},setSort:_})((function(t){return Object(n.jsx)("div",{className:"filter__area",children:Object(n.jsxs)("div",{className:"filter",children:[Object(n.jsx)("h1",{className:"filter__title title",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(n.jsx)("div",{className:"filter__items",children:t.filters.map((function(e){return Object(n.jsx)(L,Object(o.a)(Object(o.a)({},e),{},{changeFilter:t.changeFilter,setSort:t.setSort,sortId:t.sortId}),e.id)}))})]})})})),I=(c(67),c.p+"static/media/Logo.e2d2505b.svg"),F=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{className:"header__logo",src:I,alt:""})})};var M=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(F,{}),Object(n.jsx)(E,{}),Object(n.jsx)(C,{})]})},w=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),i(t),s(t)}))},A=c(5),R=c(24),D=c(26),G={tickets:[],displayTickets:[],stop:!0,isLoading:!1,filters:[{id:1,count:-1,checked:!0},{id:2,count:0,checked:!1},{id:3,count:1,checked:!1},{id:4,count:2,checked:!1},{id:5,count:3,checked:!1}],sort:[{id:1,label:"\u0441\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439",checked:!0},{id:2,label:"\u0441\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439",checked:!1}]};var P=Object(A.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TICKETS":return Object(o.a)(Object(o.a)({},t),{},{tickets:e.data,displayTickets:e.data});case"SET_LOADING":return Object(o.a)(Object(o.a)({},t),{},{isLoading:e.data,displayTickets:e.data?[]:t.displayTickets});case"SET_STOP":return Object(o.a)(Object(o.a)({},t),{},{stop:e.data});case"CHANGE_FILTER":var c=t.filters.map((function(t){return t.id===e.data.id?Object(o.a)(Object(o.a)({},t),{},{checked:e.data.value}):t})),n=c.filter((function(t){return t.checked})).map((function(t){return t.count})),a=t.tickets;return-1===n.indexOf(-1)&&(a=t.tickets.filter((function(t){return n.filter((function(e){return t.segments.map((function(t){return t.stops.length})).includes(e)})).length>0}))),Object(o.a)(Object(o.a)({},t),{},{filters:c,displayTickets:a});case"SET_SORT":var i=Object(D.a)(t.displayTickets);return 1==e.data?i.sort((function(t,e){return t.price-e.price})):2==e.data&&i.sort((function(t,e){return t.segments.map((function(t){return t.duration})).reduce((function(t,e){return t+e}),0)-e.segments.map((function(t){return t.duration})).reduce((function(t,e){return t+e}),0)})),Object(o.a)(Object(o.a)({},t),{},{sort:t.sort.map((function(t){return t.id==e.data?Object(o.a)(Object(o.a)({},t),{},{checked:!0}):Object(o.a)(Object(o.a)({},t),{},{checked:!1})})),displayTickets:i});default:return t}}),Object(A.a)(R.a));r.a.render(Object(n.jsx)(T.a,{store:P,children:Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(M,{})})}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.63348338.chunk.js.map