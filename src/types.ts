export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface MethodPhase {
  number: string;
  title: string;
  tag: string;
  description: string;
  example: string;
  iconName: string;
}

export type AnnouncementType = 'Gratuito' | 'Evento' | 'Convocatoria' | 'Anuncio';

export interface AnnouncementCta {
  label: string;
  href: string;
}

export interface Announcement {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  type?: AnnouncementType;
  date?: string;
  meta?: string;
  image: string;
  imageHeroDesktop?: string;
  imageHeroMobile?: string;
  cta?: AnnouncementCta | null;
  featured?: boolean;
  minimalHero?: boolean;
}

export interface ProgramInfo {
  key: string;
  title: string;
  description: string;
  image: string;
  route: string;
  tone: string;
}
