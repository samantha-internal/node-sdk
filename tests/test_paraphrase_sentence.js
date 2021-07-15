test("paraphraseSentence API", async () => {
  const input = "I want to order a pizza.";
  const {
    result: { paraphrases },
  } = await client.api.paraphraseSentence({ input });

  expect(Array.isArray(paraphrases)).toBe(true);
  expect(paraphrases.length).toBeGreaterThan(0);
});
