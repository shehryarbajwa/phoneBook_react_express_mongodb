(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){e.exports=n(49)},25:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),l=(n(25),n(2)),u=n(6),s=n(7),i=function(e){var t=e.name,n=e.number,a=e.handleDelete;return r.a.createElement("li",{className:"phone"},t," no: ",n," ",r.a.createElement("button",{onClick:a},"Remove"," ",r.a.createElement(u.a,{icon:s.a})))},m=n(4),b=n.n(m),d=n(5),f=n.n(d),p="/api/persons",h=null,E=function(){return f.a.get(p).then((function(e){return e.data}))},v=function(e){var t,n;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={headers:{Authorization:h}},a.next=3,b.a.awrap(f.a.post(p,e,t));case 3:return n=a.sent,a.abrupt("return",n.then((function(e){return e.data})));case 5:case"end":return a.stop()}}))},O=function(e,t){return f.a.delete("".concat(p,"/").concat(e),t).then((function(e){return e.data}))},j=function(e){h="bearer ".concat(e)},g=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},w=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("enter a name"),i=Object(l.a)(o,2),m=i[0],b=i[1],d=Object(a.useState)("XXX-XXX-XXXX"),f=Object(l.a)(d,2),p=f[0],h=f[1],E=Object(a.useState)("some error happened..."),O=Object(l.a)(E,2),j=(O[0],O[1]),g=Object(a.useState)(!1),w=Object(l.a)(g,2),S=(w[0],w[1]);return r.a.createElement("form",null,r.a.createElement("div",{className:"form-name"},r.a.createElement("label",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{value:m,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",{className:"form-number"},r.a.createElement("label",null,"Number"),r.a.createElement("br",null),r.a.createElement("input",{value:p,onChange:function(e){h(e.target.value)}})),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{onClick:function(e){e.preventDefault();var t={name:m,id:n.length+1,number:p};n.map((function(e){return e.name===t.name?(S(!0),void alert("".concat(m," is already added to phonebook"))):c(n.concat(t))}));v(t).then((function(e){c(n.concat(e))})).catch((function(e){j(e)})),b(""),h("")}},r.a.createElement(u.a,{icon:s.b}))))},S=n(19),y=function(e){var t=e.persons,n=e.setPersons,c=Object(a.useState)("some error happened..."),o=Object(l.a)(c,2),u=(o[0],o[1]),s=Object(a.useState)(!1),m=Object(l.a)(s,2);m[0],m[1];return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(i,{key:e.id,name:e.name,number:e.number,handleDelete:function(){return function(e){if(window.confirm("Are you sure you want to delete this person?")){"http://localhost:3001/persons/".concat(e);var a=t.find((function(t){return t.id===e})),r=Object(S.a)({},a);O(e,r).then((function(e){n(t.filter((function(e){return e.id!==r.id}))),u("Person ".concat(r.name," was already removed from the phoneBook")),setTimeout((function(){u(null)}),5e3)})).catch((function(t){alert("This contact with ".concat(e," was already deleted"))}))}}(e.id)}})})))},k=function(e){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(f.a.post("/api/login/",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},C=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,c=e.username,o=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement("input",{value:c,onChange:n})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:o,onChange:a})),r.a.createElement("button",{type:"submit"},"Login")))},P=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(l.a)(n,2),o=c[0],u=c[1],s={display:o?"none":""},i={display:o?"":"none"},m=function(){u(!o)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:m}})),r.a.createElement("div",null,r.a.createElement("div",{style:s},r.a.createElement("button",{onClick:m},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:m},"cancel")))})),X=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),s=u[0],i=u[1],m=Object(a.useState)(null),d=Object(l.a)(m,2),f=(d[0],d[1]),p=Object(a.useState)("some error happened..."),h=Object(l.a)(p,2),E=(h[0],h[1]),v=Object(a.useState)(!1),O=Object(l.a)(v,2),g=(O[0],O[1],Object(a.useState)(!1)),w=Object(l.a)(g,2),S=(w[0],w[1],function(e){var t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,b.a.awrap(k({username:n,password:s}));case 4:t=a.sent,window.localStorage.setItem("loggedPhonebookUser",JSON.stringify(t)),j(t.token),f(t),c(""),i(""),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),E("wrong credentials"),setTimeout((function(){E(null)}),5e3);case 16:case"end":return a.stop()}}),null,null,[[1,12]])});return r.a.createElement("div",null,r.a.createElement(P,{buttonLabel:"login"},r.a.createElement(C,{username:n,password:s,handleUsernameChange:function(e){var t=e.target;return c(t.value)},handlePasswordChange:function(e){var t=e.target;return i(t.value)},handleSubmit:S})))},x=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"PhoneBook app by Shehryar Bajwa"))},N=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("some error happened..."),u=Object(l.a)(o,2),s=u[0],i=(u[1],Object(a.useState)(!1)),m=Object(l.a)(i,2),b=m[0],d=m[1],f=Object(a.useState)(null),p=Object(l.a)(f,2),h=p[0],v=p[1];Object(a.useEffect)((function(){E().then((function(e){c(e)})),d(!1)}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedPhonebookUser");if(e){var t=JSON.parse(e);v(t),j(t.token)}}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),b?r.a.createElement(g,{message:s}):null,null===h?r.a.createElement(X,null):r.a.createElement("div",null,r.a.createElement("p",null,h.name," logged in"),r.a.createElement("button",{onClick:function(){v(!1),window.localStorage.removeItem("loggedPhonebookUser")}},"logout"),r.a.createElement(P,{buttonLabel:"Add new Contact"},r.a.createElement(w,null)),r.a.createElement(P,{buttonLabel:"Existing Contacts"},r.a.createElement("h2",null,"People"),r.a.createElement(y,{persons:n,setPerson:c}))),r.a.createElement(x,null))};o.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.92584517.chunk.js.map