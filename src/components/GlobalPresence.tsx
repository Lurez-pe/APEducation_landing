import React, { useEffect, useRef, useState } from 'react';
import { resolveAssetUrl } from './announcementStyles';

export const GlobalPresence: React.FC = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="presencia-global" className="relative py-[3cm] overflow-hidden">
      {/* Desktop (lg+): full-bleed background image, gradient only on the left, right stays clean */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          src={resolveAssetUrl('assets/brand/globo_pink.jpg')}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent dark:from-[#0D0C22]/95 dark:via-[#0D0C22]/75 dark:to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Description column */}
          <div className="relative">
            {/* Narrow screens: LEFT half of the image stays behind the description */}
            <div className="absolute inset-0 -mx-4 sm:-mx-6 -my-8 lg:hidden overflow-hidden rounded-3xl">
              <img
                src={resolveAssetUrl('assets/brand/globo_pink.jpg')}
                alt=""
                aria-hidden
                className="absolute left-0 w-[200%] h-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 dark:from-[#0D0C22]/95 dark:via-[#0D0C22]/80 dark:to-[#0D0C22]/25" />
            </div>

            <div className="relative max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4705ED] dark:text-[#00E19B]">
                Presencia Internacional
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent mt-2 mb-6">
                Academia AP Education: Educación sin fronteras
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                Con presencia en Perú, Colombia, Chile, México y Estados Unidos, impulsamos una
                educación digital que integra aprendizaje, innovación y tecnología para preparar a
                estudiantes para un mundo global.
              </p>
            </div>
          </div>

          {/* Narrow screens: RIGHT half of the image below the description */}
          <div
            ref={imageRef}
            className={`lg:hidden relative mt-10 h-[300px] sm:h-[360px] overflow-hidden rounded-3xl shadow-xl transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src={resolveAssetUrl('assets/brand/globo_pink.jpg')}
              alt="Presencia de AP Education en el mundo"
              className="absolute right-0 w-[200%] h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};