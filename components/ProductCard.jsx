import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, router } = useAppContext();

  return (
    <div
      onClick={() => {
        router.push("/product/" + product._id);
        scrollTo(0, 0);
      }}
      className="flex flex-col items-start gap-1 max-w-[200px] w-full cursor-pointer transition-all hover:scale-[1.02]"
    >
      <div className="relative bg-slate-800 rounded-lg w-full aspect-[4/3] overflow-hidden">
        <Image
          src={product.image[0]}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      <p className="md:text-base font-medium pt-2 w-full truncate text-white">
        {product.name}
      </p>
      <p className="w-full text-xs text-gray-400 max-sm:hidden truncate">
        {product.description}
      </p>

      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-300">{4.5}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              className="h-3 w-3"
              src={
                index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon
              }
              alt="star_icon"
            />
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium text-white">
          {currency}
          {product.offerPrice}
        </p>
        <button className="max-sm:hidden px-4 py-1.5 text-white border border-blue-600 hover:bg-blue-600 rounded-full text-xs transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
