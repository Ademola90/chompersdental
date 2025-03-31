import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className=" justify-center items-center flex">
            {" "}
            <h2
              className="text-3xl md:text-3xl lg:text-4xl font-bold mb-12 text-center "
              style={{
                background: "linear-gradient(90deg, #F67F23 0%, #248B3C 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              Dental Care Services
            </h2>
          </div>
          {/* <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#F67F23] mb-6">
            
          </h2> */}
          <p className="text-gray-600 mb-8 text-lg">
            One of the exciting things about working in the oral health care
            field is the rapid advancement of knowledge, methods and materials.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Read More <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
