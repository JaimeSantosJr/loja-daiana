import Image from 'next/image';
import Link from 'next/link';
import { Category, Product } from '@/lib/types';
import { productInquiryMessage } from '@/lib/whatsapp';
import WhatsAppButton from '@/components/brand/WhatsAppButton';
import { getProductFocus } from '@/lib/imageFocus';

const CATEGORY_LABEL: Record<Category, string> = {
  leggings: 'Leggings',
  tops: 'Tops',
  conjuntos: 'Conjuntos',
  macaquinhos: 'Macaquinhos',
  acessorios: 'Acessórios',
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex min-w-0 flex-col">
      <Link href={`/produto/${product.id}`} className="block min-w-0 overflow-hidden rounded-sm">
        <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-paper-deep sm:mb-5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            quality={92}
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: getProductFocus(product.id, 'card') }}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foco-black/35 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

          <div className="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-2 sm:left-4 sm:top-4">
            {product.isNew && (
              <span className="bg-paper/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foco-black shadow-sm backdrop-blur-sm sm:px-3">
                Novo
              </span>
            )}
            {product.isBestseller && (
              <span className="border border-paper/40 bg-foco-black/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper backdrop-blur-sm sm:px-3">
                Destaque
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-deep/90">
          {CATEGORY_LABEL[product.category]}
        </p>
        <Link href={`/produto/${product.id}`} className="min-w-0">
          <h3 className="mt-1 break-words font-display text-lg text-foco-black transition-colors group-hover:text-rose-deep md:text-xl">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foco-black/55">{product.description}</p>

        <div className="mt-4 flex flex-col gap-3 border-t border-stone-line pt-4 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:pt-5">
          <WhatsAppButton
            variant="outline"
            className="min-h-12 w-full flex-1 py-2.5 text-sm sm:min-h-11 sm:min-w-[10rem] sm:flex-1"
            message={productInquiryMessage(product.name)}
            analyticsSource="product_card"
          >
            Consultar peça
          </WhatsAppButton>
          <Link
            href={`/produto/${product.id}`}
            className="inline-flex min-h-11 items-center justify-center text-center text-xs font-medium uppercase tracking-wider text-foco-black/50 underline-offset-4 transition-colors hover:text-foco-black hover:underline sm:min-h-0 sm:px-2"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}