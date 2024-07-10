import { createTaskItem } from '../addTaskItems/createTaskItem.js'
import { checkSorting } from '../listeners/sortingElements.js'
import { user } from '../userInfo.js'

export function renderTasksOfActiveScenarioItem(DOMname) {
	user.forEach((element) => {
		if (element.DOMname === DOMname) {
			if (element.tasks.length > 0) {
				console.log(element.tasks)
				if (checkSorting()) {
					element.tasks.sort((a, b) => {
						return new Date(a.data) - new Date(b.data)
					}).sort((a, b) => {
						return a.isImportant - b.isImportant
					}).forEach((el) => {
						createTaskItem(DOMname, el.id, el.text, el.data, el.isImportant)
					})
				} else {
					element.tasks.sort((a, b) => {
						return new Date(b.data) - new Date(a.data)
					}).sort((a, b) => {
						return a.isImportant - b.isImportant
					}).forEach((el) => {
						createTaskItem(DOMname, el.id, el.text, el.data, el.isImportant)
					})
				}
			}
		}
	})
}