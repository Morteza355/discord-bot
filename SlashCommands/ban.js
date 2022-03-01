const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a User !')
        .addUserOption(option => option.setName('user').setDescription('Select User You Want To Ban !').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        if (!user) return;
        await interaction.deferReply();
        interaction.guild.members.ban(user);
        interaction.editReply(`${user} Has Banned From Server !`);
    },
};