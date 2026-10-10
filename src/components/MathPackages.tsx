import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { MATH_PACKAGES } from '../data';
import { FacebookIcon, TikTokIcon, InstagramIcon, LinkedInIcon } from './ContactSection';

const WHATSAPP_NUMBER = '51951847956';

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100064046923630', Icon: FacebookIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@academiaapeducation', Icon: TikTokIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/academiaapeducation/', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/academia-ap-education', Icon: LinkedInIcon },
];

const ctaClass =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE007A] px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#e0006c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE007A] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0D0C22]';

export const MathPackages: React.FC = () => {
  return (
    <section aria-labelledby="paquetes-matematica-titulo" className="mt-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#4705ED] dark:text-[#00E19B]">
          Nuestros paquetes
        </span>
        <h2
          id="paquetes-matematica-titulo"
          className="mt-2 mb-4 font-heading font-bold text-3xl sm:text-4xl leading-tight bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent"
        >
          Elige el programa ideal para su aprendizaje
        </h2>
        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Propuestas virtuales de Matemática para cada etapa. Refuerza, adelanta y llega más lejos con AP Education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {MATH_PACKAGES.map((pack) => (
          <article
            key={pack.id}
            className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-[#151433] border border-gray-200/80 dark:border-[#232252] shadow-sm transition-shadow duration-200 hover:shadow-xl"
          >
            <div aria-hidden="true" className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${pack.tone}`}>
              <span className="absolute inset-0 flex items-center justify-center select-none font-heading font-extrabold text-7xl text-white/25">
                {pack.symbol}
              </span>
              <span className="absolute bottom-3 right-3 rounded-md bg-black/15 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                Imagen del paquete
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FE007A]">{pack.audience}</span>
              <h3 className="mt-1.5 font-heading font-bold text-lg sm:text-xl text-[#1C1C42] dark:text-white">
                {pack.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{pack.description}</p>

              <ul className="mt-4 space-y-2">
                {pack.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0C8C63] dark:text-[#00E19B]"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(
                  `Hola AP Education, deseo información sobre el paquete de Matemática "${pack.title}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaClass} mt-6 w-full`}
              >
                Consultar por WhatsApp
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-tight text-[#1C1C42] dark:text-white">
          Cada estudiante tiene su propio camino para aprender.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          En AP Education te ayudamos a encontrar la propuesta de Matemática que mejor se adapte a sus necesidades.
        </p>
        <a
          href={whatsappLink(
            'Hola AP Education, necesito ayuda para elegir el paquete de Matemática ideal para mi estudiante.'
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ctaClass} mt-6 px-7 py-3.5 text-base`}
        >
          Escríbenos por WhatsApp
          <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
        </a>

        <div className="mt-8 flex items-center justify-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} de AP Education`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#151433] border border-gray-200/80 dark:border-[#232252] text-[#1C1C42] dark:text-white shadow-sm transition-colors hover:border-[#FE007A] hover:text-[#FE007A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE007A]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
