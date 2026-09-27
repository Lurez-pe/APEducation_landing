import React from 'react';

export const Manifesto: React.FC = () => {
  const stats = [
    { value: '5', label: 'Países de presencia' },
    { value: '+1000', label: 'Estudiantes' },
    { value: '+5', label: 'Años de trayectoria' },
  ];

  return (
    <section
      id="que-es"
      className="py-[1cm] bg-white dark:bg-[#151433] border-y border-gray-100 dark:border-[#232252] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: YouTube video */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#0D0C22] aspect-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4lL09vNW9CA?si=B4Mj8QgZ2RH3CMxD"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>

          {/* Right: Texto y datos */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
              Nuestra Comunidad
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 mb-6 bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent">
              Somos una comunidad educativa con presencia internacional y una propuesta enfocada en innovación.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-10 leading-relaxed">
              A través de nuestro modelo educativo digital, acompañamos a estudiantes en su desarrollo académico y
              personal, integrando matemáticas, comunicación, STEAM y tecnología.
            </p>

            {/* Stats: 3 columns separated by vertical lines */}
            <div className="grid grid-cols-3 divide-x-[5px] divide-[#4705ED] dark:divide-[#4705ED]">
              {stats.map((stat) => (
                <div key={stat.label} className="px-3 sm:px-6 text-center">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FE007A] dark:text-[#00E19B] block leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium block mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};