# Ponto Claro Contábil

Site institucional conceitual de contabilidade e consultoria empresarial, criado para o portfólio de Segundo Almeida.

## Stack

- Astro 7 + TypeScript, saída estática em `dist/`
- Conteúdo editorial em Markdown com validação de schema
- Serviços e segmentos em JSON
- CSS autoral, sem fontes externas, framework de interface ou scripts de terceiros
- Netlify para hospedagem estática

## Requisitos locais

- Node.js 22.22 ou superior
- npm

## Executar no Windows

Na pasta do projeto:

```powershell
npm install
npm run check
npm run build
npm run dev
```

O endereço local é exibido pelo Astro no terminal, normalmente `http://localhost:4321/`.

## Atualizar conteúdo

- **Artigos:** crie um arquivo `.md` em `src/content/blog/`. Copie o frontmatter de um artigo existente e atualize título, descrição, data, categoria e tempo de leitura.
- **Serviços:** edite `src/data/services.json` mantendo os campos `number`, `title`, `description` e `audiences`.
- **Segmentos:** edite `src/data/segments.json` mantendo `slug`, `eyebrow`, `title`, `description` e `needs`.
- As páginas de artigo são geradas automaticamente pelo slug do arquivo Markdown.

## Imagens

As versões WebP da imagem principal estão em `public/images/`:

- `mesa-contabilidade-960.webp` — alternativa compacta para telas menores.
- `mesa-contabilidade-1536.webp` — alternativa maior para telas amplas.

As imagens são parte do projeto e já estão conectadas ao `srcset` responsivo da página inicial. A marca vetorial e o favicon ficam em `public/icons/`.

### Logotipo da empresa conceitual

Os PNGs com fundo transparente estão em `public/brands/`:

- `logo-ponto-claro-horizontal.png` — uso em fundo claro.
- `logo-ponto-claro-horizontal-reverso.png` — versão clara para fundos escuros.
- `logo-ponto-claro-simbolo.png` — símbolo quadrado para avatar e ícone.

Os arquivos SVG correspondentes são usados no cabeçalho e no rodapé para manter nitidez em qualquer escala e evitar carregar imagens maiores no site.

## Contato

O formulário valida os campos no navegador e abre o WhatsApp `+55 83 99873-9712` com uma mensagem preenchida. O visitante revisa e envia a mensagem. O site não armazena os dados do formulário.

Antes de publicar uma versão comercial, confirme que esse número é o contato público desejado, substitua o conteúdo conceitual por dados reais autorizados e revise a política de privacidade aplicável.

## Publicação na Netlify

O arquivo `netlify.toml` define `npm run build` como comando de build e `dist` como pasta publicada. O Node configurado no build é 22.22.0. Conecte o repositório à Netlify e valide um Deploy Preview antes de publicar em produção.

Em builds na Netlify, `DEPLOY_PRIME_URL` ou `URL` define o endereço usado para links canônicos, Open Graph, sitemap e robots.txt. Em builds locais, sem domínio, esses itens específicos de domínio são omitidos. A região de atendimento não foi definida, então o projeto não inclui SEO local.

## Verificações e desempenho

```powershell
npm run check
npm run build
```

O projeto reduz trabalho no navegador com HTML estático, JavaScript pequeno para menu e formulário, imagens WebP com tamanhos explícitos, fontes do sistema e sem carregamento de scripts de terceiros. Pontuações de Lighthouse e Core Web Vitals precisam ser medidas no Deploy Preview e no domínio final; nenhuma nota é presumida neste pacote.

## Natureza conceitual

Nome, identidade, conteúdo, serviços e operação são demonstrativos. O site não afirma experiência, equipe, registro profissional, endereço, clientes ou resultados reais.
