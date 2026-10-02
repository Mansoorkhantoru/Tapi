import Link from "next/link";
import Cart from "./Cart";

// Color names ko CSS Hex codes mein map karne ke liye
const COLOR_MAP: Record<string, string> = {
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

const Carpets = async ({ sort }: { sort?: string }) => {
  const response = await fetch("http://localhost:5000/carpets", {
    cache: "no-store", // Agar dynamic data update chahiye
  });
  const data = await response.json();

  let carpets = [...(data.carpets || [])];

  // 🔥 Sorting Logic
  if (sort === "discount") {
    carpets.sort((a, b) => (b.discount || 0) - (a.discount || 0));
  } else if (sort === "lowToHigh") {
    carpets.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="flex flex-wrap my-[30px] gap-[10px]">
      {carpets.map((carpet) => (
        /* 1. Outer DIV par key fix */
        <div
          key={carpet._id || carpet.id}
          className="w-[270px] bg-white rounded-md shadow-2xl flex flex-col justify-between"
        >
          <Link href={`/carpets/${carpet.slug}`}>
            <img
              src={carpet.image}
              width={270}
              height={200}
              alt={carpet.name || "Carpet Image"}
              className="w-full h-[200px] object-cover rounded-t-md"
            />
            <div className="text-[20px] font-bold px-[10px] mt-2">
              <h2>{carpet.name}</h2>
              <p className="text-gray-700">Price: {carpet.price}</p>
            </div>

            <div className="p-[10px] font-bold">
              <p>{carpet.color?.length || 0} Colours Available:</p>
              <div className="flex flex-wrap gap-1.5 mt-2 items-center justify-start">
                {carpet.color &&
                  carpet.color.map((c: string, index: number) => {
                    const hexColor = COLOR_MAP[c] || c;
                    return (
                      <div
                        key={`${carpet._id}-${c}-${index}`}
                        title={c}
                        style={{ backgroundColor: hexColor }}
                        className="w-6 h-6 rounded-md border border-gray-300 shadow-sm"
                      />
                    );
                  })}
              </div>
            </div>
          </Link>

          <div className="p-[10px] pt-0">
            <Cart carpet={carpet} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carpets;