import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Soar with Style – The Cloak of Levitation Has Chosen You!",
      offer: "Limited Time Artifact – Claim It Before It Floats Away!",
      buttonText1: "Buy now",
      link: "/product/687d1cfce0dcab85fb8a300b",
      imgSrc: assets.cloak_of_levitation,
    },
    {
      id: 2,
      title: "Dominate the Streets – Batman’s Tumbler Is Ready to Roll!",
      offer: "Only a Few Units Straight from Wayne Enterprises!",
      buttonText1: "Shop Now",
      link: "/product/687d0f28e0dcab85fb8a2ff5",
      imgSrc: assets.tumbler,
    },
    {
      id: 3,
      title: "Wield Unlimited Power – The Infinity Gauntlet Awaits You!",
      offer: "Snap Up This Deal – Cosmic Savings of 40%!",
      buttonText1: "Order Now",
      link: "/product/687d1279e0dcab85fb8a2fff",
      imgSrc: assets.infinity_gauntlet,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between 
              bg-white/10 backdrop-blur-md border border-white/20 shadow-xl 
              py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0 text-white">
              <p className="md:text-base text-primary pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 gap-2">
                <Link href={slide.link}>
                  <button className="md:px-10 px-7 md:py-2.5 py-2 bg-primary rounded-full text-white font-medium transition hover:bg-primary/80">
                    {slide.buttonText1}
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center h-[300px]">
              <Image
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                width={300}
                height={300}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              currentSlide === index ? "bg-primary" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
