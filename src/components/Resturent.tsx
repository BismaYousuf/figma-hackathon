import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'

export default function RestaurantProcess() {
  return (
    <section className="relative w-full min-h-[558px] bg-[#1A1A1A]">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
  <div
    className="absolute inset-0 "
    style={{
      backgroundImage: `url('/midbg.png')`, // Fixed closing quote
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
</div>


      {/* Content container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center items-end text-right">
        {/* Decorative heading */}
        <span className="font-['Great_Vibes'] text-3xl text-[#FF9F0D] mb-4">
          Restaurant Active Process
        </span>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
          <span className="text-[#FF9F0D]">We</span> Document Every Food Bean Process untile it is saved
        </h2>

        {/* Description */}
        <p className="text-white/90 max-w-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6">
          <Button 
            variant="outline" 
            className="border-[#FF9F0D] bg-transparent text-white hover:bg-[#FF9F0D] hover:text-white rounded-full px-8"
          >
            Read More
          </Button>

          <button className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#FF9F0D] flex items-center justify-center group-hover:bg-[#FF9F0D]/90 transition-colors">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-white font-bold">
              Play Video
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

