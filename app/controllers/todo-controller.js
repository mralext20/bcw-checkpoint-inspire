import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  // console.log(todos)

  let target = document.getElementById("todotarget");
  let template = "";
  todos.forEach(elm => {
    template += elm.Template
  })
  target.innerHTML = template
  document.getElementById('todo-count').innerText = todos.length.toString()
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe('todos', _drawTodos)
    TodoService.getTodos();
  }
  getTodo() { TodoService.getTodos() };
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      description: form.note.value
    };
    form.reset()
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
