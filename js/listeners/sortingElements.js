import { userParameters } from '../userInfo.js'
// import { removeRenderedTasksOfActiveScenarioItem} from '../addTaskItems/removeRenderedTasksOfActiveScenarioItem.js'
// import { renderTasksOfActiveScenarioItem } from '../addTaskItems/renderTasksOfActiveScenarioItem.js'


export function checkSorting() {
	if (userParameters.sorting) {
		document.querySelector('.sort-button__icon').classList.add('rotated')
		return true
	} else {
		document.querySelector('.sort-button__icon').classList.remove('rotated')
		return false
	}
}

document.querySelector('.tasks__sort-button').addEventListener('click', () => {
	if (!checkSorting()) {
		userParameters.sorting = true
	} else {
		userParameters.sorting = false
	}
})

window.addEventListener('load', checkSorting)

/*
export function isReversed() {
	if (userParameters.sorting) {
		document.querySelector('.sort-button__icon').classList.add('rotated')
		return true
	} else {
		document.querySelector('.sort-button__icon').classList.remove('rotated')
		return false
		// document.querySelector('.tasks__tasks-list').classList.remove('reversed')
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

const target = document.querySelector('.tasks__sort-button');
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    console.log(mutation);
	document.querySelector('.tasks__tasks-list').childNodes
  });
});

observer.observe(target, { attributes: true, childList: true, subtree: true });
*/