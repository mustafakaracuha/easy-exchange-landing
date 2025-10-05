import ConvertIcon from '../../assets/icons/convert.svg'
import UsFlag from '../../assets/flags/us.svg'
import UkFlag from '../../assets/flags/gb.svg'
import ExchangeIcon from '../../assets/icons/exchange.svg'
import EuFlag from '../../assets/flags/eu.svg'

import { useState, useEffect, useRef } from 'react'
import { fetchRate } from '../../services/exchange'
import type { Currency } from '../../types/exchange'


const ConvertFund = () => {
  const [amount, setAmount] = useState<string>('10')
  const [from, setFrom] = useState<Currency>('USD')
  const [to, setTo] = useState<Currency>('GBP')
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [conversionResult, setConversionResult] = useState<number | null>(null)
  const [baseToTargetRate, setBaseToTargetRate] = useState<number | null>(null)

  const fromDropdownRef = useRef<HTMLDivElement>(null)
  const toDropdownRef = useRef<HTMLDivElement>(null)

  const handleConvert = async () => {
    setError('')
    setIsLoading(true)
    try {
      const numericAmount = parseFloat(amount)
      if (isNaN(numericAmount) || numericAmount < 0) {
        throw new Error('Please enter a valid amount')
      }
      const allowed: Currency[] = ['USD', 'GBP', 'EUR']
      if (!allowed.includes(to)) {
        throw new Error('Invalid target currency')
      }

      const rate = await fetchRate(from, to)

      setBaseToTargetRate(rate)
      const computed = +(numericAmount * rate).toFixed(6)
      setConversionResult(computed)
    } catch (e: any) {
      setConversionResult(null)
      setBaseToTargetRate(null)
      setError(e?.message || 'An error occurred during conversion')
    } finally {
      setIsLoading(false)
    }
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConversionResult(null)
    setBaseToTargetRate(null)
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
          <h2 className="text-2xl md:text-2xl font-semibold text-slate-700">Convert Fund</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_1fr_auto] items-end gap-6">
          <div>
            <label className="block text-slate-600 text-lg font-semibold mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
                setConversionResult(null)
              }}
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
                        setConversionResult(null)
                        setBaseToTargetRate(null)
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
                        setConversionResult(null)
                        setBaseToTargetRate(null)
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
            <button
              onClick={handleConvert}
              disabled={isLoading}
              className="inline-flex items-center mr-4 justify-center rounded-xl border cursor-pointer bg-lime-500 text-white hover:bg-lime-600 disabled:opacity-60 disabled:cursor-not-allowed px-12 py-3 font-semibold transition-colors"
            >
              {isLoading ? 'Converting…' : 'Convert'}
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-xl font-medium">{error}</p>
          )}
          {conversionResult !== null && (
            <div className="transition-all duration-300 ease-out opacity-100 translate-y-0 animate-[fadeInUp_300ms_ease-out]">
              <p className="text-4xl md:text-3xl font-extrabold text-gray-400">
                {(amount === '' ? '0.00' : Number(amount).toFixed(2))} {from === 'USD' ? 'US Dollars' : from === 'GBP' ? 'British Pounds' : 'Euros'} =
              </p>
              <p className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-700">
                {conversionResult} {to === 'USD' ? 'US Dollars' : to === 'GBP' ? 'British Pounds' : 'Euros'}
              </p>
              {baseToTargetRate !== null && (
                <p className="mt-4 text-slate-400 leading-relaxed text-2xl font-medium">
                  1 {from} = {baseToTargetRate.toFixed(6)} {to}
                  <br />1 {to} = {(1 / baseToTargetRate).toFixed(5)} {from}
                </p>
              )}
            </div>
          )}
      </div>
    </section>
  )
}

export default ConvertFund