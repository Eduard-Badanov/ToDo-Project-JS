# Описание проекта `ToDo Project JS`

Проект имеет такую архитектуру вложенности:

	index.html
	styles/
		main.scss
		_main-block.scss
		_adaptations.scss
		tasks/
			_tasks.scss
			_task.scss
			_completed-task.scss
		scenarios/
			_scenarios.scss
			_item.scss
			_add.scss
	js/
		script.js
		userInfo.js
		pathsToIcons.js
		addScenarioItems/
			createScenarioItem.js
			addItems.js
		addTaskItems/
			createTaskItem.js
			addTaskItem.js
			watchingTasksItems.js
			removeRenderedTasksOfActiveScenarioItem.js
			renderDefaultTasksOfActiveScenarioItem.js
			renderTasksOfActiveScenarioItem.js
		addCompletedTaskItems/
			createCompletedTaskItem.js
			removeCompletedTaskItem.js
		listeners/
			deleteElements.js
			scenarioItems.js
			scenariosAdd.js
			showCompletedTasks.js
			sortingElements.js
			taskItems.js
		localStorage/
			deleteEmptyElements.js
			saveUserToStorage.js
			getUserFromStorage.js
	assets/
		background.svg
		favicon.svg
		icons/
			other-icons/
				arrow.svg
				chevron.svg
				trash.svg
			scenario-icons/
				bookmark.svg
				briefcase.svg
				delete.svg
				home.svg
				info.svg
				plus.svg
				sun.svg
				user.svg
			task-icons/
				circle-active.svg
				circle.svg
				delete.svg
				star-active.svg
				star.svg

### Главный файл проекта *`index.html`*

В этом файле находится вся основная разметка проекта, выполняются подключения стилей, фавиконок и JavaScript файлов.

### Папка *`styles`*

В этой папке находятся все стили приложения, написанные с помощью препроцессора стилей *`scss`*

Основным файлом является *`main.scss`*, именно он содержит все главные стили, сброс стандартных настроек и выполняются импорты других *`.scss`* файлов. В последствие, он конвертируется в обычный *`.css`* файл, так как браузеры по умолчанию не распознают расширение *`.scss`*.

В файле *`_main-block.scss`* указаны стили для главного блока приложения.

В файле *`_adaptations.scss`* прописаны все адаптации проекта под различные разрешения экрана. Это сделано для того, чтобы приложением можно было пользоваться на всех устройствах.

#### Папка *`styles/tasks`*

В этой папке находятся стили для элементов заданий, подробнее описано ниже.

В файле *`_tasks.scss`* прописаны стили для всего блока с заданиями, включая поле ввода создания новой задачи, кнопки сортировки и удаления заданий, а также скрытие уже выполненных заданий. В него импортируются оставшиеся файлы, отвечающие за задания.

В файле *`_task.scss`* прописаны стили для блока самого задания, то есть для его содержимого.

В файле *`_completed-task.scss`* прописаны стили для уже выполненных заданий.

#### Папка *`styles/scenarios`*

В файле *`_scenarios.scss`* прописаны стили для всего блока со сценариями. В него импортируются оставшиеся файлы, отвечающие за кнопки сценариев и создание новых сценариев.

В файле *`_item.scss`* прописаны стили для самой кнопки сценариев.

В файле *`_add.scss`* прописаны стили кнопок создания новых сценариев, текстовые поля и кнопки подтверждения действий.

### Папка *`js`*

В этой папке находятся все JavaScript файлы проекта.

В файл *`script.js`* импортируются все JavaScript-файлы, отвечающие за свои функции. Без этих импортов программа бы не функционировала. Также этот файл подключается к основному файлу проекта, то есть к *`index.html`*.

В этом файле также есть две функции:

	1. При загрузке страницы происходит рендер всех кнопок сценариев.
	За это отвечает импортируемая функция `renderDefaultTasksOfActiveScenarioItem()`

	2. Если зажать комбинацию клавиш `Ctrl` + `Alt` + `K`, то из локального хранилища
	удалятся все параметры: сценарии, задачи и сортировка. 
	После этого страница проекта перезагрузится.

В файле *`userInfo.js`* указаны все параметры приложения, то есть те самые сценарии, задачи и параметры сортировки. Эти параметры подгружаются из локаьного хранилища. А уже за изменениями этих параметров отвечают специальные объекты `Proxy`, которые вызывают нужные функции, если произошло определенное действие. Например, сохранение текущих настроек.

В файле *`pathsToIcons.js`* находятся два экспортируемых объекта. В первом объекте указаны пути до всех иконок сценириев. Во втором объекте указаны пути до всех иконок заданий. Это сделано для того, чтобы структурировать код, избежать повторения и просто сделать так называемое хранилище.

#### Папка *`js/addScenarioItems`*

В этой папке находятся скрипты, позволяющие создавать новые кнопки сценариев и отображать их в DOM дереве, то есть в самой странице.

В файле *`createScenarioItem.js`* находится экспортируемая функция, которая в качестве параметром принимает в себя: текст сценария, DOM название (то есть, как называется сценарий в DOM дереве), путь к иконке (по умолчанию указана иконка информации), является ли создаваемый сценарий кастомным (то есть дополнительный сценарий, созданный пользователем при работе с приложением; по умолчанию *`false`*). В теле функции прописан код создания сценария, в котором указываются все выше перечисленные параметры, и в зависимости от условия, создается нужная кнопка сценария.

В файле *`addItems.js`* сначала импортируется массив с сценариями и задачами, затем функция создания кнопки сценария. После чего создается экспортируемая функция, в которой мы проходимся по массиву и создаем кнопки сценариев из нужных нам параметров. Далее идет проверка, если длина текста сценария больше блока сценария, то этой кнопке добавляется класс *`animated`*, который добавляет анимацию прокрутки текста. Именно эта функция импортируется и вызывается в файле *`script.js`*

#### Папка *`js/addTaskItems`*

В этой папке находятся скрипты, отвечающие за создание и различные действия над заданиями.

В файле *`createTaskItem.js`* находится экспортируемая функция, которая в качестве параметров принимает в себя: DOM название (то есть, как называется задача в DOM дереве), ID задачи, текст задачи, дата создания задачи и является ли задача важной (по умолчанию указано значение *`false`*)

В файле *`addTaskItem.js`* сначала импортируются функции для сохранения параметров в локальное хранилище, создания новой задачи в DOM дереве, массив всех сценариев и их задач. Затем создается экспортируемая функция, внутри которой мы проходимся по массиву и создаем задачи по их данным, после чего сохраняем параметры в локальное хранилище. Затем мы получаем длину массива заданий определенного сценария и используем нужное нам значение для проверки, является ли длина текста задачи больше длины блока задачи. Если это так, то к этой задаче мы добавляем класс *`animated`*, который анимирует прокрутку текста.

В файле *`watchingTasksItems.js`* сначала импортируются функции для создания элемента задачи, значение сортировки (от большего к меньшему или наоборот), объект с иконками задач. После чего создается экспортируемая функция, в теле которой мы сначала копируем список дочерних элементов списка задач, затем проходимся по массиву этих дочерних элементов и удаляем их из DOM дерева. Затем мы проходимся по скопированному массиву дочерних элементов и узнаем их: DOM название (то есть, как называется задача в DOM дереве), ID задачи, текст задачи, дата создания задачи и является ли задача важной (все эти параметры можно получить из элемента). Затем эти параметры добавляются в объект *`task`*, который в последствие добавляется к массиву всех заданий. После этого, в зависимости от параметров сортировки, мы сначала сортируем список заданий по дате, а потом по важности. После чего проходимся по массиву и создаем задания в DOM дерево, добавляя классы *`animated`*, если это требуется.

В файле *`removeRenderedTasksOfActiveScenarioItem.js`* импортируется массив с параметрами пользователя, затем создает экспортируемая функция, в которой сначала проверяется, не содержит ли DOM название `item-all`, `item-favorites` или `special`. Затем мы проходимся по массиву и удаляем из DOM дерева все задачи с необходимым нам DOM названием. Если же DOM название содержит `item-all` или `special`, то мы создаем цикл, который будет выполняться, пока список заданий не будет пуст, а внутри самого цикла мы удаляем все дочерние элементы списка задач. Если же DOM название содержит `item-favorites`, то мы выполняем всё то же действие.

В файле *`renderDefaultTasksOfActiveScenarioItem.js`* сначала импортируются функции для создания элемента задачи в DOM дерево, сортировка списка задач в зависимости от параметра, список параметров сценариев и заданий. После чего создает экспортируемая функция, в которой мы сначала сценарию `item-all` добавляем класс *`item-active`*, затем проходимся по массиву задач всех сценариев и добавляем все существующие задания в DOM дерево, после чего с помощью асинхронной функции *`setTimeout()`* через секунду мы проверяем, является ли длина текста задания больше длины блока задания, если да, то к заданию добавляем класс *`animated`*. В конце вызывается функция для сортировки списка задач.

В файле *`renderDefaultTasksOfActiveScenarioItem.js`* сначала импортируются функции для создания элемента задачи в DOM дерево, сортировка списка задач в зависимости от параметра, список параметров сценариев и заданий и значение сортировки (от большего к меньшему или наоборот). Затем создается экспортируемая функция, в качестве параметра принимающая DOM название. В теле самой функции мы проверяем, не содержит ли DOM название `item-all` и `item-favorites`. Затем проходимся по массиву списку заданий нужного нам сценария и создаем элемент в DOM дереве, сначала проверив, какой параметр возвращает функция сортировки, и уже в зависимости от возвращаемого значения создается элемент и сортируется список. Если же DOM название содержит `item-all`, то мы создаем элементы всех возможных заданий из списка параметров сценариев и заданий. Если же DOM название содержит `item-favorites`, то мы создаем элементы в DOM дереве только тех заданий, у которых параметр важности равен *`true`*. После чего сортируем список заданий.

#### Папка *`js/addCompletedTaskItems`*

В этой папке находятся скрипты, отвечающие за создание и удаление выполненных заданий.

В файле *`createCompletedTaskItem.js`* сначала импортируется объект с путями до иконок заданий, затем создается экспортируемая функция, которая в качестве параметров принимает в себя: DOM название (то есть, как называется задача в DOM дереве), ID задачи, текст задачи, дата создания задачи. Затем с помощью параметров создается и добавляется элемент в DOM дерево.

В файле *`removeCompletedTaskItem.js`* создается экспортируемая функция, в теле которой мы проходимся по массиву дочерних элементов выполненных заданий, и пока список не будет пуст, мы удаляем все элементы из DOM дерева.

#### Папка *`js/listeners`*

В этой папке находятся скрипты, отвечающие за взаимодействие всех элементов приложения между собой.

В файле *`deleteElements.js`* сначала импортируется функция для сохранения параметров в локальное хранилище и список параметров сценариев и заданий. После создается слушатель событий для кнопки удаления заданий. После чего создается цикл, который будет работать, пока список дочерних элементов списка заданий не будет пуст. В теле цикла мы проходимся по массиу дочерних элементов, получаем DOM название и ID задачи, после удаляем из DOM дерева и массива сценариев и заданий этот элемент. После чего вызываем функцию для сохраения параметров в локальное хранилище.

В файле *`scenarioItems.js`* сначала импортируются функции для удаления выполненных заданий, удаления заданий для активной кнопки сценария, рендеринга списка заданий для активной кнопки сценария, отображения блока выполненных заданий. Затем создается слушатель событий для списка кнопок сценариев. После проверяем, есть ли уже активные кнопки сценариев, если да, то удаляем класс *`item-active`* у этой кнопки, удаляем все задания и выполненные задания для этого сценария из DOM дерева и вызывается функция для скрытия блока выполненных заданий. После чего для новой кнопки сценария добавляется класс *`item-active`* и вызвается функция для рендеринга всех заданий, которые содержат DOM название, как DOM название кнопки сценария. Инача выполняем тоже самое

В файле *`scenariosAdd.js`* сначала импортируются функции создания кнопок сценариев, удаление заданий у активного сценария, рендер всех заданий, сохранение параметров в локальное хранилище, объект с путями до иконок сценариев, массив сценариев и заданий. Затем содаются слушатели событий:
1. При нажатии на кнопку создания нового сценария происходит проверка, не больше ли 10 сценариев сейчас, иначе появляется сообщение, что достигнут лимит сценариев. Если нет, то появляется текстовое поле с кнопками подтверждения.
2. При нажатии на кнопку отмены создания нового сценария, очищается и скрывается текстовое поле вместе с кнопками подтверждения.
3. При нажатии на кнопку добавления, узнается, какой номер создаваемого сценария по отношению к остальным. Затем создается объект, в который передаются свойства кастомного сценария. После чего вызывается функция добавления нового элемента в DOM дерево, а затем вызывается функция сохранения параметров в локальное хранилище. После чего происходит проверка, если длина текста сценария больше длины блока сценария, к этому сценарию добавляется класс *`animated`*. Затем текстовое поле очищается. Далее идет проверка, есть ли уже элементы с классом *`item-active`*, и если да, то у этого элемента этот класс удаляется, если же нет, то к созданному сценарию добавляется класс *`item-active`*. После чего выполняется скролл к новому элементу сценария. Затем скрываются текстовое поле и кнопки подтверждения.
4. При нажатии на клавишу `Enter` для кнопки создания симулируется нажатие, то есть создается новый сценарий.
5. При нажатии на клавишу `Escape` для кнопки отмены симулируется нажатие, то есть отменяется создание нового сценария.
6. При нажатии на кнопку удаления сценария мы получаем DOM название сценария, затем проходимся по массиву параметров сценариев и заданий и удаляем элемент, содержащий это DOM название, после чего из DOM дерева удаляем этот элемент сценария и все элементы заданий, которые были созданы в этом сценарии. После этого сохраняем параметры в локальном хранилище, после чего с помощью асинхронной функции *`setTimeout()`* через 1 миллисекунду вызываем функцию для отображения всех заданий приложения.

В файле *`showCompletedTasks.js`* сначала к блоку выполненных заданий присваиваем класс *`hidden`*, затем на этот блок устанавливается слушатель событий и при клике к элементу картинки и элементу списка активных задач либо добавляются, либо удаляются классы *`rotated`* и *`toggle`*. Затем создается экспортируемая функция, в теле которой проверяется длина списка выполненных заданий. Если она равна 0, то к блоку выполненных заданий добавляется класс *`hidden`*, иначе этот класс у этого блока удаляется.

В файле *`sortingElements.js`* сначала импортируется объект с настройками, затем создается экспортируется функция, в теле которой проверяется, если параметр сортировки равен *`true`*, то к иконке сортировки добавляется класс *`rotated`* и возвращается значение *`true`*, иначе этот класс у иконки удаляется и возвращается значение *`false`*. Затем к блоку с кнопкой сортировки добавляется слушатель событий и при нажатии выполняется проверка, если экспортируемая функция возвращает *`false`*, то параметр сортировки в объекте устанавливается в значение *`true`*, иначе в значение *`false`*. Затем добавляется слушатель событий к глобальному объекту `window` и при загрузке страницы вызывается экспортируемая функция.

В файле *`taskItems.js`* сначала импортируются функции создания выполненных заданий, создания заданий, сортировки списка заданий, скрытия блока выполненных заданий, сохранение параметров сценариев и заданий в локальное хранилище, объект с путями к иконкам заданий, массив с параметрами сценариев и заданий. Затем содаются слушатели событий:
1. При нажатии на кнопку создаия новой задачи, сначала происходит проверка, не пустое ли текстовое поле и не равно ли значение текстового поля значению `###DELETE ALL PARAMETERS###`. Затем получаются параметры для создания задачи, которые в последствии добавляются в объект, а он уже добавляется к основному массиву параметров сценариев и заданий. После чего вызывается функция для создания нового элемента задания, затем вызывается функция для сохранения параметров в локальное хранилище. Далее вызывается функция для сортировки списка заданий. После идет проверка, если длина текста задания больше длины блока задания, то к этому заданию добавляется класс *`animated`*. После очищается текстовое поле. Если же значение текстового поля равно `###DELETE ALL PARAMETERS###`, то из локально хранилища удаляются все параметры сценариев и заданий, затем очищается текстовое поле и перезагружается страница.
2. При нажатии на клавишу `Enter` для кнопки создания заданий симулируется нажатие, то есть создается новая задача.
3. При нажатии на кнопку удаления задания, получаются все необходимые параметры, затем из массива параметров сценариев и заданий удаляются задания, которые содержат необходимые параметры. После чего задание удаляется из DOM дерева и вызывается функция сохранения параметров в локаное хранилище.
4. При нажатии на кнопку выполнения задания, получаются все необходимые параметры, затем для иконки выполнения задания изменяется атрибут `src` на активную иконку и для текста добавляются стили зачеркивания. После чего, с помощью асинхронной функции *`setTimeout()`* через 300 миллисекунд атрибуты и стили меняются на обычные. Далее также вызывается асинхронная функция *`setTimeout()`*, через 500 миллисекунд внутри которой проходимся по массиву сценариев и заданий, создаем выполненную задачу и удаляем нужный элемент задания из массива, затем из DOM дерева удаляется элемент задания и вызывается функция сохранения параметров в локаное хранилище.
5. При нажатии на кнопку изменения важности, получаем DOM название и ID нужной задачи, после проходимся по массиву сценариев и заданий и изменяем параметр важности на нужный в зависимости от текущих параметров и изменяем путь к иконке на нужный в атрибуте `src`. Далее вызываем функции сортировки списка заданий и сохранения параметров в локальное хранилище.
6. При нажатие на кнопку удаления выполненной задачи, получаем нужные нам параметры и вызываем функции для создания задачи и сортировки списка заданий. После удаляем элемент выполненной задачи из DOM дерева и вызываем функцию для скрытия блока выполненных заданий. Затем добавляем параметры новосозданной задачи в массив сценариев и заданий и сохраняем в локальное хранилище.

Функция *`getData()`* в конце файла получает данные о текущей дате и форматирует в зависимости от значений. Далее возвращает готовую строку, которая, например, исользуется при создании задачи.

#### Папка *`js/localStorage`*

В этой папке находятся скрипты, отвечающие за сохрание и получение данных из локального хранилища.

В файле *`deleteEmptyElements.js`* импортируется массив с параметрами сценариев и заданиц под другим имененм, затем создается экспортируемая функция, в которой с помощью методов *`reduce()`* и *`filter()`* удаляются пустые и null'овые значения. В конце функция возвращает отформатированный массив, который используется уже в другом файле.

В файле *`saveUserToStorage.js`* сначала импортируется массив с настройками сортировки и функция для очистки параметров массива. Затем создается экспортируемая функция, в теле которой мы получаем отсортированный массив сценариев и заданий и создаем/добавляем эти параметры в локальное хранилище *`localStorage`*, переведя импортируемые данные в *`JSON-строку`*.

В файле *`getUserFromStorage.js`* сначала импортируется объект с путями иконок сценариев, затем создаются две экспортируемые функции. Первая - для получения массива сценариев и заданий. Вторая - для получения объекта с параметрами сортировки. В первой функции мы проверяем наличие каких-либо параметров. Если при обращении к данным хранища возвращается *`null`*, то параметров нет и функция возвращает стандартный набор сценариев вообще без заданий, иначе функция возвращает нормальный массив. Со второй функцией все аналогично. Если данных нет, то возвращается объект, свойство сортировки которого находится в состоянии *`false`*, иначе функция возвращает нормальный объект пользователя.

### Папка *`assets`*

В этой папке находятся иконки, задний фон и фавиконка приложения.

Файл *`background.svg`* отвечает за задний фон приложения.

Файл *`favicon.svg`* отвечает за иконку приложения во вкладке браузера.

#### Папка *`assets/icons`*

В этой папке находятся все иконки приложения

##### Папка *`assets/icons/other-icons`*

В этой папке находятся иконки, которые используются в кнопках сортировки списка заданий, удаления заданий, скрытия выполненных заданий.

Файл *`arrow.svg`* отвечает за иконку стрелки у кнопки сортиковки списка заданий.

Файл *`chevron.svg`* отвечает за иконку у кнопки скрытия выполненных заданий.

Файл *`trash.svg`* отвечает за иконку урна у кнопки удаления всех видимых в данный момент заданий.

##### Папка *`assets/icons/scenario-icons`*

В этой папке находятся иконки, которые используются в блоке сценариев.

Файл *`bookmark.svg`* отвечает за иконку у кнопки сценария `Избранное`.

Файл *`briefcase.svg`* отвечает за иконку у кнопки сценария `Рабочие дела`.

Файл *`delete.svg`* отвечает за иконку удаления кнопки сценария у кастомных сценариев.

Файл *`home.svg`* отвечает за иконку у кнопки сценария `Домашние дела`.

Файл *`info.svg`* отвечает за иконку у кнопки кастомных сценариев.

Файл *`plus.svg`* отвечает за иконку у кнопки добавления нового сценария.

Файл *`sun.svg`* отвечает за иконку у кнопки сценария `Свободное время`.

Файл *`user.svg`* отвечает за иконку у кнопки сценария `Все задачи`.

##### Папка *`assets/icons/task-icons`*

В этой папке находятся иконки, которые используются в блоке заданий.

Файл *`circle-active.svg`* отвечает за активную иконку выполнения задания.

Файл *`circle.svg`* отвечает за стандартную иконку выполнения задания.

Файл *`delete.svg`* отвечает за иконку удаления задания.

Файл *`star-active.svg`* отвечает за активную иконку важности задания.

Файл *`star.svg`* отвечает за стандартную иконку важности задания.

***

>Сделано трудом Eduardik.