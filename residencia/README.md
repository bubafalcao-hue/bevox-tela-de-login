# BEVOX — Plataforma de Gestão B2B

Frontend da Residência Tecnológica FICR :: Motiron 2026.2 — sistema de gestão B2B para a
Adega Distribution, seguindo o Documento de Visão e Design System do BEVOX.

## Stack

Next.js 16 (App Router) · TypeScript estrito (sem `any`) · Tailwind CSS v4 ·
React Hook Form + Zod

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000 — a rota raiz redireciona para `/login`.

Para testar o login: qualquer e-mail terminado em `@adegadistribution.com` com senha de
6+ caracteres autentica com sucesso (autenticação simulada — ver
`src/app/login/page.tsx`). Qualquer outro domínio dispara o feedback visual de erro.

## O que já está implementado

- **`/login`** — formulário de acesso com validação de schema (Zod) por campo e feedback
  visual explícito de sucesso e de erro, conforme exigido na seção 3 do Documento de
  Projeto da Residência.
- **`/dashboard`** — placeholder de destino pós-login (a tela de indicadores é a próxima
  etapa do escopo).
- **Componentes reutilizáveis** (`src/components/ui`): `Button`, `Input`, `Logo`.
- **Tokens de design** em `src/app/globals.css`, seguindo a paleta oficial do BEVOX
  (Azul Meia-Noite `#0A192F` predominante, Azul e Verde de destaque, Âmbar/Vermelho para
  alertas).

## Próximos passos (escopo da Residência)

- Dashboard com indicadores gerais (unidades, documentos, tarefas pendentes) e
  atualização em tempo real.
- Lista de Unidades com busca, filtros e paginação.
- Detalhamento de Unidade (documentos e tarefas vinculados).
- Lista de Documentos com status derivado da data de validade (válido / próximo do
  vencimento / expirado).
- Lista de Tarefas (Pendente / Em andamento / Concluída), com confirmação obrigatória
  para concluir.
- Mocks cobrindo os diferentes estados de unidades, documentos e tarefas.
