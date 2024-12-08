
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
import { Input } from "@/components/ui/input"; // Adjusted import
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
      <div className="relative ">
        <img
          src="/blog1.png"
          alt="Delicious tacos with fresh vegetables"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute top-6 left-6 bg-[#FF9F0D] text-white p-2 rounded-md flex flex-col items-center justify-center">
          <span className="text-lg font-bold">14</span>
          <span className="text-sm">Feb</span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-6 text-[#4F4F4F] mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#FF9F0D]" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#FF9F0D]" />
            <span>3</span>
          </div>
          <div className="flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-[#FF9F0D]" />
            <span>Admin</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#333333] mb-4">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <p className="text-[#4F4F4F] mb-6">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat
        </p>
        <Button
          variant="outline"
          className="text-[#FF9F0D] border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white"
        >
          Read More
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
    <Card className="max-w-[872px] overflow-hidden mt-[56px]">
      <div className="relative ">
        <img
          src="/blog2.png"
          alt="Delicious tacos with fresh vegetables"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute top-6 left-6 bg-[#FF9F0D] text-white p-2 rounded-md flex flex-col items-center justify-center">
          <span className="text-lg font-bold">14</span>
          <span className="text-sm">Feb</span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-6 text-[#4F4F4F] mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#FF9F0D]" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#FF9F0D]" />
            <span>3</span>
          </div>
          <div className="flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-[#FF9F0D]" />
            <span>Admin</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#333333] mb-4">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <p className="text-[#4F4F4F] mb-6">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat
        </p>
        <Button
          variant="outline"
          className="text-[#FF9F0D] border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white"
        >
          Read More
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
    <Card className="max-w-[872px] overflow-hidden mt-[56px]">
      <div className="relative ">
        <img
          src="/blog3.png"
          alt="Delicious tacos with fresh vegetables"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute top-6 left-6 bg-[#FF9F0D] text-white p-2 rounded-md flex flex-col items-center justify-center">
          <span className="text-lg font-bold">14</span>
          <span className="text-sm">Feb</span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-6 text-[#4F4F4F] mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#FF9F0D]" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#FF9F0D]" />
            <span>3</span>
          </div>
          <div className="flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-[#FF9F0D]" />
            <span>Admin</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#333333] mb-4">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <p className="text-[#4F4F4F] mb-6">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat
        </p>
        <Button
          variant="outline"
          className="text-[#FF9F0D] border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white"
        >
          Read More
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
    <Card className="max-w-[872px] overflow-hidden mt-[56px]">
      <div className="relative ">
        <img
          src="/blog4.png"
          alt="Delicious tacos with fresh vegetables"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute top-6 left-6 bg-[#FF9F0D] text-white p-2 rounded-md flex flex-col items-center justify-center">
          <span className="text-lg font-bold">14</span>
          <span className="text-sm">Feb</span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-6 text-[#4F4F4F] mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#FF9F0D]" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#FF9F0D]" />
            <span>3</span>
          </div>
          <div className="flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-[#FF9F0D]" />
            <span>Admin</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#333333] mb-4">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <p className="text-[#4F4F4F] mb-6">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat
        </p>
        <Button
          variant="outline"
          className="text-[#FF9F0D] border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white"
        >
          Read More
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
    <aside className="w-full max-w-[424px] space-y-8">

        {/* sidebar */}


      {/* Search */}
      <div className="relative">
        <Input 
          placeholder="Search Your Keyword.." 
          className="pr-12"
        />
        <Button 
          size="icon" 
          className="absolute right-0 top-0 h-full rounded-l-none bg-[#FF9F0D] hover:bg-[#FF9F0D]/90"
        >
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
          <h3 className="mt-4 text-xl font-bold">Prince Miyako</h3>
          <p className="text-muted-foreground">Blogger/Photographer</p>
          <div className="flex justify-center mt-2 text-[#FF9F0D]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">(1 Review)</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Facebook className="h-5 w-5 text-gray-600" />
            <Twitter className="h-5 w-5 text-gray-600" />
            <Instagram className="h-5 w-5 text-gray-600" />
            <Youtube className="h-5 w-5 text-gray-600" />
          </div>
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
              <img
                src="/placeholder.svg"
                alt="Food"
                className="h-20 w-24 rounded-md object-cover"
              />
              <div>
                <p className="text-sm text-[#FF9F0D]">June 22, 2020</p>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit cing elit, sed do.
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Filter By Menu */}
      <Card>
        <CardHeader>
          <CardTitle>Filter By Menu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Chicken Fry", count: 26 },
            { name: "Burger Food", count: 46 },
            { name: "Pizza", count: 16 },
            { name: "Fresh Fruits", count: 36 },
            { name: "Vegetables", count: 16 }
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt={item.name}
                className="h-12 w-14 rounded-md object-cover"
              />
              <span className="flex-1 font-medium">{item.name}</span>
              <span className="text-muted-foreground">{item.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "Sandwich", "Tikka", "BBQ", "Restaurant", "Chicken Sharma",
              "Health", "Fastfood", "Food", "Pizza", "Burger", "Chicken"
            ].map((tag) => (
                <Badge key={tag}>{tag}</Badge>

            ))}
          </div>
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
              <img
                key={i}
                src="/placeholder.svg"
                alt={`Gallery ${i + 1}`}
                className="aspect-square rounded-md object-cover"
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Follow Us */}
      <Card>
        <CardHeader>
          <CardTitle>Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-[#FF9F0D] text-white hover:bg-[#FF9F0D]/90">
              <Youtube className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
    </>
  )
}

