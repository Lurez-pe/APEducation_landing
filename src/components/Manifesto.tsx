import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section
      id="que-es"
      className="py-20 bg-white dark:bg-[#151433] border-y border-gray-100 dark:border-[#232252] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Manifest Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl p-8 bg-gradient-to-br from-[#4705ED] to-[#1C1C42] text-white shadow-xl overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#FE007A]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00E19B] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Manifiesto Educativo</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-4 leading-snug">
                No es solo refuerzo escolar, es evolución de pensamiento.
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Dejamos atrás la repetición memorística para abrir paso a la curiosidad, el razonamiento profundo y la
                capacidad autónoma de construir tecnología con propósito.
              </p>
              <div className="space-y-3.5 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#00E19B] flex-shrink-0" />
                  <span>Fusión de educación reflexiva, creatividad y tecnología</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#00E19B] flex-shrink-0" />
                  <span>Enfoque integral en competencias clave de la era digital</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#00E19B] flex-shrink-0" />
                  <span>Ambiente seguro, empático, motivador y altamente estimulante</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Propósito y Filosofía */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
              Propósito y Filosofía
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-6">
              Una experiencia formativa digital que despierta el potencial dormido.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              En <strong className="text-[#1C1C42] dark:text-white font-semibold">AP Education</strong> concebimos el
              aprendizaje como un viaje de descubrimiento creativo. Nuestros estudiantes no se limitan a resolver
              ejercicios en papel: comprenden el <em>por qué</em>, formulan hipótesis y crean proyectos reales en
              entornos interactivos modernos.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
              Combinamos una base sólida en matemáticas y habilidades de comunicación con las disciplinas del futuro:
              programación de software, modelado 3D y pensamiento de ingeniería. Preparamos líderes seguros de sí mismos
              listos para cualquier reto colegial, universitario y profesional.
            </p>

            {/* Metrics Trio */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252] shadow-sm">
                <span className="font-heading font-extrabold text-2xl text-[#4705ED] dark:text-[#00E19B] block">
                  STEAM
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Ciencia Integrada</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252] shadow-sm">
                <span className="font-heading font-extrabold text-2xl text-[#FE007A] block">100%</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Participativo y Práctico</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252] shadow-sm col-span-2 sm:col-span-1">
                <span className="font-heading font-extrabold text-2xl text-[#FFB600] block">+Autonomía</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Habilidad de Vida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
