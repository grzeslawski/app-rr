(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,,,,function(e,t,a){e.exports=a(37)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=(a(27),a(7)),m=a(8),u=a(12),o=a(9),p=a(13),s=(a(28),a(40)),d=a(41),E=a(20),h=(a(29),a(14)),f=a.n(h),g=a(16),y=a.n(g),v=a(15),b=a.n(v),j=function(){f.a,y.a,b.a,Math.floor(3*Math.random());return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:f.a,alt:"city"})}}),r.a.createElement(E.a,{path:"/products",render:function(){return r.a.createElement("img",{src:y.a,alt:"city"})}}),r.a.createElement(E.a,{path:"/contact",render:function(){return r.a.createElement("img",{src:b.a,alt:"city"})}}),r.a.createElement(E.a,{path:"/admin",render:function(){return r.a.createElement("img",{src:b.a,alt:"city"})}}),r.a.createElement(E.a,{render:function(){return r.a.createElement("img",{src:f.a,alt:"city"})}})))},k=a(38),x=(a(33),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admin",path:"/admin"}]),w=function(){var e=x.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(k.a,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},N=function(e){return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},e.title),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},e.author),r.a.createElement("p",{style:{fontSize:15}},e.text))},q=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"111Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quo animi distinctio ipsum aspernatur officiis saepe impedit voluptatem ab unde. Repudiandae laborum culpa dolorum quisquam impedit alias velit animi quia. "},{id:3,title:"Czym jest paradoks fermiego",author:"Jan Nowak",text:"222Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quo animi distinctio ipsum aspernatur officiis saepe impedit voluptatem ab unde. Repudiandae laborum culpa dolorum quisquam impedit alias velit animi quia. "},{id:3,title:"Ciemna materia i ciemna energia?",author:"Jan Nowak",text:"333Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quo animi distinctio ipsum aspernatur officiis saepe impedit voluptatem ab unde. Repudiandae laborum culpa dolorum quisquam impedit alias velit animi quia. "}],J=function(){var e=q.map(function(e){return r.a.createElement(N,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},O=a(17),z=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},S=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(z,{id:t.params.id}),r.a.createElement(O.a,{to:"/products"},"Powr\xf3t do list produktu"))},C=(a(34),["car","bike","motorcycle"]),F=function(){var e=C.map(function(e){return r.a.createElement("li",{key:C},r.a.createElement(O.a,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},P=(a(35),a(42)),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({isEmpty:!0})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Npisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107.."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(P.a,{when:!this.state.isEmpty,message:"Masz niewype\u0142nony formularz czy na pewno chcesz opu\u015bci\u0107 stron\u0119"}))}}]),t}(r.a.Component),B=a(39),M=function(){return r.a.createElement(E.a,{render:function(){return r.a.createElement(B.a,{to:"/login"})}})},R=function(){return r.a.createElement("div",null,"nie ma takiej strony")},T=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("br",null),r.a.createElement("button",null,"Zaloguj"))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,component:J}),r.a.createElement(E.a,{path:"/products",component:F}),r.a.createElement(E.a,{path:"/product/:id",component:S}),r.a.createElement(E.a,{path:"/contact",component:L}),r.a.createElement(E.a,{path:"/admin",component:M}),r.a.createElement(E.a,{path:"/login",component:T}),r.a.createElement(E.a,{component:R})))},A=(a(36),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopkaa"),r.a.createElement(E.a,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stroniie g\u0142\xf3wnej"))}}),r.a.createElement(E.a,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," ","Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)," "),r.a.createElement("p",null," ","Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null," ","Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(E.a,{path:"/:page/:idProduct",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," ","Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)," "),r.a.createElement("p",null," ","Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null," ","Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(s.a,{basename:"/app-rr"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(j,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(w,null)),r.a.createElement("section",{className:"page"},r.a.createElement(W,null))),r.a.createElement("footer",null,r.a.createElement(A,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(D,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.d77f4e9b.chunk.js.map