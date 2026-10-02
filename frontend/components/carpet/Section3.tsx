// components/carpet/Section3.tsx
import TryOnWrapper from "./TryOnWrapper";
import CalculatePrice from "./CalculatePrice";
import Cart from "./Cart";
interface Section3Props {
  slug: string;
}

export default async function Section3({ slug }: Section3Props) {
  const res = await fetch(`http://localhost:5000/carpets/${slug}`);
  const data = await res.json();
  const carpet = data.carpet;
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <img src={carpet.image} width={570} className="rounded-lg" />

      <div>
        <h1 className="text-3xl font-bold">{carpet.name}</h1>
        <p className="text-xl mt-2">₹{carpet.price} / m²</p>

        
        
        <div className="flex gap-[10px] my-[20px]">
          <Cart carpet={carpet} />
          <a href="/home-visit">
            <button className="cursor-pointer px-4 py-5 bg-gray-600 text-white rounded-md">
              Book a home Visit
            </button>
          </a>
          <CalculatePrice price={carpet.price} />
        </div>
        <div>
          <h3>Have a question?</h3>
          <div>
            <a href="/help">Help Center</a>
            <a href="">Chat Now</a>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
          <TryOnWrapper carpet={carpet} />
        </div>
    </div>
  );
}
