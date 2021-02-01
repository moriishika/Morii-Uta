require('dotenv').config();
const Discord = require('discord.js');
const moriiuta = new Discord.Client();
const TOKEN = process.env.TOKEN;

const pesan = new Discord.Message();

moriiuta.login(TOKEN);

moriiuta.on('ready', () => {
    console.info(`Logged in as ${moriiuta.user.tag}!`);
});


moriiuta.on('message', async msg => {
    if(msg.content === "hello uta chan"){
        return msg.channel.send(`yahoooo 👋🎶 ${msg.author.username}-sama`)
    }

    if(msg.content.startsWith("uta chan play")){
        if(msg.member.voice.channel){
            const connection = await msg.member.voice.channel.join();
            const url = msg.content.split(" ");
            const dispatch = connection.play(url[3])
        }
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