# Whitehead SDK

## Features

- Docs can be found [here](https://whitehead-ai.github.io/node-sdk).
- Typesafe queries. Written in typescript.
- Bindings are included in the package.
- Bindings for _reasonml/bucklescript/rescript_ and _flow.js_ coming soon.

## Installation and usage

### Install

`npm install @whitehead/sdk`

### Playground

This package ships with a CLI-based playground for quickly trying out queries and APIs.
You can call it directly if installed globally. You need to set `WHITEHEAD_DEVELOPER_ID` and `WHITEHEAD_API_KEY` environment variables for authentication.

```bash
npm i -g @whitehead/sdk

# Or if using yarn:
# yarn global add @whitehead/sdk

# Set auth variables; see the Developers section on the dashboard for this
export WHITEHEAD_DEVELOPER_ID=<developer_id>
export WHITEHEAD_API_KEY="<developer_api_key>"

whitehead-playground
```

#### Playground screenshot

![Playground screenshot](https://github.com/whitehead-ai/node-sdk/raw/main/assets/whitehead_playground_screenshot.png?raw=true "Playground screenshot")

### Usage as an SDK

```typescript
const { Whitehead } = require("@whitehead/sdk");

// If using esm:
// import Whitehead from "@whitehead/sdk/esm";

// Check the Developers section on the dashboard for this.
const developerId = 999;
const apiKey = "<64 letter api key from your whitehead dashboard>";

const client = new Whitehead: ({ developerId, apiKey });

// Start async block
(async () => {
  await client.initialize();

  // See API list for more info
  const result = await client.chitchat(input, history);
  console.log(result);

  // Do something with the result

})().then(
  console.log,
  console.error
);
```

## API list

### answer

Answer plain-language questions from a given context

```typescript
answer: (input: string, options: { context?: string | undefined }): string =>
  result;
```

### choose

Answer plain-language questions from a given context, including a set of documents

```typescript
choose: (input: string, options: { context?: string | undefined }): string =>
  result;
```

### chitchat

Conduct free-form chit-chat with your users

```typescript
chitchat: (input: string, options: { history: Turn[] }): string => result;
```

### dialogact

Tag dialog utterances with [dialog acts](https://en.wikipedia.org/wiki/Dialog_act)

```typescript
dialogact: (input: string): string => result;
```

### paraphrase

Takes an english sentence and produces paraphrased versions of it that retain the semantic meaning of the original.

```typescript
paraphrase: (input: string): string => result;
```

### relations

```typescript
relations: (input: string, options: { relation: Relation }): string[] => result;
```

### sensibility

Rank a list of inputs according to how sensible they are in a given context

```typescript
sensibility: (
  input: string,
  options: { history: Turn[] }
): { alternative: string; score: number }[] => result;
```

### sentiment

Takes plain English input and returns overall and sentence-level sentiment information. Represents positivity or negativity of the passage as a floating point value.

```typescript
sentiment: (input: string): { score: number; label: string } => result;
```

### similarity

Takes a target sentence and a list of other sentences to compare with for similarity. Returns an array of pairwise similarity scores.

```typescript
similarity: (
  input: string,
  options: { candidates: string[] }
): { candidate: string; score: number }[] => result;
```

### speak

Takes text (`string`) as input and returns audio encoded as a base64 string.

```typescript
speak: (input: string): string => result; // base64 encoded audio
```

### transcribe

Takes base64 encoded audio as input and returns a list of possible transcripts (sorted in order of decreasing confidence).

```typescript
transcribe: (input: string): string => result;
```

---

## Building

### Note on package style commonjs vs esm

- The `esm/` directory is marked as a nodejs-native ES module using `esm/package.json`

### Instructions for building package

- Edit files in `src/` directory
- Run `npm run build`
- Add test cases in `tests/` directory. File names need to start with `test_`.
- Make sure to set env vars: `export WHITEHEAD_DEVELOPER_ID=XX WHITEHEAD_API_KEY=XXX`
- Run `npm test`

### Instructions for publishing package

- If build successful, **before committing results**, run `npm run version bump`.
- `npm publish --access public`

### Instructions for updating docs

Docs are built using `typedoc` and published on github pages.

- Run `npm run docs`
- Commit all changes,
- Then `git checkout gh-pages` and `git merge <original-branch>`
- `git push origin gh-pages`

## Load testing

- Install GNU parallel command
- Run `NUM=100 npm run load-test`
