const task = document.querySelector('.tasks-list__task')
const list = document.querySelector('.tasks__tasks-list')

for (let i = 0; i < 10; i++) {
	let newTask = task.cloneNode(true)
	list.appendChild(newTask)
}