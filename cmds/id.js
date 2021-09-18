const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'id',
    description: 'id',
    async run(message, args, client) {
        let embed = new MessageEmbed()
        .setColor('#00ff7b')
        .setTitle('🟩 Twoje ID: 🟢')
        .setDescription(`${message.author.id}`)
        .setFooter('-= Vecty =-')
        .setTimestamp()

        message.reply({ embeds: [embed] });
    }
});