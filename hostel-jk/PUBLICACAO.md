# Guia de publicação – Hostel JK

Checklist do que precisa ser feito à mão antes e logo depois de colocar o site no ar.

## 1. Variáveis de ambiente

Cadastre na Vercel em **Project → Settings → Environment Variables** (e no `.env` local, se quiser testar):

| Variável | Valor |
| --- | --- |
| `VITE_SITE_URL` | `https://www.seudominio.com.br` (sem barra no final). Na Vercel pode ficar vazia: o build usa o domínio de produção do projeto. |
| `VITE_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` (passo 2) |
| `VITE_SENTRY_DSN` | DSN do projeto (passo 3) |
| `VITE_GOOGLE_SITE_VERIFICATION` | Código do Search Console (passo 5, só se usar o método "Tag HTML") |

Toda mudança de variável exige um novo deploy para valer.

## 2. Google Analytics 4

1. Acesse <https://analytics.google.com> → **Administrador → Criar → Propriedade**.
2. Informe nome (Hostel JK), fuso horário de Brasília e moeda Real.
3. Em **Fluxos de dados → Web**, informe o domínio do site e crie o fluxo.
4. Copie o **ID de métricas** (`G-...`) para `VITE_GA_MEASUREMENT_ID` e refaça o deploy.
5. Teste: abra o site, clique em **Aceitar** no aviso de cookies e veja a visita em **Relatórios → Tempo real**. Em aba anônima, clicando em **Recusar**, nada deve aparecer.
6. Opcional: em **Administrador → Eventos**, marque `generate_lead` como evento principal. Ele é disparado a cada clique em um botão do WhatsApp.

## 3. Sentry (monitoramento de erros)

1. Crie a conta em <https://sentry.io> (o plano gratuito atende).
2. **Projects → Create Project** → plataforma **React** → nome `hostel-jk`.
3. Copie o **DSN** (Settings → Projects → hostel-jk → Client Keys) para `VITE_SENTRY_DSN` e refaça o deploy.
4. Em **Alerts → Create Alert**, crie um alerta de "issue nova" enviando e-mail para você.
5. Em **Settings → Security & Privacy**, ative **Data Scrubber** e **Prevent Storing of IP Addresses**.

O SDK já está instalado e só é baixado em produção, depois que a página fica ociosa. Não envia dados pessoais (`sendDefaultPii: false`).

## 4. UptimeRobot (disponibilidade)

1. Crie a conta em <https://uptimerobot.com> (gratuito: checagem a cada 5 minutos).
2. **New monitor** → tipo **HTTP(s)** → URL `https://www.seudominio.com.br/` → intervalo 5 min.
3. Crie um segundo monitor do tipo **Keyword** com a mesma URL e a palavra `Hostel JK` (tipo "keyword exists"). Ele avisa se o site responder, mas com conteúdo errado.
4. Em **Alert contacts**, cadastre seu e-mail (e o app do UptimeRobot no celular, se quiser notificação push).

## 5. Google Search Console

1. Acesse <https://search.google.com/search-console> → **Adicionar propriedade**.
2. Escolha **Domínio** (recomendado: cobre http/https e www/sem www) e digite o domínio sem `https://`.
3. O Google mostra um registro **TXT** (`google-site-verification=...`). No painel onde o domínio foi registrado (Registro.br, GoDaddy, Vercel DNS...), crie um registro TXT no domínio raiz (`@`) com esse valor.
4. Volte ao Search Console e clique em **Verificar**. A propagação do DNS pode levar de minutos a algumas horas.
   - Alternativa sem mexer no DNS: escolha **Prefixo do URL**, método **Tag HTML**, copie só o valor do `content` para a variável `VITE_GOOGLE_SITE_VERIFICATION`, refaça o deploy e clique em **Verificar**.
5. No menu **Sitemaps**, informe `sitemap.xml` e clique em **Enviar**. O status deve ficar "Processado".
6. Em **Inspeção de URL**, cole o endereço da home e clique em **Solicitar indexação**.
7. Depois de alguns dias, confira **Páginas** (indexação) e **Core Web Vitals**.

## 6. Dados que só você tem

- `src/config/site.js` → `empresa`: razão social, CNPJ e e-mail de contato para privacidade (aparecem na Política de Privacidade).
- Peça para um advogado ou contador revisar o texto da Política de Privacidade (`src/pages/PrivacyPolicy.jsx`).

## 7. Teste manual num celular de verdade

Abra o site publicado no celular (de preferência um Android e um iPhone) e confira:

- [ ] Nenhuma tela rola para os lados (home, política de privacidade, 404).
- [ ] A foto de capa aparece rápido e o título fica legível por cima dela.
- [ ] Menu hambúrguer abre, fecha no X, fecha tocando fora e leva para a seção certa.
- [ ] Todos os botões do WhatsApp abrem o app com a mensagem preenchida (inclusive o flutuante e o "Reservar" de cada quarto).
- [ ] Abas dos quartos: dá para deslizar para o lado e trocar de quarto; setas do carrossel respondem ao toque.
- [ ] Galeria: tocar na foto abre em tela cheia; setas e o X funcionam; a página não rola por trás.
- [ ] Mapa carrega e dá para arrastar; o link "Ver no Google Maps" abre o app de mapas.
- [ ] Telefone do rodapé abre o discador.
- [ ] Aviso de cookies: aparece na primeira visita, some após Aceitar/Recusar e não volta ao recarregar. "Preferências de cookies" no rodapé reabre o aviso.
- [ ] O botão flutuante do WhatsApp não cobre nada importante (principalmente no rodapé e no aviso de cookies).
- [ ] Gire o celular para o modo paisagem e repita a rolagem da home.
- [ ] No iPhone: nada fica escondido atrás da barra inferior do Safari.
- [ ] Com o 4G (Wi-Fi desligado): a página abre em até ~3 segundos.
- [ ] Digite um endereço errado (ex.: `/teste`) e veja a página 404.
- [ ] Compartilhe o link no WhatsApp e confira a prévia (foto, título e descrição).

## 8. Depois de publicar

- Rode o PageSpeed Insights em <https://pagespeed.web.dev> (celular e computador).
- Valide a prévia de compartilhamento em <https://www.opengraph.xyz> e os dados estruturados em <https://search.google.com/test/rich-results>.
- Confira os cabeçalhos de segurança em <https://securityheaders.com>.
