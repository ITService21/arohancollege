import React from "react";
import { academicTeam } from "../../../data/ouracademicteam";

function AcademicTeam() {
  return (
    <div className="w-full bg-[#f3ffff] bg-gradient-to-b py-10">
      <h2 className="text-[#db2929] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center">
        Our Team
      </h2>

      <div className="flex flex-col items-center px-4 md:px-20 lg:px-32 gap-6">
        {/* Special Case: ID 0 Takes Full Width */}
        <div className="w-full bg-gradient-to-b from-[#64fff5] to-[#94fef7] shadow-lg p-6 rounded-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
          <img
            src={academicTeam[0].photo}
            alt={academicTeam[0].name}
            className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] mx-auto rounded-full shadow-md border-4 border-blue-300"
          />
          <p className="font-serif font-semibold text-[20px] md:text-[24px] text-gray-700 text-center mt-2">
            {academicTeam[0].name}
          </p>
          <h3 className="font-sans font-bold text-[22px] md:text-[26px] text-blue-700 text-center mt-4">
            {academicTeam[0].title}
          </h3>
          <p className="font-mono font-medium text-[18px] md:text-[20px] text-gray-600 text-center mt-1">
            {academicTeam[0].education}
          </p>
          <p className="font-mono text-[16px] md:text-[18px] text-gray-500 text-center mt-2">
            {academicTeam[0].phone}
          </p>
        </div>

        {/* Grid layout for 1 & 3 in one row, 2 & 4 in another */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* IDs 1 & 3 */}
          {[1, 3].map((id) => (
            <div
              key={academicTeam[id]?.id}
              className="bg-gradient-to-b from-[#64fff5] to-[#94fef7] shadow-lg p-6 rounded-2xl hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <img
                src={academicTeam[id]?.photo}
                alt={academicTeam[id]?.name}
                className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] mx-auto rounded-full shadow-md border-4 border-blue-300"
              />
              <p className="font-serif font-semibold text-[20px] md:text-[24px] text-gray-700 text-center mt-2">
                {academicTeam[id]?.name}
              </p>
              <h3 className="font-sans font-bold text-[22px] md:text-[26px] text-blue-700 text-center mt-4">
                {academicTeam[id]?.title}
              </h3>
              <p className="font-mono font-medium text-[18px] md:text-[20px] text-gray-600 text-center mt-1">
                {academicTeam[id]?.education}
              </p>
              <p className="font-mono text-[16px] md:text-[18px] text-gray-500 text-center mt-2">
                {academicTeam[id]?.phone}
              </p>
            </div>
          ))}

          {/* IDs 2 & 4 */}
          {[2, 4].map((id) => (
            <div
              key={academicTeam[id]?.id}
              className="bg-gradient-to-b from-[#64fff5] to-[#94fef7] shadow-lg p-6 rounded-2xl hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <img
                src={academicTeam[id]?.photo}
                alt={academicTeam[id]?.name}
                className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] mx-auto rounded-full shadow-md border-4 border-blue-300"
              />
              <p className="font-serif font-semibold text-[20px] md:text-[24px] text-gray-700 text-center mt-2">
                {academicTeam[id]?.name}
              </p>
              <h3 className="font-sans font-bold text-[22px] md:text-[26px] text-blue-700 text-center mt-4">
                {academicTeam[id]?.title}
              </h3>
              <p className="font-mono font-medium text-[18px] md:text-[20px] text-gray-600 text-center mt-1">
                {academicTeam[id]?.education}
              </p>
              <p className="font-mono text-[16px] md:text-[18px] text-gray-500 text-center mt-2">
                {academicTeam[id]?.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AcademicTeam;






{/* <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 list-none ">

  <li
    key='1'
    className="bg-gradient-to-b from-[#64fff5] to-[#94fef7] shadow-lg mx-4 md:mx-20 lg:mx-32 p-6 mb-10 rounded-2xl hover:scale-105 transform transition-all duration-300 ease-in-out"
  >
    <img
      src={academicTeam[0].photo}
      alt={academicTeam[0].name}
      className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] mx-auto rounded-full shadow-md border-4 border-blue-300"
    />
    <p className="font-serif font-semibold text-[20px] md:text-[24px] text-gray-700 text-center mt-2">
      {academicTeam[0].name}
    </p>
    <h3 className="font-sans font-bold text-[22px] md:text-[26px] text-blue-700 text-center mt-4">
      {academicTeam[0].title}
    </h3>

    <p className="font-mono font-medium text-[18px] md:text-[20px] text-gray-600 text-center mt-1">
      {academicTeam[0].education}
    </p>
    <p className="font-mono text-[16px] md:text-[18px] text-gray-500 text-center mt-2">
      {academicTeam[0].phone}
    </p>
  </li>
  

</ul> */}