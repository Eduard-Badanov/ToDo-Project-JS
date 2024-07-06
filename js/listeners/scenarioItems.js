document.querySelector('.scenarios__items-list').addEventListener('click', (event) => {
	if (event.target.closest('button') !== null) {
		console.log(event.target.closest('button'));
		if (document.querySelector('.scenarios__items-list').childNodes.forEach((element) => {
			if (element.classList.contains('item-active')) element.classList.remove('item-active')
		})) event.target.closest('button').classList.add('item-active')
		else (event.target.closest('button')).classList.add('item-active')
	}
})