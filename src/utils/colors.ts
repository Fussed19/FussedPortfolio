export const MODEL_COLORS = {
  0: { name: 'green', accent: '#4ade80', dark: '#1a3a1a' },
  1: { name: 'orange', accent: '#ff8c00', dark: '#3a2010' },
  2: { name: 'blue', accent: '#00bfff', dark: '#0a2a3a' },
  3: { name: 'purple', accent: '#da70d6', dark: '#2a1a3a' },
} as const;

export type ModelColorKey = keyof typeof MODEL_COLORS;
