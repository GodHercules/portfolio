# Diagnóstico inicial — redesign premium

## Arquitetura identificada

- Next.js 16 com App Router, React 19 e TypeScript.
- Rotas localizadas em `src/app/[locale]`, com PT-BR, EN e ES.
- Tema global com `next-themes`; animações e transições existentes com Framer Motion.
- Conteúdo centralizado em `src/data`, com projetos de desenvolvimento, design, perfil e sinais do laboratório.
- Estilos globais em `src/app/globals.css`, Tailwind CSS e componentes reutilizáveis em `src/components`.
- Integração server-side com GitHub em `src/lib/github.ts`.
- Não existe camada dedicada de backend ou banco de dados; a tarefa permanece frontend-only.
- Assets reais disponíveis: fotografia em `public/assets/profile/hercules-profile.png`, monograma e artes SVG em `public/assets/projects/`.

## Baseline pré-alteração

- `npm run main-agent:verify`: bloqueado antes da execução dos checks porque o executável `eslint` não estava disponível; dependências locais ainda não estavam instaladas.
- Git: árvore limpa em `main`, sem alterações do usuário no início da tarefa.

## Preservar

- Rotas, localização, metadados SEO, dados profissionais, links de contato e integração GitHub.
- Fonte atual do nome Hercules (`font-display`, definida na configuração existente).
- Assets reais e conteúdo factual de `src/data`.
- Componentes de navegação, chatbot, filtros, cards e páginas de detalhe, modernizando estilos sem mudar contratos públicos.

## Modernizar

- Hero: composição editorial com tokens de movimento, background ASCII em canvas com fallback e entrada sequenciada do nome/conteúdo.
- Tecnologias: faixa contínua alimentada por dados reais de `profile.skillGroups`.
- Design: título com reveal mascarado e galeria circular expansível usando `designProjects`.
- Encerramento: fotografia e contatos em crachá 2D/3D-progressivo com fallback acessível; WebGL só se houver suporte seguro.
- Tipografia, superfícies, bordas, contraste, espaçamentos e microinterações nos dois temas.

## Dependências e decisões

- Reutilizar `framer-motion`, `next-themes`, `lucide-react` e CSS/canvas nativos já disponíveis.
- Evitar adicionar WebGL ou bibliotecas de carrossel/física sem necessidade; a experiência deve degradar de forma determinística e manter o conteúdo acessível.
- Instalar apenas o lockfile existente (`npm ci`) para habilitar verificação.

## Riscos

1. Canvas/WebGL e animações podem aumentar custo de inicialização, causar hidratação inconsistente ou prejudicar movimento reduzido.
2. Mudanças globais de tokens podem afetar todas as rotas localizadas e páginas de detalhe.
3. Galeria circular precisa permanecer utilizável por teclado e touch, sem overflow horizontal.
4. Conteúdo multilíngue precisa continuar tipado e não pode receber metadados inventados.

## Estratégia de implementação

1. Consolidar tokens semânticos e movimento reduzido.
2. Criar componentes isolados para ASCII, logo loop, masked heading, galeria e crachá.
3. Integrar as superfícies na home sem remover as seções existentes.
4. Centralizar tecnologias e projetos em dados tipados reutilizáveis.
5. Ajustar tipografia e responsividade globalmente.
6. Rodar lint, typecheck e build após cada fatia relevante; depois validar localhost, navegador e screenshots nos viewports exigidos.

## Testes e rollback

- Checks obrigatórios: `npm run lint`, `npm run typecheck`, `npm run build` e `npm run main-agent:verify` quando aplicável.
- Validação runtime: servidor local, resposta HTTP, console do navegador, interações de tema, galeria, crachá, teclado e movimento reduzido.
- Rollback: mudanças isoladas em componentes novos e integração da home; nenhum arquivo de ambiente ou asset original será sobrescrito.
