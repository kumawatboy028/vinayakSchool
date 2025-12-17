import Image from "next/image";

const DigitalWorkstation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            Digital Workstation
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our school provides advanced digital learning infrastructure
            including modern computer labs, smart classrooms, and interactive
            learning resources. We believe in preparing students for the future
            by blending technology with education.
          </p>
        </header>

        {/* Computer Lab Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-blue-800">
              Modern Computer Lab
            </h2>
            <p className="text-gray-600">
              Equipped with the latest computers and high-speed internet, our
              lab enables students to explore coding, multimedia projects, and
              digital creativity under the guidance of trained faculty.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="https://drive.google.com/uc?id=1zrhAdHFbb_rW32dzny7Tcsxst1I1kZMy"
              alt="Students in computer lab"
              width={500}
              height={350}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        </section>

        {/* Smart Classrooms Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-blue-800">
              Smart Classrooms
            </h2>
            <p className="text-gray-600">
              Our smart classrooms are equipped with projectors and digital
              boards to make learning more engaging and effective. Visual aids,
              videos, and interactive sessions help students grasp concepts
              better.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="https://drive.google.com/uc?id=1x0Ry2SFRNboDJAmI9H-61fX4ncO_pxT2"
              alt="Students in smart classroom"
              width={500}
              height={350}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        </section>

        {/* Digital Learning Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-blue-800">
              Digital Learning
            </h2>
            <p className="text-gray-600">
              We integrate e-learning modules, online resources, and virtual
              labs to enhance knowledge. Students actively participate in
              digital workshops that foster creativity and problem-solving
              skills.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="https://drive.google.com/uc?id=1lOkYvgWUcphp6heXLXsFWo5K0Ieqtp8l"
              alt="Students engaged in digital learning"
              width={500}
              height={350}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default DigitalWorkstation;
