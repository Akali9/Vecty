const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: 'ban',
    description: 'banuje',
    permission: 'BAN_MEMBERS',
    async run(message, args, client) {
        
        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.reply('🟢 Użytkownik został zbanowany. 🟩');
        }else{
            message.reply('🟩 Nie oznaczyłeś osoby, którą chcesz zbanować! 🟢');
        }
    }
});

