import Link from 'next/link';
import BrandLogo from '@/components/brand/BrandLogo';
import { WHATSAPP_DISPLAY, whatsappHref } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="grain border-t border-stone-line bg-foco-black text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="mb-6 [&_.font-display]:text-paper [&_.font-accent]:text-rose-mist">
              <BrandLogo size="md" variant="light" href="/" />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-paper/65">
              Moda fitness para academia, com caimento pensado para treino e um visual editorial que
              acompanha sua rotina â€” da esteira ao pÃ³s-treino.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:col-span-4 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose-mist/90">
                NavegaÃ§Ã£o
              </h4>
              <ul className="space-y-3 text-sm text-paper/70">
                <li>
                  <Link href="/catalogo" className="transition-colors hover:text-paper">
                    ColeÃ§Ã£o
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/sobre" className="transition-colors hover:text-paper">
                    Sobre a marca
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/contato" className="transition-colors hover:text-paper">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/institucional/trocas-devolucoes"
                    className="transition-colors hover:text-paper"
                  >
                    Trocas e devoluÃ§Ãµes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose-mist/90">
                Atendimento
              </h4>
              <ul className="space-y-3 text-sm text-paper/70">
                <li>
                  <a
                    href={whatsappHref('OlÃ¡! Preciso de ajuda com pedido / troca â€” FOCO Woman.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all transition-colors hover:text-paper sm:break-words"
                  >
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose-mist/90">
              Redes
            </h4>
            <p className="text-sm text-paper/55">
              Acompanhe lanÃ§amentos e bastidores no Instagram da marca.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-rose-mist underline-offset-4 hover:text-paper hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/10 pt-8">
          <div className="flex flex-col gap-6 text-xs text-paper/45 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="font-semibold uppercase tracking-wider text-paper/60">Made in Brazil</p>
              <p>CNPJ 40.939.244/0001-59</p>
            </div>
            <p className="md:text-right">
              &copy; {new Date().getFullYear()} FOCO Woman. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
