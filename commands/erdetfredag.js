const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("erdetfredag") 
        .setDescription("Svarer måske på spørgsmålet?"),
    async execute(interaction){
        await interaction.reply("Måske? Hvad ved jeg...");
    },
};
