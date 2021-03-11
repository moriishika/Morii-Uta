const ytdl = require('ytdl-core-discord')
class Commands {
    constructor(){
        this.list = {
            play :  this.play,
            stop : 'stop',
            skip : 'skip',
            resume : 'resume',
            singList : 'singlist',
            lyrics : 'lyrics',
            info : 'info'
        }
    }

    executeCommand(connection, command, args){
        return this.list[command](connection, args);
    }

    async play(connection, args){
        let conn = await connection.member.voice.channel.join();
        if(connection.member.voice.channel){
            conn.play(await ytdl(args[0]), {type: 'opus'})
        }
    }
}

module.exports = Commands;

// Prep
// Mac Ayres
// Benny Sings
// Men I Trust
// Fyfe
// Haute
// Feist
// MoonChild
// Yellowstraps
// Phum Viphurit
// Daniel Caesar
// Bruno Major
// boy pablo
// Rex Orange County
// Jeff Bernat
// Rell (R&B singer)
// Sam Wills
// 92914
// Honne
// Tom Misch
// Summer Salt
// Far Caspian
// Clairo