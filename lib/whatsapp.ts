/** Número comercial FOCO Woman (apenas dígitos, sem +) para wa.me */
export const WHATSAPP_E164 = '5548991661204';

export const WHATSAPP_DISPLAY = '+55 48 99166-1204';

export function whatsappHref(text?: string): string {
  if (!text?.trim()) return `https://wa.me/${WHATSAPP_E164}`;
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text.trim())}`;
}

export function productInquiryMessage(
  productName: string,
  options?: { size?: string | null; color?: string | null }
): string {
  const parts = [
    `Olá! Tenho interesse na peça *${productName}* (FOCO Woman).`,
  ];
  if (options?.size) parts.push(`Tamanho de preferência: ${options.size}.`);
  if (options?.color) parts.push(`Cor: ${options.color}.`);
  parts.push(
    'Podem me informar disponibilidade, valores e como reservar? Obrigada!'
  );
  return parts.join('\n');
}
