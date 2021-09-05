// todoList
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const hereList = document.querySelector("#hereList");

let toDos = [];

function submitTodo(event) {
    event.preventDefault();
    const todoValue = todoInput.value;
    const todoID = Date.now();
    todoInput.value = "";
    const todoObj = {
        text: todoValue,
        id: todoID
    };
    toDos.push(todoObj);
    addTodo(todoObj);
    localStorage.setItem('todos', JSON.stringify(toDos));
   
}


function addTodo(todoObj) {
const li = document.createElement('li');
li.id = todoObj.id;
const span = document.createElement('span');
const button = document.createElement("button");
button.innerText = "⭕"
button.addEventListener("click", deleteTodo);
li.appendChild(span);
li.appendChild(button);
span.innerText = todoObj.text;
hereList.appendChild(li); 
span.addEventListener("dblclick",deleteTodo);
}

function deleteTodo(event) {
    const parentLi = event.target.parentElement;
    parentLi.remove(); 
    toDos = toDos.filter(function(todo) {return todo.id!==parseInt(parentLi.id)});
    localStorage.setItem('todos', JSON.stringify(toDos));
}

todoForm.addEventListener("submit", submitTodo) ;

const savedTodos = localStorage.getItem('todos');
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos=parsedTodos;
    parsedTodos.forEach(addTodo);
} 