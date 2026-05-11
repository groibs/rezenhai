# Setup

## Requisitos

- Node.js 20 ou superior.
- npm com acesso ao registry público `https://registry.npmjs.org/`.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
```

## Diagnóstico de npm

Se o npm falhar com `E403`, confira registry e proxy:

```bash
npm config get registry
npm config list
npm config get proxy
npm config get https-proxy
find .. -name .npmrc -print
```

O registry esperado é `https://registry.npmjs.org/`. Proxies definidos por variáveis de ambiente podem bloquear o acesso ao registry dependendo do ambiente.
