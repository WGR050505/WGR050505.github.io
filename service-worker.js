if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const d=e=>n(e,r),c={module:{uri:r},exports:t,require:d};i[r]=Promise.all(o.map((e=>c[e]||d(e)))).then((e=>(s(...e),t)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"df8b5b9b970f75d38ddd538da4178d50"},{url:"css/index.css",revision:"b9b11e23cf6334d71170d55c1356f8a9"},{url:"/",revision:"index-20241214053400220"},{url:"music/",revision:"music-20241214053400220"},{url:"about/",revision:"about-20241214053400220"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
