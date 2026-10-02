"use client";

import React, { useState } from "react";
import TryOnUpload from "./TryOnUpload";
import TryOnAR from "./TryOnAR";

export default function TryOnWrapper({ carpet }: { carpet: any }) {
  const [selectedColor, setSelectedColor] = useState(
    carpet?.color && carpet.color.length > 0 ? carpet.color[0] : "Red"
  );
  const [mode, setMode] = useState("upload");

  const colorHexMap: Record<string, string> = {
    Red: "#FF0000",
    Blue: "#0000FF",
    Green: "#008000",
    Golden: "#FFD700",
    Black: "#000000",
    White: "#FFFFFF",
    Grey: "#808080",
    Beige: "#F5F5DC",
    Maroon: "#800000",
  };

  // Hex color extract karne ka logic
  const selectedColorHex = colorHexMap[selectedColor] || selectedColor || "#FFFFFF";

  return (
    <div className="col-span-2 mt-8 border-t pt-6">
      {/* Color Selection Palette */}
      <div className="gap-3 mb-4 items-center">
        <span className="font-semibold block mb-2">
          Selected Color: <span className="text-blue-600">{selectedColor}</span>
        </span>

        <div className="flex flex-wrap gap-2">
          {carpet?.color &&
            carpet.color.map((colorName: string) => {
              const bgHex = colorHexMap[colorName] || colorName;
              return (
                <button
                  key={colorName}
                  onClick={() => setSelectedColor(colorName)}
                  style={{ backgroundColor: bgHex }}
                  className={`w-10 h-10 rounded-md border-2 transition-all cursor-pointer ${
                    selectedColor === colorName
                      ? "border-black scale-110 shadow-md ring-2 ring-blue-400"
                      : "border-gray-300 hover:scale-105"
                  }`}
                  title={colorName}
                />
              );
            })}
        </div>
      </div>

      {/* Mode Switchers */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode("upload")}
          className={`px-4 py-2 rounded-lg font-semibold transition cursor-pointer ${
            mode === "upload"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          📷 Photo Upload Karein
        </button>
        <button
          onClick={() => setMode("ar")}
          className={`px-4 py-2 rounded-lg font-semibold transition cursor-pointer ${
            mode === "ar"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          🚀 Live AR (Phone)
        </button>
      </div>

      <div>
        {mode === "upload" ? (
          <TryOnUpload
            carpetImage={carpet?.image}
            selectedColor={selectedColor}
            selectedColorHex={selectedColorHex}
            carpetName={carpet?.name}
          />
        ) : (
          <TryOnAR
            carpetImage={carpet?.image}
            selectedColorHex={selectedColorHex}
          />
        )}
      </div>
    </div>
  );
}