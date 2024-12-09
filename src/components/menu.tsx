import { Coffee } from 'lucide-react'
import Image from 'next/image'

export default function MenuSection() {
  const menuItems = [
    {
      name: "Optic Big Breakfast Combo Menu",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$"
    },
    {
      name: "Cashew Chicken With Stir-Fry",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$"
    },
    {
      name: "Vegetables & Green Salad",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14$"
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35$"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-[1320px] ml-[400px] ">
      <div className="flex items-center gap-2 mb-8 ">
        <Coffee className="w-6 h-6 text-[#FF9F0D]" />
        <h2 className="text-4xl font-bold text-gray-800">Main Course</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-dashed border-gray-200 pb-8">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <span className="text-2xl font-bold text-[#FF9F0D]">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <span className="text-gray-400 text-sm">{item.calories}</span>
            </div>
          ))}
        </div>
        
        <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden mb-[122px]">
          <Image 
            src="/menupic2.png" 
            alt="Featured dish" 
            width={448}
            height={626}
            className="object-cover "
          />
        </div>
      </div>
    </div>
  )
}

