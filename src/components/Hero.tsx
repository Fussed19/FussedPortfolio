import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden px-5 lg:px-10 pt-20 lg:pt-24 pb-12 bg-[#050509] text-zinc-100"
    >
      {/* NAVBAR BRUTALISTA INTEGRADA EN EL HERO */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute top-5 lg:top-7 left-1/2 -translate-x-1/2 z-40"
      >
        <div
          className="flex items-center gap-6 lg:gap-8
                     border border-zinc-700/70 bg-black/60
                     px-4 lg:px-6 py-2.5 lg:py-3
                     uppercase tracking-[0.2em]
                     text-[9px] lg:text-[11px] text-zinc-300/80
                     shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
                     backdrop-blur-md
                     rounded-full lg:rounded-full"
        >
          <span className="font-semibold">PORTFOLIO</span>

          <span className="hidden md:inline-flex h-px w-10 bg-zinc-600/80" />

          <nav className="hidden md:flex gap-6 text-[10px] lg:text-[11px]">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <span className="ml-4 text-[9px] lg:text-[10px] text-zinc-500 hidden lg:inline">
            AVAILABLE · 2025
          </span>
        </div>
      </motion.div>

      {/* CONTENEDOR PRINCIPAL CON GRID EDITORIAL */}
      <div className="relative max-w-6xl mx-auto mt-12 lg:mt-16 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* COLUMNA IZQUIERDA: TITULAR + COPY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-6 space-y-6 relative z-20"
        >
          {/* Etiqueta pequeña tipo editorial */}
          <div className="inline-flex items-center gap-2 text-[10px] leading-0.5 tracking-[0.2em] uppercase text-zinc-400">
            <span className="h-[1px] w-6 bg-zinc-500" />
            <span>Portfolio · 2026</span>
          </div>

          {/* TITULAR MINIMAL: CADA PALABRA EN SU LÍNEA, DIEGO MÁS GRANDE, PALENCIA EN BLOQUE INVERTIDO */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-2xl font-black leading-tight tracking-tight">
              <span className="block text-4xl sm:text-5xl lg:text-8xl">
                DIEGO
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="bg-zinc-100 text-black px-3 py-1 text-lg sm:textx1 lg:text-4xl leading-relaxed">
                  PALENCIA
                </span>
              </span>

              <span className="block text-lg sm:text-xl lg:text-4xl">
                MARTINEZ
              </span>
            </h1>

            {/* Separador después del bloque de nombre (más largo) */}
            <div className="h-px w-40 bg-zinc-700" />
          </div>

          {/* SUBTÍTULO Y DESCRIPCIÓN */}
          <div className="space-y-3 max-w-md text-sm sm:text-base text-zinc-300">
            <p className="uppercase tracking-[0.16em] text-[11px] text-zinc-400">
              Estudiante de Diseño y desarrollo de Videojuegos
            </p>

            {/* Separador después de "Estudiante" (más largo) */}
            <div className="h-px w-40 bg-zinc-800" />

            <p>
              {/* Descripción breve: edita este texto con 2–3 frases sobre tu perfil, enfoque y objetivos. */}
              Aquí iría una breve descripción sobre tu perfil como desarrollador de videojuegos, tus intereses
              principales y el tipo de proyectos que te gustaría crear o en los que quieres colaborar.
            </p>
          </div>

          {/* CTA: CV + ENLACES A REDES */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {/* Botón CV */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                         border border-zinc-100 bg-zinc-100 text-black
                         px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]
                         shadow-[4px_4px_0_0_#000]
                         active:translate-x-[2px] active:translate-y-[2px]
                         active:shadow-[2px_2px_0_0_#000]
                         transition-all duration-150"
            >
              Descargar CV
            </a>

            {/* Links redes con logos oficiales (SVG inline simplificados) */}
            <div className="flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.14em] text-zinc-400">
              <a
                href="https://www.linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-1.5 rounded-full hover:border-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <svg
                  className="h-4 w-4 fill-zinc-100"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.9 1 4.98 2.12 4.98 3.5zM.24 8.25H4.76V24H.24V8.25zM8.44 8.25H12.8V10.1H12.86C13.47 8.95 14.88 7.76 17.02 7.76 21.5 7.76 22.25 10.71 22.25 14.36V24H17.72V15.39C17.72 13.53 17.68 11.18 15.21 11.18 12.7 11.18 12.33 13.17 12.33 15.25V24H7.8V8.25H8.44Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-1.5 rounded-full hover:border-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <svg
                  className="h-4 w-4 fill-zinc-100"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: SOLO PLACEHOLDER LIMPIO PARA FUTURA ANIMACIÓN/GRÁFICO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6 relative h-[260px] sm:h-[320px] lg:h-[360px] flex items-center justify-center"
        >
          <div
            className="relative w-full h-full max-w-md mx-auto
                       rounded-[28px] border border-zinc-700/80
                       bg-gradient-to-br from-zinc-900/80 via-zinc-950/95 to-black
                       overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
          >
            {/* Marco superior tipo ventana */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-950/80 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-zinc-500" />
                <span className="h-2 w-2 rounded-full bg-zinc-700" />
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
              </div>
              <span>visual_placeholder.exr</span>
              <span>preview</span>
            </div>

            {/* Zona central: placeholder neutro para futura animación/gráfico */}
            <div className="relative h-full flex items-center justify-center">
              {/* Círculo/órbita como guiño a un modelo 3D girando */}
              <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-52 lg:w-52 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-zinc-600/60" />
                <div className="absolute inset-4 rounded-full border border-dashed border-zinc-500/50" />
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,_#22d3ee,_#a855f7,_#22d3ee)] opacity-25 blur-2xl" />

                <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-2xl border border-zinc-500/70 bg-black/70 flex items-center justify-center text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                  <span>3D / Motion<br />Slot</span>
                </div>
              </div>

              {/* Etiqueta sutil en esquina: copy de placeholder */}
              <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Placeholder visual
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] text-zinc-600 uppercase tracking-[0.14em]">
                Reemplazar por animación o modelo 3D
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MICRO COPY INFERIOR TIPO EDITORIAL */}
      <div className="mt-8 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        <span>Portafolio experimental 2025 — Work in progress</span>
        <span className="flex items-center gap-2">
          <span className="h-[1px] w-10 bg-zinc-600" />
          Scroll para más signal, menos noise
        </span>
      </div>
    </section>
  )
}
