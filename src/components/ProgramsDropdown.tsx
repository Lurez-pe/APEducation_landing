import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { PROGRAMS } from '../data';
import { ProgramImage } from './ProgramImage';

interface ProgramsDropdownProps {
  scrolled: boolean;
}

export const ProgramsDropdown: React.FC<ProgramsDropdownProps> = ({ scrolled }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openFromHover = () => {
    cancelClose();
    setOpen(true);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 250);
  };

  const triggerClass = `py-1 font-bold transition-colors whitespace-nowrap text-[11px] sm:text-sm lg:text-[15px] ${
    scrolled
      ? 'text-gray-600 dark:text-gray-300 hover:text-[#FE007A] dark:hover:text-[#FE007A]'
      : 'text-white/90 hover:text-white'
  }`;

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center lg:static"
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') openFromHover();
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') scheduleClose();
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex items-center gap-1 cursor-pointer focus:outline-none ${triggerClass}`}
      >
        <span>Programas</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          onPointerEnter={(e) => {
            if (e.pointerType === 'mouse') openFromHover();
          }}
          className="w-[min(100vw-2rem,600px)] mx-auto pt-3 lg:absolute lg:top-full lg:left-3 lg:right-3 lg:mx-auto lg:w-auto lg:max-w-[1700px] z-50"
        >
          <div
            role="menu"
            aria-label="Programas"
            className="rounded-2xl bg-white dark:bg-[#151433] border border-gray-100 dark:border-[#232252] shadow-2xl p-3 sm:p-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {PROGRAMS.map((program) => (
                <Link
                  key={program.key}
                  to={program.route}
                  role="menuitem"
                  className="group flex flex-col items-stretch overflow-hidden rounded-xl border border-gray-100 dark:border-[#232252] bg-white dark:bg-[#151433] hover:-translate-y-1 hover:shadow-lg hover:border-[#FE007A]/50 transition-all duration-200 text-left"
                >
                  <ProgramImage src={program.image} alt={program.title} tone={program.tone} />
                  <div className="flex flex-col gap-1.5 p-3 sm:p-4">
                    <span className="font-heading font-bold text-xs sm:text-base text-[#1C1C42] dark:text-white leading-tight group-hover:text-[#FE007A] transition-colors">
                      {program.title}
                    </span>
                    <span className="text-[11px] sm:text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-3">
                      {program.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};