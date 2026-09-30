import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Brain, Code, Lightbulb, Heart, Headset, ChevronLeft, ChevronRight } from 'lucide-react';

const FOCUS_INTERVAL_MS = 720;
const TRANSITION_DURATION_MS = 1400;

export const Pillars: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pauseUntil = useRef(0);
  const transitionTimer = useRef<number | null>(null);

  const features = [
    {
      id: 'pilar-1',
      number: '01',
      title: 'Formación Académica Rigurosa',
      description:
        'Estructura curricular profunda que consolida conceptos clave sin vacíos conceptuales, dotando de bases invencibles para el colegio y la universidad.',
      icon: GraduationCap,
      accentBg: 'bg-[#FE007A]/10',
      accentText: 'text-[#FE007A]',
    },
    {
      id: 'pilar-2',
      number: '02',
      title: 'Pensamiento Crítico',
      description:
        'Estimulamos el debate guiado, el análisis deductivo y la resolución de problemas desde diferentes perspectivas lógicas y analíticas.',
      icon: Brain,
      accentBg: 'bg-[#4705ED]/10',
      accentText: 'text-[#4705ED] dark:text-[#00E19B]',
    },
    {
      id: 'pilar-3',
      number: '03',
      title: 'Innovación & Tecnología',
      description:
        'Uso de plataformas interactivas, simuladores matemáticos, modelado en tiempo real y entornos de desarrollo de código actualizados.',
      icon: Code,
      accentBg: 'bg-[#00E19B]/15',
      accentText: 'text-[#00E19B]',
    },
    {
      id: 'pilar-4',
      number: '04',
      title: 'Creatividad sin Límites',
      description:
        'Inspiramos a los estudiantes a inventar sus propios juegos, diseñar objetos en 3D e idear soluciones a problemáticas sociales de su entorno.',
      icon: Lightbulb,
      accentBg: 'bg-[#FFB600]/10',
      accentText: 'text-[#FFB600]',
    },
    {
      id: 'pilar-5',
      number: '05',
      title: 'Habilidades Socioemocionales',
      description:
        'Desarrollo de resiliencia ante el error, seguridad para hablar en público, tolerancia constructiva a la frustración y empatía en equipo.',
      icon: Heart,
      accentBg: 'bg-[#FE007A]/10',
      accentText: 'text-[#FE007A]',
    },
    {
      id: 'pilar-6',
      number: '06',
      title: 'Acompañamiento Mentorizado',
      description:
        'Docentes mentores con vocación real que conocen el ritmo de cada estudiante y brindan retroalimentación continua tanto a padres como alumnos.',
      icon: Headset,
      accentBg: 'bg-[#4705ED]/10',
      accentText: 'text-[#4705ED] dark:text-[#00E19B]',
    },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (Date.now() < pauseUntil.current) return;
      if (transitionTimer.current) return;
      setActiveIndex((current) => (current + 1) % features.length);
      transitionTimer.current = window.setTimeout(() => {
        transitionTimer.current = null;
      }, TRANSITION_DURATION_MS);
    }, FOCUS_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    };
  }, [features.length]);

  const moveCarousel = (direction: number) => {
    pauseForFiveSeconds();
    setActiveIndex((current) => (current + direction + features.length) % features.length);
  };

  const pauseForFiveSeconds = () => {
    if (Date.now() < pauseUntil.current) return;
    pauseUntil.current = Date.now() + 3800;
  };

  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-10 px-10 sm:px-14 mt-20 lg:mt-24">
      <button
        type="button"
        onClick={() => moveCarousel(-1)}
        title="Pilar anterior"
        aria-label="Ver pilar anterior"
        className="absolute left-0 sm:left-4 top-1/2 z-30 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#151433] border border-gray-200 dark:border-[#232252] text-[#4705ED] dark:text-[#00E19B] shadow-lg hover:scale-105 hover:border-[#FE007A] transition-all cursor-pointer flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

          <div className="relative min-h-[470px] sm:min-h-[420px]">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const rawOffset = index - activeIndex;
              const offset = rawOffset > features.length / 2
                ? rawOffset - features.length
                : rawOffset < -features.length / 2
                ? rawOffset + features.length
                : rawOffset;
              const distance = Math.abs(offset);
              const isActive = offset === 0;
              const isHidden = distance === 3;
              const isLevelTwo = distance === 1;
              return (
                <div
                  key={feature.id}
                  id={feature.id}
                  className={`absolute left-1/2 top-1/2 w-[min(380px,76vw)] px-1 transition-all duration-[1400ms] ease-in-out ${isHidden ? 'pointer-events-none' : ''}`}
                  style={{
                    transform: `translate(calc(-50% + ${offset * 10}vw), -50%) scale(${isActive ? 1.2 : isLevelTwo ? 1 : 0.8})`,
                    filter: isActive ? 'none' : isLevelTwo ? 'blur(1.5px)' : 'blur(3px)',
                    opacity: isHidden ? 0 : isActive ? 1 : isLevelTwo ? 0.62 : 0.38,
                    zIndex: isActive ? 20 : isLevelTwo ? 18 : isHidden ? 0 : 15,
                  }}
                >
                  <div
                    className={`w-full text-left bg-white dark:bg-[#151433] p-7 sm:p-8 rounded-3xl border border-gray-100 dark:border-[#232252] shadow-sm hover:shadow-xl ${
                      isActive ? 'ring-2 ring-[#FE007A]/70 shadow-[0_12px_30px_rgba(28,28,66,0.14)]' : ''
                    } transition-shadow duration-300 group cursor-pointer`}
                    onClick={() => {
                      setActiveIndex(index);
                      pauseForFiveSeconds();
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveIndex(index);
                        pauseForFiveSeconds();
                      }
                    }}
                    role="button"
                    tabIndex={isHidden ? -1 : 0}
                    aria-current={isActive ? 'true' : undefined}
                    aria-hidden={isHidden}
                    aria-label={`Seleccionar ${feature.title}`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${feature.accentBg} ${feature.accentText} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="font-heading font-extrabold text-3xl text-gray-200 dark:text-[#232252]">
                        {feature.number}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#1C1C42] dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
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
            {features.map((feature, index) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  pauseForFiveSeconds();
                }}
                aria-label={`Ver pilar ${index + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === index ? 'w-8 bg-[#FE007A]' : 'w-2 bg-gray-300 dark:bg-[#232252] hover:bg-[#4705ED]'
                }`}
              />
            ))}
          </div>
        </div>
  );
};