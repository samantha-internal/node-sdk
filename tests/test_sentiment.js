describe("sentiment API", () => {
  test("positive", async () => {
    const input = "Today is a wonderful day";
    const result = await client.sentiment(input);

    expect(result.length).toBeGreaterThan(0);

    const sentimentSample = result[0].label;
    expect(sentimentSample).toBe("positive");
  });

  test("negative", async () => {
    const input = "I don't like the weather";
    const result = await client.sentiment(input);

    expect(result.length).toBeGreaterThan(0);

    const sentimentSample = result[0].label;
    expect(sentimentSample).toBe("negative");
  });

  test("neutral", async () => {
    const input = "This is my car";
    const result = await client.sentiment(input);

    expect(result.length).toBeGreaterThan(0);

    const sentimentSample = result[0].label;
    expect(sentimentSample).toBe("neutral");
  });
});
