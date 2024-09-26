import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="bg-primary text-white px-custom-p py-custom-m rounded"
    >
      {label}
    </button>
  );
};

export default Button;
