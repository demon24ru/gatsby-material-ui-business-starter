(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(182),c=a(179),o=a(155),i=a(181),u=a.n(i),s=a(207),m=a.n(s),d=a(208),f=a.n(d),p=a(215),E=a.n(p),h=a(164),v=a.n(h),g=function(e){return r.a.createElement(u.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},e.items.map(function(e){var t=e.node,a=t.excerpt,n=t.frontmatter,l=n.path,c=n.title,i=n.image;return r.a.createElement(u.a,{item:!0,xs:12,md:6,key:l},r.a.createElement(m.a,null,r.a.createElement(E.a,{style:{height:"200px"},image:Object(o.c)(i)}),r.a.createElement(f.a,null,r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.a.createElement(o.a,{to:l},c)),r.a.createElement(v.a,{component:"p"},a))))}))},y=a(177);a.d(t,"query",function(){return b});var b="2782092023";t.default=Object(y.a)(function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(c.a,{title:"Products"},r.a.createElement(l.a,{title:"Products"}),r.a.createElement(g,{items:t}))})},155:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(33),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return o.withPrefix});a(168);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},168:function(e,t,a){var n;e.exports=(n=a(174))&&n.default||n},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},174:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=a(55),i=a(2),u=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},175:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},176:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},177:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),o=a(170),i=a(206),u=a.n(i),s=a(201),m=a.n(s),d=a(178),f=a(167),p=a.n(f);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(d.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return c.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},c.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},c.a.createElement(u.a,null),c.a.createElement(p.a,{implementation:"css"},c.a.createElement(e,this.props))))},a}(c.a.Component)}},178:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(75),a(54),a(76),a(203);var r=a(185),l=a(170),c=a(204),o=a.n(c),i=a(205),u=a.n(i),s=Object(l.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(202),a(74))},179:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),o=a(169),i=a(155),u=(a(172),a(173),a(175)),s=a(184),m=a.n(s),d=a(171),f=a.n(d),p=a(166),E=function(e){var t=e.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,t.map(function(e){return c.a.createElement(i.a,{key:e.name,to:e.link},c.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),c.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(f.a,{style:{color:"#fff"}},c.a.createElement(p.c,null))))},h=function(e){return c.a.createElement(i.b,{query:"240237662",render:function(e){return c.a.createElement(E,{data:e})},data:u})},v=a(176),g=a(194),y=a.n(g),b=a(195),M=a.n(b),_=a(193),k=a.n(_),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{onClick:this.handleOpen},c.a.createElement(p.a,{style:{color:"#efefef"}})),c.a.createElement(k.a,{onClickAway:this.handleClose},c.a.createElement(y.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return c.a.createElement(i.a,{key:e.name,to:e.link},c.a.createElement(M.a,null,e.name))}),c.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(M.a,null,"Fork me on Github")))))},t}(c.a.Component),C=function(e){return c.a.createElement(i.b,{query:"709782962",render:function(t){return c.a.createElement(x,{active:e.active,data:t})},data:v})},P=a(167),w=a.n(P),j=a(181),N=a.n(j),I=a(197),O=a.n(I),T=a(196),q=a.n(T),R=a(164),S=a.n(R),A=a(189),B=a.n(A),F=a(188),L=a.n(F),U=function(e){return c.a.createElement(q.a,{id:"appBar"},c.a.createElement(O.a,null,c.a.createElement(N.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},c.a.createElement(N.a,{item:!0},c.a.createElement(B.a,{id:"logo",variant:"outlined",avatar:c.a.createElement(L.a,{id:"logoIcon"},c.a.createElement(p.d,null)),label:c.a.createElement(i.a,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),c.a.createElement(N.a,{item:!0},c.a.createElement(w.a,{smDown:!0},c.a.createElement(S.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},c.a.createElement(h,null))),c.a.createElement(w.a,{mdUp:!0},c.a.createElement(C,null)))),c.a.createElement(N.a,{item:!0})))},G=function(e){return c.a.createElement(i.b,{query:"4102418190",render:function(e){return c.a.createElement(U,{data:e})},data:o})},D=a(198),J=a.n(D),z=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),c.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},c.a.createElement("span",null,c.a.createElement(S.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",c.a.createElement(w.a,{only:["xs","sm"]},"–"),c.a.createElement(w.a,{only:["xl","lg","md"]},c.a.createElement("br",null))," ",r," – ",l,c.a.createElement("br",null),"·",c.a.createElement("br",null),"Starter created by"," ",c.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))},Q=function(e){return c.a.createElement(i.b,{query:"4102418190",render:function(e){return c.a.createElement(z,{data:e})},data:o})},V=a(199),Y=(a(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(G,null),c.a.createElement(V.Grid,{style:{marginTop:"94px"}},c.a.createElement(V.Row,null,c.a.createElement(V.Col,{xs:12},t?c.a.createElement(S.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,c.a.createElement(Q,null)))))},t}(c.a.Component));t.a=Y},182:function(e,t,a){"use strict";var n=a(183),r=a(0),l=a.n(r),c=a(209),o=a.n(c),i=a(155),u=function(e){return l.a.createElement(i.b,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(o.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var s="1175772"},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},207:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(214))},208:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(217))},214:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(73)),l=n(a(153)),c=n(a(0)),o=(n(a(154)),n(a(157))),i=n(a(187)),u=n(a(156)),s={root:{overflow:"hidden"}};function m(e){var t=e.classes,a=e.className,n=e.raised,u=(0,l.default)(e,["classes","className","raised"]);return c.default.createElement(i.default,(0,r.default)({className:(0,o.default)(t.root,a),elevation:n?8:1},u))}t.styles=s,m.defaultProps={raised:!1};var d=(0,u.default)(s,{name:"MuiCard"})(m);t.default=d},215:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(216))},216:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(34)),l=n(a(73)),c=n(a(153)),o=n(a(0)),i=(n(a(154)),n(a(157))),u=(n(a(165)),a(158),n(a(156))),s={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=s;var m=["video","audio","picture","iframe","img"];function d(e){var t=e.classes,a=e.className,n=e.component,u=e.image,s=e.src,d=e.style,f=(0,c.default)(e,["classes","className","component","image","src","style"]),p=-1!==m.indexOf(n),E=!p&&u?(0,l.default)({backgroundImage:'url("'.concat(u,'")')},d):d;return o.default.createElement(n,(0,l.default)({className:(0,i.default)(t.root,(0,r.default)({},t.media,p),a),style:E,src:p?u||s:void 0},f))}d.defaultProps={component:"div"};var f=(0,u.default)(s,{name:"MuiCardMedia"})(d);t.default=f},217:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(73)),l=n(a(153)),c=n(a(0)),o=(n(a(154)),n(a(157))),i=(a(158),n(a(156))),u={root:{padding:16,"&:last-child":{paddingBottom:24}}};function s(e){var t=e.classes,a=e.className,n=e.component,i=(0,l.default)(e,["classes","className","component"]);return c.default.createElement(n,(0,r.default)({className:(0,o.default)(t.root,a)},i))}t.styles=u,s.defaultProps={component:"div"};var m=(0,i.default)(u,{name:"MuiCardContent"})(s);t.default=m}}]);
//# sourceMappingURL=component---src-pages-products-index-js-ce1a814d9067936b5ad0.js.map