(this.webpackJsonpbridge=this.webpackJsonpbridge||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),i=c(8),s=c.n(i),a=(c(13),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),i(e),s(e)}))}),j=c(4),d=c(2),l=c.p+"static/media/20211012212929.6005c311.png",b=c(7),o=c(0),u=function(e){var t=e.computers,c=e.param,r=e.setParam;return Object(o.jsx)("select",{value:c.addr,onChange:function(e){return r(Object(b.a)(Object(b.a)({},c),{},{addr:e.target.value}))},children:t.map((function(e){return Object(o.jsx)("option",{value:e.addr,children:e.addr},e.addr)}))})},O=function(e){var t=e.list;return console.log(t),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"\u5730\u5740"}),Object(o.jsx)("th",{children:"\u7aef\u53e3"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.source}),Object(o.jsx)("td",{children:e.port})]},t)}))})]})},h=function(){var e=Object(r.useState)({addr:""}),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)({addr:""}),s=Object(d.a)(i,2),a=s[0],b=s[1],h=Object(r.useState)([]),f=Object(d.a)(h,2),x=f[0],p=f[1],g=Object(r.useState)([]),v=Object(d.a)(g,2),B=v[0],m=v[1],H=Object(r.useState)([]),y=Object(d.a)(H,2),S=y[0],I=y[1],C=Object(r.useState)(""),k=Object(d.a)(C,2),P=k[0],w=k[1],F=Object(r.useState)(""),T=Object(d.a)(F,2),A=T[0],D=T[1],J=[{addr:"H1"},{addr:"H2"},{addr:"H3"},{addr:"H4"},{addr:"H5"},{addr:"H6"}],L={H1:{left:{},right:{B1:1,B2:1}},H2:{left:{},right:{B1:1,B2:1}},H3:{left:{B1:2},right:{B2:1}},H4:{left:{B1:2},right:{B2:1}},H5:{left:{B2:2,B1:2},right:{}},H6:{left:{B2:2,B1:2},right:{}}};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{style:{textAlign:"center"},onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements[0].value,c=e.currentTarget.elements[1].value;console.log(t);var r=[];for(var n in L)if(n==t){var i=L[n];for(var s in i){var a=i[s];for(var d in a)if("B1"===d){-1==B.findIndex((function(e){return e.source==t}))&&(m([].concat(Object(j.a)(B),[{source:t,port:a[d]}])),r.push("B1"));var l=B.findIndex((function(e){return e.source==c}));if(-1!=l&&B[l].port===a[d]){w("B1\u4e22\u5f03\u8be5\u5e27");break}w("B1\u8f6c\u53d1\u8be5\u5e27")}else if("B2"===d){-1==S.findIndex((function(e){return e.source==t}))&&(I([].concat(Object(j.a)(S),[{source:t,port:a[d]}])),r.push("B2"));var b=S.findIndex((function(e){return e.source==c}));if(-1!=b&&S[b].port==a[d]){D("B2\u4e22\u5f03\u8be5\u5e27");break}D("B2\u8f6c\u53d1\u8be5\u5e27")}}}p(r)},children:[Object(o.jsx)("span",{children:"\u6e90\u5730\u5740\uff1a"}),Object(o.jsx)(u,{computers:J,param:c,setParam:n}),Object(o.jsx)("span",{children:"\u76ee\u6807\u5730\u5740\uff1a"}),Object(o.jsx)(u,{computers:J,param:a,setParam:b}),Object(o.jsx)("button",{type:"submit",children:"\u5f00\u59cb"})]}),Object(o.jsx)("div",{style:{textAlign:"center"},children:Object(o.jsx)("button",{onClick:function(){var e=x;if(console.log(e),e.includes("B1")){var t=Object(j.a)(B);t.splice(B.length-1,1),m(t)}if(e.includes("B2")){var c=Object(j.a)(S);c.splice(S.length-1,1),I(c)}p([])},children:"\u540e\u9000"})})]}),Object(o.jsx)("div",{style:{flex:1,alignItems:"center",justifyContent:"center"},children:Object(o.jsx)("img",{style:{textAlign:"center"},src:l,alt:""})}),Object(o.jsx)("p",{children:P}),Object(o.jsx)("p",{children:A}),Object(o.jsxs)("div",{style:{width:"50%",height:"100%",float:"left"},children:[Object(o.jsx)("span",{children:"B1\u8f6c\u53d1\u8868"}),Object(o.jsx)(O,{list:B})]}),Object(o.jsxs)("div",{style:{width:"50%",height:"100%",float:"left"},children:[Object(o.jsx)("span",{children:"B2\u8f6c\u53d1\u8868"}),Object(o.jsx)(O,{list:S})]})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),a()}},[[15,1,2]]]);
//# sourceMappingURL=main.9d488584.chunk.js.map