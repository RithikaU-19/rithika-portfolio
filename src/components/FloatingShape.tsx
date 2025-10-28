import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedSphereProps {
  delay: number;
}

const AnimatedSphere = ({ delay }: AnimatedSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + delay;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + delay;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#00D9FF"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
};

interface FloatingShapeProps {
  delay: number;
}

const FloatingShape = ({ delay }: FloatingShapeProps) => {
  const positions = [
    { left: '10%', top: '20%' },
    { right: '10%', top: '30%' },
    { left: '15%', bottom: '20%' },
  ];

  const position = positions[delay / 2];

  return (
    <div
      className="absolute w-64 h-64 opacity-30"
      style={{ ...position }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere delay={delay} />
      </Canvas>
    </div>
  );
};

export default FloatingShape;
