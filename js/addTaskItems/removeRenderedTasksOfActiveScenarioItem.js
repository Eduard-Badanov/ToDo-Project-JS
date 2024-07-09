import { user } from '../userInfo.js'

export function removeRenderedTasksOfActiveScenarioItem(DOMname) {
	user.forEach((element) => {
		if (element.DOMname === DOMname) {
			if (element.tasks.length > 0) {
				element.tasks.forEach((el) => {
					// console.log(element.DOMname, el);
					if ((document.querySelector(`.${element.DOMname}-${el.id}`) !== null)) {
						console.log(document.querySelector(`.${element.DOMname}-${el.id}`));
						document.querySelector(`.${element.DOMname}-${el.id}`).remove()
					}
				})
			}
		}
	})
}