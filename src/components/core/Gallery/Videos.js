import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Button from "../../common/Button";
import { videoLink } from "../../../data/video-links";
import { gallery } from "../../../data/galleryimages"
{/* <iframe
                      width="100%"
                      height="315"
                      src={video?.link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe> */}
function VideoManager() {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL;

  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(1); // State for pagination
  const [loading, setLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin");
  const videoCapacity = 7;
  const videosPerPage = 4; // Videos per page

  // Calculate the indices for the current page's videos
  const startIndex = (page - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  // Paginated list of videos
  const paginatedVideos = videos.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages =
    Math.ceil(videos.length / videosPerPage) === 0
      ? 1
      : Math.ceil(videos.length / videosPerPage);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    // Scroll to the top of the page whenever the page changes
    window.scrollTo(0, 0);
  }, [page]);


  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [videoLink]);


  return (
    <div className="">
      <div className="bg-[#ffffff] pb-10 px-3 md:px-12 lg:px-14">
        <div className="text-[#db2929] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
          Our Videos
        </div>


        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 lg:gap-14 lg:mx-10">
          {videoLink?.map((video, index) => (
            <div key={index} className="mb-4 border p-2 rounded">
              <div               
              className="w-full flex justify-center items-center"
              style={{
                minHeight: "400px",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
                border:"10px"
              }}>
                {/* Embedded Instagram Video */}

                <blockquote
                className="instagram-media"
                data-instgrm-permalink={video?.link}
                data-instgrm-version="14"
                style={{
                  width: "100%",
                  minHeight: "400px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "block",
                }}
              ></blockquote>
              </div>

              <h3 className="text-lg font-rubik-vinyl font-bold my-1 max-h-[60px] overflow-hidden">
                {video?.title}
              </h3>
              <p className="font-rubik-vinyl overflow-y-auto max-h-[120px]">
                {video?.description}
              </p>
            </div>
          ))}
        </div>


        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 space-x-4 mb-16">
          {/* Previous Button */}
          <button
            className="text-[#242424] border-[1px] border-[#a5a5a5] py-2 px-4 bg-[#dadada] hover:bg-[#afafaf] font-roboto"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </button>

          {/* Page Number */}
          <div className="text-[#242424] py-2 px-4">
            Page {page} of {totalPages}
          </div>

          {/* Next Button */}
          <button
            className="text-[#242424] border-[1px] border-[#a5a5a5] py-2 px-4 bg-[#dadada] hover:bg-[#afafaf] font-roboto"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>

        {/* Add Video Form */}
      </div>
    </div>
  );
}


export default VideoManager;