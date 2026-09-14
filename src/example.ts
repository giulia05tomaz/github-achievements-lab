import { summarizeExpenses, type Expense } from "./index.js";

const expenses: readonly Expense[] = [
  { category: "food", amountCents: 2590 },
  { category: "transport", amountCents: 500 },
  { category: "food", amountCents: 1410 },
];

console.log(JSON.stringify(summarizeExpenses(expenses), null, 2));
