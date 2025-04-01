import { Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-end gap-2 py-2">
      {/* Phone Link */}
      <a
        href="tel:(604)284-5005"
        className="flex items-center gap-1 hover:text-green-600 transition-colors text-inherit whitespace-nowrap"
      >
        <Phone size={16} className="flex-shrink-0" />
        <span className="font-medium text-sm lg:text-base">(604) 284-5005</span>
      </a>

      {/* Email Button */}
      <a
        href="mailto:info@chompersdental.com"
        className="flex items-center text-xs lg:text-sm gap-1 px-3 py-1 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors font-medium whitespace-nowrap"
      >
        <Mail size={14} className="flex-shrink-0" />
        <span>E-MAIL NOW</span>
      </a>

      {/* Schedule Button */}
      <Link
        to="/schedule"
        className="flex items-center text-xs lg:text-sm gap-1 px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium whitespace-nowrap"
      >
        <Calendar size={14} className="flex-shrink-0" />
        <span>SCHEDULE NOW</span>
      </Link>
    </div>
  );
};

export default ContactCTA;
