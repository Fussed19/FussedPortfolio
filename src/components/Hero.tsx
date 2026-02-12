import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-10 pt-32">

      {/* NAVBAR INTEGRADA */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 
                      backdrop-blur-lg bg-white/5 
                      border border-white/10
                      rounded-full px-6 py-3 z-50">
        <div className="flex gap-6 text-sm">
          <span>Home</span>
          <span>Projects</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      {/* GRID BASE */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXTO PRINCIPAL */}
        <motion.div
          initial={{ opacity:0, y:60 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="space-y-8 relative z-20"
        >
          <h1 className="text-7xl font-black leading-[0.9]">
            TU<br/>NOMBRE
          </h1>

          <p className="max-w-md text-zinc-400 text-lg">
            programador enfocado en gráficos por ordenador,
            desarrollo de motores, juegos y sistemas de bajo nivel.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-white text-black">
              Descargar CV
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/20">
              Contacto
            </button>
          </div>
        </motion.div>

        {/* IMAGEN GRANDE PLACEHOLDER */}
        <div className="relative h-[500px]">

          <div className="absolute inset-0 bg-zinc-800 rounded-3xl rotate-3"/>
          <div className="absolute inset-0 bg-zinc-700 rounded-3xl -rotate-3"/>

        </div>

      </div>

      {/* TARJETA FLOTANTE CENTRAL */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:0.3 }}
        className="absolute top-[55%] left-[35%]
                   bg-zinc-800 p-6 rounded-2xl
                   shadow-2xl z-30"
      >
        Proyecto destacado
      </motion.div>

      {/* MINI CARD IZQUIERDA */}
      <div className="absolute bottom-20 left-10 
                      w-52 h-32 
                      bg-zinc-800 rounded-xl rotate-6"/>

      {/* BLOQUE EDITORIAL DERECHO */}
      <div className="absolute bottom-10 right-16
                      w-72 h-48
                      bg-zinc-700 rounded-2xl -rotate-3"/>

    </section>
  );
}
