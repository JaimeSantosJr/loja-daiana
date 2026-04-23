import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Link href={`/produto/${product.id}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative mb-4 h-64 md:h-72 overflow-hidden rounded-lg bg-stone-gray/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {product.isNew && (
              <span className="bg-rose-blush text-stone-cream px-3 py-1 text-xs font-semibold rounded-full">
                Novo
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-stone-dark text-stone-cream px-3 py-1 text-xs font-semibold rounded-full">
                Destaque
              </span>
            )}
            {discount > 0 && (
              <span className="bg-rose-light text-stone-dark px-3 py-1 text-xs font-semibold rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 p-2 bg-stone-cream rounded-full shadow-md hover:bg-rose-light transition-colors">
            <svg className="w-5 h-5 text-stone-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div className="group-hover:text-rose-blush transition-colors">
          <h3 className="font-semibold text-stone-dark text-sm md:text-base mb-1">
            {product.name}
          </h3>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating!) ? 'text-rose-blush' : 'text-stone-gray'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-stone-gray">({product.reviews})</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-stone-dark">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-stone-gray line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="flex gap-2 mt-3">
            {product.colors.slice(0, 3).map(color => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-stone-dark/30"
                style={{
                  backgroundColor: 
                    color === 'preto' ? '#111111' :
                    color === 'rosa-blush' ? '#D8A0AA' :
                    color === 'rosa-claro' ? '#E8C1C8' :
                    color === 'off-white' ? '#F7F3F2' :
                    '#D9D3D1'
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-stone-gray">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
