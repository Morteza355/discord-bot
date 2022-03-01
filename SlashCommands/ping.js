const { SlashCommandBuilder, bold } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Shows Bot Ping (Latency)!'),
    async execute(interaction) {
        const SentMessage = await interaction.reply({ content: 'Pinging...', fetchReply: true, ephemeral: true });
        interaction.editReply({ content: `The Latency Is ${bold(SentMessage.createdTimestamp - interaction.createdTimestamp)}ms!`, ephemeral: true });
    },
};