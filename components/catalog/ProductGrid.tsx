import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export default function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="mb-4 aspect-[3/4] rounded-sm bg-stone-gray/25" />
            <div className="mb-2 h-4 w-[75%] max-w-full rounded bg-stone-gray/25" />
            <div className="h-4 w-[50%] max-w-full rounded bg-stone-gray/25" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-sm border border-stone-line bg-paper-deep/30 px-4 py-14 text-center sm:py-16">
        <p className="text-base text-foco-black/65 sm:text-lg">Nenhuma peça com esses filtros.</p>
        <p className="mt-2 text-sm text-foco-black/45">Tente limpar os filtros ou escolher outra categoria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
