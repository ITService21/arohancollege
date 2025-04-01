import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const BottomFooter = ["one"];
const Media = [
  {
    name: "Album",
    link: "/album",
  },
  {
    name: "Videos",
    link: "/videos",
  },
];

const Courses = [
  {
    name: "Class 11 to 12",
    link: "/class-11t12",
  },
  {
    name: "Class IIT to JEE",
    link: "/class-IIT-JEE",
  },
  {
    name: "Medical NEET",
    link: "/neet-medical",
  },
];
const ContactUs = [
  {
    icon: <FaFacebook />,
    Label: "Facebook",
    link: "https://m.facebook.com/Arohan sng/",
  },
  {
    icon: <FaInstagram />,
    Label: "Instagram",
    link: "https://www.instagram.com/Arohan groupofeducation?utm_source=qr&igsh=MTkydDZxbmJkMXM1aQ==",
  },
  {
    icon: <FaYoutube />,
    Label: "Youtube",
    link: "https://youtube.com/@Arohan groupofeducation9550?si=dywwLl7Mjj9qCzyl",
  },
  {
    icon: <FaEnvelope />,
    Label: "Email Address",
    link: "",
  },
];
const Insights = [
  {
    name: "Student Journey",
    link: "/student-journey",
  },
  {
    name: "Results",
    link: "/result",
  },
];
const AboutUs = [
  {
    name: "Our Chairman ",
    link: "/our-chairman",
  },
  {
    name: "Mission & Vision",
    link: "/mission-vision",
  },
  {
    name: "Academic Team",
    link: "/acedmic-team",
  },
  // {
  //   name: "Admin Portal",
  //   link: "/admin-panel",
  // },
];
// {/* <img src={Logo} alt="" className="object-contain" /> */}
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    // bg-[#ff0088] hover:bg-[#ff48a9]
    <div className="  text-white bg-gradient-to-b from-[#FF512F] to-[#DD2476]">
      <div className="flex lg:flex-row gap-8 items-center justify-evenly w-11/12 max-w-maxContent text-white leading-6 mx-auto relative py-2">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700 mt-10">
          {/*Main Section 1 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9 justify-between w-full mx-[8vw]">
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">About Us</h1>

              <div className="flex flex-col gap-2 mt-2">
                {AboutUs?.map((obj, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={obj?.link} onClick={scrollToTop}>
                        {obj?.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub Section 2 */}
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">
                Our Memories
              </h1>

              <div className="flex flex-col gap-2 mt-2 ">
                {Media?.map((obj, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={obj?.link} onClick={scrollToTop}>
                        {obj?.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub Section 3 */}
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">Courses</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Courses?.map((Obj, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={Obj?.link} onClick={scrollToTop}>
                        {Obj?.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub Section 4 */}
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">Insights</h1>

              <div className="flex flex-col gap-2 mt-2">
                {Insights?.map((Obj, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={Obj?.link} onClick={scrollToTop}>
                        {Obj?.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Sub Section 5 */}
            <div className="">
              <h1 className="text-white font-semibold text-[16px]">
                Contact Us
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {ContactUs?.map((Obj, index) => {
                  return Obj.Label !== "Email Address" ? (
                    <div
                      key={index}
                      className="flex text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link
                        to={Obj?.link}
                        className="flex text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      >
                        <div className="my-auto">{Obj?.icon}</div>
                        <div className="my-auto ml-1">{Obj?.Label}</div>
                      </Link>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <div className="flex text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                        <div className="my-auto">{Obj?.icon}</div>
                        <div
                          onClick={() => {
                            window.location.href =
                              "mailto:aarohansng@gmail.com";
                          }}
                          className="my-auto ml-1 text-nowrap"
                        >
                          aarohansng@gmail.com
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <div
                  onClick={() =>
                    (window.location.href = "mailto:example@example.com")
                  }
                >
                  Gmail Address
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-white mx-auto  pb-14 text-sm">
        {/* Main Section 2 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row text-[15px] leading-6 p-[4px]">
            {BottomFooter?.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter?.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  <div className="text-center ">
                    Designed By Sunsoft Digital Solution
                  </div>
                  <p className="text-sm text-center md:text-left text-[15px]">
                    © {new Date().getFullYear()} Arohan  Higher Secondary School. All Rights
                    Reserved.
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center order-first md:order-last px-[20px] p-[4px] leading-6 text-[15px]">
          Arohan higher secondary school, Aranya nagar Sundergarh, Odisha 770001
          <br />  +91 9555095503
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
