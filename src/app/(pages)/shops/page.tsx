"use client";

import CardItem from "@/app/components/card-item";
import { Mac } from "../../components/_const/data";
import Banner from "./_components/banner";
const Shop = () => {
  return (
    <div className="flex flex-col items-center justify-center">

   
      <div className="grid min-h-screen gap-4 px-10  py-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Mac.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <p className="px-4 md:px-10 text-center text-xl font-semibold">
        Votre MacBook reconditionné est couvert par une garantie de base
        d&apos;au moins 1 an, avec la possibilité d&apos;extension à 2 ans.
        Profitez de votre expérience Apple en toute tranquillité !
      </p>

      <Banner />
    </div>
  );
};

export default Shop;
