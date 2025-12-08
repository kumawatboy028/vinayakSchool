"use client";

import Image from "next/image";

const SchoolTiming = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero */}
      <div className="relative w-full h-[350px]">
        <Image
          src="/images/heroBanner/school-timing.png"
          alt="School Timing - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">School Timing</h1>
            <p className="mt-2 text-sm md:text-base opacity-90">
              Organized schedules for a productive learning environment
            </p>
          </div>
        </div> */}
      </div>

      {/* Intro + Time Highlights */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-justify text-base md:text-lg leading-relaxed">
            Our school is committed to ensuring an organized and productive
            learning environment. Comprehensive scheduling allows both students
            and teachers to make the most of each school day.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Students Highlight */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                For Students
              </h3>
              <p className="text-2xl font-semibold text-blue-700">
                🕢 7:30 AM – 1:10 PM
              </p>
            </div>
            {/* Teachers Highlight */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-800 mb-2">
                For Teachers
              </h3>
              <p className="text-2xl font-semibold text-green-700">
                🕖 7:10 AM – 2:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timing Table */}
      <div className="bg-gray-50 text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Daily Schedule
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b font-semibold">Category</th>
                  <th className="p-3 border-b font-semibold">Arrival Timing</th>
                  <th className="p-3 border-b font-semibold">
                    Departure Timing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-white">
                  <td className="p-3 font-medium">Students</td>
                  <td className="p-3">7:30 AM</td>
                  <td className="p-3">1:10 PM</td>
                </tr>
                <tr className="hover:bg-white">
                  <td className="p-3 font-medium">Teachers</td>
                  <td className="p-3">7:10 AM</td>
                  <td className="p-3">2:30 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Guidance Section */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Guidance for Students and Parents
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">
                Morning Arrival
              </h3>
              <p className="leading-relaxed">
                Students are encouraged to arrive a few minutes before 7:30AM to
                settle in, organize belongings, and be ready to start learning
                as the first bell rings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-green-700 mb-2">
                Punctuality Matters
              </h3>
              <p className="leading-relaxed">
                Being on time helps students develop discipline, reduces
                classroom disruptions, and allows every lesson to begin
                promptly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-purple-700 mb-2">
                Supervision
              </h3>
              <p className="leading-relaxed">
                Teachers arrive by 7:10AM to ensure all necessary arrangements
                are in place and to supervise students as they enter campus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Departure
              </h3>
              <p className="leading-relaxed">
                Students are dismissed at 1:10PM, while teachers remain until
                2:30 PM for post-class preparations, meetings, and student
                support when needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="bg-gray-50 text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Additional Notes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">
                Extracurricular Activities
              </h3>
              <p className="leading-relaxed">
                Any special programs, club meetings, or sports practices that
                occur outside regular hours will be notified in advance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-red-700 mb-2">
                Safety First
              </h3>
              <p className="leading-relaxed">
                Parents should arrange timely pickup for students and ensure
                transportation is in sync with dismissal times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-teal-700 mb-2">
                Access to Staff
              </h3>
              <p className="leading-relaxed">
                The extended hours for teachers (until 2:30PM) provide time for
                students or parents to consult with teachers when necessary.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-base md:text-lg leading-relaxed">
              A well-structured timetable ensures our school community operates
              smoothly, promotes responsibility, and upholds a nurturing
              environment for learning and growth. Please ensure students arrive
              on time and are ready for a day of learning and growth!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTiming;
