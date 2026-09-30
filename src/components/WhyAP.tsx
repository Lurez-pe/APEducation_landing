import React, { useEffect, useRef } from 'react';
import { resolveAssetUrl } from './announcementStyles';

const features = [
  {
    number: '01',
    emoji: '🚀',
    title: 'Metodología STEM',
    description:
      'Aprendemos haciendo. Desarrollamos el pensamiento crítico, la creatividad y la resolución de problemas a través de experiencias prácticas y proyectos.',
    image: 'assets/metodologia/metodologia_01.jpg',
  },
  {
    number: '02',
    emoji: '🎯',
    title: 'Aprendizaje personalizado',
    description:
      'Clases grupales y personalizadas adaptadas al nivel, ritmo y objetivos de cada estudiante, desde primaria hasta la universidad.',
    image: 'assets/metodologia/metodologia_02.jpg',
  },
  {
    number: '03',
    emoji: '💡',
    title: 'Experiencias que inspiran',
    description:
      'Complementamos las clases con talleres, retos, actividades y espacios de aprendizaje que permiten descubrir nuevos intereses y desarrollar habilidades.',
    image: 'assets/metodologia/metodologia_03.jpg',
  },
  {
    number: '04',
    emoji: '💜',
    title: 'Comunidad educativa',
    description:
      'Acompañamos a estudiantes y familias con charlas para padres, actividades y experiencias que fortalecen el aprendizaje más allá del aula.',
    image: 'assets/metodologia/metodologia_04.jpg',
  },
];

export const WhyAP: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateFill = () => {
      const timeline = timelineRef.current;
      const fill = fillRef.current;
      if (!timeline || !fill) return;
      const rect = timeline.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const progress = Math.min(Math.max((viewportCenter - rect.top) / rect.height, 0), 1);
      fill.style.height = `${progress * 100}%`;
    };

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateFill);
    };

    updateFill();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={timelineRef} className="relative ml-6 lg:ml-0">
      {/* Línea base (plomo claro) */}
      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gray-300 dark:bg-[#2a2a52] lg:left-1/2 lg:-translate-x-1/2" />

      {/* Línea que se pinta de rosa al desplazar */}
      <div
        ref={fillRef}
        className="absolute top-0 left-0 w-[3px] bg-[#FE007A] lg:left-1/2 lg:-translate-x-1/2"
        style={{ height: '0%' }}
      />

      <div className="space-y-6">
        {features.map((feature, index) => {
          const isTextLeft = index % 2 === 0;
          return (
            <div key={feature.number} className="relative lg:grid lg:grid-cols-2 lg:items-center gap-4 sm:gap-6">
              {/* Número en el centro */}
              <div className="absolute -left-6 lg:left-1/2 top-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#FFA3CE] to-[#FE007A] shadow-md flex items-center justify-center">
                      <span className="font-heading font-extrabold text-white">{feature.number}</span>
                    </div>
              </div>

              {/* Descripción */}
              <div
                className={`pl-16 lg:pl-0 ${
                  isTextLeft
                    ? 'lg:order-1 lg:pr-16 xl:pr-24 lg:mr-auto lg:w-full lg:text-right'
                    : 'lg:order-2 lg:pl-16 xl:pl-24 lg:ml-auto lg:w-full'
                }`}
              >
                <div
                  className={`mb-3 flex items-center gap-3 ${
                    isTextLeft ? 'lg:justify-end' : 'lg:justify-start'
                  }`}
                >
                  <span className="text-3xl leading-none">{feature.emoji}</span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1C1C42] dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Imagen */}
              <div
                className={`pl-16 lg:pl-0 ${
                  isTextLeft
                    ? 'lg:order-2 lg:pl-16 xl:pl-24'
                    : 'lg:order-1 lg:pr-16 xl:pr-24'
                }`}
              >
                <img
                  src={resolveAssetUrl(feature.image)}
                  alt={feature.title}
                  loading="lazy"
                  className="w-full aspect-video rounded-3xl border border-gray-100 dark:border-[#232252] shadow-sm object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};