const MediaPlayer = require('./MediaPlayer.js');
const MessageHandler = require('./MessageHandler.js');
const message = new MessageHandler();
class Commands {
    constructor() {
        this.list = {
            play: new MediaPlayer().play,
            pause: new MediaPlayer().pause,
            resume: new MediaPlayer().resume,
            stop : new MediaPlayer().stop,
            search: new MediaPlayer().search,
            dis: this.disconnect,
            help: this.help,
            join: this.join,
            skip: "skip",
            singList: 'singlist',
            lyrics: 'lyrics',
            info: 'info',
        }
    }

    executeCommand(connection, command, args, msg) {
        if(msg.member.voice.channel){
            return this.list[command]({connection, args, msg});
        }
    }

    join(params){
        params.msg.member.voice.channel.join()
        message.send(params.msg, `Hello Uta chan is here, let's sing along 🎶`)
    }

    disconnect(params){
        params.connection.disconnect();
        message.send(params.msg, `Bye - bye arigatou 😥`)
    }

    help(params) {
        message.send(params.msg, `>>> **Uta chan is only able to do this 😖**
1. play [ url ] || song name is not available yet
2. pause
3. resume
4. help`)
    }
}

module.exports = Commands;