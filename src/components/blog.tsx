import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, Share2, ThumbsUp } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    date: "10 February 2022",
    image: "/why 2.png",
    likes: 24,
    comments: 12,
  },
  {
    id: 2,
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    date: "10 February 2022",
    image: "/pizza.png",
    likes: 18,
    comments: 8,
  },
  {
    id: 3,
    title: "Curabitur rutrum velit ac congue malesuada",
    date: "10 February 2022",
    image: "/why 1.png",
    likes: 32,
    comments: 16,
  },
]

export default function BlogSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Section heading */}
      <div className="text-center mb-16">
        <span className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">Blog Post</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h2>
      </div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-transparent border-white text-white">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <time className="text-[#FF9F0D]">{post.date}</time>
              <h3 className="text-2xl font-bold mt-4 mb-6">{post.title}</h3>
              <Link 
                href="#" 
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Learn More
              </Link>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-end gap-4">
              <button className="flex items-center gap-2 text-white hover:text-[#FF9F0D] transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span className="sr-only">Like</span>
              </button>
              <button className="flex items-center gap-2 text-white hover:text-[#FF9F0D] transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">Comment</span>
              </button>
              <button className="flex items-center gap-2 text-white hover:text-[#FF9F0D] transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="sr-only">Share</span>
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

