System.register(["./index-legacy.js"],(function(e,t){"use strict";var s;return{setters:[e=>{s=e.u}],execute:function(){e("r",(function(e){if("item-all"!==e&&"item-favorites"!==e&&"special"!==e)s.forEach((t=>{t.DOMname===e&&t.tasks.length>0&&t.tasks.forEach((e=>{null!==document.querySelector(`.${t.DOMname}-${e.id}`)&&"item-all"!==t.DOMname&&document.querySelector(`.${t.DOMname}-${e.id}`).remove()}))}));else if("item-all"===e||"special"===e)for(;document.querySelector(".tasks__tasks-list").childNodes.length>0;)document.querySelector(".tasks__tasks-list").childNodes.forEach((e=>{e.remove()}));else if("item-favorites"===e)for(;document.querySelector(".tasks__tasks-list").childNodes.length>0;)document.querySelector(".tasks__tasks-list").childNodes.forEach((e=>{e.remove()}))}))}}}));
