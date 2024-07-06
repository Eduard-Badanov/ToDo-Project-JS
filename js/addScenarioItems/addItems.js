import { user } from '../userInfo.js'
import { createScenarioItem } from './createScenarioItem.js'

export function addItems() {
	user.forEach((element, i) => {
		createScenarioItem(element.icon, element.text, element.DOMname)
	})
	
	for (let i = 1; i <= user.length; i++) {
		if (document.querySelector(`.scenarios__items-list > button:nth-child(${i}) > div > span`).clientWidth >= document.querySelector(`.scenarios__items-list > button:nth-child(${i}) > div`).clientWidth) {
			document.querySelector(`.scenarios__items-list > button:nth-child(${i})`).classList.add('animated')
		}
	}
}