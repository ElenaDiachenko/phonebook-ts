"use strict";(self.webpackChunkphonebook_ts=self.webpackChunkphonebook_ts||[]).push([[869],{6869:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,i,o,c,a,s,u,l,h,d,f=t(2982),p=t(5861),x=t(885),m=t(4687),g=t.n(m),b=t(2791),w=t(4569),v=t.n(w)().create({baseURL:"https://pixabay.com"}),Z=function(){var n=(0,p.Z)(g().mark((function n(e){var t,r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({key:"28311245-d5a87b2fb61808ea8cd4c4eb5",q:e,image_type:"photo",orientation:"horizontal",per_page:"50"}),n.next=3,v.get("/api/?".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.hits);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=t(8707),k=t(1724),y=t(9856),P=t(168),z=t(6444),S=z.ZP.p(r||(r=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 80%;\n  color: ",";\n  font-family: inherit;\n  font-size: ",";\n  font-weight: ",";\n\n  @media screen and (max-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xs})),C=t(184),W=function(n){var e=n.children;return(0,C.jsx)(S,{children:e})},E=z.ZP.div(i||(i=(0,P.Z)(["\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n  max-width: 900px;\n  border: ",";\n  border-radius: ",";\n  box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),\n    0 10px 10px rgba(255, 255, 255, 0.22);\n"])),(function(n){return"".concat(n.theme.borders.normal," transparent")}),(function(n){return n.theme.radii.sm})),R=z.ZP.div(o||(o=(0,P.Z)(["\n  white-space: nowrap;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),U=z.ZP.div(c||(c=(0,P.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 75vh;\n\n  @media screen and (max-width: 768px) {\n    height: 50vh;\n  }\n"]))),_=z.ZP.img(a||(a=(0,P.Z)(["\n  height: 100%;\n  display: block;\n  width: 100%;\n  object-fit: cover;\n"]))),I=z.ZP.div(s||(s=(0,P.Z)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  padding-left: ","px;\n  color: #f3f3f3;\n  border: transparent;\n  border-bottom-right-radius: ",";\n  border-bottom-left-radius: ",";\n\n  @media screen and (max-width: 768px) {\n    height: 40px;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.radii.sm})),L=z.ZP.p(u||(u=(0,P.Z)(["\n  color: ",";\n  font-family: inherit;\n  font-size: ",";\n  font-weight: ",";\n\n  @media screen and (max-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xs})),M=z.ZP.button(l||(l=(0,P.Z)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  border: none;\n  display: inline-block;\n  position: absolute;\n  height: 50px;\n  width: 70px;\n  top: calc(50% - 25px);\n  color: #f3f3f3;\n  cursor: pointer;\n  order: ",";\n\n  @media screen and (max-width: 768px) {\n    height: 40px;\n    width: 50px;\n    top: calc(50% - 20px);\n  }\n"])),(function(n){return"".concat(n.theme.borders.normal," transparent")})),D=(0,z.ZP)(M)(h||(h=(0,P.Z)(["\n  left: 0;\n"]))),G=(0,z.ZP)(M)(d||(d=(0,P.Z)(["\n  right: 0;\n"]))),q=function(n){var e=n.images,t=n.title,r=(0,b.useState)(0),i=(0,x.Z)(r,2),o=i[0],c=i[1],a=(0,b.useRef)(null),s=function(){u(),a.current=setInterval((function(){c((function(n){return n<e.length-1?n+1:0}))}),3e3)},u=function(){a.current&&clearInterval(a.current)};return(0,b.useEffect)((function(){return s(),function(){return u()}})),(0,C.jsxs)(E,{children:[(0,C.jsx)(R,{style:{transform:"translateX(".concat(100*-o,"%)")},children:e.map((function(n,e){return(0,C.jsx)(U,{onMouseEnter:u,onMouseOut:s,children:(0,C.jsx)(_,{src:n.webformatURL,alt:n.tags})},e)}))}),(0,C.jsxs)("div",{children:[(0,C.jsx)(D,{onClick:function(){s();var n=o>0?o-1:e.length-1;c(n)},children:"Prev"}),(0,C.jsx)(G,{onClick:function(){s();var n=o<e.length-1?o+1:0;c(n)},children:"Next"})]}),(0,C.jsx)(I,{children:(0,C.jsx)(L,{children:t})})]})},B=t(9201),N=function(){var n=(0,j.Y)().currentMonth,e=(0,b.useState)([]),t=(0,x.Z)(e,2),r=t[0],i=t[1];return(0,b.useEffect)((function(){(0,p.Z)(g().mark((function e(){var t;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z("".concat(n," nature"));case 3:t=e.sent,i((0,f.Z)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Error?console.log(e.t0.message):console.log("Unexpected error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[n]),(0,C.jsx)(y.W,{children:(0,C.jsxs)(k.x,{display:"flex",flexDirection:"column",gridGap:30,children:[(0,C.jsx)(k.x,{children:(0,C.jsx)(W,{children:(0,C.jsxs)(k.x,{display:"flex",flexDirection:"column",gridGap:14,children:[(0,C.jsx)("p",{children:"Welcome to the PhoneBook app for saving personal phone contacts."}),(0,C.jsx)("p",{children:" Please register to use."})]})})}),(0,C.jsx)(k.x,{display:"flex",justifyContent:"center",alignItems:"center",children:r.length>0?(0,C.jsx)(q,{images:r,title:n}):(0,C.jsx)("img",{src:B,alt:"Phone",style:{maxWidth:"100%"}})})]})})}},9201:function(n,e,t){n.exports=t.p+"static/media/photo.e8f03f58307b39040246.jpg"}}]);
//# sourceMappingURL=869.1d6c9cbc.chunk.js.map