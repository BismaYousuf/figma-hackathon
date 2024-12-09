import { ChefHat, Utensils, Pizza } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <section className="relative py-12 md:py-24 bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url('/Clients (1).png')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            {
              icon: ChefHat,
              number: "420",
              label: "Professional Chefs"
            },
            {
              icon: Utensils,
              number: "320",
              label: "Items Of Food"
            },
            {
              icon: Utensils,
              number: "30+",
              label: "Years Of Experience"
            },
            {
              icon: Pizza,
              number: "220",
              label: "Happy Customers"
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-3 md:space-y-4"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF9F0D] flex items-center justify-center">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {stat.number}
              </h3>
              <p className="text-lg md:text-2xl font-bold text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

