"use client";

import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";

// Har color ke liye CSS filter (white carpet par apply hoga)
const colorFilters = {
  Red: "sepia(1) hue-rotate(-50deg) saturate(5)",
  Blue: "sepia(1) hue-rotate(180deg) saturate(4)",
  Green: "sepia(1) hue-rotate(90deg) saturate(3)",
  Golden: "sepia(1) hue-rotate(10deg) saturate(3) brightness(1.2)",
  Black: "grayscale(1) brightness(0.4)",
  White: "grayscale(1) brightness(1.5)",
  Grey: "grayscale(1) brightness(0.8)",
  Beige: "sepia(0.6) hue-rotate(20deg) saturate(2)",
  Maroon: "sepia(1) hue-rotate(-30deg) saturate(5) brightness(0.7)",
  Default: "none",
};

export default function TryOnUpload({ carpetImage, selectedColor, carpetName }) {
  const [roomImage, setRoomImage] = useState(null);
  const [opacity, setOpacity] = useState(0.9);
  const [rotation, setRotation] = useState(0);
  const [carpetSize, setCarpetSize] = useState({ width: 300, height: 220 });
  const fileInputRef = useRef(null);

  // 1. Photo upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setRoomImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  // 2. Reset
  const handleReset = () => {
    setRoomImage(null);
    setRotation(0);
    setOpacity(0.9);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Selected color ka filter
  const currentFilter = colorFilters[selectedColor] || colorFilters["Default"];

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Apne Room Mein Try Karein</h2>

      {/* ==== UPLOAD SECTION ==== */}
      {!roomImage ? (
        <div className="w-full max-w-2xl border-2 border-dashed border-gray-400 rounded-xl p-12 text-center bg-gray-50">
          <p className="text-lg mb-4 text-gray-700">
            Apne ghar ki ya room ki photo upload karein
          </p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
            id="room-upload"
          />
          <label
            htmlFor="room-upload"
            className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-full font-bold inline-block hover:bg-blue-700 transition"
          >
            📷 Photo Upload Karein
          </label>
        </div>
      ) : (
        <>
          {/* ==== PHOTO + CARPET OVERLAY ==== */}
          <div className="relative border-4 border-gray-300 rounded-lg overflow-hidden shadow-lg max-w-3xl w-full">
            {/* Room Photo */}
            <img
              src={roomImage}
              alt="Room"
              className="w-full block select-none"
              draggable={false}
            />

            {/* Carpet Overlay (Draggable + Resizable + Rotatable) */}
            <Rnd
              size={{ width: carpetSize.width, height: carpetSize.height }}
              onResizeStop={(e, direction, ref) => {
                setCarpetSize({
                  width: parseInt(ref.style.width),
                  height: parseInt(ref.style.height),
                });
              }}
              bounds="parent"
              className="cursor-move"
            >
              <div className="relative w-full h-full">
                {/* Shadow Layer */}
                <div
                  className="absolute inset-0 bg-black opacity-30 blur-lg rounded-md"
                  style={{
                    transform: `rotate(${rotation}deg) translateY(8px)`,
                  }}
                ></div>

                {/* Carpet Image */}
                <img
                  src={carpetImage}
                  alt={carpetName}
                  className="relative w-full h-full object-cover rounded-md"
                  draggable={false}
                  style={{
                    filter: currentFilter,
                    mixBlendMode: "multiply",
                    opacity: opacity,
                    transform: `rotate(${rotation}deg)`,
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                />
              </div>
            </Rnd>
          </div>

          {/* ==== CONTROLS ==== */}
          <div className="w-full max-w-2xl bg-gray-100 rounded-lg p-4 space-y-3">
            {/* Opacity Slider */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Visibility: {Math.round(opacity * 100)}%
              </label>
              <input
                type="range"
                min="0.3"
                max="1"
                step="0.05"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Rotation Slider */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Rotation: {rotation}°
              </label>
              <input
                type="range"
                min="-45"
                max="45"
                step="1"
                value={rotation}
                onChange={(e) => setRotation(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="w-full bg-red-500 text-white py-2 rounded font-bold hover:bg-red-600 transition"
            >
              🔄 Nayi Photo Upload Karein
            </button>
          </div>

          <p className="text-sm text-gray-500">
            💡 Carpet ko drag karein, corner se resize karein, aur sliders se adjust karein
          </p>
        </>
      )}
    </div>
  );
}