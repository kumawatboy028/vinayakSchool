import React from "react";

const Houses = () => {
  const houses = [
    {
      name: "Ashoka House",
      color: "bg-red-100",
      border: "border-red-500",
      titleColor: "text-red-600",
      description:
        "Named after Emperor Ashoka, renowned for his transformation from a conqueror to a messenger of peace and moral leadership. Members of Ashoka House are encouraged to embody leadership, resilience, and compassion, fostering harmony and inclusiveness within the school community.",
    },
    {
      name: "Raman House",
      color: "bg-blue-100",
      border: "border-blue-500",
      titleColor: "text-blue-600",
      description:
        "Inspired by Nobel Laureate C.V. Raman, this house celebrates scientific inquiry and a thirst for knowledge. Raman House students are motivated to pursue intellectual brilliance, curiosity, and a spirit of discovery, aiming for excellence in both academics and extracurricular pursuits.",
    },
    {
      name: "Tagore House",
      color: "bg-yellow-100",
      border: "border-yellow-500",
      titleColor: "text-yellow-600",
      description:
        "Taking inspiration from the visionary poet Rabindranath Tagore, this house values creativity, critical thinking, and holistic development. Tagore House cultivates artistic talent, cultural appreciation, and a quest for wisdom, encouraging students to express themselves and think beyond boundaries.",
    },
    {
      name: "Shivaji House",
      color: "bg-green-100",
      border: "border-green-500",
      titleColor: "text-green-600",
      description:
        "Named after the legendary warrior Chhatrapati Shivaji Maharaj, this house represents valor, honest leadership, and determination. Shivaji House members are inspired to stand for justice, take initiative, and act with integrity, upholding the school’s tradition of courage and ethical conduct.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          School House System
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our school encourages a spirit of healthy competition, leadership, and
          camaraderie through its House system. Each student and staff member
          belongs to one of our four distinguished Houses, each named after a
          figure who exemplifies excellence and inspires us to pursue greatness.
          The Houses come together for academics, sports, cultural events, and
          community service, shaping well-rounded leaders for tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {houses.map((house, index) => (
          <div
            key={index}
            className={`${house.color} border-l-8 ${house.border} rounded-xl p-6 shadow-md`}
          >
            <h2 className={`text-2xl font-semibold ${house.titleColor} mb-3`}>
              {house.name}
            </h2>
            <p className="text-gray-700">{house.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          The House Spirit
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Through inter-house competitions and collaborative projects, our House
          system strengthens school spirit, teamwork, and personal growth. Each
          House takes pride in its achievements and displays unwavering support
          for fellow members, making school life vibrant and memorable.
        </p>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Join your House, wear your colors with pride, and strive for
          greatness—together as one school community!
        </p>
      </div>
    </div>
  );
};

export default Houses;
