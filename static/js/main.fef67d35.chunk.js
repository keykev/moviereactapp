(this.webpackJsonpmoviereact=this.webpackJsonpmoviereact||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n.n(c),o=(n(20),n(2)),s=n(14),i=n(3),u=n.n(i);var m=function(e){var t=e.handleInput,n=e.search;return r.a.createElement("section",{className:"searchbox-wrap"},r.a.createElement("input",{type:"text",placeholder:"Find A Movie...",className:"searchbox",onChange:t,onKeyPress:n}))};var p=function(e){var t=e.result,n=e.openPopup;return r.a.createElement("div",{className:"result",onClick:function(){return n(t.imdbID)}},r.a.createElement("img",{src:t.Poster,alt:"poster"}),r.a.createElement("h3",null," ",t.Title),r.a.createElement("h4",null,"IMDB:",t.imdbID))};var d=function(e){var t=e.results,n=e.openPopup;return r.a.createElement("section",{className:"results"},t.map((function(e){return r.a.createElement(p,{key:e.imdbID,result:e,openPopup:n})})))};var E=function(e){var t=e.selected,n=e.closePopup;return r.a.createElement("section",{className:"popup"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.Title," ",r.a.createElement("span",null,"(",t.Year,")")),r.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),r.a.createElement("div",{className:"plot"},r.a.createElement("img",{src:t.Poster,alt:"poster"}),r.a.createElement("p",null,t.Plot)),r.a.createElement("button",{className:"close",onClick:n},"Close")))};var h=function(){var e=Object(a.useState)({s:"",results:[],selected:{}}),t=Object(s.a)(e,2),n=t[0],c=t[1],l="http://www.omdbapi.com/?apikey=dfe6d885";return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Find Your Movie")),r.a.createElement("main",null,r.a.createElement(m,{handleInput:function(e){var t=e.target.value;c((function(e){return Object(o.a)(Object(o.a)({},e),{},{s:t})}))},search:function(e){"Enter"===e.key&&u.a.get(l+"&s="+n.s).then((function(e){var t=e.data.Search;c((function(e){return Object(o.a)(Object(o.a)({},e),{},{results:t})}))}))}}),r.a.createElement(d,{results:n.results,openPopup:function(e){u()(l+"&i="+e).then((function(e){var t=e.data;console.log(t),c((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:t})}))}))}}),"undefined"!=typeof n.selected.Title&&r.a.createElement(E,{selected:n.selected,closePopup:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.fef67d35.chunk.js.map