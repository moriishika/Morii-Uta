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

    executeCommand(command, args, msg) {
        if(msg.member.voice.channel){
            return this.list[command]({args, msg});
        }
        return message.send(params.msg, {title : 'join a channel'})
    }

    join(params){
        params.msg.member.voice.channel.join()
        message.send(params.msg, {title : `Hello Uta chan is here, let's sing along 🎶`})
    }

    disconnect(params){
            params.msg.member.voice.channel.leave();
            message.send(params.msg, {title : `Bye - bye arigatou 😥`})
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