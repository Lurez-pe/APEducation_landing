import { AnnouncementType } from '../types';

export const resolveAssetUrl = (assetPath: string) =>
  `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`;

export const badgeStyles: Record<AnnouncementType, string> = {
  Gratuito: 'bg-[#00E19B]/15 text-[#0C8C63] dark:text-[#00E19B]',
  Evento: 'bg-[#FE007A]/15 text-[#FE007A]',
  Convocatoria: 'bg-[#FFB600]/15 text-[#A87A00] dark:text-[#FFB600]',
};