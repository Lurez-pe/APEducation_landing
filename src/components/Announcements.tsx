import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data';
import { Announcement } from '../types';
import { AnnouncementCard } from './AnnouncementCard';
import { AnnouncementModal } from './AnnouncementModal';

/** Con hasta GRID_LIMIT anuncios se muestran en grilla; con más, en carrusel. */
const GRID_LIMIT = 3;

const FOCUS_INTERVAL_MS = 4500;
const TRANSITION_DURATION_MS = 900;
const PAUSE_ON_INTERACTION_MS = 3500;

export const Announcements: React.FC = () => {
  const [active, setActive] = useState<Announcement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const pauseUntil = useRef(0);
  const transitionTimer = useRef<number | null>(null);

  const isCarousel = ANNOUNCEMENTS.length > GRID_LIMIT;

  useEffect(() => {
    if (!isCarousel) return;

    const interval = window.setInterval(() => {
      if (Date.now() < pauseUntil.current) return;
      if (transitionTimer.current) return;
      setActiveIndex((current) => (current + 1) % ANNOUNCEMENTS.length);
      transitionTimer.current = window.setTimeout(() => {
        transitionTimer.current = null;
      }, TRANSITION_DURATION_MS);
    }, FOCUS_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    };
  }, [isCarousel]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const pauseAutoplay = () => {
    if (Date.now() >= pauseUntil.current) {
      pauseUntil.current = Date.now() + PAUSE_ON_INTERACTION_MS;
    }
  };

  const moveCarousel = (direction: number) => {
    pauseAutoplay();
    setActiveIndex((current) => (current + direction + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const selectCarouselItem = (index: number) => {
    pauseAutoplay();
    setActiveIndex(index);
  };

  const closeModal = () => setActive(null);

  return (
    <section id="anuncios" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
            Novedades y Agenda
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-4">
            Anuncios y Convocatorias
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Actividades gratuitas, eventos en los que participamos y convocatorias abiertas para nuestra comunidad.
            Toca la imagen para leer el anuncio completo.
          </p>
        </div>

        {isCarousel ? (
          /* Carrusel — activo cuando hay más de GRID_LIMIT anuncios */
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-10 px-10 sm:px-14">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              title="Anuncio anterior"
              aria-label="Ver anuncio anterior"
              className="absolute left-0 sm:left-4 top-1/2 z-30 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#151433] border border-gray-200 dark:border-[#232252] text-[#4705ED] dark:text-[#00E19B] shadow-lg hover:scale-105 hover:border-[#FE007A] transition-all cursor-pointer flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="relative min-h-[620px] sm:min-h-[480px]">
              {ANNOUNCEMENTS.map((announcement, index) => {
                const rawOffset = index - activeIndex;
                const offset =
                  rawOffset > ANNOUNCEMENTS.length / 2
                    ? rawOffset - ANNOUNCEMENTS.length
                    : rawOffset < -ANNOUNCEMENTS.length / 2
                      ? rawOffset + ANNOUNCEMENTS.length
                      : rawOffset;
                const distance = Math.abs(offset);
                const isActive = offset === 0;
                const isLevelTwo = distance === 1;

                return (
                  <div
                    key={announcement.id}
                    className="absolute left-1/2 top-1/2 w-[min(560px,80vw)] px-1 transition-all duration-[900ms] ease-in-out"
                    style={{
                      transform: `translate(calc(-50% + ${offset * 14}vw), -50%) scale(${isActive ? 1.15 : isLevelTwo ? 1 : 0.8})`,
                      filter: isActive ? 'none' : isLevelTwo ? 'blur(1.5px)' : 'blur(3px)',
                      opacity: isActive ? 1 : isLevelTwo ? 0.62 : 0.38,
                      zIndex: isActive ? 20 : isLevelTwo ? 18 : 15,
                    }}
                  >
                    <AnnouncementCard
                      announcement={announcement}
                      onOpenImage={setActive}
                      onSelect={isActive ? undefined : () => selectCarouselItem(index)}
                    />
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => moveCarousel(1)}
              title="Siguiente anuncio"
              aria-label="Ver siguiente anuncio"
              className="absolute right-0 sm:right-4 top-1/2 z-30 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#151433] border border-gray-200 dark:border-[#232252] text-[#4705ED] dark:text-[#00E19B] shadow-lg hover:scale-105 hover:border-[#FE007A] transition-all cursor-pointer flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-6" aria-label="Indicadores de anuncios">
              {ANNOUNCEMENTS.map((announcement, index) => (
                <button
                  key={announcement.id}
                  type="button"
                  onClick={() => selectCarouselItem(index)}
                  aria-label={`Ver anuncio ${index + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === index ? 'w-8 bg-[#FE007A]' : 'w-2 bg-gray-300 dark:bg-[#232252] hover:bg-[#4705ED]'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grilla — anuncios en filas */
          <div
            className={`grid grid-cols-1 gap-6 lg:gap-8 ${
              ANNOUNCEMENTS.length === GRID_LIMIT ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
            }`}
          >
            {ANNOUNCEMENTS.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
                onOpenImage={setActive}
                variant={ANNOUNCEMENTS.length === GRID_LIMIT ? 'vertical' : 'horizontal'}
              />
            ))}
          </div>
        )}
      </div>

      {active && <AnnouncementModal announcement={active} onClose={closeModal} />}
    </section>
  );
};