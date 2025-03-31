import { Facebook, Twitter } from "lucide-react";

const SocialMediaSection = () => {
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
              Follow Chompers Family Dental Clinic
            </h2>
          </div>
          {/* <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#F67F23] mb-8">
            
          </h2> */}
          <div className="flex justify-center gap-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white p-4 rounded-full hover:bg-blue-500 transition-colors"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://yelp.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors"
            >
              <span className="font-bold text-xl">Yelp</span>
              <span className="sr-only">Yelp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
