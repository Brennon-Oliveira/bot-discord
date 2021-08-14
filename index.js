const { Client, Intents } = require("discord.js");
const config = require("./config.json");
const commands = require("./utils/commands");
const prefix = "!";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
console.log(process.env.BOT_TOKEN);

(async () => {
  try {
    await client.login(config.BOT_TOKEN);
  } catch (err) {
    console.log(err);
  }
})();

client.on("message", function (message) {
  console.log(message);
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length).toLowerCase();
  const args = commandBody.split(" ");
  const command = args.shift();

  if (commands[command]) {
    const runCommand = commands[command];
    runCommand(message, args);
  } else {
    throw new Error("Command dont exist");
  }
});
