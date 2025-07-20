'use client'
import { assets } from '@/assets/assets'
import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import { useEffect } from 'react'

const OrderPlaced = () => {
  const { router } = useAppContext()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/my-orders')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5 bg-[#0e0f11] text-gray-100'>
      <div className="flex justify-center items-center relative">
        <Image className="absolute p-5 w-20 h-20" src={assets.checkmark} alt="Checkmark" />
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-t-blue-500 border-gray-700"></div>
      </div>
      <div className="text-center text-2xl font-semibold text-blue-400">
        Order Placed Successfully
      </div>
      <p className="text-gray-400 text-sm text-center px-4">Redirecting you to your orders...</p>
    </div>
  )
}

export default OrderPlaced
