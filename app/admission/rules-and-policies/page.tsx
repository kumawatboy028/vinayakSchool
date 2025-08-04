"use client";

import Image from "next/image";

const SchoolRulesAndPolicies = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/rules-policies-hero.jpg"
          alt="School Rules and Policies - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              School Rules & Policies
            </h1>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-[#f4e5a5] text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Code of Conduct
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
            At <strong>Vinayak International School</strong>, we believe that a
            structured environment with clear guidelines helps students develop
            discipline, responsibility, and respect for others. The following
            rules and policies ensure a conducive learning atmosphere for all.
          </p>
        </div>
      </div>

      {/* Student Conduct Rules */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Student Conduct & Discipline
          </h2>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-blue-700">
                    Regular Attendance in Uniform
                  </h3>
                  <p className="text-gray-800">
                    The student should come to school regularly in uniform.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-green-700">
                    High Standard of Discipline
                  </h3>
                  <p className="text-gray-800">
                    Student should maintain a high standard of discipline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-purple-700">
                    Cleanliness & Grooming
                  </h3>
                  <p className="text-gray-800">
                    Students should be habitually clean and always neatly
                    dressed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-orange-700">
                    Term Commencement
                  </h3>
                  <p className="text-gray-800">
                    They are required to join the school on the notified day at
                    the beginning of the term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disciplinary Actions */}
      <div className="bg-[#f4e5a5] border-l-4 border-red-400 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-800">
            Disciplinary Actions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-bold mb-3 text-red-700">
                Grounds for Immediate Expulsion
              </h3>
              <p className="text-gray-800 mb-3">
                <strong>
                  Immorality, insubordination, ragging, stealing, contempt of
                  authority or breaking bounds
                </strong>{" "}
                are sufficient reasons for immediate expulsion of the student
                from the school.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-bold mb-3 text-red-700">
                Absence Policy
              </h3>
              <p className="text-gray-800">
                <strong>
                  Absence from the school over a period of ten days without
                  acknowledged intimation
                </strong>{" "}
                can lead to the automatic expulsion of the student on
                disciplinary ground.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-bold mb-3 text-red-700">
                Final Authority
              </h3>
              <p className="text-gray-800">
                <strong>
                  The decision of the Principal shall be final and binding
                </strong>{" "}
                on the parents/guardian/student in case of any dispute.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Property & Financial Policies */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Property & Financial Policies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-bold mb-3 text-yellow-700">
                School Property Care
              </h3>
              <p className="text-gray-800">
                Care must be taken of all school property and no student should
                scratch, spoil or damage the furniture.{" "}
                <strong>
                  Any damage done will be made good by the one who does it.
                </strong>
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-bold mb-3 text-blue-700">
                Fee Refund Policy
              </h3>
              <p className="text-gray-800">
                In the event of the child being withdrawn from the school for
                the reason whatsoever,{" "}
                <strong>
                  the fee paid to the school shall not be refunded in any case.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Withdrawal Policies */}
      <div className="bg-[#f4e5a5] text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Withdrawal Procedures
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-lg font-bold text-indigo-600">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-indigo-700">
                    Notice Period
                  </h3>
                  <p className="text-gray-800">
                    <strong>One {`month's`} notice is required</strong> for the
                    withdrawal of the student.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-lg font-bold text-indigo-600">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-indigo-700">
                    Transfer Certificate
                  </h3>
                  <p className="text-gray-800">
                    <strong>
                      Transfer certificate (T.C) on withdrawal is issued only
                      after all the school dues are cleared
                    </strong>{" "}
                    by the parent/guardian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-white text-white py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            Commitment to Excellence
          </h2>
          <p className="text-lg mb-6 text-gray-800">
            These rules and policies are designed to maintain a safe,
            respectful, and productive learning environment for all students at
            Vinayak International School.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-blue-700">
              For any clarifications or concerns
            </p>
            <p className="text-lg text-gray-800">
              Please contact the school administration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolRulesAndPolicies;
