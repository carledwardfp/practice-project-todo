(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n(8),o=n.n(i);n(14),n(15),n(16);var s=function(){var e=new Date;return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"TODO LIST"}),Object(c.jsx)("p",{children:e.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"})})]})},r=n(5),l=n(4);n(17);var u=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),i=n[0],o=n[1],s=Object(a.useRef)(null);return Object(a.useEffect)((function(){s.current.focus()})),Object(c.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.handleAdd({id:Math.floor(1e5*Math.random()),value:i}),o("")},children:[Object(c.jsx)("button",{type:"submit",children:Object(c.jsx)("i",{className:"fa fa-plus-circle"})}),Object(c.jsx)("input",{type:"text",placeholder:"Add a new task",value:i,onChange:function(e){o(e.target.value)},ref:s}),Object(c.jsx)("i",{className:"fa fa-trash",onClick:e.handleClear})]})};n(7);var d=function(e){return Object(c.jsx)("ul",{className:"todo-list",children:e.list.map((function(t){var n=t.isComplete?"fa fa-circle fa-circle-done":"fa fa-circle",a=t.isComplete?"todo todo-done":"todo",i=t.isComplete?"fa fa-times fa-times-done":"fa fa-times";t.isComplete;return Object(c.jsxs)("li",{className:"todo-item",children:[Object(c.jsx)("i",{className:n,onClick:function(){return e.handleComplete(t.id)}}),Object(c.jsx)("div",{className:a,children:t.value}),Object(c.jsx)("div",{className:"todo-remove",children:Object(c.jsx)("i",{className:i,onClick:function(){return e.handleRemove(t.id)}})})]},t.id)}))})};var j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"todo-container",children:[Object(c.jsx)(d,{list:n,handleComplete:function(e){var t=Object(r.a)(n).filter((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));i(t)},handleRemove:function(e){var t=Object(r.a)(n).filter((function(t){return t.id!==e}));i(t)}}),Object(c.jsx)(u,{handleAdd:function(e){if(e.value&&!/^\s*$/.test(e.value)){var t=[].concat(Object(r.a)(n),[e]);i(t)}},handleClear:function(){i([])}})]})};var f=function(){return Object(c.jsxs)("div",{className:"todo-app",children:[Object(c.jsx)(s,{}),Object(c.jsx)(j,{})]})};o.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.08a898e1.chunk.js.map