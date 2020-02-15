export default class Todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = data.completed
  }
  get Template() {
    return /*html*/`
    <p>
    <input type="checkbox" onclick="app.todoController.toggleTodoStatus('${this._id}')" ${this.completed ? 'checked' : ''}>
    ${this.description}
    <button onclick="app.todoController.removeTodo('${this._id}')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
    </p>
    `
  }
}