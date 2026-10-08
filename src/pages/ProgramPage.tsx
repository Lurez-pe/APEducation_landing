import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import { PROGRAMS } from '../data';
import { ProgramImage } from '../components/ProgramImage';

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

        <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-[#232252] shadow-xl">
          <div className={`bg-gradient-to-r ${program.tone} h-2`} />
          <div className="p-8 sm:p-10 bg-white dark:bg-[#151433]">
            <div className="flex items-start gap-4 mb-8">
              <Construction className="w-6 h-6 text-[#FFB600] flex-shrink-0 mt-0.5" />
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Esta página está en construcción. Aquí encontrarás toda la información sobre el programa{' '}
                <strong>{program.title}</strong>: plan de estudios, horarios, docentes e inscripciones. Mientras tanto,
                escríbenos por WhatsApp para más detalles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ProgramImage
                src={program.image}
                alt={program.title}
                tone={program.tone}
                className="rounded-2xl"
              />
              <div className="flex flex-col justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <strong className="text-[#1C1C42] dark:text-white">Metodología:</strong> STEM con acompañamiento
                  personalizado.
                </p>
                <p>
                  <strong className="text-[#1C1C42] dark:text-white">Modalidad:</strong> 100% en vivo, grupos reducidos
                  de 6 a 8 estudiantes.
                </p>
                <a
                  href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20deseo%20informaci%C3%B3n%20sobre%20el%20programa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-xl bg-[#FE007A] text-white font-bold text-sm hover:bg-[#e0006c] hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};