(this["webpackJsonpcolor-generator"]=this["webpackJsonpcolor-generator"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(7),a=n.n(o),s=n(6),i=(n(21),n(12)),j=n.n(i),l=n(28),u=n(29),b=n(32),O=n(30),h=n(31),d=n(1),x=function(e){var t=e.value,n=e.changeColor,c=e.onColorChange,r=e.error,o=r?"wrongInput":"validInput";return Object(d.jsxs)(l.a,{children:[r&&Object(d.jsx)(u.a,{className:"justify-content-center",children:Object(d.jsx)(b.a,{variant:"danger",children:Object(d.jsx)(b.a.Heading,{children:"Hey, wrong Color"})})}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(t)},children:[Object(d.jsx)(u.a,{className:"justify-content-center",children:Object(d.jsxs)(O.a,{xs:5,children:[Object(d.jsx)("label",{children:"Enter Color \xa0 "}),Object(d.jsx)("input",{type:"text",placeholder:"e.g: 04009A",value:t,onChange:function(e){return c(e.target.value)},className:o})]})}),Object(d.jsx)(u.a,{className:"justify-content-center",children:Object(d.jsx)(O.a,{xs:5,className:"justify-content-center",children:Object(d.jsx)(h.a,{type:"submit",size:"lg",children:"submit"})})})]})]})},f=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),j=i[0],l=i[1],u=e.color,b=u.hexString(),h="rgb("+e.oppositeColor.map((function(e){return 255-e})).join(",")+")",x=e.alertCopy;return Object(c.useEffect)((function(){if(j){var e=setTimeout((function(){return o(!1)}),500);return function(){return clearTimeout(e)}}}),[r]),Object(d.jsxs)(O.a,{xs:6,md:3,style:{backgroundColor:b,color:h},onClick:function(){x(),navigator.clipboard.writeText(b)},onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1),l(!0)},className:"singleColor",children:[Object(d.jsxs)("h3",{children:[" ",b]}),r&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h5",{children:u.rgbString()}),Object(d.jsxs)("h5",{children:["weight : ",u.weight," % "]})]})]})},g=function(e){var t=e.colorList,n=e.error,r=Object(c.useState)(!1),o=Object(s.a)(r,2),a=o[0],i=o[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return i(!1)}),3e3);return function(){return clearTimeout(e)}}),[a]),Object(d.jsx)(l.a,{children:!n&&Object(d.jsxs)(d.Fragment,{children:[a&&Object(d.jsx)(u.a,{className:"justify-content-center",children:Object(d.jsx)(b.a,{variant:"success",children:Object(d.jsx)(b.a.Heading,{children:"color copied successfully"})})}),!a&&Object(d.jsx)(u.a,{className:" justify-content-center",children:Object(d.jsx)(b.a,{variant:"warning",children:Object(d.jsx)(b.a.Heading,{children:"Click on color to copy it to clipboard"})})}),Object(d.jsx)(u.a,{children:t.map((function(e,n){return Object(d.jsx)(f,{color:e,oppositeColor:t[n].rgb,alertCopy:function(){return i(!0)}},n)}))})]})})};var m=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(new j.a("#04009A").all()),a=Object(s.a)(o,2),i=a[0],l=a[1],u=Object(c.useState)(!1),b=Object(s.a)(u,2),O=b[0],h=b[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{value:n,changeColor:function(e){try{h(!1),l(new j.a("#".concat(n)).all())}catch(O){r(""),l([]),h(!0)}},onColorChange:r,error:O}),Object(d.jsx)(g,{colorList:i,error:O})]})};n(25);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.76c13c9a.chunk.js.map