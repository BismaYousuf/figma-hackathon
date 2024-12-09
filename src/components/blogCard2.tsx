import { ArrowUpRight, Calendar, MessageCircle, UserCircle } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function BlogCard2() {
  return (
    <Card className="relative max-w-4xl overflow-hidden bg-white">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src="/pizza.png"
          alt="Blog featured image"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute left-4 top-4 bg-[#FF9F0D] p-2 text-center text-white rounded-md">
          <div className="text-lg font-bold">14</div>
          <div className="text-sm">Feb</div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-6 text-[#4F4F4F]">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#FF9F0D]" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#FF9F0D]" />
            <span>3</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCircle className="w-6 h-6 text-[#FF9F0D]" />
            <span>Admin</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#333333] font-helvetica">
          Traditional Soft Pretzels with Sweet Beer Cheese
        </h2>
        <p className="text-[#4F4F4F] leading-relaxed">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <button className="flex items-center gap-2 px-8 py-3.5 text-[#FF9F0D] border border-[#FF9F0D] rounded-md hover:bg-[#FF9F0D] hover:text-white transition-colors">
          Read More
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </Card>
  )
}

