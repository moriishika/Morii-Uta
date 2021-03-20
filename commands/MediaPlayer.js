const ytdl = require('ytdl-core-discord')
const yt_search = require('yt-search');
const ErrorHandler = require('./ErrorHandler.js');
const error = new ErrorHandler();

class Play {
    async play(params) {
        try{
            let song  = await yt_search(...params.args);
            this.dispatcher = params.connection.play(await ytdl(params[1]), { type: 'opus' });
        }
        catch(err){
            error.message(params.msg, err.toString())
        }
    }

    pause(params) {
        this.dispatcher ? this.dispatcher.pause() : error.message(params.msg, "You should request me a song master 😃");
    }

    resume(params) {
        this.dispatcher ? this.dispatcher.resume() : error.message(params.msg, "You should request me a song master 😃");
    }

    stop(params){
        this.dispatcher ? this.dispatcher.destroy() : error.message(params.msg, "You should request me a song master 😃");
    }
}
module.exports = Play;