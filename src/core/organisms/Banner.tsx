  import React from 'react';
  import BannerText from '../molecules/BannerText';
  import BannerButtons from '../molecules/BannerButtons';
  import { BannerProps } from '../types';

  const Banner: React.FC<BannerProps> = ({
    earMark,  
    title,
    description,
    button1Label,
    button2Label,
    backgroundImage,
  }) => {
    return (
      <section
        className="hero-banner relative flex items-center h-[500px]"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
        }}
        aria-labelledby="banner-title"
      >
        {backgroundImage && (
          <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
        )}

        <div className="relative z-10 p-8 w-full md:w-3/5 lg:w-3/5 xl:w-3/5">
          <BannerText title={title} description={description} earMark={earMark} />
          <BannerButtons button1Label={button1Label} button2Label={button2Label} />
        </div>
      </section>
    );
  };

  export default React.memo(Banner);