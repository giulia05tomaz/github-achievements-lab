export type Category = "food" | "transport" | "other";

export interface Expense {
  readonly category: Category;
  readonly amountCents: number;
}

export interface ExpenseSummary {
  totalCents: number;
  byCategory: Record<Category, number>;
}

/** Sum expenses in integer cents without mutating the input. */
export function summarizeExpenses(expenses: readonly Expense[]): ExpenseSummary {
  const summary: ExpenseSummary = {
    totalCents: 0,
    byCategory: { food: 0, transport: 0, other: 0 },
  };

  for (const expense of expenses) {
    if (!["food", "transport", "other"].includes(expense.category)) {
      throw new TypeError("Unknown expense category");
    }
    if (!Number.isSafeInteger(expense.amountCents) || expense.amountCents < 0) {
      throw new RangeError("Expense amount must be a non-negative safe integer in cents");
    }
    const nextTotal = summary.totalCents + expense.amountCents;
    if (!Number.isSafeInteger(nextTotal)) {
      throw new RangeError("Expense total exceeds the safe integer limit");
    }
    summary.totalCents = nextTotal;
    summary.byCategory[expense.category] += expense.amountCents;
  }

  return summary;
}
