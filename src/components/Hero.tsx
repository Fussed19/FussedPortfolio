export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 xl:px-24 2xl:px-32 pt-8 lg:pt-10 pb-16 bg-[#050509] text-zinc-100"
    >
      {/* BLOQUE 2: CONTENEDOR PRINCIPAL (SOLO EL NOMBRE) */}
      <div
        className="
          relative
          max-w-7xl xl:max-w-400 2xl:max-w-440
          mx-auto
          flex items-center
          // CONTROLAS AQUÍ LA ALTURA VERTICAL DEL BLOQUE DE NOMBRE
          mt-10 sm:mt-16 lg:mt-20 xl:mt-24
          z-10
        "
      >
        {/* BLOQUE 2.1: NOMBRE GIGANTE (ÚNICO PROTAGONISTA) */}
        {/* Se elimina motion.div y se deja un div normal para poder animar con anime.js más adelante */}
        <div className="space-y-4" /* id o class específica para anime.js si se requiere */>
          <h1
            className="
              font-black leading-none tracking-tight
              text-5xl sm:text-6xl lg:text-7xl
              xl:text-[6rem]
              2xl:text-[7rem]
            "
          >
            {/* LÍNEA DIEGO */}
            <span
              className="
                block
                text-8xl          /* base móvil */
                sm:text-[6.5rem]
                lg:text-[8.5rem]
                xl:text-[13.5rem]
                2xl:text-[16rem]
              "
            >
              DIEGO
            </span>

            {/* LÍNEA PALENCIA (CINTA BLANCA) */}
            <span className="inline-flex items-center gap-4 mt-1 ml-3">
              <span
                className="
                  bg-zinc-100 text-black
                  px-4 py-2
                  text-3xl
                  sm:text-[2.3rem]
                  lg:text-[3rem]
                  xl:text-[4.5rem]
                  2xl:text-[6rem]
                  leading-none font-black
                "
              >
                PALENCIA
              </span>
            </span>

            {/* LÍNEA MARTINEZ */}
            <span
              className="
                block mt-1 ml-3
                text-3xl
                sm:text-[2.3rem]
                lg:text-[3rem]
                xl:text-[4.5rem]
                2xl:text-[6rem]
              "
            >
              MARTINEZ
            </span>
          </h1>

          {/* NUEVA BARRA SEPARADORA DEBAJO DEL NOMBRE */}
          <div className="h-1.5 w-70 xl:w-125 bg-zinc-500 ml-3 mt-25" />

          {/* NUEVO SUBTÍTULO PEQUEÑO */}
          <p
            className="
              uppercase tracking-[0.2em] ml-3 mt-4
              text-[15px] sm:text-[20px] xl:text-[23px]
              font-bold text-zinc-400
            "
          >
            Estudiante de Diseño y Desarrollo de Videojuegos
          </p>
        </div>
      </div>

      {/* BLOQUE 3: BARRA INFERIOR FIJA CON CTA Y REDES */}
      <div
        className="
          fixed left-0 right-0 bottom-0
          px-10 md:px-10 xl:px-12 2xl:px-12
          pb-8 pt-4
          z-10
          bg-linear-to-t from-[#1a1a2d] via-[#161626]/05 to-transparent
        "
      >
        <div
          className="
            max-w-7xl xl:max-w-400 2xl:max-w-440
            mx-auto
            flex items-center justify-between gap-4
            text-[13px] xl:text-[15px]
          "
        >
          {/* IZQUIERDA: BOTÓN DESCARGAR CV */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-3
              border-2 border-zinc-100 bg-zinc-100 text-black
              px-12 py-5
              text-xs sm:text-base md:text-lg
              font-bold uppercase tracking-[0.2em]
              shadow-[5px_5px_0_0_#000]
              active:translate-x-0.5 active:translate-y-0.5
              active:shadow-[2px_2px_0_0_#000]
              transition-all duration-150
            "
          >
            Descargar CV
          </a>

          {/* DERECHA: LINKS A REDES */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-zinc-700 p-2.5 sm:p-3 hover:border-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <svg className="h-8 w-8 sm:h-10 sm:w-10 fill-zinc-100" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.9 1 4.98 2.12 4.98 3.5zM.24 8.25H4.76V24H.24V8.25zM8.44 8.25H12.8V10.1H12.86C13.47 8.95 14.88 7.76 17.02 7.76 21.5 7.76 22.25 10.71 22.25 14.36V24H17.72V15.39C17.72 13.53 17.68 11.18 15.21 11.18 12.7 11.18 12.33 13.17 12.33 15.25V24H7.8V8.25H8.44Z" />
              </svg>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-zinc-700 p-2.5 sm:p-3 hover:border-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <svg className="h-8 w-8 sm:h-10 sm:w-10 fill-zinc-100" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
