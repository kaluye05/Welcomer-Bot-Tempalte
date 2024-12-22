const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers
	], 
	partials: [
        Partials.Channel, 
        Partials.Message, 
        Partials.User, 
        Partials.GuildMember, 
        Partials.Reaction
    ]
});

module.exports = client;

fs.readdirSync('./Src/Handlers').forEach((handler) => {
    require(`./Src/Handlers/${handler}`)(client);
})

client.login(process.env.TOKEN);