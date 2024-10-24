import { useState, useEffect } from "react";
import Banner from "../core/atoms/Banner/Banner";
import "../styles/globals.css";

const ExampleBannerUsage = () => {
  const [isClient, setIsClient] = useState(false);
  //   const mediaUrl = 'https://youtu.be/wNdvxLzWUQg'; // Example video URL (YouTube)
  // https://www.youtube.com/watch?v=BZP1rYjoBgI // 30 second video
  const mediaUrl = "https://youtu.be/BZP1rYjoBgI"; // Example video URL (YouTube)
  // const mediaUrl = 'https://vimeo.com/208791851'; // Vimeo
  const imageUrl = "";
  const mediaType = imageUrl ? "image" : "video"; // Prioritize image if available

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Banner mediaUrl={mediaUrl} mediaType={mediaType} imageUrl={imageUrl} />
  );
};
export default ExampleBannerUsage;
