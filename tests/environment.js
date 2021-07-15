const NodeEnvironment = require("jest-environment-node");
const { Whitehead } = require("../");

class WhiteheadEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    const {
      WHITEHEAD_DEVELOPER_ID: developerId,
      WHITEHEAD_API_KEY: apiKey
    } = process.env;

    const client = new Whitehead({ apiKey, developerId: parseInt(developerId), });
    await client.initialize();

    this.global.client = client;
  }
}

module.exports = WhiteheadEnvironment;
