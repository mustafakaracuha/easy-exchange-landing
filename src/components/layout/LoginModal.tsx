import Logo from '../../assets/logos/logo.svg'
import { useEffect, useState } from 'react'

type LoginModalProps = {
  open: boolean
  onClose: () => void
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const [enter, setEnter] = useState(false)
  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setEnter(true))
      return () => cancelAnimationFrame(id)
    } else {
      setEnter(false)
    }
  }, [open])
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${enter ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-start md:items-center justify-center p-4 pt-8">
        <div
          className={`w-full max-w-md max-h-xl bg-white rounded-4xl shadow-2xl p-8 md:p-12 relative transform transition-all duration-300 ease-out ${enter ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3">
            <img src={Logo} alt="logo" className="w-72 h-16" />
          </div>
          <div className="h-1 bg-lime-500 rounded-full mb-7" />
          <h2 className="text-2xl font-medium text-lime-600">Login Account</h2>
          <form className="mt-10 space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full border-l-6 border-lime-500 bg-slate-100 placeholder-slate-300 focus:border-lime-400 px-4 py-3 outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border-l-6 border-lime-500 bg-slate-100 placeholder-slate-300 focus:border-lime-400 px-4 py-3 outline-none"
              />
            </div>
            <div className="flex items-center mt-4 justify-between text-slate-400 text-sm">
              <a href="#" className="hover:text-slate-600">I don’t have account</a>
              <a href="#" className="hover:text-slate-600">Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg mt-2 bg-lime-600 text-white text-xl hover:bg-lime-600 px-6 py-3 font-extrabold tracking-wide"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal


