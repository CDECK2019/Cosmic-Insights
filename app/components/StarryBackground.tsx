import Image from 'next/image';
import React from 'react';

interface StarryBackgroundProps {
  children: React.ReactNode;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/starry-background.jpg"
        alt="Starry night sky"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarryBackground;