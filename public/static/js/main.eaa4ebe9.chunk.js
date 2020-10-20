(this["webpackJsonppokedex-front"]=this["webpackJsonppokedex-front"]||[]).push([[0],{45:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),o=a.n(l),i=a(42),c=a(73),m=a(71),u=a(79),s=a(8),g=a(24),d=a(64),p=a(75),f=a(67),E=a(76),h=a(77),b=a(78),k=a(74),v=a(72),y=a(80),w=function(){return{getTypeColor:function(e){var t=e.split("/")[0],a={normal:"#CACAAE",fire:"#FB6C6C",fighting:"#C03028",water:"#76BDFE",flying:"#A890F0",grass:"#48d0b0",poison:"#9569A5",electric:"#FFD86F",bug:"#A8B820",ground:"#ECD9A4",psychic:"#F86390",rock:"#B8A038",ghost:"#A99AC1",ice:"#C1E7E7",dragon:"#A987FA",dark:"#A99A91",fairy:"#F4C1CD",steel:"#D4D4E2"};return a[t]?a[t]:"white"},getPokemonList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return fetch("/api/pokemon?offset=".concat(e,"&limit=").concat(t)).then((function(e){return e.json()}))},getPokemonByName:function(e){return fetch("/api/pokemon/".concat(e)).then((function(e){return e.json()}))}}},j=a(68),A=a(69),C={global:{hover:{background:{opacity:"strong"}}},layer:{background:"none"}},O=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},z=w(),x=function(){var e="https://elvortex.com/wp-content/uploads/2018/03/HddtBOT-1068x601.png",t=Object(n.useState)({pokemonList:[],currentOffset:0,pokemonDetail:null,limit:100}),a=Object(g.a)(t,2),l=a[0],o=a[1],m=Object(n.useState)(!1),w=Object(g.a)(m,2),x=w[0],F=w[1],B=function(){return F(!1)},D=function(e,t){z.getPokemonList(e,t).then((function(t){o(Object(s.a)(Object(s.a)({},l),{},{pokemonList:t,currentOffset:e}))}))},T=function(t){var a=t.pokemon;return r.a.createElement(d.a,{onClick:function(){z.getPokemonByName(a.name).then((function(e){return o(Object(s.a)(Object(s.a)({},l),{},{pokemonDetail:e}))})).then((function(){return F(!0)}))},hoverIndicator:!0,key:a.id,pad:{bottom:"xlarge"},background:"linear-gradient(102.77deg, ".concat(z.getTypeColor(a.type)," -9.18%, #FFF 250.09%)")},r.a.createElement(p.a,{anchor:"bottom-left"},r.a.createElement(f.a,{pad:{horizontal:"small",bottom:"large",top:"none"},height:"small"},r.a.createElement(E.a,{margin:{top:"small"},weight:"bold",size:"large"},a.id),r.a.createElement(i.a,{animation:"fadeIn"},r.a.createElement(h.a,{fit:"contain",a11yTitle:"Official Artwork",src:a.image?a.image:e}))),r.a.createElement(b.a,{pad:{horizontal:"small",vertical:"small"},background:"".concat(z.getTypeColor(a.type),"80"),width:"medium",justify:"start"},r.a.createElement(i.a,null,r.a.createElement(u.a,{level:"3",margin:"none"},O(a.name)),r.a.createElement(E.a,{size:"xsmall"},r.a.createElement("b",null,"Weight: "),a.weight),r.a.createElement(E.a,{size:"xsmall"},r.a.createElement("b",null,"Type: "),a.type),r.a.createElement(E.a,{size:"xsmall",wordBreak:"break-all"},r.a.createElement("b",null,"Abilities: "),a.abilities.join(", "))))))},L=function(){return r.a.createElement(i.a,{align:"center",pad:{vertical:"small"},gap:"small"},r.a.createElement(i.a,{direction:"row",gap:"medium",pad:{vertical:"small"}},r.a.createElement(k.a,{icon:r.a.createElement(j.a,null),onClick:function(){D(l.currentOffset-l.limit,l.limit)},disabled:0===l.currentOffset,primary:!0}),r.a.createElement(k.a,{icon:r.a.createElement(A.a,null),onClick:function(){D(l.currentOffset+l.limit,l.limit)},disabled:l.pokemonList.length<l.limit,primary:!0})))},P=function(t){var a,n,l,o=t.pokemonDetail,m=t.open;return m&&o&&r.a.createElement(v.a,{position:"center",onClickOutside:B,onEsc:B},r.a.createElement(i.a,{pad:{bottom:"none",horizontal:"none",top:"large"},gap:"small",round:!0,width:"large",height:"large",background:"linear-gradient(102.77deg, ".concat(z.getTypeColor(o.type)," -9.18%, #FFF 250.09%)")},r.a.createElement(u.a,{level:"1",margin:{horizontal:"large",vertical:"none"},color:"white"},O(o.name)," #",(a=o.id,l=l||"0",(a+="").length>=(n=4)?a:new Array(n-a.length+1).join(l)+a)),r.a.createElement(i.a,{direction:"row",margin:{horizontal:"large",vertical:"none"},gap:"small"},o.type.split("/").map((function(e){return r.a.createElement(c.a,{theme:(t=z.getTypeColor(e),{global:{active:{background:{color:t,opacity:"strong"}}},button:{border:{color:"white"}}})},r.a.createElement(k.a,{primary:!0,active:!0,label:O(e)}));var t}))),r.a.createElement(h.a,{fit:"contain",a11yTitle:"Official Artwork",src:o.image?o.image:e}),r.a.createElement(i.a,{as:"footer",gap:"small",direction:"column",align:"start",justify:"end",background:"white",pad:"large",round:!0},r.a.createElement(E.a,{size:"large"},o.description),r.a.createElement(E.a,{size:"medium"},r.a.createElement("b",null,"Weight: "),o.weight),r.a.createElement(E.a,{size:"medium",wordBreak:"break-all"},r.a.createElement("b",null,"Abilities: "),o.abilities.map(O).join(", ")),o.evolutions.length>0&&r.a.createElement(E.a,{size:"medium",wordBreak:"break-all"},r.a.createElement("b",null,"Evolves to: "),o.evolutions.map(O).join(", ")))))};return Object(n.useEffect)((function(){return D(l.currentOffset,l.limit)}),[]),r.a.createElement(c.a,{theme:C,full:!0},r.a.createElement(i.a,{pad:{horizontal:"medium",vertical:"small"}},r.a.createElement(L,null),r.a.createElement(y.a,{gap:"medium",rows:"small",columns:"small"},l.pokemonList.map((function(e){return r.a.createElement(T,{key:e.id,pokemon:e})}))),r.a.createElement(L,null)),r.a.createElement(P,{open:x,pokemonDetail:l.pokemonDetail}))},F={global:{colors:{brand:"#e9d9d9"},font:{family:"Roboto",size:"18px",height:"20px"}}},B=function(e){return r.a.createElement(i.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))};var D=function(){return r.a.createElement(c.a,{theme:F,themeMode:"dark",full:!0},r.a.createElement(m.a.Consumer,null,(function(e){return r.a.createElement(i.a,{fill:!0},r.a.createElement(B,null,r.a.createElement(u.a,{level:"3",margin:"none"},"Awesome PokeDex!")),r.a.createElement(i.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"},background:"url(https://storage.googleapis.com/pokedexbucket/background.jpg)"},r.a.createElement(i.a,{flex:!0,align:"center",justify:"center"},r.a.createElement(x,null))))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.eaa4ebe9.chunk.js.map