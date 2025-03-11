import React from "react";
import AboutImage from "../../../assets/Images/about_image.jpg";
import HighlightText from "./HighLightText";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../HomePage/Button";
import Lottie from "react-lottie";

const AboutSection = () => {
  return (
    <section id="about_section" className="diffSection bg-black pt-[60px] px-4 pb-10">
      <div className="max-w-maxContent mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left part - Image */}
        <div className="w-full lg:w-[38%]">
          {/* <img
            src={AboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg object-cover object-center w-full h-auto lg:max-w-none border-none"
          /> */}
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              // path: "/lottie/darkThemeMove.json",
              path: "/lottie/think.json",
            }}
          />
        </div>

        {/* Right part - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 py-8">
          <h1 className="text-4xl text-white font-semibold text-center">
            What do you think about us?{" "}
            <HighlightText text={"Arohan  Higher Secondary School"} />
          </h1>

          <p className="text-[16px] text-justify text-richblack-200 -mt-6">
            At Arohan  Higher Secondary School, we believe that every student
            has the potential to achieve excellence with the right guidance and
            resources. Our mission is to provide a supportive and dynamic
            learning environment that not only enhances academic performance but
            also builds confidence and a passion for knowledge. We go beyond
            traditional education— we are mentors, motivators, and dedicated
            partners in every student’s journey. Our curriculum is designed for
            students in <strong>Class 11 & 12 (CBSE & CHSE +2 Science)</strong>,
            with specialized coaching for <strong>IIT-JEE and NEET</strong>.
            With an expert faculty, advanced digital tools, and a student-first
            approach, we empower learners to excel in board exams and
            competitive entrance tests. At Arohan , your success is our
            commitment.
          </p>

          {/* <div className="flex -mt-4 mx-auto  pb-10">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Learning Today <FaArrowRight />
              </div>
            </CTAButton>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
