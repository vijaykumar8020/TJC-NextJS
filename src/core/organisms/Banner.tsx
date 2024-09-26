
import React from 'react';
import BannerText from '../molecules/BannerText';
import BannerButtons from '../molecules/BannerButtons';
import { BannerProps } from '../types'; // Importing the defined type

// import EarMark from '../atoms/EarMark';

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

      {/* Banner Content */}
      <div className="relative z-10 p-8 bg-white bg-opacity-75 rounded">
        {/* <EarMark content={earMark} className="text-3xl font-bold mb-2" />   */}
        <BannerText title={title} description={description} earMark={earMark} />
        <BannerButtons button1Label={button1Label} button2Label={button2Label} />
      </div>
    </div>
  );
};

export default Banner;
