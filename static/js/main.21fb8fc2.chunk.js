(this.webpackJsonpshopproject=this.webpackJsonpshopproject||[]).push([[0],{14:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(8),s=c.n(i),r=(c(14),c(0));function l(){return Object(r.jsx)("nav",{className:"light-green lighten-1",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"!#",className:"brand-logo",children:"React Shop Fortnite"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"!#",children:"Repository"})})})]})})}function j(){return Object(r.jsx)("footer",{className:"page-footer light-green lighten-3",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Shop Fortnite"})]})})}var o=c(9),d=c(2),u=c(3);c(16).config();var b=function(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})},h=function(e){var t=e.mainId,c=e.displayName,n=e.displayDescription,a=Object(u.a)(e.displayAssets,1)[0].background,i=e.price,s=i.regularPrice,l=i.finalPrice,j=e.buy;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:a,alt:c})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:c}),Object(r.jsx)("p",{children:n})]}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return j({id:t,price:l,name:c})},children:"Buy"}),l===s?Object(r.jsxs)("span",{className:"right",children:[l," \u0440\u0443\u0431."]}):Object(r.jsxs)("div",{className:"right",children:[Object(r.jsxs)("span",{className:"right finalPrice",children:[l," \u0440\u0443\u0431."]}),Object(r.jsx)("span",{className:"right regularPrice",children:s})]})]})]})},O=function(e){var t=e.items,c=void 0===t?[]:t,n=e.buy;return c.length?Object(r.jsx)("div",{className:"productList",children:c.map((function(e){return Object(r.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{buy:n}),e.id)}))}):Object(r.jsx)("h3",{children:"Nothing here"},Math.random())},m=function(e){var t=e.quantity,c=e.handleBasket;return Object(r.jsxs)("div",{className:"cart green lighten-2 white-text",onClick:function(){return c()},children:[Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"}),t?Object(r.jsx)("span",{className:"cart-quantity",children:t}):null]})},x=function(e){var t=e.id,c=e.name,n=e.price,a=e.quantity,i=e.removeOrder,s=e.handleQuantity;return Object(r.jsxs)("li",{className:"collection-item",children:[c,Object(r.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return s({id:t,value:a-1})},children:"remove"})," ","x",a," ",Object(r.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return s({id:t,value:a+1})},children:"add"})," ","= ",a*n," \u0440\u0443\u0431.",Object(r.jsx)("span",{className:"secondary-content",children:Object(r.jsx)("i",{className:"material-icons basket-close-pointer",onClick:function(){return i(t)},children:"clear"})})]})},f=function(e){var t=e.orders,c=void 0===t?[]:t,n=e.handleBasket,a=e.removeOrder,i=e.handleQuantity,s=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(r.jsxs)("ul",{className:"collection basket-list",children:[Object(r.jsxs)("li",{className:"collection-item active",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(r.jsx)("span",{className:"secondary-content basket-close-pointer",children:Object(r.jsx)("i",{className:"material-icons",onClick:function(){return n()},children:"clear"})})]}),c.length?c.map((function(e){return Object(r.jsx)(x,Object(d.a)(Object(d.a)({},e),{},{removeOrder:a,handleQuantity:i}),e.id)})):Object(r.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(r.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",s,"\u0440\u0443\u0431."," ",Object(r.jsx)("button",{className:"secondary-content btn-small submit-basket",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})},p=function(e){var t=e.name,c=void 0===t?"":t,a=e.closeAlert,i=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[c]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})},v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),s=Object(u.a)(i,2),l=s[0],j=s[1],h=Object(n.useState)([]),x=Object(u.a)(h,2),v=x[0],N=x[1],g=Object(n.useState)(!1),y=Object(u.a)(g,2),k=y[0],q=y[1],S=Object(n.useState)(""),C=Object(u.a)(S,2),w=C[0],B=C[1],F=function(){q(!k)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"914c7dfb-c6a7dc61-cd7b2374-08704b12"}}).then((function(e){return e.json()})).then((function(e){e.shop?a(e.shop):a([]),j(!1)}))}),[]),Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(m,{quantity:v.length,handleBasket:F}),l?Object(r.jsx)(b,{}):Object(r.jsx)(O,{items:c,buy:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});N([].concat(Object(o.a)(v),[c]))}else{var n=v.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));N(n)}B(e.name)}}),k&&Object(r.jsx)(f,{orders:v,handleBasket:F,removeOrder:function(e){var t=v.filter((function(t){return t.id!==e}));N(t)},handleQuantity:function(e){var t=v.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{quantity:e.value}):t})).filter((function(e){return e.quantity>0}));N(t)}}),w&&Object(r.jsx)(p,{name:w,closeAlert:function(){B("")}})]})};function N(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(v,{}),Object(r.jsx)(j,{})]})}s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.21fb8fc2.chunk.js.map