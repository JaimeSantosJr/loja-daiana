export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-rose-blush/20 to-rose-light/30 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-dark mb-6">
            Sobre FOCO Woman
          </h1>
          <p className="text-lg text-stone-dark/80">
            Feito para mulheres que sabem o que querem. Moda fitness com elegância e presença.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-stone-dark mb-4">Nossa História</h2>
            <p className="text-stone-dark/80 leading-relaxed mb-4">
              FOCO Woman nasceu da ideia simples, mas poderosa: as mulheres merecem roupas de treino que as façam se sentir confiantes, elegantes e empoderadas.
            </p>
            <p className="text-stone-dark/80 leading-relaxed">
              Começamos com uma missão clara: criar peças que não fossem apenas funcionais, mas que também expressassem a força e a beleza das mulheres que as usam. Cada detalhe, desde o tecido até o corte, foi pensado para você.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-stone-dark mb-4">Nossa Missão</h2>
            <p className="text-stone-dark/80 leading-relaxed">
              Oferecer moda fitness premium que combine funcionalidade com estilo elegante. Acreditamos que treinar com confiança começa com vestir-se bem. Nossa missão é ser a marca que você escolhe para se sentir como a melhor versão de si mesma.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-stone-dark mb-4">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="font-bold text-stone-dark mb-2">Qualidade</h3>
                <p className="text-stone-dark/70">
                  Cada peça passa por rigorosos testes de qualidade. Nossas mulheres merecem o melhor.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-dark mb-2">Sustentabilidade</h3>
                <p className="text-stone-dark/70">
                  Nos preocupamos com o planeta. Usamos processos e materiais responsáveis.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-dark mb-2">Inclusão</h3>
                <p className="text-stone-dark/70">
                  Moda para todos os corpos. Oferecemos tamanhos XS a XXL em todas as coleções.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-dark mb-2">Transparência</h3>
                <p className="text-stone-dark/70">
                  Sabemos de onde vem cada peça. Ética em tudo que fazemos.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-stone-gray/30">
            <h2 className="text-3xl font-bold text-stone-dark mb-4">Por que escolher FOCO Woman?</h2>
            <ul className="space-y-3 text-stone-dark/80">
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Tecidos premium que movem com você</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Designs elegantes que conectam treino e vida</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Modelagem que valoriza seu corpo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Trocas e devoluções grátis em 30 dias</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Atendimento dedicado ao seu estilo de vida</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
