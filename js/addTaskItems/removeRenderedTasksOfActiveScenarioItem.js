import { user } from '../userInfo.js'

export function removeRenderedTasksOfActiveScenarioItem(DOMname) {
	if (DOMname !== 'item-all' && DOMname !== 'item-favorites') {
		user.forEach((element) => {
			if (element.DOMname === DOMname) {
				if (element.tasks.length > 0) {
					element.tasks.forEach((el) => {
						if ((document.querySelector(`.${element.DOMname}-${el.id}`) !== null && element.DOMname !== 'item-all')) {
							console.log(document.querySelector(`.${element.DOMname}-${el.id}`));
							document.querySelector(`.${element.DOMname}-${el.id}`).remove()
						}
					})
				}
			}
		})
	} else if (DOMname === 'item-all') {
		document.querySelector('.tasks__tasks-list').childNodes.forEach((el) => {
			while (document.querySelector('.tasks__tasks-list').childNodes.length > 0) {
				document.querySelector('.tasks__tasks-list').childNodes.forEach((element) => {
					element.remove()
					console.log(element);
				})
			}
		})
	} else if (DOMname === 'item-favorites') {
		document.querySelector('.tasks__tasks-list').childNodes.forEach((el) => {
			while (document.querySelector('.tasks__tasks-list').childNodes.length > 0) {
				document.querySelector('.tasks__tasks-list').childNodes.forEach((element) => {
					element.remove()
					console.log(element);
				})
			}
		})
	}
}