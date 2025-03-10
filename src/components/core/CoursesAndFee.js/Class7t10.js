import React from "react";

const courses = [
  {
    "name": "CBSE & CHSE +2 Science (Class 11)",
    "description": "Enroll in our CBSE & CHSE +2 Science program for Class 11 and build a strong foundation in Physics, Chemistry, Mathematics, and Biology. Our coaching center provides expert guidance, personalized mentoring, and rigorous test series to prepare students for board exams and competitive entrance tests like JEE and NEET.",
    "image": "/images/SparksClass8_.jpeg",  // Replace with actual image URL
    "totalFee": "₹ XX,XXX",  // Add the total fee amount
    "installments": ["₹ X,XXX", "₹ X,XXX", "₹ X,XXX"]  // Add installment details
  },
  {
    "name": "CBSE & CHSE +2 Science (Class 12)",
    "description": "Our CBSE & CHSE +2 Science program for Class 12 is designed to ensure excellence in board exams and competitive tests. With expert faculty, structured study materials, and regular doubt-clearing sessions, students receive the best preparation for JEE, NEET, and other competitive exams.",
    "image": "/images/SparksClass8_.jpeg",  // Replace with actual image URL
    "totalFee": "₹ XX,XXX",  // Add the total fee amount
    "installments": ["₹ X,XXX", "₹ X,XXX", "₹ X,XXX"]  // Add installment details
  }
  // {
  //   name: "Maverick (for class IX)",
  //   description: "Empower young minds to excel in Class IX with a comprehensive learning experience.",
  //   image: "/images/MaverickClass9_.jpeg", // Replace with the actual image URL
  //   totalFee: "₹ 28,200",
  //   installments: ["₹ 11,000", "₹ 11,000", "₹ 6,200"],
  // },
  // {
  //   name: "Ace (for class X)",
  //   description: "Achieve excellence and ace your Class X exams with expert guidance.",
  //   image: "/images/AceClass10_.jpeg", // Replace with the actual image URL
  //   totalFee: "₹ 28,200",
  //   installments: ["₹ 11,000", "₹ 11,000", "₹ 6,200"],
  // },

];

const FeeStructure = () => {
  return (
    <div className=" bg-gradient-to-b from-[#fff97e] to-[#cbfe90] py-10 px-2 md:px-8 lg:px-12">
      <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pb-10">Courses & Fee Structure (Session 2025-26)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 "
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full p-4 rounded-md"
            />
            <div className="p-5 pt-3 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-blue-500">Total Fee: {course.totalFee}</p>
                <div className="mt-2">
                  <p className="text-gray-700">1st Installment: {course.installments[0]}</p>
                  {/* <p className="text-gray-700">2nd Installment: {course.installments[1]}</p>
                  <p className="text-gray-700">3rd Installment: {course.installments[2]}</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-10 px-5 text-center">
        <p className="text-lg text-gray-800">
          <span className="font-semibold">One-Time Payment Discount:</span> ₹2000 for Class VII/VIII, and ₹3000 for Class IX/X
        </p>
        <p className="text-lg text-gray-800 mt-2">
          <span className="font-semibold">Fee Submission Schedule:</span> Gap of 60 days between 1st and 2nd installments, and 45 days between 2nd and 3rd installments.
        </p>
        <p className="text-lg text-red-500 mt-2">
          <span className="font-semibold">Late Fee Penalty:</span> ₹50 per day.
        </p>
        <p className="text-lg text-gray-800 mt-2">
          <span className="font-semibold">Registration Fee:</span> ₹500.
        </p>
      </div> */}
    </div>
  );
};

export default FeeStructure;
