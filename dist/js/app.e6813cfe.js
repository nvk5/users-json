(function(e){function t(t){for(var n,o,u=t[0],a=t[1],c=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==s[a]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/users-json/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=a;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"1f6b":function(e,t,r){},"363e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("users-list")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-list-wrap"},[e.loading?r("div",{staticClass:"user-list__loader"},[r("spinner")],1):e._e(),e.error?r("div",{staticClass:"user-list__error"},[e._v(e._s(e.error))]):r("ul",{staticClass:"user-list"},e._l(e.users,(function(t){return r("li",{key:t.id,staticClass:"user-list__item"},[e._v(" "+e._s(t.name)+" ")])})),0)])},u=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loadingio-spinner-spin-045y30mr204v"},[r("div",{staticClass:"ldio-u857kob79mo"},[r("div",[r("div")]),r("div",[r("div")]),r("div",[r("div")]),r("div",[r("div")]),r("div",[r("div")]),r("div",[r("div")]),r("div",[r("div")]),r("div",[r("div")])])])}],l={},d=l,f=(r("f22a"),r("2877")),p=Object(f["a"])(d,a,c,!1,null,null,null),v=p.exports,h={components:{spinner:v},computed:{loading:function(){return this.$store.state.users.usersLoading},error:function(){return this.$store.state.users.usersError},users:function(){return this.$store.state.users.users}},mounted:function(){this.$store.dispatch("getUsers")}},b=h,m=(r("d483"),Object(f["a"])(b,o,u,!1,null,"8aaa695a",null)),_=m.exports,g={components:{UsersList:_}},y=g,w=(r("034f"),Object(f["a"])(y,s,i,!1,null,null,null)),O=w.exports,j=r("2f62"),x=r("1da1"),U=(r("96cf"),r("bc3a")),E=r.n(U),L={state:{users:null,usersLoading:!1,usersError:!1},mutations:{showUsersLoader:function(e){e.usersLoading=!0},hideUsersLoader:function(e){e.usersLoading=!1},catchUsersErrors:function(e,t){e.usersError=t},setUsers:function(e,t){e.users=t}},actions:{getUsers:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,r("showUsersLoader"),t.next=5,E.a.get("http://jsonplaceholder.typicode.com/users");case 5:n=t.sent,"OK"===n.statusText&&r("setUsers",n.data),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),r("catchUsersErrors",t.t0);case 12:return t.prev=12,r("hideUsersLoader"),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()}}};n["a"].use(j["a"]);var $=new j["a"].Store({modules:{users:L}});n["a"].config.productionTip=!1,new n["a"]({store:$,render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,r){},d483:function(e,t,r){"use strict";r("363e")},f22a:function(e,t,r){"use strict";r("1f6b")}});
//# sourceMappingURL=app.e6813cfe.js.map