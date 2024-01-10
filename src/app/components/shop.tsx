import CardItem from "./card-item";
import { Mac } from "./_const/data";
import Link from "next/link";
const Shop = () => {
  const selectedIds = [1, 2, 3, 4];
  const displayedMac = Mac.filter((item) => selectedIds.includes(item.id));

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-200 p-4">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-semibold text-transparent md:text-7xl lg:text-5xl">
        Mac Reconditionnés
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-self-center gap-2">
        {displayedMac.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <Link href="/shops">
      <button className="focus:shadow-outline rounded-xl w-32
        bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 hover:bg-gradient-to-tr 
        px-6 py-3 text-center text-xs text-white shadow md:text-sm font-semibold focus:outline-none">
        Read more
      </button>
          </Link>
    </div>
  );
};

export default Shop;
