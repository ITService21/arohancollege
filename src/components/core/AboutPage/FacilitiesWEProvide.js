import React from "react";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaTheaterMasks,
  FaSmile,
  FaSchool,
  FaUsers,
  FaLaptopCode,
  FaRegQuestionCircle,
} from "react-icons/fa";

const Facilities = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[300px] custom-bg-position bg-gradient-to-b from-[#FF512F] to-[#DD2476]"
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
      {/* Content */}
      <div className="facilities bg-gradient-to-b from-[#C6EA8D] to-[#E2D1C3] rounded-lg shadow-lg  mx-auto p-3 pb-[80px]">
        <h2 className="text-[#da2424] text-[28px] md:text-[38px] lg:text-[42px] font-rubik-vinyl font-bold text-center pt-4 md:pt-8  tracking-wider">
        Empowering Students for Success
        </h2>
        {/* Image content */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:gap-6 lg:gap-10 px-6 md:px-10 mt-8 md:mt-12">
          <img
            src="/images/why.jpg"
            className="rounded-[10px] object-cover h-[300px] w-full"
            alt="img not load"
          />
          <img
            src="/images/facility1.jpg"
            className="rounded-[10px] object-cover h-[300px] w-full hidden md:block"
            alt="img not load"
          />
          <img
            src="/images/facility2.jpg"
            className="rounded-[10px] object-cover h-[300px] w-full hidden md:block"
            alt="img not load"
          />
        </div>

        <ul className="space-y-6 mt-6 md:pl-6 lg:pl-8">
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className="pt-1">
                  <FaChalkboardTeacher className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Academic Rigor
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Our curriculum is designed to challenge students, fostering critical thinking and deep understanding. With a strong emphasis on conceptual clarity, our students consistently achieve outstanding results in board exams and competitive entrance tests.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className="pt-1">
                  <FaUserGraduate className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Experienced Teachers
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    We have a team of highly qualified and passionate educators who are committed to guiding students toward excellence. Our teachers focus on personalized learning, ensuring that every student receives the support they need to succeed.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className="pt-1">
                  <FaTheaterMasks className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Holistic Development
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Beyond academics, we encourage students to explore their talents through extracurricular activities such as sports, arts, debates, and community service. This approach helps in developing well-rounded individuals with strong leadership and teamwork skills.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className="pt-1">
                  <FaSmile className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Positive Learning Environment
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    We prioritize a supportive and inclusive school culture where students feel safe, valued, and motivated. Respect, collaboration, and student well-being are at the heart of our institution’s values.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className="pt-1">
                  <FaSchool className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Modern Facilities
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Our state-of-the-art classrooms, well-equipped science and computer labs, extensive library, and advanced technology resources create an engaging and effective learning environment for students.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className="pt-1">
                  <FaUsers className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Strong Community Engagement
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    We believe that education is a collective effort. That’s why we actively involve parents and the wider community in school activities, ensuring a collaborative approach to student growth and success.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className="pt-1">
                  <FaLaptopCode className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Focus on Future Skills
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Preparing students for the challenges of tomorrow, we integrate programs like coding, entrepreneurship, leadership development, and career guidance to equip them with essential skills for higher education and the workforce.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className="pt-1">
                  <FaRegQuestionCircle className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Doubt Clarification Sessions
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Dedicated sessions address individual queries, ensuring no student is left behind and all doubts are clarified.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Facilities;
