import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-dark text-stone-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-stone-cream">FOCO</span>
              <span className="text-rose-light ml-2">Woman</span>
            </h3>
            <p className="text-stone-gray text-sm">
              Moda fitness com elegância e presença. Feito para mulheres que sabem o que querem.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalogo" className="text-stone-gray hover:text-rose-light transition-colors">
                  Loja
                </Link>
              </li>
              <li>
                <Link href="/institucional/sobre" className="text-stone-gray hover:text-rose-light transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/institucional/contato" className="text-stone-gray hover:text-rose-light transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/institucional/trocas-devolucoes" className="text-stone-gray hover:text-rose-light transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="/institucional/contato" className="text-stone-gray hover:text-rose-light transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <a href="mailto:contato@focowoman.com.br" className="text-stone-gray hover:text-rose-light transition-colors">
                  contato@focowoman.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-gray hover:text-rose-light transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-gray hover:text-rose-light transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-gray hover:text-rose-light transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.866.772 5 5 0 002.193-2.765c-.96.568-2.023.98-3.127 1.202a5 5 0 00-8.523 4.55 14.18 14.18 0 01-10.306-5.224 5 5 0 001.553 6.677 5 5 0 01-2.267-.6v.06a5 5 0 004.008 4.905 5 5 0 01-2.26.086 5.007 5.007 0 004.658 3.48 10.007 10.007 0 01-6.177 2.132c-.4 0-.787-.022-1.17-.067a14.17 14.17 0 007.68 2.247c9.203 0 14.228-7.617 14.228-14.227 0-.213-.005-.426-.015-.637a10.025 10.025 0 002.457-2.548z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-gray/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone-gray">
            <p>&copy; 2024 FOCO Woman. Todos os direitos reservados.</p>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="hover:text-rose-light transition-colors">Privacidade</a>
              <a href="#" className="hover:text-rose-light transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
