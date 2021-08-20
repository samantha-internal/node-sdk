test("paraphrase API", async () => {
  const input = "I want to order a pizza.";
  const {
    callParaphrase: { result },
  } = await client.api.paraphrase({ input });

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});
