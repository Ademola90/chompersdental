import ContactCTA from "./contact-cta";
import logo from "../assets/chomperslogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8 lg:px-10 md:px-10 px-5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <img className="h-16 lg:h-20 w-auto" src={logo} alt="" />
            <p className="mb-4">
              A full-service family oriented dental practice.
            </p>
            <p className="text-gray-300">
              12345 Steveston Highway
              <br />
              Richmond, BC V7A 1N3
              <br />
              Canada
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/meet-our-team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Meet Our Team
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact & Appointments</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <ContactCTA />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Chompers Family Dental. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
