import Link from 'next/link';
import WhatsAppButton from '@/components/brand/WhatsAppButton';

export const metadata = {
  title: 'Consultoria | FOCO Woman',
};

export default function CarrinhoLegacyPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 py-20">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foco-black">Atendimento personalizado</h1>
        <p className="mt-5 text-sm leading-relaxed text-foco-black/55">
          A FOCO Woman trabalha com vitrine e consultoria. Escolha as peças na coleção e fale com nossa
          equipe no WhatsApp para valores, tamanhos e combinações.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <WhatsAppButton
            message="Olá! Vim pelo site e quero orientação sobre peças e tamanhos."
            analyticsSource="legacy_carrinho"
          >
            WhatsApp
          </WhatsAppButton>
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center border border-foco-black/15 px-6 py-3 text-sm font-medium text-foco-black transition-colors hover:border-rose-dust hover:bg-rose-mist/20"
          >
            Ver coleção
          </Link>
        </div>
      </div>
    </div>
  );
}