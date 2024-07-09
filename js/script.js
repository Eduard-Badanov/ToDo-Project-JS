import { addCompletedTaskItem } from './addCompletedTaskItems/addCompletedTaskItem.js'
import { addItems } from './addScenarioItems/addItems.js'
// import { addTaskItem } from './addTaskItems/addTaskItem.js'
import('./listeners/scenariosAdd.js')
import('./listeners/scenarioItems.js')
import('./listeners/sortingElements.js')
import('./listeners/showCompletedTasks.js')
import('./listeners/taskItems.js')

addItems()
// addTaskItem()
addCompletedTaskItem('item-all', 0, 'Test')


window.addEventListener('load', () => {
	document.querySelector('.item-all').classList.add('item-active')
})