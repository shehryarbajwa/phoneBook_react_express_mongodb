(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){e.exports=n(49)},25:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),l=(n(25),n(2)),u=n(6),i=n(7),s=function(e){var t=e.name,n=e.number,a=e.handleDelete;return r.a.createElement("li",{className:"phone"},t," no: ",n," ",r.a.createElement("button",{onClick:a},"Remove"," ",r.a.createElement(u.a,{icon:i.a})))},m=n(4),b=n.n(m),f="/api/persons",p=function(){return b.a.get(f).then((function(e){return e.data}))},d=function(e){return b.a.post(f,e).then((function(e){return e.data}))},h=function(e,t){return b.a.delete("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},v=function(e){"Bearer ".concat(e)},E=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},O=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("enter a name"),s=Object(l.a)(o,2),m=s[0],b=s[1],f=Object(a.useState)("XXX-XXX-XXXX"),p=Object(l.a)(f,2),h=p[0],v=p[1],E=Object(a.useState)("some error happened..."),O=Object(l.a)(E,2),j=(O[0],O[1]),g=Object(a.useState)(!1),S=Object(l.a)(g,2),w=(S[0],S[1]);return r.a.createElement("form",null,r.a.createElement("div",{className:"form-name"},r.a.createElement("label",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{value:m,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",{className:"form-number"},r.a.createElement("label",null,"Number"),r.a.createElement("br",null),r.a.createElement("input",{value:h,onChange:function(e){v(e.target.value)}})),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{onClick:function(e){e.preventDefault();var t={name:m,id:n.length+1,number:h};n.map((function(e){return e.name===t.name?(w(!0),void alert("".concat(m," is already added to phonebook"))):c(n.concat(t))}));d(t).then((function(e){c(n.concat(e))})).catch((function(e){j(e.response.data)})),b(""),v("")}},r.a.createElement(u.a,{icon:i.b}))))},j=n(19),g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("some error happened..."),u=Object(l.a)(o,2),i=(u[0],u[1]),m=Object(a.useState)(!1),b=Object(l.a)(m,2);b[0],b[1];return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(s,{key:e.id,name:e.name,number:e.number,handleDelete:function(){return function(e){if(window.confirm("Are you sure you want to delete this person?")){"http://localhost:3001/persons/".concat(e);var t=n.find((function(t){return t.id===e})),a=Object(j.a)({},t);h(e,a).then((function(e){c(n.filter((function(e){return e.id!==a.id}))),i("Note ".concat(a.name," was already removed from the phoneBook")),setTimeout((function(){i(null)}),5e3)})).catch((function(t){alert("This contact with ".concat(e," was already deleted"))}))}}(e.id)}})})))},S=n(5),w=n.n(S),y={login:function(e){var t;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.awrap(b.a.post("/api/login",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))}},k=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),i=u[0],s=u[1],m=Object(a.useState)(null),b=Object(l.a)(m,2),f=(b[0],b[1]),p=Object(a.useState)("some error happened..."),d=Object(l.a)(p,2),h=(d[0],d[1]),v=Object(a.useState)(!1),E=Object(l.a)(v,2),O=(E[0],E[1],function(e){var t;return w.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,w.a.awrap(y.login({username:n,password:i}));case 4:t=a.sent,window.localStorage.setItem("loggedPhonebookUser",JSON.stringify(t)),y.setToken(t.token),f(t),c(),s(""),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),h("wrong credentials"),setTimeout((function(){h(null)}),5e3);case 16:console.log("logging in with",n,i);case 17:case"end":return a.stop()}}),null,null,[[1,12]])});return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:O},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:n,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:i,name:"Password",onChange:function(e){var t=e.target;return s(t.value)}})),r.a.createElement("button",{type:"submit"},"login")))},N=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"PhoneBook app by Shehryar Bajwa"))},X=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)("some error happened..."),o=Object(l.a)(c,2),u=o[0],i=(o[1],Object(a.useState)(!1)),s=Object(l.a)(i,2),m=s[0],b=s[1],f=Object(a.useState)(null),d=Object(l.a)(f,2),h=d[0],j=d[1];return Object(a.useEffect)((function(){p().then((function(e){n(e)})),b(!1)}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);j(t),v(t)}}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),m?r.a.createElement(E,{message:u}):null,null===h?r.a.createElement(k,null):r.a.createElement("div",null,r.a.createElement("p",null,h.name," logged in"),r.a.createElement(O,null)),r.a.createElement("h2",null,"People"),r.a.createElement(g,null),r.a.createElement(N,null))};o.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.17c50736.chunk.js.map