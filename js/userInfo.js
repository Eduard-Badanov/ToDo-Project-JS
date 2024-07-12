import { watchingTasksItems } from './addTaskItems/watchingTasksItems.js'
import { checkSorting } from './listeners/sortingElements.js'
import { getUserFromStorage, getUserParametersFromStorage } from './localStorage/getUserFromStorage.js'
import { saveUserFromStorage } from './localStorage/saveUserToStorage.js'

export let user = getUserFromStorage()
export let userParameters = getUserParametersFromStorage()

console.log('success', user, userParameters);

// export let user = [
//     {
//         icon: scenarioIcons.user,
//         text: 'Все задачи',
//         DOMname: 'item-all',
//         isCreated: false,
//         tasks: [
//             {
// 				id: 1,
//                 text: 'Задача-1',
//                 data: '22:30 28.06.2024',
//                 isImportant: true
//             },
            
//             ,

// 		]
//     },
//     {
//         icon: scenarioIcons.sun,
//         text: 'Свободное время',
//         DOMname: 'item-free-time',
//         isCreated: false,
//         tasks: [
//             {
// 				id: 1,
//                 text: 'Задача-3',
//                 data: '22:30 28.06.2024',
//                 isImportant: false
//             },
            
// 		]
//     },
//     {
//         icon: scenarioIcons.briefcase,
//         text: 'Рабочие дела',
//         DOMname: 'item-work',
//         isCreated: false,
//         tasks: []
//     },
//     {
//         icon: scenarioIcons.home,
//         text: 'Домашние дела',
//         DOMname: 'item-home',
//         isCreated: false,
//         tasks: []
//     },
//     {
//         icon: scenarioIcons.bookmark,
//         text: 'Избранное',
//         DOMname: 'item-favorites',
//         isCreated: false,
//         tasks: []
//     },
//     {
//         icon: scenarioIcons.info,
//         text: 'На пятницу',
//         DOMname: 'item-created-1',
//         isCreated: true,
//         tasks: []
//     },
//     {
//         icon: scenarioIcons.info,
//         text: 'На субботу',
//         DOMname: 'item-created-2',
//         isCreated: true,
//         tasks: [
//             {
//                 id: 1,
//                 text: 'Проверка-1',
//                 data: '15:24 09.07.2024',
//                 isImportant: true
//             },
//             {
//                 id: 2,
//                 text: 'Проверка-2',
//                 data: '15:25 09.07.2024',
//                 isImportant: false
//             },
//             {
//                 id: 3,
//                 text: 'Проверка-3',
//                 data: '15:26 09.07.2024',
//                 isImportant: true
//             }
//         ]
//     }
// ]

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

// export let userParameters = {
//     sorting: false
// }

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