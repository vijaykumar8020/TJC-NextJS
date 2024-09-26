import React from 'react';

import BannerText from '../core/molecules/BannerText';
import BannerButtons from '../core/molecules/BannerButtons';
// import EarMark from '../core/atoms/EarMark';

// interface BannerProps {
//   title: string;
//   description: string;
//   button1Label: string;
//   button2Label: string;
//   backgroundVideoUrl?: string;
//   backgroundImage?: string;
//   isYouTube?: boolean; 
// }

interface BannerProps {
  earMark: "Accreditation";
  title: "Banner Test Title";
  description: "Banner Test Description";
  button1Label: "Button 1";
  button2Label: "Button 2";
  backgroundVideoUrl?: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  backgroundImage?: "https://picsum.photos/seed/picsum/200/300";
  isYouTube?: boolean; 
}


const Banner: React.FC<BannerProps> = ({
  earMark,
  title,
  description,
  button1Label,
  button2Label,
  backgroundImage,
}) => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative z-10 p-8 bg-white bg-opacity-75 rounded">
        <BannerText title={title} description={description} earMark={earMark} />
        <BannerButtons button1Label={button1Label} button2Label={button2Label} />
      </div>
    </div>
  );
};

export default Banner;

// export default function Banner() {
//   return (
//     <div className="hero-banner flex justify-center items-center h-screen">
//       <div className="eyebrow-text">Accreditation</div>
//       <h1>Accreditation Process</h1>
//       <p>
//         Learn about our accreditation standards, the survey process, and what
//         they mean for your organization.{" "}
//       </p>
//       <p>
//         We want you to succeed in your accreditation. To help you prepare, we
//         offer a variety of support, technical resources, and educational
//         offerings.
//       </p>
//       <div className="cta-warp">
//         <Button label="See the Full Survey Activity Guide" />
//         <Button label="Contact a Team Member for Support" />
//       </div>
//     </div>
//   );
// }
