(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){n(103),e.exports=n(191)},119:function(e,t,n){},183:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),r=n.n(l),i=(n(119),n(120),n(48)),o=n(16),u=n(17),s=n(20),m=n(18),h=n(57),d=n(21),v=(n(123),n(47)),b=(n(192),n(49)),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={date:new Date},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"\u73b0\u5728\u7684\u65f6\u95f4\u662f\uff1a",this.state.date.toLocaleTimeString(),"."))}}]),t}(c.a.Component),k=b.a.Title,y=b.a.Paragraph,p=b.a.Text,j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(k,null,"\u6b22\u8fce"),c.a.createElement(y,null,"\u5c06\u6280\u672f\u8f6c\u5316\u4e3a",c.a.createElement(p,{strong:!0},"\u8d5a\u94b1"),"\u7684\u80fd\u529b",c.a.createElement(f,null)))}}]),t}(c.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",null,"\u5173\u4e8e123")}}]),t}(c.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",null,"\u670d\u52a1123")}}]),t}(c.a.Component),g=(n(183),v.a.Header),C=v.a.Content,w=v.a.Footer,N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleNavClick=n.handleNavClick.bind(Object(h.a)(n)),n.state={navKey:"Home"},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleNavClick",value:function(e){console.log(e.key),this.setState({navKey:e.key})}},{key:"render",value:function(){var e,t=this.state.navKey;return e="Home"===t?c.a.createElement(j,null):"About"===t?c.a.createElement(E,null):c.a.createElement(O,null),c.a.createElement("div",{className:"App"},c.a.createElement(v.a,{className:"layout"},c.a.createElement(g,null,c.a.createElement("div",{className:"logo"}),c.a.createElement(i.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[t],style:{lineHeight:"64px",textAlign:"right"}},c.a.createElement(i.a.Item,{key:"Home",onClick:this.handleNavClick},"\u9996\u9875"),c.a.createElement(i.a.Item,{key:"Service",onClick:this.handleNavClick},"\u670d\u52a1"),c.a.createElement(i.a.Item,{key:"About",onClick:this.handleNavClick},"\u5173\u4e8e"))),c.a.createElement(C,{style:{padding:"0 20px"}},c.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280,textAlign:"left"}},e)),c.a.createElement(w,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED")))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.c68bf3d0.chunk.js.map