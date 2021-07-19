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

```javascript
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
  const result = await client.api.chitchat({ input, history });
  console.log(result);

  // Do something with the result

})().then(
  console.log,
  console.error
);
```

## API list

### api.parseContext

Takes a list of turns (`{ content: string }`) and parses them to produce a semantic frames-based context object.

```javascript
api.parseContext: (turns: [{ content: string }]) => {
  context {
    mentions [
      {
        evokes,
        phrase
      }
    ]
  }
}
```

### api.paraphraseSentence

Takes an english sentence and produces paraphrased versions of it that retain the semantic meaning of the original.

```javascript
api.paraphraseSentence: (sentence: string, count: Int = 3) => {
  paraphrases
}
```

### api.predictNextTurn

Takes a list of utterances as history and a list of possible alternatives that can be replied with. Returns the most likely alternative and confidence in that prediction.

```javascript
api.predictNextTurn: (history: [string], alternatives: [string]) => {
  nextTurn,
  confidence
}
```

### api.matchIntent

Takes a list of intents (with slots) and a user input. Performs structured information extraction to find the correct intent and fill the corresponding slots.

```javascript
api.matchIntent: (
  input: string,
  intent: [string],
  threshold: Float = 0.7
) => {
  matches [
    {
      intent,
      confidence,
      slots: [
        {
          slot,
          value,
          match_type,
          confidence
        }
      ]
    }
  ]
}
```

### api.measureSimilarity

Takes a target sentence and a list of other sentences to compare with for similarity. Returns an array of pairwise similarity scores.

```javascript
api.measureSimilarity: (sentence: string, compareWith: [string]) => {
  result {
    score,
    sentencePair
  }
}
```

### api.resolveCoreferences

```javascript
api.resolveCoreferences: (text: string) => {
  coref: {
    detected,
    resolvedOutput, // Rewritten input with all the coreferences resolved
    clusters: [
      {
        mention, // token(s) detected as a mention of an entity
        references: [
          {
            match,
            score
          }
        ]
      }
    ]
  }
}
```

### api.toVec

Takes an English text as an input and returns vector representation for passage, its sentences and entities if found.

```javascript
api.toVec: (text: string) => {
  has_vector,
  vector,
  vector_norm,
  sentences: {
    has_vector,
    vector_norm,
    vector,
    text
  }
  entities: {
    text,
    has_vector,
    vector_norm,
    vector
  }
}
```

### api.getSentiment

Takes plain English input and returns overall and sentence-level sentiment information. Represents positivity or negativity of the passage as a floating point value.

```javascript
api.getSentiment: (text: string) => {
  sentiment,
  sentences: {
    text,
    sentiment,
  }
}
```

### api.parseText

Takes some plain English input and returns parsed categories, entities and sentences.

```javascript
api.parseText: (text: string) => {
  categories: {
    label,
    score
  },
  entities: {
    label,
    lemma,
    text
  },
  sentences: {
    text,
    label,
    lemma
  }
}
```

### api.extractNumericData

Takes some text and extracts numeric references as a list of tokens with numeric annotations.

```javascript
api.extractNumericData: (text: string) => {
  tokens: [
    {
      numeric_analysis: {
        data, // numeric data
        has_numeric // does this token have numeric info?
      }
    }
  ]
}
```

### api.parseTextTokens

Takes some plain English string as input and returns a list of its tokens annotated with linguistic information.

```javascript
api.parseTextTokens: (text: string) => {
  tokens: [
    {
      dependency, // Type of dependency: PNP, VB ...
      entity_type, // Type of entity: PERSON ...
      is_alpha,
      is_currency,
      is_digit,
      is_oov, // is out of vocabulary
      is_sent_start,
      is_stop,
      is_title,
      lemma,
      like_email,
      like_num,
      like_url,
      part_of_speech, // verb, noun ...
      prob,
      tag,
      text
    }
  ]
}
```

### api.renderCSS

Takes ssml and corresponding styles as a css string. Returns base64 encoded audio.

```javascript
api.renderCSS: (ssml: string, css: string) => {
  result // base64 encoded audio
}
```

### api.speechToText

Takes base64 encoded audio as input and returns a list of possible transcripts (sorted in order of decreasing confidence).


```javascript
api.speechToText: (audio: string) => {
  transcript: [
    {
      text
    }
  ]
}
```

### api.textToSpeech

Takes text (`string`) as input and returns audio encoded as a base64 string.

```javascript
api.textToSpeech: (text: string) => {
  audio // base64 encoded audio
}

```

*****

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
