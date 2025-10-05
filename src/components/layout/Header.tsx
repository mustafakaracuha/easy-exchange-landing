import Logo from '../../assets/logos/logo.svg'

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-8">
          <img src={Logo} alt="logo" className="w-52 h-16 md:w-14 md:h-14 lg:w-72 lg:h-10" />
        <nav className="flex items-center gap-6">
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">LOGIN</a>
        </nav>
      </div>
    </header>
  )
}

export default Header


