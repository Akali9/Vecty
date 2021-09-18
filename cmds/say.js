const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'say',
    description: 'ping pong',
    permission: 'MANAGE_MESSAGES',
    async run(message, args, client) {
        message.delete()
        const say = message.content.slice(5).trim();
    message.channel.send(say);
    }
});