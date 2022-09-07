const axios = require("axios");

/**
 * @type { ICommand }
 */
module.exports = {
  aliases: ["phub", "pornhub"],
  category: "other",
  description: "Porn Hub Search.",
  waitMessage: true,
  minArgs: 1,
  expectedArgs: "<link>",
  example: "{prefix}{command} Japan",
  callback: async ({ msg, fullArgs, client }) => {
    const axios = require("axios");

    /**
     * @type { ICommand }
     */
    module.exports = {
      aliases: ["golPing", "pornhub"],
      category: "other",
      description: "answer ping.",
      waitMessage: false,
      minArgs: 0,
      example: "{prefix}{command} sex",
      callback: async ({ msg, fullArgs, client }) => {
        msg.reply("pong");
        return client.sendMessage(msg.from, {
          image: {
            url: "https://variety.com/wp-content/uploads/2018/06/pornhub-logo.jpg",
          },
          caption: "text",
        });
      },
    };
  },
};
