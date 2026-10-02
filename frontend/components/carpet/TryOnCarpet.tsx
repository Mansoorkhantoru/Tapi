"use client";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Rnd } from "react-rnd";

// Har color ke liye CSS filter
const colorFilters = {
  Red: "sepia(1) hue-rotate(-50deg) saturate(5)",
  Blue: "sepia(1) hue-rotate(180deg) saturate(4)",
  Green: "sepia(1) hue-rotate(90deg) saturate(3)",
  Golden: "sepia(1) hue-rotate(10deg) saturate(3) brightness(1.2)",
  Black: "grayscale(1) brightness(0.4)",
  White: "grayscale(1) brightness(1.5)",
  Grey: "grayscale(1) brightness(0.8)",
  Beige: "sepia(0.6) hue-rotate(20deg) saturate(2)",
  Default: "none",
};

export default function TryOnCarpet({ carpetImage, selectedColor }) {
  const webcamRef = useRef(null);
  const [roomImage, setRoomImage] = useState(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setRoomImage(imageSrc);
  };

  const currentFilter = colorFilters[selectedColor] || colorFilters["Default"];

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {!roomImage ? (
        <div className="relative">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
          <button
            onClick={capturePhoto}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold"
          >
            📸 Photo Khinchein
          </button>
        </div>
      ) : (
        <div className="relative border-4 border-gray-300 rounded-lg overflow-hidden">
          <img src={roomImage} alt="Room" className="w-full max-w-2xl block" />

          <Rnd
            default={{ x: 100, y: 200, width: 250, height: 180 }}
            bounds="parent"
            className="cursor-move"
          >
           <img
  src={carpetImage}
  alt="Carpet"
  className="w-full h-full object-cover"
  style={{
    filter: currentFilter,
    mixBlendMode: "multiply", // Floor ke saath mix karne ke liye
    opacity: 0.9,
    // 🔥 Yeh naya code hai - 3D effect ke liye
    transform: "perspective(800px) rotateX(40deg)", 
    transformOrigin: "bottom",
    // Shadow lagane ke liye
    boxShadow: "0px 15px 25px rgba(0,0,0,0.4)",
    borderRadius: "4px"
  }}
/>
          </Rnd>
        </div>
      )}

      {roomImage && (
        <button
          onClick={() => setRoomImage(null)}
          className="bg-red-500 text-white px-4 py-2 rounded mt-2"
        >
          🔄 Dobara Try Karein
        </button>
      )}
    </div>
  );
}