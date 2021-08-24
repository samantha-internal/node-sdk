describe("paraphrase API", () => {
  test("news summary", async () => {
    const input = `zairean rebels , led by laurent-desire kabila , on saturday rejected calls by the united nations for a ceasefire , saying it could only be called after talks
    with kinshasa .`;
    const result = await client.paraphrase(input);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[1]).toBe(
      "The united nations had called for a ceasefire, but the rebels said it could only be called after talks with kinshasa."
    );
  });

  test("article summary", async () => {
    const input = `Make it a priority to shower often in order to smell clean and avoid foul odors. Try to brush your teeth, comb your hair, and upkeep any other part
    of the body before leaving for school. Feeling fresh not only looks good, but you'll feel rejuvenated and confident.Most boys begin to have a more
    distinct body odor in middle school. Combat this by wearing deodorant. Avoid using strong colognes such as Axe unless it is in small proportions. If
    the smell is overbearing, ladies wont want to hang out too close. If you feel the need to use cologne, use it sparingly. Try choosing a deodorant that
    smells refreshing with a hint of musk.; , Image is important for first impressions. Don't give her the impression that you have a shabby personality
    because of your clothing. Upgrade some of your t-shirts, jeans, and button down shirts for nicer versions. Swap out your jeans for corduroy, slacks,
    or khakis. Grab some polos instead of a band t-shirt. Try out a flannel instead of hoodie.Even if your middle school requires uniforms, you can still
    pull off a sharp look by caring for your clothes. Do not let your clothes get shabby or smelly. As a general rule, don't wear a top more than one day.
    Pants should only be worn two to three times before a wash. While looks are not the only thing that matters, its often the first thing that a girl will
    notice about you. Confidence is something that girls can easily pick up on. Try setting small goals for yourself like learning the piano (middle school
    is the perfect age to begin an instrument). Exercise is another way to feel comfortable in your body and boost your self-esteem. You can reach a
    confident state of mind by dressing ... ... ...`;

    const result = await client.paraphrase(input);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBe(
      "It is important to shower frequently in order to smell clean and avoid foul odors."
    );
  });
});
