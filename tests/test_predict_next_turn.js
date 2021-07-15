test("predictNextTurn API", async () => {
  const history = [
    { agent: "BOT", said: "Hi. Welcome to pizza hut." },
    { agent: "USER", said: "I want to order a pizza." },
    { agent: "BOT", said: "What size would you like?" },
    { agent: "USER", said: "What sizes are available?" },
  ];

  const input = [
    "Sorry but that's not on our menu",
    "We have small, medium and large sizes available",
    "I have added this to your cart",
  ];

  const {
    result: { nextTurns },
  } = await client.api.predictNextTurn({ history, input });

  const sorted = nextTurns.sort((a, b) => a.score - b.score);
  const predicted = sorted[sorted.length - 1];

  expect(predicted.alternative).toEqual(input[1]);
});
