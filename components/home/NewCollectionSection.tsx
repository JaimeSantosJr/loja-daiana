import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/lib/constants';
import Link from 'next/link';
import WhatsAppButton from '@/components/brand/WhatsAppButton';

export default function NewCollectionSection() {
  const newProducts = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <section className="bg-paper-deep/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">Novidades</span>
          <h2 className="mt-3 font-display text-3xl text-foco-black md:text-5xl">Nova leva</h2>
          <p className="mx-auto mt-4 max-w-2xl text-foco-black/55">
            Lançamentos com o mesmo DNA editorial - consulte cores e grade no WhatsApp.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/catalogo"
            className="inline-flex min-h-[3rem] items-center justify-center border border-foco-black/15 px-8 text-sm font-medium text-foco-black transition-colors hover:border-rose-dust hover:bg-rose-mist/15"
          >
            Ver coleção completa
          </Link>
          <WhatsAppButton
            variant="outline"
            message="Olá! Quero saber das novidades da FOCO Woman."
            analyticsSource="new_collection"
          >
            Perguntar novidades
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}