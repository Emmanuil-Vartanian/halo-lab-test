import { ApiClient } from 'services/apiClient'
import { URL } from 'api'
import { AxiosResponse } from 'axios'

export const getCardsAPI = (): Promise<AxiosResponse> => {
  return ApiClient.get(URL.GET_CARDS)
}

export const productPurchaseAPI = (data: Record<string, any>): Promise<AxiosResponse> => {
  return ApiClient.post(URL.PRODUCT_PURCHASE, data)
}
