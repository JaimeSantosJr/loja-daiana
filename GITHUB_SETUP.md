# GitHub Setup para FOCO Woman

## Status Atual

✅ Repositório Git local inicializado
✅ Commits iniciais criados
✅ Projeto pronto para conectar ao GitHub

## Conectar ao GitHub

### Opção 1: Usando v0 Settings (Recomendado)

1. Clique no **botão de Engrenagem** (⚙️) no topo direito do v0
2. Vá para a aba **"Settings"** → **"Git"**
3. Clique em **"Connect GitHub"**
4. Autentique com sua conta GitHub
5. Escolha:
   - **Criar novo repositório** (v0 cria automaticamente)
   - **Usar repositório existente** (seu fork/repo)
6. Selecione a branch (padrão: `main`)
7. Clique em **"Connect"**

v0 automaticamente sincronizará todos os commits!

### Opção 2: Linha de Comando

Se preferir fazer manualmente:

```bash
# Criar novo repositório no GitHub:
# 1. Vá para https://github.com/new
# 2. Nome: foco-woman (ou seu nome preferido)
# 3. Descrição: "Premium women's fitness fashion ecommerce"
# 4. Privado ou Público (sua escolha)
# 5. Clique "Create repository"

# Depois, no terminal:
cd /vercel/share/v0-project

# Adicione o remote (substitua USER/REPO)
git remote add origin https://github.com/SEU_USER/foco-woman.git

# Renomeie branch se necessário
git branch -M main

# Envie o código
git push -u origin main
```

## Após Conectar

Você poderá:
- ✅ Ver histórico de commits no v0
- ✅ Criar pull requests
- ✅ Sincronizar mudanças automaticamente
- ✅ Deploy automático com Vercel

## Estrutura do Repositório

```
foco-woman/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout root com Header/Footer
│   ├── page.tsx           # Homepage
│   ├── catalogo/          # Página de catálogo
│   ├── produto/[id]/      # Detalhe de produto
│   ├── carrinho/          # Carrinho de compras
│   ├── checkout/          # Checkout
│   └── institucional/      # Sobre, trocas, contato
├── components/            # Componentes React
│   ├── layout/           # Header e Footer
│   ├── home/             # Seções da homepage
│   ├── product/          # Componentes de produto
│   ├── catalog/          # Filtros e grid
│   └── cart/             # Carrinho
├── lib/
│   ├── types.ts          # Tipos TypeScript
│   ├── constants.ts      # Dados mock de produtos
│   └── context/          # CartContext
├── public/               # Imagens e assets
└── tailwind.config.ts    # Configuração Tailwind

```

## Primeiros Passos Após Conectar

1. **Fazer um commit teste:**
   ```bash
   git commit --allow-empty -m "test: github connection working"
   git push
   ```

2. **Criar branch de desenvolvimento:**
   ```bash
   git checkout -b develop
   git push -u origin develop
   ```

3. **Configurar Branch Protection:**
   - Vá para Settings do repositório
   - Branch Protection Rules
   - Proteja a branch `main`

## Dúvidas?

- **v0 Help**: Clique no "?" no canto superior direito
- **GitHub Help**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
