// TODO: FIXME
test.skip("resolveCoreferences API", async () => {
  const input =
    "Trump said that he was the best President of America but his work said otherwise.";
  const {
    result: { coref },
  } = await client.api.resolveCoreferences({ input });

  expect(coref.detected).toBe(true);
});
