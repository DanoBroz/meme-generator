(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),o=n(4),c=n.n(o);var i=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"}),Object(a.jsx)("p",{children:"Meme Generator"})]})},m=n(5),r=n(6),l=n(7),h=n(2),j=n(9),b=n(8),u=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImgs:n})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(m.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),n=this.state.allMemeImgs[t].url;this.setState({randomImg:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),Object(a.jsx)("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),Object(a.jsx)("button",{children:"Gen"})]}),Object(a.jsxs)("div",{className:"meme",children:[Object(a.jsx)("img",{src:this.state.randomImg,alt:""}),Object(a.jsx)("h2",{className:"top",children:this.state.topText}),Object(a.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(s.Component);n(15);var d=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(i,{}),Object(a.jsx)(u,{})]})};c.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ca5c9328.chunk.js.map