import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Camera, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  selectedProgram?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedProgram }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('Matemática Comprensiva');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedProgram) {
      setProgram(selectedProgram);
    }
  }, [selectedProgram]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setFeedback({
        type: 'error',
        text: 'Por favor, completa los campos requeridos (Nombre, Teléfono y Correo).',
      });
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    // Simulate submission and construct WhatsApp redirection URL
    setTimeout(() => {
      setSubmitting(false);
      setFeedback({
        type: 'success',
        text: `¡Excelente, ${name}! Tu solicitud para "${program}" fue registrada con éxito. Un mentor de AP Education se comunicará al ${phone} en breve.`,
      });

      const waText = encodeURIComponent(
        `Hola AP Education, soy ${name}. Deseo información/reserva sobre el programa de "${program}" para ${
          age ? `edad/grado: ${age}` : 'mi hijo/a'
        }. ${message ? `Consulta: ${message}` : ''}`
      );
      const waUrl = `https://wa.me/51951847956?text=${waText}`;

      // Open WhatsApp after a brief delay
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1200);
    }, 600);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Glow decorative background */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FE007A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#4705ED]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Motivation & Contact Cards */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
              Únete a Nosotros
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#1C1C42] dark:text-white mt-2 mb-6 leading-tight">
              ¿Listo para formar parte de AP Education?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              El mayor regalo para tus hijos es brindarles la seguridad personal y el pensamiento crítico para liderar
              su propio futuro. Da el primer paso hoy reservando una sesión diagnóstica gratuita.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/51951847956?text=Hola%20AP%20Education,%20deseo%20asesor%C3%ADa%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#151433] border border-gray-200/80 dark:border-[#232252] shadow-sm hover:border-[#00E19B] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00E19B]/15 text-[#00E19B] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">
                    Atención Inmediata por WhatsApp
                  </div>
                  <div className="font-heading font-bold text-base text-[#1C1C42] dark:text-white group-hover:text-[#00E19B] transition-colors">
                    +51 951 847 956
                  </div>
                </div>
              </a>

              <a
                href="mailto:academia.ap.education@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#151433] border border-gray-200/80 dark:border-[#232252] shadow-sm hover:border-[#FE007A] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FE007A]/10 text-[#FE007A] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">
                    Correo Electrónico Oficial
                  </div>
                  <div className="font-heading font-bold text-base text-[#1C1C42] dark:text-white group-hover:text-[#FE007A] transition-colors">
                    academia.ap.education@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/academiaapeducation/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#151433] border border-gray-200/80 dark:border-[#232252] shadow-sm hover:border-[#4705ED] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4705ED]/10 text-[#4705ED] dark:text-[#00E19B] flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">
                    Síguenos en Instagram
                  </div>
                  <div className="font-heading font-bold text-base text-[#1C1C42] dark:text-white group-hover:text-[#4705ED] transition-colors">
                    @academiaapeducation
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Formulario Interactivo */}
          <div className="lg:col-span-7 bg-white dark:bg-[#151433] p-8 sm:p-12 rounded-3xl border border-gray-200/80 dark:border-[#232252] shadow-xl">
            <div className="mb-6">
              <h3 className="font-heading font-bold text-2xl text-[#1C1C42] dark:text-white">
                Solicitar Información o Reserva de Vacante
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Completa tus datos y nuestro equipo pedagógico te contactará en menos de 24 horas con el cronograma y
                costos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nombre del Padre / Tutor *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-200 dark:border-[#232252] text-[#1C1C42] dark:text-white text-sm focus:outline-none focus:border-[#FE007A] focus:ring-1 focus:ring-[#FE007A] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+51 900 000 000"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-200 dark:border-[#232252] text-[#1C1C42] dark:text-white text-sm focus:outline-none focus:border-[#FE007A] focus:ring-1 focus:ring-[#FE007A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                >
                  Correo Electrónico *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-200 dark:border-[#232252] text-[#1C1C42] dark:text-white text-sm focus:outline-none focus:border-[#FE007A] focus:ring-1 focus:ring-[#FE007A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-program"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Programa de Interés
                  </label>
                  <select
                    id="contact-program"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-200 dark:border-[#232252] text-[#1C1C42] dark:text-white text-sm focus:outline-none focus:border-[#FE007A] transition-colors"
                  >
                    <option value="Matemática Comprensiva">Matemática Comprensiva</option>
                    <option value="Comunicación Efectiva & Oratoria">Comunicación Efectiva & Oratoria</option>
                    <option value="Diseño y Modelado 3D">Diseño y Modelado 3D</option>
                    <option value="Programación & Código Creativo">Programación & Código Creativo</option>
                    <option value="AP LAB: Experiencia STEAM Total">AP LAB: Experiencia STEAM Total</option>
                    <option value="Orientación Pedagógica General">Orientación Pedagógica General</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-age"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Edad / Grado del estudiante
                  </label>
                  <input
                    id="contact-age"
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Ej. 11 años / 6to Primaria"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-200 dark:border-[#232252] text-[#1C1C42] dark:text-white text-sm focus:outline-none focus:border-[#FE007A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2"
                >
                  Mensaje o Consulta específica
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos los objetivos académicos de tu hijo/a o sus gustos tecnológicos..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAFE] dark:bg-[#0D0C22] border border-gray-200 dark:border-[#232252] text-[#1C1C42] dark:text-white text-sm focus:outline-none focus:border-[#FE007A] transition-colors"
                />
              </div>

              {/* Feedback messages */}
              {feedback && (
                <div
                  className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-2 ${
                    feedback.type === 'success'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                  }`}
                >
                  {feedback.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-[#FE007A] hover:bg-[#e0006c] text-white font-bold text-base glow-magenta transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                <span>{submitting ? 'Procesando información...' : 'Enviar Solicitud de Información'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
