(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(6),o=n.n(c),l=(n(12),n(1)),r=n(3),d=(n(13),n(14),function(e,t){13===e.keyCode&&t()}),m=function(e){var t=e.value,n=e.onChangeHandler,a=e.onClickHandler;return i.a.createElement("div",{className:"additem"},i.a.createElement("div",{className:"additem-content"},i.a.createElement("input",{placeholder:"Enter a todo item",value:t,type:"text",onChange:n,onKeyDown:function(e){return d(e,a)}})," "),i.a.createElement("button",{className:"additem-button",type:"button",onClick:a},"Add"))},u=(n(15),n(16),function(e){var t=e.name,n=e.isChecked,a=e.isEditing,c=e.onCheckBoxChanged,o=e.onEditButtonClicked,l=e.onItemChanged,r=e.onEditFinishClicked,m=e.onRemoveButtonClicked,u="",s="";return n&&(u="checked",s="item-disabled"),i.a.createElement("div",{className:"item"},i.a.createElement("input",{type:"checkbox",checked:u,onChange:c}),a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",value:t,onChange:l,onKeyDown:function(e){return d(e,r)}}),i.a.createElement("button",{className:"item-button",onClick:r},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},i.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i.a.createElement("path",{d:"M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"})))),!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:s},t),i.a.createElement("button",{disabled:n,className:"item-button",onClick:o},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},i.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i.a.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"})))),i.a.createElement("button",{className:"item-button",onClick:m},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},i.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i.a.createElement("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"}))))}),s=function(e){var t=e.items,n=e.checkBoxChanged,a=e.editClicked,c=e.itemChanged,o=e.editFinishClicked,l=e.removedClicked;return t.length>0?i.a.createElement("div",{className:"items"},t.map((function(e,t){return i.a.createElement(u,{key:t,name:e.name,isChecked:e.isChecked,isEditing:e.isEditing,onCheckBoxChanged:function(){return n(t)},onEditButtonClicked:function(){return a(t)},onItemChanged:function(e){return c(t,e)},onEditFinishClicked:function(){return o(t)},onRemoveButtonClicked:function(){return l(t)}})}))):null},h=function(e,t){var n=null;try{n=JSON.parse(localStorage.getItem(e))}catch(d){n=null,localStorage.clear()}var i=Object(a.useState)(n||t),c=Object(r.a)(i,2),o=c[0],l=c[1];return[o,function(t){l(t),localStorage.setItem(e,JSON.stringify(t))}]},g=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],o=h("todos",[]),d=Object(r.a)(o,2),u=d[0],g=d[1];return i.a.createElement("main",null,i.a.createElement("h1",null,"To Do List"),i.a.createElement(m,{value:n,onChangeHandler:function(e){c(e.target.value)},onClickHandler:function(){if(""!==n.trim()){var e={isChecked:!1,name:n,isEditing:!1},t=[].concat(Object(l.a)(u),[e]);g(t)}c("")}}),i.a.createElement(s,{items:u,checkBoxChanged:function(e){var t=Object(l.a)(u),n=t[e];n.isChecked=!n.isChecked,n.isChecked&&(n.isEditing=!1),g(t)},editClicked:function(e){var t=Object(l.a)(u);t[e].isEditing=!0,g(t)},itemChanged:function(e,t){var n=Object(l.a)(u);n[e].name=t.target.value,g(n)},editFinishClicked:function(e){var t=Object(l.a)(u);t[e].isEditing=!1,g(t)},removedClicked:function(e){var t=Object(l.a)(u);t.splice(e,1),g(t)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3773743d.chunk.js.map