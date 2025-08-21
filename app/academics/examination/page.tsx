import React from "react";

const examinations = [
  {
    sr: "1",
    date: "03.05.2025 to 14.05.2025",
    day: "Saturday to Tuesday",
    exam: "Periodic Test - I (Nursery to XII)",
    remarks: "During school hours",
  },
  {
    sr: "1",
    date: "15.05.2025",
    day: "Thursday",
    exam: "PTM for Periodic Test - I",
    remarks: "10:00 AM to 1:00 PM",
  },
  {
    sr: "2",
    date: "01.08.2025 to 07.08.2025",
    day: "Friday to Thursday",
    exam: "Periodic Test - II (Nursery to XII)",
    remarks: "During school hours",
  },
  {
    sr: "2",
    date: "24.08.2025",
    day: "Sunday",
    exam: "PTM for Periodic Test - II",
    remarks: "10:00 AM to 1:00 PM",
  },
  {
    sr: "3",
    date: "12.09.2025 to 20.09.2025",
    day: "Friday to Saturday",
    exam: "Half Yearly Exam (Nursery to XII)",
    remarks: "During school hours",
  },
  {
    sr: "3",
    date: "28.09.2025",
    day: "Sunday",
    exam: "PTM for Half Yearly Exam",
    remarks: "10:00 AM to 1:00 PM",
  },
  {
    sr: "4",
    date: "17.11.2025 to 25.11.2025",
    day: "Monday to Tuesday",
    exam: "Periodic Test - III (Nursery to IX & XI) / Pre Board Exam - I (Class X & XII)",
    remarks: "During school hours",
  },
  {
    sr: "4",
    date: "30.11.2025",
    day: "Sunday",
    exam: "PTM for Periodic Test - III & Pre Board Exam - I",
    remarks: "10:00 AM to 1:00 PM",
  },
  {
    sr: "5",
    date: "19.01.2026 to 24.01.2026",
    day: "Monday to Saturday",
    exam: "Periodic Test - IV (Nursery to IX & XI) / Pre Board Exam - II (Class X & XII) / Mock Exam - II (Class X & XII)",
    remarks: "During school hours",
  },
  {
    sr: "5",
    date: "01.02.2026",
    day: "Sunday",
    exam: "PTM for Periodic Test - IV & Pre Board Exam - II",
    remarks: "9:00 AM to 12:00 PM",
  },
  {
    sr: "6",
    date: "16.03.2026 to 25.03.2026",
    day: "Monday to Wednesday",
    exam: "Annual Exam (Nursery to XII)",
    remarks: "During school hours",
  },
  {
    sr: "6",
    date: "28.03.2026",
    day: "Saturday",
    exam: "PTM for Annual Exam",
    remarks: "-",
  },
];

const ExaminationPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
        Examination Schedule 2025-26
      </h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-3 border">Sr. No.</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Day</th>
              <th className="p-3 border">Examination / PTM</th>
              <th className="p-3 border">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {examinations.map((exam, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } hover:bg-yellow-100`}
              >
                <td className="p-3 border text-center">{exam.sr}</td>
                <td className="p-3 border">{exam.date}</td>
                <td className="p-3 border">{exam.day}</td>
                <td className="p-3 border">{exam.exam}</td>
                <td className="p-3 border">{exam.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">
          Board Examinations (Class X & XII)
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Exams will follow the CBSE date sheet (No exemption unless a medical
            emergency with proper certificates).
          </li>
          <li>Exams will not be rescheduled for anyone.</li>
          <li>
            In case of medical leave during tests, up to 40% grace marks may be
            given.
          </li>
          <li>
            Students absent in the Final Exam will not be promoted in any case.
          </li>
          <li>
            <b>Note:</b> No re-exam will be scheduled for any student under any
            circumstances.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExaminationPage;
