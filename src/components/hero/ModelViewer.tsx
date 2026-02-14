import { OrbitControls, TorusKnot } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelViewerProps {
  modelIndex: number;
  accentColor: string;
}

export default function ModelViewer({ modelIndex, accentColor }: ModelViewerProps) {

  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if(ref.current){
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.04;
    }
  });

  const models = [
    <TorusKnot key={0}>
      <meshBasicMaterial wireframe color={accentColor} />
    </TorusKnot>,

    <mesh key={1}>
      <boxGeometry args={[1.5,1.5,1.5]} />
      <meshBasicMaterial wireframe color={accentColor} />
    </mesh>,

    <mesh key={2}>
      <sphereGeometry args={[1,32,32]} />
      <meshBasicMaterial wireframe color={accentColor} />
    </mesh>,

    <mesh key={3}>
      <icosahedronGeometry args={[1,4]} />
      <meshBasicMaterial wireframe color={accentColor} />
    </mesh>
  ];

  return (
    <>
      <group ref={ref}>
        {models[modelIndex % 4]}
      </group>

      <OrbitControls enableZoom={false}/>
    </>
  );
}
