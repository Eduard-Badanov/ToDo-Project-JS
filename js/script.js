import { addItems } from './addScenarioItems/addItems.js'
import { renderDefaultTasksOfActiveScenarioItem } from './addTaskItems/renderDefaultTasksOfActiveScenarioItem.js'
import { deleteEmptyElements } from './localStorage/deleteEmptyElements.js'
import { getUserFromStorage, getUserParametersFromStorage } from './localStorage/getUserFromStorage.js'
import('./listeners/scenariosAdd.js')
import('./listeners/scenarioItems.js')
import('./listeners/sortingElements.js')
import('./listeners/showCompletedTasks.js')
import('./listeners/taskItems.js')
import('./listeners/deleteElements.js')

addItems()

window.addEventListener('load', () => {
	renderDefaultTasksOfActiveScenarioItem()
})

deleteEmptyElements()

let user = getUserFromStorage()
let userParameters = getUserParametersFromStorage()

window.addEventListener('load', () => {
	user = getUserFromStorage()
	userParameters = getUserParametersFromStorage()
})

console.log(user, userParameters);