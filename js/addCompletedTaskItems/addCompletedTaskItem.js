import { createCompletedTaskItem } from './createCompletedTaskItem.js'

export function addCompletedTaskItem(DOMname, id, text) {
	createCompletedTaskItem(DOMname, id, text);
	for (let i = 1; i <= document.querySelector('.tasks__completed-tasks-list').childElementCount; i++) {
		if (document.querySelector(`.tasks__completed-tasks-list > div:nth-child(${i}) > div > span`).clientWidth >= document.querySelector(`.tasks__completed-tasks-list > div:nth-child(${i}) > div`).clientWidth) {
			document.querySelector(`.tasks__completed-tasks-list > div:nth-child(${i})`).classList.add('animated')
		}
	}
}