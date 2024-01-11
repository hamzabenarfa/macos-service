import ShopBtn from "./Button/Shop-Button";

interface CardItemProps {
  id: number;
  img: string;
  title: string;
  price: string;
}
const CardItem = ({ title, price, img, id }: CardItemProps) => {
  return (
    <div className="grid max-w-xs place-items-center	 grid-rows-1 border-1 shadow-xs rounded-xl border-white bg-white p-4 gap-4">
    <a href={`/shop?id=${id}`} className="row-span-1">
      
      <img src={img} alt={title} className="w-full  cursor-pointer " />
    </a>
    <div className="row-span-1">
      <a href={`/shop/${id}`}>
        <h1 className="font-bold">{title}</h1>
      </a>
    </div>
    <div className="flex justify-between place-self-stretch  row-span-1">
      <h1 className="text-sm font-semibold">{price}</h1>
      <p className="text-sm font-semibold text-teal-700">En stock</p>
    </div>
    
    <ShopBtn />
  </div>
  );
};

export default CardItem;
