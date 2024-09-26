import React from 'react';
import Button from '../atoms/Button';

interface BannerButtonsProps {
  button1Label: string;
  button2Label: string;
}

const BannerButtons: React.FC<BannerButtonsProps> = ({ button1Label, button2Label }) => {
  return (
    <div className="flex space-x-4">
      <Button label={button1Label} />
      <Button label={button2Label} />
    </div>
  );
};

export default BannerButtons;
