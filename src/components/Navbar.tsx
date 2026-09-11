import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenContactModal?: () => void;
}

const resolveAssetUrl = (assetPath: string) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`;

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '¿Qué es?', href: '#que-es' },
    { name: 'Programas', href: '#programas' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Comunidad', href: '#comunidad' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0D0C22]/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-[#232252]'
          : 'bg-white/80 dark:bg-[#0D0C22]/85 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto min-w-0 px-4 sm:px-6 lg:px-8 min-h-20 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex min-w-0 items-center gap-3 group focus:outline-none" id="brand-logo">
          <img
            src={resolveAssetUrl('assets/brand/ap-education-logo.png')}
            alt="AP Education"
            className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="min-w-0 flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-[#1C1C42] dark:text-white leading-none whitespace-nowrap">
              AP <span className="text-[#FE007A]">EDUCATION</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#4705ED] dark:text-[#00E19B] uppercase mt-1">
              Ciencia • Tecnología • Futuro
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        {/* Right Action Items */}
        <div className="flex flex-shrink-0 items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Cambiar tema de color"
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#151433] text-[#1C1C42] dark:text-[#FFB600] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#232252] transition-colors focus:outline-none cursor-pointer"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>

          {/* WhatsApp CTA Button */}
          <a
            id="nav-whatsapp-btn"
            href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20programas"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-11 w-[136px] items-center justify-center rounded-xl bg-[#4705ED] px-2.5 py-1.5 transition-all shadow-md shadow-[#4705ED]/20 hover:-translate-y-0.5"
          >
            <img
              src={resolveAssetUrl('assets/brand/wpp-horizontal.png')}
              alt="WhatsApp"
              className="block max-h-full max-w-full object-contain"
            />
          </a>

        </div>
      </div>

      <nav
        id="sub-header-nav"
        className="border-t border-gray-100 dark:border-[#232252] bg-white/90 dark:bg-[#0D0C22]/90 backdrop-blur-sm"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-1 text-gray-600 dark:text-gray-300 hover:text-[#FE007A] dark:hover:text-[#FE007A] transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
