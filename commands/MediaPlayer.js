const ytdl = require('ytdl-core-discord')
class Play {
    async play(dispatch, args) {
        this.dispatcher = dispatch.play(await ytdl(args[0]), { type: 'opus' });
    }

    pause() {
        this.dispatcher ? this.dispatcher.pause() : console.log("error");
    }

    resume() {
        this.dispatcher ? this.dispatcher.resume() : console.log("error");
    }
}
module.exports = Play;