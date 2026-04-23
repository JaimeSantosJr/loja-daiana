# 🚀 Guia de Publicação - FOCO Woman

## 📋 Pré-Requisitos

- [x] Projeto Next.js 16 com todas as páginas
- [x] Banco de dados (opcional para MVP)
- [x] Domínio próprio (opcional)

## 🔧 Pré-Deploy Checklist

### 1. Verificar Builds Localmente
```bash
cd /vercel/share/v0-project
pnpm install
pnpm build
pnpm start
```

### 2. Verificar Variáveis de Ambiente
Atualmente não usamos variáveis de ambiente, mas para futuras integrações:
```bash
# .env.local (não commitar)
NEXT_PUBLIC_API_URL=
DATABASE_URL=
STRIPE_API_KEY=
```

### 3. Otimizações Antes de Deploy

#### SEO
- [x] Metadata configurado em layout.tsx
- [x] Descrições em cada página
- [ ] Sitemap.xml (add se necessário)
- [ ] robots.txt (add se necessário)

#### Performance
- [x] Imagens otimizadas (Unsplash CDN)
- [x] CSS minificado (Tailwind)
- [x] JS tree-shaken
- [ ] Image optimization settings (image.config.ts se necessário)

#### Security
- [x] Sem dados sensíveis no código
- [x] Inputs validados
- [ ] CORS configurado (se API necessário)
- [ ] Rate limiting (futuro)

## 📦 Opções de Deploy

### Opção 1: Vercel (Recomendado)

Vercel é a plataforma nativa do Next.js. Super fácil!

#### Passos:
1. **Fazer push para GitHub**
   ```bash
   git init
   git add .
   git commit -m "FOCO Woman ecommerce"
   git push origin main
   ```

2. **Conectar no Vercel**
   - Ir para https://vercel.com/new
   - Conectar seu repositório GitHub
   - Selecionar este projeto
   - Deixar settings padrão
   - Deploy!

3. **Configurar domínio (opcional)**
   - Ir para Settings > Domains
   - Adicionar seu domínio
   - Seguir instruções de DNS

#### Variáveis de Ambiente (se necessário depois)
- Ir para Settings > Environment Variables
- Adicionar conforme necessário

### Opção 2: Netlify

#### Passos:
1. Fazer push para GitHub (mesmo processo Vercel)
2. Ir para https://app.netlify.com/
3. Conectar repositório
4. Build command: `pnpm build`
5. Publish directory: `.next`

### Opção 3: AWS/Google Cloud/Heroku

Mais complexo, requerer Docker. Não recomendado para MVP.

## 📊 Performance Esperada

Após deploy em Vercel:
- **Lighthouse Performance**: 90+
- **Lighthouse SEO**: 100
- **Lighthouse Accessibility**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔐 Segurança & Compliance

- [x] HTTPS por padrão
- [x] CSP headers (Vercel padrão)
- [x] No hardcoded secrets
- [ ] GDPR compliant (adicionar Privacy Policy)
- [ ] Termos de Serviço (adicionar)

## 🌍 Custom Domain

1. Compre domínio em:
   - Namecheap
   - GoDaddy
   - Google Domains
   - NameBright

2. Em Vercel > Project Settings > Domains
3. Adicione domínio
4. Vercel fornecerá valores DNS
5. Adicionar em registrar do domínio
6. Aguardar propagação (até 24h)

## 📈 Monitoramento Pós-Deploy

### Analytics
- Vercel Analytics (incluído)
- Google Analytics (adicionar Script)
- PostHog (future)

### Logs
- Vercel: https://vercel.com/dashboard > your-project > Analytics
- Ver erros em Logs tab

### Performance
- Web Vitals via Vercel
- Lighthouse CI (future)

## 🔄 CI/CD Pipeline

Com GitHub + Vercel:
- Cada push dispara deploy automático
- Preview URLs para PRs
- Auto-deploy em merge main

## 💾 Database (Quando Necessário)

Quando adicionar dados reais:

### Supabase (Recomendado)
```bash
# 1. Criar projeto em supabase.com
# 2. Adicionar var env
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_KEY=...

# 3. Criar tabelas (migrations)
```

### Neon
```bash
# Similar ao Supabase
DATABASE_URL=postgresql://...
```

### Stripe (Pagamentos)
```bash
NEXT_PUBLIC_STRIPE_KEY=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
```

## 📧 Email (Quando Necessário)

### SendGrid
```bash
SENDGRID_API_KEY=...
SENDGRID_FROM_EMAIL=...
```

### Resend
```bash
RESEND_API_KEY=...
```

## 🧪 Testing Pré-Deploy

```bash
# Verificar build
pnpm build

# Testar localmente
pnpm dev

# Verificar tipos
pnpm type-check

# Linting (se config existir)
pnpm lint
```

## 📝 Checklist Final

- [ ] Todas as páginas funcionando
- [ ] Nenhum erro no console
- [ ] Mobile responsivo testado
- [ ] Links todos funcionando
- [ ] Imagens carregando
- [ ] Cart funcionando
- [ ] Formulários validando
- [ ] SEO metadata correto
- [ ] Favicon definido
- [ ] Repository privado ou público (escolher)
- [ ] README atualizado
- [ ] NODE_ENV correto
- [ ] Build completa sem warnings

## 🎯 Post-Deploy

### Dia 1-3
- Monitor performance
- Verificar logs
- Testar funcionalidades
- Verificar Google Search Console

### Semana 1
- Adicionar Google Analytics
- Setup Domain Email (se necessário)
- Adicionar SSL certificate
- Configurar backups (se DB)

### Mês 1
- Monitor conversão
- User feedback
- A/B testing (future)
- Performance optimization

## 📞 Troubleshooting

### Build falha
```bash
# Limpar cache
rm -rf .next
pnpm build
```

### Problema com imagens
- Verificar URLs Unsplash
- Testar localmente primeiro
- Verificar CORS headers

### Database connection
- Verificar variáveis de ambiente
- Verificar firewall/IPs permitidos
- Testar connection string

### Slow performance
- Rodar Lighthouse
- Verificar Core Web Vitals
- Otimizar imagens
- Verificar queries lentas

## 🚀 Deploy Commands Rápidos

```bash
# Build local completo
pnpm build && pnpm start

# Deploy via Vercel CLI
npm i -g vercel
vercel

# Deploy específico
vercel --prod

# Preview
vercel --preview
```

## 📚 Recursos Úteis

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind Performance](https://tailwindcss.com/docs/optimizing-for-production)
- [Web Vitals Guide](https://web.dev/vitals/)

## ✨ Próximos Passos

1. **MVP Launch**
   - Deploy básico em Vercel
   - Domínio customizado
   - Google Analytics

2. **Funcionalidades**
   - Integração Stripe (pagamentos)
   - Supabase (banco de dados)
   - Autenticação

3. **Marketing**
   - SEO optimization
   - Social media integration
   - Email marketing

4. **Admin**
   - Dashboard para gerenciar produtos
   - Análise de vendas
   - Gestão de pedidos

---

**Dúvidas? Verifique a documentação oficial ou entre em contato.**

Desenvolvido com v0.app - Moda fitness com elegância. 🌸
