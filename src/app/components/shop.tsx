"use client"
import CardItem from "./card-item";
import { Mac } from "./_const/data";
import Link from "next/link";
const Shop = () => {
  const selectedIds = [1, 2, 3, 4];
  const displayedMac = Mac.filter((item) => selectedIds.includes(item.id));

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-200 p-4 py-10">
      <h1 className="  text-center text-3xl font-bold" id="produit">
        La Boutique Mac
      </h1>
     
      <h1 className=" text-xl font-semibold text-center ">
        Rejoignez l&apos;univers Apple reconditionné pour une immersion
        innovante à moindre coût !
      </h1>
      <br />
      <div className="grid gap-2 place-self-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
      <br />
      <Link href="/shops">
        <button
          className="focus:shadow-outline w-32 rounded-xl
        bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 px-6 
        py-3 text-center text-xs font-semibold text-white shadow hover:bg-gradient-to-tr focus:outline-none md:text-sm"
        >
          Voir plus
        </button>
      </Link>
    </div>
  );
};

export default Shop;
