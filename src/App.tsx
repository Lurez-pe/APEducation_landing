/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Pillars } from './components/Pillars';
import { WhyAP } from './components/WhyAP';
import { GlobalPresence } from './components/GlobalPresence';
import { Methodology } from './components/Methodology';
import { Announcements } from './components/Announcements';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeZone, setActiveZone] = useState<string>('inicio');

  useEffect(() => {
    // Respect the saved choice, while starting new visits in light mode.
    const saved = localStorage.getItem('ap_theme');
    if (saved === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const sections = ['que-es', 'metodologia', 'comunidad', 'contacto'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setActiveZone(visibleSection.target.id);
        }
      },
      { rootMargin: '-28% 0px -48% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleToggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('ap_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('ap_theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className={`app-shell zone-${activeZone} min-h-screen bg-[#FAFAFE] text-[#1C1C42] dark:bg-[#0D0C22] dark:text-[#EAEAFE] font-sans antialiased selection:bg-[#FE007A] selection:text-white transition-colors duration-700`}>
      {/* 1. Navbar */}
      <Navbar darkMode={darkMode} onToggleTheme={handleToggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content">
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
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
