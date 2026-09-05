/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Pillars } from './components/Pillars';
import { Programs } from './components/Programs';
import { Methodology } from './components/Methodology';
import { LearningQuest } from './components/LearningQuest';
import { FormatSection } from './components/FormatSection';
import { Experiences } from './components/Experiences';
import { Audiences } from './components/Audiences';
import { Community } from './components/Community';
import { Stats } from './components/Stats';
import { Founder } from './components/Founder';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeZone, setActiveZone] = useState<string>('inicio');
  const [targetProgramForContact, setTargetProgramForContact] = useState<string>('Matemática Comprensiva');

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
    const sections = ['que-es', 'metodologia', 'testimonios', 'contacto'];
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

  const handleSelectProgram = (title: string) => {
    setTargetProgramForContact(title);
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
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

        {/* 4. ¿Por qué AP Education? (6 Pilares) */}
        <Pillars />

        {/* 5. Nuestros Programas (5 áreas con modales interactivos) */}
        <Programs onSelectProgramForContact={handleSelectProgram} />

        {/* 6. Metodología STEM (5 fases interactivas) */}
        <Methodology />

        {/* 7. Progreso y misiones de aprendizaje */}
        <LearningQuest />

        {/* 8. Clases Personalizadas & Formato */}
        <FormatSection />

        {/* 8. Experiencias y Talleres Especiales */}
        <Experiences />

        {/* 9. Para Quiénes Somos (4 perfiles) */}
        <Audiences />

        {/* 10. Nuestra Comunidad */}
        <Community />

        {/* 11. Logros en Números */}
        <Stats />

        {/* 12. Sobre la Fundadora */}
        <Founder />

        {/* 13. Testimonios */}
        <Testimonials />

        {/* 14. Preguntas Frecuentes (FAQ Acordeón) */}
        <FaqSection />

        {/* 15. Formulario de Contacto & Reserva */}
        <ContactSection selectedProgram={targetProgramForContact} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
