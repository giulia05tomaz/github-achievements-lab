# Laboratório de Git e TypeScript

Laboratório pessoal para práticas de Git, GitHub, Pull Requests, TypeScript e CI/CD.

Um exemplo pequeno de resumo de despesas demonstra categorias tipadas, validação de entradas e testes automatizados. Todos os valores são fictícios e representados em centavos; o projeto não acessa serviços externos.

## Execução local

Requer Node.js 22 ou superior e npm.

```sh
git clone https://github.com/giulia05tomaz/github-achievements-lab.git
cd github-achievements-lab
npm ci
npm start
```

Saída esperada:

```json
{
  "totalCents": 4500,
  "byCategory": {
    "food": 4000,
    "transport": 500,
    "other": 0
  }
}
```

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm ci` | Instalar as versões do `package-lock.json` |
| `npm run build` | Compilar TypeScript e gerar JavaScript e declarações em `dist/` |
| `npm start` | Compilar e executar o exemplo |
| `npm test` | Compilar e rodar cinco testes com o test runner do Node.js |
| `npx tsc --version` | Conferir o compilador instalado |

## Tecnologias e estrutura

TypeScript com tipagem estrita e módulos ESM, Node.js e GitHub Actions. O CI executa os testes em Node.js 22 e 24 a cada PR e push para `main`.

```text
.github/workflows/ci.yml  # CI com permissões de leitura
docs/                    # Objetivos e contrato da função
src/index.ts             # Tipos e função summarizeExpenses
src/example.ts           # Exemplo com dados fictícios
test/expenses.test.mjs    # Testes de comportamento e limites
tsconfig.json            # Configuração de compilação estrita
```

`dist/` e `node_modules/` são gerados localmente e ignorados pelo Git.

## Uso da função

```ts
import { summarizeExpenses } from "./index.js";

const summary = summarizeExpenses([
  { category: "food", amountCents: 1500 },
  { category: "transport", amountCents: 500 },
]);
// summary.totalCents === 2000
```

O exemplo acima pode ser usado dentro de `src/`. O import termina em `.js` porque aponta para o arquivo emitido pela compilação ESM.

Leia [o contrato e os limites da função](docs/expense-summary.md) e [os objetivos de aprendizado](docs/learning-goals.md).

## Fluxo de trabalho

Uma Issue descreve uma tarefa concreta. A implementação é feita em uma branch própria, validada com `npm test` e apresentada em um Pull Request para `main`. Este laboratório permite praticar esse fluxo em um repositório pessoal independente.
