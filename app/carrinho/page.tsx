'use client';

import { useState } from 'react';
import { useCart } from '@/lib/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const total = getTotal();
  const subtotal = total + discount;
  const shipping = subtotal > 299 ? 0 : 15;
  const finalTotal = subtotal + shipping - discount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.toUpperCase() === 'PRIMEIRA10') {
      setDiscount(total * 0.1);
      setCoupon('');
    } else {
      alert('Cupom inválido');
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-cream">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-stone-dark mb-4">Carrinho Vazio</h1>
          <p className="text-stone-dark/70 mb-8">
            Nenhum item no seu carrinho. Comece a explorar nossa coleção!
          </p>
          <Link
            href="/catalogo"
            className="inline-block px-8 py-3 bg-rose-blush text-stone-cream font-semibold rounded-lg hover:bg-rose-blush/90 transition-all"
          >
            Explorar Loja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-stone-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-dark">
            Carrinho de Compras
          </h1>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg p-6">
              {cart.items.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  index={index}
                  onQuantityChange={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                href="/catalogo"
                className="text-rose-blush hover:text-rose-blush/70 font-semibold"
              >
                ← Continuar Comprando
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-stone-dark mb-6">
                Resumo do Pedido
              </h2>

              {/* Coupon */}
              <div className="mb-6">
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Código de desconto"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1 px-3 py-2 text-sm border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-stone-dark text-stone-cream text-sm font-semibold rounded hover:bg-stone-dark/90 transition-all"
                  >
                    Aplicar
                  </button>
                </form>
                <p className="text-xs text-stone-gray/70 mt-2">Dica: Use &quot;PRIMEIRA10&quot; para 10% de desconto</p>
              </div>

              {/* Summary Details */}
              <div className="space-y-3 border-t border-stone-gray/30 pt-6 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-dark/70">Subtotal</span>
                  <span className="font-semibold text-stone-dark">
                    R$ {subtotal.toFixed(2)}
                  </span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Desconto</span>
                    <span className="font-semibold">-R$ {discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-stone-dark/70">
                    Frete {shipping === 0 ? '(Grátis)' : ''}
                  </span>
                  <span className="font-semibold text-stone-dark">
                    {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-stone-gray/30 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-stone-dark">Total</span>
                  <span className="text-2xl font-bold text-rose-blush">
                    R$ {finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="block w-full py-3 bg-rose-blush text-stone-cream font-semibold text-center rounded-lg hover:bg-rose-blush/90 transition-all hover:shadow-lg"
              >
                Prosseguir para Checkout
              </Link>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-stone-gray/30 space-y-2 text-xs text-stone-gray/70">
                <p>✓ Entrega rápida e segura</p>
                <p>✓ Trocas e devoluções grátis em 30 dias</p>
                <p>✓ Frete grátis acima de R$ 299</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
