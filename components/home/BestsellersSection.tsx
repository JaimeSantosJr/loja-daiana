import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/lib/constants';

export default function BestsellersSection() {
  const bestsellers = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);

  return (
    <section className="border-t border-stone-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">Destaques</span>
          <h2 className="mt-3 font-display text-3xl text-foco-black md:text-5xl">As favoritas</h2>
          <p className="mx-auto mt-4 max-w-xl text-foco-black/55">
            Peças que definem o ritmo do treino — consulte disponibilidade com nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
