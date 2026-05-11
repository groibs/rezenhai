# Rezenhaí

**Chama, envia, acontece.** Crie um convite, mande o link e veja quem vai.

Rezenhaí é um MVP web em Next.js + TypeScript + Tailwind para criação e compartilhamento de convites digitais informais no Brasil. O app está navegável em modo demo/mock: sem Supabase real, sem Pix automático e sem backend obrigatório.

## O que existe neste repositório

- `app/` — rotas do MVP web com App Router.
- `components/` — componentes reutilizáveis de UI.
- `lib/` — fonte única de dados mockados do convite demo.
- `docs/` — escopo, decisões, roadmap e setup.
- `public/brand/` — SVGs de marca usados pelo app.
- `rezenha-design-system/` — handoff visual e técnico usado apenas como referência.
- `Rezenhaí Design System-handoff.zip` — arquivo original do handoff, não extraído e não alterado.

## Rotas navegáveis

### Marketing

- `/` — landing page com links reais.
- `/como-funciona` — explicação do fluxo.
- `/exemplos` — modelos de convite.
- `/recursos` — recursos do MVP.
- `/churrascos` — categoria churrasco.
- `/aniversarios` — categoria aniversário.

### Criação

- `/criar` — redireciona para `/criar/tipo`.
- `/criar/tipo` — escolha do tipo de rolê.
- `/criar/capa` — escolha/troca de capa e upload mock.

### Evento demo

- `/eventos/demo/editar` — editor mock com salvar, organizar, prévia e publicar.
- `/eventos/demo/organizar` — cartões de Pix, Quem leva o quê, Perguntas, Acompanhantes, Aprovação e Fotos.
- `/eventos/demo/preview` — preview com copiar link, WhatsApp, página pública e dashboard.

### Página pública

- `/e/churras-dos-amigos` — convite público com “Você vai colar?” direto na página.
- `/e/churras-dos-amigos/fotos` — fotos da resenha, estado vazio e fotos mockadas.

### Dashboard

- `/dashboard` — lista de eventos demo.
- `/dashboard/demo` — métricas, convidados, Pix, checklist e ações rápidas.
- `/dashboard/demo/fotos` — fotos vistas por quem organiza.

### Autenticação mock

- `/entrar` — entrada mock para dashboard.
- `/cadastro` — cadastro mock para criar convite.

## Como testar o fluxo principal

1. Abra `/`.
2. Clique em **Criar meu convite**.
3. Escolha um tipo de rolê em `/criar/tipo` e continue.
4. Escolha uma capa em `/criar/capa`, teste **Trocar vibe** e **Subir imagem**, depois continue.
5. Edite o convite em `/eventos/demo/editar` e clique em **Salvar** para ver o toast “Convite salvo.”.
6. Abra **Organizar** e teste os toggles locais.
7. Vá para **Prévia**, copie o link e abra **Ver página pública**.
8. Em `/e/churras-dos-amigos`, escolha **Eu colo**, **Talvez** ou **Não colo** diretamente no bloco “Você vai colar?”.
9. Passe pelo stepper de nome, Pix manual, item para levar e confirmação final.
10. Abra **Ver fotos** e depois o dashboard em `/dashboard/demo`.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

## Dados demo

O convite demo usa dados centralizados em `lib/demo-data.ts`: título **Churras dos amigos**, data **Sáb, 27/07**, hora **19h30**, local **Laje da Bia**, contribuição **R$ 50**, quem chamou **Léo**, convidados, checklist e templates/capas.
