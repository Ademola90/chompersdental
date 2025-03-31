"use client";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TeamMemberDetail = () => {
  const { id } = useParams();

  // This would normally come from an API or database
  const teamMembers = {
    1: {
      id: 1,
      name: "Dr. Tasneem Manji",
      role: "Dentist",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kjhs-fiUgOfbaIz476dnztBW9hLpQhVWt3Z.png",
      education: [
        "B.Sc in Chemistry and Genetic Engineering from Cedar Crest College, Pennsylvania",
        "D.M.D. from the University of British Columbia in 1997",
      ],
      bio: [
        "Dr Tasneem Manji received her B.Sc in Chemistry and Genetic Engineering from Cedar Crest College, Pennsylvania and her D.M.D. from the University of British Columbia in 1997.",
        "She decided to pursue a career in dentistry as she finds that the mouth is particularly fascinating but most neglected and understated part of the body.",
        "Dr Manji enjoys interacting with all ages, especially children. She was awarded the Pediatric Dental, American Academy of General Dentistry and Periodontics Awards. Practicing dentistry is most rewarding to her especially when she can make a difference in the quality of peoples lives by making a dramatic change which is positive.",
        "In addition to general dentistry Dr Manji actively pursues further education in orthodontics, implants and cosmetic dentistry which allows her to offer a wide range of treatment options.",
        "During her time off she enjoys traveling and can be convinced to experience the outdoors with her husband and two children. In her personal time she enjoys giving back to her alma mater by volunteering as a clinical instructor at UBC, yoga, theological studies and reading.",
      ],
    },
    2: {
      id: 2,
      name: "Dr. Sarah Johnson",
      role: "Orthodontist",
      education: [
        "D.D.S. from University of Toronto",
        "M.Sc. in Orthodontics from University of British Columbia",
      ],
      bio: [
        "Dr. Sarah Johnson is a highly skilled orthodontist with over 15 years of experience in the field.",
        "She specializes in providing comprehensive orthodontic care for patients of all ages, with a particular focus on early intervention and invisible braces options.",
        "Dr. Johnson is committed to staying at the forefront of orthodontic advancements and regularly attends continuing education courses.",
        "Outside of the office, she enjoys hiking, photography, and spending time with her family.",
      ],
    },
  };

  const member = teamMembers[id] || {
    id: 0,
    name: "Team Member Not Found",
    role: "",
    education: [],
    bio: ["The requested team member could not be found."],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/meet-our-team"
        className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
      >
        <ArrowLeft size={16} className="mr-2" /> Back to Team
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            {member.image && (
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-auto object-cover"
              />
            )}
            {!member.image && (
              <div className="bg-gray-200 w-full h-full min-h-[300px] flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
            )}
          </div>
          <div className="md:w-2/3 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {member.name}
            </h1>
            <p className="text-xl text-green-600 mb-6">{member.role}</p>

            {member.education.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  Education
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {member.education.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-3">
                Biography
              </h2>
              <div className="space-y-4 text-gray-600">
                {member.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
