"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[160],{76:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var c=a(43),s=a(727),n=a(897),i=a(502),r=a(579);const o=()=>{const[e,t]=(0,c.useState)([]),[a,o]=(0,c.useState)(210),[l,d]=(0,c.useState)(!0),{loading:u,getAllComics:m}=(0,n.A)(),h=(0,c.useCallback)((async()=>{try{const e=await m(a);t((t=>[...t,...e])),d(!1)}catch(e){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445:",e)}}),[a]);(0,c.useEffect)((()=>{h()}),[h]);return(0,r.jsxs)("div",{className:"comics__list",children:[l?(0,r.jsx)(i.A,{}):null,(0,r.jsx)("ul",{className:"comics__grid",children:e.map(((e,t)=>(0,r.jsx)("li",{className:"comics__item",children:(0,r.jsxs)(s.N_,{to:"/comics/".concat(e.id),children:[(0,r.jsx)("img",{src:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),alt:e.title,className:"comics__item-img"}),(0,r.jsx)("div",{className:"comics__item-name",children:e.title}),(0,r.jsx)("div",{className:"comics__item-price",children:e.prices[0].price?"".concat(e.prices[0].price,"$"):"NOT AVAILABLE"})]})},e.id+t)))}),(0,r.jsx)("button",{className:"button button__main button__long",onClick:()=>{o((e=>e+8))},disabled:u,children:(0,r.jsx)("div",{className:"inner",children:u?"Loading...":"Load More"})})]})},l=a.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",d=a.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",u=()=>(0,r.jsxs)("div",{className:"app__banner",children:[(0,r.jsx)("img",{src:l,alt:"Avengers"}),(0,r.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,r.jsx)("br",{}),"Stay tuned!"]}),(0,r.jsx)("img",{src:d,alt:"Avengers logo"})]}),m=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(o,{})]})},897:(e,t,a)=>{a.d(t,{A:()=>s});var c=a(43);const s=()=>{const{loading:e,request:t,error:a,clearError:s}=(()=>{const[e,t]=(0,c.useState)(!1),[a,s]=(0,c.useState)(null);return{loading:e,request:(0,c.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t(!0);try{const s=await fetch(e,{method:a,body:c,headers:n});if(!s.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));const i=await s.json();return t(!1),i}catch(i){throw t(!1),s(i.message),i}}),[]),error:a,clearError:(0,c.useCallback)((()=>s(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",i="apikey=58a1c7f15ef58395ab52a6c63927a461",r=e=>({id:e.id,name:e.name,description:""!==e.description?e.description.length>182?e.description.slice(0,182)+"...":e.description:e.description+"The character has no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics}),o=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," page"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:e,error:a,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await t("".concat(n,"characters?limit=9&offset=").concat(e,"&").concat(i))).data.results.map(r)},getCharacterById:async e=>{const a=await t("".concat(n,"characters/").concat(e,"?").concat(i));return r(a.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await t("".concat(n,"/comics?").concat("ts=1738563207400","&").concat(i,"&").concat("hash=d5ecccf7ee705be62d227e32dc2a3a47","&offset=").concat(e,"&limit=8"))).data.results},getComicById:async e=>{const a=await t("".concat(n,"comics/").concat(e,"?").concat(i));return o(a.data.results[0])},clearError:s}}}}]);
//# sourceMappingURL=160.8de0d34c.chunk.js.map