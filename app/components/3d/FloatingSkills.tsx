'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

function SkillOrb({ position, color, label }: { position: [number, number, number], color: string, label: string }) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)

  useFrame((state, delta) => {
    if(mesh.current) {
        mesh.current.rotation.x += delta * 0.5
        mesh.current.rotation.y += delta * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <group position={position} 
               onPointerOver={() => setHover(true)} 
               onPointerOut={() => setHover(false)}
               scale={hovered ? 1.2 : 1}>
            <Icosahedron args={[0.8, 0]} ref={mesh}>
                <meshStandardMaterial color={color} wireframe transparent opacity={0.6} />
            </Icosahedron>
            <Text
                position={[0, 0, 0]}
                fontSize={0.25}
                color="white"
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff" // fallback font
            >
                {label}
            </Text>
        </group>
    </Float>
  )
}

export default function FloatingSkills() {
  return (
    <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <SkillOrb position={[0, 0, 0]} color="#61DAFB" label="React" />
            <SkillOrb position={[-3, 1.5, -2]} color="#000000" label="Next.js" />
            <SkillOrb position={[3, -1.5, -2]} color="#339933" label="Node.js" />
            <SkillOrb position={[-2, -2.5, 0]} color="#F7DF1E" label="JS" />
            <SkillOrb position={[2, 2.5, 0]} color="#3178C6" label="TS" />
            <SkillOrb position={[0, 3, -4]} color="#00D9FF" label="Three.js" />
            <SkillOrb position={[0, -3, -4]} color="#FF6B35" label="Git" />
        </Canvas>
    </div>
  )
}
