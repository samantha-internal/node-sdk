describe("sensibility API", () => {
  test("example", async () => {
    const history = [
      { bot: "Hi. Welcome to pizza hut." },
      { user: "I want to order a pizza." },
      { bot: "What size would you like?" },
      { user: "What sizes are available?" },
    ];

    const input = [
      "Sorry but that's not on our menu",
      "We have small, medium and large sizes available",
      "I have added this to your cart",
    ];

    const {
      callSensibility: { result },
    } = await client.api.sensibility({ history, input });

    console.log(result);

    const sorted = result.sort((a, b) => a.score - b.score);
    const predicted = sorted[sorted.length - 1];

    expect(predicted.alternative).toEqual(input[0]);
  });
});
