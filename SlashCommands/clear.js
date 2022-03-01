const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:util').promisify(setTimeout);
module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clear Chat !')
        .addNumberOption(option => option.setName('number').setDescription('Amount of Messages you Want to Delete !').setRequired(true))
        .setDefaultPermission(false),
    async execute(interaction) {
        const amount = interaction.options.getNumber('number');
        const channel = interaction.channel;
        if (amount > 100 || amount <= 1) {
            interaction.reply('The Number Should Between 2 And 100');
            await wait(3000);
            interaction.deleteReply();
            return;
        }
        if (!channel) return;
        try {
            channel.bulkDelete(amount, true);
            interaction.reply(`Successfully Deleted ${amount} Messages`);
            await wait(3000);
            interaction.deleteReply();
        }
        catch (err) {
            if (err) throw err;
        }
    },
};