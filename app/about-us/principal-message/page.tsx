"use client";

import Image from "next/image";

const PrincipalMessage = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="From the Desk of Principal"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              From the Desk of Principal
            </h1>
          </div>
        </div>
      </div>

      {/* Principal Bio Section */}
      <div className="bg-gray-50 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
            <strong>Dr. Anant Sharma</strong> is the Principal of
            <strong>Vinayak International School</strong>, Dist-Sikar,
            Rajasthan. Honorary Mentor Educator for Books2Biz certificate
            research program of Podar Enterprises. Archaic Editor cum Content
            Writer for some well-known publications.
            <strong>Dr. Anant Sharma</strong> holds a B.Sc., B.Ed., M.Sc., Ph.D.
            in Biotechnology, NET & MBA in Human Resource Management, Masters in
            English, M.Com., NET in management and CTET. His educational
            background and skills impart knowledge to learners by using modern
            and traditional approaches to developing their knowledge and skills.
            With over 16 years of experience, in the past, he held various roles
            in academia including that of a School Principal, University
            Proctor, Training & Placement Officer, Deputy Controller of
            Examination, HOD, Assistant Professor, Assistant Registrar, Lecturer
            and School teacher. He has also various research papers published in
            International and National Journals and has also presented and
            published papers in UGC, CSIR, and DST-sponsored International &
            National Conferences. He is also a member of the Editorial Board for
            the International Journal for Management & Technology Research.
            Besides this, he is keenly interested to guide students in all
            manners so he started writing as an author in 2009 and published
            some books also that are available on all offline and online
            platforms.
          </p>
        </div>
      </div>

      {/* Message Section with Image */}
      <div className="bg-white py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Image */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-80 rounded-lg shadow-lg relative overflow-hidden bg-gray-200">
                <Image
                  src="/images/authorities/principal.jpg"
                  alt="Dr. Anant Sharma - Principal of Vinayak International School"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="250px"
                />
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="flex-1 space-y-4 text-base md:text-lg text-gray-800 text-justify leading-relaxed">
              <p className="font-semibold text-lg">Dear Parents,</p>
              <p>
                The world is moving at a very fast pace and each and everyone
                has to keep up with the pace and adapt to change to the best of
                their abilities. Millennials, children of this age have moved
                from the Virtual world to Artificial Intelligence. They are
                bridging the gap between the Age of Knowledge and the Age of
                Information. Online classes are one of the greatest tools in the
                modern era of teaching.
              </p>
              <p>
                Activities are a significant part of the school curriculum and
                they are integrated into the School Curriculum and are done
                within the regular school time. This brings about a balance in
                both academics and activities. Students are given the option and
                the opportunity to participate in an activity of their choice
                for a term. Once they get a certificate of proficiency they move
                to some other activity where they can hone their skills further.
              </p>
            </div>
          </div>

          {/* Continue message below */}
          <div className="mt-6 space-y-4 text-base md:text-lg text-gray-800 text-justify leading-relaxed">
            <p>
              Today Schools are teaching students the skills to be able to
              accept change. The future is in the hands of those who can adapt
              to change. Research today states that in the future some
              professions from the past will become obsolete and there will be
              professions in the future that we have not thought or imagined of.
            </p>
            <p>
              Thus Education Today is transforming and moving ahead and the
              challenges are manifold. Schools in the present are not about rote
              learning and compartmentalized subjects and assessment of
              retention but all about collaboration, and skill development.
              Knowledge is good, as long as one has the skill to use it for the
              benefit of mankind. We use their interactive and
              experiential-based learning publications in all grades. Teachers
              are selected on the basis of their expertise, experience, and
              ability to use the Interactive Smart Classes with Whiteboard and
              Online Classes. Apart from this regular training is conducted to
              ensure that the students get the best. The Lesson Plans are
              designed to help the teachers understand and educate the students
              with the Six Learning Results of the {`School's`} Vision and
              Mission. Apart from the regular Learning outcomes and the
              differentiated teaching that goes on in the class. Vinayak
              International School is unique because of the above aspect of
              collaboration which is one of the major characteristics of the
              education of the future.
            </p>

            {/* Signature */}
            <div className="pt-6 text-right">
              <p className="font-bold">
                Dr. Anant Sharma
                <br />
                <span className="font-normal text-gray-600 text-sm">
                  Principal
                </span>
                <br />
                <span className="font-normal text-gray-600 text-sm">
                  Ph.D., NET-MBA, M.Sc., M.Com., M.A., B.Ed. & CTET
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
