import{S as h,i as l}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.querySelector("#search-form"),m=document.querySelector(".search-input"),d=document.querySelector(".gallery"),f=document.querySelector(".loader");let i=1,a="";const y=new h(".gallery a");function g(o){const s=`https://pixabay.com/api?key=41838546-9d950a50e841202e6c289d2dd&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=9`;f.classList.add("show"),fetch(s).then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(function(e){const t=e.hits;t.length===0?l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",position:"topCenter",timeout:3e3}):(i===1&&(d.innerHTML=""),t.forEach(function(r){const p=`<div class="card">
              <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}">
              </a>
              <div class="card-info">
                <p>Likes: ${r.likes}</p>
                <p>Views: ${r.views}</p>
                <p>Comments: ${r.comments}</p>
                <p>Downloads: ${r.downloads}</p>
              </div>
            </div>`;d.insertAdjacentHTML("beforeend",p)}),y.refresh(),i++)}).catch(function(e){l.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again later!",theme:"dark",position:"topCenter",timeout:3e3}),console.log(e)}).finally(function(){f.classList.remove("show")})}u.addEventListener("submit",function(o){o.preventDefault(),a=m.value.trim(),a!==""&&(g(a),u.reset())});
//# sourceMappingURL=commonHelpers.js.map
