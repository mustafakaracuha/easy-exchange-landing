import HeroImg from '../../assets/illustrations/hero.svg'

const Hero = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-700 leading-tight">
            Exchange Your Money
            <br />
            <span className="text-lime-600">Easily, Quickly And</span>
            <br />
            <span className="text-lime-600">Securely</span>
          </h1>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl">
            Best source for currency conversion, sending money online and tracking exchange rates. Live tracking and
            notifications + flexible delivery and payment options.
          </p>
          <button className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-lime-500 px-6 py-2 text-lime-600 font-semibold hover:bg-lime-50 transition-colors">
            Exchange Fund
          </button>
        </div>
        <div className="order-1 md:order-2 relative flex items-center justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-[600px] md:h-[600px] rounded-full bg-slate-100" />
          <img src={HeroImg} alt="Hero Illustration" className="relative z-10 w-56 md:w-[500px] h-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero


