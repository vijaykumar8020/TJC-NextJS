import React from 'react';
import dynamic from 'next/dynamic';
import Banner from '../core/organisms/Banner';
import { BannerProps } from '../core/types';
import Image from 'next/image';
import Head from 'next/head';
import "../styles/globals.css";

const BannerBackgroundVideo = dynamic(() => import('../core/organisms/BannerBackgroundVideo'), { ssr: false });

const bannerData: BannerProps = {
  earMark: "Accreditation",  
  title: 'Accreditation Process',
  description:
    'Learn about our accreditation standards, the survey process, and what they mean for your organization. We want you to succeed in your accreditation. To help you prepare, we offer a variety of support, technical resources, and educational offerings.',
  button1Label: 'See the Full Survey Activity Guide',
  button2Label: 'Contact a Team Member for Support',
  backgroundVideoUrl: 'https://www.youtube.com/watch?v=zCogOPut4yQ',
  backgroundVimeoUrl: 'https://vimeo.com/1012770686',
  backgroundImage: 'https://picsum.photos/seed/picsum/2000/1000',
};

const HomePage: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderBackground = () => {
    if (isMounted) {
      if (bannerData.backgroundVideoUrl) {
        return (
          <div className="relative h-full w-full">
            <BannerBackgroundVideo 
              videoUrl={bannerData.backgroundVideoUrl} 
              isMuted={true}
            />
          </div>
        );
      } else if (bannerData.backgroundVimeoUrl) {
        return (
          <div className="relative h-full w-full">
            <BannerBackgroundVideo 
              videoUrl={bannerData.backgroundVimeoUrl} 
              isMuted={true}
            />
          </div>
        );
      }
    }
    
    if (bannerData.backgroundImage) {
      return (
        <div className="relative h-full w-full">
          <Image
            src={bannerData.backgroundImage}
            alt="Banner background"
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Head>
        {/* <title>{bannerData.title} | Your Organization Name</title> */}
        {/* <meta name="description" content={bannerData.description} /> */}
        <link rel="preload" href={bannerData.backgroundImage} as="image" />
      </Head>
      <main>
        <div className="relative h-[500px]" role="banner">
          {renderBackground()}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="absolute inset-0 z-20">
            <Banner
              earMark={bannerData.earMark}
              title={bannerData.title}
              description={bannerData.description}
              button1Label={bannerData.button1Label}
              button2Label={bannerData.button2Label}
              backgroundVideoUrl={bannerData.backgroundVideoUrl}
              backgroundVimeoUrl={bannerData.backgroundVimeoUrl}
              backgroundImage={bannerData.backgroundImage}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;