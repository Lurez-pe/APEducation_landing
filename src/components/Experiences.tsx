import React from 'react';
import { Bot, Presentation, MessageCircle, Trophy } from 'lucide-react';

export const Experiences: React.FC = () => {
  const experiences = [
    {
      title: 'Hackathones Juveniles',
      description:
        'Jornadas de fin de semana donde equipos de estudiantes crean soluciones a problemas comunitarios utilizando programación, electrónica virtual y diseño 3D.',
      icon: Bot,
      color: 'purple',
      badge: 'Reto Colaborativo',
    },
    {
      title: 'Masterclasses STEM',
      description:
        'Sesiones exclusivas con ingenieros de software, científicos aeroespaciales y diseñadores de productos de impacto global que comparten su experiencia real.',
      icon: Presentation,
      color: 'magenta',
      badge: 'Expertos Invitados',
    },
    {
      title: 'Conversatorios Científicos',
      description:
        'Mesas de diálogo guiadas donde los estudiantes debaten con rigor sobre inteligencia artificial, ética digital, cambio climático y bioingeniería.',
      icon: MessageCircle,
      color: 'teal',
      badge: 'Pensamiento Crítico',
    },
    {
      title: 'Feria Anual de Proyectos',
      description:
        'Demostración abierta ante padres, mentores y jurados invitados donde cada participante expone su trabajo final y recibe retroalimentación constructiva.',
      icon: Trophy,
      color: 'amber',
      badge: 'Exhibición Pública',
    },
  ];

  return (
    <section id="experiencias" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
            Más Allá del Aula
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-4">
            Experiencias, Retos y Talleres Especiales
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Diseñamos espacios vivenciales que conectan a nuestros jóvenes con el ecosistema tecnológico real y la
            comunidad científica internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isPurple = exp.color === 'purple';
            const isMagenta = exp.color === 'magenta';
            const isTeal = exp.color === 'teal';

            const iconStyle = isMagenta
              ? 'bg-[#FE007A]/10 text-[#FE007A]'
              : isPurple
              ? 'bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B]'
              : isTeal
              ? 'bg-[#00E19B]/15 text-[#00E19B]'
              : 'bg-[#FFB600]/15 text-[#FFB600]';

            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#151433] border border-gray-100 dark:border-[#232252] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${iconStyle} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-[#0D0C22] text-gray-600 dark:text-gray-300 uppercase">
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#1C1C42] dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#232252] flex items-center gap-1.5 text-xs font-bold text-[#4705ED] dark:text-[#00E19B]">
                  <span>Ver actividades</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
