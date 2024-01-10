"use client";

import CardItem from "@/app/components/card-item";
import { Mac } from "../../components/_const/data";

const Shop = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-y-4 min-h-screen px-10 py-4">
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
  );
};

export default Shop;
