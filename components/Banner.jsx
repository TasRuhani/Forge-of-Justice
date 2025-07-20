import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 my-16 px-32 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
      <Image
        className="max-w-64"
        src={assets.batpika}
        alt="batpika"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-white max-w-[290px]">
          Gear Up Like a Hero
        </h2>
        <p className="max-w-[343px] font-medium text-white/70">
          Suits, gadgets, and gear straight from the multiverse—because saving the world needs style.
        </p>
        <Link href={`/all-products`}>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-blue-600 hover:bg-blue-700 rounded text-white transition">
          Explore Arsenal
          <Image
            className="group-hover:translate-x-1 transition"
            src={assets.arrow_icon_white}
            alt="arrow_icon_white"
          />
        </button>
        </Link>
      </div>
      <Image
        className="w-64"
        src={assets.pikapool}
        alt="pikapool"
      />
    </div>
  );
};

export default Banner;
