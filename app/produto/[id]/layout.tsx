import type { Metadata } from 'next';
import { PRODUCTS } from '@/lib/constants';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return {
      title: 'Peça não encontrada',
      description: 'A peça solicitada não está disponível na vitrine FOCO Woman.',
    };
  }

  return {
    title: product.name,
    description: `${product.description} Consulte disponibilidade pelo WhatsApp FOCO Woman.`,
    alternates: {
      canonical: `/produto/${product.id}`,
    },
    openGraph: {
      title: `${product.name} | FOCO Woman`,
      description: `${product.description} Atendimento personalizado no WhatsApp.`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}