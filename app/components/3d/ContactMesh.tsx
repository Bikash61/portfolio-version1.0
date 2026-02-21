'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if(mesh.current) {
        mesh.current.rotation.x = t * 0.2
        mesh.current.rotation.y = t * 0.3
    }
  })

  return (
    <Sphere args={[1, 64, 64]} scale={2.5} ref={mesh}>
      <MeshDistortMaterial
        color="#427A43"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.4}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  )
}

export default function ContactMesh() {
  return (
    <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
