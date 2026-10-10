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
  type: AnnouncementType;
  date: string;
  title: string;
  description: string;
  meta: string;
  image: string;
  cta?: AnnouncementCta | null;
  featured?: boolean;
}

/** Slide del hero de portada. Seccion independiente de Announcement. */
export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageHeroDesktop: string;
  imageHeroMobile: string;
  imageHeroMobileTall: string;
}

export interface ProgramInfo {
  key: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  route: string;
  tone: string;
}

export interface MathPackage {
  id: string;
  title: string;
  audience: string;
  description: string;
  benefits: string[];
  tone: string;
  symbol: string;
}
