"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei"

function AutoRotate({ targetRef, isDraggingRef, speed = 0.12 }) {
  useFrame((_, delta) => {
    if (!isDraggingRef.current && targetRef.current) {
      targetRef.current.rotation.y += delta * speed
    }
  })
  return null
}

function BookModel({ groupRef }) {
  const { scene } = useGLTF("/models/paladins_book__ancient_knights_secrets.glb")

  // Bersihkan outline/wire
  scene.traverse((obj) => {
    const name = (obj.name || "").toLowerCase()
    if (obj.type === "Line" || obj.type === "LineSegments" || obj.type === "LineLoop") obj.visible = false
    if (name.includes("edge") || name.includes("outline") || name.includes("wire")) obj.visible = false
    if (obj.isMesh && obj.material) {
      obj.castShadow = true
      obj.receiveShadow = true
    }
  })

  // ✅ Ambil anak pertama (karena model utama biasanya ada di children[0])
  const mainModel = scene.children[0] || scene

  // ✅ Paksa skala besar agar terlihat jelas
  mainModel.scale.set(7, 7, 7) // ubah angka 10 → 15 jika masih kecil
  mainModel.position.set(0, 0, 0)

  return (
    <group ref={groupRef}>
      <primitive object={mainModel} />
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
  const isDraggingRef = useRef(false)

  return (
    <div style={{ height: 520, borderRadius: 12, overflow: "hidden" }}>
      <Canvas camera={{ position: [2.6, 1.9, 3.2], fov: 42 }} shadows gl={{ antialias: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={<FallbackShape />}>
          <Center>
            <BookModel groupRef={bookRef} />
          </Center>
          <Environment preset="city" />
          <AutoRotate targetRef={bookRef} isDraggingRef={isDraggingRef} speed={0.12} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={2.1}
          maxDistance={6}
          onStart={() => (isDraggingRef.current = true)}
          onEnd={() => (isDraggingRef.current = false)}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload("/models/paladins_book__ancient_knights_secrets.glb")
