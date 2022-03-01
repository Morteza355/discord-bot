const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Shows a Cat Picture'),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        interaction.editReply({ files: [file], ephemeral: true });
    },
};