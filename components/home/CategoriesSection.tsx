import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

export default function CategoriesSection() {
  const categoryImages: Record<string, string> = {
    leggings: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    tops: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    conjuntos: 'https://images.unsplash.com/photo-1539626032014-e83f1b51db12?w=600&q=80',
    macaquinhos: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    acessorios: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-dark mb-4">
            Explore Categorias
          </h2>
          <p className="text-stone-dark/70 max-w-2xl mx-auto">
            Encontre o que procura entre nossas principais coleções
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {CATEGORIES.map(category => (
            <Link 
              key={category.id} 
              href={`/catalogo?categoria=${category.id}`}
              className="group relative h-64 md:h-80 rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-stone-dark/30 group-hover:bg-stone-dark/40 transition-colors flex flex-col items-center justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-stone-cream mb-2 text-center">
                  {category.name}
                </h3>
                <p className="text-stone-cream/90 text-sm">
                  {category.count} produtos
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
