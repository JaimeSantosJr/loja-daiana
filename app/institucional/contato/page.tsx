'use client';

import { useState } from 'react';
import WhatsAppButton from '@/components/brand/WhatsAppButton';
import { WHATSAPP_DISPLAY, whatsappHref } from '@/lib/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-w-0 [&_input]:max-w-full [&_textarea]:max-w-full">
      <div className="grain border-b border-stone-line bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">Contato</p>
          <h1 className="mt-4 font-display text-4xl text-foco-black md:text-5xl">Fale com a FOCO Woman</h1>
          <p className="mt-6 text-lg leading-relaxed text-foco-black/60">
            O atendimento principal é pelo WhatsApp - consultoria para tamanhos, cores e disponibilidade.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <WhatsAppButton
              className="min-w-[16rem]"
              message="Olá! Gostaria de falar com a equipe FOCO Woman."
              analyticsSource="contact_hero"
            >
              Chamar no WhatsApp
            </WhatsAppButton>
            <a
              href={whatsappHref()}
              className="text-sm text-foco-black/50 underline-offset-4 hover:text-foco-black hover:underline"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl text-foco-black">Canais</h2>
              <p className="mt-2 text-sm text-foco-black/55">
                Priorizamos resposta rápida no WhatsApp. O formulário ao lado é demonstrativo até integrar
                envio por email.
              </p>
            </div>

            <div className="border border-stone-line bg-paper-deep/40 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foco-black/50">WhatsApp</h3>
              <a
                href={whatsappHref('Olá! Vim pela página de contato.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-display text-2xl text-rose-deep transition-colors hover:text-foco-black"
              >
                {WHATSAPP_DISPLAY}
              </a>
              <p className="mt-3 text-sm text-foco-black/50">Segunda a sexta, horário comercial (SC).</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foco-black/50">Instagram</h3>
              <a
                href="https://instagram.com/focowoman"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-lg text-foco-black transition-colors hover:text-rose-deep"
              >
                @focowoman <span className="text-xs">↗</span>
              </a>
            </div>

            <div className="border border-stone-line p-6">
              <h3 className="font-medium text-foco-black">Horário</h3>
              <ul className="mt-3 space-y-1 text-sm text-foco-black/65">
                <li>
                  <strong className="text-foco-black">Segunda a sexta:</strong> 9h às 18h
                </li>
                <li>
                  <strong className="text-foco-black">Sábado:</strong> 10h às 14h
                </li>
                <li>
                  <strong className="text-foco-black">Domingo:</strong> Fechado
                </li>
              </ul>
            </div>
          </div>

          <div className="min-w-0">
            <form onSubmit={handleSubmit} className="border border-stone-line bg-paper p-5 sm:p-8">
              <p className="mb-6 text-xs text-foco-black/45">
                Formulário local (sem backend). Para pedidos reais, use o WhatsApp.
              </p>
              <div className="mb-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foco-black/50">
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-stone-line bg-paper px-4 py-3 text-foco-black placeholder:text-foco-black/30 focus:border-foco-black/30 focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foco-black/50">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-stone-line bg-paper px-4 py-3 text-foco-black placeholder:text-foco-black/30 focus:border-foco-black/30 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foco-black/50">
                  Assunto *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-stone-line bg-paper px-4 py-3 text-foco-black focus:border-foco-black/30 focus:outline-none"
                >
                  <option value="">Selecione</option>
                  <option value="produto">Informações de produto</option>
                  <option value="troca">Troca ou devolução</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foco-black/50">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full resize-none border border-stone-line bg-paper px-4 py-3 text-foco-black placeholder:text-foco-black/30 focus:border-foco-black/30 focus:outline-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-foco-black bg-foco-black py-3 text-sm font-medium text-paper transition-colors hover:bg-foco-black/90"
              >
                Registrar intenção (demo)
              </button>

              {submitted && (
                <p className="mt-4 text-center text-sm font-medium text-rose-deep">
                  Registrado apenas na sessão - fale no WhatsApp para atendimento real.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-stone-line pt-16">
          <h2 className="text-center font-display text-2xl text-foco-black md:text-3xl">Perguntas frequentes</h2>
          <div className="mt-12 grid min-w-0 gap-6 sm:gap-8 md:grid-cols-2">
            <div className="min-w-0 border border-stone-line p-5 sm:p-6">
              <h3 className="font-medium text-foco-black">Como compro uma peça?</h3>
              <p className="mt-2 text-sm leading-relaxed text-foco-black/60">
                Navegue na coleção, escolha a peça e use o botão de WhatsApp. Nossa consultora confirma
                valores, grade e formas de pagamento.
              </p>
            </div>
            <div className="min-w-0 border border-stone-line p-5 sm:p-6">
              <h3 className="font-medium text-foco-black">Vocês enviam para todo o Brasil?</h3>
              <p className="mt-2 text-sm leading-relaxed text-foco-black/60">
                Sim, os detalhes de frete e prazo são combinados diretamente no atendimento, conforme sua
                região.
              </p>
            </div>
            <div className="min-w-0 border border-stone-line p-5 sm:p-6">
              <h3 className="font-medium text-foco-black">Posso trocar o tamanho?</h3>
              <p className="mt-2 text-sm leading-relaxed text-foco-black/60">
                Consulte nossa política em Trocas e devoluções ou pergunte no WhatsApp antes de fechar o
                pedido.
              </p>
            </div>
            <div className="min-w-0 border border-stone-line p-5 sm:p-6">
              <h3 className="font-medium text-foco-black">O site é seguro?</h3>
              <p className="mt-2 text-sm leading-relaxed text-foco-black/60">
                Esta vitrine não processa pagamento online. O relacionamento comercial acontece no canal que
                você autorizar com a equipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}