import { user } from '../userInfo.js'
import { createTaskItem } from './createTaskItem.js'

export function renderTasksOfActiveScenarioItem(DOMname) {
	user.forEach((element) => {
		if (element.DOMname === DOMname) {
			if (element.tasks.length > 0) {
				console.log(element.tasks)
				element.tasks.sort((a, b) => a.isImportant - b.isImportant).forEach((el) => {
					console.log(DOMname, el.id, el.text, el.data, el.isImportant);
					createTaskItem(DOMname, el.id, el.text, el.data, el.isImportant)
				})
			}
		}
	})
}