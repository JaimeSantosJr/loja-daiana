'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/context/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const cartCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 bg-stone-cream border-b border-stone-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-stone-dark">FOCO</span>
              <span className="text-rose-blush ml-2">Woman</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/catalogo" 
              className="text-stone-dark hover:text-rose-blush transition-colors"
            >
              Loja
            </Link>
            <Link 
              href="/institucional/sobre" 
              className="text-stone-dark hover:text-rose-blush transition-colors"
            >
              Sobre
            </Link>
            <Link 
              href="/institucional/contato" 
              className="text-stone-dark hover:text-rose-blush transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <Link 
              href="/carrinho" 
              className="relative p-2 hover:text-rose-blush transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-rose-blush text-stone-cream text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link 
              href="/catalogo" 
              className="block px-2 py-2 text-stone-dark hover:text-rose-blush hover:bg-stone-gray/20 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Loja
            </Link>
            <Link 
              href="/institucional/sobre" 
              className="block px-2 py-2 text-stone-dark hover:text-rose-blush hover:bg-stone-gray/20 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="/institucional/contato" 
              className="block px-2 py-2 text-stone-dark hover:text-rose-blush hover:bg-stone-gray/20 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
