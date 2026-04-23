import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '@/components/brand/WhatsAppButton';

export default function HeroSection() {
  return (
    <section className="grain relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl lg:min-h-[min(100dvh,920px)] lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-center px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-16 lg:col-span-5 lg:min-h-[min(100dvh,920px)] lg:px-8 lg:py-24">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-rose-deep/90 sm:mb-6 sm:text-xs sm:tracking-[0.35em]">
            Moda fitness · Academia
          </p>
          <h1 className="font-display text-[1.85rem] font-semibold leading-[1.08] text-foco-black min-[400px]:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            Foco no corpo.
            <span className="mt-2 block font-normal text-foco-black/55">Presença no espelho.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foco-black/60 sm:mt-8 sm:text-base">
            Peças com linguagem minimalista e performance no tecido. Vitrine curada — fale com nossa
            consultora para valores, cores e tamanhos disponíveis.
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:flex-row sm:items-stretch sm:gap-4">
            <WhatsAppButton
              message="Olá! Quero conhecer a coleção FOCO Woman e falar com uma consultora."
              className="w-full shrink-0 sm:w-auto sm:min-w-[12.5rem]"
              analyticsSource="hero"
            >
              Falar com consultora
            </WhatsAppButton>
            <Link
              href="/catalogo"
              className="inline-flex min-h-11 w-full items-center justify-center border border-foco-black/15 bg-transparent px-6 text-sm font-medium text-foco-black transition-colors hover:border-rose-dust hover:bg-rose-mist/20 sm:w-auto sm:min-w-0"
            >
              Ver coleção
            </Link>
          </div>
        </div>

        <div className="relative min-h-0 lg:col-span-7 lg:min-h-[min(100dvh,920px)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-paper via-transparent to-rose-mist/25 lg:bg-gradient-to-l" />
          <div className="relative h-[min(38dvh,380px)] min-h-[220px] sm:h-[min(42dvh,440px)] sm:min-h-[260px] lg:absolute lg:inset-0 lg:h-full lg:min-h-0">
            <Image
              src="/images/sections/hero.png"
              alt="Modelos FOCO Woman em estúdio editorial"
              fill
              priority
              quality={95}
              className="object-cover object-[center_20%] lg:object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foco-black/25 via-transparent to-transparent lg:bg-gradient-to-l lg:from-paper/90 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}