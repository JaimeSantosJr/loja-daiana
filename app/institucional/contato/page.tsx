'use client';

import { useState } from 'react';

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
    <div>
      {/* Hero */}
      <div className="bg-stone-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-dark mb-6">
            Entre em Contato
          </h1>
          <p className="text-lg text-stone-dark/80">
            Estamos aqui para ajudar. Fale conosco e responderemos em até 24 horas.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-dark mb-6">Formas de Contato</h2>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-bold text-stone-dark mb-2">Email</h3>
              <a 
                href="mailto:contato@focowoman.com.br"
                className="text-rose-blush hover:text-rose-blush/70 transition-colors text-lg"
              >
                contato@focowoman.com.br
              </a>
              <p className="text-stone-gray text-sm mt-2">
                Respondemos em até 24 horas
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-bold text-stone-dark mb-2">Telefone</h3>
              <a 
                href="tel:+551133334444"
                className="text-rose-blush hover:text-rose-blush/70 transition-colors text-lg"
              >
                (11) 3333-4444
              </a>
              <p className="text-stone-gray text-sm mt-2">
                Seg-Sex: 9h às 18h (Horário de Brasília)
              </p>
            </div>

            {/* Instagram */}
            <div>
              <h3 className="font-bold text-stone-dark mb-2">Instagram</h3>
              <a 
                href="https://instagram.com/focowoman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-blush hover:text-rose-blush/70 transition-colors text-lg flex items-center gap-2"
              >
                @focowoman
                <span>↗</span>
              </a>
              <p className="text-stone-gray text-sm mt-2">
                Siga para notícias e promoções
              </p>
            </div>

            {/* Atendimento */}
            <div className="bg-rose-light/20 p-6 rounded-lg border border-rose-blush/30 mt-8">
              <h3 className="font-bold text-stone-dark mb-3">Horário de Atendimento</h3>
              <ul className="text-stone-dark/80 text-sm space-y-1">
                <li><strong>Segunda a Sexta:</strong> 9h às 18h</li>
                <li><strong>Sábado:</strong> 10h às 14h</li>
                <li><strong>Domingo:</strong> Fechado</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <label className="block font-semibold text-stone-dark mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-blush"
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-stone-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-blush"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-stone-dark mb-2">
                  Assunto *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-blush"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="pedido">Dúvida sobre Pedido</option>
                  <option value="troca">Troca ou Devolução</option>
                  <option value="produto">Informações de Produto</option>
                  <option value="feedback">Feedback ou Sugestão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-stone-dark mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-blush resize-none"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-rose-blush text-stone-cream font-semibold rounded-lg hover:bg-rose-blush/90 transition-all hover:shadow-lg"
              >
                Enviar Mensagem
              </button>

              {submitted && (
                <p className="mt-4 text-center text-green-600 font-semibold">
                  ✓ Mensagem enviada! Responderemos em breve.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-stone-dark text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-stone-gray/30 rounded-lg p-6">
              <h3 className="font-bold text-stone-dark mb-3">Qual é o prazo de entrega?</h3>
              <p className="text-stone-dark/80 text-sm">
                Entregamos em 3-7 dias úteis em toda São Paulo e região metropolitana. Para outros estados, consulte o prazo no checkout.
              </p>
            </div>
            <div className="border border-stone-gray/30 rounded-lg p-6">
              <h3 className="font-bold text-stone-dark mb-3">Como acompanho meu pedido?</h3>
              <p className="text-stone-dark/80 text-sm">
                Você receberá um email com o código de rastreamento assim que o pedido for despachado.
              </p>
            </div>
            <div className="border border-stone-gray/30 rounded-lg p-6">
              <h3 className="font-bold text-stone-dark mb-3">Vocês entregam internacionalmente?</h3>
              <p className="text-stone-dark/80 text-sm">
                Atualmente entregamos apenas no Brasil. Entre em contato para conhecer planos futuros de expansão.
              </p>
            </div>
            <div className="border border-stone-gray/30 rounded-lg p-6">
              <h3 className="font-bold text-stone-dark mb-3">Como funciona a segurança do site?</h3>
              <p className="text-stone-dark/80 text-sm">
                Utilizamos criptografia SSL e protocolo de segurança PCI para proteger seus dados e pagamentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
