(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){e.exports=n(49)},25:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),l=(n(25),n(2)),u=n(6),s=n(7),i=function(e){var t=e.name,n=e.number,a=e.handleDelete;return r.a.createElement("li",{className:"phone"},t," no: ",n," ",r.a.createElement("button",{onClick:a},"Remove"," ",r.a.createElement(u.a,{icon:s.a})))},m=n(4),b=n.n(m),f=n(5),p=n.n(f),d="/api/persons",h=null,v=function(){return p.a.get(d).then((function(e){return e.data}))},E=function(e){var t,n;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={headers:{Authorization:h}},a.next=3,b.a.awrap(p.a.post(d,e,t));case 3:return n=a.sent,a.abrupt("return",n.then((function(e){return e.data})));case 5:case"end":return a.stop()}}))},O=function(e,t){return p.a.delete("".concat(d,"/").concat(e),t).then((function(e){return e.data}))},j=function(e){h="bearer ".concat(e)},g=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},S=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("enter a name"),i=Object(l.a)(o,2),m=i[0],b=i[1],f=Object(a.useState)("XXX-XXX-XXXX"),p=Object(l.a)(f,2),d=p[0],h=p[1],v=Object(a.useState)("some error happened..."),O=Object(l.a)(v,2),j=(O[0],O[1]),g=Object(a.useState)(!1),S=Object(l.a)(g,2),w=(S[0],S[1]);return r.a.createElement("form",null,r.a.createElement("div",{className:"form-name"},r.a.createElement("label",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{value:m,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",{className:"form-number"},r.a.createElement("label",null,"Number"),r.a.createElement("br",null),r.a.createElement("input",{value:d,onChange:function(e){h(e.target.value)}})),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{onClick:function(e){e.preventDefault();var t={name:m,id:n.length+1,number:d};n.map((function(e){return e.name===t.name?(w(!0),void alert("".concat(m," is already added to phonebook"))):c(n.concat(t))}));E(t).then((function(e){c(n.concat(e))})).catch((function(e){j(e)})),b(""),h("")}},r.a.createElement(u.a,{icon:s.b}))))},w=n(19),k=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("some error happened..."),u=Object(l.a)(o,2),s=(u[0],u[1]),m=Object(a.useState)(!1),b=Object(l.a)(m,2);b[0],b[1];return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(i,{key:e.id,name:e.name,number:e.number,handleDelete:function(){return function(e){if(window.confirm("Are you sure you want to delete this person?")){"http://localhost:3001/persons/".concat(e);var t=n.find((function(t){return t.id===e})),a=Object(w.a)({},t);O(e,a).then((function(e){c(n.filter((function(e){return e.id!==a.id}))),s("Note ".concat(a.name," was already removed from the phoneBook")),setTimeout((function(){s(null)}),5e3)})).catch((function(t){alert("This contact with ".concat(e," was already deleted"))}))}}(e.id)}})})))},y=function(e){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(p.a.post("/api/login/",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},N=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),s=u[0],i=u[1],m=Object(a.useState)(null),f=Object(l.a)(m,2),p=(f[0],f[1]),d=Object(a.useState)("some error happened..."),h=Object(l.a)(d,2),v=(h[0],h[1]),E=Object(a.useState)(!1),O=Object(l.a)(E,2),g=(O[0],O[1],function(e){var t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,b.a.awrap(y({username:n,password:s}));case 4:t=a.sent,window.localStorage.setItem("loggedPhonebookUser",JSON.stringify(t)),console.log("set up localStorage"),console.log(t.token),j(t.token),p(t),c(),i(""),a.next=18;break;case 14:a.prev=14,a.t0=a.catch(1),v("wrong credentials"),setTimeout((function(){v(null)}),5e3);case 18:case"end":return a.stop()}}),null,null,[[1,14]])});return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:g},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:n,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:s,name:"Password",onChange:function(e){var t=e.target;return i(t.value)}})),r.a.createElement("button",{type:"submit"},"login")))},X=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"PhoneBook app by Shehryar Bajwa"))},x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("some error happened..."),u=Object(l.a)(o,2),s=u[0],i=(u[1],Object(a.useState)(!1)),m=Object(l.a)(i,2),b=m[0],f=m[1],p=Object(a.useState)(null),d=Object(l.a)(p,2),h=d[0],E=d[1];Object(a.useEffect)((function(){v().then((function(e){c(e)})),f(!1)}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedPhonebookUser");if(e){var t=JSON.parse(e);E(t),j(t.token)}}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),b?r.a.createElement(g,{message:s}):null,null===h?r.a.createElement(N,null):r.a.createElement("div",null,r.a.createElement("p",null,h.name," logged in"),r.a.createElement("button",{onClick:function(){E(!1),window.localStorage.removeItem("loggedPhonebookUser")}},"logout"),r.a.createElement(S,null)),r.a.createElement("h2",null,"People"),r.a.createElement(k,{persons:n,setPerson:c}),r.a.createElement(X,null))};o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.459e2d18.chunk.js.map