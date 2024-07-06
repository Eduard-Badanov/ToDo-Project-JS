import { user } from '../userInfo.js'

document.querySelector('.scenarios__add-button').addEventListener('click', () => {
	if (user.length >= 10) {
		document.querySelector('.scenarios__add-warning').classList.remove('hidden')
		setTimeout(() => document.querySelector('.scenarios__add-warning').classList.add('hidden'), 5000)
	} else {
		document.querySelector('.scenarios__add-button').classList.add('hidden')
		document.querySelector('.scenarios__add-input').classList.remove('hidden')
	}
})
document.querySelector('.button-cancel').addEventListener('click', () => {
	document.querySelector('.scenarios__add-input').classList.add('hidden')
	document.querySelector('.scenarios__add-button').classList.remove('hidden')
})
document.querySelector('.button-add').addEventListener('click', () => {
	document.querySelector('.scenarios__add-input').classList.add('hidden')
	document.querySelector('.scenarios__add-button').classList.remove('hidden')
})