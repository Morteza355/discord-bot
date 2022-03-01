module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        member.guild.channels.cache.get('897373173853614100').send(`${member.user} Has Joined Server ! (#Log)`);
    },
};