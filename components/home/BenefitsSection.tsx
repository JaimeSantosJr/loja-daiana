import { BENEFITS } from '@/lib/constants';
import type { BenefitIconId } from '@/lib/types';
import type { LucideIcon } from 'lucide-react';
import { Activity, Gem, Ruler, Waves } from 'lucide-react';

const BENEFIT_ICONS: Record<BenefitIconId, LucideIcon> = {
  comfort: Waves,
  style: Gem,
  performance: Activity,
  fit: Ruler,
};

export default function BenefitsSection() {
  return (
    <section className="border-t border-stone-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">Marca</p>
          <h2 className="mt-3 font-display text-3xl text-foco-black md:text-5xl">Por que FOCO Woman</h2>
          <p className="mt-4 text-base leading-relaxed text-foco-black/55">
            Quatro pilares que guiam cada coleção — linguagem visual sóbria, como em vitrine de marca.
          </p>
        </div>

        <div className="grid gap-px bg-stone-line md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[benefit.iconId];
            const n = String(index + 1).padStart(2, '0');
            return (
              <article
                key={benefit.id}
                className="group relative min-w-0 bg-paper p-6 transition-colors duration-500 hover:bg-paper-deep/30 sm:p-8 md:p-10"
              >
                <span className="font-display text-3xl tabular-nums text-foco-black/[0.07] transition-colors duration-500 group-hover:text-rose-dust/35 sm:text-4xl">
                  {n}
                </span>

                <div className="mt-6 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-foco-black/[0.08] bg-foco-black/[0.02] text-rose-deep transition-all duration-500 group-hover:border-rose-dust/35 group-hover:bg-rose-mist/15 group-hover:text-foco-black">
                  <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.35} aria-hidden />
                </div>

                <h3 className="mt-6 break-words font-display text-lg tracking-tight text-foco-black sm:mt-8 sm:text-xl">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foco-black/55">{benefit.description}</p>

                <div
                  className="pointer-events-none absolute bottom-0 left-6 right-6 h-px scale-x-0 bg-gradient-to-r from-transparent via-rose-dust/50 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:left-8 sm:right-8"
                  aria-hidden
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
