function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var l=r("i27Ug");const i=document.querySelector(".form"),u=document.querySelector("button");let a=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),s=document.querySelector('[name="amount"]');i.addEventListener("submit",(e=>{e.preventDefault()}));let c=0,f=0,m=0;u.addEventListener("click",(function(){m=setInterval((()=>{var t,n;f+=1,c+=+d.value,1===f&&(c+=+a.value),f===+s.value&&clearInterval(m),(t=f,n=c,new Promise(((e,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?e({position:t,delay:n}):o({position:t,delay:n})}),n)}))).then((({position:t,delay:n})=>{e(l).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}),d.value),c=0,f=0}));
//# sourceMappingURL=03-promises.f72cbc16.js.map
