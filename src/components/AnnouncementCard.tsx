import React from 'react';
import { Calendar, MapPin, ArrowUpRight, ZoomIn } from 'lucide-react';
import { Announcement } from '../types';
import { badgeStyles, resolveAssetUrl } from './announcementStyles';

interface AnnouncementCardProps {
  announcement: Announcement;
  onOpenImage: (announcement: Announcement) => void;
  onSelect?: () => void;
  variant?: 'horizontal' | 'vertical';
}

export const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  announcement,
  onOpenImage,
  onSelect,
  variant = 'horizontal',
}) => {
  const isVertical = variant === 'vertical';

  const handleOpenImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    onOpenImage(announcement);
  };

  return (
    <article
      onClick={onSelect}
      className={`relative overflow-hidden rounded-3xl border border-gray-100 dark:border-[#232252] bg-white dark:bg-[#151433] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ${
        isVertical ? 'flex flex-col' : 'flex flex-col md:flex-row'
      } ${onSelect ? 'cursor-pointer' : ''}`}
    >
      {/* Soft fusion wash — no hard cut between content and image */}
      {!isVertical && (
        <div
          aria-hidden
          className="absolute hidden md:block top-0 right-0 bottom-0 w-[55%] bg-gradient-to-l from-[#FDE3F0] via-[#EDE6FB]/55 to-transparent dark:from-[#1A1228] dark:via-[#14142E]/50 dark:to-transparent pointer-events-none"
        />
      )}
      <div aria-hidden className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#FFB600]/20 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-16 right-6 w-72 h-72 rounded-full bg-[#4705ED]/15 blur-3xl pointer-events-none" />

      {/* Content Zone */}
      <div
        className={`relative z-10 flex flex-col justify-center p-6 sm:p-8 ${
          isVertical ? 'order-2 w-full' : 'order-2 md:order-1 md:flex-1 lg:p-10'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full ${badgeStyles[announcement.type]}`}>
            {announcement.type}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4 text-[#FE007A]" />
            {announcement.date}
          </span>
        </div>

        <h3 className={`font-heading font-extrabold text-[#1C1C42] dark:text-white mt-4 ${isVertical ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'}`}>
          {announcement.title}
        </h3>
        <p className={`text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mt-3 text-justify ${isVertical ? 'max-w-full' : 'max-w-[80%]'}`}>
          {announcement.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 text-[#00E19B] flex-shrink-0" />
            {announcement.meta}
          </span>

          {announcement.cta && (
            <a
              href={announcement.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FE007A] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#e0006c] hover:-translate-y-0.5 transition-all"
            >
              {announcement.cta.label}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Tilted Image Zone — 4:5 frame, reduced, fused into the card */}
      <div
        className={`relative z-10 order-1 overflow-hidden ${
          isVertical
            ? 'w-full min-h-[240px] flex items-center justify-center bg-gradient-to-br from-[#EDE6FB] via-[#FDE3F0] to-[#DBF7EC] dark:from-[#14142E] dark:via-[#1A1228] dark:to-[#0F1B23]'
            : 'md:order-2 md:w-[40%] lg:w-[40%] min-h-[240px] md:min-h-[390px]'
        }`}
      >
        <button
          onClick={handleOpenImage}
          aria-label={`Ampliar imagen del anuncio ${announcement.title}`}
          className="absolute inset-0 flex items-center justify-center group cursor-zoom-in focus:outline-none"
        >
          <div className={`rotate-[12deg] rounded-md border-[6px] border-white dark:border-[#232252] shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105 ${
            isVertical ? '' : 'hidden md:block'
          }`}>
            <img
              src={resolveAssetUrl(announcement.image)}
              alt={`${announcement.title} — leer anuncio completo`}
              className={`object-cover ${
                isVertical
                  ? 'w-[140px] h-[175px] sm:w-[160px] sm:h-[200px]'
                  : 'w-[150px] h-[188px] sm:w-[180px] sm:h-[225px] md:w-[195px] md:h-[244px] lg:w-[210px] lg:h-[263px]'
              }`}
            />
          </div>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#1C1C42]/90 text-white text-[11px] font-bold px-3 py-1.5 shadow-lg pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5" />
            Ampliar
          </span>
        </button>
      </div>
    </article>
  );
};