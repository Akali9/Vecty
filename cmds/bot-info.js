const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'bot-info',
    description: 'bot-info',
    async run(message, args, client) {
        const embed = {
        color: 0x00ff7b,
        thumbnail: {
        url:    'https://media.discordapp.net/attachments/867392495646277654/882964475630735380/v3cty.png',
        },
        title: '🟩 Info o bocie Spleffy: 🟩',
        fields: [
            {
                name: '> 📅 Data utworzenia bota:',
                value: '02.09.2021',
            },    
            {
                name: '> 💚 Twórca bota:',
                value: 'Aszkali#2137',
            },
            {
                name: '> 💻 Serwery',
                value: `${client.guilds.cache.size}`,
            },
        ],
        footer: {
            text: '-= Vecty =-'
        },
        timestamp: new Date(),
    }

        message.reply({ embeds: [embed] });
        }
})