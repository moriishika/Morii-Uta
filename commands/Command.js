const MediaPlayer = require('./MediaPlayer.js');
class Commands {
    constructor() {
        this.list = {
            play: new MediaPlayer().play,
            pause: new MediaPlayer().pause,
            skip: "skip",
            resume: new MediaPlayer().resume,
            help: this.help,
            singList: 'singlist',
            lyrics: 'lyrics',
            info: 'info',
            dis: 'disconnect',
        }
    }

    executeCommand(connection, command, args, msg) {
        return this.list[command](connection, args, msg);
    }

    async help(...msg) {
        console.log(msg)
        msg[2].channel.send(`>>> **Uta chan is only able to do this 😖**
1. play [ url ] || song name is not available yet
2. pause
3. resume
4. help`)
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