(this["webpackJsonpsimon-says"]=this["webpackJsonpsimon-says"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),i=(n(11),n(2)),u=function(e){var t=e.currLevel,n=e.highScore;return r.a.createElement("div",{className:"Scores"},r.a.createElement("div",null,r.a.createElement("b",null,"Level:"),r.a.createElement("div",null,t)),r.a.createElement("div",null,r.a.createElement("b",null,"High Score:"),r.a.createElement("div",null,n)))},o=n(1),s=n.n(o),m=n(3),f=function(e){var t=Object(a.useRef)(!1),n=Object(a.useRef)(0),c=e.gameColors.current;Object(a.useEffect)((function(){i()}));var l=function(e){return new Promise((function(t){return setTimeout(t,e)}))},i=function(){var e=Object(m.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(400);case 2:(n=function(){var e=Object(m.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c[a]&&(u(c[a]),setTimeout((function(){return n(a+1)}),800)),e.next=3,l(500);case 3:if(!t.current){e.next=5;break}return e.abrupt("return");case 5:c[a]&&o(c[a]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())(0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){if(document.getElementById(e))switch(e){case"Y":document.getElementById("Y").style.fill="lightyellow";break;case"B":document.getElementById("B").style.fill="lightblue";break;case"G":document.getElementById("G").style.fill="lightgreen";break;case"R":document.getElementById("R").style.fill="orange"}},o=function(e){document.getElementById(e).style.fill=null},f=function(a){a.target.id===c[n.current]?h()?(e.incrementLevel(),n.current=0):n.current++:(t.current=!0,n.current=0,e.setGameOver(!0))},h=function(){return n.current===c.length-1};return r.a.createElement("svg",Object.assign({width:201.333,height:201.332},e),r.a.createElement("path",{fill:"#2B2B2B",d:"M201.333 100.666c0 55.597-45.072 100.666-100.665 100.666C45.071 201.332 0 156.263 0 100.666S45.071 0 100.668 0c55.592 0 100.665 45.069 100.665 100.666z"}),r.a.createElement("path",{d:"M198.333 100.666c0 53.94-43.729 97.666-97.665 97.666C46.728 198.332 3 154.606 3 100.666S46.728 3 100.668 3c53.936 0 97.665 43.726 97.665 97.666z"}),r.a.createElement("defs",null,r.a.createElement("circle",{id:"prefix__a",cx:100.666,cy:100.666,r:91.333})),r.a.createElement("clipPath",{id:"prefix__b"},r.a.createElement("use",{xlinkHref:"#prefix__a",overflow:"visible"})),r.a.createElement("path",{clipPath:"url(#prefix__b)",fill:"#FFDE17",d:"M-2 100.666h102.665v97.666H-2z"}),r.a.createElement("path",{clipPath:"url(#prefix__b)",fill:"#21409A",d:"M100.667 100.666h102.665v97.666H100.667z"}),r.a.createElement("path",{clipPath:"url(#prefix__b)",fill:"#00A14B",d:"M100.667 3h102.665v97.666H100.667z"}),r.a.createElement("path",{clipPath:"url(#prefix__b)",fill:"#ED1C24",d:"M-2 3h102.665v97.666H-2z"}),r.a.createElement("g",null,r.a.createElement("defs",null,r.a.createElement("circle",{id:"prefix__c",cx:100.666,cy:100.666,r:86.667})),r.a.createElement("clipPath",{id:"prefix__d"},r.a.createElement("use",{xlinkHref:"#prefix__c",overflow:"visible"})),r.a.createElement("path",{id:"Y",onClick:function(e){return f(e)},className:"toy-btn",clipPath:"url(#prefix__d)",fill:"#DFC323",d:"M3.246 100.666h97.419v92.676H3.246z"}),r.a.createElement("path",{id:"B",onClick:function(e){return f(e)},className:"toy-btn",clipPath:"url(#prefix__d)",fill:"#283676",d:"M100.667 100.666h97.419v92.676h-97.419z"}),r.a.createElement("path",{id:"G",onClick:function(e){return f(e)},className:"toy-btn",clipPath:"url(#prefix__d)",fill:"#00783E",d:"M100.667 7.99h97.419v92.676h-97.419z"}),r.a.createElement("path",{id:"R",onClick:function(e){return f(e)},className:"toy-btn",clipPath:"url(#prefix__d)",fill:"#C92127",d:"M3.246 7.99h97.419v92.676H3.246z"})),r.a.createElement("path",{d:"M97.167 6.041h7v189h-7z"}),r.a.createElement("path",{d:"M6.167 97.166h189v7h-189z"}),r.a.createElement("circle",{cx:100.666,cy:100.666,r:33.333}),r.a.createElement("circle",{fill:"#4C4C4D",cx:100.666,cy:100.666,r:28.07}))},h=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),s=o[0],m=o[1],h=Object(a.useState)(0),d=Object(i.a)(h,2),E=d[0],p=d[1],v=Object(a.useState)(0),b=Object(i.a)(v,2),g=b[0],y=b[1],_=Object(a.useRef)([]),x=["R","G","B","Y"],k=function(){_.current.push(x[Math.floor(Math.random()*x.length)]),s?(E>g&&y(E),p(1)):p(E+1)};return n?s?r.a.createElement("div",{className:"game-screen"},r.a.createElement("div",{className:"greetings-container"},r.a.createElement("h1",null,"Simon Says"),r.a.createElement("div",{className:"start-button u-orange-button",onClick:function(){return _.current=[],k(),void m(!1)}},"Restart!"))):r.a.createElement("div",{className:"GameContainer"},r.a.createElement(f,{gameColors:_,incrementLevel:k,setGameOver:m}),r.a.createElement(u,{currLevel:E,highScore:g})):r.a.createElement("div",{className:"game-screen"},r.a.createElement("div",{className:"greetings-container"},r.a.createElement("h1",null,"Simon Says"),r.a.createElement("div",{className:"start-button",onClick:function(){return c(!0),void k()}},"Start!")))};n(13);var d=function(){return r.a.createElement("div",null,r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.b2e332dc.chunk.js.map