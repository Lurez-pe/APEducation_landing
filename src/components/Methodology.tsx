import React, { useState } from 'react';
import { Compass, BookOpen, FlaskConical, Code2, Share2, Sparkles } from 'lucide-react';
import { METHOD_PHASES } from '../data';

export const Methodology: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

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

  const activePhase = METHOD_PHASES[activePhaseIndex];

  return (
    <section id="metodologia" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E19B]">
            Pedagogía Activa
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-4">
            Nuestra Metodología STEM: Aprender Haciendo
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Un ciclo sistemático y natural de 5 fases continuas que transforma a los alumnos de receptores pasivos a
            creadores tecnológicos activos y reflexivos.
          </p>
        </div>

        {/* 5 Steps Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative mb-10">
          {METHOD_PHASES.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            return (
              <button
                key={phase.number}
                id={`method-step-${phase.number}`}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-6 rounded-3xl text-center flex flex-col items-center relative transition-all duration-300 text-left sm:text-center cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-[#151433] border-2 border-[#FE007A] shadow-xl -translate-y-2'
                    : 'bg-white/80 dark:bg-[#151433]/80 border border-gray-100 dark:border-[#232252] shadow-sm hover:-translate-y-1 hover:border-[#4705ED]/40'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl font-heading font-extrabold text-xl flex items-center justify-center mb-4 transition-colors ${
                    isActive
                      ? 'bg-[#FE007A] text-white shadow-md'
                      : 'bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B]'
                  }`}
                >
                  {phase.number}
                </div>
                <h4 className="font-heading font-bold text-lg text-[#1C1C42] dark:text-white mb-2">
                  {phase.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {phase.description}
                </p>
                <div className="mt-3 text-[10px] font-bold text-[#FE007A] uppercase tracking-wider">
                  {phase.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Phase Spotlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1C1C42] via-[#232252] to-[#0D0C22] text-white border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-[#FE007A] text-white font-heading font-extrabold text-sm flex items-center justify-center">
                  {activePhase.number}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00E19B]">
                  Fase Activa: {activePhase.title}
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-4 text-white">
                {activePhase.title}: {activePhase.tag}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {activePhase.description}
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFB600] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ejemplo en el Aula AP Education:</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 italic">
                  "{activePhase.example}"
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#4705ED] to-[#FE007A] text-white flex items-center justify-center mb-4 shadow-lg">
                {getPhaseIcon(activePhase.iconName)}
              </div>
              <div className="font-heading font-bold text-lg text-white">
                Aprender Haciendo
              </div>
              <div className="text-xs text-[#00E19B] mt-1 font-medium">
                Sin memorización pasiva
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
