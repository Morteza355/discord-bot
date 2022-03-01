const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Get Information About What You Searched!')
        .addStringOption(option => {
            return option
                .setName('search')
                .setDescription('Type a Description To Search It In Urban !')
                .setRequired(true);
        }),
    async execute(interaction) {
        if (!interaction.isCommand()) return;
        await interaction.deferReply();
        const term = interaction.options.getString('search');
        const query = new URLSearchParams({ term });

        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
            .then(response => response.json());
        if (!list.length) {
            return interaction.editReply(`No results found for **${term}**.`);
        }
        interaction.editReply({ content: `**${term}**: ${list[0].definition}`, ephemeral: true });
    },
};