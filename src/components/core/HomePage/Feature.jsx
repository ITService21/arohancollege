import React, { useState } from "react";
import { Link } from "react-router-dom";
const Features = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      className="relative not-prose scroll-mt-[72px] text-white mt-[80px]"
      id="features"
    >
      <div className="bg-gradient-to-r from-[#f1eaa9] to-[#FFBBBB]  pt-[40px] pb-10">
        <div className="text-clip bg-clip-text font-bold text-[#ff0b0b] text-[24px] md:text-2xl lg:text-4xl text-center md:mb-4 px-3">
        Transforming Education in Odisha
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 px-4 md:px-10 ">
          <div className="flex flex-col">
            <div
              className={`text-black text-[18px] font-cinzel  my-[40px] text-justify flex md:gap-5 flex-col ${
                expanded ? "" : "overflow-hidden max-h-[4000px]"
              } transition-all duration-300`}
            >
              Searching for a top coaching institute in Odisha that ensures
              academic excellence for students in Class 11 & 12 (CBSE & CHSE +2
              Science), IIT-JEE, and NEET? Your search ends here! Arohan  Higher
              Secondary School is dedicated to shaping young minds through
              quality education, conceptual clarity, and result-oriented
              learning. With a team of highly experienced faculty, we simplify
              complex subjects in Physics, Chemistry, Mathematics, and Biology,
              providing a solid foundation for both board exams and competitive
              entrance tests. Our structured curriculum and engaging teaching
              methods make learning both effective and enjoyable.
              <br />
              <br />
              At Arohan , we understand that every student has a unique learning
              style. That’s why we offer personalized mentoring, interactive
              doubt-clearing sessions, and regular assessments to ensure
              consistent progress. Our comprehensive study materials, weekly
              tests, and strategic revision plans help students build confidence
              and master every topic. Whether it's board exams, IIT-JEE, or NEET
              preparation, we emphasize continuous practice and concept
              reinforcement to help students perform at their best.
              <br />
              <br />
              Located in Odisha, Arohan  Higher Secondary School provides a
              disciplined, goal-oriented, and student-centric learning
              environment. We focus on the core academic needs of students while
              preparing them for future success in engineering and medical
              entrance exams. Join us to experience a holistic approach to
              education and empower your child with the knowledge and skills to
              excel in both school and competitive exams.
              {/* <span className="text-[#ff3737]">Read More</span> */}
            </div>
          </div>
          <div className=" my-[20px] md:-mr-[14px]">
            <img
              src="/images/transforming1.jpeg"
              className="w-full h-full float-right rounded-[10px] shadow-md shadow-gray-300"
              alt="pic not load"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
