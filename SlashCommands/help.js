const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Commands - Help Section'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor({ name: 'Help Section', iconURL: 'https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024' })
            .setDescription('You Can get Commands!')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: '/help', value: 'Help Section', inline: true },
                { name: '/ping', value: 'Bot Latency', inline: true },
                { name: '/server', value: 'Server Description', inline: true },
                { name: '/user', value: 'User Description', inline: true },
            )
            .setImage('https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024')
            .setTimestamp()
            .setFooter({ text: 'Delta Bot', iconURL: 'https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024' });
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};