(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{37:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",a=r(2);e.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"error"})}},39:function(t,e,r){"use strict";var n=r(4),a=r.n(n),c=r(7),s=r(5),i=r(0);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),r=e[0],n=e[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],p=u[1];return{loading:r,request:Object(i.useCallback)(function(){var t=Object(c.a)(a.a.mark((function t(e){var r,c,s,i,o,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},n(!0),t.prev=4,t.next=7,fetch(e,{method:r,body:c,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,n(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),n(!1),p(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){return p(null)}),[])}}(),e=t.loading,r=t.request,n=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=81185e568d5b18b9b6e0b9e849bbbaaa",p=function(){var t=Object(c.a)(a.a.mark((function t(){var e,n,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:210,t.next=3,r("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results.map(m));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",m(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(){var e,n,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:0,t.next=3,r("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},v=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:e,error:n,clearError:o,getAllCharacters:p,getCharacterByName:b,getCharacter:f,getAllComics:h,getComics:d}}},45:function(t,e,r){},46:function(t,e,r){"use strict";r(45);var n=r.p+"static/media/Avengers.4065c8f9.png",a=r.p+"static/media/Avengers_logo.9eaf2193.png",c=r(2);e.a=function(){return Object(c.jsxs)("div",{className:"app__banner",children:[Object(c.jsx)("img",{src:n,alt:"Avengers"}),Object(c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(c.jsx)("br",{}),"Stay tuned!"]}),Object(c.jsx)("img",{src:a,alt:"Avengers logo"})]})}},81:function(t,e,r){"use strict";r.r(e);var n=r(5),a=r(3),c=r(0),s=r(39),i=r(24),o=r(37),u=r(46),l=r(2);e.default=function(t){var e=t.Component,r=t.dataType,p=Object(a.p)().id,b=Object(c.useState)(null),f=Object(n.a)(b,2),h=f[0],d=f[1],m=Object(s.a)(),v=m.loading,j=m.error,g=m.getComics,x=m.getCharacter,O=m.clearError;Object(c.useEffect)((function(){w()}),[p]);var w=function(){switch(O(),r){case"comic":g(p).then(k);break;case"character":x(p).then(k)}},k=function(t){d(t)},y=j?Object(l.jsx)(o.a,{}):null,C=v?Object(l.jsx)(i.a,{}):null,E=v||j||!h?null:Object(l.jsx)(e,{data:h});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u.a,{}),y,C,E]})}}}]);
//# sourceMappingURL=7.ba87a82f.chunk.js.map