import { motion } from "framer-motion";
import { useEffect, useState, useRef, createContext, useContext } from "react";
import type { ReactNode } from "react";
import HeroCanvasWindow from "./HeroCanvasWindow";

/* =========================
   CONSTANTES Y TIPOS
========================= */

const CONFIG = {
  TOTAL_LETTERS: 21, // DIEGO(5) + PALENCIA(8) + MARTINEZ(8)
  GLITCH_INTERVAL: { min: 2500, max: 4500 }, // 2.5-4.5s
  GLITCH_DURATION: 300,
  SPIN_INTERVAL: { min: 5000, max: 10000 }, // 15-20s
  SPIN_DURATION: 1500,
} as const;

const WORD_POSITIONS = {
  DIEGO: 0,
  PALENCIA: 5,
  MARTINEZ: 13,
} as const;

const EASE_EXPO = [0.22, 1, 0.36, 1] as const;
const COLOR_GREEN = "#4ade80";

interface AnimationContextType {
  glitchLetterIndex: number | null;
  spinCount: number;
}

interface ColorContextType {
  accentColor: string;
  setAccentColor: (color: string) => void;
}

/* =========================
   ANIMATION CONTEXT
========================= */

const AnimationContext = createContext<AnimationContextType | null>(null);
const ColorContext = createContext<ColorContextType | null>(null);

function AnimationProvider({ children }: { children: ReactNode }) {
  const [glitchLetterIndex, setGlitchLetterIndex] = useState<number | null>(null);
  const [spinCount, setSpinCount] = useState(0);
  const glitchInitRef = useRef(false);
  const spinInitRef = useRef(false);

  // Glitch animation
  useEffect(() => {
    if (glitchInitRef.current) return;
    glitchInitRef.current = true;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * CONFIG.TOTAL_LETTERS);
      setGlitchLetterIndex(randomIndex);

      setTimeout(() => {
        setGlitchLetterIndex(null);
      }, CONFIG.GLITCH_DURATION);
    }, CONFIG.GLITCH_INTERVAL.min + Math.random() * (CONFIG.GLITCH_INTERVAL.max - CONFIG.GLITCH_INTERVAL.min));

    return () => clearInterval(interval);
  }, []);

  // Spin animation (acumula giros)
  useEffect(() => {
    if (spinInitRef.current) return;
    spinInitRef.current = true;

    const interval = setInterval(() => {
      setSpinCount(prev => prev + 360);
    }, CONFIG.SPIN_INTERVAL.min + Math.random() * (CONFIG.SPIN_INTERVAL.max - CONFIG.SPIN_INTERVAL.min));

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationContext.Provider value={{ glitchLetterIndex, spinCount }}>
      {children}
    </AnimationContext.Provider>
  );
}

function ColorProvider({ children }: { children: ReactNode }) {
  const [accentColor, setAccentColor] = useState(COLOR_GREEN);

  return (
    <ColorContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </ColorContext.Provider>
  );
}

function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) throw new Error("useAnimation debe usarse dentro de AnimationProvider");
  return context;
}

function useAccentColor() {
  const context = useContext(ColorContext);
  if (!context) throw new Error("useAccentColor debe usarse dentro de ColorProvider");
  return context;
}

/* =========================
   GLITCH OVERLAY
========================= */

interface GlitchOverlayProps {
  letter: string;
  isActive: boolean;
}

function GlitchOverlay({ letter, isActive }: GlitchOverlayProps) {
  const { accentColor } = useAccentColor();
  
  const overlays = [
    { color: accentColor, offsetX: "left-[2px]", offsetY: "top-[-2px]", opacity: 0.5 },
    { color: accentColor, offsetX: "left-[-2px]", offsetY: "top-[2px]", delay: 0.03, opacity: 0.7 },
    { color: accentColor, offsetX: "left-[-3px]", offsetY: "top-[-3px]", delay: 0.06, blur: true, opacity: 0.6 },
  ];

  return (
    <>
      {overlays.map((overlay, i) => (
        <motion.span
          key={i}
          animate={{ opacity: isActive ? [overlay.opacity * 0.5, overlay.opacity, overlay.opacity * 0.5] : overlay.opacity * 0.5 }}
          transition={{ duration: 0.15, delay: overlay.delay || 0 }}
          className={`absolute ${overlay.offsetX} ${overlay.offsetY} pointer-events-none font-black select-none ${overlay.blur ? "blur-[0.5px]" : ""}`}
          style={{ color: overlay.color }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}

/* =========================
   ANIMATED WORD
========================= */

interface AnimatedWordProps {
  text: string;
  wordStartIndex: number;
}

function AnimatedWord({ text, wordStartIndex }: AnimatedWordProps) {
  const letters = text.split("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { glitchLetterIndex } = useAnimation();
  const [glitchIndex, setGlitchIndex] = useState<number | null>(null);

  useEffect(() => {
    if (glitchLetterIndex === null) return;

    const wordEndIndex = wordStartIndex + letters.length - 1;
    
    if (glitchLetterIndex >= wordStartIndex && glitchLetterIndex <= wordEndIndex) {
      setGlitchIndex(glitchLetterIndex - wordStartIndex);
      setTimeout(() => setGlitchIndex(null), CONFIG.GLITCH_DURATION);
    } else {
      setGlitchIndex(null);
    }
  }, [glitchLetterIndex, letters.length, wordStartIndex]);

  return (
    <>
      {letters.map((letter, i) => {
        const isGlitch = glitchIndex === i;
        const isHovered = hoveredIndex === i;

        return (
          <motion.span
            key={i}
            className="inline-block relative cursor-default"
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: EASE_EXPO,
              delay: i * 0.04
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{
              x: [-2, 2, -1, 1, 0],
              rotate: [-2, 2, -1, 1, 0],
              transition: { duration: 0.18, repeat: Infinity }
            }}
          >
            <motion.span
              animate={
                isGlitch || isHovered
                  ? { x: [0, -8, 8, -4, 4, -2, 0], y: [0, -2, 2, -1, 1, 0] }
                  : { x: 0, y: 0 }
              }
              transition={{ duration: 0.15 }}
              className="relative inline-block"
            >
              {(isGlitch || isHovered) && <GlitchOverlay letter={letter} isActive={isGlitch || isHovered} />}
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          </motion.span>
        );
      })}
    </>
  );
}

/* =========================
   BUTTONS
========================= */

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
}

function AnimatedButton({ children, href }: AnimatedButtonProps) {
  const { accentColor } = useAccentColor();
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ rotateX: -90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE_EXPO }}
      whileHover={{
        x: 6,
        y: -6,
        scale: 1.15,
        backgroundColor: "#000",
        borderColor: accentColor,
        color: accentColor,
        boxShadow: `6px 6px 0px ${accentColor}`
      }}
      className="inline-flex items-center justify-center gap-3 border-2 border-zinc-100 bg-zinc-100 text-black px-6 py-3 md:px-10 md:py-5 lg:px-12 lg:py-6 text-xs md:text-sm lg:text-base font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_0_#000] transition-all duration-50"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.a>
  );
}

interface SocialButtonProps {
  href: string;
  children: ReactNode;
}

function SocialButton({ href, children }: SocialButtonProps) {
  const { spinCount } = useAnimation();
  const { accentColor } = useAccentColor();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ rotateY: spinCount }}
      transition={{ duration: 1.5, ease: "linear" }}
      className="group flex items-center justify-center border-2 p-2 md:p-4 transition-all duration-300"
      style={{ 
        transformStyle: "preserve-3d",
        borderColor: accentColor,
        backgroundColor: isHovered ? accentColor : "transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.1
      }}
    >
      <svg
        className="h-6 w-6 md:h-8 md:w-8 transition-colors duration-300"
        viewBox="0 0 24 24"
        style={{ 
          transformStyle: "preserve-3d", 
          fill: isHovered ? "#050509" : accentColor,
        }}
      >
        {children}
      </svg>
    </motion.a>
  );
}

/* =========================
   HERO SECTION
========================= */

function HeroContent() {
  const { accentColor } = useAccentColor();
  
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden px-8 md:px-14 xl:px-24 2xl:px-32 pt-8 lg:pt-10 pb-16 bg-[#050509] text-zinc-100"
    >
      {/* Main Content */}
      <div className="relative max-w-7xl xl:max-w-400 2xl:max-w-440 mx-auto flex items-center mt-10 sm:mt-10 lg:mt-12 xl:mt-15 z-10 pl-0">
        <div className="space-y-4 w-full pl-0">
          <h1 className="font-black tracking-tight pl-0">
            {/* DIEGO - Primer nombre */}
            <span className="block leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-[120px] 2xl:text-[140px]">
              <AnimatedWord text="DIEGO" wordStartIndex={WORD_POSITIONS.DIEGO} />
            </span>

            {/* PALENCIA - En caja de color */}
            <span className="block sm:inline-flex items-center gap-4 mt-1 sm:ml-0">
              <span 
                className="px-4 py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2 2xl:px-6 2xl:py-3 text-xl sm:text-2xl lg:text-2xl xl:text-[38px] 2xl:text-[48px] font-black leading-tight"
                style={{
                  backgroundColor: accentColor,
                  color: "#050509",
                  transition: "all 0.3s ease"
                }}
              >
                <AnimatedWord text="PALENCIA" wordStartIndex={WORD_POSITIONS.PALENCIA} />
              </span>
            </span>

            {/* MARTINEZ - Segundo apellido */}
            <span className="block mt-1 leading-tight text-xl sm:text-2xl lg:text-2xl xl:text-[38px] 2xl:text-[48px]">
              <AnimatedWord text="MARTINEZ" wordStartIndex={WORD_POSITIONS.MARTINEZ} />
            </span>
          </h1>

          {/* DIVIDER - Línea horizontal */}
          <div 
            className="h-1.5 mt-8 w-70 sm:w-70 lg:w-70 xl:w-125 2xl:w-125 transition-colors duration-300"
            style={{ backgroundColor: accentColor }}
          />

          {/* DESCRIPTION - Subtítulo */}
          <p className="uppercase tracking-[0.2em] mt-4 font-bold text-zinc-400 text-[10px] sm:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px]">
            Estudiante de Diseño y Desarrollo de Videojuegos
          </p>
        </div>
      </div>

      {/* 3D Canvas Window - Positioned con transform para drag suave */}
      <div
        className="fixed bottom-40 right-8 md:right-14 xl:right-24 2xl:right-32 z-40"
        style={{ willChange: "transform" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: EASE_EXPO }}
        >
          <HeroCanvasWindowWithColor />
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: EASE_EXPO }}
        className="fixed left-0 right-0 bottom-0 pt-8 pb-8 z-50 bg-linear-to-t from-[#050509] via-[#050509]/80 to-transparent"
      >
        <div className="px-8 md:px-14 xl:px-24 2xl:px-32 flex items-center justify-between gap-4">
          <AnimatedButton href="/cv.pdf">Descargar CV</AnimatedButton>

          <div className="flex items-center gap-3 sm:gap-6">
            <SocialButton href="https://www.linkedin.com/in/tu-usuario">
              <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.9 1 4.98 2.12 4.98 3.5zM.24 8.25H4.76V24H.24V8.25zM8.44 8.25H12.8V10.1H12.86C13.47 8.95 14.88 7.76 17.02 7.76 21.5 7.76 22.25 10.71 22.25 14.36V24H17.72V15.39C17.72 13.53 17.68 11.18 15.21 11.18 12.7 11.18 12.33 13.17 12.33 15.25V24H7.8V8.25H8.44Z" />
            </SocialButton>

            <SocialButton href="https://github.com/Fussed19">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </SocialButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Hero() {
  return (
    <ColorProvider>
      <AnimationProvider>
        <HeroContent />
      </AnimationProvider>
    </ColorProvider>
  );
}

function HeroCanvasWindowWithColor() {
  const { setAccentColor } = useAccentColor();
  const basePath = import.meta.env.BASE_URL || '/';
  
  return (
    <HeroCanvasWindow onColorChange={setAccentColor} basePath={basePath} />
  );
}
