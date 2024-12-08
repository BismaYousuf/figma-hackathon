import Image from "next/image"
import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
})

interface ChefCardProps {
  name: string
  role: string
  image: string
}

function ChefCard({ name, role, image }: ChefCardProps) {
  return (
    <div className="relative w-full">
      <div className="aspect-[4/5] relative overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 312px, (min-width: 768px) 25vw, 80vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[58%] bg-white py-3 px-5 rounded-bl-md">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-800">{role}</p>
      </div>
    </div>
  )
}

export default function MeetOurChefs() {
  const chefs = [
    {
      name: "D.Estwood",
      role: "Chief Chef",
      image: "/Chef 1.png",
    },
    {
      name: "D.Scoriesh",
      role: "Assistant Chef",
      image: "/Chef 2.png",
    },
    {
      name: "M.William",
      role: "Advertising Chef",
      image: "/Card 3.png",
    },
    {
      name: "W.Readfroad",
      role: "Chef",
      image: "/Card 4.png",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 opacity-20">
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className={`${greatVibes.className} text-[#FF9F0D] text-3xl`}>Chefs</span>
          <h2 className="text-5xl font-bold mt-2 text-white">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {chefs.map((chef) => (
            <ChefCard key={chef.name} {...chef} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-[#FF9F0D] text-white rounded-full px-8 py-3 hover:bg-[#FF9F0D] transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  )
}
