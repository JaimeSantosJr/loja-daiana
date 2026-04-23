'use client';

import { useState, useMemo, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';
import FilterSidebar from '@/components/catalog/FilterSidebar';
import CatalogFilterControls from '@/components/catalog/CatalogFilterControls';
import ProductGrid from '@/components/catalog/ProductGrid';
import { Category, Size, Color } from '@/lib/types';

const SORT_VALUES = ['destaque', 'preco-asc', 'preco-desc', 'novo'] as const;
const SIZE_VALUES = ['todos', 'XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
const COLOR_VALUES = ['todos', 'preto', 'rosa-blush', 'rosa-claro', 'off-white'] as const;
const CATEGORY_VALUES = ['todos', 'leggings', 'tops', 'conjuntos', 'macaquinhos', 'acessorios'] as const;

type SortBy = (typeof SORT_VALUES)[number];

function parseEnum<T extends readonly string[]>(
  value: string | null,
  allowed: T,
  fallback: T[number]
): T[number] {
  return (allowed as readonly string[]).includes(value ?? '') ? (value as T[number]) : fallback;
}

export default function CatalogPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<Category | 'todos'>('todos');
  const [selectedSize, setSelectedSize] = useState<Size | 'todos'>('todos');
  const [selectedColor, setSelectedColor] = useState<Color | 'todos'>('todos');
  const [sortBy, setSortBy] = useState<SortBy>('destaque');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const categoryFromUrl = parseEnum(
      searchParams.get('categoria') ?? searchParams.get('category'),
      CATEGORY_VALUES,
      'todos'
    ) as Category | 'todos';
    const sizeFromUrl = parseEnum(searchParams.get('tamanho') ?? searchParams.get('size'), SIZE_VALUES, 'todos') as Size | 'todos';
    const colorFromUrl = parseEnum(searchParams.get('cor') ?? searchParams.get('color'), COLOR_VALUES, 'todos') as Color | 'todos';
    const sortFromUrl = parseEnum(searchParams.get('ordenar') ?? searchParams.get('sort'), SORT_VALUES, 'destaque');

    setSelectedCategory(prev => (prev === categoryFromUrl ? prev : categoryFromUrl));
    setSelectedSize(prev => (prev === sizeFromUrl ? prev : sizeFromUrl));
    setSelectedColor(prev => (prev === colorFromUrl ? prev : colorFromUrl));
    setSortBy(prev => (prev === sortFromUrl ? prev : sortFromUrl));
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategory === 'todos') params.delete('categoria');
    else params.set('categoria', selectedCategory);

    if (selectedSize === 'todos') params.delete('tamanho');
    else params.set('tamanho', selectedSize);

    if (selectedColor === 'todos') params.delete('cor');
    else params.set('cor', selectedColor);

    if (sortBy === 'destaque') params.delete('ordenar');
    else params.set('ordenar', sortBy);

    const current = searchParams.toString();
    const next = params.toString();
    if (current !== next) {
      router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
    }
  }, [selectedCategory, selectedSize, selectedColor, sortBy, pathname, router, searchParams]);

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

  useEffect(() => {
    if (!filtersOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFiltersOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [filtersOpen]);

  const filterProps = {
    selectedCategory,
    selectedSize,
    selectedColor,
    onCategoryChange: setSelectedCategory,
    onSizeChange: setSelectedSize,
    onColorChange: setSelectedColor,
  };

  return (
    <div className="min-w-0">
      <div className="border-b border-stone-line bg-paper py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">Vitrine</p>
          <h1 className="mt-3 font-display text-3xl text-foco-black sm:text-4xl md:text-5xl">Coleção</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foco-black/55 sm:text-base">
            Peças curadas para treino. Toque em &quot;Consultar peça&quot; para falar com nossa consultora no
            WhatsApp.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="mb-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-stone-line bg-paper px-4 text-sm font-medium text-foco-black transition-colors hover:border-foco-black/20 lg:hidden"
          aria-controls="mobile-filters-title"
        >
          <SlidersHorizontal className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
          Filtros
          <span className="ml-1 rounded-full bg-foco-black/5 px-2 py-0.5 text-xs tabular-nums text-foco-black/70">
            {filteredProducts.length}
          </span>
        </button>

        <div className="flex min-w-0 flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <FilterSidebar {...filterProps} />

          <div className="min-w-0 flex-1">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-foco-black/50">
                <span className="tabular-nums">{filteredProducts.length}</span> peças
              </p>

              <div className="flex w-full min-w-0 flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                <label htmlFor="catalog-sort" className="sr-only sm:not-sr-only sm:text-sm sm:text-foco-black/50">
                  Ordenar
                </label>
                <select
                  id="catalog-sort"
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as SortBy)}
                  className="min-h-11 w-full min-w-0 rounded-sm border border-stone-line bg-paper px-3 py-2.5 text-sm text-foco-black focus:border-foco-black/25 focus:outline-none sm:min-h-10 sm:w-auto sm:min-w-[12rem]"
                >
                  <option value="destaque">Destaque</option>
                  <option value="novo">Mais novos</option>
                  <option value="preco-asc">Referência (menor)</option>
                  <option value="preco-desc">Referência (maior)</option>
                </select>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-filters-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-foco-black/50 backdrop-blur-[2px]"
            aria-label="Fechar filtros"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="relative z-10 flex max-h-[min(92dvh,640px)] w-full max-w-lg flex-col rounded-t-2xl bg-paper shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-stone-line px-4 py-4 pt-5">
              <h2 id="mobile-filters-title" className="font-display text-lg text-foco-black">
                Filtros
              </h2>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-sm border border-transparent text-foco-black transition-colors hover:bg-paper-deep"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5">
              <CatalogFilterControls {...filterProps} />
            </div>
            <div className="shrink-0 border-t border-stone-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="min-h-12 w-full rounded-sm bg-foco-black text-sm font-medium text-paper transition-colors hover:bg-foco-black/90"
              >
                Ver <span className="tabular-nums">{filteredProducts.length}</span> peças
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
