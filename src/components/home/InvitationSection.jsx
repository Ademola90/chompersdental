const InvitationSection = () => {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            We invite our patients to stop by the facility for a tour and to
            meet our friendly staff.
          </h2>
          <p className="text-xl mb-8">
            Schedule an Appointment with Richmond, BC Family Dentist
          </p>
          <p className="mb-8">
            Our Family Dental Clinic is based in Steveston, Richmond, British
            Columbia. We have patients visiting us from Richmond, Tsawwassen,
            Delta, Surrey, Burnaby, Vancouver, and Point Roberts, British
            Columbia.
          </p>
          <a
            href="/schedule"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
