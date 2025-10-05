import axios from 'axios'

export type Currency = 'USD' | 'GBP' | 'EUR'

type RatesResponse = {
  result: 'success' | string
  conversion_rates?: Record<string, number>
}

export async function fetchRate(base: Currency, target: Currency): Promise<number> {
  const apiKey = import.meta.env.VITE_APP_API_KEY as string | undefined
  if (!apiKey) {
    throw new Error('API anahtarı bulunamadı')
  }
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`
  const { data } = await axios.get<RatesResponse>(url)
  if (data?.result !== 'success' || !data?.conversion_rates) {
    throw new Error('Geçersiz API yanıtı')
  }
  const rate = data.conversion_rates[target]
  if (typeof rate !== 'number') {
    throw new Error('Kur bilgisi alınamadı')
  }
  return rate
}


