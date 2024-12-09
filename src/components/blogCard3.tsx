import Image from "next/image"
import { Calendar, MessageCircle, UserCircle, ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function BlogCard3() {
  return (
    <Card className="relative w-full max-w-[872px] overflow-hidden bg-white">
      <div className="relative h-[520px]">
        <Image
          src="/blog2.png"
          alt="Blog featured image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute left-6 top-6 bg-[#FF9F0D] text-white p-2 rounded-md flex flex-col items-center justify-center">
          <span className="text-lg font-bold">14</span>
          <span className="text-sm">Feb</span>
        </div>
      </div>
      <CardContent className="p-8">
        <div className="flex items-center gap-6 text-[#4F4F4F] mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#FF9F0D]" />
            <span className="text-base">Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#FF9F0D]" />
            <span className="text-base">3</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCircle className="w-6 h-6 text-[#FF9F0D]" />
            <span className="text-base">Admin</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#333333] mb-4 font-helvetica">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <p className="text-base text-[#4F4F4F] mb-6 font-inter">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <button className="flex items-center gap-2 px-8 py-3.5 border border-[#FF9F0D] text-[#FF9F0D] rounded-md hover:bg-[#FF9F0D] hover:text-white transition-colors">
          <span>Read More</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </CardContent>
    </Card>
  )
}

