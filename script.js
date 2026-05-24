//your code here
const input = document.getElementById('newTodoInput');
const addBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', () => {
  const todoText = input.value.trim();

  if (todoText === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = todoText;
  todoList.appendChild(li);

  input.value = '';
});

