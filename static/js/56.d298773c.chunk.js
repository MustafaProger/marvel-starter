"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[56],{425:(e,a,s)=>{s.d(a,{A:()=>n});const t=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var c=s(579);const n=()=>(0,c.jsx)("img",{style:{display:"block",width:250,height:250,objectFit:"contain",margin:"0 auto"},src:t})},170:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var t=s(43),c=s(897);const n=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var r=s(502),i=s(425),l=s(579);const o=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:c,homepage:n,wiki:r}=a;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:s}),(0,l.jsx)("p",{className:"randomchar__descr",children:t}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:n,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:r,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=()=>{const[e,a]=(0,t.useState)({}),{loading:s,error:d,getCharacterById:h,clearError:m}=(0,c.A)();(0,t.useEffect)((()=>{_()}),[]);const u=e=>{a(e)},_=()=>{m();const e=Math.floor(400*Math.random()+1011e3);h(e).then(u)},j=d?(0,l.jsx)(i.A,{}):null,x=s?(0,l.jsx)(r.A,{}):null,p=s||d?null:(0,l.jsx)(o,{char:e});return(0,l.jsxs)("div",{className:"randomchar",children:[j,x,p,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{className:"button button__main",onClick:_,children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:n,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=e=>{const[a,s]=(0,t.useState)([]),[n,o]=(0,t.useState)(!1),[d,h]=(0,t.useState)(210),[m,u]=(0,t.useState)(!1),{loading:_,error:j,getAllCharacters:x}=(0,c.A)();(0,t.useEffect)((()=>{p(d,!0)}),[]);const p=(e,a)=>{o(!a),x(e).then(b)},b=e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),o((e=>!1)),h((e=>e+9)),u((e=>a))},g=(0,t.useRef)([]),v=e=>{g.current.forEach((e=>e.classList.remove("char__item_selected"))),g.current[e].classList.add("char__item_selected"),g.current[e].focus()};const N=function(a){const s=a.map(((a,s)=>{let t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(t={objectFit:"unset"}),(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>g.current[s]=e,onClick:()=>{e.onCharSelected(a.id),v(s)},onKeyDown:t=>{" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(a.id),v(s))},children:[(0,l.jsx)("img",{src:a.thumbnail,alt:a.name,style:t}),(0,l.jsx)("div",{className:"char__name",children:a.name})]},a.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:s})}(a),f=j?(0,l.jsx)(i.A,{}):null,k=_&&!n?(0,l.jsx)(r.A,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[f,k,N,(0,l.jsx)("button",{className:"button button__main button__long",disabled:n,style:{display:m?"none":"block"},onClick:()=>p(d),children:(0,l.jsx)("div",{className:"inner",children:_?"Loading...":"Load More"})})]})},m=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]}),u=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:c,homepage:n,wiki:r,comics:i}=a;let o={objectFit:"cover"};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o={objectFit:"unset"});const d=0===i.available?(0,l.jsx)("li",{className:"char__comics-item",children:"The character has no comics"},0):i.items.map(((e,a)=>{let{name:s}=e;if(a<10)return(0,l.jsx)("li",{className:"char__comics-item",children:s},a)}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:c,alt:"Image character",style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:s}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:n,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:r,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsx)("ul",{className:"char__comics-list",children:d})]})},_=e=>{const[a,s]=(0,t.useState)(null),{loading:n,error:o,getCharacterById:d,clearError:h}=(0,c.A)();(0,t.useEffect)((()=>{j()}),[]),(0,t.useEffect)((()=>{j()}),[e.charId]);const _=e=>{s((a=>e))},j=()=>{h();const{charId:a}=e;a&&d(a).then(_)},x=a||n||o?null:(0,l.jsx)(m,{}),p=o?(0,l.jsx)(i.A,{}):null,b=n?(0,l.jsx)(r.A,{}):null,g=n||o||!a?null:(0,l.jsx)(u,{char:a});return(0,l.jsxs)("div",{className:"char__info",children:[x,p,b,g]})};class j extends t.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,l.jsx)(i.A,{}):this.props.children}}const x=j,p=s.p+"static/media/vision.067d4ae1936d64a577ce.png",b=()=>{const[e,a]=(0,t.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{children:(0,l.jsx)(d,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(x,{children:(0,l.jsx)(h,{onCharSelected:a})}),(0,l.jsx)(x,{children:(0,l.jsx)(_,{charId:e})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:p,alt:"vision"})]})}},897:(e,a,s)=>{s.d(a,{A:()=>c});var t=s(43);const c=()=>{const{loading:e,request:a,error:s,clearError:c}=(()=>{const[e,a]=(0,t.useState)(!1),[s,c]=(0,t.useState)(null);return{loading:e,request:(0,t.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0);try{const c=await fetch(e,{method:s,body:t,headers:n});if(!c.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(c.status));const r=await c.json();return a(!1),r}catch(r){throw a(!1),c(r.message),r}}),[]),error:s,clearError:(0,t.useCallback)((()=>c(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",r="apikey=58a1c7f15ef58395ab52a6c63927a461",i=e=>({id:e.id,name:e.name,description:""!==e.description?e.description.length>182?e.description.slice(0,182)+"...":e.description:e.description+"The character has no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," page"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:e,error:s,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await a("".concat(n,"characters?limit=9&offset=").concat(e,"&").concat(r))).data.results.map(i)},getCharacterById:async e=>{const s=await a("".concat(n,"characters/").concat(e,"?").concat(r));return i(s.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await a("".concat(n,"/comics?").concat("ts=1738563207400","&").concat(r,"&").concat("hash=d5ecccf7ee705be62d227e32dc2a3a47","&offset=").concat(e,"&limit=8"))).data.results},getComicById:async e=>{const s=await a("".concat(n,"comics/").concat(e,"?").concat(r));return l(s.data.results[0])},clearError:c}}}}]);
//# sourceMappingURL=56.d298773c.chunk.js.map