const { SlashCommandBuilder } = require('@discordjs/builders');
const quiz = require('../JSON/quiz.json');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('quiz')
        .setDescription('Get a Quiz and Answer It !'),
    async execute(interaction) {
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };
        await interaction.reply(item.question, { fetchReply: true })
            .then(() => {
                interaction.channel.awaitMessages({ filter, max: 1, time: 5000, errors: ['time'] })
                    .then(collected => {
                        interaction.followUp(`${collected.first().author} Got The Correct Answer`);
                    })
                    .catch(() => {
                        interaction.followUp('Time Over !');
                    });
            });
    },
};