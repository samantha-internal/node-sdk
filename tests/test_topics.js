describe("topics API", () => {
  test("example", async () => {
    const input = "Some fruits, like bananas, can be worn on top of a kimono";
    const topics = ["banana", "rockets", "fashion"];

    const result = await client.topics(input, { topics });

    expect(result[0].topic).toBe("banana");
    expect(result[1].topic).toBe("fashion");
    expect(result[2].topic).toBe("rockets");
  });

  test("example 2", async () => {
    const input = "My item was not delivered. Can you please help?";
    const topics = ["missing package", "refund", "stolen package", "urgent"];

    const result = await client.topics(input, { topics });

    expect(result[0].topic).toBe("missing package");
    expect(result[1].topic).toBe("urgent");
    expect(result[2].topic).toBe("refund");
    expect(result[3].topic).toBe("stolen package");
  });
});
