(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=a(179),i=a(177),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(c.a,{title:"Not Found"},o.a.createElement("p",null,"Hey! You just hit a page that doesn't exist..."))},t}(o.a.Component);t.default=Object(i.a)(u)},155:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return c.withPrefix});a(168);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},168:function(e,t,a){var n;e.exports=(n=a(174))&&n.default||n},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},174:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(55),i=a(2),u=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},175:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},176:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},177:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=a(170),i=a(206),u=a.n(i),s=a(201),m=a.n(s),p=a(178),d=a(167),f=a.n(d);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(p.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(u.a,null),o.a.createElement(f.a,{implementation:"css"},o.a.createElement(e,this.props))))},a}(o.a.Component)}},178:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return p});a(75),a(54),a(76),a(203);var r=a(185),l=a(170),o=a(204),c=a.n(o),i=a(205),u=a.n(i),s=Object(l.createMuiTheme)({palette:{primary:{light:c.a[300],main:c.a[500],dark:c.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function p(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(202),a(74))},179:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=a(169),i=a(155),u=(a(172),a(173),a(175)),s=a(184),m=a.n(s),p=a(171),d=a.n(p),f=a(166),E=function(e){var t=e.data.site.siteMetadata.menuLinks;return o.a.createElement(o.a.Fragment,null,t.map(function(e){return o.a.createElement(i.a,{key:e.name,to:e.link},o.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),o.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(d.a,{style:{color:"#fff"}},o.a.createElement(f.c,null))))},h=function(e){return o.a.createElement(i.b,{query:"240237662",render:function(e){return o.a.createElement(E,{data:e})},data:u})},g=a(176),y=a(194),b=a.n(y),v=a(195),x=a.n(v),C=a(193),k=a.n(C),_=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{onClick:this.handleOpen},o.a.createElement(f.a,{style:{color:"#efefef"}})),o.a.createElement(k.a,{onClickAway:this.handleClose},o.a.createElement(b.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return o.a.createElement(i.a,{key:e.name,to:e.link},o.a.createElement(x.a,null,e.name))}),o.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(x.a,null,"Fork me on Github")))))},t}(o.a.Component),w=function(e){return o.a.createElement(i.b,{query:"709782962",render:function(t){return o.a.createElement(_,{active:e.active,data:t})},data:g})},M=a(167),I=a.n(M),T=a(181),q=a.n(T),N=a(197),R=a.n(N),j=a(196),A=a.n(j),F=a(164),P=a.n(F),S=a(189),L=a.n(S),O=a(188),B=a.n(O),U=function(e){return o.a.createElement(A.a,{id:"appBar"},o.a.createElement(R.a,null,o.a.createElement(q.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},o.a.createElement(q.a,{item:!0},o.a.createElement(L.a,{id:"logo",variant:"outlined",avatar:o.a.createElement(B.a,{id:"logoIcon"},o.a.createElement(f.d,null)),label:o.a.createElement(i.a,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),o.a.createElement(q.a,{item:!0},o.a.createElement(I.a,{smDown:!0},o.a.createElement(P.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},o.a.createElement(h,null))),o.a.createElement(I.a,{mdUp:!0},o.a.createElement(w,null)))),o.a.createElement(q.a,{item:!0})))},G=function(e){return o.a.createElement(i.b,{query:"4102418190",render:function(e){return o.a.createElement(U,{data:e})},data:c})},D=a(198),J=a.n(D),Y=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),o.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},o.a.createElement("span",null,o.a.createElement(P.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",o.a.createElement(I.a,{only:["xs","sm"]},"–"),o.a.createElement(I.a,{only:["xl","lg","md"]},o.a.createElement("br",null))," ",r," – ",l,o.a.createElement("br",null),"·",o.a.createElement("br",null),"Starter created by"," ",o.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))},H=function(e){return o.a.createElement(i.b,{query:"4102418190",render:function(e){return o.a.createElement(Y,{data:e})},data:c})},Q=a(199),V=(a(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,null),o.a.createElement(Q.Grid,{style:{marginTop:"94px"}},o.a.createElement(Q.Row,null,o.a.createElement(Q.Col,{xs:12},t?o.a.createElement(P.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,o.a.createElement(H,null)))))},t}(o.a.Component));t.a=V}}]);
//# sourceMappingURL=component---src-pages-404-js-a1e9dddf391a4005dceb.js.map