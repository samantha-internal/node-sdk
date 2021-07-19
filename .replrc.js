// .replrc.js
const lodash = require("lodash");
const chalk = require("chalk");

// Load module
const { Whitehead } = require("./");
const { ensureEnv } = require("./cjs/utils/ensureEnv");
const pkg = require("./package.json");

// Get API keys
ensureEnv("WHITEHEAD_DEVELOPER_ID", 1);
ensureEnv("WHITEHEAD_API_KEY", 1);

const { WHITEHEAD_API_KEY, WHITEHEAD_DEVELOPER_ID } = process.env;

// Create client
const client = new Whitehead({
  apiKey: WHITEHEAD_API_KEY,
  developerId: WHITEHEAD_DEVELOPER_ID
});

// Context
const clientPromise = client.initialize()
  .then(c => (console.clear(), c));
const apiPromise = clientPromise.then(c => c.api);

const context = {
  lodash,
  WHITEHEAD_API_KEY,
  WHITEHEAD_DEVELOPER_ID,
  Whitehead,
  pkg,

  // Authorize and return client
  client: clientPromise,
  api: apiPromise
};


// Theme
const theme = {
  heading: chalk.bold.yellow,
  link: chalk.underline.cyanBright,
  normal: chalk.white,
  code: chalk.greenBright,
  logo: chalk.bgYellowBright.black,
  codeTemplate: chalk.greenBright.italic.dim,
};

// Banner
const logo = theme.logo(`
•  ┌────────────────────────────────────┐  •
•  │   |\\\\/| /\\\\ |_| |\\\\| /\\\\   /\\\\ |   │  •
•  └────────────────────────────────────┘  •
`);

const title = theme.heading(`Welcome to ${theme.logo(" Whitehead ")} SDK playground!`);

const instructions = theme.normal(`To try out an api, simply run:`);
const code_sample = theme.code(
  `await api.${theme.codeTemplate("<api_name>")}({ ${theme.codeTemplate("<api_params>")} })`
);

const docs = theme.normal(
  `You can see the list of APIs at ${theme.link("https://github.com/whitehead-ai/node-sdk#readme")}`
);

const varsInfo = chalk.dim("Globals: " + theme.code(Object.keys(context).join(", ")));

const banner = `
${logo}

  ${title}
  ${instructions} ${code_sample}
  ${docs}

  ${varsInfo}
`;

const prompt = (context, pkg) => chalk`{dim ${pkg.name} ${pkg.version} > }`;

// REPL Config
console.log(chalk`{cyan.bold Logging you in...}`);

module.exports = {
  banner,
  prompt,
  context,
  enableAwait: true
};
