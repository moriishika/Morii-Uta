require('dotenv').config();
const { prefixs } = require('./config.json')
const Commands = require('./commands/Command.js');
const Discord = require('discord.js');
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
                return commands.executeCommand(connection, command, args, msg);
            }
        }
        return error.message(msg, `Gommen Uta-chan can't understand this command 😥 : **$${command}**`);
    }
})

moriiuta.login(TOKEN);


