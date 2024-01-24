import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Production() {
  const videos = [
    "https://www.youtube.com/watch?v=phQxK5u8IEs",
    "https://www.youtube.com/watch?v=c3Y98Iit9QY",
    "https://www.youtube.com/watch?v=GJZz2TSBS7Y",
    // Add more video URLs as needed
  ];

  const apiKey = "AIzaSyD7J-BO8vYEKC6Ay-L1wFWdjqJeN80er_M";

  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const requests = videos.map((videoUrl) => {
        const videoId = new URLSearchParams(new URL(videoUrl).search).get("v");
        return axios.get("https://www.googleapis.com/youtube/v3/videos", {
          params: {
            part: "snippet,contentDetails,statistics",
            id: videoId,
            key: apiKey,
          },
        });
      });

      try {
        const responses = await axios.all(requests);
        const details = responses.map(
          (response) => response.data.items[0].snippet
        );
        setVideoDetails(details);
      } catch (error) {
        console.error("Error making API requests:", error);
      }
    };

    fetchVideoDetails();
  }, []);

  return (
    <div className="h-screen grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 bg-black">
      {videoDetails.map((video, index) => (
        <div key={index} className="relative overflow-hidden">
          <img
            src={video.thumbnails.standard.url}
            alt={video.title}
            className="object-cover w-full h-full"
          />
          <a
            href={videos[index]}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center text-white"
          />
        </div>
      ))}
    </div>
  );
}
