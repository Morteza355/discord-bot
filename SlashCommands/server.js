const { SlashCommandBuilder, time } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Informations About Current Server !'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#ffffff')
            .setAuthor({ name: 'Server Info', iconURL: 'https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024' })
            .setDescription('You Can See Informations About Server!')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Server Name', value: `${interaction.guild.name}`, inline: true },
                { name: '\u200b', value: '\u200b', inline: true },
                { name: 'Total Members', value: `${interaction.guild.memberCount}`, inline: true },
                { name: 'Verifaction Level', value: `${interaction.guild.verificationLevel}`, inline: true },
                { name: '\u200b', value: '\u200b', inline: true },
                { name: 'Created At', value: `${time(interaction.guild.createdAt)}`, inline: true },
                { name: 'Server Id', value: `${interaction.guild.id}`, inline: true },
                { name: '\u200b', value: '\u200b', inline: true },
                { name: 'Boosts', value: `${interaction.guild.premiumSubscriptionCount
                }`, inline: true },
            )
            .setImage('https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024')
            .setTimestamp()
            .setFooter({ text: 'Delta Bot', iconURL: 'https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024' });
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};