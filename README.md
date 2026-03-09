# Hercules de Oliveira - Portfolio

Portfólio premium multilíngue (PT-BR, EN, ES) para perfil híbrido de desenvolvimento de software e design gráfico.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- next-themes (light/dark)

## Features

- UI premium, minimalista, responsiva (desktop/tablet/mobile)
- Modo claro e escuro com alternância global
- Internacionalização completa com seletor de idioma no header
- Separação clara entre frentes:
  - Desenvolvimento
  - Design Gráfico
- Home com hero forte + cases em destaque
- Páginas de listagem com filtros por categoria
- Páginas de detalhes de case (profundidade técnica e de design)
- Integração dinâmica com GitHub para puxar repositórios
- Camada local de enriquecimento de projetos (`github-overrides.ts`)
- Estrutura escalável para conteúdo e crescimento futuro

## Arquitetura

```txt
src/
  app/
    [locale]/
      page.tsx
      development/
      design/
      about/
      contact/
    layout.tsx
    globals.css
    page.tsx
  components/
    layout/
    providers/
    sections/
    ui/
  data/
    development-projects.ts
    design-projects.ts
    github-overrides.ts
  lib/
    github.ts
    utils.ts
    i18n/
      config.ts
      dictionaries.ts
  types/
    project.ts
  proxy.ts
```

## Variáveis de ambiente

Crie um `.env.local` opcional:

```env
GITHUB_USERNAME=GodHercules
GITHUB_TOKEN=seu_token_opcional
NEXT_PUBLIC_CONTACT_PHONE_DISPLAY=+55 (11) 99999-9999
NEXT_PUBLIC_CONTACT_PHONE_RAW=+5511999999999
```

- `GITHUB_USERNAME`: usuário base para leitura de repositórios.
- `GITHUB_TOKEN`: melhora limites da API e acesso a dados conforme permissões do token.
- `NEXT_PUBLIC_CONTACT_PHONE_DISPLAY`: telefone exibido no site.
- `NEXT_PUBLIC_CONTACT_PHONE_RAW`: telefone sem máscara para `tel:` e WhatsApp.

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run start
```

## Escalabilidade de conteúdo

- Projetos de desenvolvimento: `src/data/development-projects.ts`
- Projetos de design: `src/data/design-projects.ts`
- Enriquecimento de repositórios GitHub: `src/data/github-overrides.ts`

Essa base já está pronta para migrar para JSON/MDX/CMS no futuro sem refatoração estrutural pesada.
