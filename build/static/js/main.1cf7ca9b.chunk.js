(this.webpackJsonphw04=this.webpackJsonphw04||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var l=n(1),r=n.n(l),i=n(2),s=n.n(i),o=(n(13),n.p,n(14),n(4)),c=n(5),a=n(8),h=n(7),u=n(6),j=n.n(u),b=n(0),d=function(){var t=function(t){Object(a.a)(n,t);var e=Object(h.a)(n);function n(t){var l;return Object(o.a)(this,n),(l=e.call(this,t)).state={login:"",username:"",githubtUrl:"",avatarUrl:"",ID:"",followersnum:"",Followersurl:"",followingnum:"",Followingurl:"",Gists:"",email:""},l}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get(this.props.source,(function(e){console.log(e);var n=e;n&&t.setState({Login:n.login,username:n.name,githubtUrl:n.html_url,avatarUrl:n.avatar_url,ID:n.id,Url:n.url,followersnum:n.followers,Followersurl:n.followers_url,followingnum:n.followingnum,Followingurl:n.following_url,Gists:n.gists_url,email:n.email})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:this.state.login}),Object(b.jsx)("h3",{children:this.state.username}),Object(b.jsx)("img",{src:this.state.avatarUrl}),Object(b.jsx)("a",{href:this.state.githubtUrl,children:"Github Link"}),Object(b.jsx)("h3",{children:this.state.ID}),Object(b.jsx)("h3",{children:this.followersnum}),Object(b.jsx)("a",{href:this.state.Followersurl,children:"Followers"}),Object(b.jsx)("h3",{children:this.followingnum}),Object(b.jsx)("a",{href:this.state.Followingurl,children:"Following"}),Object(b.jsx)("h3",{children:"    "}),Object(b.jsx)("a",{href:this.state.Gists,children:"Gists"}),Object(b.jsx)("h3",{children:this.email})]})}}]),n}(r.a.Component);s.a.render(Object(b.jsx)(t,{source:"https://api.github.com/users/B0829009"}),document.getElementById("root"))};var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{children:d()})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,l=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),l(t),r(t),i(t),s(t)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.1cf7ca9b.chunk.js.map