const { EmbedBuilder } = require('discord.js');
const client = require('../../Index');

client.on('guildMemberAdd', async (member) => {
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    const channel = guild.channels.cache.get(process.env.CHANNEL_ID);

//! IF YOU DON'T WANT ANY THINGS (LIKE DESCRIPTION OR TITLE) JUST REMOVE THAT LINE

    const embed = new EmbedBuilder()
        //! Place your title here
        .setTitle(`Title goes here`)
        //! Place your description (max 2000 characters) here
        .setDescription(`Description goes here`)
        //! Color in hex format (#00FF11)
        .setColor(`#00FF2D`)
        //! To add more fields use format below
        //! If you want fields to be inline use inline: true
        .addFields(
            { name: `Field #1`, value: `Value of Field #1`, inline: true },
            { name: `Field #2`, value: `Value of Field #2`, inline: false }
        )
        //! Text is for text, iconURL you can put like iconURL: 'yourLink'
        .setFooter({
            text: `Footer text goes here`,
            iconURL: member.user.displayAvatarURL({ dynamic: true })
        })
        //! You can also put .setThumbnail('yourLink')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))

    //! We are sending embed as welcome message in channel of your choice
    await channel.send({ embeds: [embed] });
})