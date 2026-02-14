import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelViewerProps {
  modelIndex: number;
  accentColor: string;
  onStatsUpdate?: (stats: { vertices: number; polygons: number }) => void;
}

function GLBModel({ url, accentColor, scale, position, onStatsUpdate }: { url: string; accentColor: string; scale: number; position: [number, number, number]; onStatsUpdate?: (stats: { vertices: number; polygons: number }) => void }) {
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const groupRef = useRef<THREE.Group>(null);

  // Convertir todos los meshes a wireframe y calcular stats
  useMemo(() => {
    let totalVertices = 0;
    let totalPolygons = 0;

    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshBasicMaterial({
          wireframe: true,
          color: accentColor,
        });

        // Contar vértices
        if (child.geometry.attributes.position) {
          totalVertices += child.geometry.attributes.position.count;
        }

        // Contar polígonos (triángulos)
        if (child.geometry.index) {
          totalPolygons += child.geometry.index.count / 3;
        } else {
          totalPolygons += child.geometry.attributes.position.count / 3;
        }
      }
    });

    onStatsUpdate?.({ vertices: totalVertices, polygons: totalPolygons });
  }, [clonedScene, accentColor, onStatsUpdate]);

  // Aplicar escala y posición con useEffect
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.scale.set(scale, scale, scale);
      groupRef.current.position.set(position[0], position[1], position[2]);
    }
  }, [scale, position]);

  return <group ref={groupRef}><primitive object={clonedScene} /></group>;
}

export default function ModelViewer({ modelIndex, accentColor, onStatsUpdate }: ModelViewerProps) {

  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if(ref.current){
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.04;
    }
  });

  // Array con las rutas a tus archivos .glb y sus escalas
  const models = [
    { path: "/models/StandfordDragon.glb", scale: 0.07, position: [0, 0, 0] as [number, number, number] },
    { path: "/models/StandfordHappyBuddha.glb", scale: 3.5, position: [0, 0.0, 0] as [number, number, number] },
    { path: "/models/StandfordBunny.glb", scale: 0.006, position: [0, 0.3 , 0] as [number, number, number] },
    { path: "/models/UtahTeapot.glb", scale: 0.027, position: [0, -1.2, 0] as [number, number, number] },
  ];

  const currentModel = models[modelIndex % models.length];

  return (
    <>
      <group key={currentModel.path} ref={ref}>
        <GLBModel 
          url={currentModel.path} 
          accentColor={accentColor} 
          scale={currentModel.scale} 
          position={currentModel.position}
          onStatsUpdate={onStatsUpdate}
        />
      </group>

      <OrbitControls enableZoom={false}/>
    </>
  );
}
