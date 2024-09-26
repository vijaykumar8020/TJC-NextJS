import React from 'react';

interface EarMarkProps {
  content: string;
  className?: string;
}

const EarMark: React.FC<EarMarkProps> = ({ content, className }) => {
  return <p className={className}>{content}</p>;
};

export default EarMark;
