import React, { useState } from 'react';
import { Calculator, Mic, Box, Terminal, Rocket, Check, ArrowRight } from 'lucide-react';
import { Program } from '../types';
import { PROGRAMS } from '../data';
import { ProgramModal } from './ProgramModal';

interface ProgramsProps {
  onSelectProgramForContact: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgramForContact }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [filter, setFilter] = useState<'all' | 'math' | 'comm' | 'tech'>('all');

  const filterPrograms = () => {
    if (filter === 'math') return PROGRAMS.filter((p) => p.id === 'matematica');
    if (filter === 'comm') return PROGRAMS.filter((p) => p.id === 'comunicacion');
    if (filter === 'tech') return PROGRAMS.filter((p) => ['diseno-3d', 'programacion', 'ap-lab'].includes(p.id));
    return PROGRAMS;
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-6 h-6" />;
      case 'Mic':
        return <Mic className="w-6 h-6" />;
      case 'Box':
        return <Box className="w-6 h-6" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6" />;
      case 'Rocket':
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const regularPrograms = filterPrograms().filter((p) => p.id !== 'ap-lab');
  const showLab = filter === 'all' || filter === 'tech';

  return (
    <section
      id="programas"
      className="py-20 lg:py-24 bg-white dark:bg-[#151433] border-y border-gray-100 dark:border-[#232252] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
              Rutas de Aprendizaje
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2">
              Nuestros Programas Formativos
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-md">
            Diseñados pedagógicamente para activar el potencial por fases y áreas fundamentales del desarrollo
            intelectual contemporáneo.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#1C1C42] text-white dark:bg-white dark:text-[#1C1C42] shadow-sm'
                : 'bg-gray-100 dark:bg-[#0D0C22] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#232252]'
            }`}
          >
            Todos los Programas ({PROGRAMS.length})
          </button>
          <button
            onClick={() => setFilter('math')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'math'
                ? 'bg-[#FE007A] text-white shadow-sm'
                : 'bg-gray-100 dark:bg-[#0D0C22] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#232252]'
            }`}
          >
            Matemática Comprensiva
          </button>
          <button
            onClick={() => setFilter('comm')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'comm'
                ? 'bg-[#4705ED] text-white shadow-sm'
                : 'bg-gray-100 dark:bg-[#0D0C22] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#232252]'
            }`}
          >
            Comunicación & Oratoria
          </button>
          <button
            onClick={() => setFilter('tech')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'tech'
                ? 'bg-[#00E19B] text-[#1C1C42] font-extrabold shadow-sm'
                : 'bg-gray-100 dark:bg-[#0D0C22] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#232252]'
            }`}
          >
            Tecnología, 3D & STEAM
          </button>
        </div>

        {/* Regular Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {regularPrograms.map((program) => {
            const isMagenta = program.color === 'magenta';
            const isPurple = program.color === 'purple';
            const isTeal = program.color === 'teal';
            const isAmber = program.color === 'amber';

            const tagColor = isMagenta
              ? 'bg-[#FE007A]/15 text-[#FE007A]'
              : isPurple
              ? 'bg-[#4705ED]/15 text-[#4705ED] dark:text-[#00E19B]'
              : isTeal
              ? 'bg-[#00E19B]/20 text-[#00E19B]'
              : 'bg-[#FFB600]/15 text-[#FFB600]';

            const iconBg = isMagenta
              ? 'bg-[#FE007A]/10 text-[#FE007A]'
              : isPurple
              ? 'bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B]'
              : isTeal
              ? 'bg-[#00E19B]/15 text-[#00E19B]'
              : 'bg-[#FFB600]/10 text-[#FFB600]';

            const hoverBorder = isMagenta
              ? 'hover:border-[#FE007A]'
              : isPurple
              ? 'hover:border-[#4705ED]'
              : isTeal
              ? 'hover:border-[#00E19B]'
              : 'hover:border-[#FFB600]';

            const buttonHover = isMagenta
              ? 'group-hover:bg-[#FE007A] group-hover:text-white'
              : isPurple
              ? 'group-hover:bg-[#4705ED] group-hover:text-white'
              : isTeal
              ? 'group-hover:bg-[#00E19B] group-hover:text-[#1C1C42]'
              : 'group-hover:bg-[#FFB600] group-hover:text-[#1C1C42]';

            return (
              <div
                key={program.id}
                id={`card-program-${program.id}`}
                className={`rounded-3xl p-8 bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-200/80 dark:border-[#232252] flex flex-col justify-between ${hoverBorder} hover:shadow-xl transition-all duration-300 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center`}>
                      {getIcon(program.icon)}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}>
                      {program.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-[#1C1C42] dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <ul className="space-y-2.5 text-xs text-gray-500 dark:text-gray-400 mb-8 border-t border-gray-200 dark:border-[#232252] pt-5">
                    {program.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#00E19B] flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className={`w-full py-3 px-4 rounded-xl bg-white dark:bg-[#151433] border border-gray-200 dark:border-[#232252] text-[#1C1C42] dark:text-white font-bold text-xs text-center ${buttonHover} group-hover:border-transparent transition-all cursor-pointer flex items-center justify-center gap-1.5`}
                  >
                    <span>Ver Temario & Módulos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectProgramForContact(program.title)}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-transparent hover:bg-gray-100 dark:hover:bg-[#151433] text-gray-600 dark:text-gray-300 text-xs font-semibold whitespace-nowrap cursor-pointer"
                  >
                    Inscribirme
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured AP LAB Program Card */}
        {showLab && (
          <div
            id="featured-ap-lab-card"
            className="rounded-3xl p-8 lg:p-10 bg-gradient-to-r from-[#4705ED] to-[#1C1C42] text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl font-nunito"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FE007A]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00E19B] text-xs font-bold mb-4">
                <Rocket className="w-4 h-4 text-[#00E19B]" />
                <span>Laboratorio Interdisciplinario STEAM</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
                AP LAB: Experiencia STEAM Total
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                Talleres intensivos donde se unen ciencia, robótica virtual, matemáticas aplicadas y arte digital. Los
                estudiantes resuelven misiones espaciales simuladas, construyen prototipos tecnológicos y presentan sus
                descubrimientos en comunidad abierta.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#00E19B]">
                <span>✦ Retos interdisciplinarios</span>
                <span>✦ Proyectos con impacto social</span>
                <span>✦ Portafolio digital de ingeniería</span>
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setSelectedProgram(PROGRAMS.find((p) => p.id === 'ap-lab') || null)}
                className="w-full lg:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm text-center transition-all cursor-pointer"
              >
                Ver Plan AP LAB
              </button>

              <a
                href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20deseo%20inscribirme%20al%20AP%20LAB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto px-8 py-4 rounded-xl bg-[#FE007A] hover:bg-[#e0006c] text-white font-bold text-sm text-center shadow-lg glow-magenta transition-all flex items-center justify-center gap-2"
              >
                <span>Unirse al AP LAB</span>
                <Rocket className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Syllabus Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onSelectProgramForContact={onSelectProgramForContact}
      />
    </section>
  );
};
