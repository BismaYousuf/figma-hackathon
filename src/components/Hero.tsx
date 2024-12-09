import { Button } from "@/components/ui/button"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { Navbar } from "./navbar";
import Link from "next/link";

export function Hero() {
  return (

    <div className="relative  w-[1920px] bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat">
      <Navbar/>
      <div className="absolute inset-0 bg-black bg-opacity-95"></div>
      <div className="relative container mx-auto px-4 py-32 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 pl-[300px] pt-[293px]">
            <p className="text-3xl text-orange-500 font-['Great_Vibes']">It's Quick & Amusing!</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              The Art of speed <br /><span className="text-orange-500">food Quality</span>
            </h1>
            <p className="text-white text-lg max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <Link href={'/signupForm'}><Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg">
              See Menu
            </Button></Link>
          </div>
          <div className="relative hidden md:block  pt-[198px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500p]"></div>
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
      <div className="absolute w-[158px] mt-[350px] h-0 left-[238px] top-[191px] bg-white border border-white rotate-90 "></div>
      
      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 space-y-6 pl-[242px] pt-[394px]">
      
        <SocialIcon icon={<FaFacebook size={16} />} />
        <SocialIcon icon={<FaTwitter size={16} />} />
        <SocialIcon icon={<FaInstagram size={16} />} />
      </div>

      <div className="absolute w-[158px] mt-[736px] h-0 left-[238px] top-[191px] bg-white border border-white rotate-90 "></div>
   
    
    </div>
  )
}

function SocialIcon({ icon }: any) {
    return (
      <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer">
        {icon}
      </div>
    );
  }
  
  
