const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: 'eval',
    description: 'eval',
    async run(message, args, client) {
        if(message.author.id !== "852182697723559936") return message.reply('❗ Nie jesteś Deweloperem bota ❗');

        const command = message.content.split(' ').slice(1).join(' ');
        message.reply(
        `\`\`\`js
        ${eval(command)}
        \`\`\``);
    }
});

