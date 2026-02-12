import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled ? 'backdrop-blur bg-[#1b1f2a]/70 shadow-lg' : ''}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-[#88c0d0]">
          TuNombre
        </span>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-[#88c0d0]">
            Sobre mí
          </a>
          <a href="#projects" className="hover:text-[#88c0d0]">
            Proyectos
          </a>
          <a href="#contact" className="hover:text-[#88c0d0]">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}
