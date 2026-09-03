import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-white dark:bg-[#151433] border-y border-gray-100 dark:border-[#232252] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4705ED] dark:text-[#00E19B]">
            Dudas Resueltas
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2">
            Todo lo que necesitas saber sobre nuestra propuesta formativa y metodología.
          </p>
        </div>

        <div className="space-y-4" id="faq-accordion-list">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-[#FE007A]/50 dark:border-[#FE007A]/40 bg-[#FAFAFE] dark:bg-[#0D0C22] shadow-sm'
                    : 'border-gray-200 dark:border-[#232252] bg-white dark:bg-[#151433]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans font-semibold text-base sm:text-lg text-[#1C1C42] dark:text-white focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FE007A] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FE007A] transform transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-[#232252]/50 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions helper box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-200 dark:border-[#232252] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-base text-[#1C1C42] dark:text-white">
              ¿Tienes otra duda o consulta específica?
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Nuestro equipo docente y de admisiones responde de inmediato vía WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20tengo%20una%20consulta%20espec%C3%ADfica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4705ED] hover:bg-[#4705ED]/90 text-white text-xs font-bold transition-all whitespace-nowrap shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#00E19B]" />
            <span>Consultar al +51 951 847 956</span>
          </a>
        </div>
      </div>
    </section>
  );
};
