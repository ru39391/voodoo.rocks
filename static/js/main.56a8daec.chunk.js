(window["webpackJsonpvoodoo.rocks"]=window["webpackJsonpvoodoo.rocks"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),s=a(8),l=r.a.createContext(),u=a(20),i=a(42);var m=function(e){var t=e.title,a=e.body,n=e.userId,o=r.a.useContext(l).find((function(e){return e.id===n}));return r.a.createElement(u.a,{md:6,lg:4,className:"d-flex flex-column mb-3"},r.a.createElement(i.a,{className:"flex-grow-1"},r.a.createElement(i.a.Body,{className:"d-flex flex-column"},r.a.createElement(i.a.Title,{className:"text-capitalize text-primary font-weight-bold"},t),r.a.createElement(i.a.Text,{className:"flex-grow-1 text-dark"},a),r.a.createElement(i.a.Link,{href:"#"},o.name))))},f=r.a.createContext(),d=a(41),h=a(43),p=a(21);var v=function(e){var t=e.onUpdatePostList,a=r.a.useContext(f),n=r.a.useContext(l),o=r.a.useState(""),c=Object(s.a)(o,2),i=c[0],m=c[1];return r.a.createElement(d.a,{className:"d-flex justify-content-center mb-4"},r.a.createElement(u.a,{md:6,lg:4,className:"px-0 px-lg-3"},r.a.createElement(h.a,null,r.a.createElement("span",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"\ud83d\udd0e")),r.a.createElement(p.a,{placeholder:"Filter by author...",name:"author",value:i||"",onChange:function(e){var r=e.target.value,o=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));if(m(r),r.split("").length>3)switch(o.length>1){case!0:o=o.map((function(e){return e.id}));var c=a.filter((function(e){return o.find((function(t){return t===e.userId}))}));t({arr:Boolean(c.length)?c:a});break;case!1:t({arr:Boolean(o[0])?a.filter((function(e){return e.userId===o[0].id})):a})}else t({arr:a})}}))))},b=a(22),g=a(23),E=a(25),x=a(24),w=new(function(e){Object(E.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this))._baseUrl=e,n}return Object(g.a)(a,[{key:"_checkResponse",value:function(e,t){return e.ok?e.json():Promise.reject("".concat(t,": ").concat(e.status))}},{key:"getPosts",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/posts")).then((function(t){return e._checkResponse(t,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u043e\u0441\u0442\u043e\u0432")})).then((function(e){return e}))}},{key:"getUsers",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users")).then((function(t){return e._checkResponse(t,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")})).then((function(e){return e}))}}]),a}(r.a.Component))("https://jsonplaceholder.typicode.com"),k=a(39),y=a(40);a(37);var j=function(){var e=r.a.useState([]),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState([]),c=Object(s.a)(o,2),u=c[0],i=c[1],d=r.a.useState([]),h=Object(s.a)(d,2),p=h[0],b=h[1];return r.a.useEffect((function(){Promise.all([w.getUsers(),w.getPosts()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],r=t[1];n(a),i(r),b(r)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(l.Provider,{value:a},r.a.createElement("div",{className:"alert alert-primary border-0 rounded-0 px-0 py-4 mb-0"},r.a.createElement(k.a,null,r.a.createElement(f.Provider,{value:u},r.a.createElement(v,{onUpdatePostList:function(e){var t=e.arr;b(t)}})),r.a.createElement(y.a,null,p.map((function(e){return r.a.createElement(m,{key:e.id,title:e.title,body:e.body,userId:e.userId})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.56a8daec.chunk.js.map