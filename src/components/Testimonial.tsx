import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16">
      {/* Decorative heading */}
      <span className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">Testimonials</span>
      
      {/* Main heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-16">
        What our client are saying
      </h2>

      {/* Testimonial card */}
      <div className="relative">
        <Card className="relative bg-white shadow-lg p-8 pt-24 max-w-4xl mx-auto">
          {/* Profile image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/man.png"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote icon */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
            <Image className="text-[#FF9F0D] text-4xl -mt-[10px]" src={"/Quotes.png"} alt={"number"} width={48} height={48}         />
          </div>

          {/* Testimonial text */}
          <p className="text-[#4F4F4F] text-lg text-center max-w-2xl mx-auto mb-8 mt-[31px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          {/* Rating stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 fill-[#FF9F0D] text-[#FF9F0D]"
              />
            ))}
            <Star className="w-6 h-6 fill-[#E0E0E0] text-[#E0E0E0]" />
          </div>

          {/* Author info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#333333] mb-2">
              Alamin Hasan
            </h3>
            <p className="text-[#828282]">Food Specialist</p>
          </div>
        </Card>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3, 4].map((dot, i) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                i === 1 ? "bg-[#FF9F0D]" : "bg-[#FF9F0D]/30"
              }`}
            />
          ))}
        </div>

        {/* Decorative background image */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
          <Image
            src="/flower.png"
            alt="Decorative"
            width={400}
            height={300}
            className="object-cover transform rotate-12"
          />
        </div>
      </div>
    </div>
  )
}

