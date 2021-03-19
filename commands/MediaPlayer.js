const ytdl = require('ytdl-core-discord')
const yt_search = require('yt-search');
class Play {
    async play(...params) {
        try{
            console.log(params[1]);
            this.dispatcher = params[0].play(await ytdl(params[1]), { type: 'opus' });
        }
        catch(err){
            params[2].channel.send('' + err);
        }
    }

    pause() {
        this.dispatcher ? this.dispatcher.pause() : console.log("error");
    }

    resume() {
        this.dispatcher ? this.dispatcher.resume() : console.log("error");
    }

    stop(){
        this.dispatcher ? this.dispatcher.destroy() : console.log("error");
    }
}
module.exports = Play;