test("relations API", async () => {
  const input = "Today is a wonderful day";
  const relation = "CapableOf";
  const {
    callRelations: { result },
  } = await client.api.relations({
    input,
    relation,
  });

  expect(result.length).toBeGreaterThan(0);
});
