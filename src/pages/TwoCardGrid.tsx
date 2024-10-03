import React from 'react';
import { Button } from './Button';

interface ExpertGuidanceProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

export const ExpertGuidance: React.FC<ExpertGuidanceProps> = ({
  imageSrc,
  title,
  description,
  buttonText
}) => {
  return (
    <article className="flex flex-col px-4 max-w-[468px] text-zinc-800">
      <img loading="lazy" src={imageSrc} alt="" className="object-contain self-center w-24 aspect-square" />
      <h2 className="mt-4 text-2xl font-bold leading-7 text-center">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-6 text-center">
        {description}
      </p>
      <Button text={buttonText} />
    </article>
  );
}