import React, { useEffect } from 'react';
import { Calendar, MapPin, ArrowUpRight, X } from 'lucide-react';
import { Announcement } from '../types';
import { badgeStyles, resolveAssetUrl } from './announcementStyles';

interface AnnouncementModalProps {
  announcement: Announcement;
  onClose: () => void;
}

export const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ announcement, onClose }) => {
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <div
      id="announcement-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
    >
      <div
        id="announcement-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcement-modal-title"
        className="relative flex max-h-[calc(100dvh-1rem)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl dark:border-[#232252] dark:bg-[#151433]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative flex-shrink-0 bg-gradient-to-r from-[#EDE6FB] via-[#FDEBF5] to-[#FDE3F0] p-3 sm:p-4 border-b border-[#4705ED]/10 dark:from-[#14142E] dark:via-[#1A1228] dark:to-[#161236] dark:border-[#232252]">
          <button
            id="close-announcement-modal-btn"
            onClick={onClose}
            autoFocus
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1C1C42]/10 hover:bg-[#1C1C42]/20 text-[#1C1C42] dark:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar anuncio"
          >
            <X className="w-4 h-4" />
          </button>
          <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${badgeStyles[announcement.type]}`}>
            {announcement.type}
          </span>
          <h2 id="announcement-modal-title" className="font-heading font-extrabold text-base sm:text-lg pr-10 text-[#1C1C42] dark:text-white mt-1">
            {announcement.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold mt-0.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#FE007A]" />
            {announcement.date}
          </p>
        </div>

        {/* Modal Body - scrollable */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-center bg-[#FAFAFE] dark:bg-[#0D0C22] p-3 sm:p-4">
            <div className="relative w-full max-w-[420px] aspect-[1122/1402] rounded-xl border border-gray-100 dark:border-[#232252] shadow-lg overflow-hidden">
              {announcement.video ? (
                <video
                  src={resolveAssetUrl(announcement.video)}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={announcement.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              ) : announcement.image ? (
                <img
                  src={resolveAssetUrl(announcement.image)}
                  alt={`${announcement.title} — anuncio completo`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 p-4 sm:p-5 dark:border-[#232252] dark:bg-[#0D0C22]">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify whitespace-pre-line">
              {announcement.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-[#00E19B] flex-shrink-0" />
                {announcement.meta}
              </span>
              {announcement.cta && (
                <a
                  href={announcement.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FE007A] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#e0006c] transition-all"
                >
                  {announcement.cta.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};