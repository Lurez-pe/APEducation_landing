import React from 'react';
import { Hero } from '../components/Hero';
import { Manifesto } from '../components/Manifesto';
import { Pillars } from '../components/Pillars';
import { WhyAP } from '../components/WhyAP';
import { GlobalPresence } from '../components/GlobalPresence';
import { Methodology } from '../components/Methodology';
import { Announcements } from '../components/Announcements';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

export const Home: React.FC = () => {
  return (
    <>
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. ¿Qué es AP Education? */}
      <Manifesto />

      {/* 4. ¿Por qué elegir AP Education? (Puntos + Pilares combinados) */}
      <section id="por-que-ap" className="py-[1cm]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4705ED] dark:text-[#00E19B]">
              Pilares de Excelencia
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent mt-2 mb-4">
              ¿Por qué elegir AP Education?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Una combinación meticulosa entre rigor académico, metodología innovadora y cercanía humana para formar
              estudiantes seguros, creativos e independientes.
            </p>
          </div>
          <WhyAP />
          <Pillars />
        </div>
      </section>

      {/* 5. Presencia de AP Education en el mundo */}
      <GlobalPresence />

      {/* 6. Metodología STEM (Fases interactivas) */}
      <Methodology />

      {/* 7. Anuncios y Convocatorias */}
      <Announcements />

      {/* 8. Logros en Números */}
      <Stats />

      {/* 9. Nuestra Comunidad (Historias de éxito) */}
      <Testimonials />

      {/* 10. Preguntas Frecuentes (FAQ Acordeón) */}
      <FaqSection />

      {/* 11. Formulario de Contacto & Reserva */}
      <ContactSection />
    </>
  );
};