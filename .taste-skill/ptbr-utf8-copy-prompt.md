# Prompt aplicado — revisão editorial pt-BR e UTF-8

## Goal

Audite todo o conteúdo exibido quando `locale === 'pt-BR'`, corrija ortografia, acentuação, concordância e pontuação em português brasileiro e garanta que a origem dos textos permaneça em UTF-8.

## Context

Projeto Next.js App Router em `C:\Users\PC\Documents\portfolio`, com conteúdo localizado em `src/lib/i18n`, `src/data`, `src/components` e respostas do assistente em `src/lib/portfolio-assistant.ts`. Inglês e espanhol devem permanecer semanticamente e linguisticamente inalterados.

## Scope

- Corrija apenas strings e comentários exibidos ao usuário em `pt-BR`, incluindo dicionários, perfil, cases, laboratório, contato, header, chatbot e respostas relacionadas.
- Preserve chaves, interpolação, arrays, rotas, contratos de dados, HTML/JSX e comportamento de troca de idioma.
- Use caracteres Unicode reais em UTF-8 (`á`, `ã`, `â`, `ç`, `é`, `ê`, `í`, `ó`, `ô`, `õ`, `ú`), sem trocar a codificação para entidades ou transliterações.
- Mantenha inglês e espanhol intactos, exceto se uma mudança estrutural for necessária para não quebrar o TypeScript.

## Constraints

Não reescreva o posicionamento, não invente informações, não altere o layout, não adicione dependências e não faça correções automáticas em identificadores, URLs, slugs, nomes próprios, marcas ou termos técnicos.

## Done

O texto pt-BR renderiza com acentuação correta em todas as rotas; a seleção `pt-BR` não altera inglês/espanhol; os arquivos continuam UTF-8; `npm run lint`, `npm run typecheck`, `npm run build` e uma inspeção Playwright das rotas principais passam.

Este prompt é para um agente com acesso real ao sistema. Revise os caminhos e o escopo antes de reutilizá-lo.
