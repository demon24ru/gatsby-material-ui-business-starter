(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=a(0),c=a.n(l),o=a(182),i=a(180),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(o.a,{title:"Not Found"},c.a.createElement("p",null,"Hey! You just hit a page that doesn't exist..."))},t}(c.a.Component);t.default=Object(i.a)(u)},156:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(34),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return o.withPrefix});a(170);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},170:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},175:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(56),i=a(2),u=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},176:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},178:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},180:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),o=a(166),i=a(197),u=a.n(i),s=a(206),m=a.n(s),p=a(181),d=a(168),f=a.n(d);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(p.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return c.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},c.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},c.a.createElement(u.a,null),c.a.createElement(f.a,{implementation:"css"},c.a.createElement(e,this.props))))},a}(c.a.Component)}},181:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return p});a(76),a(55),a(37),a(77),a(208);var r=a(188),l=a(166),c=a(209),o=a.n(c),i=a(210),u=a.n(i),s=Object(l.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function p(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(207),a(75))},182:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),o=a(171),i=a(156),u=(a(173),a(174),a(176)),s=a(177),m=a.n(s),p=a(172),d=a.n(p),f=a(167),E=function(e){var t=e.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,t.map(function(e){return c.a.createElement(i.a,{key:e.name,to:e.link},c.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),c.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(d.a,{style:{color:"#fff"}},c.a.createElement(f.c,null))))},h=function(e){return c.a.createElement(i.b,{query:"240237662",render:function(e){return c.a.createElement(E,{data:e})},data:u})},g=a(178),y=a(192),b=a.n(y),v=a(193),x=a.n(v),C=a(191),k=a.n(C),_=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{onClick:this.handleOpen},c.a.createElement(f.a,{style:{color:"#efefef"}})),c.a.createElement(k.a,{onClickAway:this.handleClose},c.a.createElement(b.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return c.a.createElement(i.a,{key:e.name,to:e.link},c.a.createElement(x.a,null,e.name))}),c.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(x.a,null,"Fork me on Github")))))},t}(c.a.Component),w=function(e){return c.a.createElement(i.b,{query:"709782962",render:function(t){return c.a.createElement(_,{active:e.active,data:t})},data:g})},M=a(168),I=a.n(M),T=a(179),q=a.n(T),j=a(195),N=a.n(j),R=a(194),A=a.n(R),F=a(169),P=a.n(F),S=a(190),L=a.n(S),O=a(185),B=a.n(O),U=function(e){return c.a.createElement(A.a,{id:"appBar"},c.a.createElement(N.a,null,c.a.createElement(q.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},c.a.createElement(q.a,{item:!0},c.a.createElement(L.a,{id:"logo",variant:"outlined",avatar:c.a.createElement(B.a,{id:"logoIcon"},c.a.createElement(f.d,null)),label:c.a.createElement(i.a,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),c.a.createElement(q.a,{item:!0},c.a.createElement(I.a,{smDown:!0},c.a.createElement(P.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},c.a.createElement(h,null))),c.a.createElement(I.a,{mdUp:!0},c.a.createElement(w,null)))),c.a.createElement(q.a,{item:!0})))},G=function(e){return c.a.createElement(i.b,{query:"4102418190",render:function(e){return c.a.createElement(U,{data:e})},data:o})},D=a(196),J=a.n(D),Y=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),c.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},c.a.createElement("span",null,c.a.createElement(P.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",c.a.createElement(I.a,{only:["xs","sm"]},"–"),c.a.createElement(I.a,{only:["xl","lg","md"]},c.a.createElement("br",null))," ",r," – ",l,c.a.createElement("br",null),"·",c.a.createElement("br",null),"Starter created by"," ",c.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))},H=function(e){return c.a.createElement(i.b,{query:"4102418190",render:function(e){return c.a.createElement(Y,{data:e})},data:o})},Q=a(205),V=(a(204),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(G,null),c.a.createElement(Q.a,{container:!0,direction:"row",justify:"center",style:{marginTop:94}},c.a.createElement(Q.a,{item:!0,style:{maxWidth:"calc(1136px - 60px)",width:"calc(100% - 60px)"}},t?c.a.createElement(Q.b,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,c.a.createElement(H,null))))},t}(c.a.Component));t.a=V}}]);
//# sourceMappingURL=component---src-pages-404-js-e6f8ae6eeb582f406790.js.map