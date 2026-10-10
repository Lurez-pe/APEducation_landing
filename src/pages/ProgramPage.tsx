import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PROGRAMS } from '../data';
import { MathPackages } from '../components/MathPackages';

interface ProgramPageProps {
  programKey: string;
}

export const ProgramPage: React.FC<ProgramPageProps> = ({ programKey }) => {
  const program = PROGRAMS.find((p) => p.key === programKey) ?? PROGRAMS[0];

  return (
    <div className="min-h-[70vh] pt-40 lg:pt-48 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#4705ED] dark:text-[#00E19B] hover:text-[#FE007A] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#151433] border border-gray-200 dark:border-[#232252] text-xs font-bold uppercase tracking-wider text-[#FE007A] mb-4 shadow-sm">
          Programa
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent leading-[1.1] tracking-tight mb-6">
          {program.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          {program.description}
        </p>
        <p className="font-heading font-bold text-lg sm:text-xl text-[#FE007A] max-w-2xl mt-4 mb-12">
          {program.tagline}
        </p>

        {program.key === 'ciclo-escolar' && <MathPackages />}
      </div>
    </div>
  );
};