test("sentiment analysis API", async () => {
  const input = "Today is a wonderful day";
  const { result } = await client.api.getSentiment({ input });

  expect(result.length).toBeGreaterThan(0);

  const sentimentSample = result[0].score;
  expect(typeof sentimentSample).toBe("number");
});
