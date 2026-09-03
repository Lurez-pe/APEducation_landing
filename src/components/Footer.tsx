import React from 'react';
import { Rocket, MessageCircle, Mail, Camera, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C42] text-white pt-16 pb-12 border-t border-[#4705ED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4705ED] to-[#FE007A] flex items-center justify-center text-white shadow-md">
                <Rocket className="w-5 h-5 -rotate-45" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                AP <span className="text-[#FE007A]">EDUCATION</span>
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed mb-6">
              Ecosistema educativo digital de matemática, comunicación y metodología STEM. Desarrollamos las mentes
              científicas, reflexivas e innovadoras del mañana.
            </p>
            <div className="text-xs text-[#00E19B] font-semibold tracking-wider uppercase">
              ✦ Aprende. Crea. Innova. Transforma.
            </div>
          </div>

          {/* Col 2: Programas STEAM */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#00E19B] mb-4">
              Programas STEAM
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <a href="#programas" className="hover:text-[#FE007A] transition-colors">
                  Matemática Comprensiva
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-[#FE007A] transition-colors">
                  Comunicación Efectiva & Oratoria
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-[#FE007A] transition-colors">
                  Diseño & Modelado 3D
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-[#FE007A] transition-colors">
                  Programación y Videojuegos
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-[#FE007A] transition-colors">
                  AP LAB (Laboratorio Interdisciplinario)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Enlaces de Contacto */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#00E19B] mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#00E19B] flex-shrink-0" />
                <a
                  href="https://wa.me/51951847956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +51 951 847 956
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FE007A] flex-shrink-0" />
                <a href="mailto:academia.ap.education@gmail.com" className="hover:text-white transition-colors">
                  academia.ap.education@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Camera className="w-4 h-4 text-[#FFB600] flex-shrink-0" />
                <a
                  href="https://instagram.com/ap.education20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @ap.education20
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#00E19B] flex-shrink-0" />
                <span>Lunes a Sábado: 8:00 am - 8:00 pm (Hora Perú)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} AP Education. Todos los derechos reservados. Fundada por Azahalia Puyen.
          </div>
          <div className="flex gap-6">
            <a href="#que-es" className="hover:text-gray-200 transition-colors">
              Términos del Servicio
            </a>
            <a href="#contacto" className="hover:text-gray-200 transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
