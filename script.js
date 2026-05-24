const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

//  Function to add todo
function addTodo() {
  const todoText = newTodoInput.value.trim();

  if (todoText === "") return;

  const li = document.createElement("li");
  li.textContent = todoText;

  todoList.appendChild(li);

  //  Clear input
  newTodoInput.value = "";
}

//  Click event
addTodoBtn.addEventListener("click", addTodo);

// Enter key support (important for Cypress sometimes)
newTodoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});