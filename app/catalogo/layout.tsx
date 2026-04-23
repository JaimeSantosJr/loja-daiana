import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coleção',
  description:
    'Explore a coleção FOCO Woman com filtros por categoria, tamanho e cor. Atendimento no WhatsApp.',
  alternates: {
    canonical: '/catalogo',
  },
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
