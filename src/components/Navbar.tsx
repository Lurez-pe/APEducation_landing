import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ProgramsDropdown } from './ProgramsDropdown';
import { ScrollLink } from './ScrollLink';
import { resolveAssetUrl } from './announcementStyles';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenContactModal?: () => void;
}

const navLinkClass = (scrolled: boolean) =>
  `py-1 font-bold transition-colors whitespace-nowrap text-[11px] sm:text-sm lg:text-[15px] ${
    scrolled
      ? 'text-gray-600 dark:text-gray-300 hover:text-[#FE007A] dark:hover:text-[#FE007A]'
      : 'text-white/90 hover:text-white'
  }`;

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0D0C22]/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-[#232252]'
          : 'bg-transparent border-b border-transparent'
      }`}
>
      <div className="max-w-7xl mx-auto min-w-0 px-4 sm:px-6 lg:px-8 min-h-20 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex min-w-0 items-center group focus:outline-none order-1"
          id="brand-logo"
        >
          <img
            src={resolveAssetUrl(
              darkMode ? 'assets/brand/AP_Logo_H_W.png' : scrolled ? 'assets/brand/AP_Logo_H.svg' : 'assets/brand/AP_Logo_H_W.png'
            )}
            alt="AP Education"
            className="h-9 sm:h-12 w-auto max-w-[150px] sm:max-w-[220px] flex-shrink-0 object-contain group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop/Mobile Navigation */}
        <nav
          id="main-nav"
          className="order-3 lg:order-2 w-full lg:w-auto lg:flex-1 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 lg:gap-x-7 xl:gap-x-9"
          aria-label="Navegación principal"
        >
          <ProgramsDropdown scrolled={scrolled} />
          <ScrollLink to="#metodologia" className={navLinkClass(scrolled)}>
            Metodología
          </ScrollLink>
          <ScrollLink to="#anuncios" className={navLinkClass(scrolled)}>
            Anuncios
          </ScrollLink>
          <ScrollLink to="#comunidad" className={navLinkClass(scrolled)}>
            Comunidad
          </ScrollLink>
          <ScrollLink to="#contacto" className={navLinkClass(scrolled)}>
            Contacto
          </ScrollLink>
        </nav>

        {/* Right Action Items */}
        <div className="flex flex-shrink-0 items-center gap-3 order-2 lg:order-3">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Cambiar tema de color"
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors focus:outline-none cursor-pointer ${
              scrolled
                ? 'bg-gray-100 dark:bg-[#151433] text-[#1C1C42] dark:text-[#FFB600] hover:bg-gray-200 dark:hover:bg-[#232252]'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* WhatsApp CTA Button */}
          <a
            id="nav-whatsapp-btn"
            href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20deseo%20m%C3%A1s%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-11 w-[136px] items-center justify-center rounded-xl bg-[#4705ED] px-2.5 py-1.5 transition-all shadow-sm hover:-translate-y-0.5"
          >
            <img
              src={resolveAssetUrl('assets/brand/wpp-horizontal.png')}
              alt="WhatsApp"
              className="block max-h-full max-w-full object-contain"
            />
          </a>
        </div>
      </div>
    </header>
  );
};