import ConvertIcon from '../../assets/coonvert_icon.svg'
import UsFlag from '../../assets/amerikan_flag.svg'
import UkFlag from '../../assets/Uk_flag.svg'
import ExchangeIcon from '../../assets/exchance_icon.svg'
import EuFlag from '../../assets/eur_flag.svg'

import { useMemo, useState, useEffect, useRef } from 'react'

type Currency = 'USD' | 'GBP' | 'EUR'

const rates: Record<Currency, number> = {
  USD: 1,
  GBP: 0.787962, // 1 USD -> 0.787962 GBP (örnek)
  EUR: 0.898649, // 1 USD -> 0.898649 EUR (örnek)
}

const ConvertFund = () => {
  const [amount, setAmount] = useState<number>(10)
  const [from, setFrom] = useState<Currency>('USD')
  const [to, setTo] = useState<Currency>('GBP')
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)

  const fromDropdownRef = useRef<HTMLDivElement>(null)
  const toDropdownRef = useRef<HTMLDivElement>(null)

  const result = useMemo(() => {
    if (from === to) return amount
    const usdAmount = amount / rates[from]
    return +(usdAmount * rates[to]).toFixed(6)
  }, [amount, from, to])

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: UsFlag },
    { code: 'GBP', name: 'British Pound', flag: UkFlag },
    { code: 'EUR', name: 'Euro', flag: EuFlag },
  ]

  const getFlag = (currency: Currency) => {
    return currency === 'USD' ? UsFlag : currency === 'GBP' ? UkFlag : EuFlag
  }

  const getCurrencyName = (currency: Currency) => {
    return currency === 'USD' ? 'US Dollar' : currency === 'GBP' ? 'British Pound' : 'Euro'
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target as Node)) {
        setShowFromDropdown(false)
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target as Node)) {
        setShowToDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3">
          <img src={ConvertIcon} alt="convert" className="w-12 h-12" />
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">Convert Fund</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_1fr_auto] items-end gap-6">
          <div>
            <label className="block text-slate-600 text-lg font-semibold mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-500 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="$10.00"
            />
          </div>

          <div ref={fromDropdownRef}>
            <label className="block text-slate-600 text-lg font-semibold mb-2">From</label>
            <div className="relative">
              <button
                onClick={() => setShowFromDropdown(!showFromDropdown)}
                className="w-full flex items-center gap-3 rounded-lg border border-lime-600 px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-lime-400"
              >
                <img src={getFlag(from)} alt="flag" className="w-8 h-8 rounded-full object-cover" />
                <span className="flex-1 text-left font-medium text-slate-700">
                  {from} - {getCurrencyName(from)}
                </span>
                <svg className={`w-5 h-5 transition-transform ${showFromDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showFromDropdown && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => {
                        setFrom(currency.code as Currency)
                        setShowFromDropdown(false)
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                    >
                      <img src={currency.flag} alt={currency.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="font-medium text-slate-700">
                        {currency.code} - {currency.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button onClick={swap} className="hidden md:inline-flex items-center justify-center text-lime-600 px-2">
            <img src={ExchangeIcon} alt="swap" className="w-12 h-12" />
          </button>

          <div ref={toDropdownRef}>
            <label className="block text-slate-600 text-lg font-semibold mb-2">To</label>
            <div className="relative">
              <button
                onClick={() => setShowToDropdown(!showToDropdown)}
                className="w-full flex items-center gap-3 rounded-lg border border-lime-600 px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-lime-400"
              >
                <img src={getFlag(to)} alt="flag" className="w-8 h-8 rounded-full object-cover" />
                <span className="flex-1 text-left font-medium text-slate-700">
                  {to} - {getCurrencyName(to)}
                </span>
                <svg className={`w-5 h-5 transition-transform ${showToDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showToDropdown && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => {
                        setTo(currency.code as Currency)
                        setShowToDropdown(false)
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                    >
                      <img src={currency.flag} alt={currency.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="font-medium text-slate-700">
                        {currency.code} - {currency.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:justify-self-start mt-10 ml-auto">
            <button className="inline-flex items-center mr-4 justify-center rounded-xl border cursor-pointer bg-lime-500 text-white hover:bg-lime-600 px-12 py-3 font-semibold transition-colors">
              Convert
            </button>
          </div>

        <div className="mt-12">
          <p className="text-4xl md:text-3xl font-extrabold text-gray-400">
            {amount.toFixed(2)} {from === 'USD' ? 'US Dollars' : from === 'GBP' ? 'British Pounds' : 'Euros'} =
          </p>
          <p className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-700">
            {result} {to === 'USD' ? 'US Dollars' : to === 'GBP' ? 'British Pounds' : 'Euros'}
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed text-2xl font-medium">
            1 USD = {rates.GBP} GBP
            <br />1 GBP = {(1 / rates.GBP).toFixed(5)} USD
          </p>
        </div>
      </div>
    </section>
  )
}

export default ConvertFund