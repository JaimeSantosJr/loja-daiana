import { CartItem as CartItemType } from '@/lib/types';
import Link from 'next/link';

interface CartItemProps {
  item: CartItemType;
  index: number;
  onQuantityChange: (index: number, quantity: number) => void;
  onRemove: (index: number) => void;
}

const colorLabels: Record<string, string> = {
  'preto': 'Preto',
  'rosa-blush': 'Rosa Blush',
  'rosa-claro': 'Rosa Claro',
  'off-white': 'Off-White',
};

export default function CartItem({ item, index, onQuantityChange, onRemove }: CartItemProps) {
  const subtotal = item.product.price * item.quantity;

  return (
    <div className="flex gap-4 py-6 border-b border-stone-gray/30">
      {/* Product Image */}
      <Link href={`/produto/${item.product.id}`}>
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-24 h-24 object-cover rounded bg-stone-gray/10 hover:opacity-80 transition-opacity"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1">
        <Link href={`/produto/${item.product.id}`} className="hover:text-rose-blush transition-colors">
          <h3 className="font-semibold text-stone-dark mb-1">
            {item.product.name}
          </h3>
        </Link>

        <div className="text-sm text-stone-gray/70 space-y-1 mb-3">
          <p>Tamanho: {item.size}</p>
          <p>Cor: {colorLabels[item.color]}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => onQuantityChange(index, item.quantity - 1)}
            className="w-6 h-6 flex items-center justify-center border border-stone-gray rounded text-sm hover:bg-stone-gray/10"
          >
            −
          </button>
          <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(index, item.quantity + 1)}
            className="w-6 h-6 flex items-center justify-center border border-stone-gray rounded text-sm hover:bg-stone-gray/10"
          >
            +
          </button>
          <button
            onClick={() => onRemove(index)}
            className="ml-4 text-xs text-rose-blush hover:text-rose-blush/70 font-semibold"
          >
            Remover
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-xs text-stone-gray/70 mb-2">
          R$ {item.product.price.toFixed(2)}
        </p>
        <p className="font-bold text-stone-dark">
          R$ {subtotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
