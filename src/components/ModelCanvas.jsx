"use client"

import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei"

function BookModel({ groupRef, ...props }) {
  const { scene } = useGLTF("/models/paladins_book__ancient_knights_secrets.glb", true)

  scene.traverse((obj) => {
    const name = (obj.name || "").toLowerCase()

    // Hide any outline/edge helpers or line primitives
    if (obj.type === "Line" || obj.type === "LineSegments" || name.includes("edge") || name.includes("wire")) {
      obj.visible = false
    }

    if (obj.isMesh && obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
      mats.forEach((m) => {
        if ("wireframe" in m) m.wireframe = false
        // Some outlines are backface meshes or named "outline"
        if (m.side === 1 /* BackSide */ || (m.name || "").toLowerCase().includes("outline")) {
          obj.visible = false
        }
        m.polygonOffset = false
        m.needsUpdate = true
      })
      obj.castShadow = true
      obj.receiveShadow = true
    }
  })

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  )
}

function FallbackShape() {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <torusKnotGeometry args={[1, 0.3, 120, 16]} />
      <meshStandardMaterial color="#1f3b73" roughness={0.35} metalness={0.2} />
    </mesh>
  )
}

export default function ModelCanvas() {
  const bookRef = useRef()
  const [dragging, setDragging] = useState(false)

  useFrame((_, delta) => {
    if (!dragging && bookRef.current) {
      bookRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <div style={{ height: 480, borderRadius: 12, overflow: "hidden" }}>
      <Canvas camera={{ position: [2.6, 1.8, 3.4], fov: 42 }} shadows gl={{ antialias: true }}>
        <color attach="background" args={["#0b0b10"]} />
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={<FallbackShape />}>
          <Center top>
            <BookModel groupRef={bookRef} scale={2.8} position={[0, -0.7, 0]} rotation={[0, -0.2, 0]} />
          </Center>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={2.2}
          maxDistance={6}
          onStart={() => setDragging(true)}
          onEnd={() => setDragging(false)}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload("/models/paladins_book__ancient_knights_secrets.glb")
