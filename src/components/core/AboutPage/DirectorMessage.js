import React from "react";

function DirectorMessage() {
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
      <div className=" bg-gradient-to-b from-[#BFF098] to-[#6FD6FF] pb-[80px]">
        <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-10">
        Our Chairman 
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 px-4 md:px-10 ">
          <div className="flex flex-col">
            <div
              className={`text-black text-[18px] font-cinzel  md:my-[40px] text-justify flex md:gap-5 flex-col transition-all duration-300`}
            >
              <div>
                <br />
                <p>
                  <span class="font-semibold">Meet Our Director – Sumit Singh</span>,
                  Arohan  Higher Secondary School is proud to be guided by the visionary leadership of our esteemed Director, Mr. Sumit Singh.
                  A distinguished alumnus of <span class="font-semibold">NIT</span>, where he earned his degree in <span class="font-semibold">Electrical Engineering</span>, He has dedicated his career to shaping young minds and fostering academic excellence.
                </p>

                <p class="mt-4">
                  With a strong passion for education, he established Arohan  Higher Secondary School as a premier institution that seamlessly integrates schooling and coaching.
                  Under his leadership, we provide 11th & 12th (CBSE & CHSE +2 Science) education, along with specialized coaching for IIT-JEE (Main & Advanced) and NEET (Medical) aspirants.
                  His commitment to quality education has helped numerous students achieve their dreams of entering India’s top engineering and medical colleges.
                </p>

                <p class="mt-4">
                  Mr. Singh believes in a student-centric approach, ensuring that every learner receives personalized guidance and mentorship.
                  His expertise in competitive exam preparation, coupled with innovative teaching methodologies, has made Arohan  Higher Secondary School a trusted name in the field of education.
                </p>
                <p class="mt-4">
                  With a mission to empower students through knowledge, discipline, and perseverance, Mr. Sumit Singh continues to inspire and lead, making Arohan  Higher Secondary School a beacon of academic excellence.
                </p>
              </div>

              <div class="mt-2 p-6 bg-gradient-to-r from-[#eeefee] via-[#eeefee] to-[#eeefee] rounded-xl shadow-xl text-center">
                <p class="text-xl text-gray-700 font-medium">Warm regards,</p>
                <p class="text-2xl font-extrabold text-blue-700 mt-3 tracking-wide drop-shadow-md">
                  Sumit Singh
                </p>
                <p class="text-lg font-semibold text-green-600 mt-2 ">
                  Director
                </p>
                <p class="text-md font-medium text-gray-600 mt-3 italic bg-yellow-50 px-4 py-1 rounded-full shadow-sm inline-block border-b-4 border-green-300">
                  B.Tech from NIT 
                </p> <br/>
                <p class="text-md font-medium text-gray-600 mt-3 italic bg-yellow-50 px-4 py-1 rounded-full shadow-sm inline-block border-b-4 border-green-300">
                M.Tech , Phd , 3 Times Gate Qualified 
                </p>
              </div>

            </div>
          </div>
          <div className="my-[20px] md:-mr-[14px] order-first">
            <div className="">
              <img
                src="/images/director1.jpg"
                className="w-[93%] h-[93%] rounded-[10px] my-auto shadow-md shadow-gray-300 mt-[1.5vw] mx-auto"
                alt="pic not load"
              />
            </div>
           
          </div>
        </div>
      </div>

    </div>
  );
}

export default DirectorMessage;
