const MediaPlayer = require('./MediaPlayer.js');
class Commands {
    constructor() {
        this.list = {
            play: new MediaPlayer().play,
            pause: new MediaPlayer().pause,
            resume: new MediaPlayer().resume,
            stop : new MediaPlayer().stop,
            dis: this.disconnect,
            help: this.help,
            skip: "skip",
            search: 'search',
            singList: 'singlist',
            lyrics: 'lyrics',
            info: 'info',
        }
    }

    executeCommand(connection, command, args, msg) {
        if(msg.member.voice.channel){
            return this.list[command](connection, args, msg);
        }
    }

    disconnect(...conn){
        conn[0].disconnect();
    }

    help(...msg) {
        msg[2].channel.send(`>>> **Uta chan is only able to do this 😖**
1. play [ url ] || song name is not available yet
2. pause
3. resume
4. help`)
    }
}

module.exports = Commands;