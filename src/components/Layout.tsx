import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';

export const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeZone, setActiveZone] = useState<string>('inicio');
  const location = useLocation();

  useEffect(() => {
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

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      const id = location.pathname === '/' ? scrollTo : undefined;
      requestAnimationFrame(() => {
        if (id) {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0 });
        }
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.state]);

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
      <Navbar darkMode={darkMode} onToggleTheme={handleToggleTheme} />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};