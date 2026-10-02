import Image from "next/image";

interface CardItem {
  icon: string;
  title: string;
}

const cardData: CardItem[] = [
  { icon: "/images/home-card-icon1.webp", title: "Carpets" },
  { icon: "/images/home-card-icon2.webp", title: "Vinyl" },
  { icon: "/images/home-card-icon3.webp", title: "Laminate" },
  { icon: "/images/home-card-icon4.webp", title: "Luxury Vinyl" },
  { icon: "/images/home-card-icon5.webp", title: "Engineered Wood" },
  { icon: "/images/home-card-icon6.webp", title: "Artificial Grass" },
  { icon: "/images/home-card-icon7.webp", title: "Sale" },
];

export default function HeroCards() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 p-4 -mt-20 absolute z-10 mx-auto max-w-7xl">
      {cardData.map((item, index) => {
        const isSale = item.title === "Sale";

        return (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-3 rounded-xl border p-6 text-center shadow-sm transition-shadow hover:shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer ${
              isSale
                ? "border-red-600 bg-red-600"
                : "border-gray-200 bg-white"
            }`}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={55}
              height={55}
            />
            <p
              className={`text-lg font-bold ${
                isSale ? "text-white" : "text-gray-800"
              }`}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </section>
  );
}