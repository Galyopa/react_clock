(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),i=c(3),s=c(5),l=c(4),r=c(1),m=c.n(r),b=(c(12),c(0)),h=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).timerId=setInterval((function(){}),0),t.state={time:(new Date).toLocaleTimeString()},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=new Date;t.setState({time:e.toLocaleTimeString()}),console.log(e.toLocaleTimeString()),e.toLocaleTimeString()}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"Clock__title",children:"Clock ".concat(this.props.name)}),Object(b.jsx)("p",{"data-cy":"time",className:"Clock__time",children:"Current time: ".concat(this.state.time)})]})}}]),c}(m.a.Component),u=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:1},t.ShowClock=function(){t.setState({isClockVisible:!0})},t.HideClock=function(){t.setState({isClockVisible:!1})},t.SetRandomName=function(){var e=Math.floor(299*Math.random())+1;t.setState({clockName:e})},t}return Object(i.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"Clock",children:[this.state.isClockVisible&&Object(b.jsx)(h,{name:this.state.clockName}),Object(b.jsxs)("div",{className:"Clock__buttons",children:[Object(b.jsx)("button",{className:"Clock__btn",type:"button",onClick:this.ShowClock,disabled:this.state.isClockVisible,children:"Show Clock"}),Object(b.jsx)("button",{className:"Clock__btn",type:"button",onClick:this.HideClock,disabled:!this.state.isClockVisible,children:"Hide Clock"}),Object(b.jsx)("button",{className:"Clock__btn",type:"button",onClick:this.SetRandomName,disabled:!this.state.isClockVisible,children:"Set random name"})]})]})})}}]),c}(m.a.Component);a.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.381e8417.chunk.js.map