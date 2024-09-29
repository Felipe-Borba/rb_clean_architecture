import type HttpClient from './HttpClient'

export default class FetchAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await fetch(url)
    return response.json()
  }

  async post(url: string, data: any): Promise<void> {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }
}
