import React from 'react';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-[#151433] border-b border-gray-100 dark:border-[#232252] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo / Profile Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#FE007A] to-[#4705ED] opacity-30 blur-xl pointer-events-none" />
              <div className="relative bg-white dark:bg-[#0D0C22] p-8 rounded-3xl border border-gray-200 dark:border-[#232252] text-center shadow-xl">
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-[#4705ED] to-[#FE007A] p-1.5 mb-5 shadow-md">
                  <div className="w-full h-full rounded-full bg-[#FAFAFE] dark:bg-[#151433] flex items-center justify-center text-5xl select-none">
                    👩‍🏫
                  </div>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#1C1C42] dark:text-white">
                  Azahalia Puyen
                </h3>
                <div className="text-xs font-bold uppercase tracking-widest text-[#FE007A] mt-1 mb-4">
                  Fundadora & Directora Pedagógica
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#151433] px-3.5 py-1.5 rounded-full mb-5 font-semibold">
                  <Award className="w-4 h-4 text-[#00E19B]" />
                  <span>Ingeniera Industrial • Educadora STEAM</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-[#232252] pt-5">
                  Más de 12 años transformando la relación de niños y jóvenes con las matemáticas y la tecnología en
                  Perú y Latinoamérica mediante pedagogía activa.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Story & Quote */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4705ED] dark:text-[#00E19B]">
              Liderazgo con Propósito
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-6">
              Pasión por desmitificar las ciencias y empoderar a cada alumno.
            </h2>
            <blockquote className="p-6 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border-l-4 border-[#FE007A] mb-6 italic text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed shadow-sm">
              “La educación no debe limitarse a memorizar fórmulas; debe encender la chispa para cuestionar, crear y
              solucionar los problemas del mañana.”
            </blockquote>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Como Ingeniera Industrial y educadora vocacional, <strong className="text-[#1C1C42] dark:text-white">Azahalia Puyen</strong> fundó{' '}
              <strong className="text-[#1C1C42] dark:text-white">AP Education</strong> con la convicción de que todo niño y joven posee un talento
              innato para la ciencia y la tecnología cuando se le guía con paciencia, empatía y metodologías activas.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Su enfoque combina la rigurosidad analítica con la calidez humana, logrando que los alumnos pierdan el
              temor a las matemáticas y descubran el fascinante poder de programar, modelar en 3D y comunicar sus ideas al
              mundo.
            </p>

            <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E19B]" /> Mentoría personalizada
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E19B]" /> Currículo internacional STEAM
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E19B]" /> Formación en habilidades blandas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
