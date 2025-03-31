const CommitmentItem = ({ text }) => (
  <li className="flex items-start">
    <div className="bg-green-600 rounded-full p-1 mr-3 mt-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <span className="text-gray-700">{text}</span>
  </li>
);

const CommitmentSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
              Our Commitment to the Patient and Environment
            </h2>
          </div>
          {/* <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#F67F23] mb-6 text-center">
            
          </h2> */}
          <p className="text-gray-600 mb-10 text-center text-lg">
            We have made all attempts to Go Green without compromising the
            safety of our patients while making it an ergonomic environment for
            our staff by implementing state of the art technology.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                <CommitmentItem text="Digital imaging (x-rays) reduces radiation by as much as 60-80%." />
                <CommitmentItem text="Energy efficient lighting and eco friendly plumbing." />
                <CommitmentItem text="All instruments are sterilized using the Sterilization Management System." />
                <CommitmentItem text="Intra-oral cameras let us show you what we are looking at in your mouth." />
                <CommitmentItem text="Ergonomically designed Treatment Centers provide patients with optimal comfort during treatment." />
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                <CommitmentItem text='Digital records – "paperless"' />
                <CommitmentItem text="Internal flushing system to keep biofilm to a minimum." />
                <CommitmentItem text="Velscope – Cancer Screening." />
                <CommitmentItem text="Dry Vacuum system reduces water wastage." />
                <CommitmentItem text="Biolase Laser – Oral surgical procedures." />
                <CommitmentItem text="Laser Bleaching." />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
