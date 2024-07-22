import{t as n,u as l,d as m,a as r,w as d}from"./index.js";import{showCompletedTasks as k}from"./showCompletedTasks.js";function _(t,e,s,a){const i=document.createElement("div");i.classList.add("completed-tasks-list__task",`${t}-${e}`),i.innerHTML=`
	<div class="completed-task__body">
		<span class="completed-task__text">${s}</span>
		<span style="display: none" class="completed-task__data">${a}</span>
	</div>
	<button class="completed-task__button-delete">
		<img class="button-delete__image" src="${n.delete}">
	</button>`,document.querySelector(".tasks__completed-tasks-list").appendChild(i)}document.querySelector(".add-task__button").addEventListener("click",()=>{if(document.querySelector(".tasks__add-task > input").value.trim()!==""&&document.querySelector(".tasks__add-task > input").value!=="###DELETE ALL PARAMETERS###"){const t=document.querySelector(".scenarios__items-list > button.item-active").classList[1];let e=null;const s=document.querySelector(".tasks__add-task > input").value.trim(),a=$(),i=t==="item-favorites";l.forEach((c,o)=>{c.DOMname===t&&(e=c.tasks.length+1,l[o].tasks.push({id:e,text:s,data:a,isImportant:i}))}),m(t,e,s,a,i),r(),d(),document.querySelector(`.${t}-${e} > div > div > span`).clientWidth>=document.querySelector(`.${t}-${e} > div > div`).clientWidth&&document.querySelector(`.${t}-${e}`).classList.add("animated"),document.querySelector(".tasks__add-task > input").value=""}else document.querySelector(".tasks__add-task > input").value==="###DELETE ALL PARAMETERS###"&&(localStorage.removeItem("todo-user-js"),document.querySelector(".tasks__add-task > input").value="",window.location.reload())});document.querySelector(".tasks__add-task > input").addEventListener("keydown",t=>{t.key==="Enter"&&document.querySelector(".add-task__button").click()});document.querySelector(".tasks__tasks-list").addEventListener("click",t=>{if(t.target.classList.contains("button-delete__image")||t.target.classList.contains("task-right__button-delete")){const e=t.target.closest(".tasks-list__task").classList[1].slice(0,-2),s=Number(t.target.closest(".tasks-list__task").classList[1].at(-1));document.querySelector(`.${e}-${s} > div > div > span`).innerHTML,l.forEach((a,i)=>{if(a.DOMname===e){let c=null;a.tasks.forEach(o=>{o.id===s&&(c=a.tasks.indexOf(o))}),delete a.tasks[c],t.target.closest(".tasks-list__task").remove()}}),r()}});document.querySelector(".tasks__tasks-list").addEventListener("click",t=>{if(t.target.classList.contains("button-circle__image")||t.target.classList.contains("task-left__button-circle")){const e=t.target.closest(".tasks-list__task").classList[1].slice(0,-2),s=Number(t.target.closest(".tasks-list__task").classList[1].at(-1)),a=document.querySelector(`.${e}-${s} > div > div > span:nth-child(1)`).innerHTML,i=document.querySelector(`.${e}-${s} > div:nth-child(2) > span`).innerHTML;document.querySelector(`.${e}-${s} > div > button > img`).attributes.src.nodeValue=n.circleActive,document.querySelector(`.${e}-${s} > div > div > span`).style.textDecoration="line-through",setTimeout(()=>document.querySelector(`.${e}-${s} > div > button > img`).attributes.src.nodeValue=n.circle,300),setTimeout(()=>document.querySelector(`.${e}-${s} > div > div > span`).style.textDecoration="none",300),setTimeout(()=>{l.forEach(c=>{if(c.DOMname===e){_(e,s,a,i),k(),document.querySelector(`.completed-tasks-list__task.${e}-${s} > div > span`).clientWidth>=document.querySelector(`.completed-tasks-list__task.${e}-${s} > div`).clientWidth&&document.querySelector(`.completed-tasks-list__task.${e}-${s}`).classList.add("animated");let o=null;c.tasks.forEach(u=>{u.id===s&&(o=c.tasks.indexOf(u))}),delete c.tasks[o],t.target.closest(".tasks-list__task").remove()}}),r()},500)}});document.querySelector(".tasks__tasks-list").addEventListener("click",t=>{if(t.target.classList.contains("button-important__image")||t.target.classList.contains("task-right__button-important")){const e=t.target.closest(".tasks-list__task").classList[1].slice(0,-2),s=Number(t.target.closest(".tasks-list__task").classList[1].at(-1));document.querySelector(`.${e}-${s} > div:nth-child(2) > button > img`).attributes.src.nodeValue===n.star?(document.querySelector(`.${e}-${s} > div:nth-child(2) > button > img`).attributes.src.nodeValue=n.starActive,l.forEach(a=>{a.DOMname===e&&a.tasks.forEach(i=>{i.id===s&&(i.isImportant=!0,d())})}),r()):(document.querySelector(`.${e}-${s} > div:nth-child(2) > button > img`).attributes.src.nodeValue=n.star,l.forEach(a=>{a.DOMname===e&&a.tasks.forEach(i=>{i.id===s&&(i.isImportant=!1,d())})}),r())}});document.querySelector(".tasks__completed-tasks-list").addEventListener("click",t=>{if(t.target.closest(".completed-task__button-delete")){const e=t.target.closest(".completed-tasks-list__task").classList[1].slice(0,-2),s=Number(t.target.closest(".completed-tasks-list__task").classList[1].at(-1)),a=document.querySelector(`.${e}-${s} > div > span:nth-child(1)`).innerHTML,i=document.querySelector(`.${e}-${s} > div > span:nth-child(2)`).innerHTML;m(e,s,a,i),d(),t.target.closest(".completed-tasks-list__task").remove(),k(),l.forEach(c=>{c.DOMname===e&&c.tasks.push({id:s,text:a,data:i,isImportant:!1})}),r()}});function $(){let t=new Date,e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),i=t.getHours(),c=t.getMinutes();return c=c<10?`0${c}`:`${c}`,a=a<10?`0${a}`:`${a}`,s=s<10?`0${s}`:`${s}`,`${i}:${c} ${a}.${s}.${e}`}
