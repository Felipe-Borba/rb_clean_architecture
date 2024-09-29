import Observable from '@/infra/observer/Observable'
import Todo from './Todo'

export default class TodoList extends Observable {
  todos: Todo[]

  constructor() {
    super()
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
    const todo = new Todo(description, done)
    this.notify('add-todo', todo) //seria legal garantir esse comportamento de só add na lista se deu sucesso na api
    this.todos.push(todo)
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
