(()=>{var e={899:(e,t,n)=>{"use strict";e=n.hmd(e);const r=["4d388ae5990f41f195ca41c0f0a1a5bb","199c50e0bf5a46d0b9b937e10db957c5","c0444bbab49f48e1a3b5afa0054f3f67","a29de94d61a64814b01ebe1ae8f6fb82","9de1898ae94b46298bf1b5eb0a3151bb","75ae7232e69c4edcaa364f998b4cc614"];async function a(e,t){return(await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+r[1]+"&query="+e+"&number="+t)).json()}async function i(e){return(await fetch("https://api.spoonacular.com/recipes/"+e+"/information?apiKey="+r[1])).json()}async function s(e,t){var n=[];return await a(e,t).then((e=>{for(let r=0;r<t;r++)n[r]=e.results[r].id})),n}window.addEventListener("DOMContentLoaded",(async function(){console.log("initiating"),await d("pasta",4),await d("burger",6),await d("thanksgiving",6)}));let o=0;async function d(e,t){const n=document.createElement("card-carousel");var r,a=[];await s(e,t).then((e=>{r=e}));for(let e=0;e<r.length&&e<12;e++){const t=document.createElement("recipe-card");await i(r[e]).then((e=>{console.log(e),t.data=e})),a[e]=t}return n.createCardCarousel(a),console.log(a.length),document.querySelectorAll(".recipes-wrapper")[o].appendChild(n),document.querySelectorAll(".back")[o].addEventListener("click",(()=>{n.prevCards()})),document.querySelectorAll(".forward")[o].addEventListener("click",(()=>{n.nextCards()})),o++,n}e.exports={queryApi:a,getRecipe:i,getRecipeList:s,addCarouselsToPage:d}},374:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}createCardCarousel(e){for(let t=0;t<e.length;t++)t>2&&e[t].classList.add("hidden"),this.shadowRoot.append(e[t])}nextCards(){const e=this.querySelectorAll("recipe-card");for(let t=e.length-4;t>=0;t--)e[t].classList.contains("hidden")||(e[t].classList.add("hidden"),e[t+3].classList.remove("hidden"))}prevCards(){const e=this.querySelectorAll("recipe-card");for(let t=3;t<e.length;t++)e[t].classList.contains("hidden")||(e[t].classList.add("hidden"),e[t-3].classList.remove("hidden"))}}customElements.define("card-carousel",e);const t=document.querySelector(".forward"),n=document.querySelector(".back");t.addEventListener("click",e().nextCards()),n.addEventListener("click",e().prevCards())},437:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}set data(e){if(!e)return;this.json=e;const t=document.createElement("style"),n=document.createElement("article");t.innerHTML='\n        .recipes-wrapper {\n            display: grid;\n            grid-template-columns: repeat(3, minmax(12rem, 16rem));\n            grid-gap: 4.3rem;\n            justify-content: center;\n          }\n\n          \n          \n          article {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            overflow: hidden;\n            border-radius: 15px;\n            border: 2px;\n            padding: 15px;\n            margin: 2rem;\n            width: 250px;\n            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n          }\n          \n          article:hover {\n            transform: scale(1.05);\n            transition: all 0.2s ease-out;\n            cursor: pointer;\n          }\n          \n          .card-image {\n            object-fit: cover;\n            width: 100%;\n            height: 250px;\n          }\n          \n          p.title {\n            font-family: Century Gothic, Candara, serif;\n            overflow: hidden;\n            font-size: 23px;\n            margin-top: 0.3rem;\n            margin-bottom: 0.3rem;\n          }\n          \n          p.title:after {\n            content: " ";\n            display: block;\n            border-bottom: 1px solid #a8a7a7;\n          }\n          \n          p.recipeTag {\n            color: #f54254;\n            text-transform: uppercase;\n            font-weight: lighter;\n            margin-top: 0.4rem;\n            margin-bottom: 0.4rem;\n          }\n          \n          div.rating > img {\n            display: inline-block;\n            object-fit: scale-down;\n            width: 100px;\n            margin-right: 3rem;\n          }\n\n          div.rating-time {\n            margin-top: 0.4rem;\n            margin-bottom: 0.4rem;\n            display: flex;\n            align-items: center;\n          }\n          \n          div.rating-time > img {\n            display: inline-block;\n            object-fit: scale-down;\n            width: 100px;\n            margin-right: 3rem;\n          }\n          \n          div.rating-time img.time {\n            object-fit: scale-down;\n            width: 20px;\n            margin-right: 0.3rem;\n          }\n          \n          .hidden {\n            display: none;\n          }\n          \n          ';const r=e.title;console.log("Recipe title: "+r);const a=document.createElement("p");a.classList.add("title");const i=document.createElement("a");i.innerText=r,a.appendChild(i);const s=e.image;console.log("Recipe image url: "+s);const o=document.createElement("img");o.classList.add("card-image"),o.setAttribute("src",s),o.setAttribute("alt",r);let d=e.readyInMinutes;console.log("Recipe cook time: "+d),d+=" Minutes";const c=document.createElement("div");c.classList.add("rating-time"),c.innerHTML=`\n        <span>4.5</span>\n        <img src="images\\5-stars-red.jpeg" class = "rating"></img>\n        <img src="images\\time-logo.png" class = "time"></img>\n        <p>${d}</p>\n        `;var l="";for(let t=0;t<e.extendedIngredients.length;t++)l+=e.extendedIngredients[t].originalString,t!=e.extendedIngredients.length-1&&(l+=", ");console.log("Recipe ingredients: "+l);const p=document.createElement("p");p.classList.add("ingredients"),p.innerText=l.substring(0,100)+" (...)",n.appendChild(o),n.appendChild(a),n.appendChild(c),n.appendChild(p),this.shadowRoot.append(t,n)}get data(){return this.json}}customElements.define("recipe-card",e)},313:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}nextCards(){const e=this.shadowRoot.querySelectorAll("recipe-card");for(let t=e.length-4;t>=0;t--)"display: none"!=e[t].getAttribute("style")&&(e[t].setAttribute("style","display: none"),e[t+3].style.display="")}prevCards(){const e=this.shadowRoot.querySelectorAll("recipe-card");for(let t=3;t<e.length;t++)"display: none"!=e[t].getAttribute("style")&&(e[t].setAttribute("style","display: none"),e[t-3].style.display="")}createCardCarousel(e){for(let t=0;t<e.length;t++)t>2&&e[t].setAttribute("style","display: none"),this.shadowRoot.append(e[t])}}customElements.define("card-carousel",e)},439:()=>{}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n(899),n(374),n(437),n(313),n(439)})();