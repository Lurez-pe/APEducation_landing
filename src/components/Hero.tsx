import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data';
import { badgeStyles, resolveAssetUrl } from './announcementStyles';

const FOCUS_INTERVAL_MS = 6000;
const TRANSITION_DURATION_MS = 900;
const PAUSE_ON_INTERACTION_MS = 4000;

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pauseUntil = useRef(0);
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
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
  }, []);

  const pauseAutoplay = () => {
    if (Date.now() < pauseUntil.current) return;
    pauseUntil.current = Date.now() + PAUSE_ON_INTERACTION_MS;
  };

  const moveCarousel = (direction: number) => {
    pauseAutoplay();
    setActiveIndex((current) => (current + direction + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const selectSlide = (index: number) => {
    pauseAutoplay();
    setActiveIndex(index);
  };

  return (
<section
      id="hero-section"
      className="relative pt-0 pb-12 lg:pb-16 overflow-hidden"
      onMouseEnter={() => pauseAutoplay()}
    >
      <div className="relative bg-[#151433] dark:bg-[#151433] shadow-2xl select-none">
          {/* Slides */}
          <div className="relative h-[100svh] min-h-[550px] sm:h-[700px]">
            {ANNOUNCEMENTS.map((announcement, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={announcement.id}
                  className={`absolute inset-0 transition-all duration-[900ms] ease-in-out ${
                    isActive ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  aria-hidden={!isActive}
                >
                  {/* Base dark background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C22] via-[#0D0C22]/95 to-[#0D0C22]/85" />

                  {/* Image on the right side */}
                  <img
                    src={resolveAssetUrl(announcement.image)}
                    alt=""
                    aria-hidden
                    className="absolute inset-y-0 right-0 h-full w-full lg:w-[55%] object-cover"
                  />
                  {/* Reading overlay that fades right so the image stays visible */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C22] via-[#0D0C22]/75 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-start justify-center max-w-2xl p-8 sm:p-12 lg:p-16 pt-48 sm:pt-56 lg:pt-60 lg:ml-10">
                    <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold uppercase tracking-wider mb-5 ${
                      announcement.type === 'Gratuito'
                        ? 'text-[#00E19B]'
                        : announcement.type === 'Evento'
                          ? 'text-[#FE007A]'
                          : announcement.type === 'Convocatoria'
                            ? 'text-[#FFB600]'
                            : 'text-[#A78BFA]'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        announcement.type === 'Gratuito'
                          ? 'bg-[#00E19B] animate-ping'
                          : announcement.type === 'Evento'
                            ? 'bg-[#FE007A] animate-ping'
                            : announcement.type === 'Convocatoria'
                              ? 'bg-[#FFB600] animate-ping'
                              : 'bg-[#A78BFA] animate-ping'
                      }`} />
                      {announcement.type} · {announcement.date}
                    </span>

                    <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.12] tracking-tight mb-5">
                      {announcement.title}
                    </h1>

                    <p className="text-base sm:text-lg text-white/85 max-w-xl mb-8 leading-relaxed">
                      {announcement.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      {announcement.cta ? (
                        <a
                          href={announcement.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FE007A] text-white font-bold text-base hover:bg-[#e0006c] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
                        >
                          <span>{announcement.cta.label}</span>
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      ) : (
                        <a
                          href="#anuncios"
                          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FE007A] text-white font-bold text-base hover:bg-[#e0006c] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
                        >
                          <span>Más información</span>
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      )}

                      <span className="text-xs sm:text-sm text-white/70 font-medium">
                        {announcement.meta}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            title="Anuncio anterior"
            aria-label="Ver anuncio anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white shadow-lg hover:bg-white/30 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            title="Siguiente anuncio"
            aria-label="Ver siguiente anuncio"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white shadow-lg hover:bg-white/30 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center gap-2" aria-label="Indicadores de anuncios">
            {ANNOUNCEMENTS.map((announcement, index) => (
              <button
                key={announcement.id}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Ver anuncio ${index + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === index ? 'w-8 bg-[#FE007A]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
    </section>
  );
};