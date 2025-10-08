"use client";

import Image from "next/image";

const ChairmanMessage = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/heroBanner/schoolOverview.jpg"
          alt="From the Desk of Chairman"
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
              {`Chairman's`} Message
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-10 pb-12 px-4">
        {/* Image positioned to the left */}
        <div className="float-left mr-6 mb-4">
          <div className="w-56 h-72 rounded-lg shadow-lg relative overflow-hidden bg-gray-200">
            <Image
              src="/images/authorities/chairman.jpg"
              alt="Mahesh Kumar Sharma - Chairman of Vinayak International School"
              fill
              className="object-cover object-center"
              priority
              sizes="250px"
            />
          </div>
        </div>

        {/* Content that flows around the image */}
        <div className="text-base md:text-lg text-gray-800 text-justify space-y-4 leading-relaxed">
          <p>
            <strong>
              Education to me is about
              {`"learning for self and acquiring the
              wisdom of life."`}
            </strong>
          </p>
          <p>
            With the advent of technology, as we move into a boundary-less and
            inter-connected world, the common phrase {`"sky is the limit"`}{" "}
            seems a bit of a cliché, since the quantum of success has grown
            manifold. With success comes the attitude towards preparing the
            mind-set for excellence.
          </p>
          <p>
            Excellence can be achieved in various fields depending on the
            {`child's`} capacities and capabilities. The syllabus must be
            enriched by incorporating good pedagogy and integrated programs to
            create learning experiences and right interpretation of facts.{" "}
            <strong>
              Experiential learning, to me, is the key to quality education.
            </strong>
          </p>
          <p>
            The school curriculum is oriented to bolster the physical,
            emotional, social and cultural needs of the student. A strong
            requirement today is to simultaneously weave a firm moral fiber in
            the {`student's`} personality. The key to this goal is to pursue a
            value-based education process.
          </p>
          <p>
            The practice of value-oriented process acts as a nucleus around
            which all our school activities revolve. We are very conscious of
            the fact that emotional stability plays a very significant role in
            the healthy growth of a child. One of the important tools to achieve
            this is through more interaction and one-to-one rapport with our
            children.
          </p>
          <p>
            This open and interactive approach also helps in discovering and
            strengthening inherent talent in the students. All our school
            activities are based on a participatory spirit that reduces the
            inhibition levels of the students and thus assists them in becoming
            aware of their potential.
          </p>
          <p>
            The school atmosphere evokes a team spirit amongst the students and
            teachers with a conviction that {`"we can do it."`} All our
            endeavors constantly inspire us to achieve greater heights. We
            promote the joy and excitement of learning and also enjoy the
            pleasure of our achievements.
          </p>

          {/* Clear float and add signature */}
          <div className="clear-both pt-6 text-right">
            <p className="font-bold">
              Mahesh Kumar Sharma
              <br />
              <span className="font-normal text-gray-600 text-sm">
                Chairman
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
