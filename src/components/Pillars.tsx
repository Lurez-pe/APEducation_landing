import React from 'react';
import { GraduationCap, Brain, Code, Lightbulb, Heart, Headset } from 'lucide-react';

export const Pillars: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`bg-white dark:bg-[#151433] p-8 rounded-3xl border border-gray-100 dark:border-[#232252] shadow-sm hover:shadow-xl ${pillar.borderHover} transition-all duration-300 group cursor-default`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${pillar.accentBg} ${pillar.accentText} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1C1C42] dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
