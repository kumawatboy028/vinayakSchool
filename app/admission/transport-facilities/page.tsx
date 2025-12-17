"use client";

import Image from "next/image";

const TransportFacilities = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=1piJzuAvBJxpJ2QZoqAx5g-2QBKybOVOL"
          alt="Transport Facilities - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Transport Facilities
            </h1>
          </div>
        </div>
      </div>

      {/* Transport Services */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Transportation Services
          </h2>

          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 text-blue-700">
                School Fleet Management
              </h3>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                <strong>
                  The School manages its own fleet of new vehicles
                </strong>{" "}
                for bringing provisions for the hostels. The vehicles are also
                used in case of any emergency. We have adequate luxurious fleet
                of School buses too, for the to-and-fro transportation of
                students from the notified areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transport Features */}
      <div className="bg-gray-50 text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Transport Features & Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-green-700">
                    New Vehicle Fleet
                  </h3>
                </div>
                <p className="text-gray-700">
                  Modern, well-maintained vehicles ensure safe and comfortable
                  transportation for all students.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-700">
                    Luxurious Comfort
                  </h3>
                </div>
                <p className="text-gray-700">
                  Adequate luxurious fleet of school buses providing comfortable
                  seating and smooth rides.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-purple-700">
                    Notified Areas Coverage
                  </h3>
                </div>
                <p className="text-gray-700">
                  To-and-fro transportation service available for students from
                  designated pickup points and notified areas.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-red-700">
                    Emergency Services
                  </h3>
                </div>
                <p className="text-gray-700">
                  Dedicated vehicles available for emergency situations,
                  ensuring immediate response when needed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-orange-700">
                    Hostel Provisions
                  </h3>
                </div>
                <p className="text-gray-700">
                  School-managed transportation for bringing essential
                  provisions and supplies for hostel facilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-teal-700">
                    Safety & Reliability
                  </h3>
                </div>
                <p className="text-gray-700">
                  School-managed fleet ensures complete control over safety
                  standards and reliable service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportFacilities;
