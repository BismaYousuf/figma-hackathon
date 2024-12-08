import { Header } from '@/components/header';
import StarterMenu from '@/components/startmenu'
import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Clients from '@/components/Clients';


function MenuHero() {
  return (
    <>
      <Header />

      <div className="relative w-[1920px] h-[410px] bg-black m-auto">
        {/* Background Image */}
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          width={1920}
          height={410}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Heading on Top of Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
  {/* Heading */}
  <h1 className="text-[48px] font-bold text-white">Our Menu</h1>
  
  {/* Paragraph with Hover Effect */}
  <p className="text-[16px] text-white flex items-center space-x-2 group">
    <span className="transition-colors duration-300">Home</span>
    <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
    <span className="transition-colors duration-300 text-orange-500">Menu</span>
  </p>
</div>
      </div>

      <StarterMenu />
      <Clients/>
       <StarterMenu />


    </>
  );
}

export default MenuHero;
