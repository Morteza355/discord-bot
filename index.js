require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
    ],
});

// Slash Commands //
const commands = [];
const commandFiles = fs.readdirSync('./SlashCommands').filter(file => file.endsWith('.js'));
client.commands = new Collection();
for (const file of commandFiles) {
    const command = require(`./SlashCommands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, commands));
    }
    else {
        client.on(event.name, (...args) => event.execute(...args, commands));
    }
}

client.on('guildCreate', () => {
    client.user.setActivity(`${client.guilds.cache.size} Servers || /help`, { type: 'WATCHING' });
});

client.on('guildDelete', () => {
    client.user.setActivity(`${client.guilds.cache.size} Servers || /help`, { type: 'WATCHING' });
});

client.login(process.env.TOKEN);