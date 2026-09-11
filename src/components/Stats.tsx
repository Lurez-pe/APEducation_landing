import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '12+',
      label: 'Años de Trayectoria Docente',
      color: 'text-[#FE007A]',
    },
    {
      value: '2,500+',
      label: 'Estudiantes Acompañados',
      color: 'text-[#00E19B]',
    },
    {
      value: '98%',
      label: 'Satisfacción Familiar',
      color: 'text-[#FFB600]',
    },
    {
      value: '150+',
      label: 'Talleres STEAM Realizados',
      color: 'text-[#4705ED]',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#FDE3F0] via-[#EDE6FB] to-[#DBF7EC] text-[#1C1C42] border-y border-[#4705ED]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className={`font-heading font-extrabold text-4xl sm:text-5xl ${stat.color} mb-2 tracking-tight`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
