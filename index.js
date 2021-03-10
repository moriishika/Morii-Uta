require('dotenv').config();
const { prefixs } = require('./config.json')
const Discord = require('discord.js');
const Commands = require('./commands/Command.js');
const ErrorHandler  = require('./commands/ErrorHandler.js');

const commands = new Commands();
const error  = new ErrorHandler();
const moriiuta = new Discord.Client();

const TOKEN = process.env.TOKEN;
const ytdl = require('ytdl-core-discord');

moriiuta.once('ready', () => {
    console.info(`Logged in as ${moriiuta.user.tag}!`);
});

moriiuta.on('message', async msg => {
    const args =  msg.content.slice(prefixs.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(msg.content.startsWith(prefixs)){
        for (comm in commands.list){
            if(comm === command.toLowerCase()){
                return commands.executeCommand(command, args);
            }
        }
        return error.message(command);
    }
})

moriiuta.login(TOKEN);


