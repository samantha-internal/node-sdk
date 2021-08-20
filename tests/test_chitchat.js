test("chitchat API", async () => {
  const input = "Hi there";
  const history = [];
  const {
    callChitchat: { result },
  } = await client.api.chitchat({ input, history });

  expect(result).toBe("Hiya!");
});
