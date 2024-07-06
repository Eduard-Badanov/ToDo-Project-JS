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
		const numberOfElement = (user.filter((element) => element.isCreated === true)).length
		const text = document.querySelector('.scenarios__add-input > input').value.trim()
		user.push({
			icon: scenarioIcons.info,
			text: text,
			DOMname: `item-created-${numberOfElement + 1}`,
			isCreated: true,
			tasks: []
		})
		createScenarioItem(text, `item-created-${numberOfElement + 1}`, scenarioIcons.info, true)
		if (document.querySelector(`.item-created-${numberOfElement + 1} > div > div > span`).clientWidth >= document.querySelector(`.item-created-${numberOfElement + 1} > div > div`).clientWidth) {
			document.querySelector(`.item-created-${numberOfElement + 1}`).classList.add('animated')
		}
		document.querySelector('.scenarios__add-input > input').value = ''	
	}

	document.querySelector('.scenarios__add-input').classList.add('hidden')
	document.querySelector('.scenarios__add-button').classList.remove('hidden')
})
document.querySelector('.scenarios__add-input > input').addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		document.querySelector('.button-add').click()
	}
})
document.querySelector('.scenarios__items-list').addEventListener('click', (event) => {
	if (event.target.classList.contains('item-button-created__image-delete')) {
		event.target.closest('button').remove()
	}
})