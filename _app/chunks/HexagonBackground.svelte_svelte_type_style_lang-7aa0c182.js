import{C as r,T as v,S as p,i as x,s as D,U as h,V as f,a as u,d,J as g,b as n,I as c,f as I,D as L,E as w}from"./vendor-efda1274.js";const o=r(0);{if(window.location.hash){const t=parseInt(window.location.hash.replace("#",""));o.set(t)}o.subscribe(t=>{window.location.hash=t+""})}const M=r(180),y=r(0),H=r(!0),j=r("");let _,b;function k(){clearInterval(_),b=Date.now(),_=setInterval(()=>{M.set(Math.floor((Date.now()-b)/1e3))},1e3)}const A=()=>{v(o)===0&&k(),v(o)===v(y)-1&&clearInterval(_),o.update(t=>Math.min(v(y)-1,t+1))},C=()=>o.update(t=>Math.max(0,t-1));function B(t){let e,s;return{c(){e=h("svg"),s=h("path"),this.h()},l(a){e=f(a,"svg",{xmlns:!0,viewBox:!0,preserveAspectRatio:!0,class:!0});var i=u(e);s=f(i,"path",{style:!0,"vector-effect":!0,d:!0,class:!0}),u(s).forEach(d),i.forEach(d),this.h()},h(){g(s,"--jan-delay",t[2]+"ms"),n(s,"vector-effect","non-scaling-stroke"),n(s,"d","M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"),n(s,"class","svelte-1amkn61"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"viewBox","0 0 173.20508075688772 200"),n(e,"preserveAspectRatio","xMidYMid meet"),n(e,"class","svelte-1amkn61"),c(e,"animated",t[0]),c(e,"visible",t[1])},m(a,i){I(a,e,i),L(e,s)},p(a,[i]){i&4&&g(s,"--jan-delay",a[2]+"ms"),i&1&&c(e,"animated",a[0]),i&2&&c(e,"visible",a[1])},i:w,o:w,d(a){a&&d(e)}}}function S(t,e,s){let{animated:a=!1}=e,{visible:i=!0}=e,{visibleDelay:m=0}=e;return t.$$set=l=>{"animated"in l&&s(0,a=l.animated),"visible"in l&&s(1,i=l.visible),"visibleDelay"in l&&s(2,m=l.visibleDelay)},[a,i,m]}class E extends p{constructor(e){super();x(this,e,S,B,D,{animated:0,visible:1,visibleDelay:2})}}export{E as H,o as a,y as b,M as c,H as d,A as n,C as p,j as s};