import CardItem from "./card-item";
import { Mac } from "./_const/data";
const Shop = () => {
  const selectedIds = [1,2,4,3];
  const displayedMac = Mac.filter((item) => selectedIds.includes(item.id));

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-200 p-4">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-semibold text-transparent md:text-7xl lg:text-5xl">
        Mac Reconditionnés
      </h1>
      <div className="flex flex-col gap-2 p-4 md:flex-row">
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
    </div>
  );
};

export default Shop;
