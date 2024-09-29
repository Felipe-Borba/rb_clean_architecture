import Todo from './Todo'

export default class TodoList {
  todos: Todo[]

  constructor() {
    this.todos = []
  }

  getTotal() {
    return this.todos.length
  }

  getCompleted() {
    const total = this.getTotal()
    if (total === 0) return 0
    const completed = this.todos.filter((todo) => todo.done).length
    return Math.round((completed / total) * 100)
  }

  addTodo(description: string, done = false) {
    if (this.todos.some((todo) => todo.description === description)) return
    this.todos.push(new Todo(description, done))
  }

  addTodos(todos: Todo[]) {
    for (const todo of todos) {
      this.addTodo(todo.description, todo.done)
    }
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1)
  }
}
