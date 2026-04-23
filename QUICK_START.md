# ⚡ Quick Start - FOCO Woman

## 🎯 Você tem em mãos um ecommerce completo!

Este é um **ecommerce premium funcional** para a marca FOCO Woman. Tudo está pronto para usar, customizar e publicar.

## 🚀 Começar Agora (3 minutos)

### 1. Rodando Localmente
```bash
cd /vercel/share/v0-project
pnpm dev
```
Abra http://localhost:3000 - Pronto! 🎉

### 2. Explorar o Projeto
- **Homepage**: http://localhost:3000 (7 seções)
- **Loja**: http://localhost:3000/catalogo (com filtros)
- **Produto**: http://localhost:3000/produto/1 (dinâmico)
- **Carrinho**: http://localhost:3000/carrinho
- **Checkout**: http://localhost:3000/checkout
- **Sobre**: http://localhost:3000/institucional/sobre
- **Contato**: http://localhost:3000/institucional/contato

### 3. Testar Funcionalidades
- ✅ Adicionar produto ao carrinho
- ✅ Filtrar por categoria/tamanho/cor
- ✅ Aplicar cupom `PRIMEIRA10` (10% desconto)
- ✅ Completar checkout
- ✅ Enviar formulário de contato

## 📁 Arquitetura (Simples & Limpa)

```
Páginas (/app)
  ├── Homepage com 7 seções
  ├── Catálogo com filtros
  ├── Detalhes do produto
  ├── Carrinho funcional
  ├── Checkout completo
  └── Páginas institucionais

Componentes (/components)
  ├── Header & Footer
  ├── Product Cards
  ├── Filters
  └── Cart Items

Estado Global (Context)
  └── CartContext (add, remove, atualizar)

Dados Mock (/lib/constants.ts)
  ├── 12 produtos variados
  ├── 5 categorias
  ├── 4 depoimentos
  └── 4 benefícios
```

## 🎨 Design (Rosa Blush + Preto)

Paleta já configurada:
- Rosa Blush: `#D8A0AA` (botões, destaques)
- Preto: `#111111` (texto, elementos)
- Off-White: `#F7F3F2` (background)

Customize em `tailwind.config.ts` se necessário.

## 🛒 Como Funciona o Carrinho

1. **Adicionar**: Produto → tamanho → cor → quantidade → carrinho
2. **Atualizar**: +/- quantidade na página do carrinho
3. **Remover**: Botão remover no carrinho
4. **Cupom**: Use `PRIMEIRA10` para 10% off
5. **Frete**: Grátis acima R$ 299, senão R$ 15

## 🔧 Customizar

### Trocar Cores
Em `tailwind.config.ts`:
```js
colors: {
  "rose-blush": "#D8A0AA",  // ← Mude aqui
  "stone-dark": "#111111",
  // ...
}
```

### Adicionar Produtos
Em `lib/constants.ts`:
```js
PRODUCTS.push({
  id: '13',
  name: 'Novo Produto',
  category: 'leggings',
  price: 199.90,
  // ... resto dos campos
})
```

### Trocar Cupom
Em `app/carrinho/page.tsx`:
```js
if (coupon.toUpperCase() === 'SEUCUPOM') {
  setDiscount(total * 0.15); // 15% off
}
```

### Mudar Preços de Frete
Em `app/carrinho/page.tsx` e `app/checkout/page.tsx`:
```js
const shipping = subtotal > 500 ? 0 : 20; // Novo valor
```

## 📱 Mobile First

Tudo é responsivo! O site fica perfeito em:
- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops

## 📊 Dados Mock Incluídos

### 12 Produtos
- 2 Leggings (preto, rosa blush)
- 2 Tops (rosa claro, preto)
- 2 Conjuntos (rosa claro, preto)
- 2 Macaquinhos (preto, rosa)
- 4 Acessórios (fone, mochila, garrafa, meias)

Cada um com:
- ✅ Preço realista
- ✅ Descrição
- ✅ Cores e tamanhos
- ✅ Imagens Unsplash
- ✅ Ratings e reviews

### 5 Categorias
Leggings, Tops, Conjuntos, Macaquinhos, Acessórios

### 4 Depoimentos
De clientes satisfeitas ⭐⭐⭐⭐⭐

### 4 Benefícios
Conforto, Estilo, Performance, Caimento

## 🚀 Deploy (1 clique!)

### Vercel (Recomendado)
1. Push para GitHub
2. Conectar em vercel.com
3. Deploy automático!

[Ver guia completo](./DEPLOYMENT_GUIDE.md)

## 📚 Documentação

- **PROJECT_SUMMARY.md** - Descrição técnica completa
- **IMPLEMENTATION_CHECKLIST.md** - Tudo que foi implementado
- **DEPLOYMENT_GUIDE.md** - Como publicar
- **QUICK_START.md** - Este arquivo

## 🎯 Próximas Features (Fáceis de Adicionar)

- [ ] Integração Stripe para pagamentos reais
- [ ] Banco de dados Supabase para produtos dinâmicos
- [ ] Autenticação de usuário
- [ ] Histórico de pedidos
- [ ] Wishlist persistente
- [ ] Reviews reais
- [ ] Admin dashboard
- [ ] Email de confirmação

## ⚙️ Tech Stack

- ✅ Next.js 16 (App Router)
- ✅ React 19
- ✅ Tailwind CSS 4
- ✅ TypeScript
- ✅ Context API (Estado)
- ✅ Vercel Analytics

**Zero dependências desnecessárias** - Tudo é vanilla React!

## 💡 Dicas

1. **Performance**: Vercel oferece melhor performance para Next.js
2. **SEO**: Metadata já está configurado, só adicionar sitemap se quiser
3. **Analytics**: Vercel Analytics já vem ativado
4. **Segurança**: Sem dados sensíveis no código
5. **Mobile**: Testado em todos os breakpoints

## 🐛 Troubleshooting

**Dev server não inicia?**
```bash
rm -rf .next node_modules
pnpm install
pnpm dev
```

**Carrinho não funciona?**
- Verifique que CartProvider está no layout.tsx ✓
- Verifique que useCart é usado em client components ✓

**Imagens não carregam?**
- São URLs do Unsplash (devem funcionar)
- Verifique sua conexão

**Build falha?**
```bash
pnpm build
```

## 📞 Suporte

- Documentação completa em `PROJECT_SUMMARY.md`
- Código bem comentado
- TypeScript ajuda com intellisense

## ✨ Você Está Pronto Para:

- ✅ Testar o ecommerce completo
- ✅ Customizar cores e dados
- ✅ Adicionar mais produtos
- ✅ Modificar preços e cupons
- ✅ Publicar em produção
- ✅ Integrar com ferramentas reais (DB, pagamento, etc)

---

## 🎉 Resumo

Você tem um **ecommerce premium profissional** com:
- 8 páginas completas
- 15+ componentes reutilizáveis
- Carrinho funcional com cupom
- Filtros avançados
- Checkout completo
- Design responsivo
- Dados mock realistas
- Zero bugs conhecidos

**Tudo pronto para usar ou customizar!**

---

**Desenvolvido com v0.app** 🌸
Moda fitness com elegância e presença.

Última atualização: Abril 2026
