import { BENEFITS } from '@/lib/constants';

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-dark mb-4">
            Por que escolher FOCO Woman?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {BENEFITS.map(benefit => (
            <div 
              key={benefit.id}
              className="p-8 bg-gradient-to-br from-stone-cream/50 to-rose-light/10 rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-stone-dark text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-stone-dark/70 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
