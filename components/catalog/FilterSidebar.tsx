'use client';

import { CATEGORIES } from '@/lib/constants';
import { Category, Size, Color } from '@/lib/types';

interface FilterSidebarProps {
  selectedCategory: Category | 'todos';
  selectedSize: Size | 'todos';
  selectedColor: Color | 'todos';
  onCategoryChange: (category: Category | 'todos') => void;
  onSizeChange: (size: Size | 'todos') => void;
  onColorChange: (color: Color | 'todos') => void;
}

const SIZES: (Size | 'todos')[] = ['todos', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS: (Color | 'todos')[] = ['todos', 'preto', 'rosa-blush', 'rosa-claro', 'off-white'];

const colorLabels: Record<Color | 'todos', string> = {
  'todos': 'Todas as Cores',
  'preto': 'Preto',
  'rosa-blush': 'Rosa Blush',
  'rosa-claro': 'Rosa Claro',
  'off-white': 'Off-White',
};

const colorValues: Record<Color | 'todos', string> = {
  'todos': '#D9D3D1',
  'preto': '#111111',
  'rosa-blush': '#D8A0AA',
  'rosa-claro': '#E8C1C8',
  'off-white': '#F7F3F2',
};

export default function FilterSidebar({
  selectedCategory,
  selectedSize,
  selectedColor,
  onCategoryChange,
  onSizeChange,
  onColorChange,
}: FilterSidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="bg-white p-6 rounded-lg space-y-8">
        {/* Category Filter */}
        <div>
          <h3 className="font-semibold text-stone-dark mb-4">Categoria</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer hover:text-rose-blush transition-colors">
              <input
                type="radio"
                checked={selectedCategory === 'todos'}
                onChange={() => onCategoryChange('todos')}
                className="w-4 h-4"
              />
              <span className="text-sm">Todos</span>
            </label>
            {CATEGORIES.map(category => (
              <label key={category.id} className="flex items-center gap-2 cursor-pointer hover:text-rose-blush transition-colors">
                <input
                  type="radio"
                  checked={selectedCategory === category.id}
                  onChange={() => onCategoryChange(category.id as Category)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{category.name} ({category.count})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div>
          <h3 className="font-semibold text-stone-dark mb-4">Tamanho</h3>
          <div className="grid grid-cols-3 gap-2">
            {SIZES.map(size => (
              <button
                key={size}
                onClick={() => onSizeChange(size as Size | 'todos')}
                className={`py-2 px-2 text-xs font-semibold rounded border transition-all ${
                  selectedSize === size
                    ? 'bg-rose-blush text-stone-cream border-rose-blush'
                    : 'bg-white text-stone-dark border-stone-gray hover:border-rose-blush'
                }`}
              >
                {size === 'todos' ? 'Todos' : size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div>
          <h3 className="font-semibold text-stone-dark mb-4">Cor</h3>
          <div className="space-y-2">
            {COLORS.map(color => (
              <label key={color} className="flex items-center gap-2 cursor-pointer hover:text-rose-blush transition-colors">
                <input
                  type="radio"
                  checked={selectedColor === color}
                  onChange={() => onColorChange(color as Color | 'todos')}
                  className="w-4 h-4"
                />
                <div
                  className="w-4 h-4 rounded-full border border-stone-dark/30"
                  style={{ backgroundColor: colorValues[color] }}
                />
                <span className="text-sm">{colorLabels[color]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Reset Filters */}
        <button
          onClick={() => {
            onCategoryChange('todos');
            onSizeChange('todos');
            onColorChange('todos');
          }}
          className="w-full py-2 text-rose-blush font-semibold text-sm hover:bg-rose-light/20 rounded transition-colors"
        >
          Limpar Filtros
        </button>
      </div>
    </aside>
  );
}
