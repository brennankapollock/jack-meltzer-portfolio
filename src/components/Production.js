import React from "react";
import Slider from "react-slick";

export default function Production() {
  const videos = [
    "https://www.youtube.com/watch?v=phQxK5u8IEs",
    "https://www.youtube.com/watch?v=c3Y98Iit9QY",
    "https://www.youtube.com/watch?v=GJZz2TSBS7Y",
    // Add more video URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="text-2xl flex flex-col items-center gap-12">
          <Slider {...settings} className="production-carousel">
            {videos.map((video, index) => (
              <div key={index}>
                <iframe
                  width="560"
                  height="315"
                  src={video.replace("watch?v=", "embed/")}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
