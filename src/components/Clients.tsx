import { ChefHat, Utensils, Pizza } from "lucide-react";

const Clients: React.FC = () => {
  return (
    <section className="relative py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center w-[1920px] h-[469px] m-auto"
        style={{ backgroundImage: "url('/Clients (1).png')" }} // First background image
        aria-hidden="true"
      >
        <div className="absolute inset-0 " /> </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 rounded-full bg-[#FF9F0D] flex items-center justify-center">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white">
                {stat.number}
              </h3>
              <p className="text-2xl font-bold text-white">
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
