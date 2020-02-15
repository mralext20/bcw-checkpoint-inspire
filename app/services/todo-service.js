import store from "../store.js";
import Todo from "../models/Todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/alex/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get("").then(res => {
      let todos = res.data.data.map(todo => new Todo(todo))
      store.commit('todos', todos)
    })
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi.post("", todo).then(res => {
      let todo = new Todo(res.data.data)
      let todos = [...store.State.todos, todo]
      store.commit('todos', todos)
    });
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    if (todo) {
      todo.completed = !todo.completed
      todoApi.put(todo._id, todo).then(res => {
        console.log('update worked')
      }).catch(err => console.log(err))
    }

    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {

    todoApi.delete(todoId).then(res => {
      let todos = store.State.todos.filter(elm => elm._id != todoId)
      store.commit('todos', todos)
    }).catch(err => console.error(err));
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
