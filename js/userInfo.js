import { scenarioIcons } from './pathsToIcons.js'

export const user = [
    {
        icon: scenarioIcons.user,
        text: 'Все задачи',
        DOMname: 'item-all',
        isCreated: false,
        tasks: {
            0: {
                text: 'Сделать техническое задание по теме...',
                data: '22:30 28.06.2024',
                isImportant: false
            },
            1: {
                text: 'Сделать техническое задание по теме...',
                data: '22:30 28.06.2024',
                isImportant: false
            }
        }
    },
    {
        icon: scenarioIcons.sun,
        text: 'Свободное время',
        DOMname: 'item-free-time',
        isCreated: false,
        tasks: {
            0: {
                text: 'Сделать техническое задание по теме...',
                data: '22:30 28.06.2024',
                isImportant: false
            }
        }
    },
    {
        icon: scenarioIcons.briefcase,
        text: 'Рабочие дела',
        DOMname: 'item-work',
        isCreated: false,
        tasks: {
            0: {
                text: 'Сделать техническое задание по теме...',
                data: '22:30 28.06.2024',
                isImportant: false
            }
        }
    },
    {
        icon: scenarioIcons.home,
        text: 'Домашние дела',
        DOMname: 'item-home',
        isCreated: false,
        tasks: {
            0: {
                text: 'Сделать техническое задание по теме...',
                data: '22:30 28.06.2024',
                isImportant: false
            }
        }
    },
    {
        icon: scenarioIcons.bookmark,
        text: 'Избранное',
        DOMname: 'item-favorites',
        isCreated: false,
        tasks: {
            0: {
                text: 'Сделать техническое задание по теме...',
                data: '22:30 28.06.2024',
                isImportant: false
            }
        }
    },
    {
        icon: scenarioIcons.info,
        text: 'На пятницу',
        DOMname: 'item-created-1',
        isCreated: true,
        tasks: {
            0: {
                text: 'Сделать техническое задание по теме...',
                data: '22:30 28.06.2024',
                isImportant: false
            }
        }
    }
]