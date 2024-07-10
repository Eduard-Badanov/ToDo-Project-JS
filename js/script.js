import { addCompletedTaskItem } from './addCompletedTaskItems/addCompletedTaskItem.js'
import { addItems } from './addScenarioItems/addItems.js'
import { createTaskItem } from './addTaskItems/createTaskItem.js'
import { watchingTasksItems } from './addTaskItems/watchingTasksItems.js'
import { user } from './userInfo.js'
import('./listeners/scenariosAdd.js')
import('./listeners/scenarioItems.js')
import('./listeners/sortingElements.js')
import('./listeners/showCompletedTasks.js')
import('./listeners/taskItems.js')

addItems()
addCompletedTaskItem('item-all', 0, 'Test')


window.addEventListener('load', () => {
	document.querySelector('.item-all').classList.add('item-active')
	user.forEach((element) => {
		if (element.tasks.length > 0) {
			element.tasks.forEach((el) => {
				createTaskItem(element.DOMname, el.id, el.text, el.data, el.isImportant)
			})
		}
		watchingTasksItems()
	})
})