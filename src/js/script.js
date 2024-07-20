import '../styles/main.scss'
import { addItems } from './addScenarioItems/addItems.js'
import { renderDefaultTasksOfActiveScenarioItem } from './addTaskItems/renderDefaultTasksOfActiveScenarioItem.js'
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

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 75 && e.ctrlKey && e.altKey) {
        localStorage.removeItem('todo-user-js');
    }
});