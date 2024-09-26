import React from 'react';
import ReactPlayer from 'react-player';

interface BannerBackgroundVideoProps {
    videoUrl: string;
    isMuted?: boolean;
  }
  
  const BannerBackgroundVideo: React.FC<BannerBackgroundVideoProps> = ({ videoUrl, isMuted = true }) => {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
        <ReactPlayer
          url={videoUrl}
          playing={true} // Auto-plays the video
          loop={true} // Loops the video
          muted={isMuted} // Mutes the video
          width="100vw"
          height="100vh"
          controls={false} // Hides video controls
          style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }} // Ensures the video covers the whole screen
        />
      </div>
    );
  };
  
  export default BannerBackgroundVideo;