import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';
import { getCategoryFocus } from '@/lib/imageFocus';

export default function CategoriesSection() {
  const categoryImages: Record<string, string> = {
    leggings: '/images/sections/categoria-leggings.png',
    tops: '/images/sections/categoria-tops.png',
    conjuntos: '/images/sections/categoria-conjuntos.png',
    macaquinhos: '/images/sections/categoria-macaquinhos.png',
    acessorios: '/images/sections/categoria-acessorios.png',
  };

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">Por estilo</p>
          <h2 className="mt-3 font-display text-3xl text-foco-black md:text-5xl">Categorias</h2>
          <p className="mx-auto mt-4 max-w-2xl text-foco-black/55">
            Navegue por tipo de peça — o atendimento continua humano, no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-5">
          {CATEGORIES.map(category => (
            <Link
              key={category.id}
              href={`/catalogo?categoria=${category.id}`}
              className="group relative h-64 overflow-hidden rounded-sm md:h-80"
            >
              <Image
                src={categoryImages[category.id]}
                alt={`Categoria ${category.name}`}
                fill
                quality={92}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: getCategoryFocus(category.id) }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-foco-black/35 transition-colors group-hover:bg-foco-black/45">
                <h3 className="mb-2 max-w-full break-words px-3 text-balance text-center font-display text-xl text-paper md:text-2xl">
                  {category.name}
                </h3>
                <p className="text-sm text-paper/85">{category.count} peças</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}