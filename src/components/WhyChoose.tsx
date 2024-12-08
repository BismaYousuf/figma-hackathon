import { SandwichIcon as Hamburger, Cookie, Wine } from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Column - Image Grid */}

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="col-span-2 lg:col-span-1">
              <Image
                src="/why 1.png"
                alt="Food presentation"
                width={362}
                height={356}
                className="w-full h-[356px] object-cover rounded-lg"
              />
            </div>
            <div className="lg:mt-24">
              <Image
                src="/why 2.png"
                alt="Food presentation"
                width={281}
                height={231}
                className="w-full h-[231px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/why 3.png"
                alt="Food presentation"
                width={244}
                height={306}
                className="w-full h-[306px] object-cover rounded-lg"
              />
            </div>
            <div className="grid gap-4">
              <Image
                src="/why 4.png"
                alt="Food presentation"
                width={221}
                height={226}
                className="w-full h-[226px] object-cover rounded-lg"
              />
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="/why 5.png"
                  alt="Food presentation"
                  width={161}
                  height={168}
                  className="w-full h-[168px] object-cover rounded-lg"
                />
                <Image
                  src="/why 6.png"
                  alt="Food presentation"
                  width={161}
                  height={166}
                  className="w-full h-[166px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-['Great_Vibes'] text-[#FF9F0D] text-3xl">Why Choose us</span>
              <h2 className="text-[#FF9F0D] text-5xl font-bold leading-tight">
                Extra ordinary taste And Experienced
              </h2>
              <p className="text-white text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
                fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
                vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>

            {/* Service Icons */}

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Hamburger, label: "Fast Food" },
                { icon: Cookie, label: "Lunch" },
                { icon: Wine, label: "Dinner" },
              ].map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="bg-[#FF9F0D] p-6 rounded-lg flex flex-col items-center justify-center space-y-4"
                >
                  <Icon className="w-12 h-12 text-white" />
                  <span className="text-white text-lg">{label}</span>
                </div>
              ))}
            </div>

            {/* Experience Box */}

            <div className="bg-white rounded-lg flex items-center p-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF9F0D] rounded-l-lg" />
              <div className="flex items-baseline gap-4">
                <span className="text-[#FF9F0D] text-5xl font-bold">30+</span>
                <div className="space-y-1">
                  <p className="text-xl text-black">Years of</p>
                  <p className="text-2xl font-bold text-black">Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

