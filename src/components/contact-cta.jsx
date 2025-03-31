import { Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-3 w-full">
      {/* Phone Link - Wraps when needed */}
      <a
        href="tel:(604)284-5005"
        className="flex items-center gap-2 px-4 py-2 hover:text-green-600 transition-colors text-inherit whitespace-nowrap"
      >
        <Phone size={18} className="flex-shrink-0" />
        <span className="font-medium">(604) 284-5005</span>
      </a>

      {/* Email Button - Wraps when needed */}
      <a
        href="mailto:info@chompersdental.com"
        className="flex items-center gap-2 px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors font-medium whitespace-nowrap"
      >
        <Mail size={16} className="flex-shrink-0" />
        <span>E-MAIL NOW</span>
      </a>

      {/* Schedule Button - Wraps when needed */}
      <Link
        to="/schedule"
        className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium whitespace-nowrap"
      >
        <Calendar size={16} className="flex-shrink-0" />
        <span>SCHEDULE NOW</span>
      </Link>
    </div>
  );
};

export default ContactCTA;
