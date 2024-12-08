import Image from "next/image";

export default function FoodCategory() {
  const foodItems = [
    {
      image: "/fastfood.png",
      title: "Fast Food Dish",
      discount: "Save 30%",
      alt: "Fresh salad with mushrooms",
    },
    {
      image: "/Gourmet.png",
      alt: "Sesame seed burger with fresh vegetables",
    },
    {
      image: "/Salad.png",
      alt: "Fresh salad with nuts and pomegranate",
    },
    {
      image: "/Sweet.png",
      alt: "Stack of decorated donuts",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="relative container mx-auto px-4 w-[1320px] h-[489px]">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-['Great_Vibes'] text-[#FF9F0D] text-3xl block mb-2">
            Food Category
          </span>
          <h2 className="text-5xl font-bold">
            <span className="text-[#FF9F0D]">Ch</span>
            <span className="text-white">oose Food Item</span>
          </h2>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className={`relative group ${index === 0 ? "bg-orange-400" : ""}`}
            >
              {/* Image Container */}
              <div className="relative h-[329px] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={305}
                  height={328}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title Box (Only for first image) */}
              {index === 0 && item.title && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-bold rounded-md">
                    <h3 className="text-xl text-white bg-orange-400 w-[206px] h-[46px] p-4">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )}

              {/* Discount Badge - Only for first item */}
              {index === 0 && item.discount && (
                <div className="absolute top-4 right-4">
                  <div className="bg-white text-[#FF9F0D] font-bold px-4 py-2 rounded-md">
                    {item.discount}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      {/* <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute w-[444.1px] h-[532.3px] left-[1472px] -top-[249.49px]"
          style={{
            transform: "rotate(6.86deg)",
            backgroundImage: 'url("/bgleave.png")',
            backgroundSize: "contain", // Change to contain to fit image within the div without cropping
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </div> */}
    </section>
  );
}
