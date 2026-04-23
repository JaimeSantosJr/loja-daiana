'use client';

import { useState } from 'react';
import { PRODUCTS } from '@/lib/constants';
import { useCart } from '@/lib/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import { Size, Color } from '@/lib/types';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find(p => p.id === params.id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-dark mb-4">Produto não encontrado</h1>
          <Link href="/catalogo" className="text-rose-blush hover:underline">
            Voltar para catálogo
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor, selecione o tamanho e a cor');
      return;
    }
    addToCart(product, quantity, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const colorValues: Record<Color, string> = {
    'preto': '#111111',
    'rosa-blush': '#D8A0AA',
    'rosa-claro': '#E8C1C8',
    'off-white': '#F7F3F2',
  };

  const colorLabels: Record<Color, string> = {
    'preto': 'Preto',
    'rosa-blush': 'Rosa Blush',
    'rosa-claro': 'Rosa Claro',
    'off-white': 'Off-White',
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-stone-cream py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-stone-dark/70">
          <Link href="/catalogo" className="hover:text-rose-blush">Catálogo</Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-stone-gray/10 rounded-lg overflow-hidden mb-4 h-96 md:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-rose-blush font-semibold text-sm mb-2">
                    {product.category.toUpperCase()}
                  </p>
                  <h1 className="text-3xl md:text-4xl font-bold text-stone-dark">
                    {product.name}
                  </h1>
                </div>
              </div>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating!) ? 'text-rose-blush' : 'text-stone-gray'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-stone-gray">({product.reviews} avaliações)</span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-stone-dark">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-stone-gray line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="text-sm font-semibold text-rose-blush">
                      -{discount}% de desconto
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-dark/80 mb-6">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block font-semibold text-stone-dark mb-3">
                Tamanho *
              </label>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-2 text-sm font-semibold rounded border transition-all ${
                      selectedSize === size
                        ? 'bg-stone-dark text-stone-cream border-stone-dark'
                        : 'bg-white text-stone-dark border-stone-gray hover:border-stone-dark'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block font-semibold text-stone-dark mb-3">
                Cor *
              </label>
              <div className="flex gap-4">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 p-2 rounded transition-all ${
                      selectedColor === color
                        ? 'ring-2 ring-stone-dark'
                        : 'hover:opacity-80'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border-2 border-stone-dark/30"
                      style={{ backgroundColor: colorValues[color] }}
                    />
                    <span className="text-sm">{colorLabels[color]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block font-semibold text-stone-dark mb-3">
                Quantidade
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-stone-gray rounded hover:bg-stone-gray/10"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-stone-gray rounded hover:bg-stone-gray/10"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-4 font-semibold rounded-lg transition-all ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-rose-blush text-stone-cream hover:bg-rose-blush/90 hover:shadow-lg'
                }`}
              >
                {added ? '✓ Adicionado ao carrinho' : 'Adicionar ao Carrinho'}
              </button>
              <button className="px-4 py-3 border-2 border-stone-dark text-stone-dark font-semibold rounded-lg hover:bg-stone-dark hover:text-stone-cream transition-all">
                ♡
              </button>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-6 border-t border-stone-gray/30">
              <div className="flex gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="font-semibold text-stone-dark">Frete Grátis</p>
                  <p className="text-sm text-stone-gray">Acima de R$ 299</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">↩️</span>
                <div>
                  <p className="font-semibold text-stone-dark">Troca Grátis</p>
                  <p className="text-sm text-stone-gray">30 dias para devolver</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-dark">
                Produtos Relacionados
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
