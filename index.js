const { Client, GatewayIntentBits } = require("discord.js")
require("dotenv/config")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})
console.log(process.env)
client.on("read", () => {
    console.log("The bot is ready")
})

client.login(process.env.TOKEN)