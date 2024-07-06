export function createScenarioItem(icon = scenarioIcons.info, text, DOMname) {
	const itemButton = document.createElement('button')
	itemButton.classList.add('items-list__item-button', `${DOMname}`)
	itemButton.innerHTML = `
	<img class="item-button__image" src="${icon}">
	<div class="item-button__body"><span class="item-button__text">${text}</span></div>`

	document.querySelector('.scenarios__items-list').appendChild(itemButton)
}