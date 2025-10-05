import Secure from '../../assets/SECURE.svg'
import Accessible from '../../assets/ACCESSIBLE.svg'
import Fast from '../../assets/FAST.svg'

const features = [
  {
    icon: Secure,
    title: 'SECURE',
    description:
      'Send money online fast, secure and easy. Live tracking and notifications + flexible delivery and payment options.',
  },
  {
    icon: Accessible,
    title: 'EASY ACCESSIBLE',
    description:
      'Create a chart for any currency pair to see their currency history. Charts use live mid‑market rates and are very reliable.',
  },
  {
    icon: Fast,
    title: 'FAST AND RELIABLE',
    description:
      'Know when a currency hits a specific rate with alerts, so you are notified on your selected currency pairs.',
  },
]

const Features = () => {
  return (
    <section className="w-full bg-slate-50 mt-10">
      <div className="max-w-7xl mx-auto px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-4xl bg-white shadow-xl shadow-gray-300 p-12 text-center"
            >
              <img src={f.icon} alt={f.title} className="mx-auto w-50 h-50" />
              <h3 className="mt-6 text-2xl font-extrabold text-lime-600 tracking-wide">{f.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


