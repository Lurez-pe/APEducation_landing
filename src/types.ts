export interface Program {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  color: 'magenta' | 'purple' | 'teal' | 'amber';
  icon: string;
  description: string;
  highlights: string[];
  duration: string;
  ageRange: string;
  level: string;
  modules: {
    week: string;
    title: string;
    description: string;
  }[];
  project: string;
}

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
  cta?: AnnouncementCta;
  featured?: boolean;
}
