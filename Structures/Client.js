const Discord = require("discord.js")

const Command = require("./Command.js")

const fs = require('fs');

class Client extends Discord.Client {
    constructor(options) {
        super({ intents: [
            'GUILDS',
            'GUILD_MEMBERS',
            'GUILD_BANS',
            'GUILD_INTEGRATIONS',
            'GUILD_WEBHOOKS',
            'GUILD_INVITES',
            'GUILD_VOICE_STATES',
            'GUILD_PRESENCES',
            'GUILD_MESSAGES',
            'GUILD_MESSAGE_REACTIONS',
            'GUILD_MESSAGE_TYPING',
            'DIRECT_MESSAGES',
            'DIRECT_MESSAGE_REACTIONS',
            'DIRECT_MESSAGE_TYPING'
        ] });
    /**
     * @type {Discord.Collection<string, Command>}
     */
        this.commands = new Discord.Collection();
    }

}

module.exports = Client;