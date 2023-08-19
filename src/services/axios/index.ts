import axios, { AxiosRequestConfig } from 'axios'

export const getAxiosInstance = () => {

  const axiosConfig: AxiosRequestConfig = {
    baseURL: "",
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  }

  return axios.create(axiosConfig)
}
