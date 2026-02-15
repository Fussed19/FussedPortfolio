import type { ReactNode } from "react";
import { useRef, useState, useEffect } from "react";
import { MODEL_COLORS, type ModelColorKey } from "../../utils/colors";

interface WindowFrameProps {
  children: ReactNode;
  onModelChange?: (direction: 'prev' | 'next') => void;
  modelIndex: number;
}

export default function WindowFrame({ children, onModelChange, modelIndex }: WindowFrameProps) {

  const windowRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState({ width: 600, height: 700 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, clientX: 0, clientY: 0 });

  const colorKey = (modelIndex % 4) as ModelColorKey;
  const currentColor = MODEL_COLORS[colorKey];

  const getSizeByBreakpoint = (width: number) => {
    if (width < 640) return { width: 140, height: 140 };
    if (width < 768) return { width: 200, height: 200 };
    if (width < 1024) return { width: 280, height: 280 };
    if (width < 1280) return { width: 310, height: 310 };
    if (width < 2880) return { width: 370, height: 370 };
    return { width: 500, height: 500 };
  };

  useEffect(() => {

    const calculatePosition = () => {

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      setSize(getSizeByBreakpoint(vw));

      const randomX = vw * 0.12 + (Math.random() + (70-35));
      const randomY = vh * 0.3;

      setPosition({ x: -randomX, y: -randomY });
    };

    calculatePosition();

    window.addEventListener("resize", calculatePosition);
    return () => {
      window.removeEventListener("resize", calculatePosition);
    };

  }, []);

  const handleHeaderPointerDown = (e: React.PointerEvent) => {

    if ((e.target as HTMLElement).closest("button")) return;

    isDraggingRef.current = true;

    dragStartRef.current = {
      x: position.x,
      y: position.y,
      clientX: e.clientX,
      clientY: e.clientY
    };

    const move = (ev: PointerEvent) => {

      if (!isDraggingRef.current) return;

      setPosition({
        x: dragStartRef.current.x + (ev.clientX - dragStartRef.current.clientX),
        y: dragStartRef.current.y + (ev.clientY - dragStartRef.current.clientY)
      });
    };

    const up = () => {
      isDraggingRef.current = false;
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    };

    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {

    e.preventDefault();
    e.stopPropagation();
  
    const startWidth = size.width;
    const startHeight = size.height;
    const startX = e.clientX;
    const startY = e.clientY;
  
    const startPosX = position.x;
    const startPosY = position.y;
  
    const move = (ev: MouseEvent) => {
  
      const deltaX = ev.clientX - startX;
      const deltaY = ev.clientY - startY;
  
      const newWidth = Math.max(300, startWidth + deltaX);
      const newHeight = Math.max(200, startHeight + deltaY);
  
      const widthDiff = newWidth - startWidth;
      const heightDiff = newHeight - startHeight;
  
      setSize({
        width: newWidth,
        height: newHeight
      });
  
      setPosition({
        x: startPosX + widthDiff / 2,
        y: startPosY + heightDiff / 2
      });
    };
  
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
  
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  return (
    <div
      ref={windowRef}
      style={{
        width: size.width,
        height: size.height,
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        borderColor: currentColor.accent,
        backgroundColor: currentColor.dark,
        zIndex: 40
      }}
      className="relative border-4 overflow-hidden font-['MS Sans Serif',sans-serif] transition-colors duration-300"
    >

      {/* HEADER */}
      <div
        onPointerDown={handleHeaderPointerDown}
        className="h-8 flex items-center justify-between pl-1 pr-3 cursor-grab active:cursor-grabbing select-none text-sm font-bold"
        style={{
          backgroundColor: currentColor.dark,
          color: currentColor.accent,
          borderBottom: `2px solid ${currentColor.accent}`
        }}
      >
        <div className="flex items-center gap-1 pointer-events-none">
          <svg
            className="w-5 h-5 shrink-0 -ml-0.5"
            viewBox="-96 -96 288 288"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M94.2422,43.7578l-12-12a5.9994,5.9994,0,0,0-8.4844,8.4844L75.5156,42H54V20.4844l1.7578,1.7578a5.9994,5.9994,0,0,0,8.4844-8.4844l-12-12a5.9979,5.9979,0,0,0-8.4844,0l-12,12a5.9994,5.9994,0,0,0,8.4844,8.4844L42,20.4844V42H20.4844l1.7578-1.7578a5.9994,5.9994,0,0,0-8.4844-8.4844l-12,12a5.9979,5.9979,0,0,0,0,8.4844l12,12a5.9994,5.9994,0,1,0,8.4844-8.4844L20.4844,54H42V75.5156l-1.7578-1.7578a5.9994,5.9994,0,0,0-8.4844,8.4844l12,12a5.9979,5.9979,0,0,0,8.4844,0l12-12a5.9994,5.9994,0,0,0-8.4844-8.4844L54,75.5156V54H75.5156l-1.7578,1.7578a5.9994,5.9994,0,1,0,8.4844,8.4844l12-12A5.9979,5.9979,0,0,0,94.2422,43.7578Z"/>
          </svg>
          <span>3D Viewer [{currentColor.name.toUpperCase()}]</span>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="w-full relative overflow-auto"
        style={{
          height: `calc(100% - 32px)`,
          backgroundColor: currentColor.dark
        }}
      >
        {children}

        <button
          onClick={() => onModelChange?.("prev")}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl hover:scale-110 transition-transform"
          style={{ color: currentColor.accent }}
        >◄</button>

        <button
          onClick={() => onModelChange?.("next")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl hover:scale-110 transition-transform"
          style={{ color: currentColor.accent }}
        >►</button>

        <div
          onMouseDown={handleResizeMouseDown}
          className="absolute bottom-0 right-0 w-6 h-6 cursor-se-resize flex items-center justify-center hover:scale-125 transition-transform"
          style={{ backgroundColor: currentColor.accent }}
          title="Redimensionar"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: currentColor.dark }}
          >
            {/* Flecha diagonal hacia abajo-derecha */}
            <path d="M2 2L8 8" />
            <path d="M8 6L8 8L6 8" />
          </svg>
        </div>
      </div>
    </div>
  );
}
