import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a equipe FOCO Woman via WhatsApp para tirar dúvidas sobre peças, tamanhos e disponibilidade.',
  alternates: {
    canonical: '/institucional/contato',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
