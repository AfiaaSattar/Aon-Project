let changeTitleColor = (color) => {
  let titleElem = document.getElementById("title");
  titleElem.style.color = color;
};

let todos = [];
let addTodo = () => {
  let inputElem = document.getElementById("todoInput");
  todos.push(inputElem.value);
  inputElem.value = ""

  let todosElm = document.getElementById("todosElm");
  todosElm.innerHTML = todos.map(el=> `<p>${el}</p>`).join("")
};
