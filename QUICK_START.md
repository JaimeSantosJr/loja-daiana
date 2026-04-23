# Quick Start - FOCO Woman Vitrine

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Acesse `http://localhost:3012`.

## Rotas principais

- `/` - Home editorial
- `/catalogo` - Vitrine com filtros
- `/produto/[id]` - Detalhe da peça + CTA WhatsApp
- `/institucional/sobre` - Marca
- `/institucional/contato` - Canais de atendimento
- `/institucional/trocas-devolucoes` - Política

## Fluxo comercial atual

1. Cliente navega na vitrine.
2. Escolhe peça e opções (cor/tamanho).
3. Clica em WhatsApp.
4. Atendimento humano finaliza pedido fora do site.

## Notas

- Sem checkout e sem backend de pedidos.
- Imagens locais em `public/images`.
- SEO técnico via metadata, sitemap e robots.
