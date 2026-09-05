import React from 'react';
import { X, CheckCircle2, Clock, Calendar, Users, Award, Rocket, MessageCircle } from 'lucide-react';
import { Program } from '../types';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onSelectProgramForContact: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onSelectProgramForContact,
}) => {
  if (!program) return null;

  const handleEnrollClick = () => {
    onSelectProgramForContact(program.title);
    onClose();
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola AP Education, deseo reservar una vacante o recibir información detallada sobre el programa de ${program.title}.`
  );

  return (
    <div
      id="program-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="program-modal-content"
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl dark:border-[#232252] dark:bg-[#151433] sm:max-h-[calc(100dvh-2rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative flex-shrink-0 bg-gradient-to-r from-[#1C1C42] to-[#4705ED] p-5 text-white sm:p-8">
          <button
            id="close-program-modal-btn"
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#00E19B] text-xs font-bold mb-3 uppercase tracking-wider">
            <span>{program.tag}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl pr-10">
            {program.title}
          </h2>
          <p className="text-gray-200 text-sm sm:text-base mt-2">{program.subtitle}</p>
        </div>

        {/* Modal Body */}
        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-5 sm:p-8">
          {/* Quick specs chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252] text-xs font-semibold text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FE007A]" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#4705ED] dark:text-[#00E19B]" />
              <span>{program.ageRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFB600]" />
              <span>{program.level}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#1C1C42] dark:text-white mb-2">
              Enfoque Pedagógico
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Syllabus Modules */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#1C1C42] dark:text-white mb-3">
              Estructura Modular & Temario
            </h4>
            <div className="space-y-3">
              {program.modules.map((mod, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-100 dark:border-[#232252]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FE007A]/15 text-[#FE007A]">
                      {mod.week}
                    </span>
                    <span className="font-heading font-bold text-sm text-[#1C1C42] dark:text-white">
                      {mod.title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Project Outcome */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#4705ED]/10 to-[#FE007A]/10 border border-[#4705ED]/20">
            <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#1C1C42] dark:text-white mb-1">
              <Rocket className="w-4 h-4 text-[#FE007A]" />
              <span>Proyecto Práctico Final</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {program.project}
            </p>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="flex flex-shrink-0 flex-col items-center justify-between gap-4 border-t border-gray-100 bg-gray-50 p-4 dark:border-[#232252] dark:bg-[#0D0C22] sm:flex-row sm:p-6">
          <a
            href={`https://wa.me/51951847956?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp (+51 951 847 956)</span>
          </a>

          <button
            onClick={handleEnrollClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FE007A] hover:bg-[#e0006c] text-white font-bold text-sm glow-magenta transition-all"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Reservar Plaza en Formulario</span>
          </button>
        </div>
      </div>
    </div>
  );
};
