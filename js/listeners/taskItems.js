import { addCompletedTaskItem } from '../addCompletedTaskItems/addCompletedTaskItem.js'
import { createTaskItem } from '../addTaskItems/createTaskItem.js'
import { watchingTasksItems } from '../addTaskItems/watchingTasksItems.js'
import { taskIcons } from '../pathsToIcons.js'
import { user } from '../userInfo.js'

document.querySelector('.add-task__button').addEventListener('click', () => {
	if (document.querySelector('.tasks__add-task > input').value.trim() !== '') {
		const DOMname = document.querySelector('.scenarios__items-list > button.item-active').classList[1]
		let id = null
		const text = document.querySelector('.tasks__add-task > input').value.trim()
		const data = getData()
		console.log(DOMname);
		const isImportant = DOMname === 'item-favorites' ? true : false
		user.forEach((element, index) => {
			if (element.DOMname === DOMname) {
				id = element.tasks.length + 1
				user[index].tasks.push({
					id: id,
					text: text,
					data: data,
					isImportant: isImportant
				})
			}
		})
		
		createTaskItem(DOMname, id, text, data, isImportant)
		watchingTasksItems()
		console.log(user);

		if (document.querySelector(`.${DOMname}-${id} > div > div > span`).clientWidth >= document.querySelector(`.${DOMname}-${id} > div > div`).clientWidth) {
			document.querySelector(`.${DOMname}-${id}`).classList.add('animated')
		}
		document.querySelector('.tasks__add-task > input').value = ''
	}
})
document.querySelector('.tasks__add-task > input').addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		document.querySelector('.add-task__button').click()
	}
})
document.querySelector('.tasks__tasks-list').addEventListener('click', (event) => {
	if (event.target.classList.contains('button-delete__image') || event.target.classList.contains('task-right__button-delete')) {
		const DOMname = event.target.closest('.tasks-list__task').classList[1].slice(0, -2)
		const id = Number(event.target.closest('.tasks-list__task').classList[1].at(-1))
		const text = document.querySelector(`.${DOMname}-${id} > div > div > span`).innerHTML
		user.forEach((element, index) => {
			if (element.DOMname === DOMname) {
				let indexOfTask = null
				element.tasks.forEach((el) => {
					if (el.id === id) {
						indexOfTask = element.tasks.indexOf(el)
					}
				})
				delete element.tasks[indexOfTask]
				event.target.closest('.tasks-list__task').remove()
			}
		})
	}
})
document.querySelector('.tasks__tasks-list').addEventListener('click', (event) => {
	if (event.target.classList.contains('button-circle__image') || event.target.classList.contains('task-left__button-circle')) {
		const DOMname = event.target.closest('.tasks-list__task').classList[1].slice(0, -2)
		const id = Number(event.target.closest('.tasks-list__task').classList[1].at(-1))
		const text = document.querySelector(`.${DOMname}-${id} > div > div > span`).innerHTML
		document.querySelector(`.${DOMname}-${id} > div > button > img`).attributes.src.nodeValue = taskIcons.circleActive
		document.querySelector(`.${DOMname}-${id} > div > div > span`).style.textDecoration = 'line-through'
		setTimeout(() => document.querySelector(`.${DOMname}-${id} > div > button > img`).attributes.src.nodeValue = taskIcons.circle, 300)
		setTimeout(() => document.querySelector(`.${DOMname}-${id} > div > div > span`).style.textDecoration = 'none', 300)
		setTimeout(() => {
			user.forEach((element) => {
				if (element.DOMname === DOMname) {
					addCompletedTaskItem(DOMname, id, text)
	
					if (document.querySelector(`.completed-tasks-list__task.${DOMname}-${id} > div > span`).clientWidth >= document.querySelector(`.completed-tasks-list__task.${DOMname}-${id} > div`).clientWidth) {
						document.querySelector(`.completed-tasks-list__task.${DOMname}-${id}`).classList.add('animated')
					}
	
					let indexOfTask = null
					element.tasks.forEach((el) => {
						if (el.id === id) {
							indexOfTask = element.tasks.indexOf(el)
						}
					})
					delete element.tasks[indexOfTask]
					event.target.closest('.tasks-list__task').remove()
				}
			})	
		}, 500)
	}
})
document.querySelector('.tasks__tasks-list').addEventListener('click', (event) => {
	if (event.target.classList.contains('button-important__image') || event.target.classList.contains('task-right__button-important')) {
		const DOMname = event.target.closest('.tasks-list__task').classList[1].slice(0, -2)
		const id = Number(event.target.closest('.tasks-list__task').classList[1].at(-1))
		if (document.querySelector(`.${DOMname}-${id} > div:nth-child(2) > button > img`).attributes.src.nodeValue === taskIcons.star) {
			document.querySelector(`.${DOMname}-${id} > div:nth-child(2) > button > img`).attributes.src.nodeValue = taskIcons.starActive
			user.forEach((element) => {
				if (element.DOMname === DOMname) {
					console.log(element);
					element.tasks.forEach((el) => {
						if (el.id === id) {
							el.isImportant = true
							watchingTasksItems()
							console.log('установка важности');
						}
					})
				}
			})
		} else {
			document.querySelector(`.${DOMname}-${id} > div:nth-child(2) > button > img`).attributes.src.nodeValue = taskIcons.star
			user.forEach((element) => {
				if (element.DOMname === DOMname) {
					console.log(element);
					element.tasks.forEach((el) => {
						if (el.id === id) {
							el.isImportant = false
							watchingTasksItems()
							console.log('удаление важности');
						}
					})
				}
			})
		}
	}
})




function getData() {
	let globalTime = new Date()
	let year = globalTime.getFullYear()
	let month = globalTime.getMonth() + 1
	let day = globalTime.getDate()
	let hours = globalTime.getHours()
	let minutes = globalTime.getMinutes()
	minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
	day = day < 10 ? `0${day}` : `${day}`
	month = month < 10 ? `0${month}` : `${month}`

	return `${hours}:${minutes} ${day}.${month}.${year}`
}