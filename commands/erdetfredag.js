const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("erdetfredag") 
        .setDescription("Er det fredag i dag?"),
    async execute(interaction){
        const d = new Date();
        let day = d.getDay();
        await interaction.reply(day == 5 ? "Ja, det er fredag!" : "Nej, det er ikke fredag!");
    },
};
