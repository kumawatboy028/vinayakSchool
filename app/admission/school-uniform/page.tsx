"use client";

import Image from "next/image";

const SchoolUniform = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero */}
      <div className="relative w-full h-[350px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="School Uniform Guidelines - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              School Uniform (L.K.G to XII)
            </h1>
            <p className="mt-2 text-sm md:text-base opacity-90">
              Regular & Winter Uniform
            </p>
          </div>
        </div>
      </div>

      {/* Regular Uniform */}
      <div className="bg-white text-gray-800 py-10 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Regular Uniform (Mon, Tue, Thu & Fri)
          </h2>

          {/* Two-column cards for Girls/Boys */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-blue-800">
                For Girls
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Sky Blue Shirt / Sky Blue Kurta</li>
                <li>Blue Skirts / Blue Salwar / Blue Trouser</li>
                <li>Blue Socks</li>
                <li>Black plain leather shoes</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3 text-green-800">
                For Boys
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Sky Blue Shirt</li>
                <li>Blue Trouser</li>
                <li>Black socks</li>
                <li>Black plain leather shoes</li>
              </ul>
            </div>
          </div>

          {/* PT Days */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
              PT Days (Wed & Sat)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-lg font-bold mb-3 text-purple-800">
                  For Girls
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li>T-Shirts & socks (Blue Colour)</li>
                  <li>White Skirts / White Trouser</li>
                  <li>White P.T. Shoes</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="text-lg font-bold mb-3 text-orange-800">
                  For Boys
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li>T-Shirts & socks (Blue Colour)</li>
                  <li>White Trouser</li>
                  <li>White P.T. Shoes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winter Uniform */}
      <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Winter Uniform (All Students)
          </h2>

          {/* Winter – Mon/Tue/Thu/Fri and Wed/Sat as cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                Mon, Tue, Thu & Fri
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Blue With White Line Pullover</li>
                <li>Blue Warm Cap</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                Wed & Sat
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Blue Blazer</li>
                <li>Blue Warm Cap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-800">
            Important
          </h2>
          <ul className="list-disc list-inside space-y-2 text-yellow-800">
            <li>
              School belt is compulsory for all students in summer and winter.
            </li>
            <li>
              School tie is compulsory for boys on all days in summer and winter
              except on Wednesday & Saturday.
            </li>
            <li>
              For girls, school tie is compulsory with Shirt & Skirts / Trouser.
            </li>
          </ul>
        </div>
      </div>

      {/* Compact Tables (responsive) */}
      <div className="bg-white text-gray-800 py-10 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Quick Reference Tables
          </h2>

          {/* Regular Days Table */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Regular Days (Mon, Tue, Thu & Fri)
            </h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left table-auto">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="p-3 border-b">Category</th>
                    <th className="p-3 border-b">Items</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold">Girls</td>
                    <td className="p-3">
                      Sky Blue Shirt / Sky Blue Kurta; Blue Skirts / Blue Salwar
                      / Blue Trouser; Blue Socks; Black plain leather shoes
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold">Boys</td>
                    <td className="p-3">
                      Sky Blue Shirt; Blue Trouser; Black socks; Black plain
                      leather shoes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PT Days Table */}
          <div>
            <h3 className="text-xl font-bold mb-3">PT Days (Wed & Sat)</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left table-auto">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="p-3 border-b">Category</th>
                    <th className="p-3 border-b">Items</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold">Girls</td>
                    <td className="p-3">
                      T-Shirts & socks (Blue Colour); White Skirts / White
                      Trouser; White P.T. Shoes
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold">Boys</td>
                    <td className="p-3">
                      T-Shirts & socks (Blue Colour); White Trouser; White P.T.
                      Shoes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Winter Table */}
          <div>
            <h3 className="text-xl font-bold mb-3">Winter (All Students)</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left table-auto">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="p-3 border-b">Days</th>
                    <th className="p-3 border-b">Items</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold">Mon, Tue, Thu & Fri</td>
                    <td className="p-3">
                      Blue With White Line Pullover; Blue Warm Cap
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold">Wed & Sat</td>
                    <td className="p-3">Blue Blazer; Blue Warm Cap</td>
                  </tr>
                </tbody>
              </table>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolUniform;
