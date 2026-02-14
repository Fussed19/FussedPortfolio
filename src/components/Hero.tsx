import { motion } from "framer-motion";

function AnimatedLetters({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: 80, opacity: 0 }}
          animate={{
            y: [80, -15, 0, -5, 0],
            opacity: 1
          }}
          transition={{
            delay: i * 0.04,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: Math.random() * 8 + 6
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 xl:px-24 2xl:px-32 pt-8 lg:pt-10 pb-16 bg-[#050509] text-zinc-100"
    >
      <div className="relative max-w-7xl xl:max-w-400 2xl:max-w-440 mx-auto flex items-center mt-10 sm:mt-16 lg:mt-20 xl:mt-24 z-10">
        <div className="space-y-4 w-full">
          <h1 className="font-black leading-none tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] 2xl:text-[7rem]">
            
            <span className="block text-8xl sm:text-[8.5rem] lg:text-[10.5rem] xl:text-[14.5rem] 2xl:text-[16rem]">
              <AnimatedLetters text="DIEGO" />
            </span>
            
            <span className="block sm:inline-flex items-center gap-4 mt-1 sm:ml-3">
              <span className="bg-zinc-100 text-black px-4 py-2 text-3xl sm:text-[3.3rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[6rem] leading-none font-black overflow-hidden">
                <span className="inline-block">
                  <AnimatedLetters text="PALENCIA" />
                </span>
              </span>
            </span>

            <span className="block mt-1 sm:ml-3 text-3xl sm:text-[3.3rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[6rem]">
              <AnimatedLetters text="MARTINEZ" />
            </span>
          </h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1.5 w-70 xl:w-125 bg-zinc-500 ml-3 mt-10 sm:mt-25 origin-left"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="uppercase tracking-[0.2em] ml-3 mt-4 text-[15px] sm:text-[15px] xl:text-[23px] font-bold text-zinc-400"
          >
            Estudiante de Diseño y Desarrollo de Videojuegos
          </motion.p>
        </div>
      </div>

      {/* BARRA INFERIOR — EXACTAMENTE COMO TENÍAS */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="fixed left-0 right-0 bottom-0 px-8 md:px-14 xl:px-24 2xl:px-32 pb-8 pt-4 z-50 bg-gradient-to-t from-[#050509] via-[#050509]/80 to-transparent"
      >
        <div className="max-w-7xl xl:max-w-400 2xl:max-w-440 mx-auto flex items-center justify-between gap-4">

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-zinc-100 bg-zinc-100 text-black px-6 py-3 sm:px-12 sm:py-5 text-xs sm:text-base md:text-lg font-black uppercase tracking-[0.2em] shadow-[5px_5px_0_0_#3f3f46] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#3f3f46] transition-all duration-150 hover:bg-zinc-200"
          >
            Descargar CV
          </a>

          <div className="flex items-center gap-3 sm:gap-6">

            <a
              href="https://www.linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center border-2 border-zinc-700 p-2 sm:p-4 hover:border-zinc-100 transition-all duration-300"
            >
              <svg className="h-6 w-6 sm:h-8 sm:w-8 fill-zinc-500 group-hover:fill-zinc-100 transition-colors" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.9 1 4.98 2.12 4.98 3.5zM.24 8.25H4.76V24H.24V8.25zM8.44 8.25H12.8V10.1H12.86C13.47 8.95 14.88 7.76 17.02 7.76 21.5 7.76 22.25 10.71 22.25 14.36V24H17.72V15.39C17.72 13.53 17.68 11.18 15.21 11.18 12.7 11.18 12.33 13.17 12.33 15.25V24H7.8V8.25H8.44Z"/>
              </svg>
            </a>

            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center border-2 border-zinc-700 p-2 sm:p-4 hover:border-zinc-100 transition-all duration-300"
            >
              <svg className="h-6 w-6 sm:h-8 sm:w-8 fill-zinc-500 group-hover:fill-zinc-100 transition-colors" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
