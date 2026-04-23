export default function ReturnsPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-stone-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-dark mb-6">
            Trocas e Devoluções
          </h1>
          <p className="text-lg text-stone-dark/80">
            Sua satisfação é nossa prioridade. Conheça nossa política simples e clara.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12">
          {/* Prazo */}
          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Prazo para Trocas e Devoluções</h2>
            <div className="bg-rose-light/20 p-6 rounded-lg border-l-4 border-rose-blush">
              <p className="text-stone-dark font-semibold mb-2">30 dias</p>
              <p className="text-stone-dark/80">
                Você tem 30 dias contados a partir da data de entrega para solicitar uma troca ou devolução.
              </p>
            </div>
          </section>

          {/* Condições */}
          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Condições</h2>
            <p className="text-stone-dark/80 mb-6">
              Para que sua troca ou devolução seja aceita, o item deve estar:
            </p>
            <ul className="space-y-3 text-stone-dark/80">
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Sem uso (não foi usado, lavado ou descosturado)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Com todas as etiquetas originais intactas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Na embalagem original</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-blush font-bold flex-shrink-0">✓</span>
                <span>Acompanhado do recibo ou comprovante de compra</span>
              </li>
            </ul>
          </section>

          {/* Como Solicitar */}
          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Como Solicitar uma Troca ou Devolução</h2>
            <div className="bg-white border border-stone-gray/30 rounded-lg divide-y divide-stone-gray/30">
              <div className="p-6">
                <h3 className="font-bold text-stone-dark mb-2">1. Entre em contato</h3>
                <p className="text-stone-dark/80 text-sm">
                  Envie um email para contato@focowoman.com.br ou use nosso formulário de contato explicando o motivo da devolução.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-stone-dark mb-2">2. Receba instruções</h3>
                <p className="text-stone-dark/80 text-sm">
                  Você receberá um email com instruções de como retornar o item e um número de rastreamento.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-stone-dark mb-2">3. Prepare o pacote</h3>
                <p className="text-stone-dark/80 text-sm">
                  Coloque o item em sua embalagem original junto com o recibo. Siga as instruções de endereço para devolução.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-stone-dark mb-2">4. Acompanhe</h3>
                <p className="text-stone-dark/80 text-sm">
                  Use o número de rastreamento para acompanhar o envio. Assim que recebermos, processaremos seu reembolso ou troca.
                </p>
              </div>
            </div>
          </section>

          {/* Frete */}
          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Frete</h2>
            <p className="text-stone-dark/80">
              Se a devolução for por erro nosso ou defeito do produto, <strong>nós pagamos o frete</strong>. Se for por mudança de ideia ou tamanho incorreto, você pode optar por:
            </p>
            <ul className="mt-4 space-y-2 text-stone-dark/80">
              <li>• Pagar o frete para envio de volta (R$ 15)</li>
              <li>• Solicitar uma troca por outro tamanho ou cor (nos cobramos apenas o frete)</li>
            </ul>
          </section>

          {/* Reembolso */}
          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Reembolso</h2>
            <p className="text-stone-dark/80 mb-4">
              Após recebermos e inspecionarmos seu item, processaremos o reembolso em <strong>até 10 dias úteis</strong> para sua conta original.
            </p>
            <div className="bg-stone-cream p-4 rounded-lg text-sm text-stone-dark/80">
              <p><strong>Nota:</strong> Dependendo do seu banco, o crédito pode levar alguns dias para aparecer em sua conta.</p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-stone-dark mb-6">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <div className="border border-stone-gray/30 rounded-lg p-4">
                <h3 className="font-bold text-stone-dark mb-2">Posso trocar por um tamanho diferente?</h3>
                <p className="text-stone-dark/80 text-sm">
                  Sim! Se o item estiver sem uso com etiquetas intactas, você pode trocar por outro tamanho ou cor gratuitamente (você paga apenas o frete de devolução se preferir trocar por um item mais caro).
                </p>
              </div>
              <div className="border border-stone-gray/30 rounded-lg p-4">
                <h3 className="font-bold text-stone-dark mb-2">E se o item chegar com defeito?</h3>
                <p className="text-stone-dark/80 text-sm">
                  Nós resolvemos! Entre em contato imediatamente com fotos do defeito. Faremos a troca ou reembolso sem cobrar frete.
                </p>
              </div>
              <div className="border border-stone-gray/30 rounded-lg p-4">
                <h3 className="font-bold text-stone-dark mb-2">Qual é a forma mais rápida de devolver?</h3>
                <p className="text-stone-dark/80 text-sm">
                  Enviamos um código de postagem. Você pode levar para qualquer agência e rastrear tudo online. Super simples!
                </p>
              </div>
              <div className="border border-stone-gray/30 rounded-lg p-4">
                <h3 className="font-bold text-stone-dark mb-2">Posso devolver após 30 dias?</h3>
                <p className="text-stone-dark/80 text-sm">
                  Casos especiais são avaliados. Entre em contato conosco em contato@focowoman.com.br e veremos o que podemos fazer.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-rose-light/20 p-8 rounded-lg text-center border border-rose-blush/30">
            <h2 className="text-2xl font-bold text-stone-dark mb-4">Ainda com dúvidas?</h2>
            <p className="text-stone-dark/80 mb-6">
              Nossa equipe está aqui para ajudar. Entre em contato conosco!
            </p>
            <a 
              href="mailto:contato@focowoman.com.br"
              className="inline-block px-6 py-3 bg-rose-blush text-stone-cream font-semibold rounded-lg hover:bg-rose-blush/90 transition-all"
            >
              Enviar Email
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
