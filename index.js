require('dotenv').config();
const { prefixs } = require('./config.json')
const Discord = require('discord.js');
const Commands = require('./commands/Command.js');
const ErrorHandler  = require('./commands/ErrorHandler.js');

const commands = new Commands();
const error  = new ErrorHandler();
const moriiuta = new Discord.Client();
const TOKEN = process.env.TOKEN;

moriiuta.once('ready', () => {
    console.info(`Logged in as ${moriiuta.user.tag}!`);
});

moriiuta.on('message', async msg => {
    const args =  msg.content.slice(prefixs.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(msg.content.startsWith(prefixs) && command !== ''){
        for (comm in commands.list){
            if(comm === command.toLowerCase()){
                let connection = await msg.member.voice.channel.join();
                return commands.executeCommand(connection, command, args);
            }
        }
        return error.message(msg, command);
    }
})

moriiuta.login(TOKEN);


