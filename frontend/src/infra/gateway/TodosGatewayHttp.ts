import type Todo from '@/entity/Todo'
import type HttpClient from '../http/HttpClient'
import type TodosGateway from './TodosGateway'

export default class TodosGatewayHttp implements TodosGateway {
  constructor(
    readonly httpClient: HttpClient,
    readonly baseUrl: string
  ) {}

  async getTodos(): Promise<Todo[]> {
    return await this.httpClient.get(`${this.baseUrl}/todos`)
  }
}
