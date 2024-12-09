'use client'

import { Button } from "@/components/ui/button"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'
import { Navbar } from "./navbar"
import Link from "next/link"
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="absolute inset-0 bg-black bg-opacity-95"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-32 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <p className="text-2xl md:text-3xl text-orange-500 font-['Great_Vibes']">It's Quick & Amusing!</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Art of speed <br /><span className="text-orange-500">food Quality</span>
            </h1>
            <p className="text-white text-base md:text-lg max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <Link href={'/signupForm'}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg">
                See Menu
              </Button>
            </Link>
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/food items.png" 
              alt="Main Dish" 
              width={877.8}
              height={670}
              className="relative z-10 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute w-[158px] h-0 left-8 top-1/4 bg-white border border-white rotate-90"></div>
      <div className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 space-y-6 flex-col items-center ml-[60px]">
        <SocialIcon icon={<FaFacebook size={16} />} />
        <SocialIcon icon={<FaTwitter size={16} />} />
        <SocialIcon icon={<FaInstagram size={16} />} />
      </div>
      <div className="hidden md:block absolute w-[158px] h-0 left-8 bottom-1/4 bg-white border border-white rotate-90"></div>
    </div>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer">
      {icon}
    </div>
  )
}

