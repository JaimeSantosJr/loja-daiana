# FOCO Woman - Ecommerce Premium de Moda Fitness

## 🎯 Visão Geral

Plataforma ecommerce completa e sofisticada para a marca FOCO Woman, especializada em roupas fitness femininas premium. O site apresenta design minimalista elegante com paleta de cores rosa blush, preto e off-white.

## 📋 Tecnologias Utilizadas

- **Framework**: Next.js 16.2.0 (App Router)
- **Styling**: Tailwind CSS 4.2.0
- **Tipografia**: Geist Font
- **Estado**: React Context para gerenciamento do carrinho
- **Dados**: Mock data em `lib/constants.ts`

## 🎨 Design System

### Paleta de Cores
- Rosa Blush: `#D8A0AA` (primária, botões, destaques)
- Rosa Claro: `#E8C1C8` (secundária, backgrounds suaves)
- Preto Elegante: `#111111` (texto, elementos sólidos)
- Off-White/Creme: `#F7F3F2` (background principal)
- Cinza Suave: `#D9D3D1` (borders, elementos secundários)

### Tipografia
- Font Family: Geist (moderno, elegante)
- Headings: bold/semibold
- Body: regular com line-height 1.5-1.6

## 📁 Estrutura do Projeto

```
/app
├── layout.tsx (root layout com CartProvider e Header/Footer)
├── page.tsx (homepage com 7 seções)
├── /catalogo/page.tsx (loja com filtros)
├── /produto/[id]/page.tsx (detalhe do produto)
├── /carrinho/page.tsx (carrinho de compras)
├── /checkout/page.tsx (formulário de checkout)
└── /institucional
    ├── /sobre/page.tsx
    ├── /trocas-devolucoes/page.tsx
    └── /contato/page.tsx

/components
├── /layout
│   ├── Header.tsx (navbar sticky com carrinho)
│   └── Footer.tsx (footer completo)
├── /home
│   ├── HeroSection.tsx (banner hero)
│   ├── NewCollectionSection.tsx (novidades)
│   ├── CategoriesSection.tsx (5 categorias)
│   ├── BestsellersSection.tsx (destaque)
│   ├── BenefitsSection.tsx (4 benefícios)
│   ├── TestimonialsSection.tsx (depoimentos)
│   └── NewsletterSection.tsx (inscrição)
├── /product
│   └── ProductCard.tsx (card reutilizável)
├── /catalog
│   ├── ProductGrid.tsx (grid com loading)
│   └── FilterSidebar.tsx (filtros avançados)
└── /cart
    └── CartItem.tsx (item do carrinho)

/lib
├── types.ts (tipos TypeScript)
├── constants.ts (produtos, benefícios, depoimentos)
└── /context
    └── CartContext.tsx (gerencialimento global)
```

## 🛒 Funcionalidades Principais

### 1. Homepage
- Hero banner com CTA
- Seção de nova coleção (produtos com `isNew: true`)
- Grid de 5 categorias
- Bestsellers (produtos com `isBestseller: true`)
- 4 benefícios da marca
- Depoimentos de clientes
- Newsletter com cupom "PRIMEIRA10" (10% desconto)

### 2. Catálogo
- Filtros por categoria, tamanho e cor
- Ordenação (destaque, preço, novidades)
- Grid responsiva de produtos
- Contagem de itens filtrados
- Estado de loading

### 3. Página de Produto
- Galeria de imagens
- Informações completas
- Seleção de tamanho e cor com preview visual
- Controle de quantidade
- Botão adicionar ao carrinho
- Informações de entrega e troca
- Produtos relacionados

### 4. Carrinho
- Lista de itens com imagens
- Controle de quantidade
- Remoção de itens
- Campo para cupom de desconto
- Cálculo de subtotal, desconto, frete e total
- Frete grátis acima de R$ 299

### 5. Checkout
- Formulário de dados pessoais
- Endereço de entrega
- Seleção de forma de pagamento
- Resumo do pedido
- Confirmação com redirecionamento

### 6. Páginas Institucionais
- **Sobre**: História, missão e valores da marca
- **Trocas e Devoluções**: Política completa e FAQ
- **Contato**: Formulário, informações e FAQ

## 🎯 Dados Mock

### Produtos (12 itens)
- 2 Leggings
- 2 Tops
- 2 Conjuntos
- 2 Macaquinhos
- 4 Acessórios (fone, mochila, garrafa, meias)

Cada produto inclui:
- Nome, preço, descrição
- Categoria, cores disponíveis, tamanhos
- Imagens do Unsplash (fitness/lifestyle feminino)
- Ratings e reviews
- Badges (Novo, Destaque, Desconto)

### Categorias
- Leggings (2 produtos)
- Tops (2 produtos)
- Conjuntos (2 produtos)
- Macaquinhos (2 produtos)
- Acessórios (4 produtos)

### Benefícios
1. Conforto Total
2. Estilo Impecável
3. Performance Máxima
4. Caimento Perfeito

### Depoimentos
4 clientes satisfeitas com ratings 5 stars

## 🛠️ Cart Context

O `CartContext` fornece:
- `addToCart()` - Adiciona item (mescla quantidades)
- `removeFromCart()` - Remove por índice
- `updateQuantity()` - Atualiza quantidade
- `clearCart()` - Limpa carrinho
- `getTotal()` - Retorna total
- `getItemCount()` - Retorna quantidade de itens

## 💰 Cupom de Desconto

- **Cupom**: `PRIMEIRA10`
- **Desconto**: 10% off
- Aplicável na página de carrinho
- Dica exibida ao usuário

## 📱 Responsividade

- **Mobile-first** approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu hambúrguer em dispositivos pequenos
- Grid adaptável (1 col mobile → 3+ lg)

## ✨ Detalhes de UX

### Header
- Logo com cor dupla (stone-dark + rose-blush)
- Menu sticky no topo
- Ícone de carrinho com badge de quantidade
- Menu mobile com hamburger icon

### Cards de Produtos
- Hover com zoom da imagem (escala 1.05)
- Badges para Novo/Destaque/Desconto
- Botão wishlist (visual apenas)
- Preview de cores disponíveis
- Rating com número de reviews

### Transições
- Smooth color transitions
- Scale effects no hover
- Shadow effects sutis
- Loading states adequados

## 🔗 Rotas Disponíveis

```
/                    - Homepage
/catalogo            - Loja com filtros
/produto/[id]        - Detalhes do produto
/carrinho            - Carrinho de compras
/checkout            - Checkout
/institucional/sobre - Sobre a marca
/institucional/trocas-devolucoes - Política
/institucional/contato - Formulário de contato
```

## 🎯 Copy da Marca

- "Vista sua melhor versão"
- "Treine com foco, vista poder"
- "Moda fitness com elegância e presença"
- "Feito para mulheres que sabem o que querem"
- "Conforto que não compromete o estilo"

## 🚀 Como Usar

1. **Dev**: `pnpm dev` (já está rodando em http://localhost:3000)
2. **Build**: `pnpm build`
3. **Start**: `pnpm start`

## 📦 Próximos Passos (Futuro)

- [ ] Integração com Stripe para pagamento real
- [ ] Autenticação de usuário (Supabase/Auth.js)
- [ ] Banco de dados real (Supabase/Neon)
- [ ] Admin dashboard
- [ ] Sistema de reviews real
- [ ] Wishlist persistente
- [ ] Histórico de pedidos
- [ ] Notificações por email
- [ ] Analytics (PostHog/Vercel Analytics)
- [ ] SEO otimizado

## 🎨 Variáveis Tailwind Personalizadas

```tailwind
colors:
  rose-blush: '#D8A0AA'
  rose-light: '#E8C1C8'
  stone-dark: '#111111'
  stone-cream: '#F7F3F2'
  stone-gray: '#D9D3D1'
```

## 📊 Estrutura de Dados

### Product Type
```typescript
{
  id: string
  name: string
  category: Category
  price: number
  originalPrice?: number
  image: string
  description: string
  colors: Color[]
  sizes: Size[]
  isNew?: boolean
  isBestseller?: boolean
  rating?: number
  reviews?: number
}
```

### CartItem Type
```typescript
{
  product: Product
  quantity: number
  size: Size
  color: Color
}
```

---

**Desenvolvido com v0.app** ✨
Moda fitness premium com elegância e presença.
