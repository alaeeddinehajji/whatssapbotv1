const { ICommand } = require('@libs/builders/command/command.builder')
const config = require('@config')
const axios = require('axios').default

/**
 * @type { ICommand }
 */
module.exports = {
    aliases: ['tt', 'ttdl'],
    category: 'tiktok',
    description: 'Tiktok Downloader',
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<link>',
    example: '{prefix}{command} https://vt.tiktok.com/ZSwWCk5o/',
    callback: async ({ msg, args }) => {
        const { data } = await axios.get(`https://api.akuari.my.id/downloader/tiktoknowm?link=${args[0]}`).catch(console.log)
        return msg.replyVideo({ url: data.result} )
        
    },
}
