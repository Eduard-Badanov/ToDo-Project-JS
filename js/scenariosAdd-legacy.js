System.register(["./index-legacy.js","./removeRenderedTasksOfActiveScenarioItem-legacy.js"],(function(e,t){"use strict";var c,n,i,o,s,d;return{setters:[function(e){c=e.u,n=e.s,i=e.c,o=e.a,s=e.r},function(e){d=e.r}],execute:function(){document.querySelector(".scenarios__add-button").addEventListener("click",(function(){document.querySelector(".scenarios__items-list").childNodes.length>=10?(document.querySelector(".scenarios__add-warning").classList.remove("hidden"),setTimeout((function(){return document.querySelector(".scenarios__add-warning").classList.add("hidden")}),5e3)):(document.querySelector(".scenarios__add-button").classList.add("hidden"),document.querySelector(".scenarios__add-input").classList.remove("hidden"),document.querySelector(".scenarios__add-input > input").focus())})),document.querySelector(".button-cancel").addEventListener("click",(function(){document.querySelector(".scenarios__add-input > input").value="",document.querySelector(".scenarios__add-input").classList.add("hidden"),document.querySelector(".scenarios__add-button").classList.remove("hidden")})),document.querySelector(".button-add").addEventListener("click",(function(){if(""!==document.querySelector(".scenarios__add-input > input").value.trim()){var e=null;document.querySelectorAll(".items-list__item-button-created").forEach((function(t){e=Math.max(t.classList[1].match(/\d/g).join(", "))}));var t=document.querySelector(".scenarios__add-input > input").value.trim();c.push({icon:n.info,text:t,DOMname:"item-created-".concat(e+1),isCreated:!0,tasks:[]}),i(t,"item-created-".concat(e+1),n.info,!0),o(),d("special"),document.querySelector(".item-created-".concat(e+1," > div > div > span")).clientWidth>=document.querySelector(".item-created-".concat(e+1," > div > div")).clientWidth&&document.querySelector(".item-created-".concat(e+1)).classList.add("animated"),document.querySelector(".scenarios__add-input > input").value="",document.querySelector(".scenarios__items-list").childNodes.forEach((function(e){e.classList.contains("item-active")&&e.classList.remove("item-active")}))||document.querySelector(".item-created-".concat(e+1)).classList.add("item-active"),document.querySelector(".scenarios__items-list").scrollTop=document.querySelector(".scenarios__items-list").scrollHeight}document.querySelector(".scenarios__add-input").classList.add("hidden"),document.querySelector(".scenarios__add-button").classList.remove("hidden")})),document.querySelector(".scenarios__add-input > input").addEventListener("keydown",(function(e){"Enter"===e.key&&document.querySelector(".button-add").click()})),document.querySelector(".scenarios__add-input > input").addEventListener("keydown",(function(e){"Escape"===e.key&&document.querySelector(".button-cancel").click()})),document.querySelector(".scenarios__items-list").addEventListener("click",(function(e){if(e.target.classList.contains("item-button-created__image-delete")){var t=e.target.closest("button").classList[1];c.forEach((function(e,n){e.DOMname===t&&delete c[n],e.tasks.length>0&&document.querySelector(".tasks__tasks-list").childNodes.forEach((function(e){e.classList[1].slice(0,-2)===t&&e.remove()}))})),o(),e.target.closest("button").remove(),setTimeout((function(){s()}),1)}}))}}}));
