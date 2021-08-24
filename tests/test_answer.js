describe("answer API", () => {
  test("example", async () => {
    const input = "Which fruits can be worn on top of a kimono?";
    const context =
      "Some fruits, like bananas, can be worn on top of a kimono.";

    let result = await client.answer(input, { context });

    expect(result).toBe("bananas");
  });
});
