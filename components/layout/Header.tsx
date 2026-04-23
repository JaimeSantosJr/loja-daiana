'use client';

import Link from 'next/link';
import { useState } from 'react';
import BrandLogo from '@/components/brand/BrandLogo';
import WhatsAppButton from '@/components/brand/WhatsAppButton';
import { whatsappHref } from '@/lib/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-2 sm:gap-4">
          <div className="min-w-0 shrink-0">
            <BrandLogo size="sm" variant="dark" href="/" />
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            <Link
              href="/catalogo"
              className="text-sm font-medium tracking-wide text-foco-black/80 transition-colors hover:text-rose-deep"
            >
              Coleção
            </Link>
            <Link
              href="/institucional/sobre"
              className="text-sm font-medium tracking-wide text-foco-black/80 transition-colors hover:text-rose-deep"
            >
              Sobre
            </Link>
            <Link
              href="/institucional/contato"
              className="text-sm font-medium tracking-wide text-foco-black/80 transition-colors hover:text-rose-deep"
            >
              Contato
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <WhatsAppButton
              variant="primary"
              className="hidden text-sm md:inline-flex"
              message="Olá! Gostaria de falar com uma consultora da FOCO Woman sobre a coleção."
              analyticsSource="header_desktop"
            >
              Consultora
            </WhatsAppButton>
            <a
              href={whatsappHref('Olá! Vim pelo site da FOCO Woman.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-stone-line bg-paper text-emerald-700 transition-colors hover:border-rose-dust/40 md:hidden"
              aria-label="WhatsApp"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-sm p-2 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-stone-line pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              <Link
                href="/catalogo"
                className="rounded-sm px-3 py-3 text-foco-black/90 transition-colors hover:bg-paper-deep"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coleção
              </Link>
              <Link
                href="/institucional/sobre"
                className="rounded-sm px-3 py-3 text-foco-black/90 transition-colors hover:bg-paper-deep"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/institucional/contato"
                className="rounded-sm px-3 py-3 text-foco-black/90 transition-colors hover:bg-paper-deep"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <WhatsAppButton
                variant="primary"
                className="mt-2 w-full"
                message="Olá! Gostaria de falar com uma consultora da FOCO Woman."
                onNavigate={() => setMobileMenuOpen(false)}
                analyticsSource="header_mobile"
              >
                Falar no WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}