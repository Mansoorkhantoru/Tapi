"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { useTexture, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

const store = createXRStore();

function CarpetPlane({ imageUrl, color }) {
  const texture = useTexture(imageUrl);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[2, 3]} />
      <meshStandardMaterial map={texture} color={color} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function TryOnAR({ carpetImage, selectedColor }) {
  const [arSupported, setArSupported] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.xr) {
      navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        setArSupported(supported);
        setLoading(false);
      });
    } else {
      setArSupported(false);
      setLoading(false);
    }
  }, []);

  if (loading) return <p className="text-center p-4">Loading...</p>;

  // 🔥 LAPTOP WALA FALLBACK: 3D Preview
  if (!arSupported) {
    return (
      <div className="w-full">
        <div className="bg-blue-50 border border-blue-300 p-3 rounded-lg mb-4">
          <p className="text-sm text-blue-800">
            💡 <strong>3D Preview Mode:</strong> AR ke liye Android phone use karein. 
            Yahan aap carpet ko 3D mein ghumakar dekh sakte hain.
          </p>
        </div>

        <div className="w-full h-[500px] border-2 border-gray-300 rounded-lg overflow-hidden bg-gradient-to-b from-gray-100 to-gray-300">
          <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <CarpetPlane imageUrl={carpetImage} color={selectedColor} />
              <Environment preset="apartment" />
            </Suspense>
            {/* Mouse se ghumane ke liye */}
            <OrbitControls />
          </Canvas>
        </div>

        <p className="text-center text-sm text-gray-500 mt-2">
          🖱️ Mouse se drag karein carpet ko ghumane ke liye
        </p>
      </div>
    );
  }

  // 📱 PHONE WALA: Real AR
  return (
    <div className="w-full h-[600px] border-2 border-gray-300 rounded-lg overflow-hidden relative">
      <button
        onClick={() => store.enterAR()}
        className="absolute z-10 top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg"
      >
        🚀 Start AR
      </button>

      <Canvas>
        <XR store={store}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <CarpetPlane imageUrl={carpetImage} color={selectedColor} />
          </Suspense>
        </XR>
      </Canvas>
    </div>
  );
}