test("similarity API", async () => {
  const input = "I want to order a pizza.";
  const candidates = ["It is a great day today.", "Can I have a pizza?"];

  const {
    callSimilarity: { result },
  } = await client.api.similarity({ input, candidates });

  const sorted = result.sort((a, b) => a.score - b.score);
  const mostSimilar = sorted[sorted.length - 1];

  expect(mostSimilar.candidate).toEqual(candidates[1]);
});
