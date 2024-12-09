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
      <div className="relative w-full h-[300px] sm:h-[410px] bg-black">
        {/* Background Image */}
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Heading on Top of Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white">Blog List</h1>

          {/* Paragraph with Hover Effect */}
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <span className="transition-colors duration-300">Home</span>
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Blog</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-8 md:mt-[120px] mx-4 md:mx-8 lg:mx-[300px] gap-8">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-8">
          <Card className="w-full overflow-hidden">
            {/* Card Content */}
            <div className="relative">
              <Image
                src="/blog1.png"
                alt="Blog featured image"
                width={872}
                height={520}
                layout="responsive"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 bg-[#FF9F0D] text-white rounded-md p-2 flex flex-col items-center">
                <span className="text-lg font-bold">14</span>
                <span className="text-sm">Feb</span>
              </div>
            </div>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 stroke-[#FF9F0D]" />
                  <span>Feb 14, 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 stroke-[#FF9F0D]" />
                  <span>3</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCircle2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[#FF9F0D]" />
                  <span>Admin</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                dolore magna aliquyam erat
              </p>
              <Button 
                variant="outline" 
                className="text-[#FF9F0D] border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white w-full sm:w-auto"
              >
                Read More
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <BlogCard2 />
          <BlogCard3 />
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 mt-8 md:mt-0">
          <BlogSidebar />
        </div>
      </div>
    </>
  )
}

