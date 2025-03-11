import React from "react";
function Why() {
  return (
    // bg-gradient-to-b from-[#C6EA8D] to-[#FE90AF]
    <div className="">
      <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[100px] md:h-[220px] lg:h-[300px] custom-bg-position bg-gradient-to-b from-[#FF512F] to-[#DD2476]"
        style={{
          backgroundImage: "url('/images/background_1.jpg')",
          //   backgroundPosition: "center top -340px",
          "background-size": "contain",
        }}
      >
        <style jsx>
          {`
            @media (max-width: 640px) {
              .custom-bg-position {
                background-position: center top -10px !important;
              }
            }
            @media (min-width: 768px) {
              .custom-bg-position {
                background-position: center top -160px !important;
              }
            }
            @media (min-width: 1024px) {
              .custom-bg-position {
                background-position: center top -190px !important;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black opacity-[0.5]"></div>
      </div>
      <div className="bg-white">
        <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-10">
          Why Choose US?
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 px-4 md:px-10 pb-[80px]">
          <div className="flex flex-col">
            <div
              className={`text-black text-[18px] font-cinzel  my-[40px] text-justify flex md:gap-5 flex-col transition-all duration-300`}
            >
              Established on 17th March 2017, Arohan  Higher Secondary School is
              a leading institution dedicated to academic excellence in CBSE &
              CHSE +2 Science, IIT-JEE, and NEET preparation. Our expert faculty
              ensures strong conceptual clarity in Physics, Chemistry,
              Mathematics, and Biology, equipping students with the knowledge
              and confidence to excel in board and competitive exams.
              <br />
              <br />
              We provide a student-centric learning approach, offering
              personalized mentoring, regular doubt-clearing sessions, and
              structured assessments to track progress. Our technology-driven
              teaching methods, including smart classrooms and AI-based test
              analysis, make learning interactive and effective. With
              comprehensive study materials, daily practice questions, and
              full-length mock tests, students develop in-depth subject mastery
              and exam confidence.
              <br />
              <br />
              At Arohan , we foster a disciplined and goal-oriented environment
              where students not only achieve academic success but also develop
              problem-solving skills, logical reasoning, and analytical
              thinking. Our commitment to consistent improvement and
              result-driven strategies has helped numerous students secure top
              ranks in board exams and competitive entrance tests.
              <br />
              <br />
              With a proven track record of success, Arohan  Higher Secondary
              School is the ideal choice for students striving for excellence.
              Your success is our mission!
              <br />
              <br />
              {/* <span className="text-[#ff3737]">Read More</span> */}
            </div>
          </div>
          <div className=" my-[20px] md:-mr-[14px] order-first">
            <img
              src="/images/facility2.jpg"
              className="w-[93%] h-[93%] rounded-[10px] my-auto shadow-md shadow-gray-300 mt-[1.5vw] mx-auto"
              alt="pic not load"
            />
          </div>
        </div>
      </div>
      {/* <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[280px] custom-bg-position1"
        style={{
          backgroundImage: "url('/images/background2.jpg')",
          "background-size": "contain",
        }}
      >
        <style jsx>
          {`
            @media (max-width: 640px) {
              .custom-bg-position1 {
                background-position: center top 30px !important;
              }
            }
            @media (min-width: 768px) {
              .custom-bg-position1 {
                background-position: center top -80px !important;
              }
            }
            @media (min-width: 1024px) {
              .custom-bg-position1 {
                background-position: center top -130px !important;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black opacity-[0.5]"></div>

      </div> */}
    </div>
  );
}

export default Why;
