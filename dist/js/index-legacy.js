!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,i){if(t){if("string"==typeof t)return e(t,i);var s={}.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?e(t,i):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=Array(e);i<e;i++)s[i]=t[i];return s}System.register([],(function(e,i){"use strict";return{execute:function(){var s=document.createElement("style");s.textContent='@import"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";.todo__main-block{display:flex;flex-direction:row;justify-content:center;border-left:10px solid #43e5a0;border-radius:20px;height:700px;padding:0 200px;backdrop-filter:blur(150px);background:rgba(3,48,31,.01);box-shadow:0 2px 10px rgba(0,0,0,.25)}.todo__content{display:flex;flex-direction:row;gap:100px;margin-top:45px}.items-list__item-button,.items-list__item-button-created{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;width:185px;height:32px;padding:8px 7px;gap:10px;transition:all .1s ease-in;border-radius:5px}.items-list__item-button>div,.items-list__item-button>div>div,.items-list__item-button-created>div,.items-list__item-button-created>div>div{display:flex;justify-content:start;width:150px;overflow:hidden}.items-list__item-button.animated>div>span,.items-list__item-button.animated>div>div>span,.items-list__item-button-created.animated>div>span,.items-list__item-button-created.animated>div>div>span{animation-duration:8s;animation-name:slide;animation-timing-function:linear;animation-iteration-count:infinite}.items-list__item-button>img,.items-list__item-button-created>img{width:16px;height:16px}.items-list__item-button>span,.items-list__item-button>div>span,.items-list__item-button>div>div>span,.items-list__item-button-created>span,.items-list__item-button-created>div>span,.items-list__item-button-created>div>div>span{position:relative;display:flex;flex-direction:row-reverse;font-size:16px;white-space:nowrap;font-family:Inter;color:#fff}.items-list__item-button:hover,.items-list__item-button.item-active,.items-list__item-button-created:hover,.items-list__item-button-created.item-active{background:rgba(255,255,255,.1);cursor:pointer}.item-button-created__prepend{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;gap:10px;width:185px}.items-list__item-button-created{display:flex;gap:0;justify-content:space-between}.items-list__item-button-created>img{opacity:0}.items-list__item-button-created:hover div>span{max-width:130px}.items-list__item-button-created:hover>img{transition:all .1s ease-in-out;opacity:1}.items-list__item-button-created.item-active>img{transition:all .1s ease-in-out;opacity:1}.scenarios__add{display:flex;flex-direction:column;align-items:center}.scenarios__add-button{display:flex;flex-direction:row;align-items:center;gap:8px;background:#1acd81;border-radius:8px;padding:8px;transition:all .15s ease-in-out}.scenarios__add-button>span{font-size:16px;color:#03301f}.scenarios__add-button:hover{background:#0fa968;cursor:pointer}.scenarios__add-warning{text-align:center;font-size:13px;color:red}.scenarios__add-input>input{background:#180c69;border:.8px solid #361bc3;border-radius:8px;padding:9px 12px;width:100%;height:32px;color:#fff;outline:none;font-size:16px}.scenarios__add-input>input::placeholder{color:#b3b3b3;font-size:12.8px}.scenarios__add-input>div{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-top:10px}.scenarios__add-input>div>button{font-size:16px;border-radius:8px;padding:8px;width:100px;height:32px;background:#1acd81;transition:all .15s ease-in-out;color:#03301f}.scenarios__add-input>div>button:hover{background:#0fa968;cursor:pointer}.todo__scenarios{display:flex;flex-direction:column;align-items:center;gap:20px;width:215px;height:max-content}.scenarios__title{font-size:21px;padding-bottom:8px}.scenarios__items-list{display:flex;flex-direction:column;align-items:center;border-radius:8px;padding:15px 15px 20px;background:rgba(16,133,84,.6);border:1px solid #0fa968;gap:7px;max-height:301px;overflow-y:overlay;overflow-x:hidden;scroll-behavior:smooth}.scenarios__items-list::-webkit-scrollbar{background:none;width:5px}.scenarios__items-list::-webkit-scrollbar-thumb{border-radius:10px;background:#1acd81;outline:.8px solid #43e5a0}.tasks__tasks-list{display:flex;align-items:center;flex-direction:column-reverse;gap:15px;width:530px}.tasks-list__task{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background:#11563a;border:.8px solid #43e5a0;border-radius:8px;padding:0 10px 0 8px;width:100%;height:40px}.tasks-list__task.animated>div>div>span{animation-duration:10s;animation-name:slide;animation-timing-function:linear;animation-iteration-count:infinite}@keyframes slide{0%{transform:translate(0)}50%{transform:translate(-120%);opacity:1;visibility:visible}50.1%{opacity:0;visibility:hidden}50.1001%{transform:translate(100%);opacity:0;visibility:hidden}50.2%{visibility:visible;opacity:1}to{transform:translate(0)}}.task-left,.task-right{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px}.task-left>button,.task-right>button{height:24px}.task-left>button:hover,.task-right>button:hover{cursor:pointer}.task-left__body,.task-right__body{display:flex;justify-content:start;width:300px;overflow:hidden}.task-left__text,.task-right__text{position:relative;display:flex;flex-direction:row-reverse;font-size:16px;white-space:nowrap;font-family:Inter}.task-left__data,.task-right__data{font-size:13px}.tasks__completed-tasks-list{display:flex;align-items:flex-end;flex-direction:column-reverse;gap:15px;width:100%}.tasks__completed-tasks-list>div{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background:#11563a;border:.8px solid #43e5a0;border-radius:8px;padding:0 10px 0 14px;width:500px;height:40px}.tasks__completed-tasks-list>div.animated>div>span{animation-duration:10s;animation-name:slide;animation-timing-function:linear;animation-iteration-count:infinite}.tasks__completed-tasks-list>div>div{display:flex;justify-content:start;width:400px;overflow:hidden}.tasks__completed-tasks-list>div>div>span{position:relative;display:flex;flex-direction:row-reverse;white-space:nowrap}.tasks__completed-tasks-list>div>button{height:22px}.tasks__completed-tasks-list>div>button:hover{cursor:pointer}.todo__tasks{display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;gap:30px;height:max-content}.tasks__bottom{display:flex;flex-direction:column;align-items:start;gap:30px;max-height:431px;overflow-y:overlay;overflow-x:hidden;padding-right:10px}.tasks__bottom::-webkit-scrollbar{background:none;width:5px}.tasks__bottom::-webkit-scrollbar-thumb{border-radius:10px;background:#1acd81;outline:.8px solid #43e5a0}.tasks__title{font-size:21px}.tasks__add-task{display:flex;align-items:center;flex-direction:row}.tasks__add-task>input{background:#180c69;border:.8px solid #361bc3;border-radius:8px;padding:9px 25px 9px 12px;width:400px;height:40px;color:#fff;outline:none;font-size:16px}.tasks__add-task>input::placeholder{color:#b3b3b3;font-size:12.8px}.tasks__add-task>button{font-size:16px;border-radius:8px;padding:8px;width:max-content;height:40px;background:#1acd81;transition:all .15s ease-in-out;color:#03301f;margin-left:-18px}.tasks__add-task>button:hover{background:#0fa968;cursor:pointer}.tasks__sort-delete,.tasks__completed-tasks{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;gap:20px}.tasks__sort-delete>button,.tasks__completed-tasks>button{display:flex;align-items:center;flex-direction:row;gap:5px}.tasks__sort-delete>button>span,.tasks__completed-tasks>button>span{font-size:14px;color:#fff}.tasks__sort-delete>button:hover,.tasks__completed-tasks>button:hover{transition:all 1.5s ease-in-out;cursor:pointer}@media screen and (width <= 1500px){.todo__main-block{padding:0 150px}}@media screen and (width <= 1450px){.todo__title{margin-bottom:30px;font-size:32px}}@media screen and (width <= 1350px){.todo__main-block{height:600px;padding:0 100px}}@media screen and (width <= 1150px){.todo__main-block{height:600px;padding:0 80px}.tasks__add-task>input{width:350px}.tasks__bottom{max-height:none;padding-right:0}}@media screen and (width <= 1050px){body{align-items:flex-start!important;height:fit-content!important}.todo{padding-bottom:60px}.todo__content{flex-direction:column;align-items:center}.todo__main-block{height:max-content}.tasks__title{margin:0 auto}.tasks__tasks-list{width:480px}.task-left__body{width:250px}.tasks__completed-tasks-list>div{width:450px}.tasks__completed-tasks-list>div>div{width:350px}.todo__scenarios{width:calc(100% - 150px)}.scenarios__items-list{width:75%;gap:15px;max-height:none}.items-list__item-button,.items-list__item-button-created{width:90%}.todo__tasks{padding-bottom:30px}}@media screen and (width <= 710px){.tasks__tasks-list{width:400px}.task-left__body{width:180px}.tasks__completed-tasks-list>div{width:370px}.tasks__add-task>input{width:270px}.todo__scenarios{width:calc(100% - 70px)}body .todo__title{margin-bottom:20px;font-size:26px}.todo{padding-bottom:50px}}@media screen and (width <= 650px){.todo__main-block{padding:0 50px}}@media screen and (width <= 550px){.item-button__text,.scenarios__add-button>span,.tasks__add-task>input,.tasks__add-task>button,.task-left__text,.task-right__text,.tasks__completed-tasks-list>div>div>span,.items-list__item-button-created>div>div>span{font-size:14px!important}.tasks__add-task>input,.tasks__add-task>button{height:35px}.tasks__sort-delete>button>span,.tasks__completed-tasks>button>span,.task-right__data{font-size:12px}.tasks__completed-tasks-list>div>div{width:200px}.todo__main-block{padding:0 30px}.todo__content{gap:75px}}@media screen and (width <= 500px){.todo__main-block{padding:0 25px}.tasks__tasks-list{width:350px}.task-left__body{width:130px}.tasks__completed-tasks-list>div{width:320px}.tasks__add-task>input{width:220px}.todo__scenarios{width:calc(100% - 50px)}}@media screen and (width <= 450px){.tasks__tasks-list{width:300px}.task-left__body{width:90px}.tasks__completed-tasks-list>div{width:270px}.tasks__add-task>input{width:190px}.todo__scenarios{width:calc(100% - 40px)}}@media screen and (width <= 420px){.tasks__tasks-list{width:270px}.task-left__body{width:75px}.tasks__completed-tasks-list>div{width:240px}.tasks__add-task>input{width:190px}.todo__scenarios{width:calc(100% - 30px)}.item-button__text,.scenarios__add-button>span,.tasks__add-task>input,.tasks__add-task>button,.task-left__text,.task-right__text,.tasks__completed-tasks-list>div>div>span,.items-list__item-button-created>div>div>span{font-size:12px!important}.tasks__add-task>input,.tasks__add-task>button{height:30px}.tasks__sort-delete>button>span,.tasks__completed-tasks>button>span,.task-right__data{font-size:10px}.todo__main-block{padding:0 15px}.tasks__completed-tasks-list>div>div{width:180px}.todo__content{margin-top:30px}}@media screen and (width <= 385px){.tasks__tasks-list{width:240px}.task-left__body{width:60px}.tasks__completed-tasks-list>div{width:210px}.tasks__add-task>input{width:190px}.todo__scenarios{width:calc(100% - 30px)}.item-button__text,.scenarios__add-button>span,.tasks__add-task>input,.tasks__add-task>button,.task-left__text,.task-right__text,.tasks__completed-tasks-list>div>div>span,.items-list__item-button-created>div>div>span{font-size:10px!important}.tasks__add-task>input,.tasks__add-task>button{height:25px}.tasks__sort-delete>button>span,.tasks__completed-tasks>button>span,.task-right__data{font-size:8px}.todo__main-block{padding:0 10px}.tasks__completed-tasks-list>div>div{width:150px}.todo{padding-bottom:45px}.todo__content{gap:40px}}@media screen and (width <= 370px){.tasks__tasks-list{width:220px}.task-left__body{width:45px}.tasks__completed-tasks-list>div{width:190px}.tasks__add-task>input{width:190px}.todo__scenarios{width:calc(100% - 50px)}.item-button__text,.scenarios__add-button>span,.tasks__add-task>input,.tasks__add-task>button,.task-left__text,.task-right__text,.tasks__completed-tasks-list>div>div>span,.items-list__item-button-created>div>div>span{font-size:8px!important}.tasks__add-task>input,.tasks__add-task>button{height:20px}.tasks__sort-delete>button>span,.tasks__completed-tasks>button>span,.task-right__data{font-size:7px}.todo__main-block{padding:0 8px}.tasks__completed-tasks-list>div>div{width:130px}.todo{padding-bottom:35px}.todo__content{gap:35px}}@media screen and (height <= 900px){.todo__main-block{padding-bottom:15px}#app .todo__title{font-size:32px;margin-bottom:30px}.todo{position:relative;padding-bottom:60px;top:50px}body{align-items:flex-start!important;height:fit-content!important;flex-direction:row!important}}@media screen and (width <= 1050px) and (height >= 901px){.todo{padding-top:40px}}*,*:before,*:after{box-sizing:border-box}body{display:flex;justify-content:center;align-items:center;box-sizing:border-box;height:100vh;margin:0;padding:0;background-color:#272727;background-image:url('+new URL("../images/background.svg",i.meta.url).href+");background-size:cover;background-repeat:no-repeat;background-position:center;background-attachment:fixed;font-family:Inter;font-weight:400;font-size:16px;color:#fff}body::-webkit-scrollbar{background:#272727;width:5px}body::-webkit-scrollbar-thumb{border-radius:10px;background:#1acd81;outline:.8px solid #43e5a0}button{border:0;background:none;padding:0}.todo{display:flex;flex-direction:column;align-items:center}.todo__title{margin-bottom:45px;font-weight:500;font-size:40px;text-transform:uppercase}.hidden{display:none;transition:display .15s ease-in-out}.rotated{transform:rotate(180deg);transition:transform .15s ease-in-out}.reversed{transition:flex-direction .15s ease-in-out}.scenarios__add-button:active,.add-input__buttons>button:active,.add-task__button:active{background:#108554!important}.todo{filter:drop-shadow(0 4px 5px rgba(0,0,0,.2509803922))}\n",document.head.appendChild(s),e({a:_,b:o,c:b,d:l,r:k,w:p});(a="undefined"!=typeof document&&document.createElement("link").relList)&&a.supports&&a.supports("modulepreload");var a,n=function(t,e,i){var s=Promise.resolve();return s.then((function(){return t()})).catch((function(t){var e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t}))};function o(){return x.sorting?(document.querySelector(".sort-button__icon").classList.add("rotated"),!0):(document.querySelector(".sort-button__icon").classList.remove("rotated"),!1)}document.querySelector(".tasks__sort-button").addEventListener("click",(function(){o()?x.sorting=!1:x.sorting=!0})),window.addEventListener("load",o);var d=Object.freeze(Object.defineProperty({__proto__:null,checkSorting:o},Symbol.toStringTag,{value:"Module"})),r=e("s",{bookmark:"./images/icons/scenario-icons/bookmark.svg",briefcase:"./images/icons/scenario-icons/briefcase.svg",delete:"./images/icons/scenario-icons/delete.svg",home:"./images/icons/scenario-icons/home.svg",info:"./images/icons/scenario-icons/info.svg",plus:"./images/icons/scenario-icons/plus.svg",sun:"./images/icons/scenario-icons/sun.svg",user:"./images/icons/scenario-icons/user.svg"}),c=e("t",{circle:"./images/icons/task-icons/circle.svg",circleActive:"./images/icons/task-icons/circle-active.svg",delete:"./images/icons/task-icons/delete.svg",star:"./images/icons/task-icons/star.svg",starActive:"./images/icons/task-icons/star-active.svg"});function l(t,e,i,s){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],n=document.createElement("div");n.classList.add("tasks-list__task","".concat(t,"-").concat(e)),n.innerHTML='\n\t<div class="task-left">\n\t\t<button class="task-left__button-circle">\n\t\t\t<img class="button-circle__image" src="'.concat(c.circle,'">\n\t\t</button>\n\t\t<div class="task-left__body">\n\t\t\t<span class="task-left__text">').concat(i,'</span>\n\t\t</div>\n\t</div>\n\t<div class="task-right">\n\t\t<span class="task-right__data">').concat(s,'</span>\n\t\t<button class="task-right__button-important">\n\t\t\t<img class="button-important__image" src="').concat(a?c.starActive:c.star,'">\n\t\t</button>\n\t\t<button class="task-right__button-delete">\n\t\t\t<img class="button-delete__image" src="').concat(c.delete,'">\n\t\t</button>\n\t</div>'),document.querySelector(".tasks__tasks-list").appendChild(n)}function p(){var e=document.querySelector(".tasks__tasks-list"),i=t(e.childNodes);e&&Array.from(e.childNodes).forEach((function(t){t&&t.remove()}));var s=[];i.forEach((function(t){var e={DOMname:t.classList[1].slice(0,-2),id:Number(t.classList[1].at(-1)),text:t.querySelector(".task-left__text").textContent,data:t.querySelector(".task-right__data").textContent,isImportant:t.querySelector(".task-right__button-important > img").attributes.src.nodeValue===c.starActive};s.push(e)})),o()?s.sort((function(t,e){return new Date(t.data)-new Date(e.data)})).sort((function(t,e){return t.isImportant-e.isImportant})).forEach((function(t){l(t.DOMname,t.id,t.text,t.data,t.isImportant),document.querySelector(".".concat(t.DOMname,"-").concat(t.id," > div > div > span")).clientWidth>=document.querySelector(".".concat(t.DOMname,"-").concat(t.id," > div > div")).clientWidth&&document.querySelector(".".concat(t.DOMname,"-").concat(t.id)).classList.add("animated")})):s.sort((function(t,e){return new Date(e.data)-new Date(t.data)})).sort((function(t,e){return t.isImportant-e.isImportant})).forEach((function(t){l(t.DOMname,t.id,t.text,t.data,t.isImportant),document.querySelector(".".concat(t.DOMname,"-").concat(t.id," > div > div > span")).clientWidth>=document.querySelector(".".concat(t.DOMname,"-").concat(t.id," > div > div")).clientWidth&&document.querySelector(".".concat(t.DOMname,"-").concat(t.id)).classList.add("animated")}))}function _(){var t=u.reduce((function(t,e){return e.tasks=e.tasks.filter((function(t){return t})),t.push(e),t}),[]);localStorage.setItem("todo-user-js",JSON.stringify([t,x]))}var m,u=e("u",null===(m=JSON.parse(localStorage.getItem("todo-user-js")))?[{icon:r.user,text:"Все задачи",DOMname:"item-all",isCreated:!1,tasks:[]},{icon:r.sun,text:"Свободное время",DOMname:"item-free-time",isCreated:!1,tasks:[]},{icon:r.briefcase,text:"Рабочие дела",DOMname:"item-work",isCreated:!1,tasks:[]},{icon:r.home,text:"Домашние дела",DOMname:"item-home",isCreated:!1,tasks:[]},{icon:r.bookmark,text:"Избранное",DOMname:"item-favorites",isCreated:!1,tasks:[]}]:m[0]),x=function(){var t=JSON.parse(localStorage.getItem("todo-user-js"));return null===t?{sorting:!1}:t[1]}();function b(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.info,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=document.createElement("button");s?(a.classList.add("items-list__item-button-created","".concat(e)),a.innerHTML='\n\t\t<div class="item-button-created__prepend">\n\t\t\t<img class="item-button-created__image" src="'.concat(i,'">\n\t\t\t<div class="item-button__body"><span class="item-button-created__text">').concat(t,'</span></div>\n\t\t</div>\n\t\t<img class="item-button-created__image-delete" src="').concat(r.delete,'">'),document.querySelector(".scenarios__items-list").appendChild(a)):(a.classList.add("items-list__item-button","".concat(e)),a.innerHTML='\n\t\t<img class="item-button__image" src="'.concat(i,'">\n\t\t<div class="item-button__body"><span class="item-button__text">').concat(t,"</span></div>"),document.querySelector(".scenarios__items-list").appendChild(a))}function k(){document.querySelector(".item-all").classList.add("item-active"),u.forEach((function(t){t.tasks.forEach((function(e){l(t.DOMname,e.id,e.text,e.data,e.isImportant),setTimeout((function(){document.querySelector(".".concat(t.DOMname,"-").concat(e.id," > div > div > span")).clientWidth>=document.querySelector(".".concat(t.DOMname,"-").concat(e.id," > div > div")).clientWidth&&document.querySelector(".".concat(t.DOMname,"-").concat(e.id)).classList.add("animated")}),1e3)})),p()}))}e("u",u=new Proxy(u,{set:function(t,e,i){return"length"!==e&&(t[e]=i,_()),!0},deleteProperty:function(t,e){return delete t[e],_(),!0}})),x=new Proxy(x,{set:function(t,e,i){return"length"!==e&&(t[e]=i,o(),p(),_()),!0}}),n((function(){return i.import("./scenariosAdd-legacy.js")}),0,i.meta.url),n((function(){return i.import("./scenarioItems-legacy.js")}),0,i.meta.url),n((function(){return Promise.resolve().then((function(){return d}))}),0,i.meta.url),n((function(){return i.import("./showCompletedTasks-legacy.js")}),0,i.meta.url),n((function(){return i.import("./taskItems-legacy.js")}),0,i.meta.url),n((function(){return i.import("./deleteElements-legacy.js")}),0,i.meta.url),function(){u.forEach((function(t){b(t.text,t.DOMname,t.icon,t.isCreated)}));for(var t=1;t<=u.length;t++)document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div > img"))?document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div > div > span")).clientWidth>=document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div > div")).clientWidth&&document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,")")).classList.add("animated"):document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div > span")).clientWidth>=document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div")).clientWidth&&document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,")")).classList.add("animated")}(),window.addEventListener("load",(function(){k()})),window.addEventListener("keydown",(function(t){75===t.keyCode&&t.ctrlKey&&t.altKey&&(localStorage.removeItem("todo-user-js"),window.location.reload())}))}}}))}();
