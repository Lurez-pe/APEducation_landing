import React, { useState, useEffect } from 'react';
import { X, Megaphone } from 'lucide-react';
import { Announcement } from '../types';

interface AnnouncementBarProps {
  announcement?: Announcement;
}

const STORAGE_KEY = 'ap_announcement_dismissed';

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ announcement }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!announcement) return;
    const dismissedId = localStorage.getItem(STORAGE_KEY);
    if (dismissedId === announcement.id) {
      setVisible(false);
    }
  }, [announcement]);

  if (!visible || !announcement) return null;

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, announcement.id);
  };

  return (
    <div
      role="region"
      aria-label="Anuncio destacado"
      className="bg-gradient-to-r from-[#FE007A] via-[#4705ED] to-[#00E19B] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
        <Megaphone className="w-4 h-4 flex-shrink-0" aria-hidden />
        <span className="truncate">
          {announcement.title} · {announcement.date}
        </span>
        {announcement.cta && (
          <a
            href={announcement.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 underline underline-offset-2 decoration-white/60 hover:text-white/90 font-bold whitespace-nowrap"
          >
            {announcement.cta.label} →
          </a>
        )}
        <button
          onClick={handleDismiss}
          aria-label="Ocultar anuncio"
          className="ml-2 p-1 rounded-md hover:bg-white/15 transition-colors flex-shrink-0 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};