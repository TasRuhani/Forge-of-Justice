import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: '687d0804e0dcab85fb8a2fdf',
    image: assets.ironman_suit,
    title: "Suit Up Like Stark",
    description:
      "Step into the future with this tech-loaded Iron Man suit replica — built for brains and bravery.",
  },
  {
    id: '687d03ace0dcab85fb8a2fcd',
    image: assets.assassins_suit,
    title: "Strike from the Shadows",
    description:
      "Embrace stealth, agility, and legacy with this Assassin’s Creed-inspired outfit — where every move is silent, and every strike is deadly.",
  },
  {
    id: '687d0b7ee0dcab85fb8a2fe7',
    image: assets.batman_suit,
    title: "Vigilante Precision",
    description:
      "Harness the darkness with the iconic Batman suit — crafted for tactical dominance and Gotham-grade intimidation.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium text-foreground">Featured Products</p>
        <div className="w-28 h-0.5 bg-primary mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="relative group overflow-hidden rounded-xl shadow-xl"
          >
            <Image
              src={image}
              alt={title}
              className="w-full h-auto object-cover transition duration-300 group-hover:brightness-50"
            />

            {/* Title block */}
            <div
              className="absolute bottom-6 left-6 right-6 text-white text-xl lg:text-2xl font-semibold transition-transform duration-300 group-hover:-translate-y-32"
            >
              {title}
            </div>

            {/* Description and Button on hover */}
            <div
              className="absolute left-6 right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 pointer-events-none group-hover:pointer-events-auto"
            >
              <p className="text-sm lg:text-base leading-5 text-white/80 mb-3">
                {description}
              </p>

              <Link href={`/product/${id}`}>
                <button className="flex items-center gap-1.5 bg-primary px-4 py-2 rounded text-white">
                  Buy now
                  <Image
                    className="h-3 w-3"
                    src={assets.redirect_icon}
                    alt="Redirect Icon"
                  />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
