# Prompt aplicado — motion sistêmico e carregamento

## Goal

Atue como engenheiro frontend sênior de Next.js/React com Framer Motion e aplique um sistema consistente de carregamento e motion em todo o portfólio, preservando a animação de rolagem existente.

## Context

Projeto localizado em `C:\Users\PC\Documents\portfolio`, Next.js App Router, três idiomas (`pt-BR`, `en`, `es`) e rotas em `src/app/[locale]`. Use como referência o repositório `https://github.com/kylezantos/design-motion-principles` (nome correto: `design-motion-principles`), especialmente frequência da interação, continuidade, feedback, entradas/saídas sutis, `prefers-reduced-motion`, performance e anti-patterns de motion.

## Scope

Audite e implemente, usando as abstrações existentes antes de criar novas:

- skeleton acessível para carregamento de todas as rotas, idiomas e segmentos dinâmicos;
- lazy loading explícito para imagens e módulos não críticos;
- progresso de navegação e transições suaves de carregamento, entrada e saída;
- feedback de estado para menus, chatbot, filtros e conteúdo assíncrono;
- testes reais via Playwright em rotas e larguras 320, 390, 768, 1024, 1440 e 1920.

## Constraints

- NÃO alterar `Reveal`, sua configuração de viewport, nem a animação atual ao rolar para baixo ou para cima.
- Não animar layout (`width`, `height`, `top`, `left`, margens); prefira `transform`, `opacity`, `filter` e transições interrompíveis.
- Entradas podem combinar opacity + pequeno translate/blur; saídas devem ser mais sutis.
- Não adicionar pulse infinito, stagger em massa, hover-scale indiscriminado ou motion em texto estático sem propósito.
- Toda nova animação deve ter caminho para `prefers-reduced-motion: reduce`.
- Não adicionar dependências, não remover arquivos e não alterar conteúdo, rotas ou contratos de dados.

## Approval Boundaries

Edite somente arquivos de UI, loading e estilos necessários. Pare antes de apagar arquivos, adicionar dependências ou mudar a arquitetura.

## Done

`npm run lint`, `npm run typecheck`, `npm run build`, `git diff --check` e a auditoria Playwright passam; todas as rotas localizadas têm fallback de carregamento; o scroll reveal existente permanece sem alteração; entregue resumo de arquivos, evidências e limitações.

Este prompt é para um agente com acesso real ao sistema. Confirme caminhos, escopo e permissões antes de colar.
