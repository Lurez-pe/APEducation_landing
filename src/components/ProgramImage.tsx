import React, { useState } from 'react';
import { resolveAssetUrl } from './announcementStyles';

interface ProgramImageProps {
  src: string;
  alt: string;
  tone: string;
  className?: string;
}

export const ProgramImage: React.FC<ProgramImageProps> = ({ src, alt, tone, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`relative aspect-video w-full bg-gradient-to-br ${tone} ${className}`} role="img" aria-label={alt}>
        <span className="absolute inset-0 flex items-center justify-center text-white font-heading font-extrabold text-2xl">
          {alt.slice(0, 2).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={resolveAssetUrl(src)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`aspect-video w-full object-cover ${className}`}
    />
  );
};