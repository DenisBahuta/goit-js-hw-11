import{S as p,i as a}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="/goit-js-hw-11/assets/octagon-e3b0c442.svg",m=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".preload"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",f);function f(s){s.preventDefault();const t=s.currentTarget.elements.input.value;if(c.innerHTML="",!t.trim()){a.show({title:"❕",theme:"light",message:"Please, fill in the search field",messageSize:"20px",messageColor:"#808080",backgroundColor:"#e7fc44",position:"topLeft",timeout:3e3});return}l.classList.remove("is-hidden"),g(t).then(i=>{i.hits.length===0&&a.show({iconUrl:d,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),c.innerHTML=y(i.hits),h.refresh()}).catch(v).finally(()=>l.classList.add("is-hidden")),s.currentTarget.reset()}function g(s){const t="https://pixabay.com/api",i=new URLSearchParams({key:"41838546-9d950a50e841202e6c289d2dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${t}/?${i}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function y(s){return s.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:n,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
           <img
            class="gallery-image"
            src="${t}"
            alt="${o}"
          />
        </a>
        <div class="container-additional-info">
        <div class="container-descr-inner"><p class="description">Likes</p><span class="description-value">${e}</span></div>
        
        <div class="container-descr-inner"><p class="description">Views</p><span class="description-value">${r}</span></div>
        

        <div class="container-descr-inner"><p class="description">Comments</p><span class="description-value">${n}</span></div>
        

        <div class="container-descr-inner"><p class="description">Downloads</p><span class="description-value">${u}</span></div>
        
        </div>
      </li>`).join("")}function v(s){console.error(s),c.innerHTML="",a.show({iconUrl:d,theme:"dark",message:"Sorry, there is a problem with connection with the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:5e3})}
//# sourceMappingURL=commonHelpers.js.map
