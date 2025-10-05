export type Currency = 'USD' | 'GBP' | 'EUR'

export type RatesResponse = {
  result: 'success' | string
  base_code?: string
  time_last_update_utc?: string
  conversion_rates?: Record<string, number>
}


