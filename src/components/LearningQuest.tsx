import React, { useState } from 'react';
import { BadgeCheck, Check, Flame, LockKeyhole, Sparkles, Trophy, Zap } from 'lucide-react';

const quests = [
  { title: 'Resuelve un reto lógico', detail: 'Activa tu razonamiento deductivo', points: 40, color: '#FE007A' },
  { title: 'Comparte una idea', detail: 'Explica tu solución a la comunidad', points: 30, color: '#00E19B' },
  { title: 'Crea un prototipo', detail: 'Convierte una pregunta en una prueba', points: 50, color: '#FFB600' },
];

const badges = [
  { label: 'Explorador', icon: Sparkles, unlocked: true, color: '#FE007A' },
  { label: 'Constructor', icon: Zap, unlocked: true, color: '#00E19B' },
  { label: 'Mentor', icon: LockKeyhole, unlocked: false, color: '#4705ED' },
];

export const LearningQuest: React.FC = () => {
  const [completedQuests, setCompletedQuests] = useState<number[]>([]);
  const points = completedQuests.reduce((total, index) => total + quests[index].points, 0);
  const levelProgress = Math.min((points / 180) * 100, 100);

  const toggleQuest = (index: number) => {
    setCompletedQuests((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  };

  return (
    <section id="misiones" className="py-20 lg:py-24 bg-[#FAFAFE] dark:bg-[#0D0C22] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FE007A]">Progreso que se siente</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1C1C42] dark:text-white mt-2 mb-5">
              Cada desafío desbloquea una nueva habilidad.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-7">
              Las misiones convierten el aprendizaje en un recorrido visible: los estudiantes avanzan, celebran sus logros y encuentran nuevas razones para volver a crear.
            </p>

            <div className="neu-surface p-5 rounded-3xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#1C1C42] dark:text-white font-heading font-bold">
                  <Trophy className="w-5 h-5 text-[#FFB600]" />
                  <span>Nivel Constructor</span>
                </div>
                <span className="text-sm font-extrabold text-[#FE007A]">{points} XP</span>
              </div>
              <div className="h-3 rounded-full bg-gray-200 dark:bg-[#0D0C22] overflow-hidden shadow-inner">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FE007A] via-[#4705ED] to-[#00E19B] transition-all duration-500"
                  style={{ width: `${levelProgress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                <span>{completedQuests.length}/3 misiones completadas</span>
                <span>180 XP para el siguiente nivel</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 text-sm font-semibold text-gray-600 dark:text-gray-300">
              <div className="w-10 h-10 rounded-2xl neu-inset flex items-center justify-center text-[#FE007A]"><Flame className="w-5 h-5" /></div>
              <span>Racha de curiosidad: <strong className="text-[#1C1C42] dark:text-white">5 días</strong></span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 neu-surface p-5 rounded-3xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#00E19B]">Misión de hoy</span>
                  <h3 className="font-heading font-bold text-xl text-[#1C1C42] dark:text-white mt-1">Elige tu próximo desafío</h3>
                </div>
                <div className="w-11 h-11 rounded-2xl neu-inset flex items-center justify-center text-[#FFB600]"><BadgeCheck className="w-6 h-6" /></div>
              </div>
              <div className="space-y-3">
                {quests.map((quest, index) => {
                  const completed = completedQuests.includes(index);
                  return (
                    <button
                      key={quest.title}
                      onClick={() => toggleQuest(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all cursor-pointer ${completed ? 'neu-inset' : 'neu-control hover:-translate-y-0.5'}`}
                    >
                      <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${quest.color}1A`, color: quest.color }}>
                        {completed ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block text-sm font-bold ${completed ? 'line-through text-gray-400' : 'text-[#1C1C42] dark:text-white'}`}>{quest.title}</span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{quest.detail}</span>
                      </span>
                      <span className="text-xs font-extrabold" style={{ color: quest.color }}>+{quest.points} XP</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className={`neu-surface p-4 rounded-2xl flex items-center gap-3 ${!badge.unlocked ? 'opacity-55' : ''}`}>
                  <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center" style={{ color: badge.color }}><Icon className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Insignia</div>
                    <div className="font-heading font-bold text-sm text-[#1C1C42] dark:text-white">{badge.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};