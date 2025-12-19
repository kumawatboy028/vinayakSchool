"use client";

import Image from "next/image";

const SchoolFees = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="School Fees - Vinayak International School"
          fill
          className="object-revert object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">School Fees</h1>
          </div>
        </div>
      </div>

      {/* Fee Payment Schedule */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Fee Payment Schedule
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-700">
              Payment Timing & Method
            </h3>
            <p className="text-gray-800 mb-4">
              Fees are to be deposited in{" "}
              <strong>
                2 installments by 2:00 pm on the working days only.
              </strong>{" "}
              The details are as follows:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">
                      Quarter
                    </th>
                    <th className="border border-gray-300 p-3 text-left font-bold">
                      Months
                    </th>
                    <th className="border border-gray-300 p-3 text-left font-bold">
                      Last Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      First
                    </td>
                    <td className="border border-gray-300 p-3">
                      April - September
                    </td>
                    <td className="border border-gray-300 p-3 font-semibold text-red-600">
                      April - 15
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">
                      Second
                    </td>
                    <td className="border border-gray-300 p-3">Oct - March</td>
                    <td className="border border-gray-300 p-3 font-semibold text-red-600">
                      Oct - 15
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Policies */}
      <div className="bg-gray-50 text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Fee Policies & Guidelines
          </h2>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-green-600">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-green-700">
                    Additional Expenses
                  </h3>
                  <p className="text-gray-800">
                    Expenses on clothes, books, stationery, maintenance of
                    personal belongings, transport facilities, participation in
                    extra-curricular activities, etc will be{" "}
                    <strong>exclusively borne by parents</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-blue-600">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-blue-700">
                    Payment Methods
                  </h3>
                  <p className="text-gray-800">
                    Fees can be paid in{" "}
                    <strong>cash or through a D.D. /an A/C payee cheque</strong>{" "}
                    drawn in favour of the Chairman.{" "}
                    <strong>
                      Fee once deposited is neither refunded nor adjusted in any
                      case
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-purple-600">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-purple-700">
                    Hostel Pocket Allowance
                  </h3>
                  <p className="text-gray-800">
                    A minimum pocket allowance of <strong>Rs. 1500/-</strong>{" "}
                    has to be deposited at the time of admission in the Bank by
                    the parents for the children who stay in the hostels.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-orange-600">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-orange-700">
                    Fee Charging Period
                  </h3>
                  <p className="text-gray-800">
                    <strong>
                      Fees are charged from April irrespective of the date of
                      admission
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-teal-600">7</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-teal-700">
                    Payment Receipt
                  </h3>
                  <p className="text-gray-800">
                    Parents should{" "}
                    <strong>collect the receipt for every payment</strong> of
                    fee and other miscellaneous charges they make over the fee
                    counter or elsewhere on the school campus.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-indigo-600">8</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-indigo-700">
                    Security & Insurance
                  </h3>
                  <p className="text-gray-800">
                    <strong>
                      The School fee does not include any refundable security or
                      insurance
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annual Fee Structure */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-800">
            Annual Fee Structure
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold mb-3 text-yellow-700">
                Hostel Fee Policy
              </h3>
              <p className="text-gray-800">
                <strong>
                  The school hostel fee will be charged for the entire span of
                  twelve months
                </strong>{" "}
                irrespective of the date of admission to the school.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold mb-3 text-yellow-700">
                Annual Fee Collection
              </h3>
              <p className="text-gray-800 mb-3">
                The school, hostel and transport fees are{" "}
                <strong>
                  charged for the entire span of twelve months but realized in
                  four quarterly installments
                </strong>
                .
              </p>
              <p className="text-gray-800 font-semibold">
                If a child stops availing hostel/transport facilities in between
                a session, he/she will have to{" "}
                <strong>pay fee for the whole year</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Reminders */}
      <div className="bg-red-50 border-l-4 border-red-400 py-6 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-red-600 mt-1"
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
              <h3 className="text-lg font-bold text-red-800 mb-2">
                Important Reminders
              </h3>
              <ul className="text-red-700 space-y-2 list-disc list-inside">
                <li>
                  Fee payment deadline:{" "}
                  <strong>2:00 PM on working days only</strong>
                </li>
                <li>
                  <strong>No refund or adjustment</strong> of fees under any
                  circumstances
                </li>
                <li>Always collect and preserve fee payment receipts</li>
                <li>
                  Annual fees apply regardless of mid-session discontinuation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolFees;
