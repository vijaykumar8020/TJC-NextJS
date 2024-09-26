// types.ts

export interface ButtonProps {
    label: string;
    onClick?: () => void;
  }
  
  export interface BannerProps {
    earMark:string;
    title: string;
    description: string;
    button1Label: string;
    button2Label: string;
    backgroundVideoUrl?: string; // Video can be optional
    backgroundImage?: string; // Image can be optional
    isYouTube?: boolean; // Flag to check if video is YouTube or Vimeo
  }
  