import React from 'react';
import { Calendar, MapPin, ArrowUpRight, ZoomIn } from 'lucide-react';
import { Announcement } from '../types';
import { badgeStyles, resolveAssetUrl, accentStyles } from './announcementStyles';

interface AnnouncementCardProps {
  announcement: Announcement;
  onOpenImage: (announcement: Announcement) => void;
  onSelect?: () => void;
}

export const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  announcement,
  onOpenImage,
  onSelect,
}) => {
  const handleOpenImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    onOpenImage(announcement);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onSelect && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      aria-label={onSelect ? `${announcement.title} — seleccionar anuncio` : undefined}
      className={`relative overflow-hidden rounded-3xl border border-gray-100 dark:border-[#232252] bg-white dark:bg-[#151433] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 mx-auto flex flex-col w-full max-w-[300px] sm:max-w-[320px] min-h-[490px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE007A] ${
        onSelect ? 'cursor-pointer' : ''
      }`}
    >
      <div aria-hidden className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#FFB600]/20 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-16 right-6 w-72 h-72 rounded-full bg-[#4705ED]/15 blur-3xl pointer-events-none" />

      {/* Tilted Image Zone — top of the portrait card */}
      <div className="relative z-10 order-1 overflow-hidden w-full h-[220px] sm:h-[250px] flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#EDE6FB] via-[#FDE3F0] to-[#DBF7EC] dark:from-[#14142E] dark:via-[#1A1228] dark:to-[#0F1B23]">
        <button
          onClick={handleOpenImage}
          aria-label={`Ampliar imagen del anuncio ${announcement.title}`}
          className="absolute inset-0 flex items-center justify-center group cursor-zoom-in focus:outline-none"
        >
          <div className="rotate-[12deg] rounded-md border-[6px] border-white dark:border-[#232252] shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105">
            {announcement.video ? (
              <video
                src={resolveAssetUrl(announcement.video)}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={announcement.title}
                className="object-cover w-[150px] h-[188px] sm:w-[170px] sm:h-[212px]"
              />
            ) : announcement.image ? (
              <img
                src={resolveAssetUrl(announcement.image)}
                alt={`${announcement.title} — leer anuncio completo`}
                className="object-contain w-[150px] h-[188px] sm:w-[170px] sm:h-[212px]"
              />
            ) : null}
          </div>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#1C1C42]/90 text-white text-[11px] font-bold px-3 py-1.5 shadow-lg pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5" />
            Ampliar
          </span>
        </button>
      </div>

      {/* Content Zone */}
      <div className="relative z-10 flex flex-col justify-center p-5 sm:p-6 order-2 w-full flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full ${badgeStyles[announcement.type]}`}>
            {announcement.type}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 dark:text-gray-400">
            <Calendar className="w-3.5 h-3.5 text-[#FE007A]" />
            {announcement.date}
          </span>
        </div>

        <h3 className="font-heading font-extrabold text-lg sm:text-2xl bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent mt-3 leading-tight">
          <span className="line-clamp-2">{announcement.title}</span>
        </h3>
        <p className="text-[9.5px] leading-snug mt-2 text-justify max-w-full line-clamp-3 text-[#1C1C42]/70 dark:text-gray-400">
          {announcement.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${accentStyles[announcement.type]}`}>
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            {announcement.meta}
          </span>

          {announcement.cta && (
            <a
              href={announcement.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
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
