# Prompt aplicado — seletor de idioma

## Goal

Atualize o seletor de idioma do portfólio para ficar visualmente integrado ao destaque do título “HERCULES” e menos quadrado.

## Context

Projeto Next.js App Router em `C:\Users\PC\Documents\portfolio`. O componente está em `src/components/layout/locale-switcher.tsx`; os tokens de tema estão em `src/app/globals.css`. `--accent-text` é a cor usada pelo texto “HERCULES”: roxo no modo escuro e azul no modo claro.

## Scope

- Use `--accent-text` no idioma ativo, mantendo o contraste com `--bg`.
- Transforme o grupo e cada opção em pills arredondadas, com hover, focus e transição de cor refinados.
- Preserve rotas, labels, bandeiras, acessibilidade, i18n e `loading="lazy"` das imagens.
- Valide dark/light e larguras mobile e desktop no localhost.

## Constraints

Não altere a paleta global, o layout do header, o comportamento da troca de idioma ou outras animações do sistema. Não adicione dependências. Não use bordas quadradas nem altere o texto do portfólio.

## Done

O estado ativo usa exatamente o mesmo token visual do texto “HERCULES” em cada tema, o seletor tem acabamento arredondado sem clipping e `npm run lint`, `npm run typecheck`, `npm run build` passam.

Este prompt é para um agente com acesso real ao sistema. Revise o escopo e os caminhos antes de reutilizá-lo.
