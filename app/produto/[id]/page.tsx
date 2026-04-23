'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { PRODUCTS } from '@/lib/constants';
import ProductCard from '@/components/product/ProductCard';
import { Size, Color } from '@/lib/types';
import WhatsAppButton from '@/components/brand/WhatsAppButton';
import { productInquiryMessage } from '@/lib/whatsapp';
import { getProductFocus } from '@/lib/imageFocus';

const colorLabels: Record<Color, string> = {
  preto: 'Preto',
  'rosa-blush': 'Rosa blush',
  'rosa-claro': 'Rosa claro',
  'off-white': 'Off-white',
};

const categoryLabel: Record<string, string> = {
  leggings: 'Leggings',
  tops: 'Tops',
  conjuntos: 'Conjuntos',
  macaquinhos: 'Macaquinhos',
  acessorios: 'Acessórios',
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find(p => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  const whatsappMessage = useMemo(() => {
    if (!product) return '';
    return productInquiryMessage(product.name, {
      size: selectedSize,
      color: selectedColor ? colorLabels[selectedColor] : null,
    });
  }, [product, selectedSize, selectedColor]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foco-black">Peça não encontrada</h1>
          <Link href="/catalogo" className="mt-6 inline-block text-sm text-rose-deep underline-offset-4 hover:underline">
            Voltar à coleção
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const colorValues: Record<Color, string> = {
    preto: '#111111',
    'rosa-blush': '#c9a4a8',
    'rosa-claro': '#e8d4d8',
    'off-white': '#faf7f4',
  };

  return (
    <div>
      <div className="border-b border-stone-line bg-paper py-3 sm:py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 text-xs uppercase tracking-wider text-foco-black/50 sm:px-6 lg:px-8">
          <Link href="/catalogo" className="shrink-0 transition-colors hover:text-rose-deep">
            Coleção
          </Link>
          <span className="shrink-0 text-foco-black/25">/</span>
          <span className="min-w-0 max-w-full break-words text-foco-black/80" title={product.name}>
            {product.name}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-paper-deep lg:aspect-auto lg:min-h-[560px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                quality={95}
                className="object-cover"
                style={{ objectPosition: getProductFocus(product.id, 'detail') }}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          <div className="flex flex-col lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-deep">
              {categoryLabel[product.category] ?? product.category}
            </p>
            <h1 className="mt-3 break-words font-display text-2xl leading-tight text-foco-black min-[400px]:text-3xl md:text-4xl lg:text-[2.75rem]">
              {product.name}
            </h1>

            {product.rating && (
              <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-foco-black/45">
                <div className="flex gap-0.5 text-rose-dust">
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i}>{i <= Math.round(product.rating!) ? '★' : '☆'}</span>
                  ))}
                </div>
                <span>
                  {product.rating} · {product.reviews} avaliações
                </span>
              </div>
            )}

            <p className="mt-8 text-base leading-relaxed text-foco-black/65">{product.description}</p>

            <p className="mt-6 border-l-2 border-rose-dust/50 pl-4 text-sm italic leading-relaxed text-foco-black/50">
              Valores e disponibilidade são confirmados diretamente com nossa consultora — sem checkout
              automático.
            </p>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-foco-black/50">Tamanho (opcional)</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(s => (s === size ? null : size))}
                    className={`min-w-[3rem] border px-4 py-2.5 text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-foco-black bg-foco-black text-paper'
                        : 'border-stone-line bg-paper text-foco-black hover:border-foco-black/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-foco-black/50">Cor (opcional)</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(c => (c === color ? null : color))}
                    className={`flex items-center gap-2 border px-3 py-2 text-sm transition-all ${
                      selectedColor === color
                        ? 'border-foco-black ring-1 ring-foco-black'
                        : 'border-stone-line hover:border-foco-black/25'
                    }`}
                  >
                    <span
                      className="h-5 w-5 rounded-full border border-foco-black/15 shadow-inner"
                      style={{ backgroundColor: colorValues[color] }}
                    />
                    {colorLabels[color]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <WhatsAppButton
                className="w-full whitespace-normal px-4 py-3.5 text-sm leading-snug sm:py-4 sm:text-base"
                message={whatsappMessage}
                analyticsSource="product_detail"
              >
                Falar no WhatsApp sobre esta peça
              </WhatsAppButton>
              <p className="text-center text-xs text-foco-black/40">
                Você será atendida no <span className="whitespace-nowrap font-medium text-foco-black/55">+55 48 99166-1204</span>
              </p>
            </div>

            <div className="mt-14 space-y-6 border-t border-stone-line pt-10 text-sm text-foco-black/55">
              <div>
                <p className="font-medium text-foco-black">Tecidos e acabamento</p>
                <p className="mt-1">Pensado para treino com movimento e transpiração.</p>
              </div>
              <div>
                <p className="font-medium text-foco-black">Made in Brazil</p>
                <p className="mt-1">Produção nacional com controle de qualidade.</p>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24 border-t border-stone-line pt-20">
            <h2 className="font-display text-center text-2xl text-foco-black md:text-3xl">Na mesma vibe</h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-sm text-foco-black/50">
              Outras peças da mesma categoria para combinar com seu treino.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}