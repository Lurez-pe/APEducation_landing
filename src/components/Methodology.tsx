import React, { useState } from 'react';
import { Compass, BookOpen, FlaskConical, Code2, Share2, Plus, Minus } from 'lucide-react';
import { METHOD_PHASES } from '../data';
import { ScrollLink } from './ScrollLink';

export const Methodology: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const getPhaseIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6" />;
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Share2':
      default:
        return <Share2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="metodologia" className="py-[1cm]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Metodología description (1/3) */}
          <div className="lg:col-span-4">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent leading-tight">
              Nuestra Metodología STEM: Aprender Haciendo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Un ciclo sistemático y natural de 5 fases continuas que transforma a los alumnos de receptores pasivos a
              creadores tecnológicos activos y reflexivos.
            </p>
            <ScrollLink
              to="#contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FE007A] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#e0006c] hover:-translate-y-0.5 transition-all"
            >
              Más Información
            </ScrollLink>
          </div>

          {/* Right: Vertical accordion cards (2/3) */}
          <div className="lg:col-span-8 divide-y divide-gray-200 dark:divide-[#232252] bg-white dark:bg-[#151433] rounded-2xl border border-gray-100 dark:border-[#232252] shadow-sm">
            {METHOD_PHASES.map((phase, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div key={phase.number} className={`transition-colors duration-300 ${isOpen ? 'bg-[#FE007A]/5' : ''}`}>
                  {/* Card header */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? 'Ocultar' : 'Mostrar'} detalle de ${phase.title}`}
                    className="w-full flex items-center gap-3 p-3.5 sm:p-4 text-left cursor-pointer"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-gradient-to-tr from-[#4705ED] to-[#FE007A] text-white shadow-md'
                          : 'bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B]'
                      }`}
                    >
                      {getPhaseIcon(phase.iconName)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-[#1C1C42] dark:text-white leading-tight">
                        {phase.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#00E19B] truncate">
                        {phase.tag}
                      </p>
                    </div>
                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen
                          ? 'bg-[#FE007A] border-[#FE007A] text-white rotate-180'
                          : 'border-[#FE007A]/40 text-[#FE007A] hover:bg-[#FE007A]/10'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {/* Collapsible description */}
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 -mt-1">
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};