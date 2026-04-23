import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="bg-paper-deep/25 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">Vozes</span>
          <h2 className="mt-3 font-display text-3xl text-foco-black md:text-5xl">Quem treina com a gente</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map(testimonial => (
            <figure
              key={testimonial.id}
              className="flex h-full min-w-0 flex-col border border-stone-line bg-paper p-5 transition-shadow duration-500 hover:shadow-sm sm:p-6"
            >
              <div className="mb-4 flex gap-0.5 text-rose-dust">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-base">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="flex-1 text-sm italic leading-relaxed text-foco-black/70">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-stone-line pt-4 text-xs font-semibold uppercase tracking-wider text-foco-black/45">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
