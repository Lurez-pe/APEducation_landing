import React, { useState, useEffect } from 'react';
import { Rocket, Moon, Sun, MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" id="brand-logo">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#4705ED] to-[#FE007A] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Rocket className="w-6 h-6 transform -rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-[#1C1C42] dark:text-white leading-none">
              AP <span className="text-[#FE007A]">EDUCATION</span>
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-[#4705ED] dark:text-[#00E19B] uppercase mt-1">
              Ciencia • Tecnología • Futuro
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-[#FE007A] dark:hover:text-[#FE007A] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
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
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4705ED] hover:bg-[#4705ED]/90 text-white font-semibold text-sm transition-all shadow-md shadow-[#4705ED]/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#00E19B]" />
            <span>+51 951 847 956</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú móvil"
            className="lg:hidden w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#151433] flex items-center justify-center text-[#1C1C42] dark:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden px-6 pt-3 pb-6 bg-white dark:bg-[#151433] border-b border-gray-200 dark:border-[#232252] animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-3 font-semibold text-base py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-200 hover:text-[#FE007A] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20deseo%20m%C3%A1s%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FE007A] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear en WhatsApp (+51 951 847 956)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
