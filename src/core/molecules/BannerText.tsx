import React from 'react';
import Text from '../atoms/Text';
import EarMark from '../atoms/EarMark';

interface BannerTextProps {
  earMark:string  
  title: string;
  description: string;
}

const BannerText: React.FC<BannerTextProps> = ({ title, description, earMark }) => {
  return (
    <div>
      <EarMark content={earMark} className="text-3xl font-bold mb-2" />  
      <Text content={title} className="text-3xl font-bold mb-2" />
      <Text content={description} className="text-lg mb-4" />
    </div>
  );
};

export default BannerText;
