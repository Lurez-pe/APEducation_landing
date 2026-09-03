import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

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
        className={`hidden md:block mr-3 bg-[#1C1C42] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xl border border-white/10 transition-all duration-200 pointer-events-none whitespace-nowrap ${
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
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all glow-purple relative"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FE007A] rounded-full border-2 border-white dark:border-[#0D0C22] animate-pulse" />
      </a>
    </div>
  );
};
