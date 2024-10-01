import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import "../styles/globals.css";

interface BannerProps {
  earmark?: string;
  title?: string;
  body?: string;
  imageUrl?: string;
  videoUrl?: string;
  cta1?: { url: string; text: string };
  cta2?: { url: string; text: string };
  contentPosition: 'left' | 'right';
  fontSize: 'S' | 'M' | 'L';
}

const Banner: React.FC<BannerProps> = ({ earmark, title, body, imageUrl, videoUrl, cta1, cta2, contentPosition, fontSize }) => {
  const showVideo = !!videoUrl;

  const getVideoId = (url: string) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const vimeoRegex = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) return { platform: 'youtube', id: youtubeMatch[1] };

    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[3] };

    return null;
  };

  const videoInfo = videoUrl ? getVideoId(videoUrl) : null;

  return (
    <section className="relative bg-black text-white h-[600px] max-h-[600px]" aria-labelledby="banner-title">
      <div className={`absolute inset-0 z-10 ${contentPosition === 'right' ? 'text-right' : 'text-left'} p-8 max-w-7xl mx-auto flex flex-col justify-center`}>
        {earmark && (
          <p className={`text-${fontSize} font-semibold uppercase tracking-wide text-gray-300`}>
            {earmark}
          </p>
        )}
        
        {title && (
          <h1 id="banner-title" className={`text-${fontSize === 'L' ? '5xl' : fontSize === 'M' ? '4xl' : '3xl'} font-bold`}>
            {title}
          </h1>
        )}
        
        {body && (
          <p className={`mt-4 text-${fontSize === 'L' ? 'lg' : fontSize === 'M' ? 'base' : 'sm'}`}>
            {body}
          </p>
        )}

        <div className="mt-8 flex space-x-4">
          {cta1 && (
            <a href={cta1.url} className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
              {cta1.text}
            </a>
          )}
          {cta2 && (
            <a href={cta2.url} className="px-6 py-3 bg-gray-600 rounded-lg text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
              {cta2.text}
            </a>
          )}
        </div>
      </div>

      {showVideo && videoInfo ? (
        <div className="absolute inset-0 w-full h-full">
          {videoInfo.platform === 'youtube' ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoInfo.id}?autoplay=1&mute=1&loop=1&playlist=${videoInfo.id}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://player.vimeo.com/video/${videoInfo.id}?autoplay=1&loop=1&background=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Vimeo video player"
            ></iframe>
          )}
        </div>
      ) : (
        imageUrl && (
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={imageUrl}
            alt=""
            aria-hidden="true"
            layout="fill"
          />
        )
      )}

      <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
    </section>
  );
};

// Dummy data for testing
const dummyBannerData: BannerProps = {
  earmark: "Accreditation",
  title: "Accreditation Process",
  body: "Learn about our accreditation standards, the survey process, and what they mean for your organization. We want you to succeed in your accreditation. To help you prepare, we offer a variety of support, technical resources, and educational offerings.",
  imageUrl: "https://picsum.photos/seed/picsum/2000/1000",
  videoUrl: "",
  cta1: { url: "/learn-more", text: "See the Full Survey Activity Guide" },
  cta2: { url: "/get-started", text: "Contact a Team Member for Support" },
  contentPosition: "left",
  fontSize: "M"
};

const BannerPage: NextPage = () => {
  return <Banner {...dummyBannerData} />;
};

export default BannerPage;
export { Banner };