describe("chitchat API", () => {
  test("interaction example", async () => {
    const input = "This is so difficult!";
    const history = [
      { user: "Does money buy happiness?" },
      {
        bot: "Depends how much money you spend on it.",
      },
      { user: "What is the best way to buy happiness?" },
      {
        bot:
          "You just have to be a millionaire by your early 20s, then you can be happy.",
      },
    ];

    const {
      callChitchat: { result },
    } = await client.api.chitchat({ input, history });

    expect(result).toBe("It's not that difficult. Just be a millionaire.");
  });

  test("commonsense questions example", async () => {
    const input = "Who is the first president of the United States?";

    const {
      callChitchat: { result },
    } = await client.api.chitchat({ input, history: [] });

    expect(result).toBe("George Washington");
  });

  test("philosophy questions example", async () => {
    const input = "What is the meaning of life?";

    const {
      callChitchat: { result },
    } = await client.api.chitchat({ input, history: [] });

    expect(result).toBe("To be a good boy.");
  });
});
