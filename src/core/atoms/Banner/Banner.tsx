import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy"; // Lazy load the player
import Image from "next/image";
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

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
              <PauseIcon
                className="mx-2 size-8 text-black"
                aria-hidden="true"
              />
            ) : (
              <PlayIcon className="mx-2 size-8 text-black" aria-hidden="true" />
            )}
          </button>
        )}
        {mediaType === "video" && (
          <button onClick={handleMuteUnmute}>
            {/* {isMuted ? "Unmute" : "Mute"} */}
            {isMuted ? (
             <SpeakerXMarkIcon className="mx-2 size-8 text-black" aria-hidden="true" />
            ) : (
                <SpeakerWaveIcon className="mx-2 size-8 text-black" aria-hidden="true" />
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
