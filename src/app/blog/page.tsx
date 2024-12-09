import Image from "next/image"
import { Calendar, MessageSquare, UserCircle2, ArrowUpRight, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import BlogSidebar from "@/components/blogsidebar"
import BlogCard2 from "@/components/blogCard2"
import BlogCard3 from "@/components/blogCard3"

export default function BlogCard() {
  return (
    <>
       <Header />
    <div className="relative w-[1920px] h-[410px] bg-black m-auto">
      {/* Background Image */}
      <Image
        src={'/menubg.png'} // Ensure the background image is correct
        alt={'Menu Background'}
        width={1920}
        height={410}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Heading on Top of Image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        {/* Heading */}
        <h1 className="text-[48px] font-bold text-white">Blog List</h1>

        {/* Paragraph with Hover Effect */}
        <p className="text-[16px] text-white flex items-center space-x-2 group">
          <span className="transition-colors duration-300">Home</span>
          <ChevronRight
            size={16}
            className="text-white transition-colors duration-300 group-hover:text-orange-500"
          />
          <span className="transition-colors duration-300 text-orange-500">Blog</span>
        </p>
      </div>
    </div>
    <div className="flex flex-row mt-[120px] ml-[300px] gap-4">
  {/* Main Content Area */}
  <div className="flex-2 flex flex-col gap-4 mt-[120px]">
    <Card className="max-w-[872px] overflow-hidden">
      {/* Card Content */}
      <div className="relative">
        <Image
          src="/blog1.png"
          alt="Blog featured image"
          width={872}
          height={520}
          className="w-full object-cover"
        />
        <div className="absolute left-6 top-6 bg-[#FF9F0D] text-white rounded-md p-2 flex flex-col items-center">
          <span className="text-lg font-bold">14</span>
          <span className="text-sm">Feb</span>
        </div>
      </div>
      <CardContent className="p-8">
        <div className="flex items-center gap-6 text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 stroke-[#FF9F0D]" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 stroke-[#FF9F0D]" />
            <span>3</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCircle2 className="w-6 h-6 stroke-[#FF9F0D]" />
            <span>Admin</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
          no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
          dolore magna aliquyam erat
        </p>
        <Button 
          variant="outline" 
          className="text-[#FF9F0D] border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white"
        >
          Read More
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
    <BlogCard2 />
    <BlogCard3/>
  </div>

  {/* Sidebar */}
  <div>
    <BlogSidebar />
  </div>
</div>

    </>
  )
}

