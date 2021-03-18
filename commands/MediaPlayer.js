const ytdl = require('ytdl-core-discord')
class Play {
    async play(...params) {
        this.dispatcher = params[0].play(await ytdl(params[1]), { type: 'opus' });
    }

    pause() {
        this.dispatcher ? this.dispatcher.pause() : console.log("error");
    }

    resume() {
        this.dispatcher ? this.dispatcher.resume() : console.log("error");
    }
}
module.exports = Play;