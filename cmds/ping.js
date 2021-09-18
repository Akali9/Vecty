const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'ping',
    description: 'ping pong',

    async run(message, args, client) {
        const embed = {
            color: 0x00ff7b,
            title: '🟢 Vecty 🟢',
            description: `> Pong! 🏓 | **${client.ws.ping}**ms`,
            footer: { 
                text: "-= Vecty =-"
            },
            timestamp: new Date(),
        }
        
        message.reply({ embeds: [embed] });
    }
});