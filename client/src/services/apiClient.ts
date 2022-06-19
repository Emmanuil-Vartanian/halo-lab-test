import axios, { CancelTokenSource } from 'axios'
import qs from 'qs'

const windowLocation = window.location.origin
const API_BASE_URL = `${windowLocation}/`

export const ApiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
})

ApiClient.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      ...config.headers
    }
  }
})

export const getCancelTokenSource = (): CancelTokenSource => axios.CancelToken.source()
