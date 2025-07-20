import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-foreground/30">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm text-foreground/70">
            Forge of Justice is your ultimate destination for superhero gadgets,
            weapons, and gear. Whether you're a vigilante by night or just a fan
            by day, we’ve got the tech, tools, and flair to help you rise and fight
            for what's right — in full comic-book style.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-foreground mb-5">Company</h2>
            <ul className="text-sm space-y-2 text-foreground/70">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/about-us">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/contact">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-foreground mb-5">Get in touch</h2>
            <div className="text-sm space-y-2 text-foreground/70">
              <p>+1-234-567-890</p>
              <p>contact@forgeofjustice.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-foreground/50">
        Copyright 2025 © Forge of Justice All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
