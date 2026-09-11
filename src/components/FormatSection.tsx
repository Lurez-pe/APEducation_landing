import React from 'react';
import { Users2, Gauge, MessageSquareHeart, Award, Globe, FileText } from 'lucide-react';

export const FormatSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#151433] border-y border-gray-100 dark:border-[#232252] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Value proposition list */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4705ED] dark:text-[#00E19B]">
              Atención que Transforma
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-6">
              Clases en vivo y personalizadas: Ningún alumno se queda atrás.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
              A diferencia de los cursos masivos o grabados, en AP Education cada estudiante tiene voz, cámara y
              protagonismo activo. Adaptamos el ritmo de explicación al estilo de aprendizaje individual.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252] font-nunito">
                <div className="w-10 h-10 rounded-xl bg-[#FE007A]/10 text-[#FE007A] flex items-center justify-center flex-shrink-0">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1C1C42] dark:text-white">
                    Grupos Reducidos (6-8 alumnos por sala)
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    Interacción constante donde el docente conoce a cada estudiante por su nombre y comprende sus
                    desafíos y fortalezas particulares.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252]">
                <div className="w-10 h-10 rounded-xl bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B] flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1C1C42] dark:text-white">
                    Respeto al Ritmo Individual
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    Nivelamos con paciencia a quienes necesitan afianzar fundamentos e impulsamos con retos avanzados a
                    quienes avanzan con mayor rapidez.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252]">
                <div className="w-10 h-10 rounded-xl bg-[#00E19B]/15 text-[#00E19B] flex items-center justify-center flex-shrink-0">
                  <MessageSquareHeart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1C1C42] dark:text-white">
                    Reportes de Avance Continuo para Familias
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    Comunicación abierta y cercana con los padres de familia sobre la evolución académica y
                    socioemocional periódica del estudiante.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Golden quote card */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-[#EDE6FB] via-[#FDEBF5] to-[#DBF7EC] p-8 sm:p-10 rounded-3xl text-[#1C1C42] shadow-lg relative overflow-hidden border border-[#4705ED]/10">
              <div className="text-deep-amber font-heading font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Estándar de Calidad AP</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-6 leading-snug text-[#1C1C42]">
                "Aprender no debe ser una obligación pesada, sino la aventura más fascinante de la semana."
              </h3>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Nuestra plataforma y salones virtuales han sido concebidos para despertar la pasión auténtica por el
                conocimiento práctico.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-[#4705ED]/10 pt-6 text-sm">
                <div>
                  <div className="font-bold text-deep-teal text-xl flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>100% Online</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    Desde la comodidad y seguridad de casa con alcance internacional.
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[#FE007A] text-xl flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>Material Digital</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    Guías interactivas, simuladores, ejercicios y grabaciones de repaso.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
