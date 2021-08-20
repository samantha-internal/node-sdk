test("topics API", async () => {
  const input = "Some fruits, like bananas, can be worn on top of a kimono";
  const topics = ["banana", "rockets", "fashion"];

  const {
    callTopics: { result },
  } = await client.api.topics({ input, topics, allow_multiple: true });

  expect(result[0].topic).toBe("banana");
});
