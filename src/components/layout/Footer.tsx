const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white text-lg font-semibold">EASY<span className="text-lime-500">EXCHANGE</span></h4>
          <p className="mt-3 text-sm text-slate-400">Fast, secure and easy currency exchange.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-3">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()}</span>
          <span>Made by <a href="https://github.com/kodluyoruz" className="text-lime-500 hover:text-lime-600 transition-colors">MUSTAFA KARAÇUHA</a></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


