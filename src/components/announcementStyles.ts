import { AnnouncementType } from '../types';

export const resolveAssetUrl = (assetPath: string) =>
  `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`;

export const badgeStyles: Record<AnnouncementType, string> = {
  Gratuito: 'bg-[#00E19B]/15 text-[#0C8C63] dark:text-[#00E19B]',
  Evento: 'bg-[#FE007A]/15 text-[#FE007A]',
  Convocatoria: 'bg-[#FFB600]/15 text-[#A87A00] dark:text-[#FFB600]',
  Anuncio: 'bg-[#4705ED]/15 text-[#4705ED] dark:text-[#A78BFA]',
};

export const accentStyles: Record<AnnouncementType, string> = {
  Gratuito: 'text-[#0C8C63] dark:text-[#00E19B]',
  Evento: 'text-[#FE007A]',
  Convocatoria: 'text-[#A87A00] dark:text-[#FFB600]',
  Anuncio: 'text-[#4705ED] dark:text-[#A78BFA]',
};

export const heroBadgeTextStyles: Record<AnnouncementType, string> = {
  Gratuito: 'text-[#00E19B]',
  Evento: 'text-[#FE007A]',
  Convocatoria: 'text-[#FFB600]',
  Anuncio: 'text-[#A78BFA]',
};

export const heroBadgeDotStyles: Record<AnnouncementType, string> = {
  Gratuito: 'bg-[#00E19B]',
  Evento: 'bg-[#FE007A]',
  Convocatoria: 'bg-[#FFB600]',
  Anuncio: 'bg-[#A78BFA]',
};