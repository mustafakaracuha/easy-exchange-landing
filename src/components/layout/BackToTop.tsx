import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-lime-500 hover:bg-lime-600 text-white shadow-lg w-12 h-12 flex items-center justify-center transition-colors animate-[fadeInUp_300ms_ease-out]"
    >
      ↑
    </button>
  )
}

export default BackToTop


