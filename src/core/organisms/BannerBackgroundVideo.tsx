import React, { useRef, useEffect } from 'react';

interface BannerBackgroundVideoProps {
  videoUrl: string;
  isMuted?: boolean;
  fallbackImage?: string;
}

const BannerBackgroundVideo: React.FC<BannerBackgroundVideoProps> = ({ videoUrl, isMuted = true }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, [videoUrl]);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${videoId}`;
    } else if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&background=1${isMuted ? '&muted=1' : ''}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className='hero-banner-video' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      ></iframe>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
    </div>
  );
};

export default BannerBackgroundVideo;