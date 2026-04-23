import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] bg-gradient-to-r from-stone-cream to-rose-light/20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-dark mb-6">
          Vista sua melhor versão
        </h1>
        <p className="text-lg md:text-xl text-stone-dark/80 mb-8">
          Moda fitness com elegância e presença. Feito para mulheres que sabem o que querem.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/catalogo" 
            className="px-8 py-3 bg-rose-blush text-stone-cream font-semibold rounded-lg hover:bg-rose-blush/90 transition-all hover:shadow-lg"
          >
            Explorar Coleção
          </Link>
          <Link 
            href="/institucional/sobre" 
            className="px-8 py-3 border-2 border-stone-dark text-stone-dark font-semibold rounded-lg hover:bg-stone-dark hover:text-stone-cream transition-all"
          >
            Conhecer a Marca
          </Link>
        </div>
      </div>
    </section>
  );
}
