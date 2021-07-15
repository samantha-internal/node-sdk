test("commonsense reasoning API", async () => {
  const input = "Today is a wonderful day";
  const category = "xAttr";

  const {
    result: { predictions },
  } = await client.api.commonsenseReasoning({
    input,
    category,
  });

  expect(predictions.length).toBeGreaterThan(0);
});
