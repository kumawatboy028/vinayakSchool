"use client";

import Image from "next/image";

const AdmissionProcedure = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=1W2o3BDQCVMMsTKgpvPm2TxM2AEf6uBmB"
          alt="Admission Procedure - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        {/* Overlay Text */}
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Admission Procedure
            </h1>
          </div>
        </div> */}
      </div>

      {/* Admission Guidelines */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Admission Guidelines
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                Academic Session
              </h3>
              <p className="text-gray-800">
                The academic session is from the{" "}
                <strong>1st April to the 31st March</strong>.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                Registration Requirements
              </h3>
              <p className="text-gray-800">
                <strong>Advanced registration is compulsory</strong> for new
                admission to the school. Admission fee is to be deposited within
                a week of the Admission Test, failing which the admission stands
                cancelled and the seat is declared vacant.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange-700">
                Admission Process
              </h3>
              <p className="text-gray-800">
                It must be noted that{" "}
                <strong>mere registration does not guarantee admission</strong>,
                which will chiefly depend on the combined test given at the time
                of admission. This consists of:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-gray-800">
                <li>
                  <strong>Written Test</strong> in English and Maths to assess
                  the suitability of the pupil for a particular class
                </li>
                <li>
                  <strong>Personality Test</strong>
                </li>
                <li>
                  <strong>Physical-cum-Medical fitness test</strong>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-700">
                Important Note
              </h3>
              <p className="text-gray-800">
                <strong>
                  The School Authority reserves the exclusive right
                </strong>{" "}
                to decide the class to which a pupil can be admitted.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Required */}
      <div className="bg-gray-50 text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Documents Required for Admission
          </h2>

          <div className="grid gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">1</span>
              </div>
              <p className="text-gray-800">
                <strong>Proof of Date of Birth</strong> from the Municipality or
                any other competent authority
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">2</span>
              </div>
              <p className="text-gray-800">
                <strong>Mark sheet</strong> of the previous class
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">3</span>
              </div>
              <p className="text-gray-800">
                <strong>SLC/TC</strong> issued by the school last attended
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">4</span>
              </div>
              <p className="text-gray-800">
                <strong>Migration Certificate</strong>, if any
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">5</span>
              </div>
              <p className="text-gray-800">
                <strong>School/Board Registration Number</strong>, if any
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">6</span>
              </div>
              <p className="text-gray-800">
                <strong>Twelve copies</strong> of the passport-size photographs
                of the child and <strong>one photo each</strong> of the parent
                and the guardian or the person authorised to visit the child on
                their behalf
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">7</span>
              </div>
              <p className="text-gray-800">
                <strong>Medical Certificate</strong> from a qualified doctor to
                certify that the child is medically fit and free from any
                infectious disease
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">8</span>
              </div>
              <p className="text-gray-800">
                <strong>A copy of original Passport with valid Visa</strong>{" "}
                (for NRIs and foreigners)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-600">9</span>
              </div>
              <p className="text-gray-800">
                <strong>Copy of the Residential Permit</strong> (foreign
                passport holders only)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 py-6 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-yellow-600 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">
                Important Note
              </h3>
              <p className="text-yellow-700">
                Particulars of a child will remain the same as mentioned in the
                SLC issued by the previous school according to the{" "}
                <strong>CBSE rules</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcedure;
