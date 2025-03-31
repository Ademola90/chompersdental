import { Facebook, Twitter } from "lucide-react";

const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Follow Chompers Family Dental Clinic
          </h2>
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
