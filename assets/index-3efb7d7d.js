import{R as v,u as b,r as h,A as D,a as L,j as t,b as M,c as T,U as E}from"./index-f7e43c94.js";import{b as R,c as p,I as y,B as U,a as H,d as V,h as z,g as B,e as _}from"./pages-6d38eb3b.js";function A(s=v){const n=s===v?b:()=>h.useContext(s);return function(){const{store:c}=n();return c}}const O=A();function F(s=v){const n=s===v?O:A(s);return function(){return n().dispatch}}const I=F(),G=()=>{const s=I();return{setCurrentRepository(n){s({type:D.setCurrentRepository,payload:n})},setSearchResults(n){s({type:D.setCurrentRepository,payload:n})}}};var u=(s=>(s.arrowUp="ArrowUp",s.arrowDown="ArrowDown",s.enter="Enter",s.esc="Escape",s))(u||{});const d=R("search-input"),X=({className:s,placeholder:n,fixedValue:r,switchSuggestions:c,onSearch:o})=>{const a=h.useRef(null),{isMobile:g}=L(),[i,C]=h.useState(r||""),l=()=>{const e=a.current?.value;C(e||"")},S=()=>{i&&c&&c(!0)},j=()=>{a.current?.focus(),C("")},m=()=>{o&&o(i),c&&c(!1)},w=e=>{(e.key===u.arrowUp||e.key===u.arrowDown)&&e.preventDefault()},k=e=>{(e.key===u.arrowUp||e.key===u.arrowDown)&&e.preventDefault(),e.key===u.enter&&m(),e.key===u.esc&&j()};return t.jsxs("div",{className:p.classnames(s,d()),children:[t.jsxs("div",{className:d("field-wrapper",{"has-value":!!i}),children:[t.jsx("input",{className:d("field"),ref:a,value:i,type:"text",placeholder:n,onKeyDown:w,onKeyUp:k,onChange:l,onFocus:S}),t.jsx("button",{className:d("clear",{visible:!!i}),type:"button",onClick:j,"aria-label":"Очистить",children:t.jsx(y.CrossGray,{className:d("clear-icon")})})]}),g?t.jsx(U,{className:d("lens"),type:H.invisible,onClick:m,children:t.jsx(y.Lens,{width:35,height:35})}):t.jsx(U,{size:V.l,onClick:m,children:"Найти"})]})};const N=R("search-result"),J=({className:s,name:n,url:r,updatedAt:c,stargazerCount:o,onNameClick:a})=>t.jsxs("div",{className:p.classnames(s,N()),children:[t.jsx("h3",{className:p.classnames("link",N("title")),onClick:a,"aria-hidden":"true",children:n}),t.jsx("a",{className:N("url"),href:r,target:"_blank",rel:"noreferrer",children:r}),t.jsxs("span",{children:["Дата последнего коммита:",` ${z(c).format("DD MMMM, HH:mm")}`]}),t.jsxs("div",{className:N("rating"),children:[t.jsx(y.Star,{width:"8",height:"8"})," ",o]})]});const P=R("pagination"),Q=({className:s,activePage:n,total:r,onClick:c})=>{const o=[];for(let a=1;a<=Math.ceil(r/10);a++)o.push(a);return t.jsx("div",{className:p.classnames(s,P()),children:o.map(a=>t.jsx("div",{className:P("page",{active:a===n}),onClick:()=>c(a),"aria-hidden":"true",children:a},a))})};const x=R("spinner"),W=({className:s})=>t.jsx("div",{className:p.classnames(s,x()),children:t.jsxs("div",{className:x("wrapper"),children:[t.jsx("div",{className:x("view")}),t.jsx("div",{className:x("view")}),t.jsx("div",{className:x("view")})]})}),Y=(s,n)=>s.slice((n-1)*10,(n-1)*10+10),Z="По Вашему запросы ничег не найдено",q="Введите поисковой запрос",K="alyonausoeva";const f=R("search-page"),te=()=>{const s=M(),n=T(),r=G(),[c,o]=h.useState([]),[a,g]=h.useState(n.state?.value),[i,C]=h.useState(1),l=a?B(a):_(K);l&&!c?.length&&o(l?.slice(0,10));const S=e=>{const $=l&&Y(l,e);o($)},j=e=>{S(e),C(e)},m=e=>{r.setCurrentRepository(e),s(E.repositoryPage,{state:{id:e.id}})},w=e=>{g(e),s(E.search,{state:{value:e}})};h.useEffect(()=>{a&&S(1)},[a]);const k=l?.length?c?.map(e=>t.jsx(J,{name:e.name,url:e.url,updatedAt:e.updatedAt,stargazerCount:e.stargazerCount,onNameClick:()=>m(e)},e.id)):Z;return t.jsxs("div",{className:p.classnames(f(),"page"),children:[t.jsx(X,{className:f("input"),onSearch:w,placeholder:q,fixedValue:a}),c?.length?t.jsx("div",{className:f("results"),children:k}):t.jsx(W,{className:f("spinner")}),t.jsx(Q,{activePage:i,total:l?.length,onClick:j})]})};export{te as default};
