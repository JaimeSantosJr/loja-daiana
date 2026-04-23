'use client';

import { useState } from 'react';
import { useCart } from '@/lib/context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    paymentMethod: 'credit-card',
  });

  const total = getTotal();
  const shipping = total > 299 ? 0 : 15;
  const finalTotal = total + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  if (cart.items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-cream">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-dark mb-4">Carrinho Vazio</h1>
          <p className="text-stone-dark/70 mb-8">Por favor, adicione itens antes de fazer o checkout.</p>
          <Link
            href="/catalogo"
            className="inline-block px-8 py-3 bg-rose-blush text-stone-cream font-semibold rounded-lg hover:bg-rose-blush/90 transition-all"
          >
            Voltar à Loja
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-cream">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">✓</div>
          <h1 className="text-3xl font-bold text-stone-dark mb-4">Pedido Realizado!</h1>
          <p className="text-stone-dark/70 mb-8">
            Obrigado por sua compra! Você receberá um email de confirmação em instantes.
          </p>
          <p className="text-sm text-stone-gray mb-8">
            Redirecionando para a página inicial em 3 segundos...
          </p>
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
            Checkout
          </h1>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold text-stone-dark mb-6">Informações Pessoais</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="md:col-span-2 px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold text-stone-dark mb-6">Endereço de Entrega</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cep"
                      placeholder="CEP"
                      value={formData.cep}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Endereço"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="number"
                      placeholder="Número"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                    />
                    <input
                      type="text"
                      name="complement"
                      placeholder="Complemento (opcional)"
                      value={formData.complement}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="Cidade"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                    />
                  </div>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-gray rounded focus:outline-none focus:ring-2 focus:ring-rose-blush"
                  >
                    <option value="">Selecione o estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="BA">Bahia</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="CE">Ceará</option>
                    <option value="PA">Pará</option>
                    <option value="GO">Goiás</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold text-stone-dark mb-6">Forma de Pagamento</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-stone-gray rounded cursor-pointer hover:bg-stone-cream/50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 font-semibold text-stone-dark">Cartão de Crédito</span>
                  </label>
                  <label className="flex items-center p-3 border border-stone-gray rounded cursor-pointer hover:bg-stone-cream/50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="debit"
                      checked={formData.paymentMethod === 'debit'}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 font-semibold text-stone-dark">Débito</span>
                  </label>
                  <label className="flex items-center p-3 border border-stone-gray rounded cursor-pointer hover:bg-stone-cream/50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      checked={formData.paymentMethod === 'pix'}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 font-semibold text-stone-dark">PIX</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-rose-blush text-stone-cream font-semibold rounded-lg hover:bg-rose-blush/90 transition-all hover:shadow-lg"
              >
                Confirmar Pedido
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-stone-dark mb-6">Resumo do Pedido</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 border-b border-stone-gray/30 pb-6">
                {cart.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-stone-dark/70">
                      {item.product.name} x{item.quantity}
                    </span>
                    <span className="font-semibold text-stone-dark">
                      R$ {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-dark/70">Subtotal</span>
                  <span className="font-semibold">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-dark/70">
                    Frete {shipping === 0 ? '(Grátis)' : ''}
                  </span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/* Final Total */}
              <div className="border-t border-stone-gray/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-stone-dark">Total</span>
                  <span className="text-2xl font-bold text-rose-blush">
                    R$ {finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
