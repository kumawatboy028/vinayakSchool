"use client";

import Image from "next/image";

const SchoolAffiliationDetails = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero */}
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/school-hero.jpg"
          alt="School Affiliation Details - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Affiliation Details
            </h1>
            <p className="mt-2 text-sm md:text-base opacity-90">
              Central Board of Secondary Education (CBSE)
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white text-gray-800 py-10 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-justify text-base md:text-lg leading-relaxed">
            Vinayak International School, located in Sikar, Rajasthan, is a{" "}
            <span className="font-semibold">Senior Secondary institution</span>{" "}
            affiliated with the Central Board of Secondary Education (CBSE).
            Established in <span className="font-semibold">2010</span>, the
            school is managed by{" "}
            <span className="font-semibold">New Vinayak Shiksha Samiti</span>,
            and is recognized for its dedicated faculty, structured curriculum,
            and strong leadership.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white text-gray-800 py-10 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Detailed Affiliation Information
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
            <table className="w-full text-left table-auto">
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-semibold w-1/3">
                    Name of Institution
                  </td>
                  <td className="p-3">Vinayak International School</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Affiliation Number</td>
                  <td className="p-3">1730512</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">State</td>
                  <td className="p-3">Rajasthan</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">District</td>
                  <td className="p-3">Sikar</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Postal Address</td>
                  <td className="p-3">Near Do Janti Balaji, Sikar</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Pin Code</td>
                  <td className="p-3">332301</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Website</td>
                  <td className="p-3">
                    <a
                      href="https://www.visftr.com"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      www.visftr.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Date of First Opening</td>
                  <td className="p-3">01 Apr 2010</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">
                    Principal Qualifications
                  </td>
                  <td className="p-3">M.Sc, B.Ed</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Experience</td>
                  <td className="p-3">6 years (Admin), 17 years (Teaching)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">School Status</td>
                  <td className="p-3">Senior Secondary Level</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Type</td>
                  <td className="p-3">Independent</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Affiliation Period</td>
                  <td className="p-3">01/04/2022 - 31/03/2027</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Managing Trust</td>
                  <td className="p-3">New Vinayak Shiksha Samiti</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="bg-blue-50 text-gray-800 py-10 px-4 md:px-10 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg leading-relaxed">
            Vinayak International School remains committed to delivering{" "}
            <span className="font-semibold">quality education</span> while
            upholding CBSE standards. The affiliation reflects our dedication to
            nurturing academic excellence, discipline, and holistic student
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SchoolAffiliationDetails;
