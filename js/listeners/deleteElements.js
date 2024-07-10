import { user } from '../userInfo.js'

document.querySelector('.tasks__delete-button').addEventListener('click', () => {
	while (document.querySelector('.tasks__tasks-list').childNodes.length > 0) {
		document.querySelector('.tasks__tasks-list').childNodes.forEach((element) => {
			element.remove()
		})
	}
	user.forEach((element) => {
		if (element.tasks.length > 0) {
			element.tasks.forEach((el) => {
				const indexOfTask = element.tasks.indexOf(el)
				delete element.tasks[indexOfTask]
			})
		}
	})
})