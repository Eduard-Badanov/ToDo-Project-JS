import { addCompletedTaskItem } from './addCompletedTaskItems/addCompletedTaskItem.js'
import { addItems } from './addScenarioItems/addItems.js'
import { addTaskItem } from './addTaskItems/addTaskItem.js'
import('./listeners/scenariosAdd.js')
import('./listeners/scenarioItems.js')
import('./listeners/sortingElements.js')

addItems()
addTaskItem()
addCompletedTaskItem('item-all', 0, 'Test')