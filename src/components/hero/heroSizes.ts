/**
 * CONFIGURACIÓN DE TAMAÑOS RESPONSIVOS PARA EL HERO
 * 
 * Estructura por breakpoint Tailwind:
 * - (sin prefijo): mobile (< 640px)
 * - sm: small (≥ 640px)
 * - lg: large (≥ 1024px)
 * - xl: extra large (≥ 1280px)
 * - 2xl: 2x large (≥ 1536px)
 */

export const HERO_SIZES = {
  // ════════════════════════════════════════════════════════════
  // DIEGO - Primer nombre grande
  // ════════════════════════════════════════════════════════════
  DIEGO: {
    mobile: "text-5xl",      // < 640px
    sm: "text-6xl",          // ≥ 640px
    lg: "text-9xl",          // ≥ 1024px
    xl: "text-[180px]",      // ≥ 1280px
    "2xl": "text-[440px]",   // ≥ 1536px
    className: "block leading-tight tracking-tight",
  },

  // ════════════════════════════════════════════════════════════
  // PALENCIA - En caja de color
  // ════════════════════════════════════════════════════════════
  PALENCIA: {
    mobile: "text-2xl",      // < 640px
    sm: "text-2xl",          // ≥ 640px
    lg: "text-2xl",          // ≥ 1024px
    xl: "text-[90px]",       // ≥ 1280px
    "2xl": "text-[120px]",   // ≥ 1536px
    className: "px-4 py-2 font-black leading-tight",
    boxPadding: {
      mobile: "px-4 py-2",
      sm: "px-4 py-2",
      lg: "px-4 py-2",
      xl: "px-8 py-4",
      "2xl": "px-10 py-6",
    },
  },

  // ════════════════════════════════════════════════════════════
  // MARTINEZ - Segundo apellido
  // ════════════════════════════════════════════════════════════
  MARTINEZ: {
    mobile: "text-2xl",      // < 640px
    sm: "text-2xl",          // ≥ 640px
    lg: "text-2xl",          // ≥ 1024px
    xl: "text-[90px]",       // ≥ 1280px
    "2xl": "text-[120px]",   // ≥ 1536px
    className: "block mt-1 sm:ml-3 leading-tight tracking-tight",
  },

  // ════════════════════════════════════════════════════════════
  // DESCRIPCIÓN - "Estudiante de Diseño y Desarrollo de Videojuegos"
  // ════════════════════════════════════════════════════════════
  DESCRIPTION: {
    mobile: "text-[11px]",   // < 640px
    sm: "text-[13px]",       // ≥ 640px
    lg: "text-[13px]",       // ≥ 1024px
    xl: "text-[28px]",       // ≥ 1280px
    "2xl": "text-[36px]",    // ≥ 1536px
    className: "uppercase tracking-[0.2em] ml-3 mt-4 font-bold text-zinc-400",
  },

  // ════════════════════════════════════════════════════════════
  // DIVIDER - Línea horizontal
  // ════════════════════════════════════════════════════════════
  DIVIDER: {
    height: "h-1.5",
    mobile: "w-70",          // < 640px
    sm: "w-70",              // ≥ 640px
    lg: "w-70",              // ≥ 1024px
    xl: "w-125",             // ≥ 1280px
    "2xl": "w-125",          // ≥ 1536px
    className: "ml-3 mt-8 transition-colors duration-300",
  },

  // ════════════════════════════════════════════════════════════
  // BOTÓN - "Descargar CV"
  // ════════════════════════════════════════════════════════════
  BUTTON: {
    padding: {
      mobile: "px-6 py-3",    // < 640px
      md: "px-12 py-5",       // ≥ 768px
    },
    text: {
      mobile: "text-xs",      // < 640px
      md: "text-base",        // ≥ 768px
      lg: "text-lg",          // ≥ 1024px
    },
    className: "inline-flex items-center justify-center gap-3 border-2 border-zinc-100 bg-zinc-100 text-black font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_0_#000] transition-all duration-50",
    gap: "gap-3",
  },

  // ════════════════════════════════════════════════════════════
  // SOCIAL BUTTONS - LinkedIn, GitHub
  // ════════════════════════════════════════════════════════════
  SOCIAL_BUTTON: {
    padding: {
      mobile: "p-2",          // < 640px
      md: "p-4",              // ≥ 768px
    },
    icon: {
      mobile: "h-6 w-6",      // < 640px
      md: "h-8 w-8",          // ≥ 768px
    },
    className: "group flex items-center justify-center border-2 transition-all duration-300",
    gap: {
      mobile: "gap-3",        // < 640px
      sm: "gap-6",            // ≥ 640px
    },
  },

  // ════════════════════════════════════════════════════════════
  // SECCIÓN - Padding horizontal y vertical
  // ════════════════════════════════════════════════════════════
  SECTION: {
    paddingX: {
      mobile: "px-8",         // < 640px
      md: "px-14",            // ≥ 768px
      xl: "px-24",            // ≥ 1280px
      "2xl": "px-32",         // ≥ 1536px
    },
    paddingTop: {
      mobile: "pt-8",         // < 640px
      lg: "pt-10",            // ≥ 1024px
    },
    paddingBottom: "pb-16",
  },

  // ════════════════════════════════════════════════════════════
  // CONTENEDOR PRINCIPAL
  // ════════════════════════════════════════════════════════════
  MAIN_CONTAINER: {
    marginTop: {
      mobile: "mt-10",        // < 640px
      sm: "mt-10",            // ≥ 640px
      lg: "mt-12",            // ≥ 1024px
      xl: "mt-15",            // ≥ 1280px
    },
    spacing: "space-y-4",
  },
} as const;

/**
 * HELPER FUNCTION
 * Construye strings de className dinámicamente desde la config
 */
export const buildResponsiveClass = (breakpoints: any) => {
  return [
    breakpoints.mobile,
    breakpoints.sm && `sm:${breakpoints.sm}`,
    breakpoints.lg && `lg:${breakpoints.lg}`,
    breakpoints.xl && `xl:${breakpoints.xl}`,
    breakpoints["2xl"] && `2xl:${breakpoints["2xl"]}`,
  ]
    .filter(Boolean)
    .join(" ");
};
