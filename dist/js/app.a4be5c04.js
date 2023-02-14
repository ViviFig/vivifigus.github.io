(function(){"use strict";var e={2553:function(e,t,n){n.r(t)},292:function(e,t,n){var a={};n.r(a),n.d(a,{Z:function(){return A}});n(8052);var o=n(6060),l=n(9242),r=n(3396);const i={class:"d-flex vh-100 justify-content-center align-items-center"},s={class:"col-10"};function c(e,t,n,a,o,l){const c=(0,r.up)("navbar-games"),d=(0,r.up)("games-list");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r._)("div",i,[(0,r._)("div",s,[(0,r.Wm)(d)])])],64)}var d={},u=n(89);const f=(0,u.Z)(d,[["render",c]]);var m=f,b=n(7139);const p={class:"container"},v={class:"justify-content-between d-flex flex-row"},g=(0,r._)("h1",{class:"my-3"},"Games catalogue",-1),h={class:"justify-content-end d-flex flex-row my-4"},y={class:"btn btn-display mx-2"},_={class:"btn btn-display mx-2"},w={class:"table table-striped table-responsive"},x=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"#"),(0,r._)("th",{scope:"col"},"Title"),(0,r._)("th",{scope:"col"},"Description"),(0,r._)("th",{scope:"col"},"Year"),(0,r._)("th",{scope:"col"},"Genre"),(0,r._)("th"),(0,r._)("th")])],-1),D={scope:"col"};function k(e,t,n,a,o,l){const i=(0,r.up)("add-modal"),s=(0,r.up)("b-icon-list-task"),c=(0,r.up)("b-icon-grid"),d=(0,r.up)("b-icon-info-square"),u=(0,r.up)("b-icon-pencil-square");return(0,r.wg)(),(0,r.iD)("div",p,[a.popupTriggers.buttonTrigger?((0,r.wg)(),(0,r.j4)(i,{key:0,ToggleModal:()=>a.ToggleModal("buttonTrigger")},null,8,["ToggleModal"])):(0,r.kq)("",!0),(0,r._)("div",v,[g,(0,r._)("button",{type:"button",class:"btn btn-primary btn-sm",onClick:t[0]||(t[0]=()=>a.ToggleModal("buttonTrigger"))},"+ Add new")]),(0,r._)("div",h,[(0,r._)("button",y,[(0,r.Wm)(s)]),(0,r._)("button",_,[(0,r.Wm)(c)])]),(0,r._)("table",w,[x,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.games,(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r._)("th",D,(0,b.zw)(e.id),1),(0,r._)("td",null,(0,b.zw)(e.label),1),(0,r._)("td",null,(0,b.zw)(e.description),1),(0,r._)("td",null,(0,b.zw)(e.date),1),(0,r._)("td",null,(0,b.zw)(e.color),1),(0,r._)("td",null,[(0,r.Wm)(d)]),(0,r._)("td",null,[(0,r.Wm)(u)])])))),128))])])])}var T=n(4870);const M=(0,r.uE)('<div class="modal-content modal-large px-5 py-4"><div class="modal-body"><form><div class="mb-3"><label for="recipient-name" class="col-form-label">Name</label><input type="text" class="form-control" id="recipient-name" placeholder="Game name here..."></div><div class="mb-3"><label for="message-text" class="col-form-label" placeholder="Describe the game here...">Description:</label><textarea class="form-control" id="message-text"></textarea></div><div class="mb-3"><label for="recipient-name" class="col-form-label">Release date</label><input type="date" class="form-control" id="recipient-name" value="2023-01-30"></div><div class="mb-3"><label for="recipient-name" class="col-form-label">Genre</label><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Default radio </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked><label class="form-check-label" for="flexRadioDefault2"> Default checked radio </label></div></div></form></div><div class="modal-footer justify-content-center"><button type="button" class="btn btn-primary btn-sm">Save</button></div></div>',1),O=[M];function j(e,t,n,a,o,i){return(0,r.wg)(),(0,r.iD)("div",{class:"modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",onClick:t[1]||(t[1]=e=>n.ToggleModal())},[(0,r._)("div",{class:"modal-dialog",onClick:t[0]||(t[0]=(0,l.iM)((()=>{}),["stop"]))},O)])}var S={name:"add-modal",props:["ToggleModal"]};const R=(0,u.Z)(S,[["render",j]]);var A=R,W=n(5939),Z={setup(){const e=(0,T.iH)({buttonTrigger:!1}),t=t=>{e.value[t]=!e.value[t]};return{AddModal:a.AddModal,popupTriggers:e,ToggleModal:t}},data(){return{games:[],date:new Date}},components:{AddModal:a.AddModal},methods:{formatDate(e){const t=new Date(e);return new Intl.DateTimeFormat("default",{dateStyle:"short"}).format(t)},truncate(e,t){return e.length>t?e.substring(0,t)+"...":e},mounted(){W.Z.get("https://frontend-test-api.anothereality.io/data/retrieve/all?api-version=1").then((e=>{this.games=e.data,console.log(this.games)})).catch((e=>{console.error(e)}))}}};const z=(0,u.Z)(Z,[["render",k]]);var C=z,E=n.p+"img/sword.a2b20f74.svg";const G={class:"navbar nav p-0"},H=(0,r.uE)('<a class="navbar-brand mx-2" href="#"><img src="'+E+'" width="45" height="45" alt="sword"></a><a class="mx-2 title-nav navbar-brand">ANOTHER GAME</a><form class="row ms-auto mx-2"><div class="col"><input class="form-control mr-sm-2" type="search" placeholder="Search"></div><div class="col-auto"><button class="btn my-2 my-sm-0 navbutton" type="submit">Search</button></div></form>',3),P=[H];function q(e,t,n,a,o,l){return(0,r.wg)(),(0,r.iD)("nav",G,P)}var Y={};const F=(0,u.Z)(Y,[["render",q]]);var N=F;const I=(0,l.ri)(m);I.component("games-list",C),I.component("navbar-games",N),I.component("add-modal",A),I.use(o.hDw),I.mount("#app"),n(2553)}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],l=e[d][2];for(var i=!0,s=0;s<a.length;s++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(i=!1,l<r&&(r=l));if(i){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,r=a[0],i=a[1],s=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var d=s(n)}for(t&&t(a);c<r.length;c++)l=r[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},a=self["webpackChunktest_frontend"]=self["webpackChunktest_frontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(292)}));a=n.O(a)})();
//# sourceMappingURL=app.a4be5c04.js.map