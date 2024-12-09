import { ChefCard } from "@/components/ChefCard";
import { Header } from "@/components/header";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", imageUrl: "/c1.png" }, 
  { name: "Jorina Begum", imageUrl: "/c2.png" },
  { name: "M.Mohammad", imageUrl: "/c3.png" },
  { name: "Munna Kathy", imageUrl: "/c4.png" },
  { name: "Bisnu devgon", imageUrl: "/c5.png" },
  { name: "Motin Molladsf", imageUrl: "/c6.png" },
  { name: "William Rumi", imageUrl: "/c7.png" },
  { name: "Kets william roy", imageUrl: "/c8.png" },
  { name: "Mahmud kholil", imageUrl: "/c9.png" },
  { name: "Ataur Rahman", imageUrl: "/c10.png" },
  { name: "Monalisa holly", imageUrl: "/c11.png" },
  { name: "Tahmina Rumi", imageUrl: "/c12.png" },
];

export default function ChefGrid() {
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
          <h1 className="text-[48px] font-bold text-white">Our Chef</h1>

          {/* Paragraph with Hover Effect */}
          <p className="text-[16px] text-white flex items-center space-x-2 group">
            <span className="transition-colors duration-300">Home</span>
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Chef</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {chefs.map((chef, index) => (
            <ChefCard key={index} name={chef.name} imageUrl={chef.imageUrl} />
          ))}
        </div>
      </div>
    </>
  );
}
