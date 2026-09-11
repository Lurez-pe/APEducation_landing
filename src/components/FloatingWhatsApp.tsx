import React, { useState } from 'react';

const resolveAssetUrl = (assetPath: string) =>
  `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`;

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
        ¿Conversamos? +51 951 847 956 🚀
      </div>

      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20los%20cursos%20STEAM"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a AP Education"
        className="w-[50px] h-[50px] rounded-full bg-transparent text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all relative"
      >
        <span className="absolute inset-0 rounded-full bg-white" aria-hidden="true" />
        <img
          src={resolveAssetUrl('assets/brand/wpp_circle.png')}
          alt="WhatsApp"
          className="relative z-10 w-[46px] h-[46px] rounded-full object-contain"
        />
      </a>
    </div>
  );
};
