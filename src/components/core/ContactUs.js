import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactUsPage/ContactForm";
function ContactUs() {
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
      <div className="pb-[80px] bg-gradient-to-b from-[#BFF098] to-[#6FD6FF]">
        <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-10">
          Connect With Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2 md:mx-8 lg:mx-10">
          {/* Phone */}
          <div
            className="flex flex-col items-center justify-center  shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#fbffe7] transition-shadow cursor-pointer bg-white pt-10 pb-12"
            onClick={() => (window.location.href = "tel:+91 9555095503")} // Replace with actual phone number
          >
            <div className="m-4 flex">
              {" "}
              <FaPhoneAlt className="text-[#820c0c] mr-2 rounded-[20px] bg-[#efefef] w-[120px] h-[120px] p-6" />
            </div>
            <div>
              <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center">
                Contact Number
              </div>
              <p className="font-cinzel text-[18px] mb-[1px] text-center">
                +91 9555095503
              </p>
              {/* <p className="font-cinzel text-[18px] mb-[1px] text-center">
                +91 7380922230
              </p> */}
            </div>
          </div>

          {/* Email */}
          <div
            className="flex flex-col items-center justify-center  shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#fbffe7] transition-shadow cursor-pointer bg-white pt-10 pb-12"
            onClick={() =>
              (window.location.href = "mailto:school@Arohan sng.com")
            } 
          >
            <div className="m-4 flex ">
              <FaEnvelope className="text-[#820c0c]  mr-2 rounded-[20px] bg-[#efefef] w-[120px] h-[120px] p-6" />
            </div>
            <div>
              <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center">
                Email Us
              </div>
              <p className="font-cinzel text-[18px] mb-[1px] text-center">
              school@Arohan sng.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div
            className="flex flex-col items-center justify-center  shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#fbffe7] transition-shadow cursor-pointer bg-white pt-10 pb-12"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.228045563481!2d84.04769967511281!3d22.117279279818543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20ed7af86d698b%3A0x757c1b70bf868e5c!2sArohan %20(%20branch%203rd)!5e0!3m2!1sen!2sin!4v1739118736646!5m2!1sen!2sin"
              )
            }
          >
            <div className="m-4 flex">
              <FaMapMarkerAlt className="text-[#820c0c]  mr-2 rounded-[20px] bg-[#efefef] w-[120px] h-[120px] p-6" />
            </div>
            <div>
              <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center">
                Location
              </div>
              <p className="font-cinzel text-[18px] mb-[1px] text-center px-4 md:px-6">
              Arohan  branch 2, Aranya Nagar, Sundargarh, Odisha 770001, India
              </p>
            </div>
          </div>
        </div>
        <div className="w-auto h-[300px] md:h-[400px] lg:h-[500px] mx-2 md:mx-8 lg:mx-10 my-6 md:my-12 lg:my-16 border-2 md:border-[25px] border-[#131313]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.228045563481!2d84.04769967511281!3d22.117279279818543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20ed7af86d698b%3A0x757c1b70bf868e5c!2sArohan %20(%20branch%203rd)!5e0!3m2!1sen!2sin!4v1739118736646!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arohan College Location"
          ></iframe>
        </div>
        {/* <div><ContactForm/></div> */}
      </div>
      {/* <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[280px] custom-bg-position1"
        style={{
          backgroundImage: "url('/images/background_2.jpg')",
          "background-size": "contain",
        }}
      >
        <style jsx>
          {`
            @media (max-width: 640px) {
              .custom-bg-position1 {
                background-position: center top 30px !important;
              }
            }
            @media (min-width: 768px) {
              .custom-bg-position1 {
                background-position: center top -80px !important;
              }
            }
            @media (min-width: 1024px) {
              .custom-bg-position1 {
                background-position: center top -130px !important;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black opacity-[0.5]"></div>
      </div> */}
    </div>
  );
}

export default ContactUs;
