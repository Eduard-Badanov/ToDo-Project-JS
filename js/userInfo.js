import { isReversed } from './listeners/sortingElements.js'
import { scenarioIcons } from './pathsToIcons.js'

export let user = [
    {
        icon: scenarioIcons.user,
        text: 'Все задачи',
        DOMname: 'item-all',
        isCreated: false,
        tasks: [
            {
				id: 1,
                text: 'Сделать техническое задание',
                data: '22:30 28.06.2024',
                isImportant: false
            },
            {
				id: 0,
                text: 'Сделать техническое задание',
                data: '22:30 28.06.2024',
                isImportant: false
            }
		]
    },
    {
        icon: scenarioIcons.sun,
        text: 'Свободное время',
        DOMname: 'item-free-time',
        isCreated: false,
        tasks: [
            // {
			// 	id: 0,
            //     text: 'Сделать техническое задание',
            //     data: '22:30 28.06.2024',
            //     isImportant: false
            // }
		]
    },
    {
        icon: scenarioIcons.briefcase,
        text: 'Рабочие дела',
        DOMname: 'item-work',
        isCreated: false,
        tasks: [
            // {
			// 	id: 0,
            //     text: 'Сделать техническое задание',
            //     data: '22:30 28.06.2024',
            //     isImportant: false
            // }
		]
    },
    {
        icon: scenarioIcons.home,
        text: 'Домашние дела',
        DOMname: 'item-home',
        isCreated: false,
        tasks: [
            // {
			// 	id: 0,
            //     text: 'Сделать техническое задание',
            //     data: '22:30 28.06.2024',
            //     isImportant: false
            // }
		]
    },
    {
        icon: scenarioIcons.bookmark,
        text: 'Избранное',
        DOMname: 'item-favorites',
        isCreated: false,
        tasks: [
            // {
			// 	id: 0,
            //     text: 'Сделать техническое задание',
            //     data: '22:30 28.06.2024',
            //     isImportant: true
            // }
		]
    },
    {
        icon: scenarioIcons.info,
        text: 'На пятницу',
        DOMname: 'item-created-1',
        isCreated: true,
        tasks: [
            // {
			// 	id: 0,
            //     text: 'Сделать техническое задание',
            //     data: '22:30 28.06.2024',
            //     isImportant: false
            // }
		]
    },
    {
        icon: scenarioIcons.info,
        text: 'На субботу',
        DOMname: 'item-created-2',
        isCreated: true,
        tasks: [
            // {
            //     id: 0,
            //     text: 'Проверка',
            //     data: '22:30 28.06.2024',
            //     isImportant: true
            // }
        ]
    }
]

user = new Proxy(user, {
    set: (target, prop, value) => {
        if (prop !== 'length') {
            target[prop] = value
            console.log('установка свойства', value);
        }
        return true
    },
    deleteProperty: (target, prop) => {
        console.log('удаление свойства', target[prop]);
        delete target[prop]
        return true
    }
})

export let userParameters = {
    sorting: false
}

userParameters = new Proxy(userParameters, {
    set: (target, prop, value) => {
        if (prop !== 'length') {
            target[prop] = value
            console.log('установка свойства', value);
            isReversed()
        }
        return true
    }
})