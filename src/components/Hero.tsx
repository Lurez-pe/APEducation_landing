import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, Users, Award, Rocket, Puzzle, GraduationCap, HandMetal, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      {/* Atmospheric gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] sm:w-[950px] h-[500px] bg-gradient-to-tr from-[#4705ED]/15 via-[#FE007A]/15 to-[#00E19B]/10 blur-[130px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE007A]/10 border border-[#FE007A]/30 text-[#FE007A] font-bold text-xs uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FE007A] animate-ping" />
              Aprende. Crea. Innova. Transforma.
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C42] dark:text-white leading-[1.12] tracking-tight mb-6">
              Educación que{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FE007A] via-[#4705ED] to-[#00E19B]">
                prepara a nuestros estudiantes
              </span>{' '}
              para el futuro.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Una experiencia educativa digital de vanguardia que transforma la relación con la{' '}
              <strong className="text-[#1C1C42] dark:text-white font-semibold">matemática</strong>, la{' '}
              <strong className="text-[#1C1C42] dark:text-white font-semibold">comunicación</strong> y el universo{' '}
              <strong className="text-[#4705ED] dark:text-[#00E19B] font-semibold">STEAM</strong>, potenciando la curiosidad innata y el pensamiento reflexivo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-cta-enroll"
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FE007A] text-white font-bold text-base glow-magenta hover:bg-[#e0006c] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Inscríbete ahora</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-cta-whatsapp"
                href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20deseo%20informaci%C3%B3n%20personalizada%20sobre%20sus%20programas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white dark:bg-[#151433] border border-gray-200 dark:border-[#232252] hover:border-[#4705ED] text-[#1C1C42] dark:text-white font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5"
              >
                <span className="w-3 h-3 rounded-full bg-[#00E19B]" />
                <MessageCircle className="w-4 h-4 text-[#00E19B]" />
                <span>Chatear por WhatsApp</span>
              </a>
            </div>

            {/* Mini Highlights */}
            <div className="mt-10 pt-8 border-t border-gray-200/80 dark:border-[#232252]/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00E19B] flex-shrink-0" />
                <span>Clases 100% en vivo e interactivas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FE007A] flex-shrink-0" />
                <span>Máximo 6-8 estudiantes por sala</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FFB600] flex-shrink-0" />
                <span>Metodología STEM aplicada</span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition (Brand Icons Orbit) */}
          <div className="lg:col-span-5 flex justify-center relative select-none">
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              {/* Concentric Dashed Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#4705ED]/30 dark:border-[#4705ED]/40 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#FE007A]/30 dark:border-[#FE007A]/40" />

              {/* Center Core Hub */}
              <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-[#4705ED] to-[#FE007A] p-1 shadow-2xl glow-magenta animate-float">
                <div className="w-full h-full bg-white dark:bg-[#151433] rounded-[22px] p-4 flex flex-col items-center justify-center text-center">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FE007A]">AP</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4705ED] dark:text-[#00E19B]">
                    Education
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Ecosistema STEAM</span>
                </div>
              </div>

              {/* Orbiting Brand Element 1: Rocket (Top) */}
              <div
                title="Aprende y Despega"
                className="absolute -top-3 left-1/2 -translate-x-1/2 p-3.5 rounded-2xl bg-white dark:bg-[#151433] shadow-lg border border-gray-100 dark:border-[#232252] hover:scale-110 transition-transform animate-float cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FE007A]/10 text-[#FE007A] flex items-center justify-center">
                  <Rocket className="w-5 h-5 -rotate-45" />
                </div>
              </div>

              {/* Orbiting Brand Element 2: Puzzle (Right) */}
              <div
                title="Pensamiento Lógico"
                className="absolute top-1/2 -right-3 -translate-y-1/2 p-3.5 rounded-2xl bg-white dark:bg-[#151433] shadow-lg border border-gray-100 dark:border-[#232252] hover:scale-110 transition-transform animate-float-delayed cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B] flex items-center justify-center">
                  <Puzzle className="w-5 h-5" />
                </div>
              </div>

              {/* Orbiting Brand Element 3: Cap (Bottom) */}
              <div
                title="Excelencia Académica"
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-3.5 rounded-2xl bg-white dark:bg-[#151433] shadow-lg border border-gray-100 dark:border-[#232252] hover:scale-110 transition-transform animate-float cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFB600]/10 text-[#FFB600] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Orbiting Brand Element 4: Hand (Left) */}
              <div
                title="Creación Activa"
                className="absolute top-1/2 -left-3 -translate-y-1/2 p-3.5 rounded-2xl bg-white dark:bg-[#151433] shadow-lg border border-gray-100 dark:border-[#232252] hover:scale-110 transition-transform animate-float-delayed cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00E19B]/15 text-[#00E19B] flex items-center justify-center">
                  <HandMetal className="w-5 h-5" />
                </div>
              </div>

              {/* Floating Pill 1 */}
              <div className="absolute top-8 left-0 bg-white/95 dark:bg-[#151433]/95 border border-gray-100 dark:border-[#232252] rounded-full px-3 py-1.5 text-xs font-bold text-[#4705ED] dark:text-[#00E19B] shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#00E19B]" />
                <span>100% Online & Dinámico</span>
              </div>

              {/* Floating Pill 2 */}
              <div className="absolute bottom-8 right-0 bg-white/95 dark:bg-[#151433]/95 border border-gray-100 dark:border-[#232252] rounded-full px-3 py-1.5 text-xs font-bold text-[#FE007A] shadow-md flex items-center gap-1.5">
                <span>🚀 Metodología Activa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
