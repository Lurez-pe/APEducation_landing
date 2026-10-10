import React, { useState } from 'react';
import { resolveAssetUrl } from './announcementStyles';
import { whatsappUrl, WHATSAPP_DISPLAY } from '../site';

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center group select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
          className={`hidden md:block mr-3 bg-[#61CE70] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xl border border-white/10 transition-all duration-200 pointer-events-none whitespace-nowrap ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        ¿Conversamos? {WHATSAPP_DISPLAY} 🚀
      </div>

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl('Hola AP Education, quisiera recibir información sobre los cursos STEAM')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a AP Education"
        className="w-[48px] h-[48px] bg-transparent text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all relative"
      >
        <img
          src={resolveAssetUrl('assets/brand/wpp_cuadrado.png')}
          alt="WhatsApp"
          className="relative z-10 w-[48px] h-[48px] object-contain"
        />
      </a>
    </div>
  );
};
