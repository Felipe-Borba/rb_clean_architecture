import axios from 'axios'
import type TodosGateway from './TodosGateway'

export default class TodosGatewayHttp implements TodosGateway {
  async getTodos(): Promise<any> {
    const response = await axios.get('http://localhost:3000/todos')
    return response.data
  }
}
