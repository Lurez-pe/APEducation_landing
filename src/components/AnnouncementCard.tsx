import React from 'react';
import { Calendar, MapPin, ArrowUpRight, ZoomIn } from 'lucide-react';
import { Announcement } from '../types';
import { badgeStyles, resolveAssetUrl, accentStyles } from './announcementStyles';

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
      className={`relative overflow-hidden rounded-3xl border border-gray-100 dark:border-[#232252] bg-white dark:bg-[#151433] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 mx-auto ${
        isVertical ? 'flex flex-col w-full max-w-[300px] sm:max-w-[320px] min-h-[490px]' : 'flex flex-col md:flex-row'
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

      {/* Tilted Image Zone — top of the portrait card */}
      <div
        className={`relative z-10 order-1 overflow-hidden ${
          isVertical
            ? 'w-full h-[220px] sm:h-[250px] flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#EDE6FB] via-[#FDE3F0] to-[#DBF7EC] dark:from-[#14142E] dark:via-[#1A1228] dark:to-[#0F1B23]'
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
              className={`object-contain aspect-[9/16] ${
                isVertical
                  ? 'h-[188px] sm:h-[212px]'
                  : 'h-[188px] sm:h-[225px] md:h-[244px] lg:h-[263px]'
              }`}
            />
          </div>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#1C1C42]/90 text-white text-[11px] font-bold px-3 py-1.5 shadow-lg pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5" />
            Ampliar
          </span>
        </button>
      </div>

      {/* Content Zone */}
      <div
        className={`relative z-10 flex flex-col justify-center p-5 sm:p-6 ${
          isVertical ? 'order-2 w-full flex-1' : 'order-2 md:order-1 md:flex-1 lg:p-10'
        }`}
      >
        {(announcement.type || announcement.date) && (
          <div className="flex flex-wrap items-center gap-2">
            {announcement.type && (
              <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full ${badgeStyles[announcement.type]}`}>
                {announcement.type}
              </span>
            )}
            {announcement.date && (
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                <Calendar className="w-3.5 h-3.5 text-[#FE007A]" />
                {announcement.date}
              </span>
            )}
          </div>
        )}

        <h3 className={`font-heading font-extrabold bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent ${announcement.type || announcement.date ? 'mt-3' : ''} leading-tight ${isVertical ? 'text-lg sm:text-2xl' : 'text-xl sm:text-3xl'}`}>
          <span className="line-clamp-2">{announcement.title}</span>
        </h3>
        {announcement.subtitle && (
          <p className="font-heading font-bold text-brand-purple dark:text-brand-teal mt-1.5 leading-snug">
            {announcement.subtitle}
          </p>
        )}
        <p className={`text-[9.5px] leading-snug mt-2 text-justify ${isVertical ? 'max-w-full' : 'max-w-[80%]'} text-[#1C1C42]/70 dark:text-gray-400`}>
          {announcement.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          {announcement.meta ? (
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${announcement.type ? accentStyles[announcement.type] : 'text-gray-500 dark:text-gray-400'}`}>
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              {announcement.meta}
            </span>
          ) : (
            <span />
          )}

          {announcement.cta && (
            <a
              href={announcement.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4705ED] px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-[#3a04c4] hover:-translate-y-0.5 transition-all"
            >
              {announcement.cta.label}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>


      </div>
    </article>
  );
};