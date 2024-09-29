import type HttpClient from './HttpClient'
import axios from 'axios'

export default class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await axios.get(url)
    return response.data
  }

  async post(url: string, data: any): Promise<void> {
    await axios.post(url, data)
  }
}
