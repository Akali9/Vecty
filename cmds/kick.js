const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: 'kick',
    description: 'kickuje',
    permission: 'KICK_MEMBERS',
    async run(message, args, client) {
        
        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.reply('🟢 Użytkownik został wyrzucony z serwera. 🟩');
        }else{
            message.reply('🟩 Nie oznaczyłeś osoby, którą chcesz wyrzucić z serwera! 🟢');
        }
    }
});

