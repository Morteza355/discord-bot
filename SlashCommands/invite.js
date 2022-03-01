const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Get Invite Link of The Bot !'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Link')
                    .setStyle('LINK')
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=794297657052233728&permissions=8&scope=bot%20applications.commands'),
        );
        const embed = new MessageEmbed()
            .setColor('#000000')
            .setDescription('For Invite Delta Bot To Your Server Click The Button Below!')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .setImage('https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024')
            .setTimestamp()
            .setFooter({ text: 'Delta Bot', iconURL: 'https://cdn.discordapp.com/avatars/794297657052233728/77a3572b2098d61fc52711081d3df406.png?size=1024' });
        await interaction.reply({ ephemeral: true, embeds: [embed], components: [row] });
    },
};