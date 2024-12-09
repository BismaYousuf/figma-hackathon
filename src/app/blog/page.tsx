import {
  ArrowUpRight,
  Badge,
  Calendar,
  ChevronRight,
  Facebook,
  Instagram,
  MessageCircle,
  Search,
  Star,
  Twitter,
  UserPlus,
  Youtube,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
import { Header } from "@/components/header";

export default function BlogCard() {
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

      <Card className="max-w-[872px] overflow-hidden mt-[120px]">
        <div className="relative">
          <Image
            src="/blog1.png"
            alt="Delicious tacos with fresh vegetables"
            width={872}
            height={520}
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute top-6 left-6 bg-[#FF9F0D] text-white p-2 rounded-md flex flex-col items-center justify-center">
            <span className="text-lg font-bold">14</span>
            <span className="text-sm">Feb</span>
          </div>
        </div>
        <CardContent className="p-6">
          {/* Content here */}
        </CardContent>
      </Card>

      {/* Replace all img with Image in similar patterns */}
      <aside className="w-full max-w-[424px] space-y-8">
        {/* Search */}
        <div className="relative">
          <Input placeholder="Search Your Keyword.." className="pr-12" />
          <Button size="icon" className="absolute right-0 top-0 h-full rounded-l-none bg-[#FF9F0D] hover:bg-[#FF9F0D]/90">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Profile Card */}
        <Card>
          <CardContent className="pt-6 text-center">
            <Avatar className="h-24 w-24 mx-auto">
              <AvatarImage src="/placeholder.svg" alt="Prince Miyako" />
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4].map((post) => (
              <div key={post} className="flex gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Food"
                  width={96}
                  height={80}
                  className="h-20 w-24 rounded-md object-cover"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Photo Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <Image
                  key={i}
                  src="/placeholder.svg"
                  alt={`Gallery ${i + 1}`}
                  width={100}
                  height={100}
                  className="aspect-square rounded-md object-cover"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </aside>
    </>
  );
}
