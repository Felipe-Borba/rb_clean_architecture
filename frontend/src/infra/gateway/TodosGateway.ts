import type Todo from '@/entity/Todo'

export default interface TodosGateway {
  getTodos(): Promise<Todo[]>
  postTodos(todo: Todo): Promise<void>
}
