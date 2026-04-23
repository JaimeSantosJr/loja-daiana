# FOCO Woman - Resumo Técnico

Projeto em Next.js (App Router) para vitrine de moda fitness com foco em performance visual e conversão via WhatsApp.

## Stack

- Next.js 16 + React 19
- Tailwind CSS 4
- TypeScript
- @vercel/analytics

## Arquitetura

- `app/` - rotas e metadados
- `components/` - seções de home, catálogo, layout, marca
- `lib/constants.ts` - catálogo mock e conteúdo institucional
- `lib/whatsapp.ts` - links e mensagens para atendimento

## Estado atual do produto

- Modelo comercial: vitrine + consultoria
- Catálogo com filtros e sincronização na URL
- Página de produto com CTA contextual para WhatsApp
- Layout responsivo mobile/desktop
- Imagens únicas por seção e por produto

## Observabilidade e SEO

- Eventos de clique em WhatsApp
- Metadata Open Graph e Twitter
- `app/sitemap.ts`
- `app/robots.ts`

## Escopo fora do projeto (por enquanto)

- Backend transacional
- Pagamento online
- Gestão de estoque em tempo real
