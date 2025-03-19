import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    "name": "IIT-JEE (Main) Classes",
    "description": "Our IIT-JEE (Main) Classes program is designed to strengthen students' conceptual understanding in Physics, Chemistry, and Mathematics. With a structured curriculum, experienced faculty, and regular practice tests, we ensure students build problem-solving skills essential for cracking JEE Main. We provide personalized mentoring, doubt-clearing sessions, and strategic study plans to maximize performance in the exam.",
    "image": "/images/jeemain.jpeg",  // Replace with actual image URL
    "totalFee": "₹ XX,XXX",  // Add the total fee amount
    "installments": ["₹ X,XXX", "₹ X,XXX", "₹ X,XXX"]  // Add installment details
  },
  {
    "name": "IIT-JEE (Advanced) Classes",
    "description": "Our IIT-JEE (Advanced) Classes program is designed for students aiming to secure top ranks in JEE Advanced and get admission into IITs. With an advanced curriculum, in-depth problem-solving techniques, and focused mentorship, we ensure students develop strong analytical skills. Our rigorous test series, detailed performance analysis, and competitive learning environment help students excel in this highly challenging exam.",
    "image": "/images/jee.jpeg",  // Replace with actual image URL
    "totalFee": "₹ XX,XXX",  // Add the total fee amount
    "installments": ["₹ X,XXX", "₹ X,XXX", "₹ X,XXX"]  // Add installment details
  }
];

const FeeStructure = () => {
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
                {/* <p className="text-lg font-semibold text-blue-500">Total Fee: {course.totalFee}</p> */}
                {/* <div className="mt-2">
                  <p className="text-gray-700">1st Installment: {course.installments[0]}</p>
                  <p className="text-gray-700">2nd Installment: {course.installments[1]}</p>
                  <p className="text-gray-700">3rd Installment: {course.installments[2]}</p>
                </div> */}

                <button className="px-6 py-2 text-gray-900 bg-gradient-to-r from-[#32b564] to-[#32b564] rounded-lg shadow-md  transition-all duration-300">
                  <Link to="/contact-us">Contact</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-10 px-5 text-center">
        <p className="text-lg text-gray-800">
          <span className="font-semibold">One-Time Payment Discount:</span> ₹4000 for Class XI/XII.
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
