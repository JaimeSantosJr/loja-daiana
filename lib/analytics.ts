import { track } from '@vercel/analytics';

type WhatsAppClickPayload = {
  source: string;
  variant?: 'primary' | 'outline' | 'minimal';
};

export function trackWhatsAppClick(payload: WhatsAppClickPayload) {
  track('whatsapp_click', {
    source: payload.source,
    variant: payload.variant ?? 'primary',
  });
}
