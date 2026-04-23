'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-rose-blush/20 to-rose-light/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-dark mb-4">
            Receba Novidades Primeiro
          </h2>
          <p className="text-stone-dark/70">
            Seja a primeira a conhecer os lançamentos, promoções e dicas exclusivas de moda fitness.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white text-stone-dark placeholder-stone-gray/60 focus:outline-none focus:ring-2 focus:ring-rose-blush"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-stone-dark text-stone-cream font-semibold rounded-lg hover:bg-stone-dark/90 transition-all whitespace-nowrap"
          >
            Inscrever
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <p className="text-center text-rose-blush font-semibold mt-4">
            ✓ Obrigado! Verifique seu email para confirmar a inscrição.
          </p>
        )}

        {/* Privacy Notice */}
        <p className="text-center text-stone-dark/60 text-xs mt-4">
          Nós respeitamos sua privacidade. Desinscreva-se a qualquer momento.
        </p>
      </div>
    </section>
  );
}
