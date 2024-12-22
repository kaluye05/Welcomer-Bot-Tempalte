const { ActivityType } = require('discord.js');
const client = require('../../Index');
const chalk = require('chalk');

client.on('ready', () => {
    console.log(chalk.redBright('made by kaluye05'));
    console.log(chalk.greenBright(`Logged in as: ${client.user.tag}`));
    console.log(chalk.cyanBright(`${client.guilds.cache.size} servers!`));
    console.log(chalk.cyanBright(`${client.users.cache.size} users!`));

    client.user.setPresence({
        activities: [{ name: `Made by kaluye05`, type: ActivityType.Playing }],
        status: 'online'
    })
});