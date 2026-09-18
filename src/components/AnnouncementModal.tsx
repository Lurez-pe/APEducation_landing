import React from 'react';
import { Calendar, MapPin, ArrowUpRight, X } from 'lucide-react';
import { Announcement } from '../types';
import { badgeStyles, resolveAssetUrl } from './announcementStyles';

interface AnnouncementModalProps {
  announcement: Announcement;
  onClose: () => void;
}

export const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ announcement, onClose }) => {
  return (
    <div
      id="announcement-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
    >
      <div
        id="announcement-modal-content"
        className="relative flex max-h-[calc(100dvh-0.75rem)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl dark:border-[#232252] dark:bg-[#151433] sm:max-h-[calc(100dvh-1rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header — compact to leave room for the image */}
        <div className="relative flex-shrink-0 bg-gradient-to-r from-[#EDE6FB] via-[#FDEBF5] to-[#FDE3F0] p-2 sm:p-3 border-b border-[#4705ED]/10 dark:from-[#14142E] dark:via-[#1A1228] dark:to-[#161236] dark:border-[#232252]">
          <button
            id="close-announcement-modal-btn"
            onClick={onClose}
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#1C1C42]/10 hover:bg-[#1C1C42]/20 text-[#1C1C42] dark:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar anuncio"
          >
            <X className="w-4 h-4" />
          </button>
          <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full ${badgeStyles[announcement.type]}`}>
            {announcement.type}
          </span>
          <h2 className="font-heading font-extrabold text-sm sm:text-base pr-10 text-[#1C1C42] dark:text-white mt-1">
            {announcement.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-[11px] font-semibold mt-0.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#FE007A]" />
            {announcement.date}
          </p>
        </div>

        {/* Modal Image — large centered 4:5 frame, image always complete */}
        <div className="min-h-0 flex-1 flex items-center justify-center overflow-hidden bg-[#FAFAFE] dark:bg-[#0D0C22] p-2 sm:p-3">
          <div className="relative aspect-[4/5] h-[calc(100dvh-12rem)] max-h-full max-w-full w-auto rounded-xl border border-gray-100 dark:border-[#232252] shadow-lg overflow-hidden">
            <img
              src={resolveAssetUrl(announcement.image)}
              alt={`${announcement.title} — anuncio completo`}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Modal Footer — compact to avoid scrolling */}
        <div className="flex-shrink-0 flex flex-col gap-2 border-t border-gray-100 bg-gray-50 p-2 sm:p-3 dark:border-[#232252] dark:bg-[#0D0C22]">
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed text-justify line-clamp-1">
            {announcement.description}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 dark:text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#00E19B] flex-shrink-0" />
              {announcement.meta}
            </span>
            {announcement.cta && (
              <a
                href={announcement.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#FE007A] px-3.5 py-1.5 text-xs font-bold text-white shadow-md hover:bg-[#e0006c] transition-all"
              >
                {announcement.cta.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};