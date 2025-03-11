import React, { useRef } from "react";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
const PerfectPlatform = () => {
  const animationRef5 = useScrollAnimation("animate-flipInX");
  const animationRef6 = useScrollAnimation("animate-flipInX");
  const animationRef7 = useScrollAnimation("animate-flipInX");
  const animationRef8 = useScrollAnimation("animate-flipInX");
  const animationRef9 = useScrollAnimation("animate-flipInX");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <section className="py-16">
      <h2 className="text-[14px] md:text-xl lg:text-2xl font-bold py-3 md:py-2 text-center mb-4 text-white bg-[#ff5218]">
        <span className="bg-gradient-to-b py-4 from-[#fff5f3] to-[#ffffff] text-transparent bg-clip-text font-bold">
          Odisha's Top-Ranked Higher Secondary School
        </span>
      </h2>

      <h2 className="text-[14px] md:text-xl lg:text-2xl md:mt-8 font-bold py-2 md:py-2 text-center text-white bg-[#ff5218] mb-10">
        <span className="bg-gradient-to-b py-4 from-[#fff5f3] to-[#ffffff] text-transparent bg-clip-text font-bold">
          OUR BATCHES
        </span>
      </h2>

      {/* <div className="flex flex-col md:flex-row md:flex-flow justify-center items-center"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 justify-center items-center mt-20 md:px-8">
        {/* <ScrollAnimation animateIn="flipInX"> */}
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center    transition-all duration-200 overflow-hidden hover:scale-105">
          {/* Lottie Animation */}
          <div className="relative z-10 w-[120px] mx-auto mb-4">
            <img src="/images/batch3.jpeg" className="rounded-full" alt="..." />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl text-[#ff5218] font-cinzel font-semibold mb-2 transition-transform duration-200">
            Academic Excellence
          </div>
          <div className="mx-[4%] py-2 px-2 relative z-10 text-xl font-[2px] bg-[#ffd724] rounded-[10px] text-black transition-transform duration-200 font-rubik-vinyl mb-8">
            11th & 12th (CBSE & CHSE +2 Science) – School & Coaching
          </div>
          {/* Description */}
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify">
            At Arohan  Higher Secondary School, we provide a strong academic
            foundation for 11th and 12th-grade students under the CBSE & CHSE
            (+2 Science) curriculum. Our school and coaching program ensures
            that students receive in-depth subject knowledge, practical
            learning, and exam-oriented preparation. With expert faculty,
            well-structured study materials, and regular assessments, we focus
            on building conceptual clarity in Physics, Chemistry, Mathematics,
            and Biology. Our personalized mentoring and doubt-clearing sessions
            help students excel in board exams and prepare for competitive
            entrance tests alongside their school studies.
          </span>
          {/* Button */}
          <Link
            type="button"
            className="relative z-10 text-center text-[16px] text-roboto sm:text-[16px] w-[260px] md:w-[80%] py-2 font-bold rounded-full bg-[#ff5218] hover:bg-[#ff855c] transition-all duration-100 text-white mt-4 mb-4"
            to="/class-11t12"
            onClick={scrollToTop}
          >
            Learn more
          </Link>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center     transition-all duration-200 overflow-hidden hover:scale-105">
          {/* Lottie Animation */}
          <div className="relative z-10 w-[120px] mx-auto mb-4">
            <img src="/images/batch1.jpeg" className="rounded-full" alt="..." />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl text-[#ff5218] font-cinzel font-semibold mb-2 transition-transform duration-200">
            Engineering Aspirants
          </div>
          <div className="mx-[4%] py-2 px-2 relative z-10 text-xl font-[2px] bg-[#ffd724] rounded-[10px] text-black transition-transform duration-200 font-rubik-vinyl mb-8">
            IIT-JEE (Main & Advanced) Coaching
          </div>
          {/* Description */}
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify">
            Arohan  Higher Secondary School offers specialized coaching for
            IIT-JEE (Main & Advanced) aspirants, focusing on concept-based
            learning and problem-solving techniques. Our structured curriculum
            covers Physics, Chemistry, and Mathematics, ensuring students master
            both fundamentals and advanced applications. With a systematic
            approach, including daily practice problems, mock tests, and
            doubt-solving sessions, we help students enhance their accuracy and
            speed. Our experienced faculty, advanced study materials, and
            individual attention create a competitive learning environment that
            maximizes the chances of securing a top rank in IIT-JEE.
          </span>
          {/* Button */}
          <Link
            type="button"
            className="relative z-10 text-center text-[16px] text-roboto sm:text-[16px] w-[260px] md:w-[80%] py-2 font-bold rounded-full bg-[#ff5218] hover:bg-[#ff855c] transition-all duration-100 text-white mt-4 mb-4"
            to="/class-IIT-JEE"
            onClick={scrollToTop}
          >
            Learn more
          </Link>

          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center     transition-all duration-200 overflow-hidden hover:scale-105">
          {/* Lottie Animation */}
          <div className="relative z-10 w-[120px] mx-auto mb-4">
            <img src="/images/batch2.jpeg" className="rounded-full" alt="..." />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl text-[#ff5218] font-cinzel font-semibold mb-2 transition-transform duration-200">
            Medical Achievers
          </div>
          <div className="mx-[4%] py-2 px-2 relative z-10 text-xl font-[2px] bg-[#ffd724] rounded-[10px] text-black transition-transform duration-200 font-rubik-vinyl mb-8">
            Course 3: NEET (Medical) Coaching
          </div>
          {/* Description */}
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify">
            For students aiming for a career in medicine, our NEET coaching
            program provides comprehensive training in Physics, Chemistry, and
            Biology. At Arohan  Higher Secondary School, we focus on NCERT-based
            learning with an emphasis on high-yield topics, conceptual clarity,
            and time management strategies. Our structured course plan includes
            regular tests, revision classes, and interactive doubt-clearing
            sessions, ensuring students are fully prepared for NEET. With expert
            guidance, scientifically designed study materials, and a strategic
            preparation approach, we help students achieve their dream of
            getting into top medical colleges.
          </span>
          {/* Button */}
          <Link
            type="button"
            className="relative z-10 text-center text-[16px] text-roboto sm:text-[16px] w-[260px] md:w-[80%] py-2 font-bold rounded-full bg-[#ff5218] hover:bg-[#ff855c] transition-all duration-100 text-white mt-4 mb-4"
            to="/neet-medical"
            onClick={scrollToTop}
          >
            Learn more
          </Link>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
      </div>
    </section>
  );
};

export default PerfectPlatform;
