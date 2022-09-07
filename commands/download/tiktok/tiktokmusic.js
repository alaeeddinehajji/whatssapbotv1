const { ICommand } = require('@libs/builders/command/command.builder')
const { lolhuman } = require('@libs/constants/api/api.constant')
const axios = require("axios").default

/**
 * @type { ICommand }
 */
module.exports = {
    aliases: ['tta', 'ttaudio', 'ttmp3', 'ttmusic'],
    category: 'tiktok',
    description: 'Tiktok Music Downloader',
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<link>',
    example: '{prefix}{command} https://vt.tiktok.com/ZSwWCk5o/',
    callback: async ({ msg, args }) => {
        const { data } = await axios.get(`https://api.akuari.my.id/downloader/tiktokaudio?link=${args[0]}`).catch(msg.reply('Error ngab ... '))
        return msg.replyAudio({url:data.result})
    },
}
