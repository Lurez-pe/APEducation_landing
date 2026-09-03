import React from 'react';

export const Audiences: React.FC = () => {
  const audiences = [
    {
      emoji: '🧒',
      age: 'Edades 7 a 11',
      title: 'Niños y Niñas',
      tag: 'Curiosidad & Fundamentos',
      tagColor: 'bg-[#FE007A]/10 text-[#FE007A]',
      borderColor: 'hover:border-[#FE007A]',
      description:
        'Curiosidad innata, lógica lúdica, matemáticas sin miedo y primeros pasos firmes en programación mediante retos visuales altamente entretenidos.',
    },
    {
      emoji: '🧑‍💻',
      age: 'Edades 12 a 17',
      title: 'Adolescentes',
      tag: 'Retos & Tecnología',
      tagColor: 'bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B]',
      borderColor: 'hover:border-[#4705ED]',
      description:
        'Pensamiento computacional avanzado, desarrollo de software propio, modelado 3D, redacción estructurada y oratoria con presencia.',
    },
    {
      emoji: '🎓',
      age: 'Preuniversitarios',
      title: 'Jóvenes Universitarios',
      tag: 'Nivelación & Modelado',
      tagColor: 'bg-[#00E19B]/15 text-[#00E19B]',
      borderColor: 'hover:border-[#00E19B]',
      description:
        'Nivelación rigurosa en cálculo, álgebra lineal, lógica matemática universitaria y herramientas de diseño digital para carreras STEM.',
    },
    {
      emoji: '👩‍🏫',
      age: 'Educadores',
      title: 'Docentes e Instituciones',
      tag: 'Pedagogía Innovadora',
      tagColor: 'bg-[#FFB600]/15 text-[#FFB600]',
      borderColor: 'hover:border-[#FFB600]',
      description:
        'Capacitación y talleres en metodologías activas STEAM, herramientas de evaluación formativa y dinamización de aulas virtuales y presenciales.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#151433] border-y border-gray-100 dark:border-[#232252] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4705ED] dark:text-[#00E19B]">
            Público Objetivo
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-4">
            Para Quiénes Somos
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Nuestras rutas formativas están adaptadas pedagógicamente para cada momento evolutivo del estudiante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252] ${aud.borderColor} transition-all duration-300 hover:shadow-lg flex flex-col justify-between`}
            >
              <div>
                <span className="text-4xl mb-4 block">{aud.emoji}</span>
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  {aud.age}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1C1C42] dark:text-white mb-3">
                  {aud.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {aud.description}
                </p>
              </div>

              <div>
                <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full ${aud.tagColor}`}>
                  {aud.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
