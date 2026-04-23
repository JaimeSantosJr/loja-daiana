import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-stone-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-rose-blush font-semibold text-sm">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-dark mt-2 mb-4">
            O que dizem sobre nós
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TESTIMONIALS.map(testimonial => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-rose-blush text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-dark text-sm mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-light to-rose-blush rounded-full" />
                <div>
                  <p className="font-semibold text-stone-dark text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-stone-gray text-xs">Cliente verificada</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
