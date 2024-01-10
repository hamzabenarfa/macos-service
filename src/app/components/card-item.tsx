import Link from "next/link";
import ShopBtn from "./Button/Shop-Button";

interface CardItemProps {
  id: number;
  img: string;
  title: string;
  price: string;
}
const CardItem = ({ title, price, img, id }: CardItemProps) => {
  return (
    <div className="flex max-w-xs flex-col border-1 shadow-xs justify-center rounded-xl border-white bg-white p-4 ">
      <Link href={`/shop/${id}`}>
        <img src={img} alt="mac" />
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={`/shop/${id}`}>
          <h1 className=" font-bold">{title}</h1>
        </Link>

        <div className="flex justify-between">
          <h1 className=" text-sm font-semibold">{price}</h1>
          <p className=" text-sm font-semibold text-teal-700">En stock</p>
        </div>
      </div>
      <ShopBtn />
    </div>
  );
};

export default CardItem;
