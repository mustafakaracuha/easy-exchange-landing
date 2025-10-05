import axios from 'axios'
import type { Currency, RatesResponse } from '../types/exchange'

export async function fetchRate(base: Currency, target: Currency): Promise<number> {
  const apiKey = import.meta.env.VITE_APP_API_KEY as string | undefined
  if (!apiKey) {
    throw new Error('API key not found')
  }
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`
  const { data } = await axios.get<RatesResponse>(url)
  if (data?.result !== 'success' || !data?.conversion_rates) {
    throw new Error('Invalid API response')
  }
  const rate = data.conversion_rates[target]
  if (typeof rate !== 'number') {
    throw new Error('Exchange rate not found')
  }
  return rate
}


