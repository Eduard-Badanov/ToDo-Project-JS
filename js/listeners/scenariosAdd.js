import { createScenarioItem } from '../addScenarioItems/createScenarioItem.js'
import { scenarioIcons } from '../pathsToIcons.js'
import { user } from '../userInfo.js'

document.querySelector('.scenarios__add-button').addEventListener('click', () => {
	if (user.length >= 10) {
		document.querySelector('.scenarios__add-warning').classList.remove('hidden')
		setTimeout(() => document.querySelector('.scenarios__add-warning').classList.add('hidden'), 5000)
	} else {
		document.querySelector('.scenarios__add-button').classList.add('hidden')
		document.querySelector('.scenarios__add-input').classList.remove('hidden')
		document.querySelector('.scenarios__add-input > input').focus()
	}
})
document.querySelector('.button-cancel').addEventListener('click', () => {
	document.querySelector('.scenarios__add-input > input').value = ''
	document.querySelector('.scenarios__add-input').classList.add('hidden')
	document.querySelector('.scenarios__add-button').classList.remove('hidden')
})
document.querySelector('.button-add').addEventListener('click', () => {
	if (document.querySelector('.scenarios__add-input > input').value.trim() !== '') {
		const numberOfElement = (user.filter((element) => element.isCreated === true).length)
		const text = document.querySelector('.scenarios__add-input > input').value.trim()
		user.push({
			icon: scenarioIcons.info,
			text: text,
			DOMname: `item-created-${numberOfElement + 1}`,
			isCreated: true,
			tasks: []
		})
		console.log(user);
		createScenarioItem(text, `item-created-${numberOfElement + 1}`, scenarioIcons.info, true)
		document.querySelector('.scenarios__add-input > input').value = ''	
	}

	document.querySelector('.scenarios__add-input').classList.add('hidden')
	document.querySelector('.scenarios__add-button').classList.remove('hidden')
})
document.querySelectorAll('.item-button-created__image-delete').forEach((element) => {
	element.addEventListener('click', (e) => {
		user.forEach((element, index) => {
			if (element.DOMname === e.target.closest('button').className.split(' ')[1]) {
				delete user[index]
				console.log(user);
				document.querySelector(`.${element.DOMname}`).remove()
			}
		})
	})
})