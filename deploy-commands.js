const { REST, Routes } = require("discord.js");
const fs = require("node:fs");
require("dotenv/config");

const commands = [];
// Grab all the command files from the commands directory
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const musicCommandFiles = fs.readdirSync("./commands/music").filter(file => file.endsWith(".js"));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			// Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID),
			// { body: commands },
            Routes.applicationCommands(process.env.CLIENTID),
            { body: commands },
		);


		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();