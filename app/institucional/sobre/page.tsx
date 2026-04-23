import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre a marca',
  description:
    'Conheça a história, os valores e o posicionamento da FOCO Woman na moda fitness.',
  alternates: {
    canonical: '/institucional/sobre',
  },
};

export default function AboutPage() {
  return (
    <div className="min-w-0 [&_p]:break-words [&_li]:break-words">
      <div className="bg-gradient-to-r from-rose-blush/20 to-rose-light/30 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-dark mb-6">Sobre FOCO Woman</h1>
          <p className="text-lg text-stone-dark/80">
            Feito para mulheres que sabem o que querem. Moda fitness com elegância e presença.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-stone-dark mb-4">Nossa História</h2>
            <p className="text-stone-dark/80 leading-relaxed mb-4">
              FOCO Woman nasceu da ideia simples, mas poderosa: as mulheres merecem roupas de treino que as
              façam se sentir confiantes, elegantes e empoderadas.
            </p>
            <p className="text-stone-dark/80 leading-relaxed">
              Começamos com uma missão clara: criar peças que não fossem apenas funcionais, mas que também
              expressassem força e autenticidade. Cada detalhe, do tecido ao corte, é pensado para movimento.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-stone-dark mb-4">Nossa Missão</h2>
            <p className="text-stone-dark/80 leading-relaxed">
              Entregar moda fitness premium com visual editorial e desempenho real para academia. Acreditamos
              que confiança começa na peça certa e no atendimento humano.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-stone-dark mb-4">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="font-bold text-stone-dark mb-2">Qualidade</h3>
                <p className="text-stone-dark/70">Acabamento e matéria-prima com padrão elevado.</p>
              </div>
              <div>
                <h3 className="font-bold text-stone-dark mb-2">Estética</h3>
                <p className="text-stone-dark/70">Silhueta limpa e elegante para treino e rotina.</p>
              </div>
              <div>
                <h3 className="font-bold text-stone-dark mb-2">Inclusão</h3>
                <p className="text-stone-dark/70">Modelagem pensada para corpos reais e diferentes biotipos.</p>
              </div>
              <div>
                <h3 className="font-bold text-stone-dark mb-2">Transparência</h3>
                <p className="text-stone-dark/70">Atendimento direto e orientação clara em cada etapa.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
