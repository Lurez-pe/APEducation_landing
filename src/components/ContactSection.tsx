import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PROGRAMS } from '../data';

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState(PROGRAMS[0].title);
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setFeedback({
        type: 'error',
        text: 'Por favor, completa los campos requeridos (Nombre, Teléfono y Correo).',
      });
      return;
    }

    const waText = encodeURIComponent(
      `Hola AP Education, soy ${name}. Deseo información/reserva sobre el programa de "${program}" para ${
        age ? `edad/grado: ${age}` : 'mi hijo/a'
      }. ${message ? `Consulta: ${message}` : ''}`
    );
    const waUrl = `https://wa.me/51951847956?text=${waText}`;

    setSubmitting(true);
    setFeedback(null);

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setSubmitting(false);
      setFeedback({
        type: 'success',
        text: `¡Excelente, ${name}! Tu solicitud para "${program}" fue registrada con éxito. Un mentor de AP Education se comunicará al ${phone} en breve.`,
      });
    }, 600);
  };

  return (
    <section id="contacto" className="py-[1cm] relative overflow-hidden">
      {/* Glow decorative background */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FE007A]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#4705ED]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Motivation & Contact Cards */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">
              Únete a Nosotros
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl bg-gradient-to-r from-[#4705ED] via-[#FE007A] to-[#00E19B] bg-clip-text text-transparent mt-2 mb-6 leading-tight">
              ¿Listo para formar parte de AP Education?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              El mayor regalo para tus hijos es brindarles la seguridad personal y el pensamiento crítico para liderar
              su propio futuro. Da el primer paso hoy reservando una sesión diagnóstica gratuita.
            </p>

            <div className="space-y-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064046923630"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#151433] border border-gray-200/80 dark:border-[#232252] shadow-sm hover:border-[#1877F2] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center flex-shrink-0">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">
                    Síguenos en Facebook
                  </div>
                  <div className="font-heading font-bold text-base text-[#1C1C42] dark:text-white group-hover:text-[#1877F2] transition-colors">
                    Academia AP Education
                  </div>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@academiaapeducation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#151433] border border-gray-200/80 dark:border-[#232252] shadow-sm hover:border-[#FE2C55] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FE2C55]/10 text-[#FE2C55] flex items-center justify-center flex-shrink-0">
                  <TikTokIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">
                    Síguenos en TikTok
                  </div>
                  <div className="font-heading font-bold text-base text-[#1C1C42] dark:text-white group-hover:text-[#FE2C55] transition-colors">
                    @academiaapeducation
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
                  <InstagramIcon className="w-6 h-6" />
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

              <a
                href="https://www.linkedin.com/company/academia-ap-education"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#151433] border border-gray-200/80 dark:border-[#232252] shadow-sm hover:border-[#0A66C2] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center flex-shrink-0">
                  <LinkedInIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">
                    Síguenos en LinkedIn
                  </div>
                  <div className="font-heading font-bold text-base text-[#1C1C42] dark:text-white group-hover:text-[#0A66C2] transition-colors">
                    Academia AP Education
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
                    {PROGRAMS.map((p) => (
                      <option key={p.key} value={p.title}>
                        {p.title}
                      </option>
                    ))}
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
                  role="status"
                  aria-live="polite"
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
                className="w-full py-4 rounded-xl bg-[#FE007A] hover:bg-[#e0006c] text-white font-bold text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
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
