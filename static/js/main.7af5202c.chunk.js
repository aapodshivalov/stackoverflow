(this.webpackJsonpstackoverflow=this.webpackJsonpstackoverflow||[]).push([[0],{39:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,47)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))},c=r(13),a=r(1),s=r.n(a),o=r(22),i=r.n(o),u=(r(39),r(16)),d=r(9),l=r(17),j=r(29),b=r(6),O={users:null,loading:!1,error:null,text:""},h="SET_USERS",p="SET_USERS_TEXT",x="SET_USERS_LOAD",f="SET_USERS_ERROR",v="FETCH_USERS";var _=function(e){return{type:h,payload:e}},m=function(e){return{type:x,payload:e}},y=function(e){return{type:f,payload:e}},g=r(19),w={info:{},loading:!1,error:null},S="SET_INFO",E="SET_INFO_LOAD",k="SET_INFO_ERROR",N="FETCH_INFO";var R=function(e){var t=e.payload,r=e.qid;return{type:S,payload:t,qid:r}},q=function(e){return{type:k,payload:e}},T={questions:null,loading:!1,error:null,type:null},C="SET_QUESTIONS",U="SET_QUESTIONS_ERROR",I="SET_QUESTIONS_LOAD",F="SET_QUESTIONS_TYPE",L="SET_QUESTIONS_RESET",z="FETCH_QUESTIONS";var D=function(e){return{type:C,payload:e}},B=function(e){return{type:U,payload:e}},Q=function(e){return{type:F,payload:e}},H=function(e){var t=e.value,r=e.typeUrl;return{type:z,value:t,typeUrl:r}},M=r(8),P=r.n(M),A=r(7),X=r(20),J=P.a.mark(G),K=P.a.mark(W),V=function(e){return"https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=".concat(encodeURIComponent(e),"&site=stackoverflow")},Y=function(){var e=Object(X.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(V(t)).then((function(e){return e.json()})).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function G(e){var t,r,n,c,a,s;return P.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(A.d)((i=e.q,{type:p,payload:i}));case 2:return o.next=4,Object(A.d)(m(!0));case 4:return o.next=6,Object(A.b)(Y,e.q);case 6:if(t=o.sent,r=t.items,n=t.error_id,c=t.error_message,a=t.error_name,s={error_id:n,error_message:c,error_name:a},!r){o.next=14;break}return o.next=12,Object(A.d)(_(r));case 12:o.next=16;break;case 14:return o.next=16,Object(A.d)(y(s));case 16:case"end":return o.stop()}var i}),J)}function W(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.e)(v,G);case 2:case"end":return e.stop()}}),K)}var Z=P.a.mark(re),$=P.a.mark(ne),ee=function(e,t){return"tags"===t?"https://api.stackexchange.com/2.2/tags/".concat(e,"/faq?site=stackoverflow"):"https://api.stackexchange.com/2.2/users/".concat(e,"/questions?order=desc&sort=activity&site=stackoverflow")},te=function(){var e=Object(X.a)(P.a.mark((function e(t,r){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(ee(t,r)).then((function(e){return e.json()})).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();function re(e){var t,r,n,c,a,s;return P.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(A.d)({type:I,payload:!0});case 2:return o.next=4,Object(A.d)(Q(e.typeUrl));case 4:return o.next=6,Object(A.b)(te,e.value,e.typeUrl);case 6:if(t=o.sent,r=t.items,n=t.error_id,c=t.error_message,a=t.error_name,s={error_id:n,error_message:c,error_name:a},!r){o.next=14;break}return o.next=12,Object(A.d)(D(r));case 12:o.next=16;break;case 14:return o.next=16,Object(A.d)(B(s));case 16:case"end":return o.stop()}}),Z)}function ne(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.e)(z,re);case 2:case"end":return e.stop()}}),$)}var ce=P.a.mark(ie),ae=P.a.mark(ue),se=function(e){return"https://api.stackexchange.com/2.2/questions/".concat(e,"/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody")},oe=function(){var e=Object(X.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(se(t)).then((function(e){return e.json()})).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ie(e){var t,r,n,c,a,s;return P.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(A.d)({type:E,payload:!0});case 2:return o.next=4,Object(A.b)(oe,e.qid);case 4:if(t=o.sent,r=t.items,n=t.error_id,c=t.error_message,a=t.error_name,s={error_id:n,error_message:c,error_name:a},!r){o.next=12;break}return o.next=10,Object(A.d)(R({payload:r,qid:e.qid}));case 10:o.next=14;break;case 12:return o.next=14,Object(A.d)(q(s));case 14:case"end":return o.stop()}}),ce)}function ue(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.e)(N,ie);case 2:case"end":return e.stop()}}),ae)}var de=P.a.mark(le);function le(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.c)(W),Object(A.c)(ne),Object(A.c)(ue)]);case 2:case"end":return e.stop()}}),de)}var je=Object(j.a)(),be=Object(l.b)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,text:t.payload});case x:return Object(b.a)(Object(b.a)({},e),{},{loading:!0,error:null});case f:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload});case h:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,users:t.payload})}return e},infoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(b.a)(Object(b.a)({},e),{},{loading:!0,error:null});case k:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload});case S:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,info:Object(b.a)(Object(b.a)({},e.info),{},Object(g.a)({},t.qid,t.payload))})}return e},questionsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(b.a)(Object(b.a)({},e),{},{loading:!0,error:null});case F:return Object(b.a)(Object(b.a)({},e),{},{type:t.payload});case U:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload});case C:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,questions:t.payload});case L:return Object(b.a)({},T)}return e}}),Oe=(window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c)(Object(l.a)(je)),he=Object(l.d)(be,Oe);je.run(le);var pe=r(15),xe={inputSearch:{},searchButton:{ru:"\u0418\u0441\u043a\u0430\u0442\u044c"}},fe=r(2),ve=function(){var e=Object(c.c)((function(e){return[e.userReducer.users,e.userReducer.loading,e.userReducer.error,e.userReducer.text]})),t=Object(pe.a)(e,4),r=(t[0],t[1]),n=t[2],s=t[3],o=Object(d.f)(),i=Object(c.b)(),u=Object(a.useState)(s||"how to sort js object"),l=Object(pe.a)(u,2),j=l[0],b=l[1];return Object(fe.jsxs)("div",{className:"layout",children:[r?Object(fe.jsx)("div",{className:"loading"}):Object(fe.jsxs)("form",{className:"searchBlock",children:[Object(fe.jsx)("input",{className:"searchBlock__input",value:j,onChange:function(e){b(e.target.value)}}),Object(fe.jsx)("button",{className:"searchBlock__button",type:"submit",onClick:function(){j&&(i(function(e){var t=e.q;return{type:v,q:t}}({q:j})),o.push("/result"))},children:xe.searchButton.ru})]}),(null===n||void 0===n?void 0:n.error_id)&&Object(fe.jsx)("div",{children:Object(fe.jsxs)("div",{className:"error",children:[Object(fe.jsx)("p",{children:"\u041e\u0428\u0418\u0411\u041a\u0410 ".concat(n.error_id)}),Object(fe.jsx)("p",{children:n.error_message})]})})]})},_e=function(){var e=Object(c.c)((function(e){return[e.userReducer.users,e.userReducer.loading,e.userReducer.error]})),t=Object(pe.a)(e,3),r=t[0],n=t[1],o=t[2],i=Object(c.c)((function(e){return[e.questionsReducer.questions,e.questionsReducer.loading,e.questionsReducer.error,e.questionsReducer.type]})),d=Object(pe.a)(i,4),l=d[0],j=d[1],O=d[2],h=d[3],p=Object(c.b)(),x=function(e){p(H({value:e.currentTarget.dataset.userid,typeUrl:"ids"}))},f=function(e){p(H({value:e.currentTarget.dataset.tag,typeUrl:"tags"}))},v={name:["owner.display_name","empt"],title:["title","empt"]},_=Object(a.useState)(v),m=Object(pe.a)(_,2),y=m[0],w=m[1],S=function(e,t){var r=y[e][0];w(Object(b.a)(Object(b.a)({},v),{},Object(g.a)({},e,[r,t])))},E=s.a.useMemo((function(){var e=Object.values(y).find((function(e){return"empt"!==e[1]}))||[],t=e[0],n=e[1],c=(t||"title").split(".").reverse(),a=c[0];return n?r.slice().sort((function(e,t){var r=c[1]?e[c[1]]:e,s=c[1]?t[c[1]]:t;return r[a].toLowerCase()<s[a].toLowerCase()?"az"===n?-1:1:r[a].toLowerCase()>s[a].toLowerCase()?"az"===n?1:-1:0})):r}),[r,y]),k={empt:{change:"az",text:"-"},az:{change:"za",text:"(a-z)"},za:{change:"az",text:"(z-a)"}},N=function(e){return!!(null===e||void 0===e?void 0:e.error_id)&&Object(fe.jsx)("div",{children:Object(fe.jsxs)("div",{className:"error",children:[Object(fe.jsx)("p",{children:"\u041e\u0428\u0418\u0411\u041a\u0410 ".concat(e.error_id)}),Object(fe.jsx)("p",{children:e.error_message})]})})},R=N(o),q=N(O);return!r&&!n||R?Object(fe.jsx)(u.b,{to:"search/",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u0438\u0441\u043a\u0430"}):Object(fe.jsx)("div",{className:"layout",children:Object(fe.jsxs)("div",{className:"pageContent ".concat(r&&l?"":"disabled_"),children:[Object(fe.jsxs)("div",{className:"pageContent__item",children:[R,n&&Object(fe.jsx)("div",{className:"loading"}),r&&Object(fe.jsxs)("table",{className:"table",children:[Object(fe.jsx)("caption",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(fe.jsxs)("tr",{children:[Object(fe.jsxs)("th",{children:["\u0410\u0432\u0442\u043e\u0440 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",Object(fe.jsx)("span",{tabIndex:0,role:"button",onKeyDown:function(){console.log("12")},onClick:function(){var e=k[y.name[1]].change;S("name",e)},children:k[y.name[1]].text})]}),Object(fe.jsxs)("th",{children:["\u0422\u0435\u043c\u0430",Object(fe.jsx)("span",{tabIndex:0,role:"button",onKeyDown:function(){console.log("123")},onClick:function(){var e=k[y.title[1]].change;S("title",e)},children:k[y.title[1]].text})]}),Object(fe.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432"}),Object(fe.jsx)("th",{children:"\u0422\u0435\u0433\u0438"})]}),Object(fe.jsx)("tbody",{children:E&&(null===E||void 0===E?void 0:E.map((function(e){var t;return Object(fe.jsxs)("tr",{children:[Object(fe.jsx)("td",{"data-label":"\u0410\u0432\u0442\u043e\u0440 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",children:Object(fe.jsx)("button",{onClick:x,type:"button","data-name":e.owner.display_name,"data-userid":e.owner.user_id,children:e.owner.display_name})}),Object(fe.jsx)("td",{"data-label":"\u0422\u0435\u043c\u0430",children:Object(fe.jsx)(u.b,{to:"info/".concat(e.question_id),children:e.title})}),Object(fe.jsx)("td",{"data-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432",children:Object(fe.jsx)(u.b,{to:"info/".concat(e.question_id),children:e.answer_count})}),Object(fe.jsx)("td",{"data-label":"\u0422\u0435\u0433\u0438",children:null===(t=e.tags)||void 0===t?void 0:t.map((function(e){return Object(fe.jsx)("button",{onClick:f,type:"button","data-tag":e,children:e},e)}))})]},e.question_id)})))})]})]}),(l||j||q)&&Object(fe.jsxs)("div",{className:"pageContent__item",children:[q,j&&Object(fe.jsx)("div",{className:"loading"}),l&&Object(fe.jsxs)("table",{className:"table",children:[Object(fe.jsx)("caption",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 ".concat(h)}),Object(fe.jsxs)("tbody",{children:[Object(fe.jsxs)("tr",{children:[Object(fe.jsx)("th",{children:"\u0410\u0432\u0442\u043e\u0440 \u0432\u043e\u043f\u0440\u043e\u0441\u0430"}),Object(fe.jsx)("th",{children:"\u0422\u0435\u043c\u0430"}),Object(fe.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432"}),Object(fe.jsx)("th",{children:"\u0422\u0435\u0433\u0438"})]}),l.map((function(e){var t;return Object(fe.jsxs)("tr",{children:[Object(fe.jsx)("td",{"data-label":"\u0410\u0432\u0442\u043e\u0440 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",children:e.owner.display_name}),Object(fe.jsx)("td",{"data-label":"\u0422\u0435\u043c\u0430",children:e.title}),Object(fe.jsx)("td",{"data-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432",children:e.answer_count}),Object(fe.jsx)("td",{"data-label":"\u0422\u0435\u0433\u0438",children:null===(t=e.tags)||void 0===t?void 0:t.map((function(e){return Object(fe.jsx)("span",{children:"".concat(e," ")},e)}))})]},e.question_id)}))]})]})]})]})})},me=function(){var e,t=Object(d.g)().qid,r=Object(c.c)((function(e){return[e.infoReducer.info,e.infoReducer.loading,e.infoReducer.error]})),n=Object(pe.a)(r,3),s=n[0],o=n[1],i=n[2],u=Object(c.b)();if(Object(a.useEffect)((function(){s[t]||u(function(e){var t=e.qid;return{type:N,qid:t}}({qid:t}))}),[]),o)return Object(fe.jsx)("div",{className:"loading"});if(!t)return Object(fe.jsx)("div",{children:"\u041d\u0435\u0442 \u043d\u043e\u043c\u0435\u0440\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u0430 \u0432 \u0443\u0440\u043b\u0435"});if(null===i||void 0===i?void 0:i.error_id)return Object(fe.jsx)("div",{children:Object(fe.jsxs)("div",{className:"error",children:[Object(fe.jsx)("p",{children:"\u041e\u0428\u0418\u0411\u041a\u0410 ".concat(i.error_id)}),Object(fe.jsx)("p",{children:i.error_message})]})});var l=null===(e=s[t])||void 0===e?void 0:e.length;return Object(fe.jsx)("div",{className:"layout",children:Object(fe.jsxs)("div",{className:"info",children:[Object(fe.jsxs)("div",{className:"info__top",children:[Object(fe.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0442\u0432\u0435\u0442\u043e\u0432"}),0===l&&Object(fe.jsx)("h3",{children:"\u041d\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u043e\u0432"})]}),Object(fe.jsx)("div",{className:"info__answers",children:s[t]&&s[t].map((function(e,t){return Object(fe.jsxs)("div",{className:"info__answ",children:[Object(fe.jsx)("h3",{children:"".concat(t+1,"/").concat(l)}),!!e.is_accepted&&Object(fe.jsx)("div",{className:"info__answ__check"}),Object(fe.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]},e.answer_id)}))})]})})};i.a.render(Object(fe.jsx)(s.a.StrictMode,{children:Object(fe.jsx)(u.a,{children:Object(fe.jsx)(c.a,{store:he,children:Object(fe.jsxs)(d.c,{children:[Object(fe.jsx)(d.a,{exact:!0,path:"/search",children:Object(fe.jsx)(ve,{})}),Object(fe.jsx)(d.a,{exact:!0,path:"/result",children:Object(fe.jsx)(_e,{})}),Object(fe.jsx)(d.a,{exact:!0,path:"/info/:qid?",children:Object(fe.jsx)(me,{})})]})})})}),document.getElementById("root")),n()}},[[46,1,2]]]);
//# sourceMappingURL=main.7af5202c.chunk.js.map