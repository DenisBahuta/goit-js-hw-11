import{S as u,i as a}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".preload"),m=new u(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",h);function h(t){t.preventDefault();const s=t.currentTarget.elements.input.value;if(c.innerHTML="",!s.trim()){a.show({title:"❕",theme:"light",message:"Please, fill in the search field",messageSize:"20px",messageColor:"#808080",backgroundColor:"#e7fc44",position:"topLeft",timeout:3e3});return}l.classList.remove("is-hidden"),f(s).then(i=>{i.hits.length===0&&a.show({iconUrl:icon,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),c.innerHTML=g(i.hits),m.refresh()}).catch(y).finally(()=>l.classList.add("is-hidden")),t.currentTarget.reset()}function f(t){const s="https://pixabay.com/api",i=new URLSearchParams({key:"41838546-9d950a50e841202e6c289d2dd",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${s}/?${i}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function g(t){return t.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:r,comments:n,downloads:d})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
           <img
            class="gallery-image"
            src="${s}"
            alt="${o}"
          />
        </a>
        <div class="container-additional-info">
        <div class="container-descr-inner"><p class="description">Likes</p><span class="description-value">${e}</span></div>
        
        <div class="container-descr-inner"><p class="description">Views</p><span class="description-value">${r}</span></div>
        

        <div class="container-descr-inner"><p class="description">Comments</p><span class="description-value">${n}</span></div>
        

        <div class="container-descr-inner"><p class="description">Downloads</p><span class="description-value">${d}</span></div>
        
        </div>
      </li>`).join("")}function y(t){console.error(t),c.innerHTML="",a.show({iconUrl:icon,theme:"dark",message:"Sorry, there is a problem with connection with the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:5e3})}
//# sourceMappingURL=commonHelpers.js.map
