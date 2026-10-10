import React from 'react';
import { MessageCircle, Mail, Camera, Clock } from 'lucide-react';
import { resolveAssetUrl } from './announcementStyles';
import { ScrollLink } from './ScrollLink';
import { whatsappUrl, WHATSAPP_DISPLAY, CONTACT_EMAIL, SOCIAL_URLS } from '../site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C42] text-white pt-10 pb-12 border-t border-[#4705ED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-2xl p-2 shadow-md flex items-center justify-center">
                <img
                  src={resolveAssetUrl('assets/brand/AP_Logo_H.svg')}
                  alt="AP Education"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed mb-6">
              Ecosistema educativo digital de matemática, comunicación y metodología STEM. Desarrollamos las mentes
              científicas, reflexivas e innovadoras del mañana.
            </p>
            <div className="text-xs text-[#00E19B] font-semibold tracking-wider uppercase">
              ✦ Aprende. Crea. Innova. Transforma.
            </div>
          </div>

          {/* Col 2: Enlaces de Contacto */}
          <div className="lg:col-span-5">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#00E19B] mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#00E19B] flex-shrink-0" />
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FE007A] flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Camera className="w-4 h-4 text-[#FFB600] flex-shrink-0" />
                <a
                  href={SOCIAL_URLS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @academiaapeducation
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
            <ScrollLink to="#que-es" className="hover:text-gray-200 transition-colors">
              Términos del Servicio
            </ScrollLink>
            <ScrollLink to="#contacto" className="hover:text-gray-200 transition-colors">
              Política de Privacidad
            </ScrollLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
