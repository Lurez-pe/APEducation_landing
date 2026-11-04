import React, { useEffect } from 'react';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { Announcement } from '../types';
import { badgeStyles } from './announcementStyles';

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
        className="relative flex max-h-[calc(100dvh-0.75rem)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl dark:border-[#232252] dark:bg-[#151433] sm:max-h-[calc(100dvh-1rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Content — show full description/info, scrollable */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${badgeStyles[announcement.type]}`}>
                {announcement.type}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                <Calendar className="w-3.5 h-3.5 text-[#FE007A]" />
                {announcement.date}
              </span>
            </div>
            <h2 id="announcement-modal-title" className="font-heading font-extrabold text-xl sm:text-2xl text-[#1C1C42] dark:text-white">
              {announcement.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify whitespace-pre-line">
              {announcement.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100 dark:border-[#232252]">
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