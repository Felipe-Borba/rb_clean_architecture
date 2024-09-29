import type HttpClient from '../http/HttpClient'
import type TodosGateway from './TodosGateway'

export default class TodosGatewayHttp implements TodosGateway {
  constructor(
    readonly httpClient: HttpClient,
    readonly baseUrl: string
  ) {}

  async getTodos(): Promise<any> {
    return await this.httpClient.get(`${this.baseUrl}/todos`)
  }
}
