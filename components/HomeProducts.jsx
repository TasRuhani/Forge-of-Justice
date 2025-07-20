import React, { useMemo } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const HomeProducts = () => {
  const { products, router } = useAppContext();

  // Memoize the shuffled products so it doesn't reshuffle on every render
  const randomProducts = useMemo(() => shuffleArray(products).slice(0, 10), [products]);

  return (
    <div className="flex flex-col items-center pt-14 text-foreground">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {randomProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <button
        onClick={() => router.push("/all-products")}
        className="px-12 py-2.5 border border-primary rounded text-primary hover:bg-primary-dark hover:text-white transition"
      >
        See more
      </button>
    </div>
  );
};

export default HomeProducts;
