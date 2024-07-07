import { userParameters } from '../userInfo.js'

export function isReversed() {
	if (userParameters.sorting) {
		document.querySelector('.sort-button__icon').classList.add('rotated')
		document.querySelector('.tasks__tasks-list').classList.add('reversed')
	} else {
		document.querySelector('.sort-button__icon').classList.remove('rotated')
		document.querySelector('.tasks__tasks-list').classList.remove('reversed')
	}
}

document.querySelector('.tasks__sort-button').addEventListener('click', () => {
	if (!document.querySelector('.sort-button__icon').classList.contains('rotated')) {
		userParameters.sorting = true
		isReversed()
	} else {
		userParameters.sorting = false
		isReversed()
	}
})

window.addEventListener('load', isReversed)