import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Brain, Code, Lightbulb, Heart, Headset, ChevronLeft, ChevronRight } from 'lucide-react';

export const Pillars: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);

  const pillars = [
    {
      id: 'pilar-1',
      title: 'Formación Académica Rigurosa',
      description:
        'Estructura curricular profunda que consolida conceptos clave sin vacíos conceptuales, dotando de bases invencibles para el colegio y la universidad.',
      icon: GraduationCap,
      color: 'magenta',
      accentBg: 'bg-[#FE007A]/10',
      accentText: 'text-[#FE007A]',
      borderHover: 'hover:border-[#FE007A]/50',
    },
    {
      id: 'pilar-2',
      title: 'Pensamiento Crítico',
      description:
        'Estimulamos el debate guiado, el análisis deductivo y la resolución de problemas desde diferentes perspectivas lógicas y analíticas.',
      icon: Brain,
      color: 'purple',
      accentBg: 'bg-[#4705ED]/10',
      accentText: 'text-[#4705ED] dark:text-[#00E19B]',
      borderHover: 'hover:border-[#4705ED]/50',
    },
    {
      id: 'pilar-3',
      title: 'Innovación & Tecnología',
      description:
        'Uso de plataformas interactivas, simuladores matemáticos, modelado en tiempo real y entornos de desarrollo de código actualizados.',
      icon: Code,
      color: 'teal',
      accentBg: 'bg-[#00E19B]/15',
      accentText: 'text-[#00E19B]',
      borderHover: 'hover:border-[#00E19B]/50',
    },
    {
      id: 'pilar-4',
      title: 'Creatividad sin Límites',
      description:
        'Inspiramos a los estudiantes a inventar sus propios juegos, diseñar objetos en 3D e idear soluciones a problemáticas sociales de su entorno.',
      icon: Lightbulb,
      color: 'amber',
      accentBg: 'bg-[#FFB600]/10',
      accentText: 'text-[#FFB600]',
      borderHover: 'hover:border-[#FFB600]/50',
    },
    {
      id: 'pilar-5',
      title: 'Habilidades Socioemocionales',
      description:
        'Desarrollo de resiliencia ante el error, seguridad para hablar en público, tolerancia constructiva a la frustración y empatía en equipo.',
      icon: Heart,
      color: 'magenta',
      accentBg: 'bg-[#FE007A]/10',
      accentText: 'text-[#FE007A]',
      borderHover: 'hover:border-[#FE007A]/50',
    },
    {
      id: 'pilar-6',
      title: 'Acompañamiento Mentorizado',
      description:
        'Docentes mentores con vocación real que conocen el ritmo de cada estudiante y brindan retroalimentación continua tanto a padres como alumnos.',
      icon: Headset,
      color: 'purple',
      accentBg: 'bg-[#4705ED]/10',
      accentText: 'text-[#4705ED] dark:text-[#00E19B]',
      borderHover: 'hover:border-[#4705ED]/50',
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pillars.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [isPaused, pillars.length]);

  const moveCarousel = (direction: number) => {
    setActiveIndex((current) => (current + direction + pillars.length) % pillars.length);
  };

  const pauseForFiveSeconds = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    setIsPaused(true);
    resumeTimer.current = window.setTimeout(() => {
      setIsPaused(false);
      resumeTimer.current = null;
    }, 5000);
  };

  return (
    <section id="por-que-ap" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4705ED] dark:text-[#00E19B]">
            Pilares de Excelencia
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-4">
            ¿Por qué elegir AP Education?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Una combinación meticulosa entre rigor académico, metodología innovadora y cercanía humana para formar
            estudiantes seguros, creativos e independientes.
          </p>
        </div>

        <div className="relative px-10 sm:px-14">
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            title="Pilar anterior"
            aria-label="Ver pilar anterior"
            className="absolute left-0 sm:left-4 top-1/2 z-30 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#151433] border border-gray-200 dark:border-[#232252] text-[#4705ED] dark:text-[#00E19B] shadow-lg hover:scale-105 hover:border-[#FE007A] transition-all cursor-pointer flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="relative min-h-[390px] sm:min-h-[370px]" onMouseEnter={pauseForFiveSeconds}>
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const rawOffset = index - activeIndex;
            const offset = rawOffset > pillars.length / 2
              ? rawOffset - pillars.length
              : rawOffset < -pillars.length / 2
              ? rawOffset + pillars.length
              : rawOffset;
            const distance = Math.abs(offset);
            const isActive = offset === 0;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="absolute left-1/2 top-1/2 w-[min(360px,72vw)] px-1 transition-all duration-[350ms] ease-out"
                style={{
                  transform: `translate(calc(-50% + ${offset * 24}%), -50%) scale(${isActive ? 1 : Math.max(0.62, 0.9 - distance * 0.07)})`,
                  opacity: isActive ? 1 : Math.max(0.22, 0.64 - distance * 0.1),
                  zIndex: isActive ? 20 : 15 - distance,
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Seleccionar ${pillar.title}`}
                  className={`w-full min-h-[300px] sm:min-h-[315px] text-left bg-white dark:bg-[#151433] p-7 sm:p-8 rounded-3xl border border-gray-100 dark:border-[#232252] shadow-sm hover:shadow-xl ${pillar.borderHover} transition-shadow duration-300 group cursor-pointer`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${pillar.accentBg} ${pillar.accentText} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1C1C42] dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </button>
              </div>
            );
          })}
          </div>

          <button
            type="button"
            onClick={() => moveCarousel(1)}
            title="Siguiente pilar"
            aria-label="Ver siguiente pilar"
            className="absolute right-0 sm:right-4 top-1/2 z-30 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#151433] border border-gray-200 dark:border-[#232252] text-[#4705ED] dark:text-[#00E19B] shadow-lg hover:scale-105 hover:border-[#FE007A] transition-all cursor-pointer flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6" aria-label="Indicadores de pilares">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver pilar ${index + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === index ? 'w-8 bg-[#FE007A]' : 'w-2 bg-gray-300 dark:bg-[#232252] hover:bg-[#4705ED]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
