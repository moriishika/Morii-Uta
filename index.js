require('dotenv').config();
const Discord = require('discord.js');
const moriiuta = new Discord.Client();
const TOKEN = process.env.TOKEN;
const ytdl = require('ytdl-core-discord');
const fs = require('fs')

moriiuta.login(TOKEN);

moriiuta.on('ready', () => {
    console.info(`Logged in as ${moriiuta.user.tag}!`);
});

async function play(connection, url) {
  connection.play(await ytdl(url), { type: 'opus' });
}
moriiuta.on('message', async msg => {
    if(msg.content === "hello uta chan"){
        return msg.channel.send(`yahoooo 👋🎶 ${msg.author.username}-sama`)
    }

    if(msg.content.startsWith("uta chan sing")){
        const connection = await msg.member.voice.channel.join();
        const url = msg.content.split(" ");
        if(msg.member.voice.channel){
            play(connection, url[3])
        }
    }else if(msg.content.startsWith("uta chan arigatou")){
        const connection = await msg.member.voice.channel;
         msg.channel.send(`jaa naaa arigatou mina`)
        return connection.leave();
    }
})

// let channel = msg.member.voice.channel;
//         if(channel && channel.type === 'voice') {
//             channel.join()
//                 .then(connection => {
//                     done(connection);
//                 });
//         } else
//             error(`User isn't on a voice channel!`);
//     }