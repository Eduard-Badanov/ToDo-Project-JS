import { user } from '../userInfo.js'
import { createTaskItem } from './createTaskItem.js'
import { watchingTasksItems } from './watchingTasksItems.js'

export function renderDefaultTasksOfActiveScenarioItem() {
	document.querySelector('.item-all').classList.add('item-active')
	user.forEach((element) => {
		element.tasks.forEach((el) => {
			createTaskItem(element.DOMname, el.id, el.text, el.data, el.isImportant)
		})
		watchingTasksItems()
	})
}