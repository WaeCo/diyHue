(this.webpackJsonpDiyHue=this.webpackJsonpDiyHue||[]).push([[4],{85:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return p}));var n=c(22),a=c(1),s=c(56),r=c.n(s),i=c(65),o=c(9);function l(e,t,c){void 0===c&&(c=254);var n=1-e-t,a=(c/254).toFixed(2),s=a/t*e,r=a/t*n,i=1.656492*s-.354851*a-.255038*r,o=.707196*-s+1.655397*a+.036152*r,l=.051713*s-.121364*a+1.01153*r;return i>l&&i>o&&i>1?(o/=i,l/=i,i=1):o>l&&o>i&&o>1?(i/=o,l/=o,o=1):l>i&&l>o&&l>1&&(i/=l,o/=l,l=1),i=i<=.0031308?12.92*i:1.055*Math.pow(i,1/2.4)-.055,o=o<=.0031308?12.92*o:1.055*Math.pow(o,1/2.4)-.055,l=l<=.0031308?12.92*l:1.055*Math.pow(l,1/2.4)-.055,i=Math.round(255*i),o=Math.round(255*o),l=Math.round(255*l),isNaN(i)&&(i=0),isNaN(o)&&(o=0),isNaN(l)&&(l=0),"rgba("+Math.floor(i)+","+Math.floor(o)+","+Math.floor(l)+",1)"}function u(e){var t,c,n,a=2e4/e;return a<=66?(t=255,c=99.4708025861*Math.log(a)-161.1195681661,n=a<=19?0:138.5177312231*Math.log(a-10)-305.0447927307):(t=329.698727446*Math.pow(a-60,-.1332047592),c=288.1221695283*Math.pow(a-60,-.0755148492),n=255),t=t>255?255:t,c=c>255?255:c,n=n>255?255:n,"rgba("+Math.floor(t)+","+Math.floor(c)+","+Math.floor(n)+",1)"}function j(e,t,c){var n=.664511*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.154324*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.162028*(c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92),a=.283881*e+.668433*t+.047685*c,s=88e-6*e+.07231*t+.986039*c,r=(n/(n+a+s)).toFixed(4),i=(a/(n+a+s)).toFixed(4);return isNaN(r)&&(r=0),isNaN(i)&&(i=0),[parseFloat(r),parseFloat(i)]}var d=c(5),h=function(e){e.user;var t=e.groupId,c=e.scenes;return console.log("group is "+t),Object(d.jsxs)(d.Fragment,{children:[Object.entries(c).filter((function(e){return e[1].group===t})).map((function(e){var t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(d.jsx)("div",{className:"sceneContainer",onClick:function(){return function(e,t){r.a.put("/api/".concat(e,"/groups/0/action"),{scene:t})}(c)},children:Object(d.jsx)("p",{style:{color:"#ccc"},children:a.name})},c)})),Object(d.jsx)("div",{className:"clear"})]})},b=function(e){var t=e.user,c=e.id,s=e.light,i=function(e){console.log("Apply state "+JSON.stringify(e)),r.a.put("/api/".concat(t,"/lights/").concat(c,"/state"),e)},j=Object(a.useState)(s.state),h=Object(n.a)(j,2),b=h[0];h[1];return Object(d.jsxs)("div",{className:"lightContainer ".concat(b.on?"textDark":"textLight"),style:{background:"xy"===b.colormode?l(b.xy[0],b.xy[1],254):"ct"===b.colormode?u(b.ct):"linear-gradient(90deg, rgba(255,212,93,1))"},children:[Object(d.jsx)("div",{className:"iconContainer",children:Object(d.jsx)(o.i,{})}),Object(d.jsx)("div",{className:"textContainer",children:Object(d.jsx)("p",{children:s.name})}),Object(d.jsx)("div",{className:"switchContainer",children:Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",defaultChecked:b.on,onChange:function(e){return i({on:e.currentTarget.checked})}}),Object(d.jsx)("span",{className:"slider"})]})}),Object(d.jsx)("div",{className:"slideContainer",children:Object(d.jsx)("input",{type:"range",min:"1",max:"254",defaultValue:"50",className:"slider",onChange:function(e){return i({bri:e.currentTarget.value})}})})]})},g=c(83);function O(e){var t,c=e.user,s=e.lights,o=e.groupLights,u=Object(a.useRef)(null),h=Object(a.useRef)(null),b=[],O=Object(i.a)(o.entries());try{for(O.s();!(t=O.n()).done;){var f=Object(n.a)(t.value,2),p=(f[0],f[1]);"xy"in s[p].state&&b.push(l(s[p].state.xy[0],s[p].state.xy[1],254))}}catch(v){O.e(v)}finally{O.f()}var x=function(e){var t=e.rgb;console.log(e.rgb),console.log("Apply state "+JSON.stringify(e)),r.a.put("/api/".concat(c,"/lights/").concat(o[e.index],"/state"),{xy:j(t.r,t.g,t.b)})};return Object(a.useEffect)((function(){u.current&&!h.current&&(h.current=new g.a.ColorPicker(u.current,{layout:[{component:g.a.ui.Wheel,options:{}}],colors:b}),h.current.on("input:end",x))}),[u.current]),Object(d.jsx)("div",{ref:u})}var f=function(e){var t=e.user,c=e.id,s=e.group,j=(e.groupState,e.setgroupState,e.lights),g=e.scenes,f=Object(a.useState)("closed"),p=Object(n.a)(f,2),x=p[0],v=p[1],m=Object(a.useState)(s.state),N=Object(n.a)(m,2),y=N[0],k=(N[1],function(e){console.log("Apply state "+JSON.stringify(e)),r.a.put("/api/".concat(t,"/groups/").concat(c,"/action"),e)});return Object(d.jsxs)("div",{className:"groupContainer ".concat(s.state.any_on?"textDark":"textLight"," ").concat("closed"!==x?"expanded":""),style:function(){if(s.state.any_on){var e,t="linear-gradient(90deg, ",c=100/s.lights.length,a=Object(i.a)(s.lights.entries());try{for(a.s();!(e=a.n()).done;){var r=Object(n.a)(e.value,2),o=r[0],d=r[1];t="xy"===j[d].state.colormode?t+l(j[d].state.xy[0],j[d].state.xy[1],254)+" "+Math.floor(c*(o+1))+"%,":"ct"===j[d].state.colormode?t+u(j[d].state.ct)+" "+Math.floor(c*(o+1))+"%,":t+"rgba(255,212,93,1) "+Math.floor(c*(o+1))+"%,"}}catch(h){a.e(h)}finally{a.f()}return{background:t.slice(0,-1)+")"}}}(),children:["closed"!==x&&Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{onClick:function(){return v("closed")},children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(o.c,{})}),Object(d.jsx)("div",{className:"text",children:"close"})]}),Object(d.jsx)("div",{className:"tab ".concat("lights"===x?"active":""),onClick:function(){return v("lights")},children:Object(d.jsx)(o.k,{})}),Object(d.jsx)("div",{className:"tab ".concat("scenes"===x?"active":""),onClick:function(){return v("scenes")},children:Object(d.jsx)(o.l,{})}),Object(d.jsx)("div",{className:"tab ".concat("colorPicker"===x?"active":""),onClick:function(){return v("colorPicker")},children:Object(d.jsx)(o.n,{})})]}),Object(d.jsx)("div",{className:"overlayBtn",onClick:function(){return v("colorPicker")}}),Object(d.jsx)("div",{className:"iconContainer",children:Object(d.jsx)(o.e,{})}),Object(d.jsx)("div",{className:"textContainer",children:Object(d.jsx)("p",{children:s.name})}),Object(d.jsx)("div",{className:"switchContainer",children:Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",defaultChecked:y.any_on,onChange:function(e){return k({on:e.currentTarget.checked})}}),Object(d.jsx)("span",{className:"slider"})]})}),Object(d.jsx)("div",{className:"slideContainer",children:Object(d.jsx)("input",{type:"range",min:"1",max:"254",defaultValue:s.action.bri,step:"1",className:"slider",onChange:function(e){return k({bri:e.currentTarget.value})}})}),Object(d.jsxs)("div",{className:"dimmer",children:["scenes"===x&&Object(d.jsx)(h,{user:t,groupId:c,scenes:g}),"lights"===x&&Object(d.jsx)("div",{className:"lightsContainer",children:s.lights.map((function(e){return Object(d.jsx)(b,{user:t,id:e,light:j[e]},e)}))}),"colorPicker"===x&&Object(d.jsx)(O,{user:t,lights:j,groupLights:s.lights})]})]})};function p(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),c=(t[0],t[1],Object(a.useState)({config:{},lights:{},groups:{},scenes:{}})),s=Object(n.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(n.a)(l,2),j=u[0],h=u[1],b=Object(a.useState)(),g=Object(n.a)(b,2),O=g[0],p=g[1];Object(a.useEffect)((function(){r.a.get("http://localhost/get-key").then((function(e){"string"===typeof e.data&&32===e.data.length&&p(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){void 0!==O&&r.a.get("http://localhost/api/".concat(O)).then((function(e){console.log(e.data),o(e.data)}))}),[O,j]);return Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"cardGrid",children:Object.entries(i.groups).filter((function(e){return"Entertainment"!==e[1].type})).map((function(e){var t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(d.jsx)(f,{user:Object.keys(i.config.whitelist)[0],id:c,group:a,groupState:j,setgroupState:h,lights:i.lights,scenes:i.scenes},c)}))})})}}}]);
//# sourceMappingURL=4.022b1e8f.chunk.js.map