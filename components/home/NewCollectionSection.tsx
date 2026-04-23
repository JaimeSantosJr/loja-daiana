import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/lib/constants';
import Link from 'next/link';

export default function NewCollectionSection() {
  const newProducts = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-stone-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-rose-blush font-semibold text-sm">NOVIDADES</span>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-dark mt-2 mb-4">
            Nova Coleção
          </h2>
          <p className="text-stone-dark/70 max-w-2xl mx-auto">
            Conheça os lançamentos mais quentes. Peças que definem tendência e expressam poder.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/catalogo" 
            className="inline-block px-8 py-3 bg-stone-dark text-stone-cream font-semibold rounded-lg hover:bg-stone-dark/90 transition-all hover:shadow-lg"
          >
            Ver Todas as Novidades
          </Link>
        </div>
      </div>
    </section>
  );
}
