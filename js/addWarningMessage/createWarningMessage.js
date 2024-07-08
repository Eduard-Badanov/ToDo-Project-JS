export async function createWarningMessage(parameter) {
	let content = null
	if (parameter === 'type1') {
		content = 'Вы уверены, что хотите удалить эту задачу?'
	} else if (parameter === 'type2') {
		content = 'Вы уверены, что хотите удалить все задачи?'
	}

	const message = document.createElement('div')
	message.classList.add(`todo__warning`)
	message.innerHTML = `
	<div class="todo__warning-title">Подтверждение</div>
	<div class="todo__warning-content">
		<span class="warning-content__test">${content}</span>
		<div class="warning-content__buttons">
			<button class="button-cancel">Отмена</button>
			<button class="button-delete">Удалить</button>
		</div>
	</div>`

	document.querySelector('.todo__tasks').appendChild(message)

	document.querySelector(".todo__tasks > div.todo__warning > div.todo__warning-content > div > button.button-cancel").addEventListener('click', () => {
		message.remove()
		console.log('test-f')
		return false
	})
	document.querySelector(".todo__tasks > div.todo__warning > div.todo__warning-content > div > button.button-delete").addEventListener('click', () => {
		message.remove()
		console.log('test-t')
		return true
	})
}