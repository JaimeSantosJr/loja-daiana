'use client';

import { CATEGORIES } from '@/lib/constants';
import { Category, Size, Color } from '@/lib/types';

export interface CatalogFilterControlsProps {
  selectedCategory: Category | 'todos';
  selectedSize: Size | 'todos';
  selectedColor: Color | 'todos';
  onCategoryChange: (category: Category | 'todos') => void;
  onSizeChange: (size: Size | 'todos') => void;
  onColorChange: (color: Color | 'todos') => void;
  className?: string;
}

const SIZES: (Size | 'todos')[] = ['todos', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS: (Color | 'todos')[] = ['todos', 'preto', 'rosa-blush', 'rosa-claro', 'off-white'];

const colorLabels: Record<Color | 'todos', string> = {
  todos: 'Todas as cores',
  preto: 'Preto',
  'rosa-blush': 'Rosa blush',
  'rosa-claro': 'Rosa claro',
  'off-white': 'Off-white',
};

const colorValues: Record<Color | 'todos', string> = {
  todos: '#c4bcb8',
  preto: '#111111',
  'rosa-blush': '#c9a4a8',
  'rosa-claro': '#e8d4d8',
  'off-white': '#faf7f4',
};

export default function CatalogFilterControls({
  selectedCategory,
  selectedSize,
  selectedColor,
  onCategoryChange,
  onSizeChange,
  onColorChange,
  className = '',
}: CatalogFilterControlsProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foco-black/50">Categoria</h3>
        <div className="space-y-1">
          <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-sm px-2 py-2 text-sm text-foco-black transition-colors hover:bg-paper-deep">
            <input
              type="radio"
              checked={selectedCategory === 'todos'}
              onChange={() => onCategoryChange('todos')}
              className="h-4 w-4 shrink-0 accent-foco-black"
            />
            <span>Todas</span>
          </label>
          {CATEGORIES.map(category => (
            <label
              key={category.id}
              className="flex min-h-11 cursor-pointer items-center gap-3 rounded-sm px-2 py-2 text-sm text-foco-black transition-colors hover:bg-paper-deep"
            >
              <input
                type="radio"
                checked={selectedCategory === category.id}
                onChange={() => onCategoryChange(category.id as Category)}
                className="h-4 w-4 shrink-0 accent-foco-black"
              />
              <span>
                {category.name}{' '}
                <span className="text-foco-black/40">({category.count})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foco-black/50">Tamanho</h3>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-3">
          {SIZES.map(size => (
            <button
              key={size}
              type="button"
              onClick={() => onSizeChange(size as Size | 'todos')}
              className={`min-h-11 rounded-sm border px-1 text-xs font-semibold transition-all ${
                selectedSize === size
                  ? 'border-foco-black bg-foco-black text-paper'
                  : 'border-stone-line bg-paper text-foco-black hover:border-foco-black/25'
              }`}
            >
              {size === 'todos' ? 'Todos' : size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foco-black/50">Cor</h3>
        <div className="space-y-1">
          {COLORS.map(color => (
            <label
              key={color}
              className="flex min-h-11 cursor-pointer items-center gap-3 rounded-sm px-2 py-2 text-sm text-foco-black transition-colors hover:bg-paper-deep"
            >
              <input
                type="radio"
                checked={selectedColor === color}
                onChange={() => onColorChange(color as Color | 'todos')}
                className="h-4 w-4 shrink-0 accent-foco-black"
              />
              <span
                className="h-5 w-5 shrink-0 rounded-full border border-foco-black/15 shadow-inner"
                style={{ backgroundColor: colorValues[color] }}
              />
              <span>{colorLabels[color]}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          onCategoryChange('todos');
          onSizeChange('todos');
          onColorChange('todos');
        }}
        className="min-h-11 w-full rounded-sm border border-stone-line py-2 text-sm font-medium text-rose-deep transition-colors hover:bg-rose-mist/20"
      >
        Limpar filtros
      </button>
    </div>
  );
}
