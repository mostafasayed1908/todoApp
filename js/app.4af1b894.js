(function(e){function t(t){for(var o,c,l=t[0],a=t[1],d=t[2],s=0,p=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var a=n[l];0!==i[a]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/TodoApp/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("TodoApp")],1)])},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"todo-input",attrs:{type:"text",placeholder:e.inputPlaceHolder},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.AddToDo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}}),e._l(e.todos,(function(t,o){return n("div",{key:t.id,staticClass:"todo-item"},[n("div",{staticClass:"todo-title-label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"item-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(n){var o=t.completed,i=n.target,r=!!i.checked;if(Array.isArray(o)){var c=null,l=e._i(o,c);i.checked?l<0&&e.$set(t,"completed",o.concat([c])):l>-1&&e.$set(t,"completed",o.slice(0,l).concat(o.slice(l+1)))}else e.$set(t,"completed",r)}}}),t.editingStatus?n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"todo.title"},{name:"focus",rawName:"v-focus"}],staticClass:"editInput",attrs:{type:"text"},domProps:{value:t.title},on:{blur:function(n){return e.editingCompleted(t)},keyup:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.editingCompleted(t)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:e.cancelEdit(t)}],input:function(n){n.target.composing||e.$set(t,"title",n.target.value)}}}):n("div",{class:{itemChecked:t.completed},on:{dblclick:function(n){return e.canEdit(t)}}},[e._v(" "+e._s(t.title)+" ")])]),n("div",{staticClass:"remove-item",on:{click:function(t){return e.removeTodo(o)}}},[e._v("×")])])}))],2)},l=[],a=(n("a434"),n("498a"),{name:"todo-list",data:function(){return{inputPlaceHolder:"Type What You Hope Todo Here",newTodo:"",todosIdInc:3,beforeEditCache:"",todos:[{id:1,title:"Playing football",editingStatus:!1,completed:!1},{id:2,title:"Studing English",editingStatus:!1,completed:!1}]}},methods:{AddToDo:function(){this.newTodo.trim().length>0?(this.todos.push({id:this.todosIdInc,title:this.newTodo,editingStatus:!1,completed:!1}),this.newTodo="",this.todosIdInc++):alert("You Should Write Something")},removeTodo:function(e){this.todos.splice(e,1)},canEdit:function(e){this.beforeEditCache=e.title,e.editingStatus=!0},editingCompleted:function(e){0==e.title.trim().length?e.title=this.beforeEditCache:e.editingStatus=!1},cancelEdit:function(e){e.title=this.beforeEditCache,e.editingStatus=!1}},directives:{focus:{inserted:function(e){e.focus()}}}}),d=a,u=(n("935d"),n("2877")),s=Object(u["a"])(d,c,l,!1,null,null,null),p=s.exports,f={name:"App",components:{TodoApp:p}},m=f,v=(n("034f"),Object(u["a"])(m,i,r,!1,null,null,null)),h=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){},"8aae":function(e,t,n){},"935d":function(e,t,n){"use strict";var o=n("8aae"),i=n.n(o);i.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.4af1b894.js.map