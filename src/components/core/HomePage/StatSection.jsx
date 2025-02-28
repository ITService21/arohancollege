import React from "react";
import girlImage from "../../../assets/Images/girl.webp";
import mocktest from "../../../assets/Images/mocktest.webp";
import practicepaper from "../../../assets/Images/practicepaper.webp";
import videolecture from "../../../assets/Images/videolecture.webp";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const StatsSection = () => {
  const animationLeftRef1 = useScrollAnimation("animate-slideInLeftToRight");
  const animationRightRef1 = useScrollAnimation("animate-slideInRightToLeft");
  const animationLeftRef2 = useScrollAnimation("animate-slideInLeftToRight");
  const animationRightRef2 = useScrollAnimation("animate-slideInRightToLeft");
  return (
    <section className="py-16 ">
      <h2 className="text-[24px] md:text-2xl lg:text-4xl font-cinzel md:mt-8 font-bold py-2 md:py-2 text-center -mb-[80px]">
        <span className=" py-4 bg-clip-text font-bold text-[#ff2814]">
          Student Testimonials
        </span>
      </h2>

      {/* <div className="flex flex-col md:flex-row md:flex-flow justify-center items-center"> ffcdcd*/}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center bg-gradient-to-r from-[#ff6aa0] to-[#ffcd7c] py-[100px] px-2 md:px-8">
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center  transition-all     duration-200 overflow-hidden hover:scale-105">
          <span className="relative z-10 text-[#838383] mb-4 block transition-opacity duration-200 text-justify p-6 py-2">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className=" mb-4 icon icon-quote w-[20px]"
              viewBox="0 0 41 35"
            >
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
            </svg>
          </span>
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify p-6">
          Best coaching centre for students. Teachers are polite and so cooperative . In this centre i get a friendly and welcoming atmosphere. The staffs and teachers are supportive and have excellent experience. The facilitys are best and the environment helps us to achieve personal growth. Equal attention was given to every individual which is the best part of AAROHAN COACHING CENTRE. Best coaching centre in sundargarh. THANK YOU.
          </span>
          {/* <div className="relative z-10 w-[140px] mx-auto">
            <img src="/images/AnasSiddiqui_.jpeg" className="" alt="..." />
            <h3 className="py-2 font-cinzel text-[18px]">Sapna Sunani</h3>
          </div> */}
          <h2 className="text-[16px] font-semibold text-center relative z-10 text-black block transition-opacity duration-200">
          Sapna Sunani (Student)
          </h2>
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center  transition-all     duration-200 overflow-hidden hover:scale-105">
          <span className="relative z-10 text-[#838383] mb-4 block transition-opacity duration-200 text-justify p-6 py-2">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className=" mb-4 icon icon-quote w-[20px]"
              viewBox="0 0 41 35"
            >
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
            </svg>
          </span>
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify p-6">
          When I first joined the coaching, I didn't feel like I was in a new place; instead, I felt like I already knew everyone. The teachers are extremely cooperative, explaining concepts with examples and repeating them until we understand. They celebrate every occasion, whether it's Teachers' Day or Children's Day, with great enthusiasm. They consider every student's emotions while making decisions🌷✨
          </span>
          {/* <div className="relative z-10 w-[140px] mx-auto">
            <img src="/images/NiyatiSingh_.jpeg" className="" alt="..." />
            <h3 className="py-2 font-cinzel text-[18px] whitespace-normal">Manikeswari Panda</h3>
          </div> */}
          
          <h2 className="text-[16px] font-semibold text-center relative z-10 text-black block transition-opacity duration-200">
          Manikeswari Panda (Student)
          </h2>
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center  transition-all     duration-200 overflow-hidden hover:scale-105">
          <span className="relative z-10 text-[#838383] mb-4 block transition-opacity duration-200 text-justify p-6 py-2">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className=" mb-4 icon icon-quote w-[20px]"
              viewBox="0 0 41 35"
            >
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
            </svg>
          </span>
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify p-6">
          I would like to suggest you all to join AAROHAN GROUP OF EDUCATION...It is a best coaching centre in sundargarh for Science students. Really the teachers are very friendly, supportive and they encourage students and behaves like a family and I feel that Aarohan is also my family.They celebrates all festival with great happiness and enthusiasm.They teach hard subjects in a easy way and their teaching style is very comfortable nd effective.Really I am very happy to join in this coaching centre🙂👍🏻
          </span>
          {/* <div className="relative z-10 w-[140px] mx-auto">
            <img src="/images/SakshiSrivastava_.jpeg" className="" alt="..." />
            <h3 className="py-2 font-cinzel text-[18px]">Bandana Ghusi</h3>
          </div> */}

          <h2 className="text-[16px] font-semibold text-center relative z-10 text-black block transition-opacity duration-200">
          Bandana Ghusi (Student)
          </h2>
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        {/* <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center  transition-all     duration-200 overflow-hidden hover:scale-105">
          <span className="relative z-10 text-[#838383] mb-4 block transition-opacity duration-200 text-justify p-6 py-2">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className=" mb-4 icon icon-quote w-[20px]"
              viewBox="0 0 41 35"
            >
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
            </svg>
          </span>
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify p-6">
            Best Faculty for its optimal price and the effort made by the
            teachers... regular evaluation of results, competitive environment,
            and obviously, the skills are outstanding... definitely way to go 👍
          </span>
          <div className="relative z-10 w-[140px] mx-auto">
            <img src="/images/AnasSiddiqui_.jpeg" className="" alt="..." />
          </div>
          <h3 className="py-2 font-cinzel text-[18px]">Khushi Yadav</h3>
          <h2 className="text-[16px] font-semibold text-center relative z-10 text-black block transition-opacity duration-200">
            Scored 96% marks in Boards
          </h2>
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div> */}
      </div>
    </section>
  );
};

export default StatsSection;
