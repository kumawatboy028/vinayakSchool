// pages/mandatory-disclosure.tsx
import Image from "next/image";

const disclosures = [
  {
    id: 1,
    title: "General Information",
    items: [
      "Name of the School: Vinayak International School",
      "Affiliation Number: 123456",
      "School Code: 78910",
      "Complete Address: NH-8, Fatehnagar, Rajasthan",
      "Principal: Dr. R.K. Sharma",
      "Contact: +91-9876543210, info@vischool.com",
    ],
  },
  {
    id: 2,
    title: "Documents & Information",
    items: [
      "Affiliation/Upgradation Letter from CBSE",
      "Society/Trust Registration Certificate",
      "No Objection Certificate (NOC) from State Government",
      "Recognition Certificate under RTE Act, 2009",
      "Building Safety Certificate",
      "Fire Safety Certificate",
      "Water, Health and Sanitation Certificates",
    ],
  },
  {
    id: 3,
    title: "Academic Information",
    items: [
      "Fee Structure of the School",
      "Annual Academic Calendar",
      "List of School Management Committee (SMC)",
      "List of Parents Teachers Association (PTA) Members",
      "Last Three-Year Board Results (Class X & XII)",
    ],
  },
];

const MandatoryDisclosure = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/mandatory-disclosure.jpg"
          alt="Mandatory Public Disclosure"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Mandatory Public Disclosure
          </h1>
        </div>
      </div>

      {/* Disclosure Sections */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-10">
        {disclosures.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              {section.title}
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MandatoryDisclosure;
