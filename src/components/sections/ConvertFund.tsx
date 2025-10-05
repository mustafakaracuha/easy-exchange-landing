import ConvertIcon from '../../assets/coonvert_icon.svg'
import UsFlag from '../../assets/amerikan_flag.svg'
import UkFlag from '../../assets/Uk_flag.svg'
import ExchangeIcon from '../../assets/exchance_icon.svg'

import { useMemo, useState } from 'react'

type Currency = 'USD' | 'GBP'

const rates: Record<Currency, number> = {
  USD: 1,
  GBP: 0.787962, // 1 USD -> 0.787962 GBP (örnek)
}

const ConvertFund = () => {
  const [amount, setAmount] = useState<number>(10)
  const [from, setFrom] = useState<Currency>('USD')
  const [to, setTo] = useState<Currency>('GBP')

  const result = useMemo(() => {
    if (from === to) return amount
    const usdAmount = amount / rates[from]
    return +(usdAmount * rates[to]).toFixed(6)
  }, [amount, from, to])

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

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

          <div>
            <label className="block text-slate-600 text-lg font-semibold mb-2">From</label>
            <div className="relative">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value as Currency)}
                className="w-full appearance-none rounded-lg border border-lime-600 px-10 py-3 pr-10 outline-none focus:ring-2 focus:ring-lime-400"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
              <img src={UsFlag} alt="flag" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6" />
            </div>
          </div>

          <button onClick={swap} className="hidden md:inline-flex items-center justify-center text-lime-600 px-2">
            <img src={ExchangeIcon} alt="swap" className="w-12 h-12" />
          </button>

          <div>
            <label className="block text-slate-600 text-lg font-semibold mb-2">To</label>
            <div className="relative">
              <select
                value={to}
                onChange={(e) => setTo(e.target.value as Currency)}
                className="w-full appearance-none rounded-lg border border-lime-600 px-10 py-3 pr-10 outline-none focus:ring-2 focus:ring-lime-400"
              >
                <option value="GBP">GBP - British Pound</option>
                <option value="USD">USD - US Dollar</option>
              </select>
              <img src={UkFlag} alt="flag" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6" />
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
            {amount.toFixed(2)} {from === 'USD' ? 'US Dollars' : 'British Pounds'} =
          </p>
          <p className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-700">
            {result} {to === 'USD' ? 'US Dollars' : 'British Pounds'}
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


