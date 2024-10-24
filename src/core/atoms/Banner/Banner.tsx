import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy"; // Lazy load the player
import Image from "next/image";
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface BannerProps {
  mediaUrl: string;
  mediaType: "video" | "image";
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ mediaUrl, mediaType, imageUrl }) => {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    const currentPlayer = playerRef.current;
    if (currentPlayer) {
      observer.observe(currentPlayer);
    }

    return () => {
      if (currentPlayer) {
        observer.unobserve(currentPlayer);
      }
    };
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="banner-container">
      {mediaType === "video" ? (
        <div ref={playerRef}>
          <ReactPlayer
            url={mediaUrl}
            playing={isPlaying}
            muted={isMuted}
            controls={false}
            width="100%"
            height="100%"
            loop
            playsinline
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous",
                },
              },
            }}
          />
        </div>
      ) : (
        <Image
          src={imageUrl}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      )}

      <div className="controls">
        {mediaType === "video" && (
          <button onClick={handlePlayPause}>
            {/* {isPlaying ? "Pause" : "Play"} */}
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            )}
          </button>
        )}
        {mediaType === "video" && (
          <button onClick={handleMuteUnmute}>
            {/* {isMuted ? "Unmute" : "Mute"} */}
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      <style jsx>{`
        .banner-container {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }
        .controls {
          position: absolute;
          bottom: 20px;
          left: 20px;
          display: flex;
          gap: 10px;
          z-index: 10;
        }
        button {
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
export default Banner;
