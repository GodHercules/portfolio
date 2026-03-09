const DEFAULT_PHONE_DISPLAY = '+55 (11) 99999-9999';
const DEFAULT_PHONE_RAW = '+5511999999999';

const envPhoneDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY;
const envPhoneRaw = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW;

export const profile = {
  name: 'Hercules de Oliveira',
  email: 'herculesoliveira.dev@gmail.com',
  github: 'https://github.com/GodHercules',
  linkedin: 'https://www.linkedin.com',
  phoneDisplay: envPhoneDisplay ?? DEFAULT_PHONE_DISPLAY,
  phoneRaw: envPhoneRaw ?? DEFAULT_PHONE_RAW,
};

export function buildWhatsAppUrl(phoneRaw: string, message: string) {
  const normalized = phoneRaw.replace(/\D/g, '');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
