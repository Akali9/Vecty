const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'invite',
    description: 'ping pong',

    async run(message, args, client) {
        let newEmbed = new MessageEmbed()
  
        .setColor("#00ff7b")
        .setTitle("🟢 Zaproś mnie na swój serwer! 🟩")
        .setURL(
          "https://discord.com/oauth2/authorize?client_id=879981365729312791&scope=bot&permissions=805314622"
        )
        .setDescription(
          "Aby zaprosić mnie na własny serwer, użyj **kliknij wyżej**!"
        )
        .setFooter('-= Vecty =-')
        .setTimestamp()
  
      message.reply({ embeds: [newEmbed] });
    }
});