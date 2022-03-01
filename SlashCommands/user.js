const { SlashCommandBuilder, time } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Informations About You!'),
    async execute(interaction) {
        const createdTime = interaction.user.createdAt;
        const JoinedTime = interaction.member.joinedAt;
        const embed = new MessageEmbed()
            .setColor('#ffffff')
            .setAuthor({ name: 'User Info', iconURL: 'https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024' })
            .setDescription('You Can See Informations About You!')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Account Created At', value: `${time(createdTime)}`, inline: true },
                { name: '\u200b', value: '\u200b', inline: true },
                { name: 'Account Joined Server At', value: `${time(JoinedTime)}`, inline: true },
            )
            .setImage('https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024')
            .setTimestamp()
            .setFooter({ text: 'Delta Bot', iconURL: 'https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024' });
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};