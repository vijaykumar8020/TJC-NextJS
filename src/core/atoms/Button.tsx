import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="bg-primary text-white"
    >
      {label}
    </button>
  );
};

export default Button;
