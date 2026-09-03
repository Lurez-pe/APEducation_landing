import React from 'react';
import { Users, Lightbulb, Shield, Globe2 } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section id="comunidad" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
              Red de Crecimiento Mutuo
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-6">
              Nuestra Comunidad: Estudiantes, Familias y Mentores unidos.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
              Creemos firmemente que el éxito formativo surge del trabajo articulado entre la academia, el hogar y el
              acompañamiento constante. En AP Education no eres una matrícula: eres parte de una red colaborativa que
              celebra cada logro alcanzado.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </span>
                <span className="text-sm font-semibold text-[#1C1C42] dark:text-gray-200">
                  Talleres para padres sobre crianza digital y apoyo escolar en ciencias
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FE007A]/10 text-[#FE007A] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </span>
                <span className="text-sm font-semibold text-[#1C1C42] dark:text-gray-200">
                  Comunidad activa de alumnos para resolver desafíos y compartir código
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#00E19B]/15 text-[#00E19B] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </span>
                <span className="text-sm font-semibold text-[#1C1C42] dark:text-gray-200">
                  Mentoría accesible para consultas directas y orientación vocacional
                </span>
              </div>
            </div>
          </div>

          {/* Right: 4 community values cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#151433] border border-gray-100 dark:border-[#232252] shadow-sm text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B] flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="font-heading font-bold text-lg text-[#1C1C42] dark:text-white">Colaboración</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Sin competencia tóxica; impulsamos el avance conjunto del grupo.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#151433] border border-gray-100 dark:border-[#232252] shadow-sm text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FFB600]/10 text-[#FFB600] flex items-center justify-center mb-3">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="font-heading font-bold text-lg text-[#1C1C42] dark:text-white">Curiosidad Libre</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Toda pregunta es bienvenida, profundizada y celebrada en clase.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#151433] border border-gray-100 dark:border-[#232252] shadow-sm text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#00E19B]/15 text-[#00E19B] flex items-center justify-center mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <div className="font-heading font-bold text-lg text-[#1C1C42] dark:text-white">Espacio Seguro</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Equivocarse es el primer paso indispensable y natural de aprender.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#151433] border border-gray-100 dark:border-[#232252] shadow-sm text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FE007A]/10 text-[#FE007A] flex items-center justify-center mb-3">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="font-heading font-bold text-lg text-[#1C1C42] dark:text-white">Impacto Real</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Proyectos concebidos para aportar soluciones a su entorno real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
