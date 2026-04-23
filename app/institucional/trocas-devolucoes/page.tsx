import type { Metadata } from 'next';
import { whatsappHref } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Trocas e devoluções',
  description:
    'Política de trocas e devoluções da FOCO Woman e canal direto de suporte no WhatsApp.',
  alternates: {
    canonical: '/institucional/trocas-devolucoes',
  },
};

export default function ReturnsPage() {
  return (
    <div className="min-w-0 [&_p]:break-words [&_li]:break-words">
      <div className="bg-stone-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-dark mb-6">Trocas e Devoluções</h1>
          <p className="text-lg text-stone-dark/80">
            Sua satisfação é prioridade. Veja como funciona nossa política de atendimento.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Prazo</h2>
            <div className="bg-rose-light/20 p-6 rounded-lg border-l-4 border-rose-blush">
              <p className="text-stone-dark font-semibold mb-2">30 dias corridos</p>
              <p className="text-stone-dark/80">
                Você pode solicitar troca ou devolução em até 30 dias a partir do recebimento.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Condições</h2>
            <ul className="space-y-3 text-stone-dark/80">
              <li>• Peça sem uso e sem sinais de lavagem.</li>
              <li>• Etiquetas e embalagem originais preservadas.</li>
              <li>• Comprovante de compra disponível.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Como solicitar</h2>
            <div className="bg-white border border-stone-gray/30 rounded-lg divide-y divide-stone-gray/30">
              <div className="p-6">
                <h3 className="font-bold text-stone-dark mb-2">1) Chame no WhatsApp</h3>
                <p className="text-stone-dark/80 text-sm">Nos envie o número do pedido e o motivo da solicitação.</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-stone-dark mb-2">2) Receba orientações</h3>
                <p className="text-stone-dark/80 text-sm">Você recebe instruções de envio e confirmação de processo.</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-stone-dark mb-2">3) Análise e solução</h3>
                <p className="text-stone-dark/80 text-sm">Após análise, seguimos com troca por outro item ou estorno conforme o caso.</p>
              </div>
            </div>
          </section>

          <section className="bg-rose-light/20 p-8 rounded-lg text-center border border-rose-blush/30">
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Precisa de ajuda agora?</h2>
            <p className="text-stone-dark/80 mb-6">Nossa equipe resolve direto no atendimento humano.</p>
            <a
              href={whatsappHref('Olá! Quero solicitar troca/devolução de um pedido FOCO Woman.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-rose-blush text-stone-cream font-semibold rounded-lg hover:bg-rose-blush/90 transition-all"
            >
              Falar no WhatsApp
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
