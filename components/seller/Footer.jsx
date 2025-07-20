import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full px-6 md:px-10 py-6 bg-slate-900 text-white">
      <div className="flex items-center gap-4">
        <Image className="hidden md:block" src={assets.logo} alt="logo" />
        <div className="hidden md:block h-7 w-px bg-gray-400/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-400">
          Copyright 2025 © greatstack.dev All Rights Reserved.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <a href="#" className="transition-transform hover:scale-110">
          <Image src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#" className="transition-transform hover:scale-110">
          <Image src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#" className="transition-transform hover:scale-110">
          <Image src={assets.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
