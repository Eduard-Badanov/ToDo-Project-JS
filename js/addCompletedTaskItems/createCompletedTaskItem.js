import { taskIcons } from '../pathsToIcons.js'

export function createCompletedTaskItem(DOMname, id, text) {
	const completedTaskItem = document.createElement('div')
	completedTaskItem.classList.add('completed-tasks-list__task', `${DOMname}-${id}`)
	completedTaskItem.innerHTML = `
	<div class="completed-task__body">
		<span class="completed-task__text">${text}</span>
	</div>
	<button class="completed-task__button-delete">
		<img class="button-delete__image" src="${taskIcons.delete}">
	</button>`
	document.querySelector('.tasks__completed-tasks-list').appendChild(completedTaskItem)
}