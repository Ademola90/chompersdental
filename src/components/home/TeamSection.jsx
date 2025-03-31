import { ArrowRight } from "lucide-react";
import dentone from "../../assets/dentone.jpeg";
import denttwo from "../../assets/denttwo.jpeg";
import dentthree from "../../assets/dentthree.jpeg";
import dentfour from "../../assets/dentfour.jpeg";

const TeamSection = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Tasneem Manji",
      role: "Dentist",
      image: dentone,
      shortBio:
        "Dr. Manji received her D.M.D. from the University of British Columbia in 1997.",
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      role: "Orthodontist",
      image: denttwo,
      shortBio:
        "Specializing in orthodontics with over 15 years of experience.",
    },
    {
      id: 3,
      name: "Jennifer Williams",
      role: "Pediatric Dentist",
      image: dentthree,
      shortBio:
        "Dedicated to providing gentle dental care for children of all ages.",
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      role: "Dental Hygienist",
      image: dentfour,
      shortBio: "Committed to preventative dental care and patient education.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className=" justify-center items-center flex">
          {" "}
          <h2
            className="text-3xl md:text-3xl lg:text-4xl font-bold mb-12 text-center"
            style={{
              background: "linear-gradient(90deg, #F67F23 0%, #248B3C 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Meet Our Dental Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              {member.image && (
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-green-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.shortBio}</p>
                <a
                  href={`/meet-our-team/${member.id}`}
                  className="mt-4 inline-block text-green-600 hover:text-green-700 font-medium"
                >
                  View Profile <ArrowRight size={16} className="inline ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/meet-our-team"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            View All Team Members <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
