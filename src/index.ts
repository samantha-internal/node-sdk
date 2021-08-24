import assert from "assert";

import Client from "./client";
import { getSdk, Turn, Relation } from "./generated/sdk";
import { withRetries } from "./utils/wrapper";

import type { Sdk } from "./generated/sdk";
import type * as types from "./generated/types";
import type { credentials } from "./client";

class Base {
  initialized: boolean;
  developerId: number;
  apiKey: string;
  client?: Client;
  _api?: Sdk;

  constructor({ developerId, apiKey }: credentials) {
    this.initialized = false;
    this.developerId = parseInt(developerId.toString());
    this.apiKey = apiKey;

    assert(this.developerId);
    assert(this.apiKey);
  }

  async initialize(): Promise<Base> {
    const { initialized, developerId, apiKey } = this;

    if (initialized) return this;

    this.client = await Client.create({ developerId, apiKey });
    this._api = getSdk(this.client, withRetries);
    this.initialized = true;

    return this;
  }

  public get api(): Sdk {
    const { initialized, _api } = this;

    if (!(initialized && _api)) {
      throw new Error("The SDK must be initialized first");
    }

    return _api;
  }
}

export class Whitehead extends Base {
  constructor({ developerId, apiKey }: credentials) {
    super({ developerId, apiKey });
  }

  async answer(input: string, options: { context?: string | undefined }) {
    const {
      callAnswer: { result },
    } = await this.api.answer({
      input,
      context: options.context,
    });

    return result;
  }

  async choose(
    input: string,
    options: { context?: string | undefined; choices: string[] }
  ) {
    const {
      callAnswer: { result },
    } = await this.api.choose({
      input,
      context: options.context,
      choices: options.choices,
    });

    return result;
  }

  async chitchat(input: string, options: { history: Turn[] }) {
    const {
      callChitchat: { result },
    } = await this.api.chitchat({ input, history: options.history });

    return result;
  }

  async dialogact(input: string) {
    const {
      callDialogact: { result },
    } = await this.api.dialogact({ input });

    return result;
  }

  async paraphrase(input: string) {
    const {
      callParaphrase: { result },
    } = await this.api.paraphrase({ input });

    return result;
  }

  async relations(input: string, options: { relation: Relation }) {
    const {
      callRelations: { result },
    } = await this.api.relations({ input, relation: options.relation });

    return result;
  }

  async sensibility(input: string, options: { history: Turn[] }) {
    const {
      callSensibility: { result },
    } = await this.api.sensibility({ input, history: options.history });

    return result;
  }

  async sentiment(input: string) {
    const {
      callSentiment: { result },
    } = await this.api.sentiment({ input });

    return result;
  }

  async similarity(input: string, options: { candidates: string[] }) {
    const {
      callSimilarity: { result },
    } = await this.api.similarity({ input, candidates: options.candidates });

    return result;
  }

  async speak(input: string) {
    const {
      callSpeak: { result },
    } = await this.api.speak({ input });

    return result;
  }

  async topics(input: string, options: { topics: string[] }) {
    const {
      callTopics: { result },
    } = await this.api.topics({ input, topics: options.topics });

    return result;
  }

  async transcribe(input: string) {
    const {
      callTranscribe: { result },
    } = await this.api.transcribe({ input });

    return result;
  }
}

export { types };

export default Whitehead;
