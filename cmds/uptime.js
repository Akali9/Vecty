const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'uptime',
    description: 'ping pong',

    async run(message, args, client) {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        const embed = new MessageEmbed()
            .setTitle("🟢 Vecty 🟢")
            .setColor("#00ff7b")
            .setDescription(`> ${days} Dni ${hours} Godzin ${minutes} Minut ${seconds} Sekund`)
            .setFooter('-= Vecty =-')
            .setTimestamp()
        message.reply({embeds: [embed] });
    }
});