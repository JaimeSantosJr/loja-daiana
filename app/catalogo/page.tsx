'use client';

import { useState, useMemo } from 'react';
import { PRODUCTS } from '@/lib/constants';
import FilterSidebar from '@/components/catalog/FilterSidebar';
import ProductGrid from '@/components/catalog/ProductGrid';
import { Category, Size, Color } from '@/lib/types';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'todos'>('todos');
  const [selectedSize, setSelectedSize] = useState<Size | 'todos'>('todos');
  const [selectedColor, setSelectedColor] = useState<Color | 'todos'>('todos');
  const [sortBy, setSortBy] = useState<'destaque' | 'preco-asc' | 'preco-desc' | 'novo'>('destaque');

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;

    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedSize !== 'todos') {
      filtered = filtered.filter(p => p.sizes.includes(selectedSize as Size));
    }

    if (selectedColor !== 'todos') {
      filtered = filtered.filter(p => p.colors.includes(selectedColor as Color));
    }

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case 'preco-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'preco-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'novo':
        sorted.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      case 'destaque':
      default:
        sorted.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          return 0;
        });
    }

    return sorted;
  }, [selectedCategory, selectedSize, selectedColor, sortBy]);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-stone-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-dark mb-2">
            Loja
          </h1>
          <p className="text-stone-dark/70">
            Explore nossa coleção completa de roupas fitness premium
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            onCategoryChange={setSelectedCategory}
            onSizeChange={setSelectedSize}
            onColorChange={setSelectedColor}
          />

          {/* Products */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-sm text-stone-dark/70">
                {filteredProducts.length} produtos encontrados
              </div>

              <div className="flex gap-2">
                <label className="text-sm text-stone-dark/70">Ordenar:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-sm border border-stone-gray rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-rose-blush"
                >
                  <option value="destaque">Destaque</option>
                  <option value="novo">Mais Novos</option>
                  <option value="preco-asc">Menor Preço</option>
                  <option value="preco-desc">Maior Preço</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
