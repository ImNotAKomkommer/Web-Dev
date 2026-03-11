const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

let taskIdCounter = 4;

const updateTaskStyle = (checkboxElement, textElement) => {
  if (checkboxElement.checked) {
    textElement.classList.add('task-text-done');
  } else {
    textElement.classList.remove('task-text-done');
  }
};

const createDeleteButton = (taskItem, taskTextValue) => {
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('aria-label', `Delete ${taskTextValue}`);

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(taskItem);
  });

  return deleteButton;
};

const createTaskItem = (taskTextValue, isDone = false) => {
  const taskItem = document.createElement('li');
  taskItem.className = 'todo-item';

  const taskLeftWrapper = document.createElement('div');
  taskLeftWrapper.className = 'todo-left';

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.className = 'task-checkbox';
  checkboxElement.id = `task-${taskIdCounter}`;
  checkboxElement.checked = isDone;

  const textElement = document.createElement('label');
  textElement.className = 'task-text';
  textElement.setAttribute('for', checkboxElement.id);
  textElement.textContent = taskTextValue;

  updateTaskStyle(checkboxElement, textElement);

  checkboxElement.addEventListener('change', () => {
    updateTaskStyle(checkboxElement, textElement);
  });

  const deleteButton = createDeleteButton(taskItem, taskTextValue);

  taskLeftWrapper.appendChild(checkboxElement);
  taskLeftWrapper.appendChild(textElement);

  taskItem.appendChild(taskLeftWrapper);
  taskItem.appendChild(deleteButton);

  taskIdCounter += 1;

  return taskItem;
};

const attachEventsToExistingItems = () => {
  const existingItems = todoList.querySelectorAll('.todo-item');

  existingItems.forEach((taskItem) => {
    const checkboxElement = taskItem.querySelector('.task-checkbox');
    const textElement = taskItem.querySelector('.task-text');
    const deleteButton = taskItem.querySelector('.delete-button');

    updateTaskStyle(checkboxElement, textElement);

    checkboxElement.addEventListener('change', () => {
      updateTaskStyle(checkboxElement, textElement);
    });

    deleteButton.addEventListener('click', () => {
      todoList.removeChild(taskItem);
    });
  });
};

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskTextValue = taskInput.value.trim();

  if (!taskTextValue) {
    taskInput.focus();
    return;
  }

  const newTaskItem = createTaskItem(taskTextValue);
  todoList.appendChild(newTaskItem);

  taskInput.value = '';
  taskInput.focus();
});

attachEventsToExistingItems();