const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'pomoc',
    description: 'pomoc',
    async run(message, args, client) {
        const embed = {
            color: 0x00ff7b,
            title: '🟢 Pomoc Bota Vecty 🟢',
            thumbnail: {
            url:    'https://cdn.discordapp.com/attachments/867392495646277654/882964475630735380/v3cty.png',
            },
            fields: [
                {
                    name:  '> <:dev:876104922444202024> Deweloperskie:',
                    value: 'v!eval |'
                },
                {
                    name: '> 🤖 Bot:',
                    value: 'v!bot-info | v!donate | v!invite | v!uptime |',
                },
                {
                    name: '> 🛠 Moderacyjne:',
                    value: 'v!ban | v!kick | v!say |'
                },
                {
                    name: '> 🤣 4FUN:',
                    value: 'v!8ball | v!ping |',
                },
                {
                    name: '> 📌 Informacyjne:',
                    value: 'v!avatar | v!id | v!server-info | v!user-info |',
                },
                {
                    name: '> <:djs:874365505442558032> Biblioteka bota:',
                    value: 'Discord.JS v13'
                }
            ],
            footer: { 
                text: "-= Vecty =-"
            },
            timestamp: new Date(),
        }
        
        message.reply({ embeds: [embed] });
    }
});
