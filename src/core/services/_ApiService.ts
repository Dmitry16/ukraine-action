import axios, { AxiosInstance } from "axios"
import { config } from "../config"

class ApiService {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: config.api.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    })

    this.api.interceptors.request.use((request) => {
      const token = localStorage.getItem("access_token")
      if (token) {
        request.headers.Authorization = `Bearer ${token}`
      }
      return request
    })

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error)
        return Promise.reject(error)
      }
    )
  }

  get(url: string, params?: any) {
    return this.api.get(url, { params })
  }

  post(url: string, data?: any) {
    return this.api.post(url, data)
  }

  put(url: string, data?: any) {
    return this.api.put(url, data)
  }

  delete(url: string) {
    return this.api.delete(url)
  }
}

export default new ApiService()
