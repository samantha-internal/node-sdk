test("sentiment API", async () => {
  const input = "Today is a wonderful day";
  const {
    callSentiment: { result },
  } = await client.api.sentiment({ input });

  expect(result.length).toBeGreaterThan(0);

  const sentimentSample = result[0].score;
  expect(typeof sentimentSample).toBe("number");
});
