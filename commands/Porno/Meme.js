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
    let text = "";
    axios
      .get(
        `https://kocakz.herokuapp.com/api/media/pornhub/search?query=${fullArgs}`
      )
      .then((res) => {
        for (var i = 0; i < res.data.res.results.length; i++) {
          text += `Title : ${res.data.res.results[i].title}\n`;
          text += `Link : ${res.data.res.results[i].link}\n\n`;
          i++;
        }
        return client.sendMessage(msg.from, {
          image: {
            url: "https://variety.com/wp-content/uploads/2018/06/pornhub-logo.jpg",
          },
          caption: text,
        });
      });
  },
};
