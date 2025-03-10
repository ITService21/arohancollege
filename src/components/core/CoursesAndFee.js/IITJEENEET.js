import React from "react";

function IITJEENEET() {

  const courses = 
    [
      {
        "name": "NEET Achiever Classes(11th & 12th)",
        "description": "Our NEET Achiever Classes program is designed to build a strong conceptual base in Physics, Chemistry, and Biology for medical aspirants. With expert faculty, structured study materials, and regular practice tests, we ensure students develop problem-solving skills and a deep understanding of fundamental concepts required for NEET preparation. Personalized mentoring, doubt-clearing sessions, and strategic study plans help maximize performance in the exam.",
        "image": "/images/neet.jpg",  // Replace with actual image URL
        "totalFee": "₹ XX,XXX",  // Add the total fee amount
        "installments": ["₹ X,XXX", "₹ X,XXX", "₹ X,XXX"]  // Add installment details
      },
      {
        "name": "NEET Leader Classes(13th & Above)",
        "description": "Our NEET Leader Classes program is specifically designed for students aiming to secure top ranks in the NEET exam and get admission into top medical colleges. With an advanced curriculum, extensive problem-solving sessions, and in-depth conceptual clarity in Physics, Chemistry, and Biology, we ensure students excel in the exam. Our rigorous test series, detailed performance analysis, and competitive learning environment help students achieve their medical career goals.",
        "image": "/images/neet.jpg",  // Replace with actual image URL
        "totalFee": "₹ XX,XXX",  // Add the total fee amount
        "installments": ["₹ X,XXX", "₹ X,XXX", "₹ X,XXX"]  // Add installment details
      }
    

  ];
  return (
    <div className=" bg-gradient-to-b from-[#FFECD2] to-[#FCB69F] py-10 px-2 md:px-8 lg:px-12">
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
                  <p className="text-gray-700">2nd Installment: {course.installments[1]}</p>
                  <p className="text-gray-700">3rd Installment: {course.installments[2]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IITJEENEET;
