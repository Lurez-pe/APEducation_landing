export const WHATSAPP_NUMBER = '51951847956';

export const WHATSAPP_DISPLAY = '+51 951 847 956';

export const whatsappUrl = (message?: string): string =>
  message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

export const CONTACT_EMAIL = 'equipo@apeducationlatam.com';

export const SOCIAL_URLS = {
  facebook: 'https://www.facebook.com/profile.php?id=100064046923630',
  tiktok: 'https://www.tiktok.com/@academiaapeducation',
  instagram: 'https://www.instagram.com/academiaapeducation/',
  linkedin: 'https://www.linkedin.com/company/academia-ap-education',
} as const;