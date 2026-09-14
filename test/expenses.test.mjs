import assert from "node:assert/strict";
import test from "node:test";
import { summarizeExpenses } from "../dist/index.js";

test("empty input returns all categories with zero", () => {
  assert.deepEqual(summarizeExpenses([]), {
    totalCents: 0,
    byCategory: { food: 0, transport: 0, other: 0 },
  });
});

test("groups repeated categories and preserves frozen input", () => {
  const expenses = Object.freeze([
    Object.freeze({ category: "food", amountCents: 2590 }),
    Object.freeze({ category: "transport", amountCents: 500 }),
    Object.freeze({ category: "food", amountCents: 1410 }),
    Object.freeze({ category: "other", amountCents: 0 }),
  ]);
  assert.deepEqual(summarizeExpenses(expenses), {
    totalCents: 4500,
    byCategory: { food: 4000, transport: 500, other: 0 },
  });
});

test("rejects negative, fractional, non-finite and unsafe amounts", () => {
  for (const amountCents of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => summarizeExpenses([{ category: "food", amountCents }]), RangeError);
  }
});

test("accepts the safe integer boundary but rejects an overflowing total", () => {
  assert.equal(summarizeExpenses([
    { category: "food", amountCents: Number.MAX_SAFE_INTEGER },
  ]).totalCents, Number.MAX_SAFE_INTEGER);
  assert.throws(() => summarizeExpenses([
    { category: "food", amountCents: Number.MAX_SAFE_INTEGER },
    { category: "transport", amountCents: 1 },
  ]), RangeError);
});

test("rejects unknown categories from untyped callers", () => {
  assert.throws(() => summarizeExpenses([{ category: "invalid", amountCents: 1 }]), TypeError);
});
