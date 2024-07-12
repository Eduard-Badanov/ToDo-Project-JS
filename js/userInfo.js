import { watchingTasksItems } from './addTaskItems/watchingTasksItems.js'
import { checkSorting } from './listeners/sortingElements.js'
import { getUserFromStorage, getUserParametersFromStorage } from './localStorage/getUserFromStorage.js'
import { saveUserFromStorage } from './localStorage/saveUserToStorage.js'

export let user = getUserFromStorage()
export let userParameters = getUserParametersFromStorage()

user = new Proxy(user, {
    set: (target, prop, value) => {
        if (prop !== 'length') {
            target[prop] = value
            saveUserFromStorage()
            console.log('установка свойства', value);
        }
        return true
    },
    deleteProperty: (target, prop) => {
        console.log('удаление свойства', target[prop]);
        delete target[prop]
        saveUserFromStorage()
        return true
    }
})

userParameters = new Proxy(userParameters, {
    set: (target, prop, value) => {
        if (prop !== 'length') {
            target[prop] = value
            console.log('установка свойства', value);
            checkSorting()
            watchingTasksItems()
            saveUserFromStorage()
        }
        return true
    }
})