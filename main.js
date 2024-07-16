
import('./src/js/script.js')
import('./src/js/pathsToIcons.js')
import { addItems } from './src/js/addScenarioItems/addItems.js'
import { renderDefaultTasksOfActiveScenarioItem } from './src/js/addTaskItems/renderDefaultTasksOfActiveScenarioItem.js'

window.addEventListener('load', () => {
	addItems()
	renderDefaultTasksOfActiveScenarioItem()
})