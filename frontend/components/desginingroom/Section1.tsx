"use client";

import React, { useEffect, useState } from "react";

const Section1 = () => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("Red");
  const [walls, setWalls] = useState([]);
  const [selectedWallImage, setSelectedWallImage] = useState(null);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch("http://localhost:5000/colors");
        const data = await response.json();
        const rawColors = data.ress || [];

        // 🔥 FIX: Duplicates ko name basis par filter karna
        const uniqueColors = rawColors.filter(
          (color, index, self) =>
            index === self.findIndex((c) => c.name.trim().toLowerCase() === color.name.trim().toLowerCase())
        );

        setColors(uniqueColors);

        if (uniqueColors.length > 0) {
          setSelectedColor(uniqueColors[0].name);
        }
      } catch (error) {
        console.log("Error fetching colors:", error);
      }
    };

    fetchWall();
    fetchColors();
  }, []);

  const fetchWall = async () => {
    try {
      const response = await fetch("http://localhost:5000/walls");
      const data = await response.json();
      const wallList = data.walls || [];
      setWalls(wallList);

      if (wallList.length > 0) {
        setSelectedWallImage(wallList[0].image);
      }
    } catch (error) {
      console.log("Error fetching walls:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedWallImage(imageUrl);
    }
  };

  const colorHexMap = {
    Red: "#FF0000",
    Blue: "#0000FF",
    Green: "#008000",
    Golden: "#e1bc04",
    Black: "#000000",
    White: "#FFFFFF",
    Gray: "#808080",
    Beige: "#F5F5DC",
    Maroon: "#800000",
  };

  const selectedColorHex = colorHexMap[selectedColor] || "#FFFFFF";

  return (
    <div className="p-6">
      <h1 className="text-center text-[25px] font-bold my-[30px]">
        Design Your Own Room
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 mx-auto max-w-6xl">
        
        <div>
          <div className="relative bg-gray-200 w-full h-[400px] rounded-lg overflow-hidden border shadow-lg flex items-center justify-center">
            {selectedWallImage ? (
              <div className="relative w-full h-full">
                {/* 1. Base Wall Image */}
                <img
                  src={selectedWallImage}
                  alt="Selected Wall"
                  className="w-full h-full object-cover"
                />

                {/* 2. Color Overlay Effect */}
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-300"
                  style={{
                    backgroundColor: selectedColorHex,
                    mixBlendMode: "multiply",
                    opacity: selectedColor === "White" ? 0 : 0.45,
                  }}
                />
              </div>
            ) : (
              <p className="text-gray-500 font-medium">Upload a room picture or select a wall</p>
            )}
          </div>

          {/* Custom Upload Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Custom Wall Picture:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer"
            />
          </div>
        </div>

        <div>
          <div className="mb-6">
            <span className="font-semibold block mb-2">
              Select Color: <span className="text-amber-600">{selectedColor}</span>
            </span>

            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color._id || color.name}
                  onClick={() => setSelectedColor(color.name)}
                  style={{
                    backgroundColor: colorHexMap[color.name] || "#FFFFFF",
                  }}
                  className={`w-10 h-10 rounded-md border-2 transition-all ${
                    selectedColor === color.name
                      ? "border-black scale-110 shadow-md"
                      : "border-gray-300 hover:scale-105"
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3">Walls Collection</h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {walls.map((item) => (
                <img
                  key={item._id}
                  src={item.image}
                  alt="Wall option"
                  onClick={() => setSelectedWallImage(item.image)}
                  className={`w-[90px] h-[90px] object-cover rounded-md border-2 cursor-pointer transition-all ${
                    selectedWallImage === item.image
                      ? "border-amber-500 scale-105 ring-2 ring-amber-300"
                      : "border-gray-300 hover:opacity-80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* MEDIA UNITS SECTION */}
          <h2 className="text-xl font-bold mt-8">Media Units</h2>
          <p className="text-sm text-gray-400 italic">Options coming soon...</p>

          {/* FURNISHINGS SECTION */}
          <h2 className="text-xl font-bold mt-8">Furnishings</h2>
          <p className="text-sm text-gray-400 italic">Options coming soon...</p>
        </div>

      </div>
    </div>
  );
};

export default Section1;