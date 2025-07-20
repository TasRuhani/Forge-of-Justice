"use client"
import React from "react";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton} from "@clerk/nextjs";
import { assets, CartIcon, BagIcon, HomeIcon, BoxIcon } from "@/assets/assets";


const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

 return (
  <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b bg-black border-gray-300 text-white">
    <Image
      className="cursor-pointer w-28 md:w-32"
      onClick={() => router.push('/')}
      src={assets.logo}
      alt="logo"
    />

    <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
      <Link
        href="/"
        className="relative transition-all duration-700 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-white after:transition-all after:duration-700 after:ease-in-out"
      >
        Home
      </Link>
      <Link
        href="/all-products"
        className="relative transition-all duration-700 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-white after:transition-all after:duration-700 after:ease-in-out"
      >
        Shop
      </Link>
      <Link
        href="/about-us"
        className="relative transition-all duration-700 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-white after:transition-all after:duration-700 after:ease-in-out"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="relative transition-all duration-700 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-white after:transition-all after:duration-700 after:ease-in-out"
      >
        Contact
      </Link>

      {isSeller && (
        <button
          onClick={() => router.push('/seller')}
          className="text-xs border px-4 py-1.5 rounded-full"
        >
          Seller Dashboard
        </button>
      )}
    </div>

    <ul className="hidden md:flex items-center gap-4">    
      {user ? (
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Home"
              labelIcon={<HomeIcon />}
              onClick={() => router.push('/')}
            />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Product"
              labelIcon={<BoxIcon />}
              onClick={() => router.push('/all-product')}
            />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Cart"
              labelIcon={<CartIcon />}
              onClick={() => router.push('/cart')}
            />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action
              label="My Orders"
              labelIcon={<BagIcon />}
              onClick={() => router.push('/my-orders')}
            />
          </UserButton.MenuItems>
        </UserButton>
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 relative transition-all duration-700 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-white after:transition-all after:duration-700 after:ease-in-out"
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      )}
    </ul>

    <div className="flex items-center md:hidden gap-3">
      {isSeller && (
        <button
          onClick={() => router.push('/seller')}
          className="text-xs border px-4 py-1.5 rounded-full"
        >
          Seller Dashboard
        </button>
      )}
      {user ? (
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Home"
              labelIcon={<HomeIcon />}
              onClick={() => router.push('/')}
            />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Product"
              labelIcon={<BoxIcon />}
              onClick={() => router.push('/all-product')}
            />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Cart"
              labelIcon={<CartIcon />}
              onClick={() => router.push('/cart')}
            />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action
              label="My Orders"
              labelIcon={<BagIcon />}
              onClick={() => router.push('/my-orders')}
            />
          </UserButton.MenuItems>
        </UserButton>
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 relative transition-all duration-700 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-white after:transition-all after:duration-700 after:ease-in-out"
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      )}
    </div>
  </nav>
);
}

export default Navbar;