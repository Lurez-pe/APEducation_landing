import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data';
import { HeroSlide } from '../types';
import { resolveAssetUrl } from './announcementStyles';

const FOCUS_INTERVAL_MS = 6000;
const TRANSITION_DURATION_MS = 900;
const PAUSE_ON_INTERACTION_MS = 4000;

const HERO_BACKDROP = 'absolute inset-0 bg-gradient-to-r from-[#0D0C22] via-[#0D0C22]/95 to-[#0D0C22]/85';
const HERO_OVERLAY =
  'absolute inset-0 z-[5] pointer-events-none bg-gradient-to-b from-[#0D0C22]/92 via-[#0D0C22]/65 to-[#0D0C22]/15 lg:bg-gradient-to-r lg:from-[#0D0C22] lg:via-[#0D0C22]/75 lg:to-transparent';

const HeroContent: React.FC<{ slide: HeroSlide }> = ({ slide }) => (
  <>
    <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white leading-[1.12] tracking-tight mb-1.5 sm:mb-5">
      {slide.title}
    </h1>

    {slide.subtitle && (
      <p className="font-heading font-bold text-base sm:text-xl lg:text-2xl text-white/95 leading-snug tracking-tight mb-1.5 sm:mb-4">
        {slide.subtitle}
      </p>
    )}

    <p className="text-sm sm:text-base lg:text-base text-white/85 max-w-xl leading-relaxed">
      {slide.description}
    </p>
  </>
);

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pauseUntil = useRef(0);
  const transitionTimer = useRef<number | null>(null);

  const pauseAutoplay = () => {
    if (Date.now() < pauseUntil.current) return;
    pauseUntil.current = Date.now() + PAUSE_ON_INTERACTION_MS;
  };

  const moveCarousel = (direction: number) => {
    pauseAutoplay();
    setActiveIndex(
      (current) => (current + direction + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  const selectSlide = (index: number) => {
    pauseAutoplay();
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (Date.now() < pauseUntil.current) return;
      if (transitionTimer.current) return;
      setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
      transitionTimer.current = window.setTimeout(() => {
        transitionTimer.current = null;
      }, TRANSITION_DURATION_MS);
    }, FOCUS_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    };
  }, []);

  return (
    <section
      id="hero-section"
      className="relative pt-0 pb-0 overflow-hidden"
      onMouseEnter={pauseAutoplay}
    >
      <div className="relative bg-[#151433] dark:bg-[#151433] shadow-2xl select-none">
        {/* Slides */}
        <div className="relative h-[calc(100svh+100px)] min-h-[650px] sm:h-[800px]">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
                  isActive ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                {/* Base dark background */}
                <div className={HERO_BACKDROP} />

                {/* Content: top 40% of the card on mobile, 40% left column on desktop */}
                <div className="relative z-10 flex flex-col items-start justify-start h-[40%] max-w-2xl p-6 sm:p-12 lg:p-16 pt-[170px] sm:pt-40 lg:pt-36 lg:ml-10 lg:w-[40%] lg:max-w-none lg:h-full lg:justify-center">
                  <HeroContent slide={slide} />
                </div>

                {/* Imagen de fondo de toda la tarjeta */}
                <picture className="absolute inset-0 h-full w-full">
                  <source
                    media="(min-width: 1024px)"
                    srcSet={resolveAssetUrl(slide.imageHeroDesktop)}
                  />
                  <img
                    src={resolveAssetUrl(slide.imageHeroMobile)}
                    alt=""
                    aria-hidden
                    loading={isActive ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </picture>

                {/* Reading overlay: vertical on mobile, horizontal on desktop */}
                <div className={HERO_OVERLAY} />
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => moveCarousel(-1)}
          title="Anuncio anterior"
          aria-label="Ver slide anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white shadow-lg hover:bg-white/30 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={() => moveCarousel(1)}
          title="Siguiente slide"
          aria-label="Ver slide siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white shadow-lg hover:bg-white/30 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicators */}
        <div
          className="absolute bottom-5 left-0 right-0 z-30 flex justify-center gap-2"
          aria-label="Indicadores de slides"
        >
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => selectSlide(index)}
              aria-label={`Ver slide ${index + 1}`}
              aria-current={activeIndex === index}
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
