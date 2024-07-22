const E=function(){const s=typeof document<"u"&&document.createElement("link").relList;return s&&s.supports&&s.supports("modulepreload")?"modulepreload":"preload"}(),L=function(t,s){return new URL(t,s).href},y={},_=function(s,n,e){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),h=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=L(a,e),a in y)return;y[a]=!0;const d=a.endsWith(".css"),$=d?'[rel="stylesheet"]':"";if(!!e)for(let f=o.length-1;f>=0;f--){const p=o[f];if(p.href===a&&(!d||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${$}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":E,d||(c.as="script",c.crossOrigin=""),c.href=a,h&&c.setAttribute("nonce",h),document.head.appendChild(c),d)return new Promise((f,p)=>{c.addEventListener("load",f),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>s()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})};function g(){return m.sorting?(document.querySelector(".sort-button__icon").classList.add("rotated"),!0):(document.querySelector(".sort-button__icon").classList.remove("rotated"),!1)}document.querySelector(".tasks__sort-button").addEventListener("click",()=>{g()?m.sorting=!1:m.sorting=!0});window.addEventListener("load",g);const D=Object.freeze(Object.defineProperty({__proto__:null,checkSorting:g},Symbol.toStringTag,{value:"Module"})),l={bookmark:"./images/icons/scenario-icons/bookmark.svg",briefcase:"./images/icons/scenario-icons/briefcase.svg",delete:"./images/icons/scenario-icons/delete.svg",home:"./images/icons/scenario-icons/home.svg",info:"./images/icons/scenario-icons/info.svg",plus:"./images/icons/scenario-icons/plus.svg",sun:"./images/icons/scenario-icons/sun.svg",user:"./images/icons/scenario-icons/user.svg"},v={circle:"./images/icons/task-icons/circle.svg",circleActive:"./images/icons/task-icons/circle-active.svg",delete:"./images/icons/task-icons/delete.svg",star:"./images/icons/task-icons/star.svg",starActive:"./images/icons/task-icons/star-active.svg"};function k(t,s,n,e,i=!1){const o=document.createElement("div");o.classList.add("tasks-list__task",`${t}-${s}`),o.innerHTML=`
	<div class="task-left">
		<button class="task-left__button-circle">
			<img class="button-circle__image" src="${v.circle}">
		</button>
		<div class="task-left__body">
			<span class="task-left__text">${n}</span>
		</div>
	</div>
	<div class="task-right">
		<span class="task-right__data">${e}</span>
		<button class="task-right__button-important">
			<img class="button-important__image" src="${i?v.starActive:v.star}">
		</button>
		<button class="task-right__button-delete">
			<img class="button-delete__image" src="${v.delete}">
		</button>
	</div>`,document.querySelector(".tasks__tasks-list").appendChild(o)}function S(){const t=document.querySelector(".tasks__tasks-list"),s=[...t.childNodes];t&&Array.from(t.childNodes).forEach(i=>{i&&i.remove()});const n=[];s.forEach(e=>{const i=e.classList[1].slice(0,-2),o=Number(e.classList[1].at(-1)),r=e.querySelector(".task-left__text").textContent,h=e.querySelector(".task-right__data").textContent,a=e.querySelector(".task-right__button-important > img").attributes.src.nodeValue===v.starActive,d={DOMname:i,id:o,text:r,data:h,isImportant:a};n.push(d)}),g()?n.sort((e,i)=>new Date(e.data)-new Date(i.data)).sort((e,i)=>e.isImportant-i.isImportant).forEach(e=>{k(e.DOMname,e.id,e.text,e.data,e.isImportant),document.querySelector(`.${e.DOMname}-${e.id} > div > div > span`).clientWidth>=document.querySelector(`.${e.DOMname}-${e.id} > div > div`).clientWidth&&document.querySelector(`.${e.DOMname}-${e.id}`).classList.add("animated")}):n.sort((e,i)=>new Date(i.data)-new Date(e.data)).sort((e,i)=>e.isImportant-i.isImportant).forEach(e=>{k(e.DOMname,e.id,e.text,e.data,e.isImportant),document.querySelector(`.${e.DOMname}-${e.id} > div > div > span`).clientWidth>=document.querySelector(`.${e.DOMname}-${e.id} > div > div`).clientWidth&&document.querySelector(`.${e.DOMname}-${e.id}`).classList.add("animated")})}function O(){let t=JSON.parse(localStorage.getItem("todo-user-js"));return t===null?[{icon:l.user,text:"Все задачи",DOMname:"item-all",isCreated:!1,tasks:[]},{icon:l.sun,text:"Свободное время",DOMname:"item-free-time",isCreated:!1,tasks:[]},{icon:l.briefcase,text:"Рабочие дела",DOMname:"item-work",isCreated:!1,tasks:[]},{icon:l.home,text:"Домашние дела",DOMname:"item-home",isCreated:!1,tasks:[]},{icon:l.bookmark,text:"Избранное",DOMname:"item-favorites",isCreated:!1,tasks:[]}]:t[0]}function q(){let t=JSON.parse(localStorage.getItem("todo-user-js"));return t===null?{sorting:!1}:t[1]}function I(){return u.reduce((s,n)=>(n.tasks=n.tasks.filter(e=>e),s.push(n),s),[])}function b(){let t=I();localStorage.setItem("todo-user-js",JSON.stringify([t,m]))}let u=O(),m=q();u=new Proxy(u,{set:(t,s,n)=>(s!=="length"&&(t[s]=n,b()),!0),deleteProperty:(t,s)=>(delete t[s],b(),!0)});m=new Proxy(m,{set:(t,s,n)=>(s!=="length"&&(t[s]=n,g(),S(),b()),!0)});function w(t,s,n=l.info,e=!1){const i=document.createElement("button");e?(i.classList.add("items-list__item-button-created",`${s}`),i.innerHTML=`
		<div class="item-button-created__prepend">
			<img class="item-button-created__image" src="${n}">
			<div class="item-button__body"><span class="item-button-created__text">${t}</span></div>
		</div>
		<img class="item-button-created__image-delete" src="${l.delete}">`,document.querySelector(".scenarios__items-list").appendChild(i)):(i.classList.add("items-list__item-button",`${s}`),i.innerHTML=`
		<img class="item-button__image" src="${n}">
		<div class="item-button__body"><span class="item-button__text">${t}</span></div>`,document.querySelector(".scenarios__items-list").appendChild(i))}function M(){u.forEach(t=>{w(t.text,t.DOMname,t.icon,t.isCreated)});for(let t=1;t<=u.length;t++)document.querySelector(`.scenarios__items-list > button:nth-child(${t}) > div > img`)?document.querySelector(`.scenarios__items-list > button:nth-child(${t}) > div > div > span`).clientWidth>=document.querySelector(`.scenarios__items-list > button:nth-child(${t}) > div > div`).clientWidth&&document.querySelector(`.scenarios__items-list > button:nth-child(${t})`).classList.add("animated"):document.querySelector(`.scenarios__items-list > button:nth-child(${t}) > div > span`).clientWidth>=document.querySelector(`.scenarios__items-list > button:nth-child(${t}) > div`).clientWidth&&document.querySelector(`.scenarios__items-list > button:nth-child(${t})`).classList.add("animated")}function x(){document.querySelector(".item-all").classList.add("item-active"),u.forEach(t=>{t.tasks.forEach(s=>{k(t.DOMname,s.id,s.text,s.data,s.isImportant),setTimeout(()=>{document.querySelector(`.${t.DOMname}-${s.id} > div > div > span`).clientWidth>=document.querySelector(`.${t.DOMname}-${s.id} > div > div`).clientWidth&&document.querySelector(`.${t.DOMname}-${s.id}`).classList.add("animated")},1e3)}),S()})}_(()=>import("./scenariosAdd.js"),[],import.meta.url);_(()=>import("./scenarioItems.js"),[],import.meta.url);_(()=>Promise.resolve().then(()=>D),void 0,import.meta.url);_(()=>import("./showCompletedTasks.js"),[],import.meta.url);_(()=>import("./taskItems.js"),[],import.meta.url);_(()=>import("./deleteElements.js"),[],import.meta.url);M();window.addEventListener("load",()=>{x()});window.addEventListener("keydown",t=>{t.keyCode===75&&t.ctrlKey&&t.altKey&&(localStorage.removeItem("todo-user-js"),window.location.reload())});export{b as a,g as b,w as c,k as d,x as r,l as s,v as t,u,S as w};
