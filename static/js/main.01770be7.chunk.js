(this["webpackJsonpyxc-home"]=this["webpackJsonpyxc-home"]||[]).push([[0],{131:function(e,t,a){e.exports=a(219)},136:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),i=(a(136),a(11)),s=a(12),o=a(14),m=a(15),p=a(98),d=(a(66),a(43)),h=a(222),b=a(24),g=a(3),u=a(78),y=a(58),k=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,N=function(e,t){var a=0===e.name.indexOf("title")?"h1":"div";a=e.href?"a":a;var n="string"===typeof e.children&&e.children.match(k)?c.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(n=c.a.createElement(d.a,Object(y.a)({},e.children))),c.a.createElement(a,Object(y.a)({key:t.toString()},e),n)},j=(a(205),u.a.BgElement),v=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=t.BannerAnim.children.map((function(e,t){var a=e.BannerElement,n=a.className;delete a.className;var r=e.bg,l=e.textWrapper,i=e.title,s=e.content,o=e.button;return c.a.createElement(u.a,Object.assign({key:t.toString()},a,{prefixCls:n}),c.a.createElement(j,Object.assign({key:"bg"},r)),c.a.createElement(b.a,Object.assign({type:["bottom","top"],delay:200,key:"text"},l),c.a.createElement("div",Object.assign({key:"logo"},i),"string"===typeof i.children&&i.children.match(k)?c.a.createElement("img",{src:i.children,width:"100%",alt:"img"}):i.children),c.a.createElement("div",Object.assign({key:"content"},s),s.children),c.a.createElement(d.a,Object.assign({ghost:!0,key:"button"},o),o.children)))}));return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(g.b,{key:"bannerGroup",enter:{opacity:0,type:"from"},leave:{opacity:0},component:""},c.a.createElement("div",{className:"banner1-wrapper",key:"wrapper"},c.a.createElement(u.b,Object.assign({key:"BannerAnim"},t.BannerAnim),a))),c.a.createElement(g.c,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner1-icon",style:{bottom:40},key:"icon"},c.a.createElement(h.a,null)))}}]),a}(c.a.PureComponent),O=a(35),E=a(128),f=(a(206),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=t.textWrapper.children.map((function(e){var t=e.name,a=e.texty,n=Object(O.a)(e,["name","texty"]);return t.match("button")?c.a.createElement(d.a,Object.assign({type:"primary",key:t},n),e.children):c.a.createElement("div",Object.assign({key:t},n),a?c.a.createElement(E.a,{type:"mask-bottom"},e.children):e.children)}));return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(b.a,Object.assign({key:"QueueAnim",type:["bottom","top"],delay:200},t.textWrapper),a))}}]),a}(c.a.PureComponent)),w=(a(220),a(77)),x=w.a.Item,M=w.a.SubMenu,S=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).phoneClick=function(){var e=!n.state.phoneOpen;n.setState({phoneOpen:e})},n.state={phoneOpen:void 0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.dataSource,n=t.isMobile,r=Object(O.a)(t,["dataSource","isMobile"]),l=this.state.phoneOpen,i=a.Menu.children.map((function(e){var t=e.children,a=e.subItem,n=Object(O.a)(e,["children","subItem"]);return a?c.a.createElement(M,Object.assign({key:e.name},n,{title:c.a.createElement("div",Object.assign({},t,{className:"header0-item-block ".concat(t.className).trim()}),t.children.map(N)),popupClassName:"header0-item-child"}),a.map((function(e,t){var a=e.children,n=a.href?c.a.createElement("a",a,a.children.map(N)):c.a.createElement("div",a,a.children.map(N));return c.a.createElement(x,Object.assign({key:e.name||t.toString()},e),n)}))):c.a.createElement(x,Object.assign({key:e.name},n),c.a.createElement("a",Object.assign({},t,{className:"header0-item-block ".concat(t.className).trim()}),t.children.map(N)))})),s=void 0===l?300:null;return c.a.createElement(g.c,Object.assign({component:"header",animation:{opacity:0,type:"from"}},a.wrapper,r),c.a.createElement("div",Object.assign({},a.page,{className:"".concat(a.page.className).concat(l?" open":"")}),c.a.createElement(g.c,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},a.logo),c.a.createElement("img",{width:"100%",src:a.logo.children,alt:"img"})),n&&c.a.createElement("div",Object.assign({},a.mobileMenu,{onClick:function(){e.phoneClick()}}),c.a.createElement("em",null),c.a.createElement("em",null),c.a.createElement("em",null)),c.a.createElement(g.c,Object.assign({},a.Menu,{animation:n?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:s,reverse:!!l}),c.a.createElement(w.a,{mode:n?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark"},i))))}}]),a}(c.a.Component),W=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(b.a,Object.assign({key:"QueueAnim",type:["bottom","top"],delay:200},t.textWrapper),c.a.createElement("div",Object.assign({key:"title"},t.title),"string"===typeof t.title.children&&t.title.children.match(k)?c.a.createElement("img",{src:t.title.children,width:"100%",alt:"img"}):t.title.children),c.a.createElement("div",Object.assign({key:"content"},t.content),t.content.children),c.a.createElement(d.a,Object.assign({ghost:!0,key:"button"},t.button),t.button.children)),c.a.createElement(g.c,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",key:"icon"},c.a.createElement(h.a,null)))}}]),a}(c.a.PureComponent),X=(a(54),a(28)),z=(a(55),a(26)),C=a(23),P=a.n(C),A=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dataSource,a=(e.isMobile,Object(O.a)(e,["dataSource","isMobile"])),n=t.wrapper,r=t.titleWrapper,l=t.page,i=t.OverPack,s=t.childWrapper;return c.a.createElement("div",Object.assign({},a,n),c.a.createElement("div",l,c.a.createElement("div",r,r.children.map(N)),c.a.createElement(P.a,i,c.a.createElement(b.a,{type:"bottom",key:"block",leaveReverse:!0,component:X.a,componentProps:s},s.children.map((function(e,t){var a=e.children,n=Object(O.a)(e,["children"]);return c.a.createElement(z.a,Object.assign({key:t.toString()},n),c.a.createElement("div",a,a.children.map(N)))}))))))}}]),a}(c.a.PureComponent);var B=function(e){var t=Object.assign({},e),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var r={queue:n?"bottom":"right",one:n?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"-=30",opacity:0,type:"from",ease:"easeOutQuad"}};return c.a.createElement("div",Object.assign({},t,a.wrapper),c.a.createElement(P.a,Object.assign({},a.OverPack,{component:X.a}),c.a.createElement(g.c,Object.assign({key:"img",animation:r.one,resetStyle:!0},a.imgWrapper,{component:z.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs}}),c.a.createElement("span",a.img,c.a.createElement("img",{src:a.img.children,width:"100%",alt:"img"}))),c.a.createElement(b.a,Object.assign({key:"text",type:r.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},a.textWrapper,{component:z.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs}}),c.a.createElement("h2",Object.assign({key:"h1"},a.title),a.title.children),c.a.createElement("div",Object.assign({key:"p"},a.content),a.content.children))))},R=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).getDelay=function(e,t){return e%t*100+100*Math.floor(e/t)+100*t},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var r=0,l=a.block.children.map((function(t,a){var l=t.children,i=n?50*a:e.getDelay(a,24/t.md),s={opacity:0,type:"from",ease:"easeOutQuad",delay:i},o=Object(y.a)({},s,{x:"+=10",delay:i+100});return r=(r+=t.md)>24?0:r,c.a.createElement(g.c,Object.assign({component:z.a,animation:s,key:t.name},t,{componentProps:{md:t.md,xs:t.xs},className:r?t.className:"".concat(t.className||""," clear-both").trim()}),c.a.createElement(g.c,Object.assign({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"},key:"img"},l.icon),c.a.createElement("img",{src:l.icon.children,width:"100%",alt:"img"})),c.a.createElement("div",l.textWrapper,c.a.createElement(g.c,Object.assign({key:"h2",animation:o,component:"h2"},l.title),l.title.children),c.a.createElement(g.c,Object.assign({key:"p",animation:Object(y.a)({},o,{delay:i+200}),component:"div"},l.content),l.content.children)))}));return c.a.createElement("div",Object.assign({},t,a.wrapper),c.a.createElement("div",a.page,c.a.createElement("div",a.titleWrapper,a.titleWrapper.children.map(N)),c.a.createElement(P.a,a.OverPack,c.a.createElement(b.a,{key:"u",type:"bottom"},c.a.createElement(X.a,Object.assign({key:"row"},a.block),l)))))}}]),a}(c.a.PureComponent),Q=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).getChildrenToRender=function(e){return e.map((function(e){return c.a.createElement(z.a,Object.assign({key:e.name},e),c.a.createElement("div",e.children.wrapper,c.a.createElement("span",e.children.img,c.a.createElement("img",{src:e.children.img.children,height:"100%",alt:"img"})),c.a.createElement("p",e.children.content,e.children.content.children)))}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=this.getChildrenToRender(t.block.children);return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement("div",t.page,c.a.createElement("div",Object.assign({key:"title"},t.titleWrapper),t.titleWrapper.children.map(N)),c.a.createElement(P.a,Object.assign({className:"content-template ".concat(e.className)},t.OverPack),c.a.createElement(g.b,Object.assign({component:X.a,key:"ul",enter:{y:"+=30",opacity:0,type:"from",ease:"easeInOutQuad"},leave:{y:"+=30",opacity:0,ease:"easeInOutQuad"}},t.block),a))))}}]),a}(c.a.PureComponent),_=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).getChildrenToRender=function(e){return e.map((function(e){return c.a.createElement(z.a,Object.assign({key:e.name},e),c.a.createElement("div",e.children.wrapper,c.a.createElement("span",e.children.img,c.a.createElement("img",{src:e.children.img.children,alt:"img"}))))}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=this.getChildrenToRender(t.block.children);return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement("div",t.page,c.a.createElement("div",Object.assign({key:"title"},t.titleWrapper),t.titleWrapper.children.map(N)),c.a.createElement(P.a,Object.assign({className:"content-template ".concat(e.className)},t.OverPack),c.a.createElement(g.b,Object.assign({component:X.a,key:"ul",enter:{y:"+=30",opacity:0,type:"from",ease:"easeOutQuad"},leave:{y:"+=30",opacity:0,ease:"easeOutQuad"}},t.block),a))))}}]),a}(c.a.PureComponent),I=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(P.a,t.OverPack,c.a.createElement(g.c,Object.assign({animation:{y:"+=30",opacity:0,type:"from"},key:"footer"},t.copyright),t.copyright.children)))}}]),a}(c.a.PureComponent),D=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).getLiChildren=function(e){return e.map((function(e,t){var a=e.title,n=e.childWrapper,r=Object(O.a)(e,["title","childWrapper"]);return c.a.createElement(z.a,Object.assign({key:t.toString()},r,{title:null,content:null}),c.a.createElement("h2",a,"string"===typeof a.children&&a.children.match(k)?c.a.createElement("img",{src:a.children,width:"100%",alt:"img"}):a.children),c.a.createElement("div",n,n.children.map(N)))}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=this.getLiChildren(t.block.children);return c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(P.a,t.OverPack,c.a.createElement(b.a,Object.assign({type:"bottom",key:"ul",leaveReverse:!0,component:X.a},t.block),a),c.a.createElement(g.c,Object.assign({animation:{y:"+=30",opacity:0,type:"from"},key:"copyright"},t.copyrightWrapper),c.a.createElement("div",t.copyrightPage,c.a.createElement("div",t.copyright,t.copyright.children)))))}}]),a}(c.a.Component);D.defaultProps={className:"footer1"};var q,L=D,Z={wrapper:{className:"banner1"},BannerAnim:{children:[{name:"elem0",BannerElement:{className:"banner-user-elem"},textWrapper:{className:"banner1-text-wrapper"},bg:{className:"bg bg0"},title:{className:"banner1-title",children:"https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"},content:{className:"banner1-content",children:"\u4e00\u4e2a\u9ad8\u6548\u7684\u9875\u9762\u52a8\u753b\u89e3\u51b3\u65b9\u6848"},button:{className:"banner1-button",children:"Learn More"}},{name:"elem1",BannerElement:{className:"banner-user-elem"},textWrapper:{className:"banner1-text-wrapper"},bg:{className:"bg bg1"},title:{className:"banner1-title",children:"https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"},content:{className:"banner1-content",children:"\u4e00\u4e2a\u9ad8\u6548\u7684\u9875\u9762\u52a8\u753b\u89e3\u51b3\u65b9\u6848"},button:{className:"banner1-button",children:"Learn More"}},{name:"elem2",BannerElement:{className:"banner-user-elem"},textWrapper:{className:"banner1-text-wrapper"},bg:{className:"bg bg1"},title:{className:"banner1-title",children:"https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"},content:{className:"banner1-content",children:"\u4e00\u4e2a\u9ad8\u6548\u7684\u9875\u9762\u52a8\u753b\u89e3\u51b3\u65b9\u6848"},button:{className:"banner1-button",children:"Learn More"}}]}},T={wrapper:{className:"banner3"},textWrapper:{className:"banner3-text-wrapper",children:[{name:"nameEn",className:"banner3-name-en",children:"Seeking Experience & Engineering Conference"},{name:"slogan",className:"banner3-slogan",children:"\u9996\u5c4a\u8682\u8681\u91d1\u670d\u4f53\u9a8c\u79d1\u6280\u5927\u4f1a",texty:!0},{name:"name",className:"banner3-name",children:"\u63a2\u7d22\u6781\u81f4\u7528\u6237\u4f53\u9a8c\u4e0e\u6700\u4f73\u5de5\u7a0b\u5b9e\u8df5\u63a2\u7d22"},{name:"button",className:"banner3-button",children:"\u7acb\u5373\u62a5\u540d"},{name:"time",className:"banner3-time",children:"2018.01.06 / \u4e2d\u56fd\xb7\u676d\u5dde"}]}},V={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo",children:"https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"},Menu:{className:"header0-menu",children:[{name:"item0",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e00",name:"text"}]},subItem:[{name:"sub0",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}},{name:"sub1",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}}]},{name:"item1",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e8c",name:"text"}]}},{name:"item2",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e09",name:"text"}]}},{name:"item3",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u56db",name:"text"}]}}]},mobileMenu:{className:"header0-mobile-menu"}},H={wrapper:{className:"banner0"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title",children:"https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"},content:{className:"banner0-content",children:"\u4e00\u4e2a\u9ad8\u6548\u7684\u9875\u9762\u52a8\u753b\u89e3\u51b3\u65b9\u6848"},button:{className:"banner0-button",children:"Learn More"}},J={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u4ea7\u54c1\u4e0e\u670d\u52a1"}]},childWrapper:{className:"content0-block-wrapper",children:[{name:"block0",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u4e1a\u52a1\u63a5\u5165"},{name:"content",children:"\u652f\u4ed8\u3001\u7ed3\u7b97\u3001\u6838\u7b97\u63a5\u5165\u4ea7\u54c1\u6548\u7387\u7ffb\u56db\u500d"}]}},{name:"block1",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u4e8b\u4e2d\u98ce\u9669\u76d1\u63a7"},{name:"content",children:"\u5728\u6240\u6709\u9700\u6c42\u914d\u7f6e\u73af\u8282\u4e8b\u524d\u98ce\u9669\u63a7\u5236\u548c\u8d28\u91cf\u63a7\u5236\u80fd\u529b"}]}},{name:"block2",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u6570\u636e\u8fd0\u8425"},{name:"content",children:"\u6c89\u6dc0\u4ea7\u54c1\u63a5\u5165\u6548\u7387\u548c\u8fd0\u8425\u5c0f\u4e8c\u5de5\u4f5c\u6548\u7387\u6570\u636e"}]}}]}},K={wrapper:{className:"home-page-wrapper content1-wrapper"},OverPack:{className:"home-page content1",playScale:.3},imgWrapper:{className:"content1-img",md:10,xs:24},img:{children:"https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png"},textWrapper:{className:"content1-text",md:14,xs:24},title:{className:"content1-title",children:"\u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406"},content:{className:"content1-content",children:"\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002"}},Y={wrapper:{className:"home-page-wrapper content3-wrapper"},page:{className:"home-page content3"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u8682\u8681\u91d1\u878d\u4e91\u63d0\u4f9b\u4e13\u4e1a\u7684\u670d\u52a1",className:"title-h1"},{name:"content",className:"title-content",children:"\u57fa\u4e8e\u963f\u91cc\u4e91\u5f3a\u5927\u7684\u57fa\u7840\u8d44\u6e90"}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406"},content:{className:"content3-content",children:"\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002"}}},{name:"block1",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4e91\u5b89\u5168"},content:{className:"content3-content",children:"\u6309\u91d1\u878d\u4f01\u4e1a\u5b89\u5168\u8981\u6c42\u6253\u9020\u7684\u5b8c\u6574\u4e91\u4e0a\u5b89\u5168\u4f53\u7cfb\uff0c\u5168\u65b9\u4f4d\u4fdd\u969c\u91d1\u878d\u5e94\u7528\u53ca\u6570\u636e\u5b89\u5168\u3002"}}},{name:"block2",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4e91\u76d1\u63a7"},content:{className:"content3-content",children:"\u5206\u5e03\u5f0f\u4e91\u73af\u5883\u96c6\u4e2d\u76d1\u63a7\uff0c\u7edf\u4e00\u8d44\u6e90\u53ca\u5e94\u7528\u72b6\u6001\u89c6\u56fe\uff0c\u667a\u80fd\u5206\u6790\u53ca\u6545\u969c\u5b9a\u4f4d\u3002"}}},{name:"block3",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u79fb\u52a8"},content:{className:"content3-content",children:"\u4e00\u7ad9\u5f0f\u79fb\u52a8\u91d1\u878dAPP\u5f00\u53d1\u53ca\u5168\u9762\u76d1\u63a7\uff1b\u4e30\u5bcc\u53ef\u7528\u7ec4\u4ef6\uff0c\u52a8\u6001\u53d1\u5e03\u548c\u6545\u969c\u70ed\u4fee\u590d\u3002"}}},{name:"block4",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u5206\u5e03\u5f0f\u4e2d\u95f4\u4ef6"},content:{className:"content3-content",children:"\u91d1\u878d\u7ea7\u8054\u673a\u4ea4\u6613\u5904\u7406\u4e2d\u95f4\u4ef6\uff0c\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u8ba1\u7b97\u673a\uff0c\u6570\u4e07\u7b14/\u79d2\u7ea7\u5e76\u53d1\u80fd\u529b\uff0c\u4e25\u683c\u4fdd\u8bc1\u4ea4\u6613\u6570\u636e\u7edf\u4e00\u6027\u3002"}}},{name:"block5",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u5927\u6570\u636e"},content:{className:"content3-content",children:"\u4e00\u7ad9\u5f0f\u3001\u5168\u5468\u671f\u5927\u6570\u636e\u534f\u540c\u5de5\u4f5c\u5e73\u53f0\uff0cPB\u7ea7\u6570\u636e\u5904\u7406\u3001\u6beb\u79d2\u7ea7\u6570\u636e\u5206\u6790\u5de5\u5177\u3002"}}}]}},U={wrapper:{className:"home-page-wrapper content5-wrapper"},page:{className:"home-page content5"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u5ba2\u6237\u6848\u4f8b",className:"title-h1"},{name:"content",className:"title-content",children:"\u5728\u8fd9\u91cc\u7528\u4e00\u6bb5\u8bdd\u4ecb\u7ecd\u670d\u52a1\u7684\u6848\u4f8b\u60c5\u51b5"}]},block:{className:"content5-img-wrapper",gutter:16,children:[{name:"block0",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"},content:{children:"Ant Design"}}},{name:"block1",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg"},content:{children:"Ant Motion"}}},{name:"block2",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"},content:{children:"Ant Design"}}},{name:"block3",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg"},content:{children:"Ant Motion"}}},{name:"block4",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"},content:{children:"Ant Design"}}},{name:"block5",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg"},content:{children:"Ant Motion"}}},{name:"block6",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"},content:{children:"Ant Design"}}},{name:"block7",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:"https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg"},content:{children:"Ant Motion"}}}]}},F={wrapper:{className:"home-page-wrapper content12-wrapper"},page:{className:"home-page content12"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"image",children:"https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",className:"title-image"},{name:"title",children:"\u7279\u522b\u9e23\u8c22",className:"title-h1"}]},block:{className:"img-wrapper",children:[{name:"block0",className:"block",md:8,xs:24,children:{wrapper:{className:"block-content"},img:{children:"https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg"}}},{name:"block1",className:"block",md:8,xs:24,children:{wrapper:{className:"block-content"},img:{children:"https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg"}}},{name:"block2",className:"block",md:8,xs:24,children:{wrapper:{className:"block-content"},img:{children:"https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg"}}},{name:"block3",className:"block",md:8,xs:24,children:{wrapper:{className:"block-content"},img:{children:"https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg"}}},{name:"block4",className:"block",md:8,xs:24,children:{wrapper:{className:"block-content"},img:{children:"https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg"}}},{name:"block5",className:"block",md:8,xs:24,children:{wrapper:{className:"block-content"},img:{children:"https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg"}}}]}},G={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:c.a.createElement("span",null,"\xa92018 ",c.a.createElement("a",{href:"https://motion.ant.design"},"Ant Motion")," All Rights Reserved")}},$={wrapper:{className:"home-page-wrapper footer1-wrapper"},OverPack:{className:"footer1",playScale:.2},block:{className:"home-page",gutter:0,children:[{name:"block0",xs:24,md:6,className:"block",title:{className:"logo",children:"https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg"},childWrapper:{className:"slogan",children:[{name:"content0",children:"Animation specification and components of Ant Design."}]}},{name:"block1",xs:24,md:6,className:"block",title:{children:"\u4ea7\u54c1"},childWrapper:{children:[{name:"link0",href:"#",children:"\u4ea7\u54c1\u66f4\u65b0\u8bb0\u5f55"},{name:"link1",href:"#",children:"API\u6587\u6863"},{name:"link2",href:"#",children:"\u5feb\u901f\u5165\u95e8"},{name:"link3",href:"#",children:"\u53c2\u8003\u6307\u5357"}]}},{name:"block2",xs:24,md:6,className:"block",title:{children:"\u5173\u4e8e"},childWrapper:{children:[{href:"#",name:"link0",children:"FAQ"},{href:"#",name:"link1",children:"\u8054\u7cfb\u6211\u4eec"}]}},{name:"block3",xs:24,md:6,className:"block",title:{children:"\u8d44\u6e90"},childWrapper:{children:[{href:"#",name:"link0",children:"Ant Design"},{href:"#",name:"link1",children:"Ant Motion"}]}}]},copyrightWrapper:{className:"copyright-wrapper"},copyrightPage:{className:"home-page"},copyright:{className:"copyright",children:c.a.createElement("span",null,"\xa92018 by ",c.a.createElement("a",{href:"https://motion.ant.design"},"Ant Motion")," All Rights Reserved")}};a(218);Object(p.enquireScreen)((function(e){q=e}));var ee=("undefined"!==typeof window?window:{}).location,te=void 0===ee?{}:ee,ae=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isMobile:q,show:!te.port},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(p.enquireScreen)((function(t){e.setState({isMobile:!!t})})),te.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,t=[c.a.createElement(v,{id:"Banner1_0",key:"Banner1_0",dataSource:Z,isMobile:this.state.isMobile}),c.a.createElement(f,{id:"Banner3_0",key:"Banner3_0",dataSource:T,isMobile:this.state.isMobile}),c.a.createElement(S,{id:"Nav0_0",key:"Nav0_0",dataSource:V,isMobile:this.state.isMobile}),c.a.createElement(W,{id:"Banner0_0",key:"Banner0_0",dataSource:H,isMobile:this.state.isMobile}),c.a.createElement(A,{id:"Content0_0",key:"Content0_0",dataSource:J,isMobile:this.state.isMobile}),c.a.createElement(B,{id:"Content1_0",key:"Content1_0",dataSource:K,isMobile:this.state.isMobile}),c.a.createElement(R,{id:"Content3_0",key:"Content3_0",dataSource:Y,isMobile:this.state.isMobile}),c.a.createElement(Q,{id:"Content5_0",key:"Content5_0",dataSource:U,isMobile:this.state.isMobile}),c.a.createElement(_,{id:"Content12_0",key:"Content12_0",dataSource:F,isMobile:this.state.isMobile}),c.a.createElement(I,{id:"Footer0_0",key:"Footer0_0",dataSource:G,isMobile:this.state.isMobile}),c.a.createElement(L,{id:"Footer1_0",key:"Footer1_0",dataSource:$,isMobile:this.state.isMobile})];return c.a.createElement("div",{className:"templates-wrapper",ref:function(t){e.dom=t}},this.state.show&&t)}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.01770be7.chunk.js.map