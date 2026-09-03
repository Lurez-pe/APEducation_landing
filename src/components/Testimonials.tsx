import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
            Historias de Éxito
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-4">
            Lo que dicen nuestras familias y estudiantes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Resultados comprobados en confianza personal, calificaciones destacadas y amor genuino por el conocimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-nunito">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-white dark:bg-[#151433] border border-gray-100 dark:border-[#232252] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#FFB600] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#FFB600]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
                  {t.text}
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-gray-100 dark:border-[#232252] pt-4">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarColor} font-bold flex items-center justify-center text-xs flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-[#1C1C42] dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
