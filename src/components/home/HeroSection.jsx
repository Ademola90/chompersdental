import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroone from "../../assets/heroone.jpeg";
import herotwo from "../../assets/herotwo.jpeg";
import herothree from "../../assets/herothree.jpeg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const slides = [
    {
      id: 1,
      title: "Your Family's Smile Deserves The Best Care",
      description:
        "At Chompers Family Dental, we provide comprehensive dental care for the whole family in a comfortable, friendly environment.",
      bgColor: "from-green-700/60 to-green-600/60",

      bgImage: heroone,
    },
    {
      id: 2,
      title: "Advanced Dental Technology For Better Results",
      description:
        "Experience state-of-the-art dental care with our modern equipment and innovative techniques.",
      bgColor: "from-blue-700/60 to-blue-600/60",
      bgImage: herotwo,
    },
    {
      id: 3,
      title: "Comfortable & Stress-Free Dental Experience",
      description:
        "Our gentle approach and friendly staff ensure your visit is as pleasant and relaxing as possible.",
      bgColor: "from-purple-700/60 to-purple-600/60",
      bgImage: herothree,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out lg:px-16 md:px-10 px-5 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background gradient and image */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`}
          ></div>
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          ></div>

          {/* Slide content */}
          <div className="container mx-auto px-4 py-20 lg:py-32 h-full flex items-center relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6">
                {slide.title}
              </h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/schedule"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
                >
                  Schedule Appointment <ArrowRight size={18} />
                </a>
                <a
                  href="/services"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

// import { ArrowRight } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-green-700/90 to-green-600/90 text-white">
//       <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-gray-800"></div>
//       <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//             Your Family's Smile Deserves The Best Care
//           </h1>
//           <p className="text-xl mb-8">
//             At Chompers Family Dental, we provide comprehensive dental care for
//             the whole family in a comfortable, friendly environment.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <a
//               href="/schedule"
//               className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
//             >
//               Schedule Appointment <ArrowRight size={18} />
//             </a>
//             <a
//               href="/services"
//               className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-colors"
//             >
//               Explore Our Services
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
