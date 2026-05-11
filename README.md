# Rezenhaí

**Chama, envia, acontece.** Crie um convite, mande o link e veja quem vai.

Rezenhaí é um MVP web em Next.js + TypeScript + Tailwind para convites digitais de eventos informais no Brasil: churrasco, aniversário, jantar, jogos, karaokê e resenha de casa aberta.

## O que existe neste repositório

- `app/` — rotas do MVP web com App Router.
- `components/` — componentes reutilizáveis de UI.
- `lib/` — dados de demonstração do convite.
- `docs/` — escopo, decisões, roadmap e setup.
- `public/brand/` — SVGs de marca usados pelo app.
- `rezenha-design-system/` — handoff visual e técnico usado apenas como referência.
- `Rezenhaí Design System-handoff.zip` — arquivo original do handoff, não extraído e não alterado.

## Rotas principais

- `/` — landing page.
- `/criar` — editor web para criar convite.
- `/convite/churras-dos-amigos` — página pública do convite.
- `/dashboard/churras-dos-amigos` — dashboard do host.

## Setup rápido

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Comandos

```bash
npm run dev
npm run build
npm run typecheck
npm run lint
```

## Observação sobre dependências

O projeto foi estruturado manualmente para Next.js + TypeScript + Tailwind. Se o ambiente bloquear o registry npm com `E403`, siga o diagnóstico em `docs/setup.md` antes de tentar build ou desenvolvimento local.
