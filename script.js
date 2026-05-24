const input = document.getElementById("newTodoInput");
const addBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function () {
  const value = input.value.trim();

  if (value === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = value;
  todoList.appendChild(li);

  input.value = "";
});