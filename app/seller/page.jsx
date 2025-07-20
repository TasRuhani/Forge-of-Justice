'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'
import toast from 'react-hot-toast'
import axios from 'axios'

const AddProduct = () => {
  const { getToken } = useAppContext()

  const [images, setImages] = useState([null, null, null, null])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('HeroTech')
  const [price, setPrice] = useState(0)
  const [offerPrice, setOfferPrice] = useState(0)

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0]
    if (file) {
      const newImages = [...images]
      newImages[index] = file
      setImages(newImages)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !description || !category || !price || !offerPrice || images.every(img => !img)) {
      toast.error("All fields are required.")
      return
    }

    try {
      const token = await getToken()
      const formData = new FormData()
      images.forEach(img => {
        if (img) formData.append("images", img)
      })
      formData.append("name", name)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("price", price)
      formData.append("offerPrice", offerPrice)

      const { data } = await axios.post("/api/product/add", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      })

      if (data.success) {
        toast.success("Product added successfully!")
        setName('')
        setDescription('')
        setCategory('HeroTech')
        setPrice(0)
        setOfferPrice(0)
        setImages([null, null, null, null])
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-[#111827] flex justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1f2937] p-6 md:p-10 rounded-lg shadow-lg w-full max-w-2xl text-white space-y-6"
      >
        <div>
          <label className="block mb-2 font-semibold">Product Image</label>
          <div className="grid grid-cols-4 gap-2">
            {images.map((_, index) => (
              <div key={index} className="border border-gray-600 rounded h-20 flex justify-center items-center relative bg-[#111827]">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, index)}
                  className="opacity-0 absolute w-full h-full cursor-pointer"
                />
                {images[index] ? (
                  <Image src={URL.createObjectURL(images[index])} alt="uploaded" fill className="object-cover rounded" />
                ) : (
                  <div className="text-xs text-gray-400 text-center">Upload</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Product Name</label>
          <input
            type="text"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#1f2937] border border-[#2563ea] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Product Description</label>
          <textarea
            rows={4}
            placeholder="Type here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#1f2937] border border-[#2563ea] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <label className="block mb-2 font-semibold">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#1f2937] border border-[#2563ea] text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="HeroTech">HeroTech</option>
              <option value="KnightOps">KnightOps</option>
              <option value="Mystic">Mystic</option>
              <option value="MetaCore">MetaCore</option>
              <option value="Cosmic">Cosmic</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block mb-2 font-semibold">Product Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#1f2937] border border-[#2563ea] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label className="block mb-2 font-semibold">Offer Price</label>
            <input
              type="number"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#1f2937] border border-[#2563ea] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded bg-[#2563ea] hover:bg-blue-700 text-white font-semibold transition"
        >
          ADD
        </button>
      </form>
    </div>
  )
}

export default AddProduct
