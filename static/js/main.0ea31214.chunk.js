(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(74),c=a.n(l),o=(a(89),a(91),a(27)),i=a(1),m=(a(110),a(62),[{id:1,imgsrc:"https://image.shutterstock.com/image-vector/vector-cartoon-drawing-beautiful-summer-260nw-667705354.jpg",price:"\u20b9 100/-",link:"Deharadoon"},{id:2,imgsrc:"https://image.shutterstock.com/image-vector/vector-cartoon-drawing-beautiful-summer-260nw-667705354.jpg",price:"\u20b9 100/-",link:"Deharadoon"},{id:3,imgsrc:"https://img.freepik.com/premium-photo/long-exposure-image-dramatic-sky-seascape-with-rock-sunset-scenery-background-amazing-light-nature-landscape_34362-2551.jpg? w=430",price:"\u20b9 150/-",link:"Delhi"},{id:4,imgsrc:"https://thumbs.dreamstime.com/z/christmas-winter-background-funny-snowman-gift-box-fir-tree-branches-wintery-scenery-fairy-holiday-card-198834988.jpg",price:"\u20b9 200/-",link:"Meerut"},{id:5,imgsrc:"https://thumbs.dreamstime.com/z/christmas-winter-background-funny-snowman-gift-box-fir-tree-branches-wintery-scenery-fairy-holiday-card-198834988.jpg",price:"\u20b9 6600/-",link:"Meerut"},{id:6,imgsrc:"https://image.shutterstock.com/image-vector/vector-cartoon-drawing-beautiful-summer-260nw-667705354.jpg",price:"\u20b9 100/-",link:"Deharadoon"}]),u=a(7);var s=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:e.imgsrc}),r.a.createElement("h1",{className:e.cls},e.name),e.price,r.a.createElement("h1",null,l),r.a.createElement("button",{onClick:function(){}},"AddCart"),r.a.createElement("button",{onClick:function(){c(l+1)}},"+"),r.a.createElement("button",{onClick:function(){c(l-1)}},"-")))},E=function(){return r.a.createElement(r.a.Fragment,null,m.map(function(e){if("\u20b9 100/-"==e.price){console.log(e);var t=e.id,a=e.imgsrc,n=e.link,l=e.price;return r.a.createElement(s,{key:t,imgsrc:a,name:n,price:l})}}))},p=function(){return r.a.createElement(r.a.Fragment,null,m.map(function(e){if("Delhi"==e.link)return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{key:e.id,imgsrc:e.imgsrc,name:e.link,price:e.price}))}))},h=function(){return r.a.createElement(r.a.Fragment,null,m.map(function(e){if("Delhi"!=e.link){var t=e.id,a=e.imgsrc,n=e.link,l=e.price;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{key:t,imgsrc:a,name:n,price:l}))}}))},d=function(){return r.a.createElement(r.a.Fragment,null,m.map(function(e){if("Deharadoon"==e.link||"Delhi"==e.link){var t=e.id,a=e.imgsrc,n=e.link,l=e.price;return r.a.createElement(s,{key:t,imgsrc:a,name:n,price:l})}}))};var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null," Offerlist"),r.a.createElement("div",{className:"card-container"},r.a.createElement(E,null)),r.a.createElement("hr",null),r.a.createElement("h3",null,"My Fav List"),r.a.createElement("div",{className:"card-container"},r.a.createElement(p,null)),r.a.createElement("hr",null),r.a.createElement("h3",null,"My UnFav List"),r.a.createElement("div",{className:"card-container"},r.a.createElement(h,null)),r.a.createElement("h3",null," Watchlist"),r.a.createElement("div",{className:"card-container"},r.a.createElement(d,null)))},g=function(){var e=(new Date).toLocaleTimeString(),t=Object(n.useState)(e),a=Object(u.a)(t,2),l=a[0],c=a[1];return setInterval(function(){var e=(new Date).toLocaleTimeString();c(e)},1e3),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,l),r.a.createElement("button",{onClick:function(){var e=(new Date).toLocaleTimeString();c(e)}},"Time"))},v=a(11),b=a(160),y=a(171),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"imagess"},r.a.createElement("img",{src:"https://cdn.worldvectorlogo.com/logos/react-1.svg"})))},x=function(e){var t=Object(n.useContext)(j);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("p",null," Welcome Amit",t,e.lastname," ")))},k=function(e){return r.a.createElement("div",{className:"topbar"},r.a.createElement(w,null),r.a.createElement(x,{lastname:e.lastname}))},j=Object(n.createContext)(),C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.Provider,{value:"Kumar"},r.a.createElement(k,{lastname:"mall"})),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(o.b,{exact:!0,to:"/bootstrap"},"Bootstrap"),r.a.createElement(o.b,{exact:!0,to:"/matarialui"},"Matarialui"),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/time"},"Time")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/todo"},"Todo")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/fav"},"Fav")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/pnr"},"Check PNR")))))},O=function(){return r.a.createElement("p",null," ",r.a.createElement("marquee",null,"Powered By Amit Kumar Mall Boom Guys!!!!!!"))},L=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([""]),o=Object(u.a)(c,2),i=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(b.a,{spacing:2,direction:"row"},r.a.createElement(y.a,{variant:"text"},"Text"),r.a.createElement(y.a,{variant:"contained"},"Contained"),r.a.createElement(y.a,{variant:"outlined"},"Outlined")),r.a.createElement("div",{className:"hed"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Todo List"),r.a.createElement("input",{type:"text",placeholder:"Type your product",onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{onClick:function(){console.log("ki"),m(function(e){return console.log(e),[].concat(Object(v.a)(e),[a])})}}," + "),r.a.createElement("ol",null,i.map(function(e){return r.a.createElement("li",null,e)})))),r.a.createElement(O,null))},N=function(){return r.a.createElement("div",{className:"banner"},r.a.createElement(g,null))},F=a(5),S=a(9),T=a(29),P=function(e){var t="";void 0!=e.color&&(t=e.color);var a=Object(n.useState)({fname:"",lname:"",mobile:"",email:"",Country:"",City:"",language:""}),l=Object(u.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),s=m[0],E=m[1];Object(n.useEffect)(function(){console.log(c.mobile.length),c.mobile.length>10&&E("enter 10 digit only")},[c.mobile]);var p=Object(n.useState)(),h=Object(u.a)(p,2),d=h[0],f=h[1],g=function(e){var t=e.target.value,a=e.target.name;e.target.City,e.target.language,o(function(e){return Object(S.a)({},e,Object(F.a)({},a,t))})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:"heding "+t},r.a.createElement("h1",null,"Hello",e.name,d," "),r.a.createElement("br",null),r.a.createElement("label",{for:""},"Name:"),r.a.createElement("input",{type:"text",placeholder:"Type your name ",name:"fname",onChange:g}),r.a.createElement("br",null),r.a.createElement("label",{for:""},"Last Name:"),r.a.createElement("input",{type:"text",placeholder:"Type your last name ",name:"lname",onChange:g}),r.a.createElement("br",null),s,r.a.createElement("label",{for:""},"Mobile No:"),r.a.createElement("input",{type:"tel",placeholder:"+91 ",name:"mobile",onChange:g}),r.a.createElement("br",null),r.a.createElement("label",{for:""},"Email:"),r.a.createElement(T.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement("input",{type:"text",placeholder:"Type your email ",name:"email",onChange:g}),r.a.createElement("br",null),r.a.createElement("label",{for:"country"},"Select a country:"),r.a.createElement("select",{id:"Country",name:"Country",onChange:g},r.a.createElement("option",{value:"India"},"India"),r.a.createElement("option",{value:"Poland"},"Poland"),r.a.createElement("option",{value:"America"},"America"),r.a.createElement("option",{value:"Japan"},"Japan")),r.a.createElement("label",{for:"City"},"Select a City:"),r.a.createElement("div",{onChange:g},r.a.createElement("input",{type:"radio",id:"Meerut",name:"City",value:"Meerut"}),r.a.createElement("label",{for:"meerut"},"Meerut"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"Modinagar",name:"City",value:"Modinagar"}),r.a.createElement("label",{for:"modinagar"},"Modinagar"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"Lucknow",name:"City",value:"Lucknow"}),r.a.createElement("label",{for:"lucknow"},"Lucknow"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"Kanpur",name:"City",value:"Kanpur"}),r.a.createElement("label",{for:"kanpur"},"Kanpur"),r.a.createElement("br",null)),"  ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{for:"language"},"Select a Language:"),r.a.createElement("div",{onChange:g},r.a.createElement("input",{type:"checkbox",id:"l",name:"language",value:"Hindi"}),r.a.createElement("label",{for:"language"},"Hindi"),r.a.createElement("br",null),r.a.createElement("input",{type:"checkbox",id:"l",name:"language",value:"English"}),r.a.createElement("label",{for:"language"},"English"),r.a.createElement("br",null)),r.a.createElement("button",{onClick:function(){f([c.fname,c.lname,c.mobile,c.email,c.Country,c.City,c.language])}}," click ")),r.a.createElement(O,null))};var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(N,null),r.a.createElement(O,null))},G=a(59),_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:"heding"},r.a.createElement("h1",null,"Hello Bootstrap")),r.a.createElement(T.a,null,r.a.createElement(T.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(T.a.Label,null,"Email address"),r.a.createElement(T.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement(T.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(T.a.Group,{className:"mb-3",controlId:"formBasicPassword"},r.a.createElement(T.a.Label,null,"Password"),r.a.createElement(T.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(T.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"},r.a.createElement(T.a.Check,{type:"checkbox",label:"Check me out"})),r.a.createElement(G.a,{variant:"primary",type:"submit"},"Submit")),r.a.createElement(O,null))},A=a(177),D=a(181),M=a(180),B=a(176),R=a(178),H=a(179),K=a(174),z=a(173),J=a(175),W=a(10),X=Object(W.a)(K.a)(function(e){var t=e.theme;return Object(S.a)({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2,{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:"heding"},r.a.createElement("h1",null,"Hello Matarialui")),r.a.createElement(J.a,{sx:{flexGrow:1}},r.a.createElement(z.a,{container:!0,spacing:2},r.a.createElement(z.a,{item:!0,xs:6},r.a.createElement(X,null,"xs=6")),r.a.createElement(z.a,{item:!0,xs:6},r.a.createElement(X,null,"xs=6")),r.a.createElement(z.a,{item:!0,xs:4},r.a.createElement(X,null,"xs=4")),r.a.createElement(z.a,{item:!0,xs:8},r.a.createElement(X,null,"xs=8")))),r.a.createElement(y.a,{variant:"text"},"Text"),r.a.createElement(y.a,{variant:"contained",color:"success"},"Contained"),r.a.createElement(y.a,{variant:"outlined"},"Outlined"),r.a.createElement(y.a,{variant:"contained",disableElevation:!0},"Boom Guy"),r.a.createElement(y.a,{variant:"contained",size:"small",disabled:!0},"Disabled"),r.a.createElement("span",{style:{cursor:"not-allowed"}},r.a.createElement(y.a,{disabled:!0},"disabled")),r.a.createElement(B.a,{component:K.a},r.a.createElement(A.a,{sx:{minWidth:650},size:"small","aria-label":"simple table"},r.a.createElement(R.a,null,r.a.createElement(H.a,null,r.a.createElement(M.a,null,"Amit (100g serving)"),r.a.createElement(M.a,{align:"right"},"Calories"),r.a.createElement(M.a,{align:"right"},"Fat\xa0(g)"),r.a.createElement(M.a,{align:"right"},"Carbs\xa0(g)"),r.a.createElement(M.a,{align:"right"},"Protein\xa0(g)"))),r.a.createElement(D.a,null,r.a.createElement(H.a,null,r.a.createElement(M.a,{component:"th",scope:"row"},"hello"),r.a.createElement(M.a,{align:"right"},"8"),r.a.createElement(M.a,{align:"right"},"oo"),r.a.createElement(M.a,{align:"right"},"hhh"),r.a.createElement(M.a,{align:"right"},"pp")),r.a.createElement(H.a,null,r.a.createElement(M.a,{component:"th",scope:"row"},"hello"),r.a.createElement(M.a,{align:"right"},"8"),r.a.createElement(M.a,{align:"right"},"oo"),r.a.createElement(M.a,{align:"right"},"hhh"),r.a.createElement(M.a,{align:"right"},"pp"))))),r.a.createElement(O,null))},U=a(23),Y=a(44),Q=a.n(Y);function V(){V=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(O){o=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof s?t:s,l=Object.create(r.prototype),c=new k(n||[]);return l._invoke=function(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return C()}for(a.method=r,a.arg=l;;){var c=a.delegate;if(c){var o=y(c,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=m(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,c),l}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(O){return{type:"throw",arg:O}}}e.wrap=i;var u={};function s(){}function E(){}function p(){}var h={};o(h,r,function(){return this});var d=Object.getPrototypeOf,f=d&&d(d(j([])));f&&f!==t&&a.call(f,r)&&(h=f);var g=p.prototype=s.prototype=Object.create(h);function v(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(r,l){function c(){return new t(function(n,c){!function n(r,l,c,o){var i=m(e[r],e,l);if("throw"!==i.type){var u=i.arg,s=u.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then(function(e){n("next",e,c,o)},function(e){n("throw",e,c,o)}):t.resolve(s).then(function(e){u.value=e,c(u)},function(e){return n("throw",e,c,o)})}o(i.arg)}(r,l,n,c)})}return n=n?n.then(c,c):c()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=m(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:C}}function C(){return{value:void 0,done:!0}}return E.prototype=p,o(g,"constructor",p),o(p,"constructor",E),E.displayName=o(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,o(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(b.prototype),o(b.prototype,l,function(){return this}),e.AsyncIterator=b,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var c=new b(i(t,a,n,r),l);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},v(g),o(g,c,"Generator"),o(g,r,function(){return this}),o(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var o=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(o&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;x(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var Z=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(u.a)(c,2),i=o[0],m=o[1];Object(n.useEffect)(function(){function e(){return(e=Object(U.a)(V().mark(function e(){var t;return V().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a));case 2:t=e.sent,m(t.data.name);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}a>0?function(){e.apply(this,arguments)}():m(""),Q.a.request({method:"GET",url:"https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/2607462229",headers:{"X-RapidAPI-Key":"0c4ce669cemsh5c0894e867dd4e4p1a3960jsn4c9f07535bd4","X-RapidAPI-Host":"pnr-status-indian-railway.p.rapidapi.com"}}).then(function(e){console.log(e.data)}).catch(function(e){console.error(e)})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," ",a,"  ",i," "),r.a.createElement("select",{value:a,onChange:function(e){e.target.value>0?l(e.target.value):l("")}},r.a.createElement("option",{value:"0"}," please select"),r.a.createElement("option",{value:"1"}," 1 "),r.a.createElement("option",{value:"2"}," 2"),r.a.createElement("option",{value:"3"}," 3 "),r.a.createElement("option",{value:"4"}," 4 "),r.a.createElement("option",{value:"5"}," 5 "),r.a.createElement("option",{value:"6"}," 6 ")))},$=function(e){if(console.log(e.trainres),void 0!=e.trainres)return 1==e.trainres.status?r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Platform"),r.a.createElement("th",null,"Train Name"),r.a.createElement("th",null,"Boarding Date"),r.a.createElement("th",null,"From "),r.a.createElement("th",null," To"),r.a.createElement("th",null," Reserved Upto")),r.a.createElement("tr",null,r.a.createElement("td",null,e.trainres.data.boardingInfo.platform),r.a.createElement("td",null,e.trainres.data.trainInfo.name),r.a.createElement("td",null," ",e.trainres.data.boardingInfo.arrivalTime),r.a.createElement("td",null,e.trainres.data.boardingInfo.stationName),r.a.createElement("td",null," To"),r.a.createElement("td",null," Reserved Upto"))),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"s.no"),r.a.createElement("th",null,"currentCoach"),r.a.createElement("th",null,"Berth"),r.a.createElement("th",null,"Status")),e.trainres.data.passengerInfo.map(function(e,t){return console.log(e),r.a.createElement("tr",null,r.a.createElement("td",null,"Passenger ",t+1),r.a.createElement("td",null,e.currentCoach),r.a.createElement("td",null,e.currentBerthNo),r.a.createElement("td",null,"CNF"))})),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"ArrivalTime"),r.a.createElement("td",null,"DepartureTime"),r.a.createElement("td",null,"TrainRoutes"),r.a.createElement("td",null,"StationCode"),r.a.createElement("td",null,"Distance")),e.trainres.data.trainRoutes.map(function(e){return console.log(e),r.a.createElement("tr",null,r.a.createElement("td",null,e.arrivalTime),r.a.createElement("td",null,e.departureTime),r.a.createElement("td",null,e.stationName),r.a.createElement("td",null,e.stationCode),r.a.createElement("td",null,e.distance))}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," ",e.trainres.error))},ee=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(u.a)(c,2),i=o[0],m=o[1],s=Object(n.useState)(),E=Object(u.a)(s,2),p=E[0],h=E[1],d=Object(n.useState)(),f=Object(u.a)(d,2),g=f[0],v=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Enter PNR No. "),r.a.createElement("input",{type:"number",placeholder:"Enter PNR.",min:"0",value:i,onChange:function(e){m(e.target.value)}}),r.a.createElement("button",{onClick:function(e){m("")}},"Clear "),r.a.createElement("button",{onClick:function(e){l(!0),h("");var t={method:"GET",url:"https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/".concat(i),headers:{"X-RapidAPI-Key":"198fb30f6emsh90efa7b71e9c422p1b4238jsnb019f471ad0a","X-RapidAPI-Host":"pnr-status-indian-railway.p.rapidapi.com"}};console.log(e),Q.a.request(t).then(function(t){console.log(e),console.log("ko"),h(t.data),l(!1)}).catch(function(e){v(e.message),console.error(e),l(!1)})}},"Submit "),r.a.createElement($,{trainres:p}),a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"lod"},"Loading....")):"",r.a.createElement("h2",null,g)))};var te=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/bootstrap",element:r.a.createElement(_,null)}),r.a.createElement(i.b,{exact:!0,path:"/matarialui",element:r.a.createElement(q,null)}),r.a.createElement(i.b,{exact:!0,path:"/www",element:r.a.createElement(N,null)}),r.a.createElement(i.b,{exact:!0,path:"/pnr",element:r.a.createElement(ee,null)}),r.a.createElement(i.b,{exact:!0,path:"/login",element:r.a.createElement(P,{name:"amit",color:"green"})}),r.a.createElement(i.b,{exact:!0,path:"/signup",element:r.a.createElement(P,null)}),r.a.createElement(i.b,{exact:!0,path:"/time",element:r.a.createElement(g,null)}),r.a.createElement(i.b,{exact:!0,path:"/todo",element:r.a.createElement(L,null)}),r.a.createElement(i.b,{exact:!0,path:"/fav",element:r.a.createElement(f,null)}),r.a.createElement(i.b,{exact:!0,path:"/todo",element:r.a.createElement(L,null)}),r.a.createElement(i.b,{exact:!0,path:"/",element:r.a.createElement(I,null)}),r.a.createElement(i.b,{exact:!0,path:"*",element:r.a.createElement(i.a,{to:"/",replace:!0})}),r.a.createElement(i.b,{exact:!0,path:"/home",element:r.a.createElement(I,null)}))))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(te,null))},62:function(e,t,a){},81:function(e,t,a){e.exports=a(140)}},[[81,2,1]]]);
//# sourceMappingURL=main.0ea31214.chunk.js.map