import WindowFrame from "./WindowFrame";
import Scene from "./Scene";
import { useState } from "react";
import { MODEL_COLORS, type ModelColorKey } from "../../utils/colors";

interface HeroCanvasWindowProps {
  onColorChange?: (color: string) => void;
  basePath?: string;
}

export default function HeroCanvasWindow({ onColorChange, basePath = "" }: HeroCanvasWindowProps) {
  const [modelIndex, setModelIndex] = useState(0);

  const handleModelChange = (direction: 'prev' | 'next') => {
    setModelIndex(prev => {
      const newIndex = direction === 'prev'
        ? (prev - 1 + 4) % 4
        : (prev + 1) % 4;
      
      const colorKey = (newIndex % 4) as ModelColorKey;
      const newColor = MODEL_COLORS[colorKey].accent;
      console.log('🎨 Color cambió a:', newColor, 'Modelo:', newIndex);
      onColorChange?.(newColor);
      
      return newIndex;
    });
  };

  const colorKey = (modelIndex % 4) as ModelColorKey;
  const currentColor = MODEL_COLORS[colorKey].accent;

  return (
    <WindowFrame onModelChange={handleModelChange} modelIndex={modelIndex}>
      <Scene modelIndex={modelIndex} accentColor={currentColor} basePath={basePath} />
    </WindowFrame>
  );
}
