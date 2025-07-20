"use client";
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import toast from "react-hot-toast";
import React from "react";

const Product = () => {
  const { id } = useParams();
  const { products, router, addToCart, user } = useAppContext();

  const [mainImage, setMainImage] = useState(null);
  const [productData, setProductData] = useState(null);

  const fetchProductData = async () => {
    const product = products.find((product) => product._id === id);
    setProductData(product);
  };

  useEffect(() => {
    fetchProductData();
  }, [id, products.length]);

  return productData ? (
    <>
      <Navbar />
      <div className="text-gray-100 px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="px-5 lg:px-16 xl:px-20">
            <div className="rounded-lg overflow-hidden bg-gray-800 mb-4">
              <Image
                src={mainImage || productData.image[0]}
                alt="alt"
                className="w-full h-auto object-cover mix-blend-lighten"
                width={1280}
                height={720}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {productData.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className="cursor-pointer rounded-lg overflow-hidden bg-gray-800"
                >
                  <Image
                    src={image}
                    alt="alt"
                    className="w-full h-auto object-cover mix-blend-lighten"
                    width={1280}
                    height={720}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-gray-200 mb-4">
              {productData.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Image
                    key={i}
                    className="h-4 w-4"
                    src={assets.star_icon}
                    alt="star_icon"
                  />
                ))}
                <Image
                  className="h-4 w-4"
                  src={assets.star_dull_icon}
                  alt="star_dull_icon"
                />
              </div>
              <p className="text-gray-400">(4.5)</p>
            </div>
            <p className="text-gray-400 mt-3">{productData.description}</p>
            <p className="text-3xl font-medium mt-6 text-blue-400">
              ${productData.offerPrice}
              <span className="text-base font-normal text-gray-500 line-through ml-2">
                ${productData.price}
              </span>
            </p>
            <hr className="bg-gray-700 my-6" />
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full max-w-72">
                <tbody>
                  <tr>
                    <td className="text-gray-400 font-medium">Brand</td>
                    <td className="text-gray-500">Generic</td>
                  </tr>
                  <tr>
                    <td className="text-gray-400 font-medium">Color</td>
                    <td className="text-gray-500">Multi</td>
                  </tr>
                  <tr>
                    <td className="text-gray-400 font-medium">Category</td>
                    <td className="text-gray-500">{productData.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center mt-10 gap-4">
              <button
                onClick={() => {
                  if (!user) return toast.error("Please login to add to cart");
                  addToCart(productData._id);
                }}
                className="w-full py-3.5 bg-gray-700 text-gray-100 hover:bg-gray-600 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  if (!user)
                    return toast.error("Please login to place an order");
                  addToCart(productData._id);
                  router.push("/cart");
                }}
                className="w-full py-3.5 bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 mt-16">
            <p className="text-3xl font-medium text-gray-100">
              Featured <span className="text-blue-400">Products</span>
            </p>
            <div className="w-28 h-0.5 bg-blue-500 mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
            {products.slice(0, 5).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <button className="px-8 py-2 mb-16 border rounded text-gray-400 hover:bg-gray-800 transition">
            See more
          </button>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default Product;
