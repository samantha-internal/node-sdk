describe("dialogact API", () => {
  test("Statement-non-opinion", async () => {
    const input = "I'll probably go shopping today.";

    const result = await client.dialogact(input);

    expect(result).toBe("Statement-non-opinion");
  });

  test("Acknowledge (Backchannel)", async () => {
    const input = "Yeah";

    const result = await client.dialogact(input);

    expect(result).toBe("Acknowledge (Backchannel)");
  });

  test("Statement-opinion", async () => {
    const input = "I think it's not bad";

    const result = await client.dialogact(input);

    expect(result).toBe("Statement-opinion");
  });

  test("Agree/Accept", async () => {
    const input = "That is correct";

    const result = await client.dialogact(input);

    expect(result).toBe("Agree/Accept");
  });

  test("Appreciation", async () => {
    const input = "I can imagine.";

    const result = await client.dialogact(input);

    expect(result).toBe("Appreciation");
  });

  test("Yes-No-Question", async () => {
    const input = "Is that so?";

    const result = await client.dialogact(input);

    expect(result).toBe("Yes-No-Question");
  });

  test("Conventional-closing", async () => {
    const input = "Well see you later";

    const result = await client.dialogact(input);

    expect(result).toBe("Conventional-closing");
  });
});
