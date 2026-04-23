import WhatsAppButton from '@/components/brand/WhatsAppButton';

export default function NewsletterSection() {
  return (
    <section className="border-y border-stone-line bg-paper-deep/50 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">Lista de espera</p>
        <h2 className="mt-4 font-display text-3xl text-foco-black md:text-5xl">Quer ser avisada dos lançamentos?</h2>
        <p className="mt-6 text-base leading-relaxed text-foco-black/55">
          Sem formulário de email por enquanto - chame no WhatsApp e peça para entrar na lista de novidades.
          Atendimento humano, sem fila de newsletter genérica.
        </p>
        <div className="mt-10">
          <WhatsAppButton
            message="Olá! Quero receber novidades e lançamentos da FOCO Woman."
            className="min-w-[14rem]"
            analyticsSource="newsletter_whatsapp"
          >
            Avisar-me no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}