const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'server-info',
    description: 'si',

    async run(message, args, client) {
        var members = await message.guild.members.fetch();

        //GETTING THE AMOUNT OF BOTS
        var botSize = members.filter(member => member.user.bot).size;
        //GETTING THE AMOUNT OF USERS
        var userSize = message.guild.memberCount - botSize;
        
        //FORMAT guild.createdAt DATE
        var dd = message.guild.createdAt.getDate();
        var mm = message.guild.createdAt.getMonth()+1; 
        var yyyy = message.guild.createdAt.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;

        var createdAt = dd+'/'+mm+'/'+yyyy;

        const server_embed = new MessageEmbed()
            .setTitle(message.guild.name)
            .setThumbnail(message.guild.iconURL())
            .setColor('#00ff7b')
            .setDescription(`\`👤\` \`Założyciel\` **- <@${message.guild.ownerId}>**\n\`🙂\` \`Użytkownicy\` **- \`${message.guild.memberCount}\`**\n\n\`🤖\` \`Boty\` **- \`${botSize}\`**\n\`\🎉\` \`Ilość Ról\` **-** \`${message.guild.roles.cache.size}\`\n\`📆\` \`Stworzony\` **- \`${createdAt}\`**`)
            .setTimestamp()
            .setFooter('-= Vecty =-')
        return message.reply({ embeds: [server_embed] })

        //HERE'S EVERYTHING THE GUILD OBJECT GIVES YOU:
        //https://discord.com/developers/docs/resources/guild

    },
});