function x(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}function k(){return _.sorting?(document.querySelector(".sort-button__icon").classList.add("rotated"),!0):(document.querySelector(".sort-button__icon").classList.remove("rotated"),!1)}document.querySelector(".tasks__sort-button").addEventListener("click",()=>{k()?_.sorting=!1:_.sorting=!0});window.addEventListener("load",k);const u={bookmark:"./images/icons/scenario-icons/bookmark.svg",briefcase:"./images/icons/scenario-icons/briefcase.svg",delete:"./images/icons/scenario-icons/delete.svg",home:"./images/icons/scenario-icons/home.svg",info:"./images/icons/scenario-icons/info.svg",plus:"./images/icons/scenario-icons/plus.svg",sun:"./images/icons/scenario-icons/sun.svg",user:"./images/icons/scenario-icons/user.svg"},n={circle:"./images/icons/task-icons/circle.svg",circleActive:"./images/icons/task-icons/circle-active.svg",delete:"./images/icons/task-icons/delete.svg",star:"./images/icons/task-icons/star.svg",starActive:"./images/icons/task-icons/star-active.svg"};function m(t,e,s,a,i=!1){const c=document.createElement("div");c.classList.add("tasks-list__task","".concat(t,"-").concat(e)),c.innerHTML='\n	<div class="task-left">\n		<button class="task-left__button-circle">\n			<img class="button-circle__image" src="'.concat(n.circle,'">\n		</button>\n		<div class="task-left__body">\n			<span class="task-left__text">').concat(s,'</span>\n		</div>\n	</div>\n	<div class="task-right">\n		<span class="task-right__data">').concat(a,'</span>\n		<button class="task-right__button-important">\n			<img class="button-important__image" src="').concat(i?n.starActive:n.star,'">\n		</button>\n		<button class="task-right__button-delete">\n			<img class="button-delete__image" src="').concat(n.delete,'">\n		</button>\n	</div>'),document.querySelector(".tasks__tasks-list").appendChild(c)}function d(){const t=document.querySelector(".tasks__tasks-list"),e=[...t.childNodes];t&&Array.from(t.childNodes).forEach(i=>{i&&i.remove()});const s=[];e.forEach(a=>{const i=a.classList[1].slice(0,-2),c=Number(a.classList[1].at(-1)),l=a.querySelector(".task-left__text").textContent,f=a.querySelector(".task-right__data").textContent,S=a.querySelector(".task-right__button-important > img").attributes.src.nodeValue===n.starActive,q={DOMname:i,id:c,text:l,data:f,isImportant:S};s.push(q)}),k()?s.sort((a,i)=>new Date(a.data)-new Date(i.data)).sort((a,i)=>a.isImportant-i.isImportant).forEach(a=>{m(a.DOMname,a.id,a.text,a.data,a.isImportant),document.querySelector(".".concat(a.DOMname,"-").concat(a.id," > div > div > span")).clientWidth>=document.querySelector(".".concat(a.DOMname,"-").concat(a.id," > div > div")).clientWidth&&document.querySelector(".".concat(a.DOMname,"-").concat(a.id)).classList.add("animated")}):s.sort((a,i)=>new Date(i.data)-new Date(a.data)).sort((a,i)=>a.isImportant-i.isImportant).forEach(a=>{m(a.DOMname,a.id,a.text,a.data,a.isImportant),document.querySelector(".".concat(a.DOMname,"-").concat(a.id," > div > div > span")).clientWidth>=document.querySelector(".".concat(a.DOMname,"-").concat(a.id," > div > div")).clientWidth&&document.querySelector(".".concat(a.DOMname,"-").concat(a.id)).classList.add("animated")})}function $(){let t=JSON.parse(localStorage.getItem("todo-user-js"));return t===null?[{icon:u.user,text:"Все задачи",DOMname:"item-all",isCreated:!1,tasks:[]},{icon:u.sun,text:"Свободное время",DOMname:"item-free-time",isCreated:!1,tasks:[]},{icon:u.briefcase,text:"Рабочие дела",DOMname:"item-work",isCreated:!1,tasks:[]},{icon:u.home,text:"Домашние дела",DOMname:"item-home",isCreated:!1,tasks:[]},{icon:u.bookmark,text:"Избранное",DOMname:"item-favorites",isCreated:!1,tasks:[]}]:t[0]}function L(){let t=JSON.parse(localStorage.getItem("todo-user-js"));return t===null?{sorting:!1}:t[1]}function b(){return o.reduce((e,s)=>(s.tasks=s.tasks.filter(a=>a),e.push(s),e),[])}function r(){let t=b();localStorage.setItem("todo-user-js",JSON.stringify([t,_]))}let o=$(),_=L();o=new Proxy(o,{set:(t,e,s)=>(e!=="length"&&(t[e]=s,r()),!0),deleteProperty:(t,e)=>(delete t[e],r(),!0)});_=new Proxy(_,{set:(t,e,s)=>(e!=="length"&&(t[e]=s,k(),d(),r()),!0)});function g(t,e,s=u.info,a=!1){const i=document.createElement("button");a?(i.classList.add("items-list__item-button-created","".concat(e)),i.innerHTML='\n		<div class="item-button-created__prepend">\n			<img class="item-button-created__image" src="'.concat(s,'">\n			<div class="item-button__body"><span class="item-button-created__text">').concat(t,'</span></div>\n		</div>\n		<img class="item-button-created__image-delete" src="').concat(u.delete,'">'),document.querySelector(".scenarios__items-list").appendChild(i)):(i.classList.add("items-list__item-button","".concat(e)),i.innerHTML='\n		<img class="item-button__image" src="'.concat(s,'">\n		<div class="item-button__body"><span class="item-button__text">').concat(t,"</span></div>"),document.querySelector(".scenarios__items-list").appendChild(i))}function E(){o.forEach(t=>{g(t.text,t.DOMname,t.icon,t.isCreated)});for(let t=1;t<=o.length;t++)document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div > img"))?document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div > div > span")).clientWidth>=document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div > div")).clientWidth&&document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,")")).classList.add("animated"):document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div > span")).clientWidth>=document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,") > div")).clientWidth&&document.querySelector(".scenarios__items-list > button:nth-child(".concat(t,")")).classList.add("animated")}function v(){document.querySelector(".item-all").classList.add("item-active"),o.forEach(t=>{t.tasks.forEach(e=>{m(t.DOMname,e.id,e.text,e.data,e.isImportant),setTimeout(()=>{document.querySelector(".".concat(t.DOMname,"-").concat(e.id," > div > div > span")).clientWidth>=document.querySelector(".".concat(t.DOMname,"-").concat(e.id," > div > div")).clientWidth&&document.querySelector(".".concat(t.DOMname,"-").concat(e.id)).classList.add("animated")},1e3)}),d()})}function p(t){if(t!=="item-all"&&t!=="item-favorites"&&t!=="special")o.forEach(e=>{e.DOMname===t&&e.tasks.length>0&&e.tasks.forEach(s=>{document.querySelector(".".concat(e.DOMname,"-").concat(s.id))!==null&&e.DOMname!=="item-all"&&document.querySelector(".".concat(e.DOMname,"-").concat(s.id)).remove()})});else if(t==="item-all"||t==="special")for(;document.querySelector(".tasks__tasks-list").childNodes.length>0;)document.querySelector(".tasks__tasks-list").childNodes.forEach(e=>{e.remove()});else if(t==="item-favorites")for(;document.querySelector(".tasks__tasks-list").childNodes.length>0;)document.querySelector(".tasks__tasks-list").childNodes.forEach(e=>{e.remove()})}document.querySelector(".scenarios__add-button").addEventListener("click",()=>{document.querySelector(".scenarios__items-list").childNodes.length>=10?(document.querySelector(".scenarios__add-warning").classList.remove("hidden"),setTimeout(()=>document.querySelector(".scenarios__add-warning").classList.add("hidden"),5e3)):(document.querySelector(".scenarios__add-button").classList.add("hidden"),document.querySelector(".scenarios__add-input").classList.remove("hidden"),document.querySelector(".scenarios__add-input > input").focus())});document.querySelector(".button-cancel").addEventListener("click",()=>{document.querySelector(".scenarios__add-input > input").value="",document.querySelector(".scenarios__add-input").classList.add("hidden"),document.querySelector(".scenarios__add-button").classList.remove("hidden")});document.querySelector(".button-add").addEventListener("click",()=>{if(document.querySelector(".scenarios__add-input > input").value.trim()!==""){let t=null;document.querySelectorAll(".items-list__item-button-created").forEach(s=>{t=Math.max(s.classList[1].match(/\d/g).join(", "))});const e=document.querySelector(".scenarios__add-input > input").value.trim();o.push({icon:u.info,text:e,DOMname:"item-created-".concat(t+1),isCreated:!0,tasks:[]}),g(e,"item-created-".concat(t+1),u.info,!0),r(),p("special"),document.querySelector(".item-created-".concat(t+1," > div > div > span")).clientWidth>=document.querySelector(".item-created-".concat(t+1," > div > div")).clientWidth&&document.querySelector(".item-created-".concat(t+1)).classList.add("animated"),document.querySelector(".scenarios__add-input > input").value="",document.querySelector(".scenarios__items-list").childNodes.forEach(s=>{s.classList.contains("item-active")&&s.classList.remove("item-active")})||document.querySelector(".item-created-".concat(t+1)).classList.add("item-active"),document.querySelector(".scenarios__items-list").scrollTop=document.querySelector(".scenarios__items-list").scrollHeight}document.querySelector(".scenarios__add-input").classList.add("hidden"),document.querySelector(".scenarios__add-button").classList.remove("hidden")});document.querySelector(".scenarios__add-input > input").addEventListener("keydown",t=>{t.key==="Enter"&&document.querySelector(".button-add").click()});document.querySelector(".scenarios__add-input > input").addEventListener("keydown",t=>{t.key==="Escape"&&document.querySelector(".button-cancel").click()});document.querySelector(".scenarios__items-list").addEventListener("click",t=>{if(t.target.classList.contains("item-button-created__image-delete")){const e=t.target.closest("button").classList[1];o.forEach((s,a)=>{s.DOMname===e&&delete o[a],s.tasks.length>0&&document.querySelector(".tasks__tasks-list").childNodes.forEach(i=>{i.classList[1].slice(0,-2)===e&&i.remove()})}),r(),t.target.closest("button").remove(),setTimeout(()=>{v()},1)}});function D(){for(;document.querySelector(".tasks__completed-tasks-list").childNodes.length>0;)document.querySelector(".tasks__completed-tasks-list").childNodes.forEach(t=>{t.remove()})}function y(t){t!=="item-all"&&t!=="item-favorites"?o.forEach(e=>{e.DOMname===t&&e.tasks.length>0&&(k()?e.tasks.sort((s,a)=>new Date(s.data)-new Date(a.data)).sort((s,a)=>s.isImportant-a.isImportant).forEach(s=>{m(t,s.id,s.text,s.data,s.isImportant),d()}):e.tasks.sort((s,a)=>new Date(a.data)-new Date(s.data)).sort((s,a)=>s.isImportant-a.isImportant).forEach(s=>{m(t,s.id,s.text,s.data,s.isImportant),d()}))}):t==="item-all"?o.forEach(e=>{e.tasks.length>0&&e.tasks.forEach(s=>{m(e.DOMname,s.id,s.text,s.data,s.isImportant)}),d()}):t==="item-favorites"&&o.forEach(e=>{e.tasks.length>0&&e.tasks.forEach(s=>{s.isImportant&&m(e.DOMname,s.id,s.text,s.data,s.isImportant)}),d()})}document.querySelector(".tasks__completed-tasks").classList.add("hidden");document.querySelector(".tasks__completed-tasks").addEventListener("click",()=>{document.querySelector(".completed-tasks__image").classList.toggle("rotated"),document.querySelector(".tasks__completed-tasks-list").classList.toggle("hidden")});function h(){document.querySelector(".tasks__completed-tasks-list").childNodes.length===0?document.querySelector(".tasks__completed-tasks").classList.add("hidden"):document.querySelector(".tasks__completed-tasks").classList.remove("hidden")}document.querySelector(".scenarios__items-list").addEventListener("click",t=>{t.target.closest("button")!==null&&(document.querySelector(".scenarios__items-list").childNodes.forEach(e=>{e.classList.contains("item-active")&&(e.classList.remove("item-active"),p(e.classList[1]),D(),h())}),t.target.closest("button").classList.add("item-active"),y(t.target.closest("button").classList[1]))});function M(t,e,s,a){const i=document.createElement("div");i.classList.add("completed-tasks-list__task","".concat(t,"-").concat(e)),i.innerHTML='\n	<div class="completed-task__body">\n		<span class="completed-task__text">'.concat(s,'</span>\n		<span style="display: none" class="completed-task__data">').concat(a,'</span>\n	</div>\n	<button class="completed-task__button-delete">\n		<img class="button-delete__image" src="').concat(n.delete,'">\n	</button>'),document.querySelector(".tasks__completed-tasks-list").appendChild(i)}document.querySelector(".add-task__button").addEventListener("click",()=>{if(document.querySelector(".tasks__add-task > input").value.trim()!==""&&document.querySelector(".tasks__add-task > input").value!=="###DELETE ALL PARAMETERS###"){const t=document.querySelector(".scenarios__items-list > button.item-active").classList[1];let e=null;const s=document.querySelector(".tasks__add-task > input").value.trim(),a=O(),i=t==="item-favorites";o.forEach((c,l)=>{c.DOMname===t&&(e=c.tasks.length+1,o[l].tasks.push({id:e,text:s,data:a,isImportant:i}))}),m(t,e,s,a,i),r(),d(),document.querySelector(".".concat(t,"-").concat(e," > div > div > span")).clientWidth>=document.querySelector(".".concat(t,"-").concat(e," > div > div")).clientWidth&&document.querySelector(".".concat(t,"-").concat(e)).classList.add("animated"),document.querySelector(".tasks__add-task > input").value=""}else document.querySelector(".tasks__add-task > input").value==="###DELETE ALL PARAMETERS###"&&(localStorage.removeItem("todo-user-js"),document.querySelector(".tasks__add-task > input").value="",window.location.reload())});document.querySelector(".tasks__add-task > input").addEventListener("keydown",t=>{t.key==="Enter"&&document.querySelector(".add-task__button").click()});document.querySelector(".tasks__tasks-list").addEventListener("click",t=>{if(t.target.classList.contains("button-delete__image")||t.target.classList.contains("task-right__button-delete")){const e=t.target.closest(".tasks-list__task").classList[1].slice(0,-2),s=Number(t.target.closest(".tasks-list__task").classList[1].at(-1));document.querySelector(".".concat(e,"-").concat(s," > div > div > span")).innerHTML,o.forEach((a,i)=>{if(a.DOMname===e){let c=null;a.tasks.forEach(l=>{l.id===s&&(c=a.tasks.indexOf(l))}),delete a.tasks[c],t.target.closest(".tasks-list__task").remove()}}),r()}});document.querySelector(".tasks__tasks-list").addEventListener("click",t=>{if(t.target.classList.contains("button-circle__image")||t.target.classList.contains("task-left__button-circle")){const e=t.target.closest(".tasks-list__task").classList[1].slice(0,-2),s=Number(t.target.closest(".tasks-list__task").classList[1].at(-1)),a=document.querySelector(".".concat(e,"-").concat(s," > div > div > span:nth-child(1)")).innerHTML,i=document.querySelector(".".concat(e,"-").concat(s," > div:nth-child(2) > span")).innerHTML;document.querySelector(".".concat(e,"-").concat(s," > div > button > img")).attributes.src.nodeValue=n.circleActive,document.querySelector(".".concat(e,"-").concat(s," > div > div > span")).style.textDecoration="line-through",setTimeout(()=>document.querySelector(".".concat(e,"-").concat(s," > div > button > img")).attributes.src.nodeValue=n.circle,300),setTimeout(()=>document.querySelector(".".concat(e,"-").concat(s," > div > div > span")).style.textDecoration="none",300),setTimeout(()=>{o.forEach(c=>{if(c.DOMname===e){M(e,s,a,i),h(),document.querySelector(".completed-tasks-list__task.".concat(e,"-").concat(s," > div > span")).clientWidth>=document.querySelector(".completed-tasks-list__task.".concat(e,"-").concat(s," > div")).clientWidth&&document.querySelector(".completed-tasks-list__task.".concat(e,"-").concat(s)).classList.add("animated");let l=null;c.tasks.forEach(f=>{f.id===s&&(l=c.tasks.indexOf(f))}),delete c.tasks[l],t.target.closest(".tasks-list__task").remove()}}),r()},500)}});document.querySelector(".tasks__tasks-list").addEventListener("click",t=>{if(t.target.classList.contains("button-important__image")||t.target.classList.contains("task-right__button-important")){const e=t.target.closest(".tasks-list__task").classList[1].slice(0,-2),s=Number(t.target.closest(".tasks-list__task").classList[1].at(-1));document.querySelector(".".concat(e,"-").concat(s," > div:nth-child(2) > button > img")).attributes.src.nodeValue===n.star?(document.querySelector(".".concat(e,"-").concat(s," > div:nth-child(2) > button > img")).attributes.src.nodeValue=n.starActive,o.forEach(a=>{a.DOMname===e&&a.tasks.forEach(i=>{i.id===s&&(i.isImportant=!0,d())})}),r()):(document.querySelector(".".concat(e,"-").concat(s," > div:nth-child(2) > button > img")).attributes.src.nodeValue=n.star,o.forEach(a=>{a.DOMname===e&&a.tasks.forEach(i=>{i.id===s&&(i.isImportant=!1,d())})}),r())}});document.querySelector(".tasks__completed-tasks-list").addEventListener("click",t=>{if(t.target.closest(".completed-task__button-delete")){const e=t.target.closest(".completed-tasks-list__task").classList[1].slice(0,-2),s=Number(t.target.closest(".completed-tasks-list__task").classList[1].at(-1)),a=document.querySelector(".".concat(e,"-").concat(s," > div > span:nth-child(1)")).innerHTML,i=document.querySelector(".".concat(e,"-").concat(s," > div > span:nth-child(2)")).innerHTML;m(e,s,a,i),d(),t.target.closest(".completed-tasks-list__task").remove(),h(),o.forEach(c=>{c.DOMname===e&&c.tasks.push({id:s,text:a,data:i,isImportant:!1})}),r()}});function O(){let t=new Date,e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),i=t.getHours(),c=t.getMinutes();return c=c<10?"0".concat(c):"".concat(c),a=a<10?"0".concat(a):"".concat(a),s=s<10?"0".concat(s):"".concat(s),"".concat(i,":").concat(c," ").concat(a,".").concat(s,".").concat(e)}document.querySelector(".tasks__delete-button").addEventListener("click",()=>{for(;document.querySelector(".tasks__tasks-list").childNodes.length>0;)document.querySelector(".tasks__tasks-list").childNodes.forEach(t=>{const e=t.classList[1].slice(0,-2),s=Number(t.classList[1].at(-1));t.remove(),o.forEach(a=>{a.DOMname===e&&a.tasks.forEach(i=>{if(i.id===s){const c=a.tasks.indexOf(i);delete a.tasks[c]}})}),r()})});E();window.addEventListener("load",()=>{v()});window.addEventListener("keydown",t=>{t.keyCode===75&&t.ctrlKey&&t.altKey&&(localStorage.removeItem("todo-user-js"),window.location.reload())});export{x as __vite_legacy_guard};