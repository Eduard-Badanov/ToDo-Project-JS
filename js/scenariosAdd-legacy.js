System.register(["./index-legacy.js","./removeRenderedTasksOfActiveScenarioItem-legacy.js"],(function(e,t){"use strict";var c,s,i,d,n,o;return{setters:[e=>{c=e.u,s=e.s,i=e.c,d=e.a,n=e.r},e=>{o=e.r}],execute:function(){document.querySelector(".scenarios__add-button").addEventListener("click",(()=>{document.querySelector(".scenarios__items-list").childNodes.length>=10?(document.querySelector(".scenarios__add-warning").classList.remove("hidden"),setTimeout((()=>document.querySelector(".scenarios__add-warning").classList.add("hidden")),5e3)):(document.querySelector(".scenarios__add-button").classList.add("hidden"),document.querySelector(".scenarios__add-input").classList.remove("hidden"),document.querySelector(".scenarios__add-input > input").focus())})),document.querySelector(".button-cancel").addEventListener("click",(()=>{document.querySelector(".scenarios__add-input > input").value="",document.querySelector(".scenarios__add-input").classList.add("hidden"),document.querySelector(".scenarios__add-button").classList.remove("hidden")})),document.querySelector(".button-add").addEventListener("click",(()=>{if(""!==document.querySelector(".scenarios__add-input > input").value.trim()){let e=null;document.querySelectorAll(".items-list__item-button-created").forEach((t=>{e=Math.max(t.classList[1].match(/\d/g).join(", "))}));const t=document.querySelector(".scenarios__add-input > input").value.trim();c.push({icon:s.info,text:t,DOMname:`item-created-${e+1}`,isCreated:!0,tasks:[]}),i(t,`item-created-${e+1}`,s.info,!0),d(),o("special"),document.querySelector(`.item-created-${e+1} > div > div > span`).clientWidth>=document.querySelector(`.item-created-${e+1} > div > div`).clientWidth&&document.querySelector(`.item-created-${e+1}`).classList.add("animated"),document.querySelector(".scenarios__add-input > input").value="",document.querySelector(".scenarios__items-list").childNodes.forEach((e=>{e.classList.contains("item-active")&&e.classList.remove("item-active")}))||document.querySelector(`.item-created-${e+1}`).classList.add("item-active"),document.querySelector(".scenarios__items-list").scrollTop=document.querySelector(".scenarios__items-list").scrollHeight}document.querySelector(".scenarios__add-input").classList.add("hidden"),document.querySelector(".scenarios__add-button").classList.remove("hidden")})),document.querySelector(".scenarios__add-input > input").addEventListener("keydown",(e=>{"Enter"===e.key&&document.querySelector(".button-add").click()})),document.querySelector(".scenarios__add-input > input").addEventListener("keydown",(e=>{"Escape"===e.key&&document.querySelector(".button-cancel").click()})),document.querySelector(".scenarios__items-list").addEventListener("click",(e=>{if(e.target.classList.contains("item-button-created__image-delete")){const t=e.target.closest("button").classList[1];c.forEach(((e,s)=>{e.DOMname===t&&delete c[s],e.tasks.length>0&&document.querySelector(".tasks__tasks-list").childNodes.forEach((e=>{e.classList[1].slice(0,-2)===t&&e.remove()}))})),d(),e.target.closest("button").remove(),setTimeout((()=>{n()}),1)}}))}}}));