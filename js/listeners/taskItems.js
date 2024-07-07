import { createTaskItem } from '../addTaskItems/createTaskItem.js'
import { user } from '../userInfo.js'


document.querySelector('.add-task__button').addEventListener('click', () => {
	if (document.querySelector('.tasks__add-task > input').value.trim() !== '') {
		const DOMname = document.querySelector('.scenarios__items-list > button.item-active').classList[1]
		let id = null
		const text = document.querySelector('.tasks__add-task > input').value.trim()
		const data = getData()
		user.forEach((element, index) => {
			if (element.DOMname === DOMname) {
				id = element.tasks.length + 1
				user[index].tasks.push({
					id: id,
					text: text,
					data: data,
					isImportant: false
				})
			}
		})
		createTaskItem(DOMname, id, text, data)

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