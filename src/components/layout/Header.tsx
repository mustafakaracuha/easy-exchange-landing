import Logo from '../../assets/Group 3765.svg'

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-1">
          <img src={Logo} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-xl md:text-2xl font-semibold text-slate-700">EASY</span>
          <span className="text-xl md:text-2xl font-semibold text-lime-600">EXCHANGE</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">LOGIN</a>
        </nav>
      </div>
    </header>
  )
}

export default Header


