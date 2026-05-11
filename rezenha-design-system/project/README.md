# Rezenhaí — Design System

> **Chama, envia, acontece.**
> Crie um convite, mande o link e veja quem vai.

Rezenhaí é uma plataforma brasileira para criar convites digitais de eventos informais — churrasco, aniversário, resenha, casa aberta, jogos, karaokê, jantar. Resolve a bagunça do WhatsApp: confirmação perdida, Pix cobrado manualmente, ninguém sabe quem leva o quê, endereço/horário se perdem, fotos espalhadas no grupo.

O host cria o convite no Rezenhaí, manda o link, e os convidados confirmam direto pelo navegador — **sem precisar baixar app.**

---

## Manifest

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← agent-skill manifest (for Claude Code)
├── colors_and_type.css        ← all tokens (colors, type, spacing, radius, shadows)
├── assets/                    ← logos, fav-icons
├── preview/                   ← design system cards (Type / Colors / Spacing / Components / Brand)
└── ui_kits/
    ├── web/                   ← landing, editor, public event page (desktop + responsive)
    └── mobile/                ← guest flow, host dashboard (mobile-first)
```

## Source materials provided

- `uploads/rezenhai-logo.svg`, `rezenhai-logo-branco.svg` — wordmark (custom hand-drawn-feel script, organic curves, bold)
- `uploads/fav-icon.svg`, `fav-icon-branco.svg` — favicon (stylized hand/abstract glyph)
- `uploads/exemplos de capas de convite 1.png`, `2.png` — invite cover references (vibe board)
- `uploads/print partiful 1–3.png` — Partiful screens, **reference for category only** (landing structure, editor pattern, RSVP control). **Not for visual identity.**

---

## Product surfaces in scope

The design system supports these surfaces (MVP, all free):

**Marketing site** — Landing, Como funciona, Exemplos, Recursos, Churrascos, Aniversários
**Product (host)** — Criação de convite, escolha de capa/template, editor web, organização do evento, preview/publicação, dashboard do host
**Product (convidado)** — Página pública do evento, fluxo de confirmação (mobile), área de fotos da resenha

**Out of scope for MVP visuals** (do not design for these): monetização, planos pagos, Explore/mapa de eventos, Pix automático, split automático, marketplace, delivery, WhatsApp oficial automático, app nativo, capa por IA como recurso ativo, replay de fotos com música, chat interno, feed social.

---

## CONTENT FUNDAMENTALS

### Tone

Brasileiro, jovem, vibrante, **direto, com calor**. Conversa de grupo de WhatsApp, mas com capricho. Pensa "convite de amigo" — não "convite de RH".

- Você (sempre informal, nunca "vocês").
- Frases curtas. Verbos no presente. Imperativo amigável: "Chama a galera", "Manda o link", "Vê quem vai".
- Casing: **sentence case** em tudo. Botões e títulos NÃO usam Title Case. ("Criar meu convite", não "Criar Meu Convite").
- Sem ponto final em botões, chips, títulos de card. Ponto final apenas em frases corridas.
- Gírias com parcimônia — "colar", "resenha", "rolê" funcionam; evitar gírias regionais marcadas ou datadas.
- Português brasileiro (PT-BR). Nada de "small caps". Acentuação correta sempre.

### Termos que NÃO usamos

| ❌ Não usar          | ✅ Usar                          |
|---------------------|----------------------------------|
| RSVP                | Confirmação de presença          |
| Campos rápidos      | Adicionar ao convite             |
| Going / Maybe / No  | Eu colo / Talvez / Não colo      |
| Event               | Convite, rolê, resenha           |
| Host (na UI)        | "Quem chamou", "organiza"        |
| Guests              | Galera, convidados               |

### Microcopy de referência

- Hero: **"Chama, envia, acontece."** / "Crie um convite, mande o link e veja quem vai."
- CTA principal: **"Criar meu convite"**
- CTA convidado: **"Confirmar presença"** (no botão) / título da seção pra ele: **"Você vai colar?"**
- Pix: "Pix da resenha" • "Copiar chave" • "Já paguei"
- Checklist: "Quem leva o quê" • "Eu levo isso" • "Já tem alguém levando"
- Fotos: "Fotos da resenha" • Estado vazio: "Ainda não tem foto por aqui. Suba as primeiras quando a resenha começar."
- Confirmações: "Convite salvo." • "Link copiado." • "Presença confirmada." • "Foto enviada." • "Pix marcado como pago." • "Seu convite está pronto pra circular."
- Disclaimer fotos: "As fotos ficam visíveis para participantes do evento."

### Emoji policy

Emoji é parte da marca, mas tem hierarquia:
- **Sempre permitido**: nos botões de confirmação de presença (Eu colo 🔥 / Talvez 👀 / Não colo 🫠) — porque o host escolhe um "pack" de emoji.
- **Permitido em capas/templates**: porque a capa é expressão.
- **Permitido em chips de categoria**: 🥩 Churrasco, 🎂 Aniversário, 🪩 Karaokê, etc.
- **Não usar em**: nav, labels de form, mensagens de erro, microcopy de sistema, dashboards do host.

A meta é: emoji aparece onde tem festa; some onde tem trabalho.

### Numbers, datas, horários

- Datas: "Sáb, 27/07" no formato curto / "Sábado, 27 de julho" no formato longo. Sempre dia da semana antes da data quando há espaço.
- Horários: "19h" (sem h0 final), "19h30". Nunca "7:00 PM".
- Pix/valor: "R$ 50" (sem centavos quando inteiro). "R$ 49,90" (com vírgula, nunca ponto).
- Tabular-nums obrigatório em listas de valores e horários (`font-variant-numeric: tabular-nums`).

---

## VISUAL FOUNDATIONS

### Tensão central

> **Interface limpa segurando uma marca expressiva.**

A regra de ouro do sistema: **uma fonte de cor/expressão por tela.** O fundo é creme ou laje, a tipografia é grotesca quase neutra, e UMA cor (Brasa, Festa, Lima ou Aqua) carrega a energia. As capas de convite são onde a marca explode — o resto da interface segura.

### Paleta — seis pilares

| Token         | Valor                         | Função                                                                  |
|---------------|-------------------------------|--------------------------------------------------------------------------|
| **Laje 950**  | `#0A0A0A` (preto)             | Texto primário, fundos "noite", contraste anchor                         |
| **Creme 50**  | `#EFEAE0` (off-white quente)  | Fundo padrão — **não usar branco puro como bg**                          |
| **Prata 500** | `#B5B3B2` (silver neutro)     | Estados neutros — talvez, item já escolhido, dividers, "off"             |
| **Brasa 500** | `#F4571A` (laranja fogo)      | **PRIMARY** — todos os CTAs principais, focos, ações de host             |
| **Lima 500**  | `#CCEC2A` (verde-lima)        | Confirmado, pago, "Eu colo", success                                     |
| **Holo**      | gradiente iridescente         | **Material** especial — capas, momentos de marca, festa, premium-fofo    |

**Holo** é a peça única do sistema. É um material, não uma cor chapada: gradiente pink → lilac → cyan → mint → peach. Usar em:
- Capas e templates de convite (sempre que a vibe pedir "festa premium")
- Botão "Trocar vibe" no editor
- Cards de destaque na landing
- Splash/hero da marca
Texto sobre Holo: **sempre Laje 950**. Nunca branco sobre holográfico — perde legibilidade.

Regras de uso:
- **Rule of one**: por tela, uma cor-protagonista (Brasa OU Holo) + neutrais. Lima entra como **status**, não decoração.
- Brasa nunca convive com Holo como background na mesma seção. Brasa é botão; Holo é capa.
- Prata é o "trabalho silencioso" — chips desativados, talvez, dividers, números secundários.
- Erro do sistema: `#D7263D` — vermelho funcional, **não é da marca**, usar só em destrutivos.
- Texto sobre Brasa: Creme 50 (branco off). Texto sobre Lima/Prata/Holo: Laje 950.

### Tipografia

| Família                     | Uso                                                | Pesos comuns |
|-----------------------------|----------------------------------------------------|--------------|
| **Caprasimo**               | Display "marca falando" — hero, capas, momentos     | 400 (regular, é a única)   |
| **Bricolage Grotesque**     | UI, body, headings de produto                       | 400, 500, 600, 700, 800 |
| **JetBrains Mono**          | Números em tabelas, códigos Pix, datas em chip     | 400, 500     |

**Caprasimo** entra no hero da landing, em headlines de marketing e em algumas capas — não em UI corrida. Tudo que é botão, label, input usa **Bricolage**.

⚠️ **Substituição flagada**: o wordmark Rezenhaí é uma letra customizada. Não recebemos a fonte de origem (se ela existir). Caprasimo é a Google Font mais próxima do espírito — bolda, com terminais arredondados, ar premium-amigável. **Se houver uma webfont da marca, substituir `--font-display`.**

### Backgrounds & superfícies

- **Padrão**: fundo Creme 50 sólido. Nada de gradientes purpurinos. Nada de blobs de Photoshop.
- **Acento de fundo**: um único "anel" de cor (Festa, Brasa ou Lima) aparece atrás de hero ou capa — formato orgânico, sutil, blur generoso.
- **Cards**: Papel sobre Creme. Borda de 1px Laje 200 + shadow soft. Cantos 20px (card), 28px (cards grandes / cover).
- **Capas de convite**: full-bleed image, sempre 4:5 (mobile-first) ou 16:9 (compartilhamento WhatsApp). Permitem expressão total — colagem, tipografia grande, cor saturada.

### Hover, press, focus

- **Hover**: 100ms → cor escurece 1 stop (Brasa 500 → 600). Em cards, levanta 2px com sombra crescendo de `--shadow-card` para `--shadow-pop`.
- **Active/press**: scale 0.97, 80ms. Sem mudança de cor.
- **Focus**: ring de 3px da cor Brasa em 40% opacity. NUNCA outline azul nativo.
- **Disabled**: opacidade 0.4, cursor not-allowed.

### Animação

- Easing padrão: `cubic-bezier(0.2, 0.7, 0.2, 1)` ("ease-out-soft").
- Easing de entrada de capa: `cubic-bezier(0.34, 1.56, 0.64, 1)` ("bounce-soft"). Discreto — overshoot de 4% no máximo.
- Durações: 120ms (micro), 200ms (padrão), 360ms (transição de tela).
- **Nunca**: efeito typewriter no hero. Bounce excessivo. Confetti automático.

### Bordas, sombras, profundidade

- Borda padrão: 1px Laje 200. Borda forte (input em foco): 2px Laje 900.
- Sombras são **quentes** (tint laje 900, baixa opacidade), nunca cinza-azulado:
  - `--shadow-soft`: card calmo
  - `--shadow-card`: card padrão
  - `--shadow-pop`: card em hover ou destaque
  - `--shadow-cover`: capa de convite isolada
- **Sem inner shadows pesadas.** Inset usado só pra dar um leve highlight branco no topo de capas escuras.

### Transparência & blur

- Blur usado em **um** lugar canônico: bottom-sheet de mobile e nav sticky (backdrop-filter: blur(16px) sobre fundo Creme @ 70%).
- Transparência em chips selecionados (Brasa @ 12% como pill bg).
- Glassmorphism geral? **Não.** Não é Apple, é resenha.

### Imagery — vibe

- Capas têm cara de **convite analógico digitalizado**: papel, fita crepe, marca-texto, polaroid, sticker recortado, foto de festa com flash, textura de carvão, neon de boteco, brilho de bola disco. Mistura controlada — uma textura por capa, não cinco.
- Foto de gente real preferida a vetor genérico. Quando vetorial, ilustração com traço grosso, encorpada, cor chapada.
- Sem stock corporativo. Sem ilustração 3D-plastificada. Sem bandeira do Brasil. Sem caricatura carnavalesca.

### Layout

- **Container max**: 1200px (marketing), 1080px (app), 640px (página pública mobile-style).
- **Grid desktop**: 12 colunas, 24px gutter, 80px margem.
- **Grid tablet**: 8 colunas, 20px gutter.
- **Grid mobile**: 4 colunas, 16px gutter, 16px margem.
- Seções respiram: 80–120px de espaço vertical entre seções em marketing; 32–48px em app.

### Corner radius philosophy

- Inputs: 8–12px (sm/md).
- Buttons: 12px (default) ou full (pill) — pill é mais "Rezenhaí".
- Cards: 20px padrão, 28px para cards de template, 36px para covers grandes.
- Chips: full.
- **Nunca** mistura cantos quadrados com arredondados na mesma tela. Sistema sempre arredondado.

---

## ICONOGRAPHY

Direção de ícones: **traço médio, cantos arredondados, leve "carinho" — nunca clínico.**

- **Sistema principal**: [Lucide Icons](https://lucide.dev) (via CDN). Stroke 1.75–2px, lineJoin round, color: currentColor. É o set padrão do produto.
- **Logos**:
  - `assets/rezenhai-logo.svg` — wordmark Laje 950, full word
  - `assets/rezenhai-logo-branco.svg` — wordmark Creme/branco
  - `assets/fav-icon.svg` / `fav-icon-branco.svg` — glyph isolado, usado em favicon, splash, app icon
- **Emoji** como ícone: somente em contextos sociais (chips de categoria, RSVP packs, capas). Nunca em ícone funcional do sistema.
- **Unicode chars como ícone**: não. Sempre SVG.
- **Custom illustrations**: capas de template (categoria, vibe, festa). Sempre flat ou foto, nunca gradient-soup.

⚠️ **Não recebemos icon set proprietário** — o sistema está usando Lucide como substituição. Se Rezenhaí desenvolver um ícone set próprio, substituir as referências CDN.

---

## Index — onde encontrar o quê

| Arquivo                                | Conteúdo                                                    |
|----------------------------------------|-------------------------------------------------------------|
| `colors_and_type.css`                  | Todos os tokens (CSS variables) prontos para implementar    |
| `assets/`                              | Logos SVG (4 arquivos)                                      |
| `preview/`                             | Cards do design system (renderizados na aba Design System)  |
| `ui_kits/web/index.html`               | UI kit web — landing, editor, página pública                |
| `ui_kits/mobile/index.html`            | UI kit mobile — fluxo convidado, dashboard host             |
| `SKILL.md`                             | Manifest pra usar como Agent Skill no Claude Code           |

---

## Próximos passos depois deste handoff

1. Substituir a fonte display caso surja a webfont oficial do Rezenhaí.
2. Definir icon set próprio ou confirmar Lucide como padrão.
3. Levar tokens deste arquivo CSS para Figma Variables, montar o arquivo Figma com as variants demonstradas em `ui_kits/`.
4. Codificar componentes em Next.js + Tailwind, mapeando tokens 1:1 com `tailwind.config.ts`.
