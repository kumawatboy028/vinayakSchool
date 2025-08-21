import Image from "next/image";

const RTEAdmission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/rte.jpg"
          alt="Admission Under RTE"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Admission Under RTE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-10">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            About RTE (Right to Education Act)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Right to Education (RTE) Act, 2009 ensures free and compulsory
            education for children belonging to economically weaker and
            disadvantaged sections of society. Under this Act, private schools
            are required to reserve a certain percentage of seats at the entry
            level (Nursery/Grade I) for students eligible under RTE norms.
          </p>
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Eligibility Criteria
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Children belonging to economically weaker sections (EWS).</li>
            <li>
              Children from disadvantaged groups (Scheduled Castes, Scheduled
              Tribes, OBCs, minorities, etc.).
            </li>
            <li>Age: 3 to 6 years (for Nursery/Entry Level Admission).</li>
            <li>
              Residence proof within the defined neighborhood/locality of the
              school.
            </li>
          </ul>
        </div>

        {/* Documents Required */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Documents Required
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Birth Certificate of the child</li>
            <li>Aadhaar Card of the child & parents</li>
            <li>
              Residence Proof (Ration Card / Electricity Bill / Rental
              Agreement)
            </li>
            <li>Caste Certificate (if applicable)</li>
            <li>Income Certificate of parents</li>
            <li>Passport size photographs of child & parents</li>
          </ul>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Application Process
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              Parents must register on the official{" "}
              <a
                href="https://rte.raj.nic.in" // Change link if for another state
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 underline"
              >
                State RTE Portal
              </a>{" "}
              within the admission timeline.
            </li>
            <li>Fill in the application form with correct details.</li>
            <li>Upload necessary documents as per the requirements.</li>
            <li>Submit the application and note the application number.</li>
            <li>
              Shortlisted candidates will be informed by the school/through the
              portal.
            </li>
          </ol>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Need Assistance?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any queries regarding RTE admission, parents can contact the
            school office during working hours or reach us at:
          </p>
          <p className="text-gray-800 font-medium mt-2">
            📞 Phone: +91-9829748121 <br />
            📧 Email: visftr@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default RTEAdmission;
