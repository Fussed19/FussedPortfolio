import { Canvas, useThree } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import ModelViewer from "./ModelViewer";

interface SceneProps {
  modelIndex: number;
  accentColor: string;
}

function CameraController({ zoom }: { zoom: number }) {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = zoom;
  }, [zoom, camera]);
  
  return null;
}

function RendererResize() {
  const { gl, camera, size } = useThree();

  useEffect(() => {
    const handleResize = () => {
      const width = gl.domElement.parentElement?.clientWidth || window.innerWidth;
      const height = gl.domElement.parentElement?.clientHeight || window.innerHeight;
      
      gl.setSize(width, height);
      if ('aspect' in camera) {
        camera.aspect = width / height;
      }
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (gl.domElement.parentElement) {
      resizeObserver.observe(gl.domElement.parentElement);
    }

    return () => resizeObserver.disconnect();
  }, [gl, camera, size]);

  return null;
}

export default function Scene({ modelIndex, accentColor }: SceneProps){
  const [zoom, setZoom] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const zoomSpeed = 0.3;
      const newZoom = zoom + (e.deltaY > 0 ? zoomSpeed : -zoomSpeed);
      
      setZoom(Math.max(1, Math.min(8, newZoom)));
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [zoom]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      style={{ cursor: 'grab' }}
    >
      <Canvas 
        camera={{ position:[0, 0, zoom], fov: 75, near: 0.1, far: 1000 }}
        gl={{ antialias: false}}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <color attach="background" args={["#000000"]} />
        <RendererResize />
        <CameraController zoom={zoom} />
        <ModelViewer modelIndex={modelIndex} accentColor={accentColor} />
      </Canvas>
    </div>
  );
}
