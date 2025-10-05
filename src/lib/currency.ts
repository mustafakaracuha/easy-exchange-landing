import type { Currency } from '../types/exchange'
import UsFlag from '../assets/flags/us.svg'
import UkFlag from '../assets/flags/gb.svg'
import EuFlag from '../assets/flags/eu.svg'

export const ALLOWED: Currency[] = ['USD', 'GBP', 'EUR']

export const CURRENCIES: Record<Currency, { name: string; flag: string }> = {
  USD: { name: 'US Dollar', flag: UsFlag },
  GBP: { name: 'British Pound', flag: UkFlag },
  EUR: { name: 'Euro', flag: EuFlag },
}

export const currencyList: Array<{ code: Currency; name: string; flag: string }> = ALLOWED.map((code) => ({
  code,
  ...CURRENCIES[code],
}))


