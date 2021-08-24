describe("relations API", () => {
  test("PartOf", async () => {
    const input = "wheel";
    const relation = "PartOf";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("bicycle");
  });

  test("IsA", async () => {
    const input = "bread";
    const relation = "IsA";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("food");
  });

  test("AtLocation", async () => {
    const input = "jackhammer";
    const relation = "AtLocation";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("hardware store");
  });

  test("Causes", async () => {
    const input = "art";
    const relation = "Causes";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[2]).toBe("person to be happy");
  });

  test("CapableOf", async () => {
    const input = "news";
    const relation = "CapableOf";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("spread fast");
  });

  test("HasProperty", async () => {
    const input = "black hole";
    const relation = "HasProperty";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("very dangerous");
  });

  test("HasA", async () => {
    const input = "Europe";
    const relation = "HasA";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("many tourist attraction");
  });

  test("UsedFor", async () => {
    const input = "lithium";
    const relation = "UsedFor";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("make electricity");
  });

  test("HasPrerequisite", async () => {
    const input = "world peace";
    const relation = "HasPrerequisite";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[5]).toBe("cooperation between country");
  });

  test("HasLastSubevent", async () => {
    const input = "live";
    const relation = "HasLastSubevent";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("die");
  });

  test("HasSubevent", async () => {
    const input = "running";
    const relation = "HasSubevent";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("get tire");
  });

  test("MotivatedByGoal", async () => {
    const input = "going to the hospital";
    const relation = "MotivatedByGoal";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("go see doctor");
  });

  test("ReceivesAction", async () => {
    const input = "computer";
    const relation = "ReceivesAction";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[9]).toBe("program");
  });

  test("MadeOf", async () => {
    const input = "diamond";
    const relation = "MadeOf";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[2]).toBe("carbon");
  });

  test("SymbolOf", async () => {
    const input = "red";
    const relation = "SymbolOf";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("passion");
  });

  test("DefinedAs", async () => {
    const input = "banana";
    const relation = "DefinedAs";
    const result = await client.relations(input, { relation });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe("fruit of plant");
  });
});
