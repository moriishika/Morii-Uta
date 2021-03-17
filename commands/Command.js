const MediaPlayer = require('./MediaPlayer.js');
class Commands {
    constructor() {
        this.list = {
            play: new MediaPlayer().play,
            pause: new MediaPlayer().pause,
            skip: new MediaPlayer().skip,
            resume: new MediaPlayer().resume,
            singList: 'singlist',
            lyrics: 'lyrics',
            info: 'info'
        }
    }

    executeCommand(connection, command, args) {
        return this.list[command](connection, args);
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