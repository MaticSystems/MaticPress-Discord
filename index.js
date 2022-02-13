require('dotenv').config();

const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on("ready", () => {
    Client.user.setActivity("vous informer !")
})

Client.login(process.env.DISCORD_TOKEN);