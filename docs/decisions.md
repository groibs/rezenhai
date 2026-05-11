# Decisões de produto e tecnologia

## Produto

- O MVP é web e mobile-first para reduzir fricção: convidado abre o link no navegador, sem baixar app.
- Pix é manual assistido: a plataforma mostra chave/valor e permite marcar “Já paguei”, mas não processa pagamento.
- WhatsApp é canal externo: o MVP facilita copiar link, mas não integra API oficial.
- Fotos são uma área simples do convite, não um feed social.

## Design

- O handoff em `rezenha-design-system/project` é referência visual e técnica.
- A interface usa fundo creme/papel, texto laje e Brasa como ação principal.
- Holo aparece como material expressivo em capas e destaques, com uso contido.
- Tipografia: Caprasimo para display e Bricolage Grotesque para UI, com fallbacks seguros.

## Tecnologia

- Next.js com App Router, TypeScript e Tailwind.
- Primeiro corte sem backend real: dados mockados e formulários de demonstração para validar fluxo e linguagem.
- Componentes ficam em `components/`; dados e constantes em `lib/`.
- Assets SVG de marca ficam em `public/brand/` para uso no app, preservando o handoff original.
