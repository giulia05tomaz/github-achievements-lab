# Contrato do resumo de despesas

`summarizeExpenses` recebe uma lista somente para leitura de despesas e retorna um objeto novo com o total em centavos e os subtotais por categoria.

## Entradas

- `category`: `food`, `transport` ou `other`.
- `amountCents`: inteiro seguro, maior ou igual a zero.
- Uma lista vazia é válida e produz todos os totais zerados.

A lista e seus objetos não são modificados. As categorias sem despesas continuam presentes na saída com valor zero.

## Erros e limites

Uma categoria desconhecida lança `TypeError`. Um valor negativo, fracionário, não finito ou fora do limite de inteiro seguro lança `RangeError`. A função também rejeita uma soma acima de `Number.MAX_SAFE_INTEGER`, mesmo quando cada entrada isolada é válida.

Os valores representam centavos de uma única moeda escolhida pelo chamador. A função não mistura moedas, não converte câmbio e não interpreta textos monetários. Reembolsos negativos não fazem parte deste exemplo.

A entrada deve seguir o formato `Expense[]`: objetos ausentes ou incompletos não são aceitos. Para usar dados externos, valide o formato antes de chamar a função.

## Validação

`npm test` cobre lista vazia, agrupamento com entradas congeladas, valores inválidos, limite seguro, overflow da soma e categoria desconhecida.

O algoritmo percorre a lista uma vez: tempo O(n) e espaço adicional constante para as três categorias.
