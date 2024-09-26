import React from 'react';
import dynamic from 'next/dynamic';
import Banner from '../core/organisms/Banner';
import { BannerProps } from '../core/types'; // Importing the defined type

const BannerBackgroundVideo = dynamic(() => import('../core/organisms/BannerBackgroundVideo'), { ssr: false });

const youTubeVideoUrl = 'https://www.youtube.com/embed/a-V6fczA0NM'; // Replace with your YouTube video URL
// const vimeoVideoUrl = 'https://vimeo.com/1012770686'; // Replace with your Vimeo video URL

// Hardcoded dummy data simulating what might come from an API like Sitecore XMCloud
const bannerData: BannerProps = {
  earMark: "Accreditation",  
  title: 'Accreditation Process',
  description:
    'Learn about our accreditation standards, the survey process, and what they mean for your organization. We want you to succeed in your accreditation. To help you prepare, we offer a variety of support, technical resources, and educational offerings.',
  button1Label: 'See the Full Survey Activity Guide',
  button2Label: 'Contact a Team Member for Support',
  backgroundVideoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Replace with actual Vimeo or YouTube video ID
  backgroundImage: 'https://picsum.photos/seed/picsum/200/300', // If video is present, this can be empty
  isYouTube: false, // Set true for YouTube, false for Vimeo
};

const HomePage: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <Banner
        earMark={bannerData.earMark}
        title={bannerData.title}
        description={bannerData.description}
        button1Label={bannerData.button1Label}
        button2Label={bannerData.button2Label}
        backgroundVideoUrl={bannerData.backgroundVideoUrl}
        backgroundImage={bannerData.backgroundImage}
        isYouTube={bannerData.isYouTube}
      />
      {isMounted && <BannerBackgroundVideo videoUrl={youTubeVideoUrl} isMuted={true} />}
    </div>
  );
};

export default HomePage;