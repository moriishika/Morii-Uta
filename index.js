require('dotenv').config();
const Discord = require('discord.js');
const moriiuta = new Discord.Client();

const TOKEN = process.env.TOKEN;

moriiuta.login(TOKEN);

moriiuta.on('ready', () => {
    console.info(`Logged in as ${moriiuta.user.tag}!`);
  });

moriiuta.on('message', msg => {
    if(msg.content === "hello uta chan"){
        msg.channel.send(`yahoooo 👋🎶 ${msg.author.username}-sama`)
    }
})