import type { Metadata } from 'next'
import { Cormorant_Garamond, Great_Vibes, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-foco-display',
  weight: ['400', '600', '700'],
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-woman-script',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.focowoman.com.br'),
  title: {
    default: 'FOCO Woman | Moda fitness para academia',
    template: '%s | FOCO Woman',
  },
  description:
    'Moda fitness feminina com estilo editorial. Conheça a coleção e fale com nossa equipe para valores, tamanhos e reservas.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FOCO Woman | Moda fitness para academia',
    description:
      'Vitrine premium de moda fitness feminina com atendimento humanizado no WhatsApp.',
    url: '/',
    siteName: 'FOCO Woman',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/sections/hero.png',
        width: 1418,
        height: 800,
        alt: 'FOCO Woman - moda fitness premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOCO Woman | Moda fitness para academia',
    description:
      'Coleção de moda fitness com atendimento direto via WhatsApp.',
    images: ['/images/sections/hero.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${cormorant.variable} ${greatVibes.variable}`}
    >
      <body className="min-h-screen min-w-0 bg-paper font-sans text-foco-black antialiased">
        <Header />
        <main className="min-h-screen min-w-0 overflow-x-clip">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
