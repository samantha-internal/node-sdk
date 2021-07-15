test("conceptnet grounding API", async () => {
  const input = "Today is a wonderful day";
  const relation = "CapableOf";
  const {
    result: { predictions },
  } = await client.api.getConceptnetRelations({
    input,
    relation,
  });

  expect(predictions.length).toBeGreaterThan(0);
});
