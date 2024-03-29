"use client";
import ShopBtn from "@/app/components/Button/Shop-Button";
import { Minus, ShieldCheck, ThumbsUp, Undo2 } from "lucide-react";
import MacBookTable from "./MacBookTable";
import { useEffect, useState } from "react";
import { Mac } from "../../components/_const/data";
import { useSearchParams } from 'next/navigation'

interface Product {
  id: number;
  img: string;
  title: string;
  price: string;
  description: string;
  MacInfo?: {
    Model: string;
    Processor: string;
    RAM: string;
    Storage: string;
    Display: string;
    Graphics: string;
    Ports?: string; // Make Ports property optional
    OS: string;
  };
}

// Component
const ProductDetail = () => {
  const searchParams = useSearchParams()
  const eventId: string  = searchParams.get('id') || ""

  const [selectedProduct, setSelectedProduct] = useState<Product |null>(null);

  useEffect(() => {
    // Fetch product details based on event ID
    const product = Mac.find((item) => item.id === parseInt(eventId));
    //@ts-ignore
    setSelectedProduct(product );
  }, [eventId]);

  if (!selectedProduct) {
    return <div className="min-h-screen flex items-center justify-center">
              Loading...
           </div>;
  }
  const { img, title, price, MacInfo, description } = selectedProduct;
  return (
    <div className="flex min-h-screen flex-col gap-4 p-4 md:px-32">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>

      <div className="flex items-center justify-between flex-col md:flex-row ">
       <div className="flex items-center justify-center w-full ">

        <img src={img} alt="mac" className="w-full " />
       </div>
        <div className="flex w-full max-w-lg flex-col items-center justify-center 
        gap-2 rounded-xl border-2 px-10 py-6 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm">{description}</p>
            <h1 className=" text-xl font-bold">{price}</h1>
            <p className=" text-sm font-semibold text-teal-700">En stock</p>
            <ShopBtn />
          </div>
          <p className="m-4 text-center font-bold">
            Acheter en toute sécurité et de manière durable avec macos-service
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1">
            <div className="flex max-w-[120px]  flex-col items-center justify-center p-2">
              <ShieldCheck size={32} className="text-green-600" />
              <p className=" text-center">1 an <br /> de  garantie</p>
            </div>
            <div className="flex max-w-[120px]  flex-col items-center justify-center p-2">
              <Undo2 size={32} className="text-green-600" />
              <p className=" text-center">Droit de rétractation de 21 jours</p>
            </div>
            <div className="flex max-w-[120px]  flex-col items-center justify-center p-2">
              <ThumbsUp size={32} className="text-green-600" />
              <p className=" text-center">Remise à neuf </p>
              <p>professionnelle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="flex items-center justify-start gap-2 rounded-xl bg-gray-100 p-4 text-xl">
          <Minus /> Informations produit
        </h1>
        <MacBookTable data={MacInfo} />
      </div>
 
    </div>
  );
};

export default ProductDetail;
