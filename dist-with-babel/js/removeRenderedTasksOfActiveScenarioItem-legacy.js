System.register(["./index-legacy.js"],(function(e,t){"use strict";var c;return{setters:[function(e){c=e.u}],execute:function(){e("r",(function(e){if("item-all"!==e&&"item-favorites"!==e&&"special"!==e)c.forEach((function(t){t.DOMname===e&&t.tasks.length>0&&t.tasks.forEach((function(e){null!==document.querySelector(".".concat(t.DOMname,"-").concat(e.id))&&"item-all"!==t.DOMname&&document.querySelector(".".concat(t.DOMname,"-").concat(e.id)).remove()}))}));else if("item-all"===e||"special"===e)for(;document.querySelector(".tasks__tasks-list").childNodes.length>0;)document.querySelector(".tasks__tasks-list").childNodes.forEach((function(e){e.remove()}));else if("item-favorites"===e)for(;document.querySelector(".tasks__tasks-list").childNodes.length>0;)document.querySelector(".tasks__tasks-list").childNodes.forEach((function(e){e.remove()}))}))}}}));
