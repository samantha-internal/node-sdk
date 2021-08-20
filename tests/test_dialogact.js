test("dialogact API", async () => {
  const input = "I'll probably go shopping today.";

  const {
    callDialogact: { result },
  } = await client.api.dialogact({ input });

  expect(result).toBe("Statement-non-opinion");
});
