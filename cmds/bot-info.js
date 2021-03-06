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
        title: '๐ฉ Info o bocie Spleffy: ๐ฉ',
        fields: [
            {
                name: '> ๐ Data utworzenia bota:',
                value: '02.09.2021',
            },    
            {
                name: '> ๐ Twรณrca bota:',
                value: 'Aszkali#2137',
            },
            {
                name: '> ๐ป Serwery',
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