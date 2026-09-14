# Laboratório de Git e TypeScript

Laboratório pessoal para práticas de Git, GitHub, Pull Requests, TypeScript e CI/CD.

O projeto será um exemplo pequeno de resumo de despesas: valores inteiros em centavos, categorias tipadas e validação de entradas. Não utiliza dados pessoais nem serviços externos.

## Plano de aprendizado

- Configurar um projeto Node.js e TypeScript.
- Implementar e testar o cálculo de despesas.
- Documentar a execução e praticar alterações por Pull Requests.

Veja [os objetivos do laboratório](docs/learning-goals.md).

## Preparação local

Instale Node.js 22 ou superior (inclui npm). Em seguida:

```sh
git clone https://github.com/giulia05tomaz/github-achievements-lab.git
cd github-achievements-lab
npm ci
npx tsc --version
```

`npm ci` instala as versões registradas no arquivo `package-lock.json`. O último comando confirma a instalação do compilador. A implementação e seus scripts serão adicionados no próximo exercício.
