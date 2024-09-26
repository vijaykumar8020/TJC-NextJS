import React from 'react';

interface TextProps {
  content: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ content, className }) => {
  return <p className={className}>{content}</p>;
};

export default Text;
